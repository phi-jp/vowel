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
	{ word: "egg", japanese: "卵", },
	{ word: "bag", japanese: "カバン", },
	{ word: "rose", japanese: "バラ", },
	{ word: "chair", japanese: "いす", },
	{ word: "bat", japanese: "バット", },
	{ word: "fish", japanese: "魚", },
	{ word: "notebook", japanese: "ノート", },
	{ word: "pencil", japanese: "鉛筆", },
	{ word: "dog", japanese: "犬", },
	{ word: "desk", japanese: "机", },
	{ word: "watch", japanese: "腕時計", },
	{ word: "mitt", japanese: "ミット", },
	{ word: "milk", japanese: "牛乳", },
	{ word: "flower", japanese: "花", },
	{ word: "door", japanese: "ドア", },
	{ word: "boat", japanese: "ボート", },
	{ word: "piano", japanese: "ピアノ", },
	{ word: "orange", japanese: "オレンジ", },
	{ word: "bird", japanese: "鳥", },
	{ word: "sheep", japanese: "羊", },
	{ word: "cup", japanese: "カップ", },
	{ word: "bus", japanese: "バス", },
];

