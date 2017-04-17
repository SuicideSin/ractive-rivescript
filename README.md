# ractive-rivescript
Simple chatbot that uses XMPP + OTR + RIVESCRIPT
To run, simply save the bot's pk (generated with ractive-core's genkey.js script) to a file, save the rivescripts to a directory and then:

$ PK="bots.pk" RIVESCRIPTS="rivescripts/" JID="my@jid.im" JID_PWD="Av3rys3cuR3PwD?=" node bot.js
