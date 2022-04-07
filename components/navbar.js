import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,
    Container,
    Heading

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5'


export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box as="nav" position="fixed" w="100%" bg={useColorModeValue('gray.100', 'gray.900')} px={4} zIndex={1}>
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
            {/* <Box
                position="absolute"
                as="nav"
                w="100%"
                bg={useColorModeValue('#ffffff40', '#20202380')}
                css={{ backdropFilter: 'blur(10px)' }}
                zIndex={1}
            >
                <Container
                    display="flex"
                    p={2}
                    maxW="container.md"
                    wrap="wrap"
                    align="left"
                    justify="space-between"
                >
                    <Link href="https://github.com/heyoitsJuice/forecast">
                            <IconButton fontSize='40px' icon={<IoLogoGithub />} />
                        </Link>

                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        alignItems="center"
                        flexGrow={1}
                        mt={{ base: 4, md: 0 }}
                    >

                    </Stack>

                    <Box flex={1} align="right">


                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            testtestsets
                        </Box>
                    </Box>
                </Container>
            </Box> */}
        </>
    );
}