export const process = {
	dev: true,
};

export const site = {
	home: process.dev ? 'https://localhost:3000/' : "https://onestly.ru",
};

export const app = {
	title: "Notes App",
};

export const links = [
	{
		title: 'Home',
		alias: 'home',
		url: '/',
	},
	{
		title: 'About',
		alias: 'about',
		url: '/about',
	},
];