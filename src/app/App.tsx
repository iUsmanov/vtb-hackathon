import { memo } from 'react';
import { withTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/components/AppRouter';
import { Navbar } from '@/widgets/navbar';

const App = memo(() => {
	return (
		<div className={'app'}>
			<Navbar />
			<AppRouter />
		</div>
	);
});

const AppWithTheme = withTheme(App);
export { AppWithTheme as App };
