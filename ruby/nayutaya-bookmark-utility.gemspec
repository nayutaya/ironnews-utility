
Gem::Specification.new do |s|
  s.specification_version     = 2
  s.required_rubygems_version = Gem::Requirement.new(">= 0")
  s.required_ruby_version     = Gem::Requirement.new(">= 1.8.6")

  s.name    = "nayutaya-bookmark-utility"
  s.version = "0.1.0"
  s.date    = "2009-12-18"

  s.authors = ["Yuya Kato"]
  s.email   = "yuyakato@gmail.com"

  s.summary     = "bookmark-utility"
  s.description = "bookmark-utility"
  s.homepage    = "http://github.com/nayutaya/bookmark-utility/"

  s.rubyforge_project = nil
  s.has_rdoc          = false
  s.require_paths     = ["lib"]

  s.files = [
    "lib/bookmark_utility/canonical_table.rb",
    "lib/bookmark_utility/core.rb",
    "lib/bookmark_utility/filter_table.rb",
    "lib/bookmark_utility/version.rb",
    "lib/bookmark_utility.rb",
    "nayutaya-bookmark-utility.gemspec",
    "nayutaya-bookmark-utility.gemspec.erb",
    "Rakefile",
    "test/alltests.rb",
    "test/canonical_test.rb",
    "test/filter_test.rb",
  ]
  s.test_files = [
    "test/alltests.rb",
    "test/canonical_test.rb",
    "test/filter_test.rb",
  ]
  s.extra_rdoc_files = []
end
