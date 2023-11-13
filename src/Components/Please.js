import {Flex, Button, IconButton, Image, Container, Spacer, ButtonGroup, Center, Box, HStack, Stack, Grid} from '@chakra-ui/react';
import {useState} from 'react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import logo from "../images/logo.svg";
import {useNavigate} from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { handleClick } from '../Hooks/handleClick';

//function Please() {
  //  const [display, changeDisplay] = useState('none');
    //const navigate = useNavigate;

    const Please = () => {
        const [display, changeDisplay] = useState('none');
        const navigate = useNavigate();
        const [previousPos, setPreviousPos] = useState(0);
        //Use Reference Hook for the header to change its style property
        const headRef = useRef(document.getElementById('header-box'))
      
        //Use Effect hook that is attached to the scroll event
        //When the user scrolls down it will hide the header and when he/she scrolls down it will show the header.
        useEffect(()=>{
      
          const scrollEvent = ()=>{
            const currentPos = window.scrollY;
            if (previousPos < currentPos ){
              headRef.current.style.transform = `translateY(-200px)`;
            }else{
              headRef.current.style.transform = `translateY(0px)`;
            }
            setPreviousPos(currentPos);
      
          }
      
          window.addEventListener("scroll", scrollEvent);
      
          return (()=>{
            window.removeEventListener("scroll",scrollEvent);
          })
      
        },[previousPos]);
    return(
        <Flex
        position="sticky"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="white"
        ref={headRef}
        style={{zIndex:"2"}}
        fontWeight = "bold"
        id="header-box"
        >

<Flex
  w="100%" 
   maxWidth="1280px" align="center" margin="0 auto"
>
        <Flex
              w="100%"
              px={15}
                my={3}
                justifyContent="space-between"
                alignItems="center"
        display={['none','none','flex','flex']}
       >
<nav>
<Flex 

mr={250}>
<Link 
        onClick={handleClick("home")}
        variant="ghost"
        align="center"
                >
                <Image
                src={logo}
                class="logo1"
                align="center"
                 />
                 </Link>
                 </Flex>
</nav>
<nav>
<HStack spacing={3} fontSize="md"
>
<Link to="/" className="nav-item">
Home
        </Link>
<Link to="/about" className="nav-item">   
    About
</Link>
<Link to="/menu" className="nav-item">
    Menu
</Link>
<Link to="/reservations" className="nav-item">
    Reservations
</Link>
<Link to="/login" className="nav-item">   
    Log In
</Link>
</HStack>
</nav>
 </Flex>

 <IconButton

 variant="ghost"
 aria-label="Open Menu"
 size="lg"
 ml={2}
 icon={<HamburgerIcon/>}
 display={['flex','flex','none','none']}
 onClick={() => changeDisplay('flex')}
 />
<Flex     
    position="relative"
    left= "40%"
    top="50%"
    transform="translate(-50%, -50%)" >
<Button
        display={['flex','flex','none','none']}
        onClick={() => {navigate("/")}}
        variant="ghost"
        _hover="none"
        my={3}
                >
                <Image
                align="center"
                display={['flex','flex','none','none']}
                onClick={() => {navigate("/")}}
                src={logo}
                 class="logo1"
                 my={3}
                 />
                 </Button>
                 </Flex>
                 </Flex>
            <Flex
            w="100vw"
            bgColor="gray.50"
            zIndex={20}
            h="100vh"
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
            display={display}
            >
                <Flex justify="flex-end">
                    <IconButton
                    mt={2}
                    mr={2}
                    aria-label='Close menu'
                    size="lg"
                    icon={
                        <CloseIcon />
                    }       
                    onClick={() => changeDisplay('none')}
                    />
                </Flex>
            <Flex
            flexDir="column"
            align="center"
            >
                <Button
                        
                        onClick={() => {navigate("/")}}
                        variant="ghost"
                        my={3}
                >
                <Image
onClick={() => changeDisplay('none')}
                src={logo}
                 class="logo1"
                 />
                 </Button>
            <Link to="/" className="nav-item">
    <Button 
    as="a" 
    variant="ghost" 
    my={5} 
    w="100%"
    onClick={() => changeDisplay('none')}
>
    Home
        </Button>
        </Link>
<Link to="/about" className="nav-item">   
 <Button 
 as="a"
  variant="ghost" 
  my={5} 
  w="100%"
  onClick={() => changeDisplay('none')}
>About
</Button>
</Link>
<Link to="/menu" className="nav-item">
<Button 
as="a" 
variant="ghost" 
my={5} 
w="100%"
onClick={() => changeDisplay('none')}
>Menu
</Button>
</Link>
<Link to="/reservations" className="nav-item">
    <Button 
    as="a" 
    variant="ghost" 
     my={5} 
     w="100%"
     onClick={() => changeDisplay('none')}
>Reservations</Button>

</Link>
<Link to="/login" className="nav-item">   
 <Button 
 as="a" 
 variant="ghost"
  my={5} 
  w="100%"
  onClick={() => changeDisplay('none')}
>Log In
</Button>
</Link>
            </Flex>
            </Flex>

     </Flex>
    )
}

export default Please;