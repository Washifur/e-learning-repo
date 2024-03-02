import React from 'react'
import { Stack, HStack, VStack , Text, Heading, Button, Image, Box } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import "./Home.css";
import bg from "../../assets/images/bg.png";
import {CgGoogle, CgYoutube} from "react-icons/cg";
import {VscGithubInverted} from "react-icons/vsc";
import {SiCoursera, SiUdemy} from "react-icons/si";
import {FaAws} from "react-icons/fa";


const Home = () => {
  return (
    <>
    <Box className="container">

      <Stack direction={["column", "row"]} spacing={["16"]} justifyContent={["center", "space-around"]} alignItems={['center', 'center']}>
        <VStack alignItems={["center", "flex-end"]} padding={["20px", "20px"]} justifyContent={["center", "center"]}  >
          <Heading className="text">LEARN STRAIGHT FROM INDUSTRY GIANTS</Heading>
          <Text className="text">Empowering Minds, Enriching Futures: Learn Anywhere, Achieve Everywhere.</Text>
          <Link to="/courses" >
            <Button colorScheme='teal' variant='solid' className='btn'>
              Explore Courses
            </Button>
          </Link>
        </VStack>

        <Box alignItems="center">

        <Image
          boxSize='sm'
          objectFit='contain'
          src={bg}
          alt='Learn Anywhere'
          alignItems={['center', 'flex-start']}
          className="bgImage"
        
        />

        </Box>
        
      </Stack>
    </Box>

    <Box className="container2" bg="blackAlpha.800" >

      <Heading className='heading' color={"#319795"}>
        Our Partners
      </Heading>
      <HStack width={"100%"}  height={["100px", "200px"]} justifyContent={"space-around"}>
        
        <CgGoogle className='icon'/>
        <CgYoutube className='icon'/>
        <VscGithubInverted className='icon'/>
        <SiCoursera className='icon'/>
        <SiUdemy className='icon'/>
        <FaAws className='icon'/>
      </HStack>
    </Box>
    </>
  )
}

export default Home