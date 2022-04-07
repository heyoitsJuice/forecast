import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5'


export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box position="fixed" w="100%" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Link href="https://github.com/heyoitsJuice/forecast">
                            <IconButton fontSize='40px' icon={<IoLogoGithub />} />
                        </Link>

                    </Box>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}