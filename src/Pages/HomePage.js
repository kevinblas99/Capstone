import Specials from "../Components/Specials";
import HomeCom from "../Components/HomeCom";
import CustomerSay from '../Components/CustomerSay';
import Chicago from '../Components/Chicago';
import { ChakraProvider } from "@chakra-ui/react";
function HomePage() {
    return (
        <>
    <HomeCom />
    <Specials />
    <CustomerSay />
    <Chicago />
        </>
    )
}

export default HomePage;