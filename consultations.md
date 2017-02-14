---
layout: page
title: Consultations
permalink: /consultations/
---
<ul>
  {% for poll in site.pages %}
    {% if poll.poll == true %}
      <li><a href="{{ poll.url | prepend: site.baseurl }}">{{poll.title}}</a></li>
    {% endif %}
  {% endfor %}
</ul>
