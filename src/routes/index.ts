import { LoginPage, EventPage } from '../pages';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        component: LoginPage,
    },
];

export const privateRoutes: IRoute[] = [
    {
        path: RouteNames.EVENT,
        component: EventPage,
    },
];
