/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CurrencyPair', 'model/OrderBook', 'model/Ticker', 'model/Trade'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CurrencyPair'), require('../model/OrderBook'), require('../model/Ticker'), require('../model/Trade'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.SpotApi = factory(root.GateApi.ApiClient, root.GateApi.CurrencyPair, root.GateApi.OrderBook, root.GateApi.Ticker, root.GateApi.Trade);
  }
}(this, function(ApiClient, CurrencyPair, OrderBook, Ticker, Trade) {
  'use strict';

  /**
   * Spot service.
   * @module api/SpotApi
   */

  /**
   * Constructs a new SpotApi. 
   * @alias module:api/SpotApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listCurrencyPairs operation.
     * @callback module:api/SpotApi~listCurrencyPairsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CurrencyPair>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all currency pairs supported
     * @param {module:api/SpotApi~listCurrencyPairsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CurrencyPair>}
     */
    this.listCurrencyPairs = function(callback) {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CurrencyPair];
      return this.apiClient.callApi(
        '/spot/currency_pairs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrencyPair operation.
     * @callback module:api/SpotApi~getCurrencyPairCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrencyPair} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detail of one single order
     * @param {String} currencyPair Currency pair
     * @param {module:api/SpotApi~getCurrencyPairCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrencyPair}
     */
    this.getCurrencyPair = function(currencyPair, callback) {
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling getCurrencyPair");
      }

      var pathParams = {
        'currency_pair': currencyPair
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CurrencyPair;
      return this.apiClient.callApi(
        '/spot/currency_pairs/{currency_pair}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTickers operation.
     * @callback module:api/SpotApi~listTickersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Ticker>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve ticker information
     * Return only related data if `currency_pair` is specified; otherwise return all of them
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyPair Currency pair
     * @param {module:api/SpotApi~listTickersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Ticker>}
     */
    this.listTickers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': opts['currencyPair'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Ticker];
      return this.apiClient.callApi(
        '/spot/tickers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrderBook operation.
     * @callback module:api/SpotApi~listOrderBookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderBook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve order book
     * Order book will be sorted by price from high to low on bids; reversed on asks
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {String} opts.interval Order depth. 0 means no aggregation is applied. default to 0 (default to '0')
     * @param {Number} opts.limit Maximum number of order depth data in asks or bids (default to 10)
     * @param {module:api/SpotApi~listOrderBookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderBook}
     */
    this.listOrderBook = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listOrderBook");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'interval': opts['interval'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OrderBook;
      return this.apiClient.callApi(
        '/spot/order_book', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTrades operation.
     * @callback module:api/SpotApi~listTradesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trade>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve market trades
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of records returned in one list (default to 100)
     * @param {String} opts.lastId Specify list staring point using the `id` of last record in previous list-query results
     * @param {module:api/SpotApi~listTradesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trade>}
     */
    this.listTrades = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listTrades");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'limit': opts['limit'],
        'last_id': opts['lastId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Trade];
      return this.apiClient.callApi(
        '/spot/trades', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listCandlesticks operation.
     * @callback module:api/SpotApi~listCandlesticksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<[String]>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Market candlesticks
     * Maximum of 1000 points are returned in one query. Be sure not to exceed the limit when specifying `from`, `to` and `interval`
     * @param {String} currencyPair Currency pair
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected. (default to 100)
     * @param {Number} opts.from Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
     * @param {Number} opts.to End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
     * @param {module:model/String} opts.interval Interval time between data points (default to '30m')
     * @param {module:api/SpotApi~listCandlesticksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<[String]>}
     */
    this.listCandlesticks = function(currencyPair, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'currencyPair' is set
      if (currencyPair === undefined || currencyPair === null) {
        throw new Error("Missing the required parameter 'currencyPair' when calling listCandlesticks");
      }

      var pathParams = {
      };
      var queryParams = {
        'currency_pair': currencyPair,
        'limit': opts['limit'],
        'from': opts['from'],
        'to': opts['to'],
        'interval': opts['interval'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [['String']];
      return this.apiClient.callApi(
        '/spot/candlesticks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
