
import { Heading, Flex, Spacer, Image, Text, HStack, VStack, Box, CardBody} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, price }) => {
return (
  <Box
    w="full"
   backgroundColor="#EDEFEE"
   borderRadius='lg' border='1px'
    borderColor='black' padding={2} >
  <VStack spacing={2} align="-moz-initial">
  <Image
      h="300px"
      w="full"
      borderRadius="12px"
      mb="10px"
      objectFit="cover"
      src={imageSrc}
      borderRadius="lg"
      />
  <Flex>
  <Heading size="md" color='black'><b>{title}</b></Heading>
  <Spacer />
  <Heading size="sm" color='red'><b>{price}</b></Heading>
  </Flex>
  <Text color="black"><i>{description}</i></Text>
<HStack spacing={2} >
  <Text color="black"><b>Delivery</b></Text>
<FontAwesomeIcon color="black" icon={faArrowRight} size="1x"></FontAwesomeIcon>
</HStack>
</VStack>
</Box>

);
};

export default Card;
