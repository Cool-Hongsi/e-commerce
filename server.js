var HTTP_PORT = process.env.PORT || 8081;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var client = require('./js-buy-sdk');

const app = express();
const shopPromise = client.shop.fetchInfo();
const productsPromise = client.product.fetchAll();

