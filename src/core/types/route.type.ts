import { ComponentType } from 'react';

export interface RouteShape {
  path: string;
  component: ComponentType<any>;
  guardResult?: RouteGuardResult;
}

export interface RouteGuardShape extends RouteShape {
  config?: RouteGuardConfig;
}

export interface RouteGuardResult {
  isAllow?: boolean;
  redirect?: string;
}

export interface RouteGuardConfig {
  roles: string[];
  redirect: string;
}
