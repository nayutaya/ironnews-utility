
var BookmarkUtility = {};

BookmarkUtility.cleanse_title = function(url, title) {
console.debug(url);
  var match = url.match(/^http:\/\/(.+?)[\/:]/);
console.debug(match);
  if ( match != null )
  {
    var host = match[1];
    if ( host == "mainichi.jp" ) title = title.replace(" - 毎日ｊｐ(毎日新聞)", "");
    if ( host == "sankei.jp.msn.com" ) title = title.replace(" - MSN産経ニュース", "");
    if ( host == "www.asahi.com" ) title = title.replace("asahi.com（朝日新聞社）：", "");
    if ( host == "www.yomiuri.co.jp" ) title = title.replace(" : YOMIURI ONLINE（読売新聞）", "");
  }
  return title;
};
