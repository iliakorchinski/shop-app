import { createBrowserRouter, RouterProvider } from 'react-router';

import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProductsPage, {
  loader as productsLoader,
} from './pages/Products/Products';
import ProductsDetailPage, {
  loader as singleProductLoader,
} from './pages/ProductsDetail/ProductsDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: '/products',
          element: <ProductsPage />,
          loader: productsLoader,
        },
        {
          path: '/products/:id',
          element: <ProductsDetailPage />,
          loader: singleProductLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
