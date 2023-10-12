import { AppRouteObject, AppRoutes } from '@/shared/types/router';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { createBrowserRouter } from 'react-router-dom';
import {
	getRouteAbout,
	getRouteForbidden,
	getRouteMain,
	getRouteNotFound,
} from '@/shared/const/router';
// eslint-disable-next-line fsd-paths-guard/hierarchy-imports-between-layers
import { RootLayout } from '@/app/RootLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RequireAuth } from '../components/RequireAuth';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

const routeConfig: Record<AppRoutes, AppRouteObject> = {
	main: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	about: {
		path: getRouteAbout(),
		element: <AboutPage />,
	},
	forbidden: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	not_found: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};

export const routes = Object.values(routeConfig).map((route) => {
	if (route.authOnly) {
		const routeElement = route.element;
		route.element = <RequireAuth>{routeElement as JSX.Element}</RequireAuth>;
	}

	// if (route.roles) {
	// 	const routeElement = route.element;
	// 	route.element = <RequireRoles roles={route.roles}>{routeElement as JSX.Element}</RequireRoles>;
	// }

	return route;
});

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: routes,
	},
]);
