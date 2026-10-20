"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
require("dotenv/config");
var pg_1 = require("pg");
var connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    // La conexión solo se utiliza cuando se ejecuta una consulta.
    console.warn('DATABASE_URL no configurada; define apps/api/.env');
}
exports.pool = new pg_1.Pool({
    connectionString: connectionString,
    max: 5,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
});
