import webpack from 'webpack';

export function buildBabelLoader(isDev: boolean, isTsx?: boolean): webpack.RuleSetRule {
	const babelLoader = {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: [/node_modules/, /cypress/],
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env'],
				plugins: [
					isDev && 'react-refresh/babel',
					['@babel/plugin-transform-typescript', { isTsx }],
					'@babel/plugin-transform-runtime',
				].filter(Boolean),
			},
		},
	};

	return babelLoader;
}
