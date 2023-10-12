// import { useUserSettings } from '@/entities/User';
import { getUserSettings } from '@/entities/User';
import { ThemeProvider } from '../../components/ThemeProvider';
import { useSelector } from 'react-redux';

export const withTheme = (Component: React.ComponentType) => {
	return () => {
		const { theme } = useSelector(getUserSettings);
		return (
			<ThemeProvider initialTheme={theme}>
				<Component />
			</ThemeProvider>
		);
	};
};
