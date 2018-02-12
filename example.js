var OKEX = require('./rest');

// Test public data APIs
var publicClient = new OKEX();

// get BTCCNY ticker
//publicClient.getTicker(logResponse, 'ltc_btc');

// // get BTCCNY order book
// publicClient.getDepth(logResponse, 'btc_cny');
//
// // get trades defaulting to BTCCNY
// publicClient.getTrades(logResponse);
//
// // get LTCCNY trades
// publicClient.getTrades(logResponse, 'ltc_usd');
//
// // get trades since trade id 2209328
// publicClient.getTrades(logResponse, 'btc_cny', 2219111);

// Either pass your API key and secret as the first and second parameters to examples.js. eg
// node examples.js your-api-key your-api-secret
//
// Or enter them below.
// WARNING never commit your API keys into a public repository.
var key = 'key';
var secret = 'secret key';

var privateClient = new OKEX(key, secret);

// uncomment the API you want to test.
// Be sure to check the parameters so you don't do any unwanted live trades

//privateClient.getUserInfo(logResponse);

// limit orders
//privateClient.addTrade(logResponse, 'iota_btc', 'buy', '1', '0.00021054');
//privateClient.addTrade(logResponse, 'btc_cny', 'sell', '0.01', '900');

// market orders
// market buy
privateClient.addTrade(logResponse, 'iota_btc', 'buy_market', null ,'0.00021291');
// market sell of 0.01 BTC
//privateClient.addTrade(logResponse, 'btc_cny', 'sell_market', '0.01');

//privateClient.cancelOrder(logResponse, 'btc_cny', 1);

//privateClient.getOrderInfo(logResponse, 'btc_cny', '31947122');
// get all open orders
//privateClient.getOrderInfo(logResponse, 'btc_cny', '-1');

// get all open orders
//privateClient.getOrdersInfo(logResponse, 'btc_cny', 0, '31947122,31941934');
// get all filled orders
// privateClient.getOrdersInfo(logResponse, 'btc_cny', 0, '31947122,31941934');

// get the first 20 unfilled orders
//privateClient.getOrderHistory(logResponse, 'btc_cny', 0, 1, 20);
// get the first 20 filled orders
//privateClient.getOrderHistory(logResponse, 'btc_cny', 1, 1, 20);
// get the third 20 filled orders
//privateClient.getOrderHistory(logResponse, 'btc_cny', 1, 3, 20);

// get the first 5 account deposits
//privateClient.getAccountRecords(logResponse, 'btc_cny', 0, 1, 5);
// get the second 5 account deposits
//privateClient.getAccountRecords(logResponse, 'btc_cny', 0, 2, 5);
// get the first 5 account withdrawals
//privateClient.getAccountRecords(logResponse, 'btc_cny', 1, 1, 5);

// get historical trades
//privateClient.getTradeHistory(logResponse, 'iota_btc', 1);

function logResponse(err, data)
{
    if (err)
    {
        console.log('error name %s', err.name);
        console.log('error message %s', err);
    }

    console.log('\ndata: %s', JSON.stringify(data));
}