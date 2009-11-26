# -*- coding: utf-8 -*-

import unittest

import canonical_test
import filter_test

def suite():
  loader = unittest.defaultTestLoader.loadTestsFromModule
  suites = [
    loader(canonical_test),
    loader(filter_test),
  ]
  return unittest.TestSuite(suites)

if __name__ == "__main__":
  unittest.TextTestRunner(verbosity = 1).run(suite())
