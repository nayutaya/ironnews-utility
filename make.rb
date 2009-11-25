#! ruby -Ku

patterns = File.open("canonical_patterns.txt", "rb") { |file|
  file.map { |line|
    line.chomp.split(/\t/)
  }
}

File.open("ruby/lib/bookmark_utility/canonical_table.rb", "wb") { |file|
  file.puts("")
  file.puts("module BookmarkUtility")
  file.puts("  CANONICAL_TABLE = [")

  patterns.each { |pattern, replace|
    file.printf("    [/%s/, '%s'],\n", pattern, replace)
  }

  file.puts("  ].freeze.each { |a| a.freeze }")
  file.puts("end")
}

File.open("python/lib/bookmark_utility/canonical_table.py", "wb") { |file|
  file.puts("# -*- coding: utf-8 -*-")
  file.puts("")
  file.puts("import re")
  file.puts("")
  file.puts("CanonicalTable = [")

  patterns.each { |pattern, replace|
    file.printf(%|  (re.compile(r"%s"), r"%s"),\n|, pattern, replace)
  }

  file.puts("]")
}
