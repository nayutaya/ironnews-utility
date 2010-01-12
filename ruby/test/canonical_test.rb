#! ruby -Ku

$:.unshift(File.join(File.dirname(__FILE__), "..", "lib"))

require "test/unit"
require "ironnews_utility"

class CanonicalTest < Test::Unit::TestCase
  def setup
    @module = IronnewsUtility
  end

  def test_get_canonical_url
    cases = File.open(File.join(File.dirname(__FILE__), "..", "..", "canonical_cases.txt"), "rb") { |file|
      file.map { |line|
        line.chomp.split(/\t/)
      }
    }
    cases.each { |value, expected|
      assert_equal(expected, @module.get_canonical_url(value), value)
    }
  end
end
