import {
    Box,
    Center,
    useColorModeValue,
    Text,
    Stack,
} from '@chakra-ui/react';
import Day from '../components/CardProps/day'
import Date from '../components/CardProps/date'
import Description from '../components/CardProps/description'
import Icons from '../components/CardProps/icons'
import Temperature from '../components/CardProps/temperature'
import Time from './CardProps/time';


export default function ProductSimple(props) {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'300px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
            >
                <Stack pt={10} align={'center'}>
                    <Day day={props.day} />
                </Stack>
                <Stack pt={5} align={'center'}>
                    <Date date={props.date} />
                </Stack>
                <Stack pt={2} align={'center'}>
                    <Time time={props.time} />
                </Stack>
                <Stack pt={5} align={'center'}>
                    <Icons icons={props.icons} />
                </Stack>
                <Stack pt={5} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        <Description description={props.description} />
                    </Text>
                    <Stack direction={'row'} align={'center'}>
                        <Temperature min={props.min} max={props.max} />
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}