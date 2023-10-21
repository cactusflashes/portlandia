//page transitions, thanks Josh Collinsworth! 
export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};