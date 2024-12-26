import { Product } from '../../types/ProductsType';

type ProductListProps = {
  product: Product;
};

export default function ProductsList({ product }: ProductListProps) {
  return (
    <li key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <img
        src={product.images[0]}
        width={100}
        height={100}
        alt={product.title}
      />
    </li>
  );
}
