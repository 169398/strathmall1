/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "strathmall1.vercel.app",
			},
			{
				protocol: "https",
				hostname: "strathmall.com",
			},
		],
	},
};

module.exports = nextConfig;
