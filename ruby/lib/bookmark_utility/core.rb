
require File.join(File.dirname(__FILE__), "canonical_table")
require File.join(File.dirname(__FILE__), "filter_table")

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
end
