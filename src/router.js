import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				"Hello World"
				<Outlet />
			</div>
		),
		errorElement: <div>errors</div>,
		children: [
			{
				path: "contact",
				element: <div>This is contact</div>,
			},
		],
	},
]);

export default router;
