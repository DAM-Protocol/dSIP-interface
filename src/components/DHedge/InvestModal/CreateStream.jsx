import {
	Alert,
	AlertIcon,
	FormControl,
	Input,
	Spacer,
	VStack,
	useDisclosure,
	useColorModeValue,
	Button,
	InputGroup,
	InputLeftElement,
	Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { defaultTokenList } from './defaultTokenList';
import TokenSelector from './TokenSelector';

const CreateStream = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedToken, setSelectedToken] = useState(defaultTokenList[0]);
	const handleSelect = (token) => {
		setSelectedToken(token);
		onClose();
	};
	return (
		<VStack gap='6' w='100%' px='4' borderRadius={'md'}>
			<Alert
				status='warning'
				borderRadius='md'
				bg={useColorModeValue('yellow.50', 'yellow.900')}>
				<AlertIcon />
				Do your own research about the pools before streaming.
			</Alert>

			<TokenSelector
				isOpen={isOpen}
				onClose={onClose}
				handleSelect={handleSelect}
				tokenList={defaultTokenList}
			/>

			<FormControl>
				<label htmlFor='supertoken'>Super Token</label>
				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						mr='6'
						children={
							<Image
								boxSize={'1.25rem'}
								borderRadius='50%'
								alt='token'
								src={selectedToken?.icon}
								fallbackSrc='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png'
							/>
						}
					/>

					<Input
						type='text'
						id='supertoken'
						onClick={onOpen}
						onKeyUp={(e) =>
							e.key !== 'Tab' &&
							e.key !== 'Shift' &&
							e.key !== 'Escape' &&
							onOpen()
						}
						cursor='pointer'
						value={selectedToken?.symbol}
					/>
				</InputGroup>
			</FormControl>

			<FormControl>
				<label htmlFor='rate'> Rate (Tokens/month)</label>
				<Input type='number' id='rate' />
			</FormControl>

			<Spacer />

			<Button colorScheme={'blue'}>Start Stream</Button>
		</VStack>
	);
};

export default CreateStream;
