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


import ApiClient from './ApiClient';
import InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest from './model/InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest';
import InstancesInstanceKeySendAudioPostRequest from './model/InstancesInstanceKeySendAudioPostRequest';
import InstancesInstanceKeySendDocumentPostRequest from './model/InstancesInstanceKeySendDocumentPostRequest';
import InstancesInstanceKeySendImagePostRequest from './model/InstancesInstanceKeySendImagePostRequest';
import InstancesInstanceKeySendUploadPostRequest from './model/InstancesInstanceKeySendUploadPostRequest';
import InstancesInstanceKeySendVideoPostRequest from './model/InstancesInstanceKeySendVideoPostRequest';
import MainAPIResponse from './model/MainAPIResponse';
import StructsButtonMessagePayload from './model/StructsButtonMessagePayload';
import StructsButtonMessageWithMediaPayload from './model/StructsButtonMessageWithMediaPayload';
import StructsContactMessagePayload from './model/StructsContactMessagePayload';
import StructsContactMessagePayloadVcard from './model/StructsContactMessagePayloadVcard';
import StructsFileUpload from './model/StructsFileUpload';
import StructsGroupCreatePayload from './model/StructsGroupCreatePayload';
import StructsGroupUpdateDescriptionPayload from './model/StructsGroupUpdateDescriptionPayload';
import StructsGroupUpdateNamePayload from './model/StructsGroupUpdateNamePayload';
import StructsGroupUpdateParticipantsPayload from './model/StructsGroupUpdateParticipantsPayload';
import StructsListItem from './model/StructsListItem';
import StructsListMessagePayload from './model/StructsListMessagePayload';
import StructsListSection from './model/StructsListSection';
import StructsLocationMessagePayload from './model/StructsLocationMessagePayload';
import StructsLocationMessagePayloadLocation from './model/StructsLocationMessagePayloadLocation';
import StructsPollMessagePayload from './model/StructsPollMessagePayload';
import StructsReplyButton from './model/StructsReplyButton';
import StructsSendMediaPayload from './model/StructsSendMediaPayload';
import StructsTemplateButton from './model/StructsTemplateButton';
import StructsTemplateButtonPayload from './model/StructsTemplateButtonPayload';
import StructsTemplateButtonWithMediaPayload from './model/StructsTemplateButtonWithMediaPayload';
import StructsTextMessage from './model/StructsTextMessage';
import StructsUserInfoPayload from './model/StructsUserInfoPayload';
import StructsWebhookPayload from './model/StructsWebhookPayload';
import GroupManagementApi from './api/GroupManagementApi';
import InstanceApi from './api/InstanceApi';
import MessageSendingApi from './api/MessageSendingApi';
import MiscellaneousApi from './api/MiscellaneousApi';


/**
* The V2 of WhatsAPI Go.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var WhatsApiGo = require('index'); // See note below*.
* var xxxSvc = new WhatsApiGo.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new WhatsApiGo.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new WhatsApiGo.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new WhatsApiGo.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest model constructor.
     * @property {module:model/InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest}
     */
    InstancesInstanceKeyGroupsGroupIdProfilePicPutRequest,

    /**
     * The InstancesInstanceKeySendAudioPostRequest model constructor.
     * @property {module:model/InstancesInstanceKeySendAudioPostRequest}
     */
    InstancesInstanceKeySendAudioPostRequest,

    /**
     * The InstancesInstanceKeySendDocumentPostRequest model constructor.
     * @property {module:model/InstancesInstanceKeySendDocumentPostRequest}
     */
    InstancesInstanceKeySendDocumentPostRequest,

    /**
     * The InstancesInstanceKeySendImagePostRequest model constructor.
     * @property {module:model/InstancesInstanceKeySendImagePostRequest}
     */
    InstancesInstanceKeySendImagePostRequest,

    /**
     * The InstancesInstanceKeySendUploadPostRequest model constructor.
     * @property {module:model/InstancesInstanceKeySendUploadPostRequest}
     */
    InstancesInstanceKeySendUploadPostRequest,

    /**
     * The InstancesInstanceKeySendVideoPostRequest model constructor.
     * @property {module:model/InstancesInstanceKeySendVideoPostRequest}
     */
    InstancesInstanceKeySendVideoPostRequest,

    /**
     * The MainAPIResponse model constructor.
     * @property {module:model/MainAPIResponse}
     */
    MainAPIResponse,

    /**
     * The StructsButtonMessagePayload model constructor.
     * @property {module:model/StructsButtonMessagePayload}
     */
    StructsButtonMessagePayload,

    /**
     * The StructsButtonMessageWithMediaPayload model constructor.
     * @property {module:model/StructsButtonMessageWithMediaPayload}
     */
    StructsButtonMessageWithMediaPayload,

    /**
     * The StructsContactMessagePayload model constructor.
     * @property {module:model/StructsContactMessagePayload}
     */
    StructsContactMessagePayload,

    /**
     * The StructsContactMessagePayloadVcard model constructor.
     * @property {module:model/StructsContactMessagePayloadVcard}
     */
    StructsContactMessagePayloadVcard,

    /**
     * The StructsFileUpload model constructor.
     * @property {module:model/StructsFileUpload}
     */
    StructsFileUpload,

    /**
     * The StructsGroupCreatePayload model constructor.
     * @property {module:model/StructsGroupCreatePayload}
     */
    StructsGroupCreatePayload,

    /**
     * The StructsGroupUpdateDescriptionPayload model constructor.
     * @property {module:model/StructsGroupUpdateDescriptionPayload}
     */
    StructsGroupUpdateDescriptionPayload,

    /**
     * The StructsGroupUpdateNamePayload model constructor.
     * @property {module:model/StructsGroupUpdateNamePayload}
     */
    StructsGroupUpdateNamePayload,

    /**
     * The StructsGroupUpdateParticipantsPayload model constructor.
     * @property {module:model/StructsGroupUpdateParticipantsPayload}
     */
    StructsGroupUpdateParticipantsPayload,

    /**
     * The StructsListItem model constructor.
     * @property {module:model/StructsListItem}
     */
    StructsListItem,

    /**
     * The StructsListMessagePayload model constructor.
     * @property {module:model/StructsListMessagePayload}
     */
    StructsListMessagePayload,

    /**
     * The StructsListSection model constructor.
     * @property {module:model/StructsListSection}
     */
    StructsListSection,

    /**
     * The StructsLocationMessagePayload model constructor.
     * @property {module:model/StructsLocationMessagePayload}
     */
    StructsLocationMessagePayload,

    /**
     * The StructsLocationMessagePayloadLocation model constructor.
     * @property {module:model/StructsLocationMessagePayloadLocation}
     */
    StructsLocationMessagePayloadLocation,

    /**
     * The StructsPollMessagePayload model constructor.
     * @property {module:model/StructsPollMessagePayload}
     */
    StructsPollMessagePayload,

    /**
     * The StructsReplyButton model constructor.
     * @property {module:model/StructsReplyButton}
     */
    StructsReplyButton,

    /**
     * The StructsSendMediaPayload model constructor.
     * @property {module:model/StructsSendMediaPayload}
     */
    StructsSendMediaPayload,

    /**
     * The StructsTemplateButton model constructor.
     * @property {module:model/StructsTemplateButton}
     */
    StructsTemplateButton,

    /**
     * The StructsTemplateButtonPayload model constructor.
     * @property {module:model/StructsTemplateButtonPayload}
     */
    StructsTemplateButtonPayload,

    /**
     * The StructsTemplateButtonWithMediaPayload model constructor.
     * @property {module:model/StructsTemplateButtonWithMediaPayload}
     */
    StructsTemplateButtonWithMediaPayload,

    /**
     * The StructsTextMessage model constructor.
     * @property {module:model/StructsTextMessage}
     */
    StructsTextMessage,

    /**
     * The StructsUserInfoPayload model constructor.
     * @property {module:model/StructsUserInfoPayload}
     */
    StructsUserInfoPayload,

    /**
     * The StructsWebhookPayload model constructor.
     * @property {module:model/StructsWebhookPayload}
     */
    StructsWebhookPayload,

    /**
    * The GroupManagementApi service constructor.
    * @property {module:api/GroupManagementApi}
    */
    GroupManagementApi,

    /**
    * The InstanceApi service constructor.
    * @property {module:api/InstanceApi}
    */
    InstanceApi,

    /**
    * The MessageSendingApi service constructor.
    * @property {module:api/MessageSendingApi}
    */
    MessageSendingApi,

    /**
    * The MiscellaneousApi service constructor.
    * @property {module:api/MiscellaneousApi}
    */
    MiscellaneousApi
};
