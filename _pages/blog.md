---
layout: default
permalink: /news/ #blog->news로 수
title: news
nav: true
nav_order: 6
pagination:
  enabled: false
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: false
  # trail:
  #   before: 1 # The number of links before the current page
  #   after: 3 # The number of links after the current page
---

<div class="post-list">
  {% for post in site.posts %}
  <div class="card mb-3" style="border-radius: 15px; border: 1px solid #e0e0e0; box-shadow: none;">
    <div class="card-body p-4">
      
      <div class="d-flex align-items-center mb-2">
        <div class="rounded-circle bg-light d-flex justify-content-center align-items-center" style="width: 35px; height: 35px; border: 1px solid #ddd;">
          <span style="font-size: 0.8rem; color: #666;">
            {{ post.author | default: "Kiri" | slice: 0 }}
          </span>
        </div>
        <div class="ml-2">
          <span style="font-weight: 600; font-size: 0.95rem;">
            {{ post.author | default: "Kiri Choi" }} 
          </span>
          <span style="color: #888; font-size: 0.85rem; margin-left: 5px;">
            {{ post.date | date: "%-m월 %d일" }} (편집됨)
          </span>
        </div>
      </div>
      
      <h3 class="card-title" style="font-weight: 800; margin-top: 10px; font-size: 1.5rem; color: #333;">
        <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.title }}</a>
      </h3>
      
      <p class="text-muted" style="font-size: 0.95rem; margin-bottom: 15px;">
        {{ post.date | date: "%Y년 %-m월 %d일" }}
      </p>
      
      <div class="card-text" style="line-height: 1.6; color: #444;">
        {{ post.content | strip_html | truncatewords: 40 }}
      </div>

    </div>
  </div>
  {% endfor %}
</div>

---

<div style="display: flex; align-items: flex-start; justify-content: flex-start; gap: 40px; margin-bottom: 30px;">
  
  <img src="{{ '/assets/img/kmu_type30.png' | relative_url }}" style="width: 150px; height: auto; flex-shrink: 0;" alt="kmu logo">
  
  <div style="font-size: 0.95rem; line-height: 1.5; border-right: 1px solid #eee; padding-right: 20px; flex-shrink: 0;">
    <a href="https://bioscience.kmu.ac.kr/">Department of Biological Sciences</a> |<br>
    <a href="https://www.kmu.ac.kr/">Keimyung University</a>
  </div>

  <div style="flex-shrink: 0; min-width: 120px;">
    <details style="cursor: pointer;" ontoggle="if(this.open) {const yOffset = 25; const y = this.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({top: y, behavior: 'smooth'});}">
      <summary style="list-style: none; font-weight: bold; display: flex; align-items: center; gap: 5px;">
        <span class="sitemap-arrow" style="transition: transform 0.2s ease-in-out; display: inline-block; color: #828282 !important;">▶</span>
        <span>⚙️ Site Map</span>
      </summary>
      <ul style="list-style: none; padding-left: 10px; margin: 10px 0 0 0; line-height: 1.8; border-left: 2px solid #eee; font-size: 0.9rem;">
        <li><a href="https://kchoilab.com/people">People</a></li>
        <li><a href="https://kchoilab.com/research">Research</a></li>
        <li><a href="https://kchoilab.com/publications">Publications</a></li>
        <li><a href="https://kchoilab.com/teaching">Teaching</a></li>
        <li><a href="https://kchoilab.com/software">Software</a></li>
        <li><a href="https://kchoilab.com/news">News</a></li>
        <li><a href="https://kchoilab.com/contact">Contact</a></li>
      </ul>
    </details>
  </div>

  <div style="flex-shrink: 0;">
    <a href="https://kchoilab.com/people/#join-us" style="color: #666; font-weight: 500;">Join us</a>
  </div>

  <div style="color: #888; font-size: 0.85rem; margin-left: auto; flex-shrink: 0; text-align: right;">
    © {{ site.time | date: "%Y" }} Kiri Choi.<br>All rights reserved.
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