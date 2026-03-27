---
layout: about
title: Home
permalink: /
subtitle: #<a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: right
  # image: prof_pic.jpg
  # image_circular: false # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

### **Integrative Neuro-Systems Biology Group at Keimyung University**

We study the principles of olfaction, from sensory dynamics to olfactory perception and decision-making.

Using the ***Drosophila* olfactory system** as a model, we explore how the brain transforms complex sensory inputs into optimal behavioral choices. Our research traces the olfactory information processing pipeline across scales: from the physical dynamics of **ligand-receptor binding** to the high-level **neural algorithms** that drive navigation.

We integrate **computational modeling**, **artificial intelligence**, and **quantitative experiments** to understand how biological systems—from signaling pathways to the *Drosophila* brain—process information and respond to their environment.

---


👋 We are recruiting! If you are interested in joining, press [here](https://jsbyun3.github.io/IN-SB-Lab/people/).

---

### **🔬 What we study**

**1. Chemosensory Receptor Dynamics**  
We investigate how cells robustly encode external stimuli by studying the dynamics of chemosensory receptors. We aim to understand the fundamental limits of sensory encoding at the molecular interface.

**2. Olfactory Perception & Decision-Making**  
We investigate how animals make decisions in complex environments. We integrate behavioral experiments and Artificial Intelligence to decode the algorithms of olfactory processing in *Drosophila*.

**3. Information Processing in Biological Systems**  
We use olfaction as a model to uncover universal principles of biological computation. We investigate how biological networks—from biochemical signaling pathways to neural circuits—process information to ensure robust function.

**4. Biological Algorithm Development**  
We develop novel computational methods for network inference, optimization, and clustering to interpret high-dimensional biological data.

<p class="mt-2">
  👉 <a href="{{ '/research/' | relative_url }}">Click here to read more about our research</a>
</p>

---

### **📢 News**
<br>
<div class="news">
  
  {% if site.posts != blank %}
    <div class="row">
      {% assign news_limit = 3 %}
      {% assign posts = site.posts | reverse %}
      {% for item in posts limit: news_limit %}
        <div class="col-sm-4 mb-4">
          <div class="card h-100" style="border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: none;">
            <div class="card-body d-flex flex-column p-4">
              <h3 class="card-title" style="font-weight: 700; font-size: 1.1rem; margin-bottom: 10px;">
                <a href="{{ item.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ item.title }}</a>
              </h3>
              <p class="text-muted" style="font-size: 0.85rem;">{{ item.date | date: "%Y년 %-m월 %d일" }}</p>
              <div class="card-text mt-2" style="font-size: 0.9rem; line-height: 1.5; color: #444;">
                {{ item.content | strip_html | truncatewords: 15 }}
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  {% else %}
    <p>아직 등록된 뉴스가 없습니다. (_posts 폴더를 확인해주세요.)</p>
  {% endif %}
</div>

<p class="mt-2">
  👉 <a href="{{ '/news/' | relative_url }}">Click here to view previous lab news</a>
</p>

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