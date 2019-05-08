/**
 * TicketService API
 * Ticketordering by date
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Login } from '../model/login';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({providedIn : 'root'})
export class AuthenticateService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public adminLogin(body?: Login, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public adminLogin(body?: Login, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public adminLogin(body?: Login, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public adminLogin(body?: Login, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {

        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {

        }

        return this.httpClient.post<any>(`${this.basePath}/AdminLogin`,
            body,
            {
                withCredentials: this.configuration.withCredentials,

                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userLogin(body?: Login, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public userLogin(body?: Login, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public userLogin(body?: Login, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public userLogin(body?: Login, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {

        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {

        }

        return this.httpClient.post<any>(`${this.basePath}/UserLogin`,
            body,
            {
                withCredentials: this.configuration.withCredentials,

                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}