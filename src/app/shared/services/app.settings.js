"use strict";
var http_1 = require("@angular/http");
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_OPTIONS", {
        get: function () {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' }), options = new http_1.RequestOptions({ headers: headers });
            return options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "API_URL", {
        get: function () {
            var devMode = true, prodPath = "http://cristi.red:8080/api", apiSecured = false, apiHost = "localhost", apiPort = "8080/api";
            return (devMode) ? ("http" + ((apiSecured) ? "s" : "") + "://" + apiHost + ":" + apiPort) : prodPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "SOCKETG_URL", {
        get: function () {
            var devMode = true, prodPath = "http://cristi.red:8080/gs-guide-websocket", local = "http://localhost:8080/gs-guide-websocket";
            return (devMode) ? local : prodPath;
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
exports.AppSettings = AppSettings;
//# sourceMappingURL=app.settings.js.map