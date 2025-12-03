---
layout: category
title: "Herbal Magic & Materia Magica"
description: "Herbal profiles, plant spirits, magical uses of herbs, Artemisia lore, and traditional materia magica."
categories: [herbal-magic-materia-magica]
meta_description: "Explore magical herbs, plant spirits, and traditional materia magica. Discover Artemisia lore, magical uses, and herbal wisdom for modern witchcraft."
schema_type: "CollectionPage"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Herbal Magic & Materia Magica",
  "description": "Herbal profiles, plant spirits, magical uses of herbs, Artemisia lore, and traditional materia magica.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Wild Witchy Herbs"
  },
  "about": [
    { "@type": "Thing", "name": "herbal magic" },
    { "@type": "Thing", "name": "materia magica" },
    { "@type": "Thing", "name": "magical herbs" },
    { "@type": "Thing", "name": "Artemisia" }
  ]
}
</script>

Welcome to the **Herbal Magic & Materia Magica** category. Explore herbal profiles, magical uses of plants, Artemisia lore, and the traditional materia magica that has inspired witches for centuries.

### Featured Posts:
{% for post in site.categories.herbal-magic-materia-magica %}
- [{{ post.title }}]({{ post.url }}) – {{ post.excerpt | strip_html | truncate: 120 }}
{% endfor %}
