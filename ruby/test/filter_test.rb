#! ruby -Ku

$:.unshift(File.join(File.dirname(__FILE__), "..", "lib"))

require "test/unit"
require "bookmark_utility"

class FilterTest < Test::Unit::TestCase
  def setup
    @module = BookmarkUtility
  end

  def test_reject__ok
    File.foreach(File.join(File.dirname(__FILE__), "..", "..", "filter_cases_ok.txt")) { |line|
      url = line.chomp
      assert_equal(false, @module.reject?(url), url)
    }
  end

  def test_reject__ng
    File.foreach(File.join(File.dirname(__FILE__), "..", "..", "filter_cases_ng.txt")) { |line|
      url = line.chomp
      assert_equal(true, @module.reject?(url), url)
    }
  end
end
