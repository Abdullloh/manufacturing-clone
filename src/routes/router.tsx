import { createBrowserRouter } from 'react-router-dom';
import { LayoutAuthorized, LayoutBase } from '../layouts';
import { CategoryPage } from '../pages/categoryPage';
import { DimensionsPage } from '../pages/dimensionsPage';
import { ExitedProductsPage } from '../pages/exitedProductsPage';
import { IncomingProductsPage } from '../pages/incomingProductsPage';
import { ModelsPage } from '../pages/modelsPage';
import { ProductDeletePage } from '../pages/productDeletePage';
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
      {
        path: '/cabinet/products/exited',
        caseSensitive: true,
        element: <ExitedProductsPage />,
      },
      {
        path: '/cabinet/products/coming',
        caseSensitive: true,
        element: <IncomingProductsPage />,
      },
      {
        path: '/cabinet/model-types',
        caseSensitive: true,
        element: <ModelsPage />,
      },
      {
        path: '/cabinet/products/delete/:id',
        caseSensitive: true,
        element: <ProductDeletePage />,
      },
    ],
  },
]);
