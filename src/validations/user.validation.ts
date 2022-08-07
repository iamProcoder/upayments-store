import * as yup from "yup";

const validations = yup.object().shape({
	fullName: yup
		.string()
		.min(3, 'must be at least 3 characters')
        .max(200, 'must be a maximum of 200 characters')
		.required("required field"),
    email: yup
		.string()
		.email('Invalid email format')
		.min(3, 'must be at least 3 characters')
        .max(1000, 'must be a maximum of 1000 characters')
		.required("required field"),
	github: yup
		.string()
		.required("required field"),
});

export default validations;

