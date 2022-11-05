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
import ListSection from './ListSection';

/**
 * The ListMessagePayload model module.
 * @module WhatsAPI/models/ListMessagePayload
 * @version 1.0.0
 */
class ListMessagePayload {
    /**
     * Constructs a new <code>ListMessagePayload</code>.
     * @alias module:WhatsAPI/models/ListMessagePayload
     * @param sections {Array.<module:WhatsAPI/models/ListSection>} 
     * @param to {String} 
     */
    constructor(sections, to) { 
        
        ListMessagePayload.initialize(this, sections, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sections, to) { 
        obj['sections'] = sections;
        obj['to'] = to;
    }

    /**
     * Constructs a <code>ListMessagePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/ListMessagePayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/ListMessagePayload} The populated <code>ListMessagePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessagePayload();

            if (data.hasOwnProperty('button_text')) {
                obj['button_text'] = ApiClient.convertToType(data['button_text'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('multi_select')) {
                obj['multi_select'] = ApiClient.convertToType(data['multi_select'], 'Boolean');
            }
            if (data.hasOwnProperty('sections')) {
                obj['sections'] = ApiClient.convertToType(data['sections'], [ListSection]);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListMessagePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListMessagePayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListMessagePayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['button_text'] && !(typeof data['button_text'] === 'string' || data['button_text'] instanceof String)) {
            throw new Error("Expected the field `button_text` to be a primitive type in the JSON string but got " + data['button_text']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['sections']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sections'])) {
                throw new Error("Expected the field `sections` to be an array in the JSON data but got " + data['sections']);
            }
            // validate the optional field `sections` (array)
            for (const item of data['sections']) {
                ListSection.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }


}

ListMessagePayload.RequiredProperties = ["sections", "to"];

/**
 * @member {String} button_text
 */
ListMessagePayload.prototype['button_text'] = undefined;

/**
 * @member {String} description
 */
ListMessagePayload.prototype['description'] = undefined;

/**
 * @member {Boolean} multi_select
 */
ListMessagePayload.prototype['multi_select'] = undefined;

/**
 * @member {Array.<module:WhatsAPI/models/ListSection>} sections
 */
ListMessagePayload.prototype['sections'] = undefined;

/**
 * @member {String} text
 */
ListMessagePayload.prototype['text'] = undefined;

/**
 * @member {String} title
 */
ListMessagePayload.prototype['title'] = undefined;

/**
 * @member {String} to
 */
ListMessagePayload.prototype['to'] = undefined;






export default ListMessagePayload;

