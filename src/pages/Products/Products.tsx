import { useLoaderData } from 'react-router';
import { Product } from '../../types/ProductsType';
import ProductsList from '../../components/products/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { saveAllProducts } from '../../store/allProductsSlice';
import classes from './Products.module.css';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { products } = useLoaderData();

  useEffect(() => {
    dispatch(saveAllProducts(products));
  }, [dispatch, products]);

  const localProducts = useSelector(
    (state: RootState) => state.products.products
  );

  //   console.log(localProducts);

  const [selectedOption, setSelectedOption] = useState<string>('all');

  const favourites = useSelector(
    (state: RootState) => state.favourites.favourites
  );

  return (
    <>
      <select
        onChange={(e) => setSelectedOption(e.target.value)}
        className={classes.select}
      >
        <option value="all">All products</option>
        <option value="favourites">Favourites</option>
      </select>
      <ul>
        {selectedOption === 'all' &&
          localProducts.map((product: Product) => (
            <ProductsList product={product} key={product.id} />
          ))}

        {selectedOption === 'favourites' &&
          favourites.map((product: Product) => (
            <ProductsList product={product} key={product.id} />
          ))}
      </ul>
    </>
  );
}

export async function loader() {
  try {
    const responce = await fetch('https://dummyjson.com/products');
    if (!responce.ok) {
      throw new Error('Could not fetch products...');
    }
    return responce;
  } catch (err) {
    console.log(err);
  }
}
