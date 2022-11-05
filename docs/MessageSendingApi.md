# WhatsApi.MessageSendingApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendAudio**](MessageSendingApi.md#sendAudio) | **POST** /instances/{instance_key}/send/audio | Send raw audio.
[**sendButtonMessage**](MessageSendingApi.md#sendButtonMessage) | **POST** /instances/{instance_key}/send/buttons | Send a button message.
[**sendButtonWithMedia**](MessageSendingApi.md#sendButtonWithMedia) | **POST** /instances/{instance_key}/send/button-media | Send a button message with a media header.
[**sendContact**](MessageSendingApi.md#sendContact) | **POST** /instances/{instance_key}/send/contact | Send a contact message.
[**sendDocument**](MessageSendingApi.md#sendDocument) | **POST** /instances/{instance_key}/send/document | Send raw document.
[**sendImage**](MessageSendingApi.md#sendImage) | **POST** /instances/{instance_key}/send/image | Send raw image.
[**sendListMessage**](MessageSendingApi.md#sendListMessage) | **POST** /instances/{instance_key}/send/list | Send a List message.
[**sendLocation**](MessageSendingApi.md#sendLocation) | **POST** /instances/{instance_key}/send/location | Send a location message.
[**sendMediaMessage**](MessageSendingApi.md#sendMediaMessage) | **POST** /instances/{instance_key}/send/media | Send a media message.
[**sendPollMessage**](MessageSendingApi.md#sendPollMessage) | **POST** /instances/{instance_key}/send/poll | Send a Poll message.
[**sendTemplate**](MessageSendingApi.md#sendTemplate) | **POST** /instances/{instance_key}/send/template | Send a template message.
[**sendTemplateWithMedia**](MessageSendingApi.md#sendTemplateWithMedia) | **POST** /instances/{instance_key}/send/template-media | Send a template message with media.
[**sendTextMessage**](MessageSendingApi.md#sendTextMessage) | **POST** /instances/{instance_key}/send/text | Send a text message.
[**sendVideo**](MessageSendingApi.md#sendVideo) | **POST** /instances/{instance_key}/send/video | Send raw video.
[**uploadMedia**](MessageSendingApi.md#uploadMedia) | **POST** /instances/{instance_key}/send/upload | Upload media.



## sendAudio

> APIResponse sendAudio(instanceKey, to, sendAudioRequest, opts)

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
let sendAudioRequest = new WhatsApi.SendAudioRequest(); // SendAudioRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.sendAudio(instanceKey, to, sendAudioRequest, opts, (error, data, response) => {
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
 **sendAudioRequest** | [**SendAudioRequest**](SendAudioRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## sendButtonMessage

> APIResponse sendButtonMessage(instanceKey, data)

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
apiInstance.sendButtonMessage(instanceKey, data, (error, data, response) => {
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


## sendButtonWithMedia

> APIResponse sendButtonWithMedia(instanceKey, data)

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
apiInstance.sendButtonWithMedia(instanceKey, data, (error, data, response) => {
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


## sendContact

> APIResponse sendContact(instanceKey, data)

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
apiInstance.sendContact(instanceKey, data, (error, data, response) => {
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


## sendDocument

> APIResponse sendDocument(instanceKey, to, sendDocumentRequest, opts)

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
let sendDocumentRequest = new WhatsApi.SendDocumentRequest(); // SendDocumentRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.sendDocument(instanceKey, to, sendDocumentRequest, opts, (error, data, response) => {
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
 **sendDocumentRequest** | [**SendDocumentRequest**](SendDocumentRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## sendImage

> APIResponse sendImage(instanceKey, to, sendImageRequest, opts)

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
let sendImageRequest = new WhatsApi.SendImageRequest(); // SendImageRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.sendImage(instanceKey, to, sendImageRequest, opts, (error, data, response) => {
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
 **sendImageRequest** | [**SendImageRequest**](SendImageRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## sendListMessage

> APIResponse sendListMessage(instanceKey, data)

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
apiInstance.sendListMessage(instanceKey, data, (error, data, response) => {
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


## sendLocation

> APIResponse sendLocation(instanceKey, data)

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
apiInstance.sendLocation(instanceKey, data, (error, data, response) => {
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


## sendMediaMessage

> APIResponse sendMediaMessage(instanceKey, data)

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
apiInstance.sendMediaMessage(instanceKey, data, (error, data, response) => {
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


## sendPollMessage

> APIResponse sendPollMessage(instanceKey, data)

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
apiInstance.sendPollMessage(instanceKey, data, (error, data, response) => {
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


## sendTemplate

> APIResponse sendTemplate(instanceKey, data)

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
apiInstance.sendTemplate(instanceKey, data, (error, data, response) => {
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


## sendTemplateWithMedia

> APIResponse sendTemplateWithMedia(instanceKey, data)

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
apiInstance.sendTemplateWithMedia(instanceKey, data, (error, data, response) => {
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


## sendTextMessage

> APIResponse sendTextMessage(instanceKey, data)

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
apiInstance.sendTextMessage(instanceKey, data, (error, data, response) => {
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


## sendVideo

> APIResponse sendVideo(instanceKey, to, sendVideoRequest, opts)

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
let sendVideoRequest = new WhatsApi.SendVideoRequest(); // SendVideoRequest | 
let opts = {
  'caption': "caption_example" // String | Attached caption
};
apiInstance.sendVideo(instanceKey, to, sendVideoRequest, opts, (error, data, response) => {
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
 **sendVideoRequest** | [**SendVideoRequest**](SendVideoRequest.md)|  | 
 **caption** | **String**| Attached caption | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## uploadMedia

> APIResponse uploadMedia(instanceKey, type, uploadMediaRequest)

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
let uploadMediaRequest = new WhatsApi.UploadMediaRequest(); // UploadMediaRequest | 
apiInstance.uploadMedia(instanceKey, type, uploadMediaRequest, (error, data, response) => {
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
 **uploadMediaRequest** | [**UploadMediaRequest**](UploadMediaRequest.md)|  | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

