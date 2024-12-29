import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function ProductsDetailPage() {
  const products = useSelector((state: RootState) => state.products.products);
  const params = useParams();
  // const product: Product = useLoaderData();

  const product = products.find(
    (product) => product.id.toString() === params.id
  );

  return (
    <div>
      <h3>{product && product.title}</h3>
      <p>{product && product.brand}</p>
      <p>{product && product.description}</p>
      <img
        src={product && product.images[0]}
        alt={product && product.title}
        width={300}
        height={300}
      />
    </div>
  );
}

// export async function loader({ params }) {
//   const id = params.id;
//   try {
//     const responce = await fetch(`https://dummyjson.com/products/${id}`);
//     if (!responce.ok) {
//       throw new Error('Could not fetch a single product');
//     }
//     return responce;
//   } catch (err) {
//     console.log(err);
//   }
// }
