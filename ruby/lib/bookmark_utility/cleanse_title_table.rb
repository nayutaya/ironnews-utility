
module BookmarkUtility
  CleanseTitleTable = {
    "mainichi.jp" => [%r'\A(.+) - 毎日ｊｐ\(毎日新聞\)\Z', '\1'].freeze,
    "sankei.jp.msn.com" => [%r'\A(.+) - MSN産経ニュース\Z', '\1'].freeze,
    "www.asahi.com" => [%r'\Aasahi\.com（朝日新聞社）：(.+)\Z', '\1'].freeze,
    "www.yomiuri.co.jp" => [%r'\A(.+) : YOMIURI ONLINE（読売新聞）\Z', '\1'].freeze,
  }.freeze
end
