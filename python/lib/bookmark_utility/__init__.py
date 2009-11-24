# -*- coding: utf-8 -*-

import re

class BookmarkUtility:
  @classmethod
  def get_canonical_url(cls, url):
    p = re.compile(r"\A(http://journal\.mycom\.co\.jp/.+)\?rt=na\Z")
    return re.sub(p, r"\1index.html", url)
