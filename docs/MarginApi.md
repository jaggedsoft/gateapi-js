# GateApi.MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMarginCurrencyPairs**](MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
[**listFundingBook**](MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans


## listMarginCurrencyPairs

> [MarginCurrencyPair] listMarginCurrencyPairs()

List all supported currency pairs supported in margin trading

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMarginCurrencyPairs(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MarginCurrencyPair]**](MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFundingBook

> [FundingBookItem] listFundingBook(currency)

Order book of lending loans

### Example

```javascript
var GateApi = require('gate-api');

var apiInstance = new GateApi.MarginApi();
var currency = "BTC"; // String | Retrieved specified currency related data
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFundingBook(currency, callback);
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Retrieved specified currency related data | 

### Return type

[**[FundingBookItem]**](FundingBookItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
