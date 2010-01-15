
var IronnewsUtility = {};

IronnewsUtility.HostPattern = /^http:\/\/(.+?)[\/:]/;

IronnewsUtility.CleanseTitleTable = {
//<CleanseTitleTable>
  "gigazine.net": [[/^(.+) - GIGAZINE$/, "$1"]],
  "japan.cnet.com": [[/^(.+) - CNET Japan$/, "$1"]],
  "mainichi.jp": [[/^(.+) - 毎日ｊｐ\(毎日新聞\)$/, "$1"]],
  "mytown.asahi.com": [[/^asahi\.com:(.+)-マイタウン(.+)$/, "$1 - $2"]],
  "sankei.jp.msn.com": [[/^(.+) - MSN産経ニュース$/, "$1"]],
  "slashdot.jp": [[/^(.+) - スラッシュドット・ジャパン$/, "$1"]],
  "www.47news.jp": [[/^(.+) - 47NEWS（よんななニュース）$/, "$1"]],
  "www.asahi.com": [[/^asahi\.com（朝日新聞社）：(.+)$/, "$1"]],
  "www.chunichi.co.jp": [[/^中日新聞:(.+)\(CHUNICHI Web\)$/, "$1"]],
  "www.hokkaido-np.co.jp": [[/^(.+)−北海道新聞\[青森からこんにちは\]$/, "$1"]],
  "www.jiji.com": [[/^時事ドットコム：(.+)$/, "$1"]],
  "www.kobe-np.co.jp": [[/^神戸新聞｜(.+)$/, "$1"],[/^全国海外ニュース｜(.+)$/, "$1"]],
  "www.tokyo-np.co.jp": [[/^東京新聞:(.+)\(TOKYO Web\)$/, "$1"]],
  "www.yomiuri.co.jp": [[/^(.+) : YOMIURI ONLINE（読売新聞）$/, "$1"]],
//</CleanseTitleTable>
  end: null
};

IronnewsUtility.cleanse_title = function(url, title) {
  var host     = (url.match(IronnewsUtility.HostPattern) || [])[1];
  var patterns = IronnewsUtility.CleanseTitleTable[host] || [];
  for ( var i = 0; i < patterns.length; i++ )
  {
    var pattern = patterns[i][0];
    var replace = patterns[i][1];
    title = title.replace(pattern, replace);
  }
  return title;
};
