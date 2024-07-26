import { createBrowserRouter } from 'react-router-dom';
import { LayoutAuthorized, LayoutBase } from '../layouts';
import { ProductsPage } from '../pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBase />,
  },
  {
    path: '/cabinet',
    element: <LayoutAuthorized />,
    children: [
      {
        index: true,
        caseSensitive: true,
        element: <ProductsPage />,
      },
    ],
  },
]);
