import React from 'react'
import { Text , Box, AbsoluteCenter} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';
function ConfirmationPage() {
  return (
    <Box margin={20} backgroundColor="#EDEFEE" borderRadius={15} p={15} align="center" >
    <div className="confirma">
        <Text fontSize="2xl" textColor="#495E57" fontWeight="bold" align="center">Congratulations, We will be expecting you.</Text>
        <CheckCircleIcon margin={10} color="green" boxSize={20} alignSelf="center" />
    <div>

        <Text  fontSize="lg" fontWeight="400" align="center">We sent you an email confirmation with all the information needed for your reservation.</Text>
        <Text  fontSize="lg" fontWeight="400" align="center">Contact us, if there would be any changes on your booking.</Text>

    </div>


    </div>
    </Box>
  )
}

export default  ConfirmationPage;
