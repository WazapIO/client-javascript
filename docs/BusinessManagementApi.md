# WhatsApi.BusinessManagementApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instancesInstanceKeyBusinessCatalogGet**](BusinessManagementApi.md#instancesInstanceKeyBusinessCatalogGet) | **GET** /instances/{instance_key}/business/catalog | Fetches the catlog.



## instancesInstanceKeyBusinessCatalogGet

> APIResponse instancesInstanceKeyBusinessCatalogGet(instanceKey)

Fetches the catlog.

Gets list of all products registered by you.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.BusinessManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
apiInstance.instancesInstanceKeyBusinessCatalogGet(instanceKey, (error, data, response) => {
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

