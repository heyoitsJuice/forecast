import Head from 'next/head';
import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    SimpleGrid
} from '@chakra-ui/react';
import Nav from './navbar';
import Weather from './weather';

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Nav />
            <Container maxWidth={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 12 }}
                    py={{ base: 20, md: 20 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Weather Forecast <br />
                        <Text as={'span'} color={'green.400'}>
                            for 5 Day / 3 Hour
                        </Text>
                    </Heading>
                    <Stack
                        as={Box}
                        textAlign={'left'}
                        spacing={{ base: 8, md: 12 }}
                    // py={{ base: 20, md: 20}}
                    >
                        <Heading
                            maxW={'3xl'}
                            fontWeight={600}
                            fontSize={{ base: 'large', sm: '2xl', md: '4xl' }}
                            textAlign={'left'}
                        >
                            How does this work?
                        </Heading>
                        <Text color={'gray.500'}>
                            {/* How does this work? <br /> */}
                            This web application utilizes OpenWeatherMap's API for the 5 Day / 3 Hour Forecast. <br />
                            An API call retrieves an array of 40 data points, with each point being 3 hours apart. <br />
                            From the 40 data points, starting from 0, every 8th index is filtered out signifiying a 24 hour gap. <br />
                            The temperatures shown is NOT an average temperature, but the temperature at that time period. <br />
                            As a result, the max and min temps can be shown to be the same at times.
                        </Text>
                    </Stack>
                </Stack>

            </Container>
            <Container maxW={'7xl'}>
                <SimpleGrid id="that">
                    <Weather />
                </SimpleGrid>
            </Container>
        </>
    );
}
;