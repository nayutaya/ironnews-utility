
task :default => [:build, :test]

desc "generate codes"
task :build => ["ruby:build", "python:build"]

desc "run tests (default task)"
task :test => ["ruby:test", "python:test"]

namespace :ruby do
  desc "generate codes of ruby version"
  task :build => [:canonical, :filter]

  desc "generate canonical table of ruby version"
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

  desc "generate filter table of ruby version"
  task :filter do
    infile  = File.join(File.dirname(__FILE__), "filter_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "ruby", "lib", "bookmark_utility", "filter_table.rb")

    File.open(outfile, "wb") { |file|
      file.puts("")
      file.puts("module BookmarkUtility")
      file.puts("  FilterTable = [")

      File.foreach(infile).map { |line|
        line.chomp.split(/\t+/)
      }.each { |pattern, comment|
        file.printf("    %%r'%s', # %s\n", pattern, comment)
      }

      file.puts("  ].freeze")
      file.puts("end")
    }
  end

  desc "run tests of ruby version"
  task :test do
    target = File.join(File.dirname(__FILE__), "ruby", "test", "alltests.rb")
    sh "ruby #{target}"
  end
end

namespace :python do
  desc "generate codes of python version"
  task :build => [:canonical, :filter]

  desc "generate canonical table of python version"
  task :canonical do
    infile  = File.join(File.dirname(__FILE__), "canonical_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "python", "lib", "bookmark_utility", "canonical_table.py")

    File.open(outfile, "wb") { |file|
      file.puts("# -*- coding: utf-8 -*-")
      file.puts("")
      file.puts("import re")
      file.puts("")
      file.puts("CanonicalTable = (")

      File.foreach(infile).map { |line|
        line.chomp.split(/\t+/)
      }.each { |pattern, replace|
        file.printf(%"  (re.compile(r'%s'), r'%s'),\n", pattern, replace)
      }

      file.puts(")")
    }
  end

  desc "generate filter table of python version"
  task :filter do
    infile  = File.join(File.dirname(__FILE__), "filter_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "python", "lib", "bookmark_utility", "filter_table.py")

    File.open(outfile, "wb") { |file|
      file.puts("# -*- coding: utf-8 -*-")
      file.puts("")
      file.puts("import re")
      file.puts("")
      file.puts("FilterTable = (")

      File.foreach(infile).map { |line|
        line.chomp.split(/\t+/)
      }.each { |pattern, comment|
        file.printf("  re.compile(r'%s'), # %s\n", pattern, comment)
      }

      file.puts(")")
    }
  end

  desc "run tests of python version"
  task :test do
    target = File.join(File.dirname(__FILE__), "python", "test", "alltests.py")
    sh "python #{target}"
  end
end
