import React, { useState } from "react";
import ProductSimple from "./card";
import Search from "./search";
import axios from "axios";
import { Box, SimpleGrid, Container } from "@chakra-ui/react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const Weather = () => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getWeather = async (e) => {
        e.preventDefault()
        //   console.log(city, 'some')
        const city = e.target.elements.city.value
        setCity(city);
        //   console.log(city, 'checks')
        try {
            setIsLoading(true);
            setError(false);
            // setCity(city)
            // console.log(city, 'yyup')
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`;
            console.log(url, 'url')
            const response = await axios.get(url);
            if (response.data !== 200) {
                setIsLoading(false);
            }

            setData(response.data.list);
            console.log(response.data);
            setIsLoading(false);

        } catch (error) {
            console.error(error);
            setData(null);
            setIsLoading(false);
            setError(true);
        }
    };

    var moment = require("moment")
    return (
        <div id="this">
            <Container maxW={'3xl'}>
                <Search loadWeather={getWeather} />
            </Container>
            <Container maxW={'7xl'}>

                <Box  mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 8 }}>

                        {data !== null &&
                            data
                                .filter((_, i) => i % 8 == 0)
                                // .slice(0, 5)
                                .map((weather) => {
                                    return (
                                        <ProductSimple
                                            day={moment.unix(weather.dt).format("dddd")}
                                            date={moment(weather.dt_txt).format("l")}
                                            time={moment(weather.dt_txt).format("h:mm:ss a")}
                                            icons={weather.weather[0].main}
                                            description={weather.weather[0].main}
                                            min={weather.main.temp_min}
                                            max={weather.main.temp_max}
                                            key={weather.dt_txt}
                                        />
                                    );
                                })}
                    </SimpleGrid>
                </Box>
            </Container>
        </div>

    )
}

export default Weather