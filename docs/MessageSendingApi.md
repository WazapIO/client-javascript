# WhatsApi.MessageSendingApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instancesInstanceKeySendAudioPost**](MessageSendingApi.md#instancesInstanceKeySendAudioPost) | **POST** /instances/{instance_key}/send/audio | Send raw audio.
[**instancesInstanceKeySendButtonMediaPost**](MessageSendingApi.md#instancesInstanceKeySendButtonMediaPost) | **POST** /instances/{instance_key}/send/button-media | Send a button message with a media header.
[**instancesInstanceKeySendButtonsPost**](MessageSendingApi.md#instancesInstanceKeySendButtonsPost) | **POST** /instances/{instance_key}/send/buttons | Send a button message.
[**instancesInstanceKeySendContactPost**](MessageSendingApi.md#instancesInstanceKeySendContactPost) | **POST** /instances/{instance_key}/send/contact | Send a contact message.
[**instancesInstanceKeySendDocumentPost**](MessageSendingApi.md#instancesInstanceKeySendDocumentPost) | **POST** /instances/{instance_key}/send/document | Send raw document.
[**instancesInstanceKeySendImagePost**](MessageSendingApi.md#instancesInstanceKeySendImagePost) | **POST** /instances/{instance_key}/send/image | Send raw image.
[**instancesInstanceKeySendListPost**](MessageSendingApi.md#instancesInstanceKeySendListPost) | **POST** /instances/{instance_key}/send/list | Send a List message.
[**instancesInstanceKeySendLocationPost**](MessageSendingApi.md#instancesInstanceKeySendLocationPost) | **POST** /instances/{instance_key}/send/location | Send a location message.
[**instancesInstanceKeySendMediaPost**](MessageSendingApi.md#instancesInstanceKeySendMediaPost) | **POST** /instances/{instance_key}/send/media | Send a media message.
[**instancesInstanceKeySendPollPost**](MessageSendingApi.md#instancesInstanceKeySendPollPost) | **POST** /instances/{instance_key}/send/poll | Send a Poll message.
[**instancesInstanceKeySendTemplateMediaPost**](MessageSendingApi.md#instancesInstanceKeySendTemplateMediaPost) | **POST** /instances/{instance_key}/send/template-media | Send a template message with media.
[**instancesInstanceKeySendTemplatePost**](MessageSendingApi.md#instancesInstanceKeySendTemplatePost) | **POST** /instances/{instance_key}/send/template | Send a template message.
[**instancesInstanceKeySendTextPost**](MessageSendingApi.md#instancesInstanceKeySendTextPost) | **POST** /instances/{instance_key}/send/text | Send a text message.
[**instancesInstanceKeySendUploadPost**](MessageSendingApi.md#instancesInstanceKeySendUploadPost) | **POST** /instances/{instance_key}/send/upload | Upload media.
[**instancesInstanceKeySendVideoPost**](MessageSendingApi.md#instancesInstanceKeySendVideoPost) | **POST** /instances/{instance_key}/send/video | Send raw video.



## instancesInstanceKeySendAudioPost

> APIResponse instancesInstanceKeySendAudioPost(instanceKey, to, instancesInstanceKeySendAudioPostRequest, opts)

Send raw audio.

Sends a audio message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let to = "to_example"; // String | The recipient's number
let instancesInstanceKeySendAudioPostRequest = new WhatsApi.InstancesInstanceKeySendAudioPostRequest(); // InstancesInstanceKeySendAudioPostRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.instancesInstanceKeySendAudioPost(instanceKey, to, instancesInstanceKeySendAudioPostRequest, opts, (error, data, response) => {
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
 **to** | **String**| The recipient&#39;s number | 
 **instancesInstanceKeySendAudioPostRequest** | [**InstancesInstanceKeySendAudioPostRequest**](InstancesInstanceKeySendAudioPostRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendButtonMediaPost

> APIResponse instancesInstanceKeySendButtonMediaPost(instanceKey, data)

Send a button message with a media header.

Sends an interactive button message to the given user. This message also has media header with it. Make sure that all the button ids are unique

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.ButtonMessageWithMediaPayload(); // ButtonMessageWithMediaPayload | Message data
apiInstance.instancesInstanceKeySendButtonMediaPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**ButtonMessageWithMediaPayload**](ButtonMessageWithMediaPayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendButtonsPost

> APIResponse instancesInstanceKeySendButtonsPost(instanceKey, data)

Send a button message.

Sends an interactive button message to the given user. Make sure that all the button ids are unique

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.ButtonMessagePayload(); // ButtonMessagePayload | Message data
apiInstance.instancesInstanceKeySendButtonsPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**ButtonMessagePayload**](ButtonMessagePayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendContactPost

> APIResponse instancesInstanceKeySendContactPost(instanceKey, data)

Send a contact message.

Sends a contact (vcard) message to the given user.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.ContactMessagePayload(); // ContactMessagePayload | Message data
apiInstance.instancesInstanceKeySendContactPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**ContactMessagePayload**](ContactMessagePayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendDocumentPost

> APIResponse instancesInstanceKeySendDocumentPost(instanceKey, to, instancesInstanceKeySendDocumentPostRequest, opts)

Send raw document.

Sends a document message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let to = "to_example"; // String | The recipient's number
let instancesInstanceKeySendDocumentPostRequest = new WhatsApi.InstancesInstanceKeySendDocumentPostRequest(); // InstancesInstanceKeySendDocumentPostRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.instancesInstanceKeySendDocumentPost(instanceKey, to, instancesInstanceKeySendDocumentPostRequest, opts, (error, data, response) => {
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
 **to** | **String**| The recipient&#39;s number | 
 **instancesInstanceKeySendDocumentPostRequest** | [**InstancesInstanceKeySendDocumentPostRequest**](InstancesInstanceKeySendDocumentPostRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendImagePost

> APIResponse instancesInstanceKeySendImagePost(instanceKey, to, instancesInstanceKeySendImagePostRequest, opts)

Send raw image.

Sends a image message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let to = "to_example"; // String | The recipient's number
let instancesInstanceKeySendImagePostRequest = new WhatsApi.InstancesInstanceKeySendImagePostRequest(); // InstancesInstanceKeySendImagePostRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.instancesInstanceKeySendImagePost(instanceKey, to, instancesInstanceKeySendImagePostRequest, opts, (error, data, response) => {
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
 **to** | **String**| The recipient&#39;s number | 
 **instancesInstanceKeySendImagePostRequest** | [**InstancesInstanceKeySendImagePostRequest**](InstancesInstanceKeySendImagePostRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendListPost

> APIResponse instancesInstanceKeySendListPost(instanceKey, data)

Send a List message.

Sends an interactive List message to the given user.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.ListMessagePayload(); // ListMessagePayload | Message data
apiInstance.instancesInstanceKeySendListPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**ListMessagePayload**](ListMessagePayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendLocationPost

> APIResponse instancesInstanceKeySendLocationPost(instanceKey, data)

Send a location message.

Sends a location message to the given user. This is static location and does not update Note: The Address and Url fields are optional

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.LocationMessagePayload(); // LocationMessagePayload | Message data
apiInstance.instancesInstanceKeySendLocationPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**LocationMessagePayload**](LocationMessagePayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendMediaPost

> APIResponse instancesInstanceKeySendMediaPost(instanceKey, data)

Send a media message.

Sends a media message to the given user.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.SendMediaPayload(); // SendMediaPayload | Message data
apiInstance.instancesInstanceKeySendMediaPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**SendMediaPayload**](SendMediaPayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendPollPost

> APIResponse instancesInstanceKeySendPollPost(instanceKey, data)

Send a Poll message.

Sends an interactive poll message to the given user. The poll message is a new feature that is currently in beta.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.PollMessagePayload(); // PollMessagePayload | Message data
apiInstance.instancesInstanceKeySendPollPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**PollMessagePayload**](PollMessagePayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendTemplateMediaPost

> APIResponse instancesInstanceKeySendTemplateMediaPost(instanceKey, data)

Send a template message with media.

Sends an interactive template message with a media header to the given user. Note: The valid button types are \&quot;replyButton\&quot;, \&quot;urlButton\&quot;, \&quot;callButton\&quot;

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.TemplateButtonWithMediaPayload(); // TemplateButtonWithMediaPayload | Message data
apiInstance.instancesInstanceKeySendTemplateMediaPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**TemplateButtonWithMediaPayload**](TemplateButtonWithMediaPayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendTemplatePost

> APIResponse instancesInstanceKeySendTemplatePost(instanceKey, data)

Send a template message.

Sends an interactive template message to the given user. Note: The valid button types are \&quot;replyButton\&quot;, \&quot;urlButton\&quot;, \&quot;callButton\&quot;

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.TemplateButtonPayload(); // TemplateButtonPayload | Message data
apiInstance.instancesInstanceKeySendTemplatePost(instanceKey, data, (error, data, response) => {
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
 **data** | [**TemplateButtonPayload**](TemplateButtonPayload.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendTextPost

> APIResponse instancesInstanceKeySendTextPost(instanceKey, data)

Send a text message.

Sends a text message to the given user.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.TextMessage(); // TextMessage | Message data
apiInstance.instancesInstanceKeySendTextPost(instanceKey, data, (error, data, response) => {
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
 **data** | [**TextMessage**](TextMessage.md)| Message data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendUploadPost

> APIResponse instancesInstanceKeySendUploadPost(instanceKey, type, instancesInstanceKeySendUploadPostRequest)

Upload media.

Uploads media to WhatsApp servers and returns the media keys. Store the returned media keys, as you will need them to send media messages

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let type = "type_example"; // String | Media type
let instancesInstanceKeySendUploadPostRequest = new WhatsApi.InstancesInstanceKeySendUploadPostRequest(); // InstancesInstanceKeySendUploadPostRequest | 
apiInstance.instancesInstanceKeySendUploadPost(instanceKey, type, instancesInstanceKeySendUploadPostRequest, (error, data, response) => {
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
 **type** | **String**| Media type | 
 **instancesInstanceKeySendUploadPostRequest** | [**InstancesInstanceKeySendUploadPostRequest**](InstancesInstanceKeySendUploadPostRequest.md)|  | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeySendVideoPost

> APIResponse instancesInstanceKeySendVideoPost(instanceKey, to, instancesInstanceKeySendVideoPostRequest, opts)

Send raw video.

Sends a video message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.MessageSendingApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let to = "to_example"; // String | The recipient's number
let instancesInstanceKeySendVideoPostRequest = new WhatsApi.InstancesInstanceKeySendVideoPostRequest(); // InstancesInstanceKeySendVideoPostRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.instancesInstanceKeySendVideoPost(instanceKey, to, instancesInstanceKeySendVideoPostRequest, opts, (error, data, response) => {
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
 **to** | **String**| The recipient&#39;s number | 
 **instancesInstanceKeySendVideoPostRequest** | [**InstancesInstanceKeySendVideoPostRequest**](InstancesInstanceKeySendVideoPostRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

