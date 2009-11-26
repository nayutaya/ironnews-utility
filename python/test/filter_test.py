# -*- coding: utf-8 -*-

import unittest
import re
import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "..", "lib"))
from bookmark_utility import BookmarkUtility

class TestFilter(unittest.TestCase):
  def setUp(self):
    pass

  def test_reject__ok(self):
    file = open(os.path.join(os.path.dirname(__file__), "..", "..", "filter_cases_ok.txt"))
    for line in file:
      url = line.strip()
      self.assertEqual(
        (url, False),
        (url, BookmarkUtility.reject(url)))
    file.close()

  def test_reject__ng(self):
    file = open(os.path.join(os.path.dirname(__file__), "..", "..", "filter_cases_ng.txt"))
    for line in file:
      url = line.strip()
      self.assertEqual(
        (url, True),
        (url, BookmarkUtility.reject(url)))
    file.close()

if __name__ == "__main__":
  unittest.main()
