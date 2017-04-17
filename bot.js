var b = require ("ractive-core"), bot = new b ();
var r = require ("rivescript"), rivescript = new r ({});
/*
* Loads RIVESCRIPT directory and sorts replies
*/
rivescript.loadDirectory (process.env.RIVESCRIPTS, function () { rivescript.sortReplies (); }, function (err) { }) 

var fs = require ('fs'), privateKey = fs.readFileSync (process.env.PK).toString ();

var messageCallback = function (from, to, msg) {
	rivescript.setUservars (from, {});
	bot.buddy (from).sendMessage (rivescript.reply (from, msg));
}

bot.protocol ("xmpp")
	.username (process.env.JID)
	.password (process.env.JID_PWD)
	.layer ("otr", {"privateKey": privateKey}) 
	.on ("error", function (err) { console.log ("error: " + err); })
	.on ("online", function () { console.log ("online"); })
	.on ("subscribe", function (attrs) { bot.acceptFriendship (attrs.from); })
	.on ("received_message", messageCallback);

