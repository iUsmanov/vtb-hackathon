import { AppRoutes } from '../types/router';

export const getRouteMain = () => `/`;
export const getRouteAbout = () => `/about`;
export const getRouteForbidden = () => `/forbidden`;
export const getRouteNotFound = () => `/*`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: 'main',
	[getRouteAbout()]: 'about',
	[getRouteForbidden()]: 'forbidden',
};
