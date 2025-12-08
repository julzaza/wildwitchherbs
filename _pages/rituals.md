---
layout: archive
title: "Rituals"
permalink: /rituals/
---

Practical ritual guides, seasonal rites, solstice work, spellcraft, and ceremonial practices rooted in Old World witchcraft.

{% assign ritual_posts = site.posts | where_exp: "post", "post.categories contains 'witchcraft-ritual'" %}
{% for post in ritual_posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
