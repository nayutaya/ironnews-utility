
var BookmarkUtility = {};

BookmarkUtility.HostPattern = /^http:\/\/(.+?)[\/:]/;

BookmarkUtility.cleanse_title = function(url, title) {
console.debug(url);
  var host = (url.match(BookmarkUtility.HostPattern) || [])[1];
  if ( host != null )
  {
    if ( host == "mainichi.jp" ) title = title.replace(" - 毎日ｊｐ(毎日新聞)", "");
    if ( host == "sankei.jp.msn.com" ) title = title.replace(" - MSN産経ニュース", "");
    if ( host == "www.asahi.com" ) title = title.replace("asahi.com（朝日新聞社）：", "");
    if ( host == "www.yomiuri.co.jp" ) title = title.replace(" : YOMIURI ONLINE（読売新聞）", "");
  }
  return title;
};
