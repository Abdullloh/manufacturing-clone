import { createBrowserRouter } from 'react-router-dom';
import { LayoutAuthorized, LayoutBase } from '../layouts';
import { CategoryPage } from '../pages/categoryPage';
import { DimensionsPage } from '../pages/dimensionsPage';
import { ProductsPage } from '../pages/productsPage';
import { SubCategoryPage } from '../pages/subCategoryPage';

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
        element: <CategoryPage />,
      },
      {
        path: '/cabinet/category',
        caseSensitive: true,
        element: <CategoryPage />,
      },
      {
        path: '/cabinet/subcategory',
        caseSensitive: true,
        element: <SubCategoryPage />,
      },
      {
        path: '/cabinet/dimensions',
        caseSensitive: true,
        element: <DimensionsPage />,
      },
      {
        path: '/cabinet/products',
        caseSensitive: true,
        element: <ProductsPage />,
      },
    ],
  },
]);
