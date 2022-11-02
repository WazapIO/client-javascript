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
 * The StructsLocationMessagePayloadLocation model module.
 * @module model/StructsLocationMessagePayloadLocation
 * @version 2.0
 */
class StructsLocationMessagePayloadLocation {
    /**
     * Constructs a new <code>StructsLocationMessagePayloadLocation</code>.
     * @alias module:model/StructsLocationMessagePayloadLocation
     * @param latitude {Number} 
     * @param longitude {Number} 
     * @param name {String} 
     */
    constructor(latitude, longitude, name) { 
        
        StructsLocationMessagePayloadLocation.initialize(this, latitude, longitude, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, latitude, longitude, name) { 
        obj['latitude'] = latitude;
        obj['longitude'] = longitude;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>StructsLocationMessagePayloadLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StructsLocationMessagePayloadLocation} obj Optional instance to populate.
     * @return {module:model/StructsLocationMessagePayloadLocation} The populated <code>StructsLocationMessagePayloadLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsLocationMessagePayloadLocation();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StructsLocationMessagePayloadLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsLocationMessagePayloadLocation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StructsLocationMessagePayloadLocation.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

StructsLocationMessagePayloadLocation.RequiredProperties = ["latitude", "longitude", "name"];

/**
 * @member {String} address
 */
StructsLocationMessagePayloadLocation.prototype['address'] = undefined;

/**
 * @member {Number} latitude
 */
StructsLocationMessagePayloadLocation.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
StructsLocationMessagePayloadLocation.prototype['longitude'] = undefined;

/**
 * @member {String} name
 */
StructsLocationMessagePayloadLocation.prototype['name'] = undefined;






export default StructsLocationMessagePayloadLocation;
