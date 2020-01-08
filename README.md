# gate-api

GateApi - JavaScript client for gate-api
APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.9.1
- Package version: 4.9.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.gate.io/page/contacts](https://www.gate.io/page/contacts)

## Specific note for 4.8.0

**BREAKING** change:

4.8.0 add new support with different settle currency for futures API(BTC is the only one allowed before), which makes ALL methods in FuturesApi REQUIRE an additional `settle` parameter.

But previous `/futures/xxx` APIs are still preserved for compatibility usage(will be treated as BTC), so if one of the following condition is met:

- Changing all your futures method call to include `settle` is not a big issue for you
- You need to use futures settled in non-BTC currency

then you'd better move to 4.8.0 and changes all your futures method call to pass in `settle` parameter. Otherwise, you can stick to version<=4.7.3,
but will not receive any future API upgrade support

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
var settle = "btc"; // {String} Settle currency
var orderId = "12345"; // {String} ID returned on order successfully being created

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelFuturesOrder(settle, orderId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.gateio.ws/api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GateApi.FuturesApi* | [**cancelFuturesOrder**](docs/FuturesApi.md#cancelFuturesOrder) | **DELETE** /futures/{settle}/orders/{order_id} | Cancel a single order
*GateApi.FuturesApi* | [**cancelFuturesOrders**](docs/FuturesApi.md#cancelFuturesOrders) | **DELETE** /futures/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
*GateApi.FuturesApi* | [**cancelPriceTriggeredOrder**](docs/FuturesApi.md#cancelPriceTriggeredOrder) | **DELETE** /futures/{settle}/price_orders/{order_id} | Cancel a single order
*GateApi.FuturesApi* | [**cancelPriceTriggeredOrderList**](docs/FuturesApi.md#cancelPriceTriggeredOrderList) | **DELETE** /futures/{settle}/price_orders | Cancel all open orders
*GateApi.FuturesApi* | [**createFuturesOrder**](docs/FuturesApi.md#createFuturesOrder) | **POST** /futures/{settle}/orders | Create a futures order
*GateApi.FuturesApi* | [**createPriceTriggeredOrder**](docs/FuturesApi.md#createPriceTriggeredOrder) | **POST** /futures/{settle}/price_orders | Create a price-triggered order
*GateApi.FuturesApi* | [**getFuturesContract**](docs/FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract
*GateApi.FuturesApi* | [**getFuturesOrder**](docs/FuturesApi.md#getFuturesOrder) | **GET** /futures/{settle}/orders/{order_id} | Get a single order
*GateApi.FuturesApi* | [**getMyTrades**](docs/FuturesApi.md#getMyTrades) | **GET** /futures/{settle}/my_trades | List personal trading history
*GateApi.FuturesApi* | [**getPosition**](docs/FuturesApi.md#getPosition) | **GET** /futures/{settle}/positions/{contract} | Get single position
*GateApi.FuturesApi* | [**getPriceTriggeredOrder**](docs/FuturesApi.md#getPriceTriggeredOrder) | **GET** /futures/{settle}/price_orders/{order_id} | Get a single order
*GateApi.FuturesApi* | [**listFuturesAccountBook**](docs/FuturesApi.md#listFuturesAccountBook) | **GET** /futures/{settle}/account_book | Query account book
*GateApi.FuturesApi* | [**listFuturesAccounts**](docs/FuturesApi.md#listFuturesAccounts) | **GET** /futures/{settle}/accounts | Query futures account
*GateApi.FuturesApi* | [**listFuturesCandlesticks**](docs/FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks
*GateApi.FuturesApi* | [**listFuturesContracts**](docs/FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts
*GateApi.FuturesApi* | [**listFuturesFundingRateHistory**](docs/FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history
*GateApi.FuturesApi* | [**listFuturesInsuranceLedger**](docs/FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history
*GateApi.FuturesApi* | [**listFuturesOrderBook**](docs/FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book
*GateApi.FuturesApi* | [**listFuturesOrders**](docs/FuturesApi.md#listFuturesOrders) | **GET** /futures/{settle}/orders | List futures orders
*GateApi.FuturesApi* | [**listFuturesTickers**](docs/FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers
*GateApi.FuturesApi* | [**listFuturesTrades**](docs/FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history
*GateApi.FuturesApi* | [**listLiquidates**](docs/FuturesApi.md#listLiquidates) | **GET** /futures/{settle}/liquidates | List liquidation history
*GateApi.FuturesApi* | [**listPositionClose**](docs/FuturesApi.md#listPositionClose) | **GET** /futures/{settle}/position_close | List position close history
*GateApi.FuturesApi* | [**listPositions**](docs/FuturesApi.md#listPositions) | **GET** /futures/{settle}/positions | List all positions of a user
*GateApi.FuturesApi* | [**listPriceTriggeredOrders**](docs/FuturesApi.md#listPriceTriggeredOrders) | **GET** /futures/{settle}/price_orders | List all auto orders
*GateApi.FuturesApi* | [**updatePositionLeverage**](docs/FuturesApi.md#updatePositionLeverage) | **POST** /futures/{settle}/positions/{contract}/leverage | Update position leverage
*GateApi.FuturesApi* | [**updatePositionMargin**](docs/FuturesApi.md#updatePositionMargin) | **POST** /futures/{settle}/positions/{contract}/margin | Update position margin
*GateApi.FuturesApi* | [**updatePositionRiskLimit**](docs/FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/{settle}/positions/{contract}/risk_limit | Update position risk limit
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
*GateApi.SpotApi* | [**createBatchOrders**](docs/SpotApi.md#createBatchOrders) | **POST** /spot/batch_orders | Create a batch of orders
*GateApi.SpotApi* | [**createOrder**](docs/SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
*GateApi.SpotApi* | [**getCurrencyPair**](docs/SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get detail of one single order
*GateApi.SpotApi* | [**getOrder**](docs/SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order
*GateApi.SpotApi* | [**listCandlesticks**](docs/SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks
*GateApi.SpotApi* | [**listCurrencyPairs**](docs/SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
*GateApi.SpotApi* | [**listMyTrades**](docs/SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history
*GateApi.SpotApi* | [**listOrderBook**](docs/SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
*GateApi.SpotApi* | [**listOrders**](docs/SpotApi.md#listOrders) | **GET** /spot/orders | List orders
*GateApi.SpotApi* | [**listSpotAccounts**](docs/SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts
*GateApi.SpotApi* | [**listTickers**](docs/SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
*GateApi.SpotApi* | [**listTrades**](docs/SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades
*GateApi.WalletApi* | [**transfer**](docs/WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between accounts


## Documentation for Models

 - [GateApi.BatchOrder](docs/BatchOrder.md)
 - [GateApi.Contract](docs/Contract.md)
 - [GateApi.CurrencyPair](docs/CurrencyPair.md)
 - [GateApi.FundingAccount](docs/FundingAccount.md)
 - [GateApi.FundingBookItem](docs/FundingBookItem.md)
 - [GateApi.FundingRateRecord](docs/FundingRateRecord.md)
 - [GateApi.FuturesAccount](docs/FuturesAccount.md)
 - [GateApi.FuturesAccountBook](docs/FuturesAccountBook.md)
 - [GateApi.FuturesCandlestick](docs/FuturesCandlestick.md)
 - [GateApi.FuturesInitialOrder](docs/FuturesInitialOrder.md)
 - [GateApi.FuturesLiquidate](docs/FuturesLiquidate.md)
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
 - [GateApi.Transfer](docs/Transfer.md)
 - [GateApi.TriggerOrderResponse](docs/TriggerOrderResponse.md)

