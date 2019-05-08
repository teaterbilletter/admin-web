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


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({providedIn : 'root'})
export class ShowService {

    protected basePath = 'https://ticket.northeurope.cloudapp.azure.com:5443';
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllShows(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAllShows(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAllShows(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAllShows(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {

        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/AllShows`,
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
     * @param dateTime 
     * @param showID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOccupiedSeats(dateTime?: string, showID?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getOccupiedSeats(dateTime?: string, showID?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getOccupiedSeats(dateTime?: string, showID?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getOccupiedSeats(dateTime?: string, showID?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (dateTime !== undefined && dateTime !== null) {
            queryParameters = queryParameters.set('dateTime', <any>dateTime);
        }
        if (showID !== undefined && showID !== null) {
            queryParameters = queryParameters.set('ShowID', <any>showID);
        }



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
        ];

        return this.httpClient.get<any>(`${this.basePath}/GetOccupiedSeats`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,

                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getShow(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getShow(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getShow(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getShow(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getShow.');
        }


        // authentication (Bearer) required



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);


        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/Show/${encodeURIComponent(String(id))}`,
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
     * @param theaterName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTheater(theaterName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getTheater(theaterName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getTheater(theaterName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getTheater(theaterName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (theaterName === null || theaterName === undefined) {
            throw new Error('Required parameter theaterName was null or undefined when calling getTheater.');
        }




        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);


        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/Theater/${encodeURIComponent(String(theaterName))}`,
            {
                withCredentials: this.configuration.withCredentials,

                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
