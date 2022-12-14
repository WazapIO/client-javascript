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
import LocationMessagePayloadLocation from './LocationMessagePayloadLocation';

/**
 * The LocationMessagePayload model module.
 * @module WhatsAPI/models/LocationMessagePayload
 * @version 1.0.0
 */
class LocationMessagePayload {
    /**
     * Constructs a new <code>LocationMessagePayload</code>.
     * @alias module:WhatsAPI/models/LocationMessagePayload
     * @param location {module:WhatsAPI/models/LocationMessagePayloadLocation} 
     * @param to {String} 
     */
    constructor(location, to) { 
        
        LocationMessagePayload.initialize(this, location, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, location, to) { 
        obj['location'] = location;
        obj['to'] = to;
    }

    /**
     * Constructs a <code>LocationMessagePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/LocationMessagePayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/LocationMessagePayload} The populated <code>LocationMessagePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationMessagePayload();

            if (data.hasOwnProperty('location')) {
                obj['location'] = LocationMessagePayloadLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationMessagePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationMessagePayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LocationMessagePayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          LocationMessagePayloadLocation.validateJSON(data['location']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

LocationMessagePayload.RequiredProperties = ["location", "to"];

/**
 * @member {module:WhatsAPI/models/LocationMessagePayloadLocation} location
 */
LocationMessagePayload.prototype['location'] = undefined;

/**
 * @member {String} to
 */
LocationMessagePayload.prototype['to'] = undefined;

/**
 * @member {String} url
 */
LocationMessagePayload.prototype['url'] = undefined;






export default LocationMessagePayload;

