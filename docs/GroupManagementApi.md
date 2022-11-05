# WhatsApi.GroupManagementApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instancesInstanceKeyGroupsAdminGet**](GroupManagementApi.md#instancesInstanceKeyGroupsAdminGet) | **GET** /instances/{instance_key}/groups/admin | Get admin groupss.
[**instancesInstanceKeyGroupsCreatePost**](GroupManagementApi.md#instancesInstanceKeyGroupsCreatePost) | **POST** /instances/{instance_key}/groups/create | Create group.
[**instancesInstanceKeyGroupsGet**](GroupManagementApi.md#instancesInstanceKeyGroupsGet) | **GET** /instances/{instance_key}/groups/ | Get all groups.
[**instancesInstanceKeyGroupsGroupIdAnnouncePut**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdAnnouncePut) | **PUT** /instances/{instance_key}/groups/{group_id}/announce | Set group announce.
[**instancesInstanceKeyGroupsGroupIdDelete**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdDelete) | **DELETE** /instances/{instance_key}/groups/{group_id}/ | Leaves the group.
[**instancesInstanceKeyGroupsGroupIdDescriptionPut**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdDescriptionPut) | **PUT** /instances/{instance_key}/groups/{group_id}/description | Set group description.
[**instancesInstanceKeyGroupsGroupIdGet**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdGet) | **GET** /instances/{instance_key}/groups/{group_id} | Get group.
[**instancesInstanceKeyGroupsGroupIdInviteCodeGet**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdInviteCodeGet) | **GET** /instances/{instance_key}/groups/{group_id}/invite-code | Get group invite code.
[**instancesInstanceKeyGroupsGroupIdLockPut**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdLockPut) | **PUT** /instances/{instance_key}/groups/{group_id}/lock | Set group locked.
[**instancesInstanceKeyGroupsGroupIdNamePut**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdNamePut) | **PUT** /instances/{instance_key}/groups/{group_id}/name | Set group name.
[**instancesInstanceKeyGroupsGroupIdParticipantsAddPost**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdParticipantsAddPost) | **POST** /instances/{instance_key}/groups/{group_id}/participants/add | Add participant.
[**instancesInstanceKeyGroupsGroupIdParticipantsDemotePut**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdParticipantsDemotePut) | **PUT** /instances/{instance_key}/groups/{group_id}/participants/demote | Demote participant.
[**instancesInstanceKeyGroupsGroupIdParticipantsPromotePut**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdParticipantsPromotePut) | **PUT** /instances/{instance_key}/groups/{group_id}/participants/promote | Promote participant.
[**instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete) | **DELETE** /instances/{instance_key}/groups/{group_id}/participants/remove | Remove participant.
[**instancesInstanceKeyGroupsGroupIdProfilePicPut**](GroupManagementApi.md#instancesInstanceKeyGroupsGroupIdProfilePicPut) | **PUT** /instances/{instance_key}/groups/{group_id}/profile-pic | Set group picture.
[**instancesInstanceKeyGroupsInviteInfoGet**](GroupManagementApi.md#instancesInstanceKeyGroupsInviteInfoGet) | **GET** /instances/{instance_key}/groups/invite-info | Get group from invite link.



## instancesInstanceKeyGroupsAdminGet

> APIResponse instancesInstanceKeyGroupsAdminGet(instanceKey)

Get admin groupss.

Returns list of all groups in which you are admin.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
apiInstance.instancesInstanceKeyGroupsAdminGet(instanceKey, (error, data, response) => {
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


## instancesInstanceKeyGroupsCreatePost

> APIResponse instancesInstanceKeyGroupsCreatePost(instanceKey, data)

Create group.

Creates a group with the participant data. The creator is automatically added to the group.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let data = new WhatsApi.GroupCreatePayload(); // GroupCreatePayload | Group create payload
apiInstance.instancesInstanceKeyGroupsCreatePost(instanceKey, data, (error, data, response) => {
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
 **data** | [**GroupCreatePayload**](GroupCreatePayload.md)| Group create payload | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsGet

> APIResponse instancesInstanceKeyGroupsGet(instanceKey, opts)

Get all groups.

Returns list of all groups with participants data. Set include_participants to false to exclude participants data.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let opts = {
  'includeParticipants': "'true'" // String | Include participants data
};
apiInstance.instancesInstanceKeyGroupsGet(instanceKey, opts, (error, data, response) => {
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
 **includeParticipants** | **String**| Include participants data | [optional] [default to &#39;true&#39;]

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdAnnouncePut

> APIResponse instancesInstanceKeyGroupsGroupIdAnnouncePut(instanceKey, announce, groupId)

Set group announce.

Set if non-admins are allowed to send messages in groups

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let announce = false; // Boolean | Announce status
let groupId = "groupId_example"; // String | Group id of the group
apiInstance.instancesInstanceKeyGroupsGroupIdAnnouncePut(instanceKey, announce, groupId, (error, data, response) => {
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
 **announce** | **Boolean**| Announce status | [default to false]
 **groupId** | **String**| Group id of the group | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdDelete

> APIResponse instancesInstanceKeyGroupsGroupIdDelete(instanceKey, groupId)

Leaves the group.

Leaves the specified group.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
apiInstance.instancesInstanceKeyGroupsGroupIdDelete(instanceKey, groupId, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdDescriptionPut

> APIResponse instancesInstanceKeyGroupsGroupIdDescriptionPut(instanceKey, groupId, data)

Set group description.

Changes the group description

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
let data = new WhatsApi.GroupUpdateDescriptionPayload(); // GroupUpdateDescriptionPayload | Group description data
apiInstance.instancesInstanceKeyGroupsGroupIdDescriptionPut(instanceKey, groupId, data, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 
 **data** | [**GroupUpdateDescriptionPayload**](GroupUpdateDescriptionPayload.md)| Group description data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdGet

> APIResponse instancesInstanceKeyGroupsGroupIdGet(instanceKey, groupId)

Get group.

Fetches the group data.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
apiInstance.instancesInstanceKeyGroupsGroupIdGet(instanceKey, groupId, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdInviteCodeGet

> APIResponse instancesInstanceKeyGroupsGroupIdInviteCodeGet(instanceKey, groupId)

Get group invite code.

Gets the invite code of the group.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
apiInstance.instancesInstanceKeyGroupsGroupIdInviteCodeGet(instanceKey, groupId, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdLockPut

> APIResponse instancesInstanceKeyGroupsGroupIdLockPut(instanceKey, locked, groupId)

Set group locked.

Set if non-admins are allowed to change the group dp and other stuff

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let locked = false; // Boolean | Locked status
let groupId = "groupId_example"; // String | Group id of the group
apiInstance.instancesInstanceKeyGroupsGroupIdLockPut(instanceKey, locked, groupId, (error, data, response) => {
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
 **locked** | **Boolean**| Locked status | [default to false]
 **groupId** | **String**| Group id of the group | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdNamePut

> APIResponse instancesInstanceKeyGroupsGroupIdNamePut(instanceKey, groupId, data)

Set group name.

Changes the group name. The max limit is 22 chars

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
let data = new WhatsApi.GroupUpdateNamePayload(); // GroupUpdateNamePayload | Group name data
apiInstance.instancesInstanceKeyGroupsGroupIdNamePut(instanceKey, groupId, data, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 
 **data** | [**GroupUpdateNamePayload**](GroupUpdateNamePayload.md)| Group name data | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdParticipantsAddPost

> APIResponse instancesInstanceKeyGroupsGroupIdParticipantsAddPost(instanceKey, groupId, data)

Add participant.

Handles adding participants to a group. You must be admin in the group or the query will fail.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
let data = new WhatsApi.GroupUpdateParticipantsPayload(); // GroupUpdateParticipantsPayload | Group update payload
apiInstance.instancesInstanceKeyGroupsGroupIdParticipantsAddPost(instanceKey, groupId, data, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 
 **data** | [**GroupUpdateParticipantsPayload**](GroupUpdateParticipantsPayload.md)| Group update payload | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdParticipantsDemotePut

> APIResponse instancesInstanceKeyGroupsGroupIdParticipantsDemotePut(instanceKey, groupId, data)

Demote participant.

Demotes admins in groups. You must be admin in the group or the query will fail.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
let data = new WhatsApi.GroupUpdateParticipantsPayload(); // GroupUpdateParticipantsPayload | Group update payload
apiInstance.instancesInstanceKeyGroupsGroupIdParticipantsDemotePut(instanceKey, groupId, data, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 
 **data** | [**GroupUpdateParticipantsPayload**](GroupUpdateParticipantsPayload.md)| Group update payload | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdParticipantsPromotePut

> APIResponse instancesInstanceKeyGroupsGroupIdParticipantsPromotePut(instanceKey, groupId, data)

Promote participant.

Promotes participants to admin. You must be admin in the group or the query will fail.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
let data = new WhatsApi.GroupUpdateParticipantsPayload(); // GroupUpdateParticipantsPayload | Group update payload
apiInstance.instancesInstanceKeyGroupsGroupIdParticipantsPromotePut(instanceKey, groupId, data, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 
 **data** | [**GroupUpdateParticipantsPayload**](GroupUpdateParticipantsPayload.md)| Group update payload | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete

> APIResponse instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete(instanceKey, groupId, data)

Remove participant.

Handles removing participants from a group. You must be admin in the group or the query will fail.

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
let data = new WhatsApi.GroupUpdateParticipantsPayload(); // GroupUpdateParticipantsPayload | Group update payload
apiInstance.instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete(instanceKey, groupId, data, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 
 **data** | [**GroupUpdateParticipantsPayload**](GroupUpdateParticipantsPayload.md)| Group update payload | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsGroupIdProfilePicPut

> APIResponse instancesInstanceKeyGroupsGroupIdProfilePicPut(instanceKey, groupId, instancesInstanceKeyGroupsGroupIdProfilePicPutRequest)

Set group picture.

Changes the group profile picture. Currently it only seems to accept JPEG images only

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let groupId = "groupId_example"; // String | Group id of the group
let instancesInstanceKeyGroupsGroupIdProfilePicPutRequest = new WhatsApi.InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest(); // InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest | 
apiInstance.instancesInstanceKeyGroupsGroupIdProfilePicPut(instanceKey, groupId, instancesInstanceKeyGroupsGroupIdProfilePicPutRequest, (error, data, response) => {
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
 **groupId** | **String**| Group id of the group | 
 **instancesInstanceKeyGroupsGroupIdProfilePicPutRequest** | [**InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest**](InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest.md)|  | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## instancesInstanceKeyGroupsInviteInfoGet

> APIResponse instancesInstanceKeyGroupsInviteInfoGet(instanceKey, inviteLink)

Get group from invite link.

Gets a group info from an invite link. An invite link is a link that can be used to join a group. It is usually in the format https://chat.whatsapp.com/{invitecode}

### Example

```javascript
import WhatsApi from 'WhatsAPI';
let defaultClient = WhatsApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatsApi.GroupManagementApi();
let instanceKey = "instanceKey_example"; // String | Instance key
let inviteLink = "inviteLink_example"; // String | The invite link to check
apiInstance.instancesInstanceKeyGroupsInviteInfoGet(instanceKey, inviteLink, (error, data, response) => {
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
 **inviteLink** | **String**| The invite link to check | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

