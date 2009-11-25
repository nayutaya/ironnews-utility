
task :default => ["ruby:build", "python:build"] do
end

namespace :ruby do
  desc "generate code for ruby"
  task :build => [:canonical]

  desc "generate canonical table for ruby"
  task :canonical do
    infile  = File.join(File.dirname(__FILE__), "canonical_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "ruby", "lib", "bookmark_utility", "canonical_table.rb")

    File.open(outfile, "wb") { |file|
      file.puts("")
      file.puts("module BookmarkUtility")
      file.puts("  CanonicalTable = [")

      File.foreach(infile).map { |line|
        line.chomp.split(/\t+/)
      }.each { |pattern, replace|
        file.printf("    [%%r'%s', '%s'].freeze,\n", pattern, replace)
      }

      file.puts("  ].freeze")
      file.puts("end")
    }
  end
end

namespace :python do
  desc "generate code for python"
  task :build => [:canonical]

  desc "generate canonical table for python"
  task :canonical do
  end
end
