# -*- coding: utf-8 -*-

import unittest

import canonical_test

def suite():
  loader = unittest.defaultTestLoader.loadTestsFromModule
  suites = [
    loader(canonical_test),
  ]
  return unittest.TestSuite(suites)

if __name__ == "__main__":
  unittest.TextTestRunner(verbosity = 1).run(suite())
