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

import ApiClient from '../ApiClient';
import FileUpload from './FileUpload';
import ReplyButton from './ReplyButton';

/**
 * The ButtonMessageWithMediaPayload model module.
 * @module WhatsAPI/models/ButtonMessageWithMediaPayload
 * @version 1.0.0
 */
class ButtonMessageWithMediaPayload {
    /**
     * Constructs a new <code>ButtonMessageWithMediaPayload</code>.
     * @alias module:WhatsAPI/models/ButtonMessageWithMediaPayload
     */
    constructor() { 
        
        ButtonMessageWithMediaPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ButtonMessageWithMediaPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/ButtonMessageWithMediaPayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/ButtonMessageWithMediaPayload} The populated <code>ButtonMessageWithMediaPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ButtonMessageWithMediaPayload();

            if (data.hasOwnProperty('buttons')) {
                obj['buttons'] = ApiClient.convertToType(data['buttons'], [ReplyButton]);
            }
            if (data.hasOwnProperty('footer_text')) {
                obj['footer_text'] = ApiClient.convertToType(data['footer_text'], 'String');
            }
            if (data.hasOwnProperty('media_data')) {
                obj['media_data'] = FileUpload.constructFromObject(data['media_data']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ButtonMessageWithMediaPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ButtonMessageWithMediaPayload</code>.
     */
    static validateJSON(data) {
        if (data['buttons']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['buttons'])) {
                throw new Error("Expected the field `buttons` to be an array in the JSON data but got " + data['buttons']);
            }
            // validate the optional field `buttons` (array)
            for (const item of data['buttons']) {
                ReplyButton.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['footer_text'] && !(typeof data['footer_text'] === 'string' || data['footer_text'] instanceof String)) {
            throw new Error("Expected the field `footer_text` to be a primitive type in the JSON string but got " + data['footer_text']);
        }
        // validate the optional field `media_data`
        if (data['media_data']) { // data not null
          FileUpload.validateJSON(data['media_data']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:WhatsAPI/models/ReplyButton>} buttons
 */
ButtonMessageWithMediaPayload.prototype['buttons'] = undefined;

/**
 * @member {String} footer_text
 */
ButtonMessageWithMediaPayload.prototype['footer_text'] = undefined;

/**
 * @member {module:WhatsAPI/models/FileUpload} media_data
 */
ButtonMessageWithMediaPayload.prototype['media_data'] = undefined;

/**
 * @member {String} text
 */
ButtonMessageWithMediaPayload.prototype['text'] = undefined;

/**
 * @member {String} to
 */
ButtonMessageWithMediaPayload.prototype['to'] = undefined;






export default ButtonMessageWithMediaPayload;

