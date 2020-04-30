const functions = require('firebase-functions');
const jsonServer = require('json-server')
const data = require('../public/db.json')

const port = process.env.PORT || 4000;
const router = jsonServer.router(data)
const server = jsonServer.create()

server.use(jsonServer.defaults(['../public']))
server.use(router)
server.listen(port)

exports.api = functions.https.onRequest(server);

