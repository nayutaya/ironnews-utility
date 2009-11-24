# -*- coding: utf-8 -*-

import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "lib"))

import unittest
import re
from bookmark_utility import BookmarkUtility

class TestCanonical(unittest.TestCase):
  def setUp(self):
    pass

  def test_get_canonical_url(self):
    file = open(os.path.join(os.path.dirname(__file__), "..", "..", "canonical_cases.txt"))
    for line in file:
      value, expected = re.split(r"\t", line.strip())
      self.assertEqual(expected, BookmarkUtility.get_canonical_url(value))
    file.close()

if __name__ == "__main__":
  unittest.main()
