#! ruby -Ku

$:.unshift(File.join(File.dirname(__FILE__), "..", "lib"))

require "test/unit"
require "ironnews_utility"

class CleanseTitleTest < Test::Unit::TestCase
  def setup
    @module = IronnewsUtility
  end

  def test_cleanse_title
    cases = File.open(File.join(File.dirname(__FILE__), "..", "..", "cleanse_title_cases.txt"), "rb") { |file|
      file.map { |line|
        line.chomp.split(/\t/)
      }
    }
    cases.each { |url, title, expected|
      assert_equal(expected, @module.cleanse_title(url, title), title)
    }
  end
end
