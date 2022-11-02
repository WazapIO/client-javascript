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
import InstancesInstanceKeySendAudioPostRequest from '../model/InstancesInstanceKeySendAudioPostRequest';
import InstancesInstanceKeySendDocumentPostRequest from '../model/InstancesInstanceKeySendDocumentPostRequest';
import InstancesInstanceKeySendImagePostRequest from '../model/InstancesInstanceKeySendImagePostRequest';
import InstancesInstanceKeySendUploadPostRequest from '../model/InstancesInstanceKeySendUploadPostRequest';
import InstancesInstanceKeySendVideoPostRequest from '../model/InstancesInstanceKeySendVideoPostRequest';
import MainAPIResponse from '../model/MainAPIResponse';
import StructsButtonMessagePayload from '../model/StructsButtonMessagePayload';
import StructsButtonMessageWithMediaPayload from '../model/StructsButtonMessageWithMediaPayload';
import StructsContactMessagePayload from '../model/StructsContactMessagePayload';
import StructsListMessagePayload from '../model/StructsListMessagePayload';
import StructsLocationMessagePayload from '../model/StructsLocationMessagePayload';
import StructsPollMessagePayload from '../model/StructsPollMessagePayload';
import StructsSendMediaPayload from '../model/StructsSendMediaPayload';
import StructsTemplateButtonPayload from '../model/StructsTemplateButtonPayload';
import StructsTemplateButtonWithMediaPayload from '../model/StructsTemplateButtonWithMediaPayload';
import StructsTextMessage from '../model/StructsTextMessage';

/**
* MessageSending service.
* @module api/MessageSendingApi
* @version 2.0
*/
export default class MessageSendingApi {

    /**
    * Constructs a new MessageSendingApi. 
    * @alias module:api/MessageSendingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the instancesInstanceKeyBusinessCatalogGet operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeyBusinessCatalogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetches the catlog.
     * Gets list of all products registered by you.
     * @param {String} instanceKey Instance key
     * @param {module:api/MessageSendingApi~instancesInstanceKeyBusinessCatalogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeyBusinessCatalogGet(instanceKey, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyBusinessCatalogGet");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/business/catalog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendAudioPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendAudioPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send raw audio.
     * Sends a audio message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * @param {String} instanceKey Instance key
     * @param {String} to The recipient's number
     * @param {module:model/InstancesInstanceKeySendAudioPostRequest} instancesInstanceKeySendAudioPostRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.caption Attached caption
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendAudioPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendAudioPost(instanceKey, to, instancesInstanceKeySendAudioPostRequest, opts, callback) {
      opts = opts || {};
      let postBody = instancesInstanceKeySendAudioPostRequest;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendAudioPost");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling instancesInstanceKeySendAudioPost");
      }
      // verify the required parameter 'instancesInstanceKeySendAudioPostRequest' is set
      if (instancesInstanceKeySendAudioPostRequest === undefined || instancesInstanceKeySendAudioPostRequest === null) {
        throw new Error("Missing the required parameter 'instancesInstanceKeySendAudioPostRequest' when calling instancesInstanceKeySendAudioPost");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
        'to': to,
        'caption': opts['caption']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/audio', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendButtonMediaPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendButtonMediaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a button message with a media header.
     * Sends an interactive button message to the given user. This message also has media header with it. Make sure that all the button ids are unique
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsButtonMessageWithMediaPayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendButtonMediaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendButtonMediaPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendButtonMediaPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendButtonMediaPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/button-media', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendButtonsPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendButtonsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a button message.
     * Sends an interactive button message to the given user. Make sure that all the button ids are unique
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsButtonMessagePayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendButtonsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendButtonsPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendButtonsPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendButtonsPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/buttons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendContactPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendContactPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a contact message.
     * Sends a contact (vcard) message to the given user.
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsContactMessagePayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendContactPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendContactPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendContactPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendContactPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/contact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendDocumentPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendDocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send raw document.
     * Sends a document message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * @param {String} instanceKey Instance key
     * @param {String} to The recipient's number
     * @param {module:model/InstancesInstanceKeySendDocumentPostRequest} instancesInstanceKeySendDocumentPostRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.caption Attached caption
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendDocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendDocumentPost(instanceKey, to, instancesInstanceKeySendDocumentPostRequest, opts, callback) {
      opts = opts || {};
      let postBody = instancesInstanceKeySendDocumentPostRequest;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendDocumentPost");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling instancesInstanceKeySendDocumentPost");
      }
      // verify the required parameter 'instancesInstanceKeySendDocumentPostRequest' is set
      if (instancesInstanceKeySendDocumentPostRequest === undefined || instancesInstanceKeySendDocumentPostRequest === null) {
        throw new Error("Missing the required parameter 'instancesInstanceKeySendDocumentPostRequest' when calling instancesInstanceKeySendDocumentPost");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
        'to': to,
        'caption': opts['caption']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/document', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendImagePost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendImagePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send raw image.
     * Sends a image message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * @param {String} instanceKey Instance key
     * @param {String} to The recipient's number
     * @param {module:model/InstancesInstanceKeySendImagePostRequest} instancesInstanceKeySendImagePostRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.caption Attached caption
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendImagePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendImagePost(instanceKey, to, instancesInstanceKeySendImagePostRequest, opts, callback) {
      opts = opts || {};
      let postBody = instancesInstanceKeySendImagePostRequest;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendImagePost");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling instancesInstanceKeySendImagePost");
      }
      // verify the required parameter 'instancesInstanceKeySendImagePostRequest' is set
      if (instancesInstanceKeySendImagePostRequest === undefined || instancesInstanceKeySendImagePostRequest === null) {
        throw new Error("Missing the required parameter 'instancesInstanceKeySendImagePostRequest' when calling instancesInstanceKeySendImagePost");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
        'to': to,
        'caption': opts['caption']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/image', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendListPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendListPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a List message.
     * Sends an interactive List message to the given user.
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsListMessagePayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendListPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendListPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendListPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendLocationPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendLocationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a location message.
     * Sends a location message to the given user. This is static location and does not update Note: The Address and Url fields are optional
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsLocationMessagePayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendLocationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendLocationPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendLocationPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendLocationPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/location', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendMediaPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendMediaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a media message.
     * Sends a media message to the given user.
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsSendMediaPayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendMediaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendMediaPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendMediaPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendMediaPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/media', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendPollPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendPollPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a Poll message with media.
     * Sends an interactive poll message with a media header to the given user. The poll message is a new feature that is currently in beta.
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsPollMessagePayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendPollPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendPollPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendPollPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendPollPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/poll', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendTemplateMediaPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendTemplateMediaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a template message with media.
     * Sends an interactive template message with a media header to the given user. Note: The valid button types are \"replyButton\", \"urlButton\", \"callButton\"
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsTemplateButtonWithMediaPayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendTemplateMediaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendTemplateMediaPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendTemplateMediaPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendTemplateMediaPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/template-media', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendTemplatePost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendTemplatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a template message.
     * Sends an interactive template message to the given user. Note: The valid button types are \"replyButton\", \"urlButton\", \"callButton\"
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsTemplateButtonPayload} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendTemplatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendTemplatePost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendTemplatePost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendTemplatePost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/template', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendTextPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendTextPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a text message.
     * Sends a text message to the given user.
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsTextMessage} data Message data
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendTextPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendTextPost(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendTextPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeySendTextPost");
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
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/text', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendUploadPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendUploadPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload media.
     * Uploads media to WhatsApp servers and returns the media keys. Store the returned media keys, as you will need them to send media messages
     * @param {String} instanceKey Instance key
     * @param {module:model/String} type Media type
     * @param {module:model/InstancesInstanceKeySendUploadPostRequest} instancesInstanceKeySendUploadPostRequest 
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendUploadPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendUploadPost(instanceKey, type, instancesInstanceKeySendUploadPostRequest, callback) {
      let postBody = instancesInstanceKeySendUploadPostRequest;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendUploadPost");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling instancesInstanceKeySendUploadPost");
      }
      // verify the required parameter 'instancesInstanceKeySendUploadPostRequest' is set
      if (instancesInstanceKeySendUploadPostRequest === undefined || instancesInstanceKeySendUploadPostRequest === null) {
        throw new Error("Missing the required parameter 'instancesInstanceKeySendUploadPostRequest' when calling instancesInstanceKeySendUploadPost");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
        'type': type
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeySendVideoPost operation.
     * @callback module:api/MessageSendingApi~instancesInstanceKeySendVideoPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send raw video.
     * Sends a video message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * @param {String} instanceKey Instance key
     * @param {String} to The recipient's number
     * @param {module:model/InstancesInstanceKeySendVideoPostRequest} instancesInstanceKeySendVideoPostRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.caption Attached caption
     * @param {module:api/MessageSendingApi~instancesInstanceKeySendVideoPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeySendVideoPost(instanceKey, to, instancesInstanceKeySendVideoPostRequest, opts, callback) {
      opts = opts || {};
      let postBody = instancesInstanceKeySendVideoPostRequest;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeySendVideoPost");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling instancesInstanceKeySendVideoPost");
      }
      // verify the required parameter 'instancesInstanceKeySendVideoPostRequest' is set
      if (instancesInstanceKeySendVideoPostRequest === undefined || instancesInstanceKeySendVideoPostRequest === null) {
        throw new Error("Missing the required parameter 'instancesInstanceKeySendVideoPostRequest' when calling instancesInstanceKeySendVideoPost");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
        'to': to,
        'caption': opts['caption']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/send/video', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}