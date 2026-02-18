---
layout: default
title: Wild Witch Herbs Blog
permalink: /blog/
---

<div class="archive-intro" style="max-width:1000px;margin:0 auto;padding-bottom:2rem;">
  <p>Enter the herbal grimoire — a living archive of plant lore, ritual craft, and ancestral witchcraft traditions. Each post explores the deeper magic of herbs, from protection and purification to fertility, spirit work, and folk healing.</p>
</div>

<div class="archive-entries" style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:1200px;margin:0 auto;">
  {% for post in site.posts %}
    {% include archive-grid-item.html post=post %}
  {% endfor %}
</div>
