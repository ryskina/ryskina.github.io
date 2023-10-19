---
layout: page
permalink: /publications/
title: publications
description:
years: [2023, 2022, 2021, 2020, 2019, 2017]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<p style="font-size: 0.875rem;margin-top: -1.5rem">
  <span style="color:var(--global-theme-color)">*</span> denotes equal contribution
</p>

<h1>dissertation</h1>

{% bibliography -f thesis %}

<h1>journal articles</h1>

{%- for y in "2023" %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f journal -q @*[year={{y}}]* %}
{% endfor %}

<h1>conference & workshop papers</h1>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<h1>preprints & other</h1>

{% assign years = "2022, 2021" | split: ", " %}
{%- for y in years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f preprints -q @*[year={{y}}]* %}
{% endfor %}

</div>
