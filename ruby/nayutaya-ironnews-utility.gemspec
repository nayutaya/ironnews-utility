
Gem::Specification.new do |s|
  s.specification_version     = 2
  s.required_rubygems_version = Gem::Requirement.new(">= 0")
  s.required_ruby_version     = Gem::Requirement.new(">= 1.8.6")

  s.name    = "nayutaya-ironnews-utility"
  s.version = "0.3.6"
  s.date    = "2010-01-29"

  s.authors = ["Yuya Kato"]
  s.email   = "yuyakato@gmail.com"

  s.summary     = "ironnews-utility"
  s.description = "ironnews-utility"
  s.homepage    = "http://github.com/nayutaya/ironnews-utility/"

  s.rubyforge_project = nil
  s.has_rdoc          = false
  s.require_paths     = ["lib"]

  s.files = [
    "lib/ironnews_utility/canonical_table.rb",
    "lib/ironnews_utility/cleanse_title_table.rb",
    "lib/ironnews_utility/core.rb",
    "lib/ironnews_utility/filter_table.rb",
    "lib/ironnews_utility/version.rb",
    "lib/ironnews_utility.rb",
    "nayutaya-ironnews-utility.gemspec",
    "nayutaya-ironnews-utility.gemspec.erb",
    "Rakefile",
    "test/alltests.rb",
    "test/canonical_test.rb",
    "test/cleanse_title_test.rb",
    "test/filter_test.rb",
  ]
  s.test_files = [
    "test/alltests.rb",
    "test/canonical_test.rb",
    "test/cleanse_title_test.rb",
    "test/filter_test.rb",
  ]
  s.extra_rdoc_files = []
end
