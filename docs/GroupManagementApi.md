# WhatsApi.GroupManagementApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addParticipant**](GroupManagementApi.md#addParticipant) | **POST** /instances/{instance_key}/groups/{group_id}/participants/add | Add participant.
[**createGroup**](GroupManagementApi.md#createGroup) | **POST** /instances/{instance_key}/groups/create | Create group.
[**demoteParticipant**](GroupManagementApi.md#demoteParticipant) | **PUT** /instances/{instance_key}/groups/{group_id}/participants/demote | Demote participant.
[**getAdminGroups**](GroupManagementApi.md#getAdminGroups) | **GET** /instances/{instance_key}/groups/admin | Get admin groups.
[**getAllGroups**](GroupManagementApi.md#getAllGroups) | **GET** /instances/{instance_key}/groups/ | Get all groups.
[**getAllParticipants**](GroupManagementApi.md#getAllParticipants) | **GET** /instances/{instance_key}/groups/{group_id}/participants | Get all participants.
[**getGroup**](GroupManagementApi.md#getGroup) | **GET** /instances/{instance_key}/groups/{group_id} | Get group.
[**getGroupFromInviteLink**](GroupManagementApi.md#getGroupFromInviteLink) | **GET** /instances/{instance_key}/groups/invite-info | Get group from invite link.
[**getGroupInviteCode**](GroupManagementApi.md#getGroupInviteCode) | **GET** /instances/{instance_key}/groups/{group_id}/invite-code | Get group invite code.
[**joinGroupWithLink**](GroupManagementApi.md#joinGroupWithLink) | **GET** /instances/{instance_key}/groups/join | Join group with invite code.
[**leaveGroup**](GroupManagementApi.md#leaveGroup) | **DELETE** /instances/{instance_key}/groups/{group_id}/ | Leaves the group.
[**promoteParticipant**](GroupManagementApi.md#promoteParticipant) | **PUT** /instances/{instance_key}/groups/{group_id}/participants/promote | Promote participant.
[**removeParticipant**](GroupManagementApi.md#removeParticipant) | **DELETE** /instances/{instance_key}/groups/{group_id}/participants/remove | Remove participant.
[**setGroupAnnounce**](GroupManagementApi.md#setGroupAnnounce) | **PUT** /instances/{instance_key}/groups/{group_id}/announce | Set group announce.
[**setGroupDescription**](GroupManagementApi.md#setGroupDescription) | **PUT** /instances/{instance_key}/groups/{group_id}/description | Set group description.
[**setGroupLocked**](GroupManagementApi.md#setGroupLocked) | **PUT** /instances/{instance_key}/groups/{group_id}/lock | Set group locked.
[**setGroupName**](GroupManagementApi.md#setGroupName) | **PUT** /instances/{instance_key}/groups/{group_id}/name | Set group name.
[**setGroupPicture**](GroupManagementApi.md#setGroupPicture) | **PUT** /instances/{instance_key}/groups/{group_id}/profile-pic | Set group picture.



## addParticipant

> APIResponse addParticipant(instanceKey, groupId, data)

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
apiInstance.addParticipant(instanceKey, groupId, data, (error, data, response) => {
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


## createGroup

> APIResponse createGroup(instanceKey, data)

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
apiInstance.createGroup(instanceKey, data, (error, data, response) => {
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


## demoteParticipant

> APIResponse demoteParticipant(instanceKey, groupId, data)

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
apiInstance.demoteParticipant(instanceKey, groupId, data, (error, data, response) => {
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


## getAdminGroups

> APIResponse getAdminGroups(instanceKey)

Get admin groups.

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
apiInstance.getAdminGroups(instanceKey, (error, data, response) => {
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


## getAllGroups

> APIResponse getAllGroups(instanceKey, opts)

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
apiInstance.getAllGroups(instanceKey, opts, (error, data, response) => {
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


## getAllParticipants

> APIResponse getAllParticipants(instanceKey, groupId)

Get all participants.

Returns all participants of the group.

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
apiInstance.getAllParticipants(instanceKey, groupId, (error, data, response) => {
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


## getGroup

> APIResponse getGroup(instanceKey, groupId)

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
apiInstance.getGroup(instanceKey, groupId, (error, data, response) => {
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


## getGroupFromInviteLink

> APIResponse getGroupFromInviteLink(instanceKey, inviteLink)

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
apiInstance.getGroupFromInviteLink(instanceKey, inviteLink, (error, data, response) => {
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


## getGroupInviteCode

> APIResponse getGroupInviteCode(instanceKey, groupId)

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
apiInstance.getGroupInviteCode(instanceKey, groupId, (error, data, response) => {
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


## joinGroupWithLink

> APIResponse joinGroupWithLink(instanceKey, inviteCode)

Join group with invite code.

Joins a group with group invite link. An invite link is a link that can be used to join a group. It is usually in the format https://chat.whatsapp.com/{invitecode} You have to put invite_code in the url of the request. The invite code is the part after https://chat.whatsapp.com/ For example, if the invite link is https://chat.whatsapp.com/dsfsf34r3d3dsds, then the invite code is &#x60;dsfsf34r3d3dsds“

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
let inviteCode = "inviteCode_example"; // String | The invite code of group you want to join
apiInstance.joinGroupWithLink(instanceKey, inviteCode, (error, data, response) => {
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
 **inviteCode** | **String**| The invite code of group you want to join | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## leaveGroup

> APIResponse leaveGroup(instanceKey, groupId)

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
apiInstance.leaveGroup(instanceKey, groupId, (error, data, response) => {
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


## promoteParticipant

> APIResponse promoteParticipant(instanceKey, groupId, data)

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
apiInstance.promoteParticipant(instanceKey, groupId, data, (error, data, response) => {
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


## removeParticipant

> APIResponse removeParticipant(instanceKey, groupId, data)

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
apiInstance.removeParticipant(instanceKey, groupId, data, (error, data, response) => {
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


## setGroupAnnounce

> APIResponse setGroupAnnounce(instanceKey, announce, groupId)

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
apiInstance.setGroupAnnounce(instanceKey, announce, groupId, (error, data, response) => {
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


## setGroupDescription

> APIResponse setGroupDescription(instanceKey, groupId, data)

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
apiInstance.setGroupDescription(instanceKey, groupId, data, (error, data, response) => {
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


## setGroupLocked

> APIResponse setGroupLocked(instanceKey, locked, groupId)

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
apiInstance.setGroupLocked(instanceKey, locked, groupId, (error, data, response) => {
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


## setGroupName

> APIResponse setGroupName(instanceKey, groupId, data)

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
apiInstance.setGroupName(instanceKey, groupId, data, (error, data, response) => {
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


## setGroupPicture

> APIResponse setGroupPicture(instanceKey, groupId, setGroupPictureRequest)

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
let setGroupPictureRequest = new WhatsApi.SetGroupPictureRequest(); // SetGroupPictureRequest | 
apiInstance.setGroupPicture(instanceKey, groupId, setGroupPictureRequest, (error, data, response) => {
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
 **setGroupPictureRequest** | [**SetGroupPictureRequest**](SetGroupPictureRequest.md)|  | 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

