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
import StructsListItem from './StructsListItem';

/**
 * The StructsListSection model module.
 * @module WhatsAPI/models/StructsListSection
 * @version 1.0.0
 */
class StructsListSection {
    /**
     * Constructs a new <code>StructsListSection</code>.
     * @alias module:WhatsAPI/models/StructsListSection
     * @param rows {Array.<module:WhatsAPI/models/StructsListItem>} 
     * @param title {String} 
     */
    constructor(rows, title) { 
        
        StructsListSection.initialize(this, rows, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rows, title) { 
        obj['rows'] = rows;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>StructsListSection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/StructsListSection} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/StructsListSection} The populated <code>StructsListSection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsListSection();

            if (data.hasOwnProperty('rows')) {
                obj['rows'] = ApiClient.convertToType(data['rows'], [StructsListItem]);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StructsListSection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsListSection</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StructsListSection.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['rows']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rows'])) {
                throw new Error("Expected the field `rows` to be an array in the JSON data but got " + data['rows']);
            }
            // validate the optional field `rows` (array)
            for (const item of data['rows']) {
                StructsListItem.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

StructsListSection.RequiredProperties = ["rows", "title"];

/**
 * @member {Array.<module:WhatsAPI/models/StructsListItem>} rows
 */
StructsListSection.prototype['rows'] = undefined;

/**
 * @member {String} title
 */
StructsListSection.prototype['title'] = undefined;






export default StructsListSection;

