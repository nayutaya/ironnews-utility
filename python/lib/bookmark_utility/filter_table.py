# -*- coding: utf-8 -*-

import re

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
