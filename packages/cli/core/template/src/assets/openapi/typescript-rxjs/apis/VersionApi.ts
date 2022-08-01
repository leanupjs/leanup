// tslint:disable
/**
 * Leanup Stack API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI } from '../runtime';
import {
    IVersion,
} from '../models';

/**
 * no description
 */
export class VersionApi extends BaseAPI {

    /**
     * Liefert die aktuelle Version des Webservices.
     * Versionsnummer
     */
    versionGet = (): Observable<IVersion> => {
        return this.request<IVersion>({
            path: '/version',
            method: 'GET',
        });
    };

}