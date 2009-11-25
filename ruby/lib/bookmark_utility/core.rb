
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
end
