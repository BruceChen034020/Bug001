/*
感謝您觀看這份程式碼
作品名稱: N/A
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2017/7/
版本: N/A
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
var label1; // (Label)
var button1; // (Button)
var textBox1; // (textarea)
var timers = []; // (Timer array)

/* p5 functions */
function setup(){
    ShowTime();

    label1 = document.createElement("label");
    document.body.appendChild(label1);
    label1.innerHTML = "How many timers do you want?";

    textBox1 = document.createElement("textarea");
    document.body.appendChild(textBox1);

    button1 = document.createElement("button");
    document.body.appendChild(button1);
    button1.innerHTML = "Confirm";
    button1.addEventListener("click", button1_Clicked);

}

function draw(){
    ShowTime();
    for(var i = 0; i < timers.length; i++){
        timers[i].show();
    }
}

/* User-defined functions */
function ShowTime(){ // (void)
　document.getElementById('showbox').innerHTML = new Date();
　setTimeout('ShowTime()',1000);
}
function button1_Clicked(){ // onclick event (void)
    console.log("button1 clicked");
    var numButtons = parseInt(textBox1.value);
    for(var i = 0; i < numButtons; i++){
        timers[i] = new Timer();
        timers[i].initialization();
    }
    document.body.removeChild(button1);
    document.body.removeChild(label1);
    document.body.removeChild(textBox1);
}
