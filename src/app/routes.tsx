import { DefaultLayout, LoginLayout } from '@/components';
import { PATH } from '@/constants';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
const Login = lazy(() => import('@/views/Login'));
const NotFound = lazy(() => import('@/views/NotFound'));

const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: <DefaultLayout />,
		children: [
			{
				path: PATH.ROOT,
				element: <Home />,
			},
		],
	},
	{
		path: PATH.ROOT,
		element: <LoginLayout />,
		children: [
			{
				path: PATH.LOGIN,
				element: <Login />,
			},
		],
	},
	{
		path: PATH.ANY,
		element: <NotFound />,
	},
]);

export default router;
