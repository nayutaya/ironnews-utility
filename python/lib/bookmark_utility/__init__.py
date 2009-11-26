# -*- coding: utf-8 -*-

import re

from canonical_table import CanonicalTable

class BookmarkUtility:
  FilterTable = [
    re.compile(r"\Ahttp://car\.nikkei\.co\.jp/release/"),
    re.compile(r"\Ahttp://mainichi\.jp/life/money/kabu/nsj/news/"),
    re.compile(r"\Ahttp://markets\.nikkei\.co\.jp/"),
    re.compile(r"\Ahttp://www\.nikkei\.co\.jp/kyushu/news/"),
    re.compile(r"\Ahttp://www\.nikkei\.co\.jp/news/"),
    re.compile(r"\Ahttp://www\.pjnews\.net/"),
    re.compile(r"\Ahttp://www\.travelvision\.jp/"),
    re.compile(r"\Ahttp://www\.wbs\.co\.jp/"),
  ]

  @classmethod
  def get_canonical_url(cls, url):
    url1 = url2 = url
    for (pattern, replace) in CanonicalTable:
      url2 = re.sub(pattern, replace, url1)
      if url2 != url1: break
      url1 = url2

    return url2

  @classmethod
  def reject(cls, url):
    for pattern in cls.FilterTable:
      if pattern.search(url) is not None:
        return True
    return False
