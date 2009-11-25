
task :default => :test
task :build => ["ruby:build", "python:build"]
task :test => ["ruby:test", "python:test"]

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

  desc "run tests for ruby"
  task :test do
    target = File.join(File.dirname(__FILE__), "ruby", "test", "alltests.rb")
    sh "ruby #{target}"
  end
end

namespace :python do
  desc "generate code for python"
  task :build => [:canonical]

  desc "generate canonical table for python"
  task :canonical do
    infile  = File.join(File.dirname(__FILE__), "canonical_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "python", "lib", "bookmark_utility", "canonical_table.py")

    File.open(outfile, "wb") { |file|
      file.puts("# -*- coding: utf-8 -*-")
      file.puts("")
      file.puts("import re")
      file.puts("")
      file.puts("CanonicalTable = [")

      File.foreach(infile).map { |line|
        line.chomp.split(/\t+/)
      }.each { |pattern, replace|
        file.printf(%|  (re.compile(r"%s"), r"%s"),\n|, pattern, replace)
      }

      file.puts("]")
    }
  end

  desc "run tests for a library of Python"
  task :test do
    target = File.join(File.dirname(__FILE__), "python", "test", "alltests.py")
    sh "python #{target}"
  end
end
