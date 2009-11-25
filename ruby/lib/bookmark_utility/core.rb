
require File.join(File.dirname(__FILE__), "canonical_table")

module BookmarkUtility
  def self.get_canonical_url(url)
    url = url.dup
    CanonicalTable.each { |pattern, replace|
      if url.sub!(pattern, replace)
        break
      end
    }
    return url
  end

  def self.reject?(url)
    return true if %r'\Ahttp://car\.nikkei\.co\.jp/release/' =~ url
    return true if %r'\Ahttp://mainichi\.jp/life/money/kabu/nsj/news/' =~ url
    return true if %r'\Ahttp://markets\.nikkei\.co\.jp/' =~ url
    return true if %r'\Ahttp://www\.nikkei\.co\.jp/kyushu/news/' =~ url
    return true if %r'\Ahttp://www\.nikkei\.co\.jp/news/' =~ url
    return true if %r'\Ahttp://www\.pjnews\.net/' =~ url
    return true if %r'\Ahttp://www\.travelvision\.jp/' =~ url
    return true if %r'\Ahttp://www\.wbs\.co\.jp/' =~ url
    return false
  end
end
