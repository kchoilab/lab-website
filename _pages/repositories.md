---
layout: page
permalink: /software/ #repositiories -> software
title: Software
# description: Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
nav: true
nav_order: 5
---

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
  <img src="{{ '/assets/img/tellurium_logo.png' | relative_url }}" style="width: 80px; height: auto;" alt="Tellurium Logo">
  
  <h2 style="margin: 0; border: none;">Tellurium</h2>
</div>

<p>An integrated Python-based environment for model building, simulation, and analysis. It allows researchers to write human-readable models in Antimony and simulate them instantly using the Python scientific stack. It features first-class support for community standards (SBML, SED-ML, COMBINE).</p>

To use:

```jsx
pip install tellurium
```

[**[Github]**](https://github.com/sys-bio/tellurium) | [**[Documentation]**](https://tellurium.readthedocs.io/en/latest/)
<br>
<br>
<br>

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
  <img src="{{ '/assets/img/libroadrunner_logo_tan.jpg' | relative_url }}" style="width: 80px; height: auto;" alt="libRoadRunner Logo">
  
  <h2 style="margin: 0; border: none;">TlibRoadRunner</h2>
</div>

<p>A high-performance SBML simulation engine that uses LLVM JIT compilation to simulate massive biochemical networks in milliseconds. It supports deterministic (ODE), stochastic (Gillespie), and metabolic control analysis (MCA), and can be deployed as a standalone library for large-scale ensemble modeling.</p>

To use:

```jsx
pip install libroadrunner
```

[**[Github]**](https://github.com/sys-bio/roadrunner) | [**[Documentation]**](https://libroadrunner.readthedocs.io/en/latest/)
<br>
<br>
<br>

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
  
  <h2 style="margin: 0; border: none;">metaMEG</h2>
</div>

<p>A meta-modeling algorithm for biochemical reaction networks. It uses evolutionary algorithms to generate model ensembles from perturbation studies, allowing researchers to explore network topology and parameter space effectively to solve inverse problems.</p>

[**[Github]**](https://github.com/kirichoi/evoMEG)
<br>
<br>
<br>

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
  <img src="{{ '/assets/img/phrasedml_logo.png' | relative_url }}" style="width: 80px; height: auto;" alt="phraSED-ML Logo">
  
  <h2 style="margin: 0; border: none;">phraSED-ML</h2>
</div>

<p>A human-readable simulation setup language. It converts complex, XML-based simulation protocols (SED-ML) into a clean, paraphrased format, allowing users to describe simulation experiments and plotting instructions using simple text.
</p>

To use:

```jsx
pip install phrasedml
```

[**[Github]**](https://github.com/sys-bio/roadrunner)
<br>
<br>
<br>

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
  
  <h2 style="margin: 0; border: none;">netplotlib</h2>
</div>

<p>A purely Python-based visualization tool for biochemical reaction networks. Built on NetworkX and Matplotlib, it enables the programmatic generation of publication-quality network diagrams directly from code or model files.
</p>

To use:

```jsx
pip install netplotlib
```

[**[Github]**](https://github.com/kirichoi/netplotlib) | [**[Documentation]**](https://netplotlib.readthedocs.io/en/latest/)
<br>
<br>

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