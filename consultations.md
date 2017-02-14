---
layout: page
title: Consultations
permalink: /consultations/
---
<ul>
  {% for poll in site.pages %}
    {% if poll.poll == true and poll.visible == true %}
      <li><a href="{{ poll.url | prepend: site.baseurl }}"><div class='link-listing'>{{poll.title}}</div></a></li>
    {% endif %}
  {% endfor %}
</ul>
