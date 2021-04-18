#!/usr/bin/env node

const fs = require('fs');

const { exec, execFile } = require('child_process');

function setup(check){
	exec(check, (err,stdout,stderr) => {
		if (err) {
			console.error(err);
		  	return;
		  }
		})
};

if (! fs.existsSync('./token')) {setup('touch ./token')};     // token de su bot creado en @BotFather

// ==============================================================================
const token = fs.readFileSync('./token', 'utf-8').split("\n").join(""); // <<<<< token de su bot creado en @BotFather

if (token == '') {console.log('aun no ingrsa su toke'); return};

const TelegramBot = require('node-telegram-bot-api'); // <<<<< api de telegram

const bot = new TelegramBot(token, {polling: true}); // <<<<<< ecucha del bot
// ==============================================================================


//===Prosesador de errores
bot.on('polling_error', function(error){
	console.log(error);
});

    bot.on('message', function(msg){ //todo los mansajes
	//bot.onText(/\/['start','menu']/, function(msg){ //solo los msj con "/"

	console.log(msg); //imprime en consola los datos del msj

	//=====filtro tipo de chat=====
    if (msg.chat.type == 'supergroup'){ //si el msj proviene de un superprupo, no se hara nada
        return;
    }
    else if (msg.chat.type == 'group'){ //si el msj proviene de un group, no se hara nada
        return;
    }
    else if (msg.chat.type == 'channel'){ //si el msj proviene de un channel, no se hara nada
        return;
    }

    //===variables
    const id = msg.chat.id; //id de telegram del que envia el mensaje
    const txt = msg.text; //contenido del msj

    switch(txt) { //direciona la orden acorde al contenido de "txt"
				case "/start":
							bot.sendMessage(id, "hola grupo_1"); //envia el msj
							break;
				case "/menu":
							bot.sendMessage(id, "hola grupo_2"); //envia el msj
							break;
				default:
							bot.sendMessage(id, "comando incorrecto!"); //envia el msj
							break;

			}
});
