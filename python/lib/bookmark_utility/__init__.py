# -*- coding: utf-8 -*-

import re

class BookmarkUtility:
  @classmethod
  def get_canonical_url(cls, url):
    url = re.sub(r"\A(http:\/\/[a-z]+\.yomiuri\.co\.jp\/.+)\?from=[a-z0-9]+\Z", r"\1", url)
    url = re.sub(r"\A(http:\/\/journal\.mycom\.co\.jp\/.+)\?rt=na\Z", r"\1index.html", url)
    url = re.sub(r"\A(http:\/\/mainichi\.jp\/.+)\?link_id=[A-Z0-9]+\Z", r"\1", url)
    url = re.sub(r"\A(http:\/\/news\.searchina\.ne\.jp\/.+)&pt=large\Z", r"\1", url)
    url = re.sub(r"\A(http:\/\/www\.asahi\.com\/.+)\?ref=rss\Z", r"\1", url)
    url = re.sub(r"\A(http:\/\/www\.chunichi\.co\.jp\/.+)\?ref=rank\Z", r"\1", url)
    url = re.sub(r"\A(http:\/\/www\.jiji\.com\/jc\/c\?g=.+?)&rel=j7(&k=\d+)\Z", r"\1\2", url)
    url = re.sub(r"\A(http:\/\/www\.tetsudo\.com\/.+)\?tag=as\.rss\Z", r"\1", url)

    return url
