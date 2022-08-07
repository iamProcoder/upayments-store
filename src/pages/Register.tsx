import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik";
import validationSchema from "../validations/user.validation";

import { GetGithubAvatar, GetToken } from '../services/user.service';
import { User } from '../types/UserModel';


const Register = () => {
    const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
            github: '',
            avatar: ''
		},
		validationSchema,
		onSubmit: async (values, bag) => {
			try {

                const { avatar_url } = await GetGithubAvatar(values.github.split('/')[3]);
                values = {...values, avatar: avatar_url };
				await GetToken({...values} as User);
				navigate("/");
			} catch (e: any) {
				bag.setErrors(e);
			}
		},
	});

  return (
    <div className="flex flex-col justify-center items-center w-2/4 m-auto">        
      <div className="text-4xl font-bold w-auto h-11 mb-5 mt-20">Register | Get Token</div>
      <form onSubmit={formik.handleSubmit}>
        <input
            id='fullName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="register-input"
            type="text"
            placeholder="Full Name"
        />
        {formik.errors.fullName && formik.touched.fullName && (<span className='register-error'>{formik.errors.fullName}</span>)}

        <input
            id='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="register-input"
            placeholder="email"
        />
        {formik.errors.email && formik.touched.email && (<span className='register-error'>{formik.errors.email}</span>)}

        <input
            id='github'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.github}
            className="register-input"
            placeholder="Github "
        />
        {formik.errors.github && formik.touched.github && (<span className='register-error'>{formik.errors.github}</span>)}

        <button type='submit' className="mt-10 inline-flex justify-center w-full bg-white hover:bg-blue-500 text-black font-bold hover:text-white py-2 px-4 border border-gray-300 shadow-sm rounded">
            SEND
        </button>
    </form>
    </div>
  );
}

export default Register