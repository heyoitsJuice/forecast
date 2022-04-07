import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function Day(props) {
    return (
        <div>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                {props.day}
            </Heading>
        </div>
    )
}