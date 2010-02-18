
var CleanseTitleCases = [
//<CleanseTitleCases>
  ["http://gigazine.net/index.php?/news/comments/20091120_pdp_lcd/","液晶テレビよりも消費電力の低いプラズマテレビをパナソニックが発売へ - GIGAZINE","液晶テレビよりも消費電力の低いプラズマテレビをパナソニックが発売へ"],
  ["http://gigazine.net/index.php?/news/comments/20091125_coma/","23年間植物状態と思われていた男性に実はずっと意識があったことが判明 - GIGAZINE","23年間植物状態と思われていた男性に実はずっと意識があったことが判明"],
  ["http://headlines.yahoo.co.jp/hl?a=20091104-00000152-jij-soci","年末年始に初の往復割引＝「1000円」高速対抗も−JR東（時事通信） - Yahoo!ニュース","年末年始に初の往復割引＝「1000円」高速対抗も−JR東"],
  ["http://headlines.yahoo.co.jp/hl?a=20091104-00000607-san-bus_all","ＪＲ東が大幅割引　「１０００円高速」に対抗（産経新聞） - Yahoo!ニュース","ＪＲ東が大幅割引　「１０００円高速」に対抗"],
  ["http://japan.cnet.com/clip/global/story/0,3800097347,20404149,00.htm","グーグル、「Google Reader」にファビコン機能を追加:ニュースクリップ - CNET Japan","グーグル、「Google Reader」にファビコン機能を追加:ニュースクリップ"],
  ["http://japan.cnet.com/clip/global/story/0,3800097347,20404336,00.htm","波力発電装置「Oyster」、スコットランド沖合で稼働開始:ニュースクリップ - CNET Japan","波力発電装置「Oyster」、スコットランド沖合で稼働開始:ニュースクリップ"],
  ["http://journal.mycom.co.jp/articles/2010/01/07/gumblar/index.html","【レポート】ウイルス「Gumblar」が企業サイトを改竄 - JR東日本、ホンダ、モロゾフなど | 経営 | マイコミジャーナル","【レポート】ウイルス「Gumblar」が企業サイトを改竄 - JR東日本、ホンダ、モロゾフなど | 経営"],
  ["http://journal.mycom.co.jp/news/2009/11/09/027/index.html","明治時代製造、現役最古のボギー電車が営業運行 - 長崎電軌軌道開通記念 | ライフ | マイコミジャーナル","明治時代製造、現役最古のボギー電車が営業運行 - 長崎電軌軌道開通記念 | ライフ"],
  ["http://kyushu.yomiuri.co.jp/keizai/detail/20091222-OYS1T00758.htm","新博多駅ビル７割完成　ＪＲ九州社長らが上棟式 : 九州経済 : 九州発 : YOMIURI ONLINE（読売新聞）","新博多駅ビル７割完成　ＪＲ九州社長らが上棟式 : 九州経済"],
  ["http://kyushu.yomiuri.co.jp/keizai/detail/20091225-OYS1T00202.htm","ＪＲ九州 上海で飲食業展開へ、来年中に現地事務所 : 九州経済 : 九州発 : YOMIURI ONLINE（読売新聞）","ＪＲ九州 上海で飲食業展開へ、来年中に現地事務所 : 九州経済"],
  ["http://mainichi.jp/area/iwate/news/20100107ddlk03020059000c.html","賞味期限切れ：南足柄・最乗寺売店、「きなこ飴」販売－－伊豆箱根鉄道直営　／神奈川 - 毎日ｊｐ(毎日新聞)","賞味期限切れ：南足柄・最乗寺売店、「きなこ飴」販売－－伊豆箱根鉄道直営　／神奈川"],
  ["http://mainichi.jp/area/osaka/news/20100107ddlk27040396000c.html","献血：よろしくね　大阪のホテルスタッフが協力呼びかけ－－ＪＲ大阪駅前　／大阪 - 毎日ｊｐ(毎日新聞)","献血：よろしくね　大阪のホテルスタッフが協力呼びかけ－－ＪＲ大阪駅前　／大阪"],
  ["http://mainichi.jp/select/biz/news/20091112k0000m020153000c.html","東北新幹線：「はやて」廃止へ　新型導入で列車名公募 － 毎日ｊｐ(毎日新聞)","東北新幹線：「はやて」廃止へ　新型導入で列車名公募"],
  ["http://mainichi.jp/select/biz/news/20091126k0000m010145000c.html","整備新幹線：未着工区間見送り…１０年度予算で方針 － 毎日ｊｐ(毎日新聞)","整備新幹線：未着工区間見送り…１０年度予算で方針"],
  ["http://mytown.asahi.com/aichi/news.php?k_id=24000000912030001","asahi.com:尾張旭の機関車　岐阜・下呂へ-マイタウン愛知","尾張旭の機関車　岐阜・下呂へ - 愛知"],
  ["http://mytown.asahi.com/akita/news.php?k_id=05000000911190001","asahi.com:内陸線応援　うたごえ高く-マイタウン秋田","内陸線応援　うたごえ高く - 秋田"],
  ["http://news.kanaloco.jp/localnews/article/0911080016/","沿線火災で相模線が一時運休/海老名：ローカルニュース : ニュース : カナロコ -- 神奈川新聞社","沿線火災で相模線が一時運休/海老名"],
  ["http://news.kanaloco.jp/localnews/article/0911110018/","信号トラブルで計２万６千人に影響/相模、横浜両線：ローカルニュース : ニュース : カナロコ -- 神奈川新聞社","信号トラブルで計２万６千人に影響/相模、横浜両線"],
  ["http://news24.jp/articles/2009/11/21/07148287.html","電車が線路上の側溝フタと衝突　ケガ人なし | 日テレNEWS24","電車が線路上の側溝フタと衝突　ケガ人なし"],
  ["http://news24.jp/articles/2009/11/25/07148498.html","通勤ラッシュの車内で痴漢　男を現行犯逮捕 | 日テレNEWS24","通勤ラッシュの車内で痴漢　男を現行犯逮捕"],
  ["http://osaka.yomiuri.co.jp/eco/news/20091120-OYO8T00271.htm","２０３５関空スーパーハブ構想、大阪府が公表 : 経済 ピックアップ : 経済　科学 : 関西発 : YOMIURI ONLINE（読売新聞）","２０３５関空スーパーハブ構想、大阪府が公表"],
  ["http://osaka.yomiuri.co.jp/ekiben/eb100106a.htm","いなり寿し（ＪＲ・伊東駅）: 小林しのぶさんの駅弁閑話 : 人 遊 食 : 関西発 : YOMIURI ONLINE（読売新聞）","いなり寿し（ＪＲ・伊東駅）: 小林しのぶさんの駅弁閑話"],
  ["http://osaka.yomiuri.co.jp/news/20091117-OYO1T00224.htm","ドラム缶破裂、新幹線飛び越す…京都  : ニュース : 関西発 : YOMIURI ONLINE（読売新聞）","ドラム缶破裂、新幹線飛び越す…京都 "],
  ["http://osaka.yomiuri.co.jp/re-eco/news/20091223-OYO8T00516.htm","北条鉄道社長５０人応募…予想の倍、決定１月にずれこみ : 地域経済ニュース : 経済　科学 : 関西発 : YOMIURI ONLINE（読売新聞）","北条鉄道社長５０人応募…予想の倍、決定１月にずれこみ"],
  ["http://osaka.yomiuri.co.jp/tokusyu/dassen/jd91119a.htm","ＪＲ西漏えいで最終報告、背景に企業体質 : ＪＲ脱線事故 : 特集 : 関西発 : YOMIURI ONLINE（読売新聞）","ＪＲ西漏えいで最終報告、背景に企業体質 : ＪＲ脱線事故"],
  ["http://response.jp/article/2009/11/18/132670.html","JR東海博物館に太陽光発電 | レスポンス自動車ニュース（Response.jp）","JR東海博物館に太陽光発電"],
  ["http://response.jp/article/2009/11/25/132942.html","西武鉄道、開かずの踏み切り一部解消 | レスポンス自動車ニュース（Response.jp）","西武鉄道、開かずの踏み切り一部解消"],
  ["http://rocketnews24.com/?p=18923","女性看守と受刑者が刑務所内で禁断の恋！ – ロケットニュース24（β）","女性看守と受刑者が刑務所内で禁断の恋！"],
  ["http://rocketnews24.com/?p=18946","ギニャー！ クモ1000匹の密輸失敗で逮捕「しかもタランチュラ」 – ロケットニュース24（β）","ギニャー！ クモ1000匹の密輸失敗で逮捕「しかもタランチュラ」"],
  ["http://sankei.jp.msn.com/affairs/disaster/091207/dst0912072233007-n1.htm","ＪＲ西漏洩問題検証チーム初会合　遺族ら「報告書書き換えるつもりで」　 (1/2ページ) - MSN産経ニュース","ＪＲ西漏洩問題検証チーム初会合　遺族ら「報告書書き換えるつもりで」　"],
  ["http://sankei.jp.msn.com/economy/business/100105/biz1001051908027-n1.htm","ＪＲ西が中高生用「白浜パンダきっぷ」発売 - MSN産経ニュース","ＪＲ西が中高生用「白浜パンダきっぷ」発売"],
  ["http://sankei.jp.msn.com/world/america/100105/amr1001051123007-n1.htm","米鉄道公社も保安強化へ　爆破テロ未遂で内部通達 - MSN産経ニュース","米鉄道公社も保安強化へ　爆破テロ未遂で内部通達"],
  ["http://slashdot.jp/article.pl?sid=09/03/31/0414257","JTB時刻表、通巻999号を迎える - スラッシュドット・ジャパン","JTB時刻表、通巻999号を迎える"],
  ["http://slashdot.jp/article.pl?sid=09/06/16/0529244","リニア中央新幹線、ルートを巡って論争に - スラッシュドット・ジャパン","リニア中央新幹線、ルートを巡って論争に"],
  ["http://svr.sanyo.oni.co.jp/news_k/news/d/2009111701000945/","ＪＲ西、国交相に１８日改善報告　脱線事故報告書漏えい - 山陽新聞地域ニュース","ＪＲ西、国交相に１８日改善報告　脱線事故報告書漏えい"],
  ["http://svr.sanyo.oni.co.jp/news_s/news/d/2009112912241092/","片上鉄道跡１５キロを散策　健康ウオークに５００人参加 - 山陽新聞地域ニュース","片上鉄道跡１５キロを散策　健康ウオークに５００人参加"],
  ["http://techon.nikkeibp.co.jp/article/COLUMN/20091207/178343/","日本の鉄道技術を世界に売り込むために - 産業動向 - Tech-On！","日本の鉄道技術を世界に売り込むために - 産業動向"],
  ["http://techon.nikkeibp.co.jp/article/FEATURE/20091113/177607/","第3回：「改札機」と「入退出」，両面作戦に挑む（上） - 電子部品 - Tech-On！","第3回：「改札機」と「入退出」，両面作戦に挑む（上） - 電子部品"],
  ["http://www.47news.jp/CN/201001/CN2010010501000603.html","政府、中南米と経済関係強化へ　新幹線事業を後押し - 47NEWS（よんななニュース）","政府、中南米と経済関係強化へ　新幹線事業を後押し"],
  ["http://www.47news.jp/movie/general/post_3601/","ＪＲ西日本、報告書を提出 : 動画 - 47NEWS (よんななニュース)","ＪＲ西日本、報告書を提出 : 動画"],
  ["http://www.47news.jp/movie/general/post_3735/","「これでは犬死に」 : 動画 - 47NEWS (よんななニュース)","「これでは犬死に」 : 動画"],
  ["http://www.47news.jp/news/2010/01/post_20100105090701.html","鉄道廃止この１０年で６百キロ超　「東京―新大阪」上回る - 47NEWS（よんななニュース）","鉄道廃止この１０年で６百キロ超　「東京―新大阪」上回る"],
  ["http://www.afpbb.com/article/disaster-accidents-crime/disaster/2678965/5113417","濃霧で列車事故3件、10人死亡 インド北部　写真5枚　国際ニュース : AFPBB News","濃霧で列車事故3件、10人死亡 インド北部　写真5枚"],
  ["http://www.afpbb.com/article/economy/2668058/4962552","韓国鉄道公社、1万6000人がスト突入　写真5枚　国際ニュース : AFPBB News","韓国鉄道公社、1万6000人がスト突入　写真5枚"],
  ["http://www.asahi.com/business/update/0626/NGY200906260009.html","asahi.com（朝日新聞社）：東海道新幹線、過去最悪の２３％減　５月下旬の乗客数 - ビジネス・経済","東海道新幹線、過去最悪の２３％減　５月下旬の乗客数"],
  ["http://www.asahi.com/international/jinmin/TKY200911190280.html","asahi.com：中米　新型高速列車・内燃機関めぐり協力覚書調印 - 人民日報 - 国際","中米　新型高速列車・内燃機関めぐり協力覚書調印 - 人民日報"],
  ["http://www.asahi.com/international/jinmin/TKY200912020321.html","asahi.com：中国の次世代高速列車、風洞試験を実施 - 人民日報 - 国際","中国の次世代高速列車、風洞試験を実施 - 人民日報"],
  ["http://www.asahi.com/international/update/0105/TKY201001050334.html","asahi.com（朝日新聞社）：ロシアでまた線路爆破事件、貨物列車が脱線　負傷者なし - 国際","ロシアでまた線路爆破事件、貨物列車が脱線　負傷者なし"],
  ["http://www.asahi.com/kansai/travel/ensen/OSK200912190047.html","asahi.com（朝日新聞社）：輝く列車迎えた日　ＪＲ桜井線　畝傍駅 - 関西","輝く列車迎えた日　ＪＲ桜井線　畝傍駅"],
  ["http://www.asahi.com/kansai/travel/news/OSK200911300034.html","asahi.com（朝日新聞社）：東住吉区の踏切で電車にはねられ男性死亡　近鉄南大阪線 - 関西交通・旅ニュース","東住吉区の踏切で電車にはねられ男性死亡　近鉄南大阪線"],
  ["http://www.asahi.com/kids/kotoba/TKY200912290153.html","アサヒ・コムきっず：フリーゲージトレインとは？ - ことばなるほどね！ - 学ぼう","アサヒ・コムきっず：フリーゲージトレインとは？"],
  ["http://www.asahi.com/kids/news/TKY200911240322.html","アサヒ・コムきっず：年末年始、鉄道の旅がお得に - 最新ニュース - 読もう","アサヒ・コムきっず：年末年始、鉄道の旅がお得に"],
  ["http://www.asahi.com/national/update/0105/TKY201001050398.html","asahi.com（朝日新聞社）：ＪＲ東など５社ＨＰに新型ウイルス　閲覧者も感染の恐れ - 社会","ＪＲ東など５社ＨＰに新型ウイルス　閲覧者も感染の恐れ"],
  ["http://www.asahi.com/national/update/0111/SEB201001110041.html","asahi.com（朝日新聞社）：一勝地駅に「合格祈願ノ旅」案内板　ＪＲ肥薩線　 - 社会","一勝地駅に「合格祈願ノ旅」案内板　ＪＲ肥薩線　"],
  ["http://www.asahi.com/politics/update/1221/TKY200912210418.html","asahi.com（朝日新聞社）：北陸新幹線、新潟知事が負担金の残り１０４億円支払いへ - 政治","北陸新幹線、新潟知事が負担金の残り１０４億円支払いへ"],
  ["http://www.asahi.com/science/update/0630/TKY200906300004.html","asahi.com（朝日新聞社）：ミニ新幹線４００系つばさ廃車へ　在来線で高速の知恵は - サイエンス","ミニ新幹線４００系つばさ廃車へ　在来線で高速の知恵は"],
  ["http://www.asahi.com/travel/rail/gallery/091215ctrl/","asahi.com （朝日新聞社）：日立の高速列車、英国で発車 - 鉄道 - トラベル","日立の高速列車、英国で発車 - 鉄道"],
  ["http://www.asahi.com/travel/rail/gallery/100112chinasl/","asahi.com （朝日新聞社）：中国・内蒙古のＳＬ - トラベル","中国・内蒙古のＳＬ"],
  ["http://www.bloomberg.co.jp/apps/news?pid=90920000&sid=a.OCj1zF.A7Q","日立株が１カ月半ぶり高値、鉄道事業の拡大で来期黒字転換を期待 - Bloomberg.co.jp","日立株が１カ月半ぶり高値、鉄道事業の拡大で来期黒字転換を期待"],
  ["http://www.bloomberg.co.jp/apps/news?pid=90920000&sid=a0PHqDa2vf_8","日本株は輸出と金融中心下落、円高や政策不十分で景気二番底を警戒 - Bloomberg.co.jp","日本株は輸出と金融中心下落、円高や政策不十分で景気二番底を警戒"],
  ["http://www.business-i.jp/news/flash-page/news/200912020129a.nwc","速報／関西でも「駅ナカ」好調　週替わりスイーツやご当地グルメ - FujiSankei Business i.／Bloomberg GLOBAL FINANCE","速報／関西でも「駅ナカ」好調　週替わりスイーツやご当地グルメ"],
  ["http://www.business-i.jp/news/ind-page/news/200911130062a.nwc","産業／私鉄首都圏８社　７社が営業減益　ホテル事業の不振も目立つ - FujiSankei Business i.／Bloomberg GLOBAL FINANCE","産業／私鉄首都圏８社　７社が営業減益　ホテル事業の不振も目立つ"],
  ["http://www.chugoku-np.co.jp/News/Sp201001020187.html","【速報】Ｕターンラッシュが始まる　ＪＲも空の便も満席 - 中国新聞","【速報】Ｕターンラッシュが始まる　ＪＲも空の便も満席"],
  ["http://www.chugoku-np.co.jp/NewsPack/CN2009111301000633_National.html","ＪＲ西運転士自殺、労災認定せず　大阪高裁 - 中国新聞","ＪＲ西運転士自殺、労災認定せず　大阪高裁"],
  ["http://www.chunichi.co.jp/article/aichi/20091112/CK2009111202000185.html","中日新聞:針穴に映る感動を写真に　列車などモチーフに制作:愛知(CHUNICHI Web)","針穴に映る感動を写真に　列車などモチーフに制作:愛知"],
  ["http://www.chunichi.co.jp/article/aichi/20091124/CK2009112402000026.html","中日新聞:勝川駅の高架化完了　記念乗車会に２５０人:愛知(CHUNICHI Web)","勝川駅の高架化完了　記念乗車会に２５０人:愛知"],
  ["http://www.cnn.co.jp/business/CNN200912230029.html","CNN.co.jp：「失業者」向けの「格安料金列車」の運行発表、インド鉄道省","「失業者」向けの「格安料金列車」の運行発表、インド鉄道省"],
  ["http://www.cnn.co.jp/world/CNN200910210009.html","CNN.co.jp：インドで急行列車同士が衝突、乗客死傷","インドで急行列車同士が衝突、乗客死傷"],
  ["http://www.fnn-news.com/news/headlines/articles/CONN00166779.html","FNNニュース: 警視庁公安部の52歳...","警視庁公安部の52歳..."],
  ["http://www.fnn-news.com/news/headlines/articles/CONN00166831.html","FNNニュース: JR福知山線脱線事故...","JR福知山線脱線事故..."],
  ["http://www.gifu-np.co.jp/hot/20100213/201002130854_3798.shtml","バレンタイントレイン列車運行　明知鉄道 岐阜新聞 Web","バレンタイントレイン列車運行　明知鉄道"],
  ["http://www.gifu-np.co.jp/news/kennai/20091114/200911140900_9295.shtml","ＤＭＶが明知鉄道を走る　実証実験に向けテスト　−　岐阜新聞 Web","ＤＭＶが明知鉄道を走る　実証実験に向けテスト"],
  ["http://www.hokkaido-np.co.jp/news/aomori/202811.html","津軽鉄道のストーブ列車あすから運行−北海道新聞[青森からこんにちは]","津軽鉄道のストーブ列車あすから運行"],
  ["http://www.hokkaido-np.co.jp/news/aomori/202993.html","東北新幹線 全線開通まであと1年−北海道新聞[青森からこんにちは]","東北新幹線 全線開通まであと1年"],
  ["http://www.hokkaido-np.co.jp/news/chiiki/205558.html","ムード満点光の回廊　ＪＲ洞爺駅前−北海道新聞[道央]","ムード満点光の回廊　ＪＲ洞爺駅前"],
  ["http://www.hokkaido-np.co.jp/news/donai/195886.html","鉄道路線図のランチョンマット　札幌のホテルが企画−北海道新聞[道内]","鉄道路線図のランチョンマット　札幌のホテルが企画"],
  ["http://www.j-cast.com/2010/02/09059747.html","ソフトバンクCM「お父さん」健在 時事ネタ導入飽きさせぬ工夫 (1/2) : J-CASTニュース","ソフトバンクCM「お父さん」健在 時事ネタ導入飽きさせぬ工夫"],
  ["http://www.j-cast.com/kaisha/2009/11/20054370.html","気づいたらケータイ落として1時間経っていた : J-CAST会社ウォッチ","気づいたらケータイ落として1時間経っていた"],
  ["http://www.j-cast.com/mono/2009/12/10055697.html","「すっぴんでは電車に乗れない」女性8割　日本ロレアル調査 : J-CASTモノウォッチ","「すっぴんでは電車に乗れない」女性8割　日本ロレアル調査"],
  ["http://www.j-cast.com/tv/2009/12/18056491.html","オリエント急行殺人事件　もう起こらない : J-CASTテレビウォッチ","オリエント急行殺人事件　もう起こらない"],
  ["http://www.jiji.com/jc/c?g=eco_30&k=2009111800949","時事ドットコム：現職委員２人の辞任求める＝ＪＲ西の報告受け前原国交相","現職委員２人の辞任求める＝ＪＲ西の報告受け前原国交相"],
  ["http://www.jiji.com/jc/c?g=eco_30&k=2009112400798","時事ドットコム：未着工３区間「年内に基本方針」＝整備新幹線−前原国交相","未着工３区間「年内に基本方針」＝整備新幹線−前原国交相"],
  ["http://www.kahoku.co.jp/news/2010/01/20100110t31014.htm","河北新報　東北のニュース／課題山積の二戸市に危機感　新幹線駅利用低迷、温泉郷閑散など","課題山積の二戸市に危機感　新幹線駅利用低迷、温泉郷閑散など"],
  ["http://www.kahoku.co.jp/shasetsu/2009/12/20091222s01.htm","河北新報 コルネット 社説 羽越線転覆事故／検察は真相解明に全力を","コルネット 社説 羽越線転覆事故／検察は真相解明に全力を"],
  ["http://www.kobe-np.co.jp/knews/0002541870.shtml","神戸新聞｜全国海外ニュース｜社会｜やり直し二審、痴漢を否定","社会｜やり直し二審、痴漢を否定"],
  ["http://www.kobe-np.co.jp/news/jiken/0002492267.shtml","神戸新聞｜事件・事故｜ＪＲ塚口駅で車両に不具合　６本が運休","ＪＲ塚口駅で車両に不具合　６本が運休"],
  ["http://www.kyoto-np.co.jp/article.php?mid=P2009110100010&genre=C1&area=O10","焼き肉店火災、ＪＲ一時運休　大阪　３万人影響：京都新聞","焼き肉店火災、ＪＲ一時運休　大阪　３万人影響"],
  ["http://www.kyoto-np.co.jp/article.php?mid=P2009111000096&genre=I1&area=K00","列車待ち、マジカルにおもてなし　嵯峨野観光鉄道：京都新聞","列車待ち、マジカルにおもてなし　嵯峨野観光鉄道"],
  ["http://www.mutusinpou.co.jp/news/2009/10/8805.html","新幹線試験車両１２月に八戸お目見え　報道陣に雄姿 by 陸奥新報","新幹線試験車両１２月に八戸お目見え　報道陣に雄姿"],
  ["http://www.mutusinpou.co.jp/news/2009/11/9047.html","強風で列車に遅れや運休／ＪＲ青森支店 by 陸奥新報","強風で列車に遅れや運休／ＪＲ青森支店"],
  ["http://www.nagasaki-np.co.jp/kiji/20091108/05.shtml","龍〜なが　長崎新聞ホームページ：長崎−門司「ブルトレ郷愁の旅」出発式　ＪＲ長崎駅、ファンでにぎわう（11月8日）","長崎−門司「ブルトレ郷愁の旅」出発式　ＪＲ長崎駅、ファンでにぎわう（11月8日）"],
  ["http://www.nagasaki-np.co.jp/kiji/20091116/09.shtml","龍〜なが　長崎新聞ホームページ：「路面電車まつり」親子らでにぎわう　運転操作や乗車体験人気（11月16日）","「路面電車まつり」親子らでにぎわう　運転操作や乗車体験人気（11月16日）"],
  ["http://www.nhk.or.jp/news/k10013822531000.html","NHKニュース　新幹線高架越えドラム缶落下","新幹線高架越えドラム缶落下"],
  ["http://www.nhk.or.jp/news/k10013826221000.html","NHKニュース　ドラム缶破裂 新幹線飛び越え","ドラム缶破裂 新幹線飛び越え"],
  ["http://www.nishinippon.co.jp/nnp/item/133742","ホテルから眺める列車　西鉄インが宿泊プラン発売 / 西日本新聞","ホテルから眺める列車　西鉄インが宿泊プラン発売"],
  ["http://www.nishinippon.co.jp/nnp/item/134706","長崎ルート　整備促進へ　２０日、国に要望書提出　沿線５市長がサミット / 西日本新聞","長崎ルート　整備促進へ　２０日、国に要望書提出　沿線５市長がサミット"],
  ["http://www.tetsudo.com/news/459/%E5%B2%A9%E8%A6%8B%E6%B2%A2%E8%A4%87%E5%90%88%E9%A7%85%E8%88%8E%E3%81%8C%E3%82%B0%E3%83%83%E3%83%89%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E5%A4%A7%E8%B3%9E/","岩見沢複合駅舎がグッドデザイン大賞 - 鉄道コム","岩見沢複合駅舎がグッドデザイン大賞"],
  ["http://www.tetsudo.com/news/462/%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%83%93%E3%83%AB%E9%A7%85%E3%81%AB%E4%B8%8A%E3%82%8A%E3%83%9B%E3%83%BC%E3%83%A0%E6%96%B0%E8%A8%AD%E3%80%80%E4%BA%AC%E6%88%90/","空港第2ビル駅に上りホーム新設　京成 - 鉄道コム","空港第2ビル駅に上りホーム新設　京成"],
  ["http://www.tokyo-np.co.jp/article/chiba/20091107/CK2009110702000096.html","東京新聞:モノレールが衝突　千葉　作業中のクレーン車に　乗客１６０人けがなし:千葉(TOKYO Web)","モノレールが衝突　千葉　作業中のクレーン車に　乗客１６０人けがなし:千葉"],
  ["http://www.tokyo-np.co.jp/article/chiba/20091115/CK2009111502000082.html","東京新聞:ボジョレ列車　１９日に特別運行　千葉モノレール:千葉(TOKYO Web)","ボジョレ列車　１９日に特別運行　千葉モノレール:千葉"],
  ["http://www.yomiuri.co.jp/atmoney/news/20091222-OYT1T00025.htm","「鉄道博物館」効果１１１億円、レッズ優勝に匹敵 : 経済ニュース : マネー・経済 : YOMIURI ONLINE（読売新聞）","「鉄道博物館」効果１１１億円、レッズ優勝に匹敵"],
  ["http://www.yomiuri.co.jp/e-japan/kumamoto/news/20091231-OYT8T00638.htm","新幹線 熊本駅…おてもやん土産、起爆剤に : 熊本 : 地域 : YOMIURI ONLINE（読売新聞）","新幹線 熊本駅…おてもやん土産、起爆剤に : 熊本"],
  ["http://www.yomiuri.co.jp/national/news/20100105-OYT1T00745.htm","ＪＲ東サイト改ざんウイルス、ホンダなども被害 : 社会 : YOMIURI ONLINE（読売新聞）","ＪＲ東サイト改ざんウイルス、ホンダなども被害"],
  ["http://www.yomiuri.co.jp/national/news/20100105-OYT1T01399.htm","東武東上線の踏切、女性はねられ重傷 : 社会 : YOMIURI ONLINE（読売新聞）","東武東上線の踏切、女性はねられ重傷"],
  ["http://www.yomiuri.co.jp/tabi/domestic/railway/20091211-OYT8T00617.htm","走れジングル号…津軽鉄道がＸマス列車 : 列島鉄道便り : 国内 : 旅ゅ〜ん！ : YOMIURI ONLINE（読売新聞）","走れジングル号…津軽鉄道がＸマス列車 : 列島鉄道便り : 国内"],
  ["http://www.yomiuri.co.jp/world/news/20091221-OYT1T00538.htm","欧州寒波、死者３８人に…空港閉鎖も : 国際 : YOMIURI ONLINE（読売新聞）","欧州寒波、死者３８人に…空港閉鎖も"],
//</CleanseTitleCases>
];
