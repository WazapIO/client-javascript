/**
 * WhatsAPI Go
 * The V2 of WhatsAPI Go
 *
 * The version of the OpenAPI document: 2.0
 * Contact: manjit@sponsorbook.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import APIResponse from '../models/APIResponse';
import GroupCreatePayload from '../models/GroupCreatePayload';
import GroupUpdateDescriptionPayload from '../models/GroupUpdateDescriptionPayload';
import GroupUpdateNamePayload from '../models/GroupUpdateNamePayload';
import GroupUpdateParticipantsPayload from '../models/GroupUpdateParticipantsPayload';
import InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest from '../models/InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest';

/**
* GroupManagement service.
* @module WhatsAPI/whatsapi/GroupManagementApi
* @version 1.0.0
*/
export default class GroupManagementApi {

    /**
    * Constructs a new GroupManagementApi. 
    * @alias module:WhatsAPI/whatsapi/GroupManagementApi
    * @class
    * @param {module:WhatsAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:WhatsAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsAdminGet operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsAdminGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get admin groupss.
     * Returns list of all groups in which you are admin.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsAdminGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsAdminGet(instanceKey, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsAdminGet");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/admin', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsCreatePost operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create group.
     * Creates a group with the participant data. The creator is automatically added to the group.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/models/GroupCreatePayload} data Group create payload
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsCreatePost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsCreatePost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyGroupsCreatePost");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGet operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all groups.
     * Returns list of all groups with participants data. Set include_participants to false to exclude participants data.
     * @param {String} instanceKey Instance key
     * @param {Object} opts Optional parameters
     * @param {module:WhatsAPI/models/String} opts.includeParticipants Include participants data (default to 'true')
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGet(instanceKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGet");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
        'include_participants': opts['includeParticipants']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdAnnouncePut operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdAnnouncePutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set group announce.
     * Set if non-admins are allowed to send messages in groups
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/models/Boolean} announce Announce status
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdAnnouncePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdAnnouncePut(instanceKey, announce, groupId, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdAnnouncePut");
      }
      // verify the required parameter 'announce' is set
      if (announce === undefined || announce === null) {
        throw new Error("Missing the required parameter 'announce' when calling instancesInstanceKeyGroupsGroupIdAnnouncePut");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdAnnouncePut");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'announce': announce,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/announce', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdDelete operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leaves the group.
     * Leaves the specified group.
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdDelete(instanceKey, groupId, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdDelete");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdDelete");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdDescriptionPut operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdDescriptionPutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set group description.
     * Changes the group description
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/models/GroupUpdateDescriptionPayload} data Group description data
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdDescriptionPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdDescriptionPut(instanceKey, groupId, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdDescriptionPut");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdDescriptionPut");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyGroupsGroupIdDescriptionPut");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/description', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdGet operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group.
     * Fetches the group data.
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdGet(instanceKey, groupId, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdGet");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdGet");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdInviteCodeGet operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdInviteCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group invite code.
     * Gets the invite code of the group.
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdInviteCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdInviteCodeGet(instanceKey, groupId, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdInviteCodeGet");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdInviteCodeGet");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/invite-code', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdLockPut operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdLockPutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set group locked.
     * Set if non-admins are allowed to change the group dp and other stuff
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/models/Boolean} locked Locked status
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdLockPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdLockPut(instanceKey, locked, groupId, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdLockPut");
      }
      // verify the required parameter 'locked' is set
      if (locked === undefined || locked === null) {
        throw new Error("Missing the required parameter 'locked' when calling instancesInstanceKeyGroupsGroupIdLockPut");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdLockPut");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'locked': locked,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/lock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdNamePut operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set group name.
     * Changes the group name. The max limit is 22 chars
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/models/GroupUpdateNamePayload} data Group name data
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdNamePut(instanceKey, groupId, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdNamePut");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdNamePut");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyGroupsGroupIdNamePut");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/name', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdParticipantsAddPost operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsAddPostCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add participant.
     * Handles adding participants to a group. You must be admin in the group or the query will fail.
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/models/GroupUpdateParticipantsPayload} data Group update payload
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsAddPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdParticipantsAddPost(instanceKey, groupId, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdParticipantsAddPost");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdParticipantsAddPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyGroupsGroupIdParticipantsAddPost");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/participants/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdParticipantsDemotePut operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsDemotePutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Demote participant.
     * Demotes admins in groups. You must be admin in the group or the query will fail.
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/models/GroupUpdateParticipantsPayload} data Group update payload
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsDemotePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdParticipantsDemotePut(instanceKey, groupId, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdParticipantsDemotePut");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdParticipantsDemotePut");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyGroupsGroupIdParticipantsDemotePut");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/participants/demote', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdParticipantsPromotePut operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsPromotePutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Promote participant.
     * Promotes participants to admin. You must be admin in the group or the query will fail.
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/models/GroupUpdateParticipantsPayload} data Group update payload
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsPromotePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdParticipantsPromotePut(instanceKey, groupId, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdParticipantsPromotePut");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdParticipantsPromotePut");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyGroupsGroupIdParticipantsPromotePut");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/participants/promote', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsRemoveDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove participant.
     * Handles removing participants from a group. You must be admin in the group or the query will fail.
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/models/GroupUpdateParticipantsPayload} data Group update payload
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdParticipantsRemoveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete(instanceKey, groupId, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/participants/remove', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsGroupIdProfilePicPut operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdProfilePicPutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set group picture.
     * Changes the group profile picture. Currently it only seems to accept JPEG images only
     * @param {String} instanceKey Instance key
     * @param {String} groupId Group id of the group
     * @param {module:WhatsAPI/models/InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest} instancesInstanceKeyGroupsGroupIdProfilePicPutRequest 
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsGroupIdProfilePicPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsGroupIdProfilePicPut(instanceKey, groupId, instancesInstanceKeyGroupsGroupIdProfilePicPutRequest, callback) {
      let postBody = instancesInstanceKeyGroupsGroupIdProfilePicPutRequest;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsGroupIdProfilePicPut");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling instancesInstanceKeyGroupsGroupIdProfilePicPut");
      }
      // verify the required parameter 'instancesInstanceKeyGroupsGroupIdProfilePicPutRequest' is set
      if (instancesInstanceKeyGroupsGroupIdProfilePicPutRequest === undefined || instancesInstanceKeyGroupsGroupIdProfilePicPutRequest === null) {
        throw new Error("Missing the required parameter 'instancesInstanceKeyGroupsGroupIdProfilePicPutRequest' when calling instancesInstanceKeyGroupsGroupIdProfilePicPut");
      }

      let pathParams = {
        'instance_key': instanceKey,
        'group_id': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/{group_id}/profile-pic', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGroupsInviteInfoGet operation.
     * @callback module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsInviteInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group from invite link.
     * Gets a group info from an invite link. An invite link is a link that can be used to join a group. It is usually in the format https://chat.whatsapp.com/{invitecode}
     * @param {String} instanceKey Instance key
     * @param {String} inviteLink The invite link to check
     * @param {module:WhatsAPI/whatsapi/GroupManagementApi~instancesInstanceKeyGroupsInviteInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/APIResponse}
     */
    instancesInstanceKeyGroupsInviteInfoGet(instanceKey, inviteLink, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGroupsInviteInfoGet");
      }
      // verify the required parameter 'inviteLink' is set
      if (inviteLink === undefined || inviteLink === null) {
        throw new Error("Missing the required parameter 'inviteLink' when calling instancesInstanceKeyGroupsInviteInfoGet");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
        'invite_link': inviteLink
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = APIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/groups/invite-info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
