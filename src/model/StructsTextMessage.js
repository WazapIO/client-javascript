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

/**
 * The StructsTextMessage model module.
 * @module model/StructsTextMessage
 * @version 1.0.0
 */
class StructsTextMessage {
    /**
     * Constructs a new <code>StructsTextMessage</code>.
     * @alias module:model/StructsTextMessage
     * @param text {String} 
     * @param to {String} 
     */
    constructor(text, to) { 
        
        StructsTextMessage.initialize(this, text, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, to) { 
        obj['text'] = text;
        obj['to'] = to;
    }

    /**
     * Constructs a <code>StructsTextMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StructsTextMessage} obj Optional instance to populate.
     * @return {module:model/StructsTextMessage} The populated <code>StructsTextMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsTextMessage();

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
     * Validates the JSON data with respect to <code>StructsTextMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsTextMessage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StructsTextMessage.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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

StructsTextMessage.RequiredProperties = ["text", "to"];

/**
 * @member {String} text
 */
StructsTextMessage.prototype['text'] = undefined;

/**
 * @member {String} to
 */
StructsTextMessage.prototype['to'] = undefined;






export default StructsTextMessage;

