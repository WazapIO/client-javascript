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
import APIResponse from './models/APIResponse';
import ButtonMessagePayload from './models/ButtonMessagePayload';
import ButtonMessageWithMediaPayload from './models/ButtonMessageWithMediaPayload';
import ContactMessagePayload from './models/ContactMessagePayload';
import ContactMessagePayloadVcard from './models/ContactMessagePayloadVcard';
import FileUpload from './models/FileUpload';
import GroupCreatePayload from './models/GroupCreatePayload';
import GroupUpdateDescriptionPayload from './models/GroupUpdateDescriptionPayload';
import GroupUpdateNamePayload from './models/GroupUpdateNamePayload';
import GroupUpdateParticipantsPayload from './models/GroupUpdateParticipantsPayload';
import ListItem from './models/ListItem';
import ListMessagePayload from './models/ListMessagePayload';
import ListSection from './models/ListSection';
import LocationMessagePayload from './models/LocationMessagePayload';
import LocationMessagePayloadLocation from './models/LocationMessagePayloadLocation';
import PollMessagePayload from './models/PollMessagePayload';
import ReplyButton from './models/ReplyButton';
import SendAudioRequest from './models/SendAudioRequest';
import SendDocumentRequest from './models/SendDocumentRequest';
import SendImageRequest from './models/SendImageRequest';
import SendMediaPayload from './models/SendMediaPayload';
import SendVideoRequest from './models/SendVideoRequest';
import SetGroupPictureRequest from './models/SetGroupPictureRequest';
import TemplateButton from './models/TemplateButton';
import TemplateButtonPayload from './models/TemplateButtonPayload';
import TemplateButtonWithMediaPayload from './models/TemplateButtonWithMediaPayload';
import TextMessage from './models/TextMessage';
import UploadMediaRequest from './models/UploadMediaRequest';
import UserInfoPayload from './models/UserInfoPayload';
import WebhookPayload from './models/WebhookPayload';
import BusinessManagementApi from './whatsapi/BusinessManagementApi';
import GroupManagementApi from './whatsapi/GroupManagementApi';
import InstanceApi from './whatsapi/InstanceApi';
import MessageSendingApi from './whatsapi/MessageSendingApi';
import MiscellaneousApi from './whatsapi/MiscellaneousApi';


/**
* The V2 of WhatsAPI Go.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var WhatsApi = require('WhatsAPI/index'); // See note below*.
* var xxxSvc = new WhatsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new WhatsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['WhatsAPI/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new WhatsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new WhatsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module WhatsAPI/index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:WhatsAPI/ApiClient}
     */
    ApiClient,

    /**
     * The APIResponse model constructor.
     * @property {module:WhatsAPI/models/APIResponse}
     */
    APIResponse,

    /**
     * The ButtonMessagePayload model constructor.
     * @property {module:WhatsAPI/models/ButtonMessagePayload}
     */
    ButtonMessagePayload,

    /**
     * The ButtonMessageWithMediaPayload model constructor.
     * @property {module:WhatsAPI/models/ButtonMessageWithMediaPayload}
     */
    ButtonMessageWithMediaPayload,

    /**
     * The ContactMessagePayload model constructor.
     * @property {module:WhatsAPI/models/ContactMessagePayload}
     */
    ContactMessagePayload,

    /**
     * The ContactMessagePayloadVcard model constructor.
     * @property {module:WhatsAPI/models/ContactMessagePayloadVcard}
     */
    ContactMessagePayloadVcard,

    /**
     * The FileUpload model constructor.
     * @property {module:WhatsAPI/models/FileUpload}
     */
    FileUpload,

    /**
     * The GroupCreatePayload model constructor.
     * @property {module:WhatsAPI/models/GroupCreatePayload}
     */
    GroupCreatePayload,

    /**
     * The GroupUpdateDescriptionPayload model constructor.
     * @property {module:WhatsAPI/models/GroupUpdateDescriptionPayload}
     */
    GroupUpdateDescriptionPayload,

    /**
     * The GroupUpdateNamePayload model constructor.
     * @property {module:WhatsAPI/models/GroupUpdateNamePayload}
     */
    GroupUpdateNamePayload,

    /**
     * The GroupUpdateParticipantsPayload model constructor.
     * @property {module:WhatsAPI/models/GroupUpdateParticipantsPayload}
     */
    GroupUpdateParticipantsPayload,

    /**
     * The ListItem model constructor.
     * @property {module:WhatsAPI/models/ListItem}
     */
    ListItem,

    /**
     * The ListMessagePayload model constructor.
     * @property {module:WhatsAPI/models/ListMessagePayload}
     */
    ListMessagePayload,

    /**
     * The ListSection model constructor.
     * @property {module:WhatsAPI/models/ListSection}
     */
    ListSection,

    /**
     * The LocationMessagePayload model constructor.
     * @property {module:WhatsAPI/models/LocationMessagePayload}
     */
    LocationMessagePayload,

    /**
     * The LocationMessagePayloadLocation model constructor.
     * @property {module:WhatsAPI/models/LocationMessagePayloadLocation}
     */
    LocationMessagePayloadLocation,

    /**
     * The PollMessagePayload model constructor.
     * @property {module:WhatsAPI/models/PollMessagePayload}
     */
    PollMessagePayload,

    /**
     * The ReplyButton model constructor.
     * @property {module:WhatsAPI/models/ReplyButton}
     */
    ReplyButton,

    /**
     * The SendAudioRequest model constructor.
     * @property {module:WhatsAPI/models/SendAudioRequest}
     */
    SendAudioRequest,

    /**
     * The SendDocumentRequest model constructor.
     * @property {module:WhatsAPI/models/SendDocumentRequest}
     */
    SendDocumentRequest,

    /**
     * The SendImageRequest model constructor.
     * @property {module:WhatsAPI/models/SendImageRequest}
     */
    SendImageRequest,

    /**
     * The SendMediaPayload model constructor.
     * @property {module:WhatsAPI/models/SendMediaPayload}
     */
    SendMediaPayload,

    /**
     * The SendVideoRequest model constructor.
     * @property {module:WhatsAPI/models/SendVideoRequest}
     */
    SendVideoRequest,

    /**
     * The SetGroupPictureRequest model constructor.
     * @property {module:WhatsAPI/models/SetGroupPictureRequest}
     */
    SetGroupPictureRequest,

    /**
     * The TemplateButton model constructor.
     * @property {module:WhatsAPI/models/TemplateButton}
     */
    TemplateButton,

    /**
     * The TemplateButtonPayload model constructor.
     * @property {module:WhatsAPI/models/TemplateButtonPayload}
     */
    TemplateButtonPayload,

    /**
     * The TemplateButtonWithMediaPayload model constructor.
     * @property {module:WhatsAPI/models/TemplateButtonWithMediaPayload}
     */
    TemplateButtonWithMediaPayload,

    /**
     * The TextMessage model constructor.
     * @property {module:WhatsAPI/models/TextMessage}
     */
    TextMessage,

    /**
     * The UploadMediaRequest model constructor.
     * @property {module:WhatsAPI/models/UploadMediaRequest}
     */
    UploadMediaRequest,

    /**
     * The UserInfoPayload model constructor.
     * @property {module:WhatsAPI/models/UserInfoPayload}
     */
    UserInfoPayload,

    /**
     * The WebhookPayload model constructor.
     * @property {module:WhatsAPI/models/WebhookPayload}
     */
    WebhookPayload,

    /**
    * The BusinessManagementApi service constructor.
    * @property {module:WhatsAPI/whatsapi/BusinessManagementApi}
    */
    BusinessManagementApi,

    /**
    * The GroupManagementApi service constructor.
    * @property {module:WhatsAPI/whatsapi/GroupManagementApi}
    */
    GroupManagementApi,

    /**
    * The InstanceApi service constructor.
    * @property {module:WhatsAPI/whatsapi/InstanceApi}
    */
    InstanceApi,

    /**
    * The MessageSendingApi service constructor.
    * @property {module:WhatsAPI/whatsapi/MessageSendingApi}
    */
    MessageSendingApi,

    /**
    * The MiscellaneousApi service constructor.
    * @property {module:WhatsAPI/whatsapi/MiscellaneousApi}
    */
    MiscellaneousApi
};
