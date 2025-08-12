
/** @type {import('next').NextConfig} */
const nextConfig = {
	// ...existing config...
	images: {
		domains: [
			'fra.cloud.appwrite.io',
			// add other domains if needed
		],
	},
};

export default nextConfig;
