
import { Heading, Image, Text, HStack, VStack, Box, CardBody} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, price }) => {
return (
  <Box backgroundColor="#EDEFEE" borderRadius='lg' border='1px' borderColor='black' padding={3}>
  <VStack spacing={5} align="-moz-initial">
  <Image 
      boxSize='md'
      objectFit='cover'
      src={imageSrc} borderRadius='lg' />
  <Heading size="md" color='black'><b>{title}</b></Heading>
  <Heading size="sm" color='red'><b>{price}</b></Heading>
  <Text color="black"><i>{description}</i></Text>
<HStack spacing={5} >
  <Text color="black"><b>Delivery</b></Text>
<FontAwesomeIcon color="black" icon={faArrowRight} size="1x"></FontAwesomeIcon>
</HStack>

</VStack>
</Box>

);
};

export default Card;
