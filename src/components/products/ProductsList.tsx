import { Product } from '../../types/ProductsType';
import classes from './ProductList.module.css';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToFavourites } from '../../store/favouriteslice';

type ProductListProps = {
  product: Product;
};

export default function ProductsList({ product }: ProductListProps) {
  const dispath = useDispatch();

  const addToFavouritesHandler = () => {
    dispath(
      addToFavourites({
        id: product.id,
        brand: product.brand,
        category: product.category,
        description: product.description,
        price: product.price,
        images: product.images,
        title: product.title,
      })
    );
  };

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
      <button onClick={addToFavouritesHandler}>Like</button>
      <button>Delete</button>
    </>
  );
}
