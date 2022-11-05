# WhatsApi.InstanceApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instancesCreateGet**](InstanceApi.md#instancesCreateGet) | **GET** /instances/create | Creates a new instance key.
[**instancesInstanceKeyContactsGet**](InstanceApi.md#instancesInstanceKeyContactsGet) | **GET** /instances/{instance_key}/contacts | Get contacts.
[**instancesInstanceKeyDeleteDelete**](InstanceApi.md#instancesInstanceKeyDeleteDelete) | **DELETE** /instances/{instance_key}/delete | Delete Instance.
[**instancesInstanceKeyGet**](InstanceApi.md#instancesInstanceKeyGet) | **GET** /instances/{instance_key}/ | Get Instance.
[**instancesInstanceKeyLogoutDelete**](InstanceApi.md#instancesInstanceKeyLogoutDelete) | **DELETE** /instances/{instance_key}/logout | Logout Instance.
[**instancesInstanceKeyQrcodeGet**](InstanceApi.md#instancesInstanceKeyQrcodeGet) | **GET** /instances/{instance_key}/qrcode | Get QrCode.
[**instancesInstanceKeyWebhookPut**](InstanceApi.md#instancesInstanceKeyWebhookPut) | **PUT** /instances/{instance_key}/webhook | Change Webhook url.
[**instancesListGet**](InstanceApi.md#instancesListGet) | **GET** /instances/list | Get all instances.



## instancesCreateGet

> APIResponse instancesCreateGet(opts)

Creates a new instance key.

This endpoint is used to create a new WhatsApp Web instance.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
let opts = {
  'instanceKey': "instanceKey_example" // String | Insert instance key if you want to provide custom key
};
apiInstance.instancesCreateGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceKey** | **String**| Insert instance key if you want to provide custom key | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyContactsGet

> APIResponse instancesInstanceKeyContactsGet(instanceKey)

Get contacts.

Fetches the list of contacts in the instance.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
let instanceKey = "instanceKey_example"; // String | Instance key
apiInstance.instancesInstanceKeyContactsGet(instanceKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceKey** | **String**| Instance key | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyDeleteDelete

> APIResponse instancesInstanceKeyDeleteDelete(instanceKey)

Delete Instance.

Deletes the instance with the provided key.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
let instanceKey = "instanceKey_example"; // String | Instance key
apiInstance.instancesInstanceKeyDeleteDelete(instanceKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceKey** | **String**| Instance key | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyGet

> APIResponse instancesInstanceKeyGet(instanceKey)

Get Instance.

Returns the instance data of single instance with connection status.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
let instanceKey = "instanceKey_example"; // String | Instance key
apiInstance.instancesInstanceKeyGet(instanceKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceKey** | **String**| Instance key | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyLogoutDelete

> APIResponse instancesInstanceKeyLogoutDelete(instanceKey)

Logout Instance.

Logouts of the instance with the provided key.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
let instanceKey = "instanceKey_example"; // String | Instance key
apiInstance.instancesInstanceKeyLogoutDelete(instanceKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceKey** | **String**| Instance key | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyQrcodeGet

> APIResponse instancesInstanceKeyQrcodeGet(instanceKey)

Get QrCode.

Returns the qrcode in the base64 format.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
let instanceKey = "instanceKey_example"; // String | Instance key
apiInstance.instancesInstanceKeyQrcodeGet(instanceKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceKey** | **String**| Instance key | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyWebhookPut

> APIResponse instancesInstanceKeyWebhookPut(instanceKey, data)

Change Webhook url.

Changes the webhook url of an instance.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.WebhookPayload(); // WebhookPayload | Message data
apiInstance.instancesInstanceKeyWebhookPut(instanceKey, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceKey** | **String**| Instance key | 
 **data** | [**WebhookPayload**](WebhookPayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesListGet

> APIResponse instancesListGet()

Get all instances.

Fetches the list of all Instances with login status.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.InstanceApi();
apiInstance.instancesListGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

