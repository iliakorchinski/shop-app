import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/allProductsSlice';
import { useNavigate } from 'react-router';
import classes from './Form.module.css';

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    data.id = Math.random();
    data.images = [data.images];
    console.log(data);
    dispatch(addProduct(data));
    return navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <label>
        Title:
        <input
          type="text"
          {...register('title', {
            required: true,
            minLength: {
              value: 2,
              message: 'Minimum 2 charachters',
            },
          })}
        />
      </label>
      <div>{errors?.title && <p>{errors?.title?.message?.toString()}</p>}</div>
      <label>
        Brand:
        <input
          type="text"
          {...register('brand', {
            required: true,
            minLength: {
              value: 2,
              message: 'Minimum 2 charachters',
            },
          })}
        />
      </label>
      <div>{errors?.brand && <p>{errors?.brand?.message?.toString()}</p>}</div>
      <label>
        Category:
        <input
          type="text"
          {...register('category', {
            required: true,
            minLength: {
              value: 2,
              message: 'Minimum 2 charachters',
            },
          })}
        />
      </label>
      <div>
        {errors?.category && <p>{errors?.category?.message?.toString()}</p>}
      </div>
      <label>
        Description:
        <input
          type="text"
          {...register('description', {
            required: true,
            minLength: {
              value: 2,
              message: 'Minimum 2 charachters',
            },
          })}
        />
      </label>
      <div>
        {errors?.description && (
          <p>{errors?.description?.message?.toString()}</p>
        )}
      </div>
      <label>
        Price:
        <input
          type="number"
          {...register('price', {
            required: true,
            min: {
              value: 1,
              message: 'the price cannot be a 0 or less',
            },
          })}
        />
      </label>
      <div>{errors?.price && <p>{errors?.price?.message?.toString()}</p>}</div>
      <label>
        ImageURL:
        <input
          type="url"
          {...register('images', {
            required: true,
            minLength: {
              value: 2,
              message: 'Minimum 2 charachters',
            },
          })}
        />
      </label>
      <div>
        {errors?.images && <p>{errors?.images?.message?.toString()}</p>}
      </div>

      <input type="submit" />
    </form>
  );
}

// id: number;
// brand: string;
// category: string;
// description: string;
// price: number;
// images: string[];
// title: string;
