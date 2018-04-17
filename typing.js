


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
'正解！あと4モン',
'正解！あと3もん',
'正解！あと2もん',
'正解！あと1問',
'LAST'
];


var time = document.getElementById('time');
var question = document.getElementById('question');  // 問題文を表示する場所
var message = document.getElementById('message');  // 入力された文字を表示する場所
var question_index = 0;  // 今何番目の問題かどうか
var start = new Date().getTime()+30000;
var yomikata = document.getElementById('yomikata')


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
    // if (e.keyCode === 8) {  // 'Backspace'
    //     if (yomikata!== "") {  // 入力されている文字があれば
    //         yomikata = yomikata.slice(0, -1);  // 一文字削除
    //     }
    // } else if (65 <= e.keyCode && e.keyCode <= 90) {  // 'A' から 'Z'
    //     var currentCode = e.which || e.code;
    //     var currentKey = e.key;
    //     if(!currentKey){
    //         currentKey = String.fromCharCode(currentCode);
    //     }
    //     yomikata +=currentKey.toLowerCase();    // 入力した文字を小文字で表示
    // }

    // 入力した文字が問題文のローマ字と一致しているかどうか
    if (questions_roma[question_index] === yomikata.value) {
        message.innerText = hukidasi[question_index];

        // 次の問題があれば、次の問題を表示e
        ++question_index;
        if (question_index < questions_text.length) {
            // 2秒後に次の問題へ
            setTimeout(function() {
                show_question();  // 次の問題へ
            }, 1500);
        } else {
            // 全てが終了している
            message.innerText = 'おめでとうございます！';
        }
    }
}

// 問題文を表示する
function show_question() {
    question.innerText = questions_text[question_index];  // 問題文を表示
    yomikata= ""; 
    message.innerText = ""; // メッセージを削除
};
// 問題を表示

show_question();