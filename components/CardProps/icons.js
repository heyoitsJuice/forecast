import React from 'react'
import { Image } from '@chakra-ui/react';


export default function Icons(props) {
  switch (props.icons) {
    case "Clouds":
      return <Image
        boxSize='150px' src="/Cloudy.svg"/>
      break;
    case "Rain":
      return <Image borderRadius='full'
        boxSize='150px' src="/Rainy.svg"  />;
      break;
    case "Clear":
      return <Image borderRadius='full'
        boxSize='150px' src="/Sunny.svg" />;
      break;
    case "Snow":
      return <Image borderRadius='full'
        boxSize='150px' src="./Snowing.svg"  />;
      break;
    case "Thunder":
      return <Image borderRadius='full'
        boxSize='150px' src="./Thunder.svg"  />;
      break;
    default:
      return <Image borderRadius='full'
        boxSize='150px' src="./Universal.svg"  />;
  }
};
