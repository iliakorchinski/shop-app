import { useLoaderData } from 'react-router';
import { Product } from '../../types/ProductsType';

export default function ProductsDetailPage() {
  const product: Product = useLoaderData();

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <img
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={300}
      />
    </div>
  );
}

export async function loader({ params }) {
  const id = params.id;
  try {
    const responce = await fetch(`https://dummyjson.com/products/${id}`);
    if (!responce.ok) {
      throw new Error('Could not fetch a single product');
    }
    return responce;
  } catch (err) {
    console.log(err);
  }
}
