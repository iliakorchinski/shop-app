import { useLoaderData } from 'react-router';
import { Product } from '../../types/ProductsType';
import ProductsList from '../../components/products/ProductsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';

export default function ProductsPage() {
  const { products } = useLoaderData();
  const [selectedOption, setSelectedOption] = useState<string>('all');

  const favourites = useSelector(
    (state: RootState) => state.favourites.favourites
  );

  console.log(favourites);

  return (
    <>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="all">All products</option>
        <option value="favourites">Favourites</option>
      </select>
      <ul>
        {selectedOption === 'all' &&
          products.map((product: Product) => (
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
