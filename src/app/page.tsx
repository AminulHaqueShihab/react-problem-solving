'use client';
import Column from '@/components/Column';
import Container from '@/components/Container';
import { Button, Center, Grid, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

export default function Home() {
	const [arr1, setArr1] = useState<number[]>([1, 2, 3, 4]);
	const [arr2, setArr2] = useState<number[]>([]);
	const [selected, setSelected] = useState<number[]>([]);

	const moveLeft = () => {
		const newSelected = selected.filter(item => !arr2.includes(item));
		setArr1([...arr1, ...selected]);
		setArr2(arr2.filter(item => !selected.includes(item)));
		setSelected(newSelected);
	};
	const moveRight = () => {
		const newSelected = selected.filter(item => !arr1.includes(item));
		setArr2([...arr2, ...selected]);
		setArr1(arr1.filter(item => !selected.includes(item)));
		setSelected(newSelected);
	};

	return (
		<Center minH='100vh'>
			<Grid templateColumns='2fr 1fr 2fr' w='50%' gap={10}>
				<Container
					selected={selected}
					setSelected={setSelected}
					arr={arr1.sort()}
				/>
				<Center gap={4}>
					<IconButton
						aria-label=''
						icon={<FaAngleDoubleLeft />}
						onClick={moveLeft}
					/>
					<IconButton
						aria-label=''
						icon={<FaAngleDoubleRight />}
						onClick={moveRight}
					/>
				</Center>
				<Container
					selected={selected}
					setSelected={setSelected}
					arr={arr2.sort()}
				/>
			</Grid>
		</Center>
	);
}
