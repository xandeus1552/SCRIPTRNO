(async function(){
    'use strict';
////// CONFIGURAÇÃO NOTIFICAÇÃO TELEGRAM //////
    //var telegram_bot_token = "1755410242:AAGuHE9o_wyr8dJk6fWFYQVAJPiNTw6mHh0"; // TOKEN DO BOT
    /////////var chat_id = "1489615307"; // ID DO SEU CHAT
    var message;
    var msg;
///////////////////////////////////////////////

function ntb(msg){
        var token;
		var chat;
		chrome.storage.sync.get("tokenBot", function(v) {
			if(v.tokenBot !== undefined){
				token= v.tokenBot;
				
				chrome.storage.sync.get("idChat", function(v) {
					if(v.idChat !== undefined){
						chat = v.idChat;
						
						$.ajax({
							url:'https://api.telegram.org/bot'+token+'/sendMessage',
							method:'POST',
							data:{
								chat_id: chat,
								text: msg
							},
							success:function(){
								console.log(msg);
							}
						});
					}
				});
			}
		});
    }
	function getSearchParams(k){
        var p={};
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
        return k?p[k]:p;
    }
await sleep(10000);
    var balancetno = document.querySelector("#walletRNO > p").textContent;
    var emaill = document.querySelector("body > div.wrapper.hp_1 > section > div > div > div.col-lg-3 > div > div.widget.video_info.pr.sp > p:nth-child(3)").textContent;
msg = "earneo.tube\n-"+(emaill)+"\n- RNO balance: "+(balancetno)+"\n- iniciando o script";
ntb(msg);
await sleep(3600000);
window.location.href = "https://earneo.tube/profile";

})()

function sleep(time){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      return resolve()
    },time)
  })
}