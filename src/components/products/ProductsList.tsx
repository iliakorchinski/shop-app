import { Product } from '../../types/ProductsType';
import classes from './ProductList.module.css';
import { Link } from 'react-router-dom';
type ProductListProps = {
  product: Product;
  handleDelete: (id: number) => void;
};

export default function ProductsList({
  product,
  handleDelete,
}: ProductListProps) {
  return (
    <>
      <li className={classes.container}>
        <Link to={`/products/${product.id}`}>
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
        </Link>
      </li>
      <button>Like</button>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
    </>
  );
}
