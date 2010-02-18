
module IronnewsUtility
  CleanseTitleTable = {
    "gigazine.net" => [
      [%r'\A(.+) - GIGAZINE\Z', '\1'].freeze,
    ].freeze,
    "headlines.yahoo.co.jp" => [
      [%r'\A(.+) - Yahoo!ニュース\Z', '\1'].freeze,
      [%r'\A(.+)（.+）\Z', '\1'].freeze,
    ].freeze,
    "japan.cnet.com" => [
      [%r'\A(.+) - CNET Japan\Z', '\1'].freeze,
    ].freeze,
    "journal.mycom.co.jp" => [
      [%r'\A(.+) \| マイコミジャーナル\Z', '\1'].freeze,
    ].freeze,
    "kyushu.yomiuri.co.jp" => [
      [%r'\A(.+) : 九州発 : YOMIURI ONLINE（読売新聞）\Z', '\1'].freeze,
    ].freeze,
    "mainichi.jp" => [
      [%r'\A(.+) - 毎日ｊｐ\(毎日新聞\)\Z', '\1'].freeze,
      [%r'\A(.+) － 毎日ｊｐ\(毎日新聞\)\Z', '\1'].freeze,
    ].freeze,
    "mytown.asahi.com" => [
      [%r'\Aasahi\.com:(.+)-マイタウン(.+)\Z', '\1 - \2'].freeze,
    ].freeze,
    "news.kanaloco.jp" => [
      [%r'\A(.+)：ローカルニュース : ニュース : カナロコ -- 神奈川新聞社\Z', '\1'].freeze,
    ].freeze,
    "news24.jp" => [
      [%r'\A(.+) \| 日テレNEWS24\Z', '\1'].freeze,
    ].freeze,
    "osaka.yomiuri.co.jp" => [
      [%r'\A(.+) : 関西発 : YOMIURI ONLINE（読売新聞）\Z', '\1'].freeze,
      [%r'\A(.+) : (経済　科学)\Z', '\1'].freeze,
      [%r'\A(.+) : (経済 ピックアップ|特集|ニュース|人 遊 食)\Z', '\1'].freeze,
      [%r'\A(.+) : 地域経済ニュース\Z', '\1'].freeze,
    ].freeze,
    "response.jp" => [
      [%r'\A(.+) \| レスポンス自動車ニュース（Response.jp）\Z', '\1'].freeze,
    ].freeze,
    "rocketnews24.com" => [
      [%r'\A(.+) – ロケットニュース24（β）\Z', '\1'].freeze,
    ].freeze,
    "sankei.jp.msn.com" => [
      [%r'\A(.+) - MSN産経ニュース\Z', '\1'].freeze,
      [%r'\A(.+) \(\d+/\d+ページ\)\Z', '\1'].freeze,
    ].freeze,
    "slashdot.jp" => [
      [%r'\A(.+) - スラッシュドット・ジャパン\Z', '\1'].freeze,
    ].freeze,
    "svr.sanyo.oni.co.jp" => [
      [%r'\A(.+) - 山陽新聞地域ニュース\Z', '\1'].freeze,
    ].freeze,
    "techon.nikkeibp.co.jp" => [
      [%r'\A(.+) - Tech-On！\Z', '\1'].freeze,
    ].freeze,
    "www.47news.jp" => [
      [%r'\A(.+) - 47NEWS（よんななニュース）\Z', '\1'].freeze,
      [%r'\A(.+) - 47NEWS \(よんななニュース\)\Z', '\1'].freeze,
    ].freeze,
    "www.afpbb.com" => [
      [%r'\A(.+)　国際ニュース : AFPBB News\Z', '\1'].freeze,
    ].freeze,
    "www.asahi.com" => [
      [%r'\Aasahi\.com（朝日新聞社）：(.+)\Z', '\1'].freeze,
      [%r'\Aasahi\.com （朝日新聞社）：(.+)\Z', '\1'].freeze,
      [%r'\Aasahi\.com：(.+)\Z', '\1'].freeze,
      [%r'\A(.+) - ことばなるほどね！ - 学ぼう\Z', '\1'].freeze,
      [%r'\A(.+) - 最新ニュース - 読もう\Z', '\1'].freeze,
      [%r'\A(.+) - (社会|国際|トラベル|ビジネス・経済|政治|サイエンス)\Z', '\1'].freeze,
      [%r'\A(.+) - (関西|関西交通・旅ニュース)\Z', '\1'].freeze,
    ].freeze,
    "www.bloomberg.co.jp" => [
      [%r'\A(.+) - Bloomberg\.co\.jp\Z', '\1'].freeze,
    ].freeze,
    "www.business-i.jp" => [
      [%r'\A(.+) - FujiSankei Business i\.／Bloomberg GLOBAL FINANCE\Z', '\1'].freeze,
    ].freeze,
    "www.chugoku-np.co.jp" => [
      [%r'\A(.+) - 中国新聞\Z', '\1'].freeze,
    ].freeze,
    "www.chunichi.co.jp" => [
      [%r'\A中日新聞:(.+)\(CHUNICHI Web\)\Z', '\1'].freeze,
    ].freeze,
    "www.cnn.co.jp" => [
      [%r'\ACNN\.co\.jp：(.+)\Z', '\1'].freeze,
    ].freeze,
    "www.fnn-news.com" => [
      [%r'\AFNNニュース: (.+)\Z', '\1'].freeze,
    ].freeze,
    "www.gifu-np.co.jp" => [
      [%r'\A(.+)(?: |　−　)岐阜新聞 Web\Z', '\1'].freeze,
    ].freeze,
    "www.hokkaido-np.co.jp" => [
      [%r'\A(.+)−北海道新聞\[.+\]\Z', '\1'].freeze,
    ].freeze,
    "www.j-cast.com" => [
      [%r'\A(.+) : J-CAST(?:ニュース|会社ウォッチ|モノウォッチ|テレビウォッチ)\Z', '\1'].freeze,
      [%r'\A(.+) \(\d+/\d+\)\Z', '\1'].freeze,
    ].freeze,
    "www.jiji.com" => [
      [%r'\A時事ドットコム：(.+)\Z', '\1'].freeze,
    ].freeze,
    "www.kahoku.co.jp" => [
      [%r'\A河北新報　東北のニュース／(.+)\Z', '\1'].freeze,
      [%r'\A河北新報 (.+)\Z', '\1'].freeze,
    ].freeze,
    "www.kobe-np.co.jp" => [
      [%r'\A神戸新聞｜(.+)\Z', '\1'].freeze,
      [%r'\A全国海外ニュース｜(.+)\Z', '\1'].freeze,
      [%r'\A事件・事故｜(.+)\Z', '\1'].freeze,
    ].freeze,
    "www.kyoto-np.co.jp" => [
      [%r'\A(.+)：京都新聞\Z', '\1'].freeze,
    ].freeze,
    "www.mutusinpou.co.jp" => [
      [%r'\A(.+) by 陸奥新報\Z', '\1'].freeze,
    ].freeze,
    "www.nagasaki-np.co.jp" => [
      [%r'\A龍〜なが　長崎新聞ホームページ：(.+)\Z', '\1'].freeze,
    ].freeze,
    "www.nhk.or.jp" => [
      [%r'\ANHKニュース　(.+)\Z', '\1'].freeze,
    ].freeze,
    "www.nishinippon.co.jp" => [
      [%r'\A(.+) / 西日本新聞\Z', '\1'].freeze,
    ].freeze,
    "www.tetsudo.com" => [
      [%r'\A(.+) - 鉄道コム\Z', '\1'].freeze,
    ].freeze,
    "www.tokyo-np.co.jp" => [
      [%r'\A東京新聞:(.+)\(TOKYO Web\)\Z', '\1'].freeze,
    ].freeze,
    "www.yomiuri.co.jp" => [
      [%r'\A(.+) : YOMIURI ONLINE（読売新聞）\Z', '\1'].freeze,
      [%r'\A(.+) : (社会|マネー・経済|国際|地域|旅ゅ〜ん！)\Z', '\1'].freeze,
      [%r'\A(.+) : 経済ニュース\Z', '\1'].freeze,
    ].freeze,
  }.freeze
end
