import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type ColumnProps = FlexProps & {
	children?: React.ReactNode;
};

const Column: FC<ColumnProps> = ({ children, ...props }) => {
	return (
		<Flex direction='column' {...props}>
			{children && children}
		</Flex>
	);
};

export default Column;
