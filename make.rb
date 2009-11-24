#! ruby -Ku

patterns = File.open("canonical_patterns.txt", "rb") { |file|
  file.map { |line|
    line.chomp.split(/\t/)
  }
}

File.open("ruby/lib/bookmark_utility/canonical.rb", "wb") { |file|
  file.puts("")
  file.puts("module BookmarkUtility")
  file.puts("  CANONICAL_TABLE = [")

  patterns.each { |pattern, replace|
    file.printf("    [/%s/, '%s'],\n", pattern, replace)
  }

  file.puts("  ].freeze.each { |a| a.freeze }")
  file.puts("end")
}
