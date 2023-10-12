import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { VStack } from '@/shared/components/Stack';

interface PageErrorProps {
	className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
	const { className } = props;

	const reload = () => {
		window.location.reload();
	};

	return (
		<VStack justify='center' align='center' className={classNames(cls.pageError, {}, [className])}>
			<h1>Произошла непредвиденная ошибка</h1>
		</VStack>
	);
});
