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
import StructsReplyButton from './StructsReplyButton';

/**
 * The StructsButtonMessagePayload model module.
 * @module WhatsAPI/models/StructsButtonMessagePayload
 * @version 1.0.0
 */
class StructsButtonMessagePayload {
    /**
     * Constructs a new <code>StructsButtonMessagePayload</code>.
     * @alias module:WhatsAPI/models/StructsButtonMessagePayload
     */
    constructor() { 
        
        StructsButtonMessagePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StructsButtonMessagePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/StructsButtonMessagePayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/StructsButtonMessagePayload} The populated <code>StructsButtonMessagePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsButtonMessagePayload();

            if (data.hasOwnProperty('buttons')) {
                obj['buttons'] = ApiClient.convertToType(data['buttons'], [StructsReplyButton]);
            }
            if (data.hasOwnProperty('footer_text')) {
                obj['footer_text'] = ApiClient.convertToType(data['footer_text'], 'String');
            }
            if (data.hasOwnProperty('header_text')) {
                obj['header_text'] = ApiClient.convertToType(data['header_text'], 'String');
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
     * Validates the JSON data with respect to <code>StructsButtonMessagePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsButtonMessagePayload</code>.
     */
    static validateJSON(data) {
        if (data['buttons']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['buttons'])) {
                throw new Error("Expected the field `buttons` to be an array in the JSON data but got " + data['buttons']);
            }
            // validate the optional field `buttons` (array)
            for (const item of data['buttons']) {
                StructsReplyButton.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['footer_text'] && !(typeof data['footer_text'] === 'string' || data['footer_text'] instanceof String)) {
            throw new Error("Expected the field `footer_text` to be a primitive type in the JSON string but got " + data['footer_text']);
        }
        // ensure the json data is a string
        if (data['header_text'] && !(typeof data['header_text'] === 'string' || data['header_text'] instanceof String)) {
            throw new Error("Expected the field `header_text` to be a primitive type in the JSON string but got " + data['header_text']);
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
 * @member {Array.<module:WhatsAPI/models/StructsReplyButton>} buttons
 */
StructsButtonMessagePayload.prototype['buttons'] = undefined;

/**
 * @member {String} footer_text
 */
StructsButtonMessagePayload.prototype['footer_text'] = undefined;

/**
 * @member {String} header_text
 */
StructsButtonMessagePayload.prototype['header_text'] = undefined;

/**
 * @member {String} text
 */
StructsButtonMessagePayload.prototype['text'] = undefined;

/**
 * @member {String} to
 */
StructsButtonMessagePayload.prototype['to'] = undefined;






export default StructsButtonMessagePayload;

