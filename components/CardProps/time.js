import React from 'react'
import { Text } from '@chakra-ui/react'

export default function Time(props) {
    return (
        <div>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {props.time}
            </Text>
        </div>
    )
}