import { Product } from '../../types/ProductsType';
import classes from './ProductList.module.css';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toggleFavourites } from '../../store/favouriteslice';
import { deleteProduct } from '../../store/allProductsSlice';
import Like from '../Icons/Like/Like';
import Dislike from '../Icons/Dislike/Dislike';
import { useState, useEffect } from 'react';

type ProductListProps = {
  product: Product;
};

export default function ProductsList({ product }: ProductListProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispath = useDispatch();

  useEffect(() => {
    const storedFavourite = localStorage.getItem(`favourite-${product.id}`);
    if (storedFavourite === 'true') {
      setIsActive(true);
    }
  }, [product.id]);

  const toggleFavouritesHandler = () => {
    dispath(
      toggleFavourites({
        id: product.id,
        brand: product.brand,
        category: product.category,
        description: product.description,
        price: product.price,
        images: product.images,
        title: product.title,
        isLiked: product.isLiked,
      })
    );

    setIsActive((prevState) => !prevState);
    localStorage.setItem(`favourite-${product.id}`, JSON.stringify(!isActive));
  };

  const deleteProductHandler = () => {
    dispath(
      deleteProduct({
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
        <Link to={`/products/${product.id}`} className={classes.link}>
          <h2 className={classes.title}>{product.title}</h2>
          <p className={classes.brand}>{product.brand}</p>
          <p className={classes.category}>{product.category}</p>
          <p className={classes.price}>{product.price}</p>
          <img
            src={product.images[0]}
            className={classes.image}
            alt={product.title}
          />
        </Link>
      </li>
      <div className={classes.actions}>
        <button
          onClick={toggleFavouritesHandler}
          className={classes.iconButton}
        >
          {!isActive ? <Like /> : <Dislike />}
        </button>
        <button onClick={deleteProductHandler} className={classes.deleteButton}>
          Delete
        </button>
      </div>
    </>
  );
}
