import { UserSettings } from '../../types/userSettings';
import { StateSchema } from '@/app/providers/StoreProvider';

const defaultUserSettings: UserSettings = {};

export const getUserSettings = (state: StateSchema) =>
	state?.user?.authData?.jsonSettings ?? defaultUserSettings;
