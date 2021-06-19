// Generated by purs version 0.14.1
"use strict";
var Data_Foldable = require("../Data.Foldable/index.js");
var Effect = require("../Effect/index.js");
var Halogen_Subscription = require("../Halogen.Subscription/index.js");
var Web_Event_EventTarget = require("../Web.Event.EventTarget/index.js");
var eventListener = function (eventType) {
    return function (target) {
        return function (f) {
            return Halogen_Subscription.makeEmitter(function (push) {
                return function __do() {
                    var listener = Web_Event_EventTarget.eventListener(function (ev) {
                        return Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(push)(f(ev));
                    })();
                    Web_Event_EventTarget.addEventListener(eventType)(listener)(false)(target)();
                    return Web_Event_EventTarget.removeEventListener(eventType)(listener)(false)(target);
                };
            });
        };
    };
};
module.exports = {
    eventListener: eventListener
};
