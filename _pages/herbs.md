---
layout: archive
title: "Herbs"
permalink: /herbs/
categories: [herbal-magic, natural-healing]
---

Explore the magical and practical uses of herbs. Below, you'll find plants used in **traditional remedies**, seasonal cures, and **magical practices** from old European and Balkan traditions.

{% assign magical_herbs = site.posts | where_exp:"post","post.categories contains 'herbal-magic'" %}
{% assign healing_herbs = site.posts | where_exp:"post","post.categories contains 'natural-healing'" %}

{% if magical_herbs.size > 0 %}
## Magical Herbs
<ul>
{% for post in magical_herbs %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endif %}

{% if healing_herbs.size > 0 %}
## Herbal Remedies & Healing
<ul>
{% for post in healing_herbs %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endif %}
