import { memo } from 'react';
import { withTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/components/AppRouter';

const App = memo(() => {
	return (
		<div className={'app'}>
			<AppRouter />
		</div>
	);
});

const AppWithTheme = withTheme(App);
export { AppWithTheme as App };
