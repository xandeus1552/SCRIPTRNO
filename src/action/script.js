var enabled = true
var tokenBot = document.getElementById('tokenBot');
var tokenBotValue = document.getElementById('tokenBotValue');
var idChat = document.getElementById('idChat');
var idChatValue = document.getElementById('idChatValue');

function getMessage(msg){
	var valNewH = msg.replace(/__MSG_(\w+)__/g, function(match, v1){
		return v1 ? chrome.i18n.getMessage(v1) : "";
	});
	return valNewH;
}


chrome.storage.sync.get("tokenBot", function(v) {
	if(v.tokenBot !== undefined){
		tokenBotValue.value = v.tokenBot;
	}
});

chrome.storage.sync.get("idChat", function(v) {
	if(v.idChat !== undefined){
		idChatValue.value = v.idChat;
	}
});

$('#tokenBotValue').bind("input",function() { 
    chrome.storage.sync.set({ "tokenBot" : tokenBotValue.value });
});

$('#idChatValue').bind("input",function() { 
    chrome.storage.sync.set({ "idChat" : idChatValue.value });
});