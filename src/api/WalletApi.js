/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.7.2
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Transfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Transfer'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.WalletApi = factory(root.GateApi.ApiClient, root.GateApi.Transfer);
  }
}(this, function(ApiClient, Transfer) {
  'use strict';

  /**
   * Wallet service.
   * @module api/WalletApi
   * @version 4.7.2
   */

  /**
   * Constructs a new WalletApi. 
   * @alias module:api/WalletApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the transfer operation.
     * @callback module:api/WalletApi~transferCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer between accounts
     * Transfer between different accounts. Currently support transfers between the following:  1. spot - margin
     * @param {module:model/Transfer} transfer 
     * @param {module:api/WalletApi~transferCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.transfer = function(transfer, callback) {
      var postBody = transfer;

      // verify the required parameter 'transfer' is set
      if (transfer === undefined || transfer === null) {
        throw new Error("Missing the required parameter 'transfer' when calling transfer");
      }


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

      var authNames = ['api_key', 'api_sign', 'api_timestamp'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/wallet/transfers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
