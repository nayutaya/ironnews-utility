
module BookmarkUtility
  CanonicalTable = [
    [%r'\A(http://[a-z]+\.yomiuri\.co\.jp/.+)\?from=[a-z0-9]+\Z', '\1'].freeze,
    [%r'\A(http://japan\.cnet\.com/.+)\?ref=rss\Z', '\1'].freeze,
    [%r'\A(http://journal\.mycom\.co\.jp/.+)\?rt=na\Z', '\1index.html'].freeze,
    [%r'\A(http://mainichi\.jp/.+)\?inb=[a-z]+\Z', '\1'].freeze,
    [%r'\A(http://mainichi\.jp/.+)\?link_id=[A-Z0-9]+\Z', '\1'].freeze,
    [%r'\A(http://news\.searchina\.ne\.jp/.+)&pt=large\Z', '\1'].freeze,
    [%r'\A(http://techon\.nikkeibp\.co\.jp/.+)\?ref=rss\Z', '\1'].freeze,
    [%r'\A(http://www\.asahi\.com/.+)\?ref=rss\Z', '\1'].freeze,
    [%r'\A(http://www\.chunichi\.co\.jp/.+)\?ref=rank\Z', '\1'].freeze,
    [%r'\A(http://www\.jiji\.com/.+)&j1\Z', '\1'].freeze,
    [%r'\A(http://www\.jiji\.com/jc/c\?g=.+?)&rel=j7(&k=\d+)\Z', '\1\2'].freeze,
    [%r'\A(http://www\.tetsudo\.com/.+)\?tag=as\.rss\Z', '\1'].freeze,
    [%r'\Ahttp://slashdot\.jp/articles/(\d+/\d+/\d+/\d+)\.shtml', 'http://slashdot.jp/article.pl?sid=\1'].freeze,
  ].freeze
end
