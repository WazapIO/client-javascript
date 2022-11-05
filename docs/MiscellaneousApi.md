# WhatsApi.MiscellaneousApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instancesInstanceKeyMiscProfilePicGet**](MiscellaneousApi.md#instancesInstanceKeyMiscProfilePicGet) | **GET** /instances/{instance_key}/misc/profile-pic | Get profile pic.
[**instancesInstanceKeyMiscUserInfoPost**](MiscellaneousApi.md#instancesInstanceKeyMiscUserInfoPost) | **POST** /instances/{instance_key}/misc/user-info | Fetches the users info.



## instancesInstanceKeyMiscProfilePicGet

> APIResponse instancesInstanceKeyMiscProfilePicGet(instanceKey, jid)

Get profile pic.

Returns the profile pic of the given user.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MiscellaneousApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let jid = "jid_example"; // String | JID
apiInstance.instancesInstanceKeyMiscProfilePicGet(instanceKey, jid, (error, data, response) => {
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
 **jid** | **String**| JID | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyMiscUserInfoPost

> APIResponse instancesInstanceKeyMiscUserInfoPost(instanceKey, data)

Fetches the users info.

Gets the user info for the given user ids. This does not checks if user is registered or not

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MiscellaneousApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.UserInfoPayload(); // UserInfoPayload | Data
apiInstance.instancesInstanceKeyMiscUserInfoPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**UserInfoPayload**](UserInfoPayload.md)| Data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

