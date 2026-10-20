"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var app_js_1 = require("./app.js");
var port = Number((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4000);
if (!Number.isInteger(port) || port <= 0) {
    throw new Error('PORT debe ser un número entero positivo');
}
(0, app_js_1.createApp)().listen(port, '0.0.0.0', function () {
    console.log("GradeCloud API escuchando en el puerto ".concat(port));
});
