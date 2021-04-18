#!/bin/bash

botdir="botgrupo" && [[ ! -d botgrupo ]] && mkdir botgrupo

wget -O botgrupo/bot.sh https://raw.githubusercontent.com/rudi9999/simple_bot/main/node/bot.js
wget -O botgrupo/package.json https://raw.githubusercontent.com/rudi9999/simple_bot/main/node/package.json
wget -O botgrupo/confbot https://raw.githubusercontent.com/rudi9999/simple_bot/main/node/confbot
cd botgrupo
npm update --save
