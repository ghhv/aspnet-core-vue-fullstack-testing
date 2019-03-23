﻿import axios, { AxiosInstance } from 'axios';

/**
 * Service API base class
 * 1: Configure axios instance
 * 2: Add response handler for this axios instance
 */
export abstract class BaseService {
    protected readonly $http: AxiosInstance;

    protected constructor(apiBaseUrl: string, apiTimeout: number = 5000) {
        this.$http = axios.create({
             timeout: apiTimeout,
             baseURL: apiBaseUrl
        });

        this.$http.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.error(JSON.stringify(error));
                return Promise.reject(error);
            }
        );
    }
}