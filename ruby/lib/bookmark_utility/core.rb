
require "uri"
require File.join(File.dirname(__FILE__), "canonical_table")
require File.join(File.dirname(__FILE__), "filter_table")
require File.join(File.dirname(__FILE__), "cleanse_title_table")

module BookmarkUtility
  def self.get_canonical_url(url)
    url = url.dup
    CanonicalTable.find { |pattern, replace|
      !!url.sub!(pattern, replace)
    }
    return url
  end

  def self.reject?(url)
    return FilterTable.any? { |pattern| pattern =~ url }
  end

  def self.cleanse_title(url, title)
    table = {
      "mainichi.jp" => [/\A(.+) - 毎日ｊｐ\(毎日新聞\)\Z/, '\1'],
      "www.asahi.com" => [/\Aasahi\.com（朝日新聞社）：(.+)\Z/, '\1'],
      "www.yomiuri.co.jp" => [/\A(.+) : YOMIURI ONLINE（読売新聞）\Z/, '\1'],
    }

    uri = URI.parse(url)
    title = title.dup

    pattern, replace = table[uri.host]
    if pattern
      title.gsub!(pattern, replace)
    end

    return title
  end
end
