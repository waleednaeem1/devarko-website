#!/usr/bin/env python3
"""Turn the 9 service cards on /services/ and / into links to their detail pages."""
import re, io, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MAP = {
    "Custom Software": "custom-software",
    "AI Solutions &amp; Automation": "ai-solutions",
    "Web Applications": "web-applications",
    "Mobile Apps": "mobile-apps",
    "CRM Solutions": "crm-solutions",
    "Cloud &amp; DevOps": "cloud-devops",
    "UI/UX &amp; Product Design": "ui-ux-design",
    "QA &amp; Testing": "qa-testing",
    "SEO &amp; Digital Marketing": "seo-marketing",
}

ARROW = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
         'stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>')


def card_block(html, title):
    """Return (start, end) span of the <article class="card...">...</article> holding this title."""
    t = re.search(r'<h3 class="card__title">' + re.escape(title) + r'</h3>', html)
    if not t:
        return None
    start = html.rfind('<article class="card', 0, t.start())
    if start == -1:
        return None
    end = html.find('</article>', t.end())
    if end == -1:
        return None
    return start, end + len('</article>')


def convert(path, add_learn_more):
    html = io.open(path, encoding='utf-8').read()
    orig = html
    done = 0
    for title, slug in MAP.items():
        span = card_block(html, title)
        if not span:
            print(f"    ! card not found: {title}")
            continue
        s, e = span
        block = html[s:e]
        if f'/services/{slug}/' in block:
            continue  # already linked
        new = block
        # <article class="card ..." ...>  ->  <a class="card ... card--link" href="...">
        new = re.sub(r'^<article class="card([^"]*)"',
                     lambda m: f'<a class="card{m.group(1)} card--link" href="/services/{slug}/"',
                     new, count=1)
        new = new[:new.rfind('</article>')] + '</a>'
        if add_learn_more and 'card__link' not in new:
            insert = (f'\n            <span class="card__link">Learn more {ARROW}</span>\n          ')
            new = new[:new.rfind('</a>')] + insert + '</a>'
        else:
            # retarget an existing "Learn more" link (homepage cards)
            new = new.replace('<a class="card__link" href="/services/">',
                              f'<span class="card__link">').replace('</a>\n          </a>', '</span>\n          </a>')
        html = html[:s] + new + html[e:]
        done += 1
    if html != orig:
        io.open(path, 'w', encoding='utf-8').write(html)
    print(f"  {os.path.relpath(path, ROOT)}: linked {done} cards")


if __name__ == "__main__":
    convert(os.path.join(ROOT, "services", "index.html"), add_learn_more=True)
    convert(os.path.join(ROOT, "index.html"), add_learn_more=False)
