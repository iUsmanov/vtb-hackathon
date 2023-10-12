import { useContext } from 'react';
import { Theme } from '@/shared/types/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
// import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface UseThemeResult {
	theme: Theme;
	changeTheme: (saveAction?: (theme: Theme) => void) => void;
}

export const fallbackTheme: Theme =
	/* (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||  */ 'app-light-theme';

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = (saveAction?: (theme: Theme) => void) => {
		let newTheme;
		switch (theme) {
			case 'app-light-theme':
				document.body.classList.remove(theme);
				newTheme = 'app-dark-theme' as Theme;
				document.body.classList.add(newTheme);
				break;
			case 'app-dark-theme':
				document.body.classList.remove(theme);
				newTheme = 'app-orange-theme' as Theme;
				document.body.classList.add(newTheme);
				break;
			case 'app-orange-theme':
				document.body.classList.remove(theme);
				newTheme = 'app-light-theme' as Theme;
				document.body.classList.add(newTheme);
				break;
			default:
				newTheme = 'app-dark-theme' as Theme;
		}

		setTheme?.(newTheme);
		// localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

		saveAction?.(newTheme);
	};

	return {
		theme: theme || fallbackTheme,
		changeTheme,
	};
}
