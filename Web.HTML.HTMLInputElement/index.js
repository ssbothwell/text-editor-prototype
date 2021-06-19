// Generated by purs version 0.14.1
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_HTML_SelectionMode = require("../Web.HTML.SelectionMode/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var stepUp$prime = $foreign.stepUpBy;
var stepUp = stepUp$prime(1);
var stepDown$prime = $foreign.stepDownBy;
var stepDown = stepDown$prime(1);
var setRangeText$prime = function (rpl) {
    return function (s) {
        return function (e) {
            return function (mode) {
                return function (area) {
                    return function () {
                        return $foreign["_setRangeText"](rpl, s, e, Web_HTML_SelectionMode.print(mode), area);
                    };
                };
            };
        };
    };
};
var list = (function () {
    var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($1) {
        return $0($foreign["_list"]($1));
    };
})();
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var form = (function () {
    var $2 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_form"]($3));
    };
})();
var files = (function () {
    var $4 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($5) {
        return $4($foreign["_files"]($5));
    };
})();
module.exports = {
    fromHTMLElement: fromHTMLElement,
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toHTMLElement: toHTMLElement,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    form: form,
    files: files,
    list: list,
    stepUp: stepUp,
    "stepUp'": stepUp$prime,
    stepDown: stepDown,
    "stepDown'": stepDown$prime,
    "setRangeText'": setRangeText$prime,
    accept: $foreign.accept,
    setAccept: $foreign.setAccept,
    alt: $foreign.alt,
    setAlt: $foreign.setAlt,
    autocomplete: $foreign.autocomplete,
    setAutocomplete: $foreign.setAutocomplete,
    autofocus: $foreign.autofocus,
    setAutofocus: $foreign.setAutofocus,
    defaultChecked: $foreign.defaultChecked,
    setDefaultChecked: $foreign.setDefaultChecked,
    checked: $foreign.checked,
    setChecked: $foreign.setChecked,
    dirName: $foreign.dirName,
    setDirName: $foreign.setDirName,
    disabled: $foreign.disabled,
    setDisabled: $foreign.setDisabled,
    formAction: $foreign.formAction,
    setFormAction: $foreign.setFormAction,
    formEnctype: $foreign.formEnctype,
    setFormEnctype: $foreign.setFormEnctype,
    formMethod: $foreign.formMethod,
    setFormMethod: $foreign.setFormMethod,
    formNoValidate: $foreign.formNoValidate,
    setFormNoValidate: $foreign.setFormNoValidate,
    formTarget: $foreign.formTarget,
    setFormTarget: $foreign.setFormTarget,
    height: $foreign.height,
    setHeight: $foreign.setHeight,
    indeterminate: $foreign.indeterminate,
    setIndeterminate: $foreign.setIndeterminate,
    max: $foreign.max,
    setMax: $foreign.setMax,
    maxLength: $foreign.maxLength,
    setMaxLength: $foreign.setMaxLength,
    min: $foreign.min,
    setMin: $foreign.setMin,
    minLength: $foreign.minLength,
    setMinLength: $foreign.setMinLength,
    multiple: $foreign.multiple,
    setMultiple: $foreign.setMultiple,
    name: $foreign.name,
    setName: $foreign.setName,
    pattern: $foreign.pattern,
    setPattern: $foreign.setPattern,
    placeholder: $foreign.placeholder,
    setPlaceholder: $foreign.setPlaceholder,
    readOnly: $foreign.readOnly,
    setReadOnly: $foreign.setReadOnly,
    required: $foreign.required,
    setRequired: $foreign.setRequired,
    size: $foreign.size,
    setSize: $foreign.setSize,
    src: $foreign.src,
    setSrc: $foreign.setSrc,
    step: $foreign.step,
    setStep: $foreign.setStep,
    type_: $foreign.type_,
    setType: $foreign.setType,
    defaultValue: $foreign.defaultValue,
    setDefaultValue: $foreign.setDefaultValue,
    value: $foreign.value,
    setValue: $foreign.setValue,
    valueAsDate: $foreign.valueAsDate,
    setValueAsDate: $foreign.setValueAsDate,
    valueAsNumber: $foreign.valueAsNumber,
    setValueAsNumber: $foreign.setValueAsNumber,
    width: $foreign.width,
    setWidth: $foreign.setWidth,
    willValidate: $foreign.willValidate,
    validity: $foreign.validity,
    validationMessage: $foreign.validationMessage,
    checkValidity: $foreign.checkValidity,
    reportValidity: $foreign.reportValidity,
    setCustomValidity: $foreign.setCustomValidity,
    labels: $foreign.labels,
    select: $foreign.select,
    selectionStart: $foreign.selectionStart,
    setSelectionStart: $foreign.setSelectionStart,
    selectionEnd: $foreign.selectionEnd,
    setSelectionEnd: $foreign.setSelectionEnd,
    selectionDirection: $foreign.selectionDirection,
    setSelectionDirection: $foreign.setSelectionDirection,
    setRangeText: $foreign.setRangeText,
    setSelectionRange: $foreign.setSelectionRange
};
