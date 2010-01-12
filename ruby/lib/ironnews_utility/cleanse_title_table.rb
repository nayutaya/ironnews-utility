
module BookmarkUtility
  CleanseTitleTable = {
    "mainichi.jp" => [%r'\A(.+) - 毎日ｊｐ\(毎日新聞\)\Z', '\1'].freeze,
    "mytown.asahi.com" => [%r'\Aasahi\.com:(.+)-マイタウン(.+)\Z', '\1 - \2'].freeze,
    "sankei.jp.msn.com" => [%r'\A(.+) - MSN産経ニュース\Z', '\1'].freeze,
    "www.47news.jp" => [%r'\A(.+) - 47NEWS（よんななニュース）\Z', '\1'].freeze,
    "www.asahi.com" => [%r'\Aasahi\.com（朝日新聞社）：(.+)\Z', '\1'].freeze,
    "www.chunichi.co.jp" => [%r'\A中日新聞:(.+)\(CHUNICHI Web\)\Z', '\1'].freeze,
    "www.yomiuri.co.jp" => [%r'\A(.+) : YOMIURI ONLINE（読売新聞）\Z', '\1'].freeze,
    "www.jiji.com" => [%r'\A時事ドットコム：(.+)\Z', '\1'].freeze,
    "slashdot.jp" => [%r'\A(.+) - スラッシュドット・ジャパン\Z', '\1'].freeze,
    "www.tokyo-np.co.jp" => [%r'\A東京新聞:(.+)\(TOKYO Web\)\Z', '\1'].freeze,
    "www.hokkaido-np.co.jp" => [%r'\A(.+)−北海道新聞\[青森からこんにちは\]\Z', '\1'].freeze,
    "japan.cnet.com" => [%r'\A(.+) - CNET Japan\Z', '\1'].freeze,
    "gigazine.net" => [%r'\A(.+) - GIGAZINE\Z', '\1'].freeze,
    "www.kobe-np.co.jp" => [%r'\A神戸新聞｜(.+)\Z', '\1'].freeze,
  }.freeze
end
