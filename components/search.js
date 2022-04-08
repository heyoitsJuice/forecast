import { Button, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import React from "react"

const Search = ({ loadWeather }) => {

    return (
        <form onSubmit={loadWeather}>
            <Stack direction={'row'}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement >
                    <Input type="text" name="city" label="city" placeholder='Enter city here' />
                </InputGroup>
                <Button type='submit' colorScheme='teal' variant='solid'>
                    Search
                </Button>
            </Stack>
        </form>
    )
}

export default Search