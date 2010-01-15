
task :default => [:build, :test]

desc "generate codes"
task :build => ["ruby:build", "python:build", "js:build"]

desc "run tests (default task)"
task :test => ["ruby:test", "python:test"]

namespace :ruby do
  desc "generate codes of ruby version"
  task :build => [:canonical, :filter, :cleanse]

  desc "generate canonical table of ruby version"
  task :canonical do
    infile  = File.join(File.dirname(__FILE__), "canonical_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "ruby", "lib", "ironnews_utility", "canonical_table.rb")

    File.open(outfile, "wb") { |file|
      file.puts("")
      file.puts("module IronnewsUtility")
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
    outfile = File.join(File.dirname(__FILE__), "ruby", "lib", "ironnews_utility", "filter_table.rb")

    File.open(outfile, "wb") { |file|
      file.puts("")
      file.puts("module IronnewsUtility")
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

  desc "generate cleanse title table of ruby version"
  task :cleanse do
    infile  = File.join(File.dirname(__FILE__), "cleanse_title_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "ruby", "lib", "ironnews_utility", "cleanse_title_table.rb")

    table = {}
    File.foreach(infile).map { |line|
      line.chomp.split(/\t+/)
    }.each { |host, pattern, replace|
      table[host] ||= []
      table[host] << [pattern, replace]
    }

    File.open(outfile, "wb") { |file|
      file.puts("")
      file.puts("module IronnewsUtility")
      file.puts("  CleanseTitleTable = {")

      table.to_a.sort_by { |k, v| k }.each { |host, patterns|
        file.printf(%|    "%s" => [\n|, host)
        patterns.each { |pattern, replace|
          file.printf(%|      [%%r'%s', '%s'].freeze,\n|, pattern, replace)
        }
        file.printf(%|    ].freeze,\n|)
      }

      file.puts("  }.freeze")
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
    outfile = File.join(File.dirname(__FILE__), "python", "lib", "ironnews_utility", "canonical_table.py")

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
    outfile = File.join(File.dirname(__FILE__), "python", "lib", "ironnews_utility", "filter_table.py")

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

namespace :js do
  desc "[JS] generate codes"
  task :build => [:cleanse, :cleanse_test]

  desc "[JS] generate cleanse title table"
  task :cleanse do
    infile  = File.join(File.dirname(__FILE__), "cleanse_title_patterns.txt")
    outfile = File.join(File.dirname(__FILE__), "javascript", "lib", "ironnews_utility.js")

    src = File.open(outfile, "rb") { |file| file.read }

    code = ""
    File.foreach(infile).map { |line|
      line.chomp.split(/\t+/)
    }.each { |host, pattern, replace|
      pattern.sub!(/\\A/, "^")
      pattern.sub!(/\\Z/, "$")
      replace.gsub!(/\\(\d)/) { "$#{$1}" }
      code += format(%|  "%s": [/%s/, "%s"],\n|, host, pattern, replace)
    }

    start_mark = "//<CleanseTitleTable>"
    end_mark   = "//</CleanseTitleTable>"
    src.sub!(/#{start_mark}.*#{end_mark}/m) { "#{start_mark}\n#{code.chomp}\n#{end_mark}" }

    File.open(outfile, "wb") { |file| file.write(src) }
  end

  desc "[JS] generate cleanse title table test"
  task :cleanse_test do
    infile  = File.join(File.dirname(__FILE__), "cleanse_title_cases.txt")
    outfile = File.join(File.dirname(__FILE__), "javascript", "test", "cleanse_title_cases.js")

    src = File.open(outfile, "rb") { |file| file.read }

    code = ""
    File.foreach(infile).map { |line|
      line.chomp.split(/\t+/)
    }.each { |url, input, output|
      code += format(%|  ["%s","%s","%s"],\n|, url, input, output)
    }

    start_mark = "//<CleanseTitleCases>"
    end_mark   = "//</CleanseTitleCases>"
    src.sub!(/#{start_mark}.*#{end_mark}/m) { "#{start_mark}\n#{code.chomp}\n#{end_mark}" }

    File.open(outfile, "wb") { |file| file.write(src) }
  end
end
