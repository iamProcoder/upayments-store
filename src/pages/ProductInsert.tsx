import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik";
import validationSchema from "../validations/product.validation";

import { useQuery } from "react-query";
import { CategoryList } from '../services/category.service'
import { AddProduct } from '../services/product.service';
import { Product } from '../types/ProductModel';


const ProductInsert = () => {
    const email: string = process.env.REACT_APP_DEVELOPER_EMAIL || '';
    const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			name: '',
			description: '',
            price: 0,
            avatar: '',
            category: '',
            developerEmail: email
		},
		validationSchema,
		onSubmit: async (values, bag) => {
			try {
                if (values.price === 0) return bag.setFieldError('price', 'required field');
				await AddProduct({...values} as Product);
				navigate("/");
			} catch (e: any) {
				bag.setErrors(e);
			}
		},
	});

    const { data } = useQuery<any>("categories", CategoryList);

  return (
    <div className="flex flex-col justify-center items-center w-2/4 m-auto">        
      <div className="text-4xl font-bold w-auto h-11 mb-5 mt-20">Create Product</div>
      <form onSubmit={formik.handleSubmit}>
        <input
            id='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="register-input"
            type="text"
            placeholder="Product name"
        />
        {formik.errors.name && formik.touched.name && (<span className='register-error'>{formik.errors.name}</span>)}

        <textarea
            id='description'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="register-input"
            rows={3}
            cols={5}
            placeholder="Description"
        />
        {formik.errors.description && formik.touched.description && (<span className='register-error'>{formik.errors.description}</span>)}

        <input
            id='avatar'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.avatar}
            className="register-input"
            type="text"
            placeholder="Image URL"
        />
        {formik.errors.avatar && formik.touched.avatar && (<span className='register-error'>{formik.errors.avatar}</span>)}

        <select
            id='category'
            onChange={value => formik.setFieldValue('category', value.target.value)}
            value={formik.values.category}
            className="register-input"
        >
            <option value="-1">Categories</option>
            {data &&
                data.categories.map((cat: any) => (
                    <option
                        key={cat._id}
                        value={cat.name}
                        className="text-gray-500 px-4 py-3 text-base"
                        >
                        {cat.name}
                    </option>
            ))}
        </select>
        {formik.errors.category && formik.touched.category && (<span className='register-error'>{formik.errors.category}</span>)}

        <input
            id='price'
            onChange={value => formik.setFieldValue('price', value.target.value)}
            onBlur={value => formik.setFieldValue('price', value.target.value)}
            value={formik.values.price}
            className="register-input"
            type={'number'}
            placeholder="Price"
        />
        {formik.errors.price && formik.touched.price && (<span className='register-error'>{formik.errors.price}</span>)}

        <button type='submit' className="mt-10 inline-flex justify-center w-full bg-white hover:bg-blue-500 text-black font-bold hover:text-white py-2 px-4 border border-gray-300 shadow-sm rounded">
            SUBMIT
        </button>
    </form>
    </div>
  );
}

export default ProductInsert