
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
    uri = URI.parse(url)
    title = title.dup
    title.gsub!(/ - 毎日ｊｐ\(毎日新聞\)\z/, "") if uri.host == "mainichi.jp"
    title.gsub!(/\Aasahi\.com（朝日新聞社）：/, "") if uri.host == "www.asahi.com"
    title.gsub!(/ : YOMIURI ONLINE（読売新聞）\z/, "") if uri.host == "www.yomiuri.co.jp"
    return title
  end
end
