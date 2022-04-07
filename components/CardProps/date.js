import React from 'react'
import { Text } from '@chakra-ui/react'

export default function Date(props) {
    return (
        <div>
            <Text fontSize={'large'}  color={'gray-500'}>
                {props.date}
            </Text>
        </div>
    )
}