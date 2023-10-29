import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { HStack } from '@/shared/components/Stack';
import { Link } from 'react-router-dom';
import { getRouteAbout, getRouteMain } from '@/shared/const/router';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props;

	return (
		<HStack max justify='between' align='center' className={classNames(cls.navbar, {}, [className])}>
			<h1>DjangoDev</h1>
			<HStack align='center' className={cls.navigation}>
				<Link to={getRouteMain()}>Главная страница</Link>
				<Link to={getRouteAbout()}>О нас</Link>
				<Link to={''}>Выйти</Link>
			</HStack>
		</HStack>
	);
});
