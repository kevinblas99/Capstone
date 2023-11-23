import React from 'react'
import { Text , Box, AbsoluteCenter, Container} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';


function ConfirmationPage() {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <Container maxW={['sm','md','lg','2xl']}>
    <Box margin={20} backgroundColor="#EDEFEE" borderRadius={15} p={15} align="center">
    <div className="confirma">
        <Text fontSize="2xl" textColor="#495E57" fontWeight="bold" align="center">Thank you for booking with us {data?.first}.</Text>
        <CheckCircleIcon margin={10} color="green" boxSize={20} alignSelf="center" />
    <div>

        <Text  fontSize="lg" fontWeight="400" align="center">We sent you an email confirmation to <strong>{data?.email}</strong> with all the information needed for your reservation.</Text>
        <Text  fontSize="lg" fontWeight="400" align="center">Contact us, if there would be any changes on your booking.</Text>

    </div>


    </div>
    </Box>
    </Container>
  )
}

export default  ConfirmationPage;
