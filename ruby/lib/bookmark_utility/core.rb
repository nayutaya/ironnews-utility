
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

    pattern, replace = CleanseTitleTable[uri.host]
    if pattern
      title.gsub!(pattern, replace)
    end

    return title
  end
end
