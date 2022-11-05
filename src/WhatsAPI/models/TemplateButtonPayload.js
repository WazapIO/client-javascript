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
import TemplateButton from './TemplateButton';

/**
 * The TemplateButtonPayload model module.
 * @module WhatsAPI/models/TemplateButtonPayload
 * @version 1.0.0
 */
class TemplateButtonPayload {
    /**
     * Constructs a new <code>TemplateButtonPayload</code>.
     * @alias module:WhatsAPI/models/TemplateButtonPayload
     * @param buttons {Array.<module:WhatsAPI/models/TemplateButton>} 
     * @param to {String} 
     */
    constructor(buttons, to) { 
        
        TemplateButtonPayload.initialize(this, buttons, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, buttons, to) { 
        obj['buttons'] = buttons;
        obj['to'] = to;
    }

    /**
     * Constructs a <code>TemplateButtonPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/TemplateButtonPayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/TemplateButtonPayload} The populated <code>TemplateButtonPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateButtonPayload();

            if (data.hasOwnProperty('buttons')) {
                obj['buttons'] = ApiClient.convertToType(data['buttons'], [TemplateButton]);
            }
            if (data.hasOwnProperty('content_text')) {
                obj['content_text'] = ApiClient.convertToType(data['content_text'], 'String');
            }
            if (data.hasOwnProperty('footer')) {
                obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = ApiClient.convertToType(data['header'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateButtonPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateButtonPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateButtonPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['buttons']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['buttons'])) {
                throw new Error("Expected the field `buttons` to be an array in the JSON data but got " + data['buttons']);
            }
            // validate the optional field `buttons` (array)
            for (const item of data['buttons']) {
                TemplateButton.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['content_text'] && !(typeof data['content_text'] === 'string' || data['content_text'] instanceof String)) {
            throw new Error("Expected the field `content_text` to be a primitive type in the JSON string but got " + data['content_text']);
        }
        // ensure the json data is a string
        if (data['footer'] && !(typeof data['footer'] === 'string' || data['footer'] instanceof String)) {
            throw new Error("Expected the field `footer` to be a primitive type in the JSON string but got " + data['footer']);
        }
        // ensure the json data is a string
        if (data['header'] && !(typeof data['header'] === 'string' || data['header'] instanceof String)) {
            throw new Error("Expected the field `header` to be a primitive type in the JSON string but got " + data['header']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }


}

TemplateButtonPayload.RequiredProperties = ["buttons", "to"];

/**
 * @member {Array.<module:WhatsAPI/models/TemplateButton>} buttons
 */
TemplateButtonPayload.prototype['buttons'] = undefined;

/**
 * @member {String} content_text
 */
TemplateButtonPayload.prototype['content_text'] = undefined;

/**
 * @member {String} footer
 */
TemplateButtonPayload.prototype['footer'] = undefined;

/**
 * @member {String} header
 */
TemplateButtonPayload.prototype['header'] = undefined;

/**
 * @member {String} to
 */
TemplateButtonPayload.prototype['to'] = undefined;






export default TemplateButtonPayload;
