import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';

export default function MainNav() {
  return (
    <header className={classes.header}>
      <ul className={classes.container}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/products/new">Create a product</Link>
        </li>
      </ul>
    </header>
  );
}
