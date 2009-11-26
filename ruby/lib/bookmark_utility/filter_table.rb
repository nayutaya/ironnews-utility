
module BookmarkUtility
  FilterTable = [
    %r'\Ahttp://car\.nikkei\.co\.jp/release/', # 理由: title要素に記事名が含まれていないため
    %r'\Ahttp://mainichi\.jp/life/money/kabu/nsj/news/', # 理由: title要素に記事名が含まれていないため
    %r'\Ahttp://markets\.nikkei\.co\.jp/', # 理由: title要素に記事名が含まれていないため
    %r'\Ahttp://www\.nikkei\.co\.jp/kyushu/news/', # 理由: title要素に記事名が含まれていないため
    %r'\Ahttp://www\.nikkei\.co\.jp/news/', # 理由: title要素に記事名が含まれていないため
    %r'\Ahttp://www\.pjnews\.net/', # 理由: title要素に記事名が含まれていないため
    %r'\Ahttp://www\.travelvision\.jp/', # 理由: title要素に記事名が含まれていないため
    %r'\Ahttp://www\.wbs\.co\.jp/', # 理由: title要素に記事名が含まれていないため
  ].freeze
end
