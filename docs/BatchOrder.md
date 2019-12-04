# GateApi.BatchOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 16 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] 
**succeeded** | **Boolean** | Whether order succeeds | [optional] 
**label** | **String** | Error label, empty string if order succeeds | [optional] 
**message** | **String** | Detailed error message, empty string if order succeeds | [optional] 
**id** | **String** | Order ID | [optional] 
**createTime** | **String** | Order creation time | [optional] 
**status** | **String** | Order status  - &#x60;open&#x60;: to be filled - &#x60;closed&#x60;: filled - &#x60;cancelled&#x60;: cancelled | [optional] 
**currencyPair** | **String** | Currency pair | [optional] 
**type** | **String** | Order type. limit - limit order | [optional] [default to &#39;limit&#39;]
**account** | **String** | Account type. spot - use spot account; margin - use margin account | [optional] [default to &#39;spot&#39;]
**side** | **String** | Order side | [optional] 
**amount** | **String** | Trade amount | [optional] 
**price** | **String** | Order price | [optional] 
**timeInForce** | **String** | Time in force | [optional] [default to &#39;gtc&#39;]
**left** | **String** | Amount left to fill | [optional] 
**fillPrice** | **String** | Fill price of the order | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `limit` (value: `"limit"`)




<a name="AccountEnum"></a>
## Enum: AccountEnum


* `spot` (value: `"spot"`)

* `margin` (value: `"margin"`)




<a name="SideEnum"></a>
## Enum: SideEnum


* `buy` (value: `"buy"`)

* `sell` (value: `"sell"`)




<a name="TimeInForceEnum"></a>
## Enum: TimeInForceEnum


* `gtc` (value: `"gtc"`)

* `ioc` (value: `"ioc"`)



