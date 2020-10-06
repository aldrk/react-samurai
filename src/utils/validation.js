export const isRequired = (value) => {
	return value ? undefined : 'Input is required';
};

export const maxLengthValidationCreator = (max) => (value) => {
	return (value && value.length > max) ? `No more ${max} symbols` : undefined;
};

export const minLengthValidationCreator = (min) => (value) => {
	return (value && value.length < min) ? `Minimum ${min} symbols required` : undefined;
};