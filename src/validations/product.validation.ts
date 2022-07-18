import * as yup from "yup";

const validations = yup.object().shape({
	name: yup
		.string()
		.min(3, 'must be at least 3 characters')
        .max(200, 'must be a maximum of 200 characters')
		.required("required field"),
    description: yup
		.string()
		.min(3, 'must be at least 3 characters')
        .max(1000, 'must be a maximum of 1000 characters')
		.required("required field"),
    price: yup
		.number()
		.required("required field"),
    avatar: yup
		.string()
		.min(20, 'must be at least 20 characters')
        .max(1000, 'must be a maximum of 1000 characters')
		.required("required field"),
    category: yup
		.string()
		.required("required field"),
});

export default validations;

