// Generated by purs version 0.14.1
"use strict";
var $foreign = require("./foreign.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var peek = $foreign.peekImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
module.exports = {
    peek: peek,
    "new": $foreign["new"],
    poke: $foreign.poke,
    "delete": $foreign["delete"]
};
