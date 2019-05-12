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

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import {BASE_PATH} from '..';
import { Hall} from '..';
import { Show } from '..';
import { Theater } from '..';

import { Configuration } from '../configuration';
import {DatePipe} from '@angular/common';
import {Params} from '@angular/router';


@Injectable({providedIn : 'root'})
export class AdministratorService {

    protected basePath = 'https://disttickets.northeurope.cloudapp.azure.com/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

  constructor(protected httpClient: HttpClient,
              @Optional()@Inject(BASE_PATH) basePath: string,
              @Optional() configuration: Configuration, private datepipe: DatePipe) {

        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    public createHall(body?: Hall, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return this.httpClient.post<any>(`${this.basePath}/Hall`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                observe,
                reportProgress
            }
        );
    }


    public createShow(body?: Show, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return this.httpClient.post<any>(`${this.basePath}/Show`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                observe,
                reportProgress
            }
        );
    }


    public createTheater(body?: Theater, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
      return this.httpClient.post<any>(`${this.basePath}/Theater`,
        body,
        {
          withCredentials: this.configuration.withCredentials,
          observe,
          reportProgress
        }
      );
    }


    public deleteCustomer(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCustomer.');
        }
        return this.httpClient.delete<any>(`${this.basePath}/Customer/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                observe,
                reportProgress
            }
        );
    }


    public deleteShowDates(id?: number, dateTime?: Date, observe: any = 'body', reportProgress: boolean = false ) {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.append('id', id as any);
        }
        if (dateTime !== undefined && dateTime !== null) {
            queryParameters = queryParameters.append('dateTime', this.datepipe.transform(dateTime, 'yyyy-MM-dd hh:mm:ss') as any);
        }
        console.log(id + ' ' + this.datepipe.transform(dateTime, 'yyyy-MM-dd hh:mm:ss'));
        console.log(queryParameters.get('id') + ' - ' + queryParameters.get('dateTime'));
        this.httpClient.delete(this.basePath.concat('/ShowDates/'), {params: queryParameters}).subscribe(result => console.log(result));


    }


    public updateShow(body?: Show, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return this.httpClient.put<any>(`${this.basePath}/Show`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                observe,
                reportProgress
            }
        );
    }


    public updateTheater(oldtheatername: string, body?: Theater, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return this.httpClient.put<any>(`${this.basePath}/Theater/${encodeURIComponent(String(oldtheatername))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                observe,
                reportProgress
            }
        );
    }

}
