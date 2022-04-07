import React from 'react'
import { Text } from '@chakra-ui/react'

export default function Temperature(props) {
    return (
        <div>
            <Text textAlign={'center'} fontWeight={800} fontSize={'3xl'}>
                {props.max}&deg;F
            </Text>
            <Text textAlign={'center'} color={'gray.600'}>
                {props.min}&deg;F
            </Text>
        </div>
    )
}