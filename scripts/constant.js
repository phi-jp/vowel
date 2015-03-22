/*
 * constant.js
 */

var SCREEN_WIDTH    = 640;              // スクリーン幅
var SCREEN_HEIGHT   = 960;              // スクリーン高さ
var SCREEN_CENTER_X = SCREEN_WIDTH/2;   // スクリーン幅の半分
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;  // スクリーン高さの半分
var SCREEN_CENTER   = tm.geom.Vector2(SCREEN_CENTER_X, SCREEN_CENTER_Y);
var SCREEN_RECT     = tm.geom.Rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

var TITLE = "Vowel";
var BUTTON_SIZE = 110;
var VOWEL = ['a', 'i', 'u', 'e', 'o'];
var QUERY = tm.util.QueryString.parse(location.search.substr(1));
QUERY.$safe({
    "scene": "game",
});

var ASSETS = {
	'images/correct': 'images/correct.png',
	'images/incorrect': 'images/incorrect.png',
};


var QUESTIONS = [
	// { word: "egg", japanese: "卵", },
	// { word: "bag", japanese: "カバン", },
	// { word: "rose", japanese: "バラ", },
	// { word: "chair", japanese: "いす", },
	// { word: "bat", japanese: "バット", },
	// { word: "fish", japanese: "魚", },
	// { word: "notebook", japanese: "ノート", },
	// { word: "pencil", japanese: "鉛筆", },
	// { word: "dog", japanese: "犬", },
	// { word: "desk", japanese: "机", },
	// { word: "watch", japanese: "腕時計", },
	// { word: "mitt", japanese: "ミット", },
	// { word: "milk", japanese: "牛乳", },
	// { word: "flower", japanese: "花", },
	// { word: "door", japanese: "ドア", },
	// { word: "boat", japanese: "ボート", },
	// { word: "piano", japanese: "ピアノ", },
	// { word: "orange", japanese: "オレンジ", },
	// { word: "bird", japanese: "鳥", },
	// { word: "sheep", japanese: "羊", },
	// { word: "cup", japanese: "カップ", },
	// { word: "bus", japanese: "バス", },

	{ word: "business", japanese: "ビジネス、事業", },
	{ word: "company", japanese: "会社、同行する、仲間", },
	{ word: "office", japanese: "会社、事務所、役所", },
	{ word: "want", japanese: "欲しい、望む", },
	{ word: "store", japanese: "店、蓄え、蓄える", },
	{ word: "way", japanese: "方法、道、やり方", },
	{ word: "order", japanese: "注文する、要求", },
	{ word: "call", japanese: "呼ぶ、電話", },
	{ word: "service", japanese: "サービス、接客", },
	{ word: "base", japanese: "基本、ベース", },
	{ word: "pay", japanese: "払う、給料", },
	{ word: "product", japanese: "商品", },
	{ word: "report", japanese: "レポート、報告する", },
	{ word: "problem", japanese: "問題", },
	{ word: "job", japanese: "仕事、勤め口", },
	{ word: "market", japanese: "市場", },
	{ word: "price", japanese: "価格、値段", },
	{ word: "rate", japanese: "割合、率、レート", },
	{ word: "change", japanese: "変わる、交代する", },
	{ word: "check", japanese: "チェックする、会計、小切手", },
	{ word: "part", japanese: "部分、役割", },
	{ word: "plan", japanese: "計画、計画する", },
	{ word: "sale", japanese: "売る、セール", },

	// 前置詞
	// { word: "about", japanese: "～について", },
	// { word: "aboard", japanese: "～に乗り込んで", },
	// { word: "above", japanese: "～の上（上方）に", },
	// { word: "across", japanese: "～を横切って", },
	// { word: "after", japanese: "～の後に", },
	// { word: "against", japanese: "～に対して", },
	// { word: "along", japanese: "～に沿って", },
	// { word: "among", japanese: "～の間に", },
	// { word: "around", japanese: "～のまわりに", },
	// { word: "as", japanese: "～として", },
	// { word: "at", japanese: "～で、～に", },
	// { word: "before", japanese: "～の前に", },
	// { word: "behind", japanese: "～の後ろに", },
	// { word: "below", japanese: "～の下方に", },
	// { word: "beneath", japanese: "～の下に", },
	// { word: "beside", japanese: "～のそばに", },
	// { word: "besides", japanese: "～の他にも", },
	// { word: "between", japanese: "～の間に", },
	// { word: "beyond", japanese: "～を超えて", },
	// { word: "but", japanese: "～を除いて", },
	// { word: "by", japanese: "～によって", },
	// { word: "concering", japanese: "～に関して", },
	// { word: "despite", japanese: "～にも関わらず", },
	// { word: "down", japanese: "～の下へ", },
	// { word: "during", japanese: "～の間に", },
	// { word: "except", japanese: "～を除いて", },
	// { word: "for", japanese: "～のために、～に（とって）", },
	// { word: "from", japanese: "～から", },
	// { word: "in", japanese: "～の中に", },
	// { word: "inside", japanese: "～の中に、内側に", },
	// { word: "into", japanese: "～の中へ", },
	// { word: "less", japanese: "～ぶん少ない、～を引いた", },
	// { word: "like", japanese: "～のように", },
	// { word: "minus", japanese: "～を減らした", },
	// { word: "near", japanese: "～の近くに", },
	// { word: "of", japanese: "～の", },
	// { word: "off", japanese: "～から離れて", },
	// { word: "on", japanese: "～に接して", },
	// { word: "onto", japanese: "～の上へ", },
	// { word: "opposite", japanese: "～の向こう側に", },
	// { word: "out", japanese: "～の外へ", },
	// { word: "outside", japanese: "～の外側に", },
	// { word: "over", japanese: "～の上に", },
	// { word: "past", japanese: "～を通り過ぎて", },
	// { word: "plus", japanese: "～を加えた", },
	// { word: "round", japanese: "～のまわりに", },
	// { word: "save", japanese: "～を除いて", },
	// { word: "since", japanese: "～からずっと", },
	// { word: "than", japanese: "～よりも", },
	// { word: "through", japanese: "～を通って", },
	// { word: "throughout", japanese: "～の間〔ずっと〕", },
	// { word: "till", japanese: "～まで", },
	// { word: "to", japanese: "～に、～まで", },
	// { word: "toward", japanese: "～の方へ", },
	// { word: "under", japanese: "～の真下に", },
	// { word: "underneath", japanese: "～の下に", },
	// { word: "until", japanese: "～まで", },
	// { word: "up", japanese: "～の上に", },
	// { word: "upon", japanese: "～に接して", },
	// { word: "via", japanese: "～を通って", },
	// { word: "with", japanese: "～と", },
	// { word: "within", japanese: "～のうちに", },
	// { word: "without", japanese: "～なしで、～せずに", },
];

