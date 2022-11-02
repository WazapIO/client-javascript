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
 * The StructsListItem model module.
 * @module WhatsAPI/models/StructsListItem
 * @version 1.0.0
 */
class StructsListItem {
    /**
     * Constructs a new <code>StructsListItem</code>.
     * @alias module:WhatsAPI/models/StructsListItem
     * @param title {String} 
     */
    constructor(title) { 
        
        StructsListItem.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>StructsListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/StructsListItem} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/StructsListItem} The populated <code>StructsListItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsListItem();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('row_id')) {
                obj['row_id'] = ApiClient.convertToType(data['row_id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StructsListItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsListItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StructsListItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['row_id'] && !(typeof data['row_id'] === 'string' || data['row_id'] instanceof String)) {
            throw new Error("Expected the field `row_id` to be a primitive type in the JSON string but got " + data['row_id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

StructsListItem.RequiredProperties = ["title"];

/**
 * @member {String} description
 */
StructsListItem.prototype['description'] = undefined;

/**
 * @member {String} row_id
 */
StructsListItem.prototype['row_id'] = undefined;

/**
 * @member {String} title
 */
StructsListItem.prototype['title'] = undefined;






export default StructsListItem;
