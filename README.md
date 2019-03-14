# gate-api

GateApi - JavaScript client for gate-api
APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.5.2
- Package version: 4.5.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://gate.io/page/contacts](https://gate.io/page/contacts)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install gate-api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your gate-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('gate-api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/gateio/gateapi-javascript
then install it via:

```shell
    npm install gateio/gateapi-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GateApi = require('gate-api');

var client = GateApi.ApiClient.instance;
client.key = "YOUR API KEY";
client.secret = "YOUR API SECRET";
// uncomment the next line if you are using the API with other host
// client.basePath = "https://some-other-hosts";

var api = new GateApi.FuturesApi()
var orderId = "12345"; // {String} ID returned on order successfully being created

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelOrder(orderId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.gateio.ws/api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GateApi.FuturesApi* | [**cancelOrder**](docs/FuturesApi.md#cancelOrder) | **DELETE** /futures/orders/{order_id} | Cancel a single order
*GateApi.FuturesApi* | [**cancelOrders**](docs/FuturesApi.md#cancelOrders) | **DELETE** /futures/orders | Cancel all &#x60;open&#x60; orders matched
*GateApi.FuturesApi* | [**cancelPriceTriggeredOrder**](docs/FuturesApi.md#cancelPriceTriggeredOrder) | **DELETE** /futures/price_orders/{order_id} | Cancel a single order
*GateApi.FuturesApi* | [**cancelPriceTriggeredOrderList**](docs/FuturesApi.md#cancelPriceTriggeredOrderList) | **DELETE** /futures/price_orders | Cancel all open orders
*GateApi.FuturesApi* | [**createOrder**](docs/FuturesApi.md#createOrder) | **POST** /futures/orders | Create a futures order
*GateApi.FuturesApi* | [**createPriceTriggeredOrder**](docs/FuturesApi.md#createPriceTriggeredOrder) | **POST** /futures/price_orders | Create a price-triggered order
*GateApi.FuturesApi* | [**getFuturesContract**](docs/FuturesApi.md#getFuturesContract) | **GET** /futures/contracts/{contract} | Get a single contract
*GateApi.FuturesApi* | [**getMyTrades**](docs/FuturesApi.md#getMyTrades) | **GET** /futures/my_trades | List personal trading history
*GateApi.FuturesApi* | [**getOrder**](docs/FuturesApi.md#getOrder) | **GET** /futures/orders/{order_id} | Get a single order
*GateApi.FuturesApi* | [**getPosition**](docs/FuturesApi.md#getPosition) | **GET** /futures/positions/{contract} | Get single position
*GateApi.FuturesApi* | [**getPriceTriggeredOrder**](docs/FuturesApi.md#getPriceTriggeredOrder) | **GET** /futures/price_orders/{order_id} | Get a single order
*GateApi.FuturesApi* | [**listFuturesAccountBook**](docs/FuturesApi.md#listFuturesAccountBook) | **GET** /futures/account_book | Query account book
*GateApi.FuturesApi* | [**listFuturesAccounts**](docs/FuturesApi.md#listFuturesAccounts) | **GET** /futures/accounts | Query futures account
*GateApi.FuturesApi* | [**listFuturesCandlesticks**](docs/FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/candlesticks | Get futures candlesticks
*GateApi.FuturesApi* | [**listFuturesContracts**](docs/FuturesApi.md#listFuturesContracts) | **GET** /futures/contracts | List all futures contracts
*GateApi.FuturesApi* | [**listFuturesFundingRateHistory**](docs/FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/funding_rate | Funding rate history
*GateApi.FuturesApi* | [**listFuturesInsuranceLedger**](docs/FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/insurance | Futures insurance balance history
*GateApi.FuturesApi* | [**listFuturesOrderBook**](docs/FuturesApi.md#listFuturesOrderBook) | **GET** /futures/order_book | Futures order book
*GateApi.FuturesApi* | [**listFuturesTickers**](docs/FuturesApi.md#listFuturesTickers) | **GET** /futures/tickers | List futures tickers
*GateApi.FuturesApi* | [**listFuturesTrades**](docs/FuturesApi.md#listFuturesTrades) | **GET** /futures/trades | Futures trading history
*GateApi.FuturesApi* | [**listOrders**](docs/FuturesApi.md#listOrders) | **GET** /futures/orders | List futures orders
*GateApi.FuturesApi* | [**listPositionClose**](docs/FuturesApi.md#listPositionClose) | **GET** /futures/position_close | List position close history
*GateApi.FuturesApi* | [**listPositions**](docs/FuturesApi.md#listPositions) | **GET** /futures/positions | List all positions of a user
*GateApi.FuturesApi* | [**listPriceTriggeredOrders**](docs/FuturesApi.md#listPriceTriggeredOrders) | **GET** /futures/price_orders | List all auto orders
*GateApi.FuturesApi* | [**updatePositionLeverage**](docs/FuturesApi.md#updatePositionLeverage) | **POST** /futures/positions/{contract}/leverage | Update position leverage
*GateApi.FuturesApi* | [**updatePositionMargin**](docs/FuturesApi.md#updatePositionMargin) | **POST** /futures/positions/{contract}/margin | Update position margin
*GateApi.FuturesApi* | [**updatePositionRiskLimit**](docs/FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/positions/{contract}/risk_limit | Update position risk limit
*GateApi.MarginApi* | [**cancelLoan**](docs/MarginApi.md#cancelLoan) | **DELETE** /margin/loans/{loan_id} | Cancel lending loan
*GateApi.MarginApi* | [**createLoan**](docs/MarginApi.md#createLoan) | **POST** /margin/loans | Lend or borrow
*GateApi.MarginApi* | [**getLoan**](docs/MarginApi.md#getLoan) | **GET** /margin/loans/{loan_id} | Retrieve one single loan detail
*GateApi.MarginApi* | [**getLoanRecord**](docs/MarginApi.md#getLoanRecord) | **GET** /margin/loan_records/{loan_record_id} | Get one single loan record
*GateApi.MarginApi* | [**listFundingAccounts**](docs/MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list
*GateApi.MarginApi* | [**listFundingBook**](docs/MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans
*GateApi.MarginApi* | [**listLoanRecords**](docs/MarginApi.md#listLoanRecords) | **GET** /margin/loan_records | List repayment records of specified loan
*GateApi.MarginApi* | [**listLoanRepayments**](docs/MarginApi.md#listLoanRepayments) | **GET** /margin/loans/{loan_id}/repayment | List loan repayment records
*GateApi.MarginApi* | [**listLoans**](docs/MarginApi.md#listLoans) | **GET** /margin/loans | List all loans
*GateApi.MarginApi* | [**listMarginAccounts**](docs/MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list
*GateApi.MarginApi* | [**listMarginCurrencyPairs**](docs/MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
*GateApi.MarginApi* | [**mergeLoans**](docs/MarginApi.md#mergeLoans) | **POST** /margin/merged_loans | Merge multiple lending loans
*GateApi.MarginApi* | [**repayLoan**](docs/MarginApi.md#repayLoan) | **POST** /margin/loans/{loan_id}/repayment | Repay a loan
*GateApi.MarginApi* | [**updateLoan**](docs/MarginApi.md#updateLoan) | **PATCH** /margin/loans/{loan_id} | Modify a loan
*GateApi.MarginApi* | [**updateLoanRecord**](docs/MarginApi.md#updateLoanRecord) | **PATCH** /margin/loan_records/{loan_record_id} | Modify a loan record
*GateApi.SpotApi* | [**cancelOrder**](docs/SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel a single order
*GateApi.SpotApi* | [**cancelOrders**](docs/SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair
*GateApi.SpotApi* | [**createOrder**](docs/SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
*GateApi.SpotApi* | [**getCurrencyPair**](docs/SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get detail of one single order
*GateApi.SpotApi* | [**getOrder**](docs/SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order
*GateApi.SpotApi* | [**listCandlesticks**](docs/SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks
*GateApi.SpotApi* | [**listCurrencyPairs**](docs/SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
*GateApi.SpotApi* | [**listMyTrades**](docs/SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history
*GateApi.SpotApi* | [**listOrderBook**](docs/SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
*GateApi.SpotApi* | [**listOrders**](docs/SpotApi.md#listOrders) | **GET** /spot/orders | List futures orders
*GateApi.SpotApi* | [**listSpotAccounts**](docs/SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts
*GateApi.SpotApi* | [**listTickers**](docs/SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
*GateApi.SpotApi* | [**listTrades**](docs/SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades


## Documentation for Models

 - [GateApi.Contract](docs/Contract.md)
 - [GateApi.CurrencyPair](docs/CurrencyPair.md)
 - [GateApi.FundingAccount](docs/FundingAccount.md)
 - [GateApi.FundingBookItem](docs/FundingBookItem.md)
 - [GateApi.FundingRateRecord](docs/FundingRateRecord.md)
 - [GateApi.FuturesAccount](docs/FuturesAccount.md)
 - [GateApi.FuturesAccountBook](docs/FuturesAccountBook.md)
 - [GateApi.FuturesCandlestick](docs/FuturesCandlestick.md)
 - [GateApi.FuturesInitialOrder](docs/FuturesInitialOrder.md)
 - [GateApi.FuturesOrder](docs/FuturesOrder.md)
 - [GateApi.FuturesOrderBook](docs/FuturesOrderBook.md)
 - [GateApi.FuturesOrderBookItem](docs/FuturesOrderBookItem.md)
 - [GateApi.FuturesPriceTrigger](docs/FuturesPriceTrigger.md)
 - [GateApi.FuturesPriceTriggeredOrder](docs/FuturesPriceTriggeredOrder.md)
 - [GateApi.FuturesTicker](docs/FuturesTicker.md)
 - [GateApi.FuturesTrade](docs/FuturesTrade.md)
 - [GateApi.InsuranceRecord](docs/InsuranceRecord.md)
 - [GateApi.Loan](docs/Loan.md)
 - [GateApi.LoanPatch](docs/LoanPatch.md)
 - [GateApi.LoanRecord](docs/LoanRecord.md)
 - [GateApi.MarginAccount](docs/MarginAccount.md)
 - [GateApi.MarginAccountCurrency](docs/MarginAccountCurrency.md)
 - [GateApi.MarginCurrencyPair](docs/MarginCurrencyPair.md)
 - [GateApi.MyFuturesTrade](docs/MyFuturesTrade.md)
 - [GateApi.Order](docs/Order.md)
 - [GateApi.OrderBook](docs/OrderBook.md)
 - [GateApi.Position](docs/Position.md)
 - [GateApi.PositionClose](docs/PositionClose.md)
 - [GateApi.PositionCloseOrder](docs/PositionCloseOrder.md)
 - [GateApi.RepayRequest](docs/RepayRequest.md)
 - [GateApi.Repayment](docs/Repayment.md)
 - [GateApi.SpotAccount](docs/SpotAccount.md)
 - [GateApi.Ticker](docs/Ticker.md)
 - [GateApi.Trade](docs/Trade.md)
 - [GateApi.TriggerOrderResponse](docs/TriggerOrderResponse.md)

