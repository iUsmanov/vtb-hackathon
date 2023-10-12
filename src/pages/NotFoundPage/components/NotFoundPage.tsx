import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { HStack } from '@/shared/components/Stack';
import { Page } from '@/widgets/Page';

export const NotFoundPage = memo(() => {
	return (
		<Page data-testid='NotFoundPage'>
			<HStack justify='center' align='center' className={cls.notFoundPage}>
				NotFoundPage
			</HStack>
		</Page>
	);
});
