---
layout: archive
title: "个人简历"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

教育背景
======

<div class="cv-education">
  <article class="cv-education__item">
    <div class="cv-education__details">
      <strong class="cv-education__school">西安交通大学</strong>
      <span class="cv-education__school-en">Xi'an Jiaotong University</span>
      <span class="cv-education__degree">硕士 · 储能科学与工程</span>
      <span class="cv-education__college">未来技术学院</span>
    </div>
    <div class="cv-education__date">2026.09 – 至今</div>
  </article>
  <article class="cv-education__item">
    <div class="cv-education__details">
      <strong class="cv-education__school">河南大学</strong>
      <span class="cv-education__school-en">Henan University</span>
      <span class="cv-education__degree">本科 · 电子信息科学与技术</span>
      <span class="cv-education__college">迈阿密学院</span>
    </div>
    <div class="cv-education__date">2022.09 – 2026.06</div>
  </article>
</div>

Work experience
======
* Spring 2024: Academic Pages Collaborator
  * GitHub University
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Fall 2015: Research Assistant
  * GitHub University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

* Summer 2015: Research Assistant
  * GitHub University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
