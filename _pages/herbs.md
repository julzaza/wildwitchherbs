---
layout: archive
title: "Herbs"
permalink: /herbs/
categories: [herbal-magic, natural-healing]
---

Explore the magical and practical uses of herbs. Below, you’ll find plants used in **traditional remedies**, seasonal cures, and **magical practices** from old European and Balkan traditions.

{% assign magical_herbs = site.posts | where_exp:"post","post.categories contains 'herbal-magic'" | where_exp:"post","post.teaser or post.image" %}
{% assign healing_herbs = site.posts | where_exp:"post","post.categories contains 'natural-healing'" | where_exp:"post","post.teaser or post.image" %}

{% if magical_herbs.size > 0 %}
## Magical Herbs
<div class="herb-grid">
{% for post in magical_herbs %}
  <div class="herb-card">
    <a href="{{ post.url | relative_url }}">
      {% if post.teaser %}
        <img src="{{ post.teaser | relative_url }}" alt="{{ post.title }}">
      {% elsif post.image %}
        <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
      {% endif %}
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </a>
  </div>
{% endfor %}
</div>
{% endif %}

{% if healing_herbs.size > 0 %}
## Herbal Remedies & Healing
<div class="herb-grid">
{% for post in healing_herbs %}
  <div class="herb-card">
    <a href="{{ post.url | relative_url }}">
      {% if post.teaser %}
        <img src="{{ post.teaser | relative_url }}" alt="{{ post.title }}">
      {% elsif post.image %}
        <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
      {% endif %}
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </a>
  </div>
{% endfor %}
</div>
{% endif %}
