export function CheckValueArray(arr) {
	const isArray = (arr) => Array.isArray(arr) && arr.length > 0;

	return isArray(arr);
}