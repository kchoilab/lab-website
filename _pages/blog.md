---
layout: default
permalink: /news/ #blog->news로 수
title: news
nav: true
nav_order: 6
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<!-- <div class="post"> -->

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
  {% endif %}

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}

  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
  {% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | relative_url }}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>

{% if post.thumbnail %}

<div class="row">
          <div class="col-sm-9">
{% endif %}
        <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ read_time }} min read &nbsp; &middot; &nbsp;
        {{ post.date | date: '%B %d, %Y' }}
        {% if post.external_source %}
        &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>
      <p class="post-tags">
        <a href="{{ year | prepend: '/blog/' | relative_url }}">
          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>

          {% if tags != "" %}
          &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}

          {% if categories != "" %}
          &nbsp; &middot; &nbsp;
            {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
              <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}
    </p>

{% if post.thumbnail %}

</div>

  <div class="col-sm-3">
    <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>

---

<div style="display: flex; align-items: flex-start; justify-content: flex-start; gap: 40px; margin-bottom: 30px;">
  
  <img src="{{ '/assets/img/kmu_type30.png' | relative_url }}" style="width: 150px; height: auto; flex-shrink: 0;" alt="kmu logo">
  
  <div style="font-size: 0.95rem; line-height: 1.5; border-right: 1px solid #eee; padding-right: 20px; flex-shrink: 0;">
    <a href="https://bioscience.kmu.ac.kr/">Department of Biological Sciences</a> |<br>
    <a href="https://www.kmu.ac.kr/">Keimyung University</a>
  </div>

  <div style="flex-shrink: 0; min-width: 120px;">
    <details style="cursor: pointer;">
      <summary style="list-style: none; font-weight: bold; display: flex; align-items: center; gap: 5px;">
        <span class="sitemap-arrow" style="transition: transform 0.2s ease-in-out; display: inline-block; color: #828282 !important;">▶</span>
        <span>⚙️ Site Map</span>
      </summary>
      <ul style="list-style: none; padding-left: 10px; margin: 10px 0 0 0; line-height: 1.8; border-left: 2px solid #eee; font-size: 0.9rem;">
        <li><a href="https://www.notion.so/People-2e6aef7eb71680b9815bfaeb20ed8351?pvs=21">People</a></li>
        <li><a href="https://www.notion.so/Research-2e6aef7eb716803cb918f4dbbe59da30?pvs=21">Research</a></li>
        <li><a href="https://www.notion.so/Publications-2e6aef7eb71680e28871fdc36e8ab5f0?pvs=21">Publications</a></li>
        <li><a href="https://www.notion.so/Teaching-2e6aef7eb7168015885cfc1aa190aa11?pvs=21">Teaching</a></li>
        <li><a href="https://www.notion.so/Software-2e6aef7eb71680e3a10dc2aeee03ac0b?pvs=21">Software</a></li>
        <li><a href="https://www.notion.so/News-2e6aef7eb71680739767d93511490529?pvs=21">News</a></li>
        <li><a href="https://www.notion.so/Contact-2e6aef7eb71680d48b06d68c4559d76d?pvs=21">Contact</a></li>
      </ul>
    </details>
  </div>

  <div style="flex-shrink: 0;">
    <a href="https://www.notion.so/People-2e6aef7eb71680b9815bfaeb20ed8351?pvs=21" style="color: #666; font-weight: 500;">Join us</a>
  </div>

  <div style="color: #888; font-size: 0.85rem; margin-left: auto; flex-shrink: 0; text-align: right;">
    © 2026 Kiri Choi.<br>All rights reserved.
  </div>
</div>

<style>
  /* 기본 화살표 제거 */
  summary::-webkit-details-marker { display: none; }
  summary { list-style: none; }
  
  /* 클릭 시 화살표 회전 */
  details[open] .sitemap-arrow {
    transform: rotate(90deg);
  }
</style>