$(document).ready(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "7000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
});

function MessageSuccess(title, content, callback) {
    ToastrMessageBuilder("success", title, content, callback);
};
function MessageInfo(title, content, callback) {
    ToastrMessageBuilder("info", title, content, callback);
};
function MessageWarning(title, content, callback) {
    ToastrMessageBuilder("warning", title, content, callback);
};
function MessageError(title, content, callback) {
    ToastrMessageBuilder("error", title, content, callback);
};

function ToastrMessageBuilder(type, title, content, callback) {
    var contentAux = "";
    if (typeof (content) === "object") {
        for (var i = 0; i < content.length; i++) {
            contentAux = contentAux + "&nbsp;" + content[i].key + ": " + content[i].value + "<br>";
        }
    } else {
        contentAux = content;
    }
    toastr[type](contentAux, title);
    if (callback !== undefined) {
        callback();
    }
};