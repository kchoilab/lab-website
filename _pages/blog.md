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


<div class="card mb-3" style="border-radius: 15px; border: 1px solid #e0e0e0; box-shadow: none;">
  <div class="card-body p-4">
    <div class="d-flex align-items-center mb-2">
      <div class="rounded-circle bg-light d-flex justify-content-center align-items-center" style="width: 35px; height: 35px; border: 1px solid #ddd;">
        <span style="font-size: 0.8rem; color: #666;">K</span>
      </div>
      <div class="ml-2">
        <span style="font-weight: 600; font-size: 0.95rem;">Kiri Choi</span>
      </div>
    </div>
    
    <h3 class="card-title" style="font-weight: 800; margin-top: 10px;">Open Positions</h3>
    <p class="text-muted" style="font-size: 0.9rem;">2026년 1월 15일</p>
    
    <p class="card-text" style="line-height: 1.6; margin-top: 15px;">
      We are actively recruiting MS/PhD students with backgrounds in Biology, Physics, CS, Statistics, or Bioengineering.
    </p>
  </div>
</div>

<div class="card mb-3" style="border-radius: 15px; border: 1px solid #e0e0e0; box-shadow: none;">
  <div class="card-body p-4">
    <div class="d-flex align-items-center mb-2">
      <div class="rounded-circle bg-light d-flex justify-content-center align-items-center" style="width: 35px; height: 35px; border: 1px solid #ddd;">
        <span style="font-size: 0.8rem; color: #666;">K</span>
      </div>
      <div class="ml-2">
        <span style="font-weight: 600; font-size: 0.95rem;">Kiri Choi</span>
      </div>
    </div>
    
    <h3 class="card-title" style="font-weight: 800; margin-top: 10px;">The CSBLab website is officially live!</h3>
    <p class="text-muted" style="font-size: 0.9rem;">2026년 1월 15일</p>
  </div>
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