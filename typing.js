


// 問題 (日本語)
var questions_text = [
    '陸蓮根',
    '孅い',
    '蝸牛',
    '瓩',
    '賽子',
];

// 問題 (ローマ字)
var questions_roma = [
    'okura',
    'kayowai',
    'katatumuri',
    'kiroguramu',
    'saikoro',  
];

var hukidasi=[
'あと4モン',
'あと3もん',
'あと2もん',
'後一問',
'LAST'
];


var time = document.getElementById('time');
var question = document.getElementById('question');  // 問題文を表示する場所
var input = document.getElementById('input');  // 入力された文字を表示する場所
var message = document.getElementById('message');  // 入力された文字を表示する場所
var question_index = 0;  // 今何番目の問題かどうか

var start = new Date().getTime()+30000;
function timer()
{
    var now = new Date().getTime();

    answer = start - now;
    answer = answer/1000;
time.innerText = parseInt(answer);
       if(answer <=0){

       	clearInterval(timer);
       }
}

jikan = setInterval(timer,500);


// キー入力で処理をする
window.onkeydown = function(e) {
    if (e.keyCode === 8) {  // 'Backspace'
        if (input.innerText !== "") {  // 入力されている文字があれば
            input.innerText = input.innerText.slice(0, -1);  // 一文字削除
        }
    } else if (65 <= e.keyCode && e.keyCode <= 90) {  // 'a' から 'z'
        const currentCode = e.which || e.code;
        let currentKey = e.key;
        if(!currentKey){
            currentKey = String.fromCharCode(currentCode);
        }
        input.innerText +=currentKey;    // 入力した文字を表示
    }

    // 入力した文字が問題文のローマ字と一致しているかどうか
    if (questions_roma[question_index] === input.innerText) {
        message.innerText = hukidasi[question_index];

        // 次の問題があれば、次の問題を表示
        ++question_index;
        if (question_index < questions_text.length) {
            // 2秒後に次の問題へ
            setTimeout(function() {
                show_question();  // 次の問題へ
            }, 1000);
        } else {
            // 全てが終了している
            message.innerText = 'イェーイ！';
        }
    }
}

// 問題文を表示する
function show_question() {
    question.innerText = questions_text[question_index];  // 問題文を表示
    input.innerText = "";  // 入力されている文字を削除
    message.innerText = "";  // メッセージを削除
};

// 問題を表示

show_question();