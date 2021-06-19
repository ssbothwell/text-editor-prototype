// Generated by purs version 0.14.1
"use strict";
var MenuitemCommand = (function () {
    function MenuitemCommand() {

    };
    MenuitemCommand.value = new MenuitemCommand();
    return MenuitemCommand;
})();
var MenuitemCheckbox = (function () {
    function MenuitemCheckbox() {

    };
    MenuitemCheckbox.value = new MenuitemCheckbox();
    return MenuitemCheckbox;
})();
var MenuitemRadio = (function () {
    function MenuitemRadio() {

    };
    MenuitemRadio.value = new MenuitemRadio();
    return MenuitemRadio;
})();
var renderMenuitemType = function (v) {
    if (v instanceof MenuitemCommand) {
        return "command";
    };
    if (v instanceof MenuitemCheckbox) {
        return "checkbox";
    };
    if (v instanceof MenuitemRadio) {
        return "radio";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.MenuitemType (line 9, column 22 - line 12, column 27): " + [ v.constructor.name ]);
};
module.exports = {
    MenuitemCommand: MenuitemCommand,
    MenuitemCheckbox: MenuitemCheckbox,
    MenuitemRadio: MenuitemRadio,
    renderMenuitemType: renderMenuitemType
};
