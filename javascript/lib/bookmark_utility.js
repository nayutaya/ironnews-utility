
var BookmarkUtility = {};

BookmarkUtility.cleanse_title = function(url, title) {
  title = title.replace(" - 毎日ｊｐ(毎日新聞)", "");
  title = title.replace(" - MSN産経ニュース", "");
  title = title.replace("asahi.com（朝日新聞社）：", "");
  title = title.replace(" : YOMIURI ONLINE（読売新聞）", "");
  return title;
};
