import { useLoaderData } from 'react-router';
import { Product } from '../../types/ProductsType';
import ProductsList from '../../components/products/ProductsList';
export default function ProductsPage() {
  const { products } = useLoaderData();
  const handleDelete = (id: number) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(console.log);
  };

  console.log(products);
  return (
    <ul>
      {products &&
        products.map((product: Product) => (
          <ProductsList
            product={product}
            handleDelete={() => handleDelete(product.id)}
            key={product.id}
          />
        ))}
    </ul>
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
