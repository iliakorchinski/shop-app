import { createBrowserRouter, RouterProvider } from 'react-router';

import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProductsPage, {
  loader as productsLoader,
} from './pages/Products/Products';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
