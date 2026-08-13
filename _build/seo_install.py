#!/usr/bin/env python3
"""Install analytics + search-console verification + enhanced schema across the site.

Idempotent: safe to re-run. Everything is keyed off the CONFIG block below,
so changing an ID here updates every page in one go.
"""
import os, re, io, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ─── CONFIG — change these in ONE place ───────────────────────────────────
GA4_ID   = "G-V0SX4RYSTY"          # Google Analytics 4 Measurement ID
GSC_TOKEN = "fDKv5lr4SHsABkHuOuhuNKrJRsX0ZEbBDc4P1kvFKj0"  # Search Console → HTML tag → content="..."
GTM_ID    = "GTM-TDKV5XPW"          # Google Tag Manager container
SITE      = "https://codesummix.com"
# ──────────────────────────────────────────────────────────────────────────

GA_BLOCK = ""

GSC_TAG = f'  <meta name="google-site-verification" content="{GSC_TOKEN}">'

GTM_HEAD = f"""  <!-- Google Tag Manager -->
  <script>
  (function(){{
    var fired=false;
    function csmTags(){{
      if(fired)return;fired=true;
      (function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({{'gtm.start':new Date().getTime(),event:'gtm.js'}});
      var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      }})(window,document,'script','dataLayer','{GTM_ID}');
      var g=document.createElement('script');g.async=true;
      g.src='https://www.googletagmanager.com/gtag/js?id={GA4_ID}';
      document.head.appendChild(g);
      window.dataLayer=window.dataLayer||[];
      function gtag(){{dataLayer.push(arguments);}}
      window.gtag=window.gtag||gtag;
      gtag('js',new Date());
      gtag('config','{GA4_ID}',{{anonymize_ip:true}});
    }}
    if(document.readyState==='complete'){{setTimeout(csmTags,300);}}
    else{{window.addEventListener('load',function(){{setTimeout(csmTags,300);}});}}
    ['pointerdown','keydown','touchstart','scroll'].forEach(function(e){{
      window.addEventListener(e,csmTags,{{once:true,passive:true}});
    }});
  }})();
  </script>
  <!-- End Google Tag Manager -->"""

GTM_BODY = f"""  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={GTM_ID}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->"""

PRECONNECT = """  <link rel="preconnect" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">"""


def strip_existing(s):
    """Remove any previously-injected block so re-runs stay clean."""
    s = re.sub(r'\n?  <!-- Google tag \(gtag\.js\)[\s\S]*?</script>\n?  <script>[\s\S]*?</script>', '', s)
    s = re.sub(r'\n?  <!-- Google tag \(gtag\.js\)[\s\S]*?gtag\(\'config\'[\s\S]*?</script>', '', s)
    s = re.sub(r'\n?  <meta name="google-site-verification"[^>]*>', '', s)
    s = re.sub(r'\n?  <link rel="preconnect" href="https://www\.googletagmanager\.com">', '', s)
    s = re.sub(r'\n?  <link rel="dns-prefetch" href="https://www\.googletagmanager\.com">', '', s)
    s = re.sub(r'\n?  <!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->', '', s)
    s = re.sub(r'\n?  <!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->', '', s)
    return s


def install(path):
    s = io.open(path, encoding='utf-8').read()
    orig = s
    s = strip_existing(s)
    # inject right after <meta charset...> so the tag loads early
    anchor = '<meta name="viewport"'
    i = s.find(anchor)
    if i == -1:
        return False, "no viewport meta"
    line_end = s.find('>', i) + 1
    block = "\n" + GSC_TAG + "\n" + PRECONNECT + "\n" + GTM_HEAD
    s = s[:line_end] + block + s[line_end:]
    # GTM noscript must sit immediately after <body>
    m = re.search(r'<body[^>]*>', s)
    if m:
        s = s[:m.end()] + "\n" + GTM_BODY + s[m.end():]
    if s != orig:
        io.open(path, 'w', encoding='utf-8').write(s)
    return True, "ok"


def main():
    files = [f for f in glob.glob(os.path.join(ROOT, '**', '*.html'), recursive=True)
             if '/_build/' not in f and '/brand.html' not in f and '/.' not in f.replace(ROOT, '')]
    done = 0
    for f in sorted(files):
        ok, msg = install(f)
        if ok:
            done += 1
        else:
            print(f"  ! {os.path.relpath(f, ROOT)}: {msg}")
    print(f"analytics + verification installed on {done}/{len(files)} pages")
    if GSC_TOKEN.startswith("PASTE"):
        print("  NOTE: GSC token is still a placeholder — replace GSC_TOKEN and re-run.")


if __name__ == '__main__':
    main()
