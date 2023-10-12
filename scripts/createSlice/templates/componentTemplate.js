const { firstCharUpperCase } = require('../helpers');

module.exports = (sliceName) => {
	const componentName = firstCharUpperCase(sliceName);
	return `import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './${componentName}.module.scss';

interface ${componentName}Props {
	className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
	const { className } = props;

	return (
		<div className={classNames(cls.${sliceName}, {}, [className])}>

		</div>
	);
});`;
};
