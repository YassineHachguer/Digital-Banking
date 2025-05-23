import { appHttpInterceptor } from './interceptors/app-http.interceptor';
import {ApplicationConfig} from "@angular/core";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([appHttpInterceptor])
    ),
    provideRouter(routes)
  ]
};
