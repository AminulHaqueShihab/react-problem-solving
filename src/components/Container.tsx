import React, { FC } from 'react';
import Column from './Column';
import { Center, Checkbox, Flex, FlexProps, Text } from '@chakra-ui/react';

type ContainerProps = FlexProps & {
	arr: number[];
	setArr: (arr: number[]) => void;
	selected: number[];
	setSelected: (selected: number[]) => void;
};

const Container: FC<ContainerProps> = ({
	arr,
	setArr,
	selected,
	setSelected,
}) => {
	return (
		<Center
			flexDirection='column'
			border='1px solid'
			borderRadius='1rem'
			minH='300px'
			p='1.5rem'
			gap={3}
		>
			{arr.map((item, index) => (
				<Flex key={index} gap={1}>
					<Checkbox
						size='lg'
						id={item.toString()}
						isChecked={selected.includes(item)}
						onChange={e => {
							if (e.target.checked) {
								setSelected([...selected, item]);
							} else {
								setSelected(selected.filter(i => i !== item));
							}
						}}
					/>
					<Text>{item}</Text>
				</Flex>
			))}
		</Center>
	);
};

export default Container;
