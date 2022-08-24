import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid } from '@chakra-ui/react'
import CompanyLogo from './CompanyLogo'

const Home = () => {
  return (

    <Container bgColor="#fff8f1" maxW="100%">
      {/* Finally div */}
      
      <Box width="70%" margin="auto">
      <Flex width="30%" margin="auto">
      <Image src="https://res.cloudinary.com/spiralyze/image/upload/v1657791092/Harvest/1029-Harvest-Home-Center-Align/Rate_stars_1.svg" margin="auto"/>
      <Text>4.6</Text>
      <Text color="#9f9f9f" fontSize="16px" fontFamily="MuotoTrial reg-400">(491 reviews)</Text>
      </Flex>
      <Text fontSize='48px' marginTop="1rem" fontFamily="Monarch-400" fontWeight="100" color="#1d1e1c" lineHeight="56px">Finally, time tracking that your team actually wants to use.</Text>
        <Text fontSize='18px' lineHeight="26px" color="#6d6e6d" weight="400" marginTop="1.5rem">Intuitive time tracking. Instant report generation. Automatic invoice creation.</Text>
        <Button bgColor="#fa5d00" color="white" borderRadius="15px" marginTop="2rem">Try Harvest Free</Button>
        <Text fontSize='15px' marginTop="1rem" fontFamily="MuotoTrial reg" fontWeight="400" color="#6d6e6d" lineHeight="20px">Free 30-day trial. No credit card required.</Text>
        </Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/Hero_Image_2x.jpg" width="90%" margin="auto" marginTop="1rem"/>
      
      {/* company logo */}

      <CompanyLogo/>

      <Box borderTop="1px solid #fa5d00" width="102.7%" marginLeft="-1rem" marginTop="2rem"></Box>
{/* Getting Started */}

      <Box marginTop="2rem">
        <Text fontSize="42px" color="#1d1e1c" fontWeight="300" lineHeight="50px" fontFamily="MuotoWeb, sans-serif">Getting Started</Text>
      <Text fontSize="26px"  fontWeight="300"  color="#1d1e1c" fontFamily="MuotoWeb-300" marginTop="1rem">Time tracking so easy, your team will actually use it.</Text>
      </Box>
    <Flex width="90%" gap="3rem" margin="auto" marginTop="2rem" textAlign="start" color="#1d1e1c" fontFamily="MuotoTrial">
      <Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Create_a_projects1.png"/>
      <Text fontSize="24px"  marginTop="1rem">Create a project</Text>
      <Text fontSize="16px" fontWeight="400"  marginTop="0.5rem" color="#6d6e6d">Create entries for your projects and tasks, or import them via one of our integrations.</Text>
      </Box>
      <Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Track_time.png"/>
        <Text fontSize="24px"  marginTop="1rem">Track time</Text>
      <Text fontSize="16px" marginTop="0.5rem" color="#6d6e6d">Click start to begin tracking time. Stop and start timers as you switch tasks.</Text>
      </Box>
      <Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Img_step3.png"/>
        <Text fontSize="24px"  marginTop="1rem">Generate reports & invoices</Text>
      <Text fontSize="16px" marginTop="0.5rem" color="#6d6e6d">Easily convert time entries into internal reporting or client invoices.</Text>
      </Box>
    </Flex>

    <Button bgColor="#fa5d00" color="white" marginTop="2rem" borderRadius="15px"   width="11rem" padding="1.5rem" fontSize="18px">Get Started {">"}</Button>
   
   {/* Features div */}

    <Box borderTop="1px solid #fa5d00" width="91%" margin="auto" marginTop="2rem"></Box>
      <Box width="88%" margin="auto" textAlign="start" marginTop="4rem">
       <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">FEATURES</Text>
       <Text fontSize="39px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400" >Everything you need to keep your team ticking</Text>
       <Text fontSize="26px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400"  marginTop="1rem">Time tracking software that helps you keep time and get insights.</Text>
       </Box>

       <Flex width="88%" gap="1.5rem" margin="auto" marginTop="3rem" textAlign="start" color="#1d1e1c" fontFamily="MuotoTrial">
        <Box border="1px solid #fa5d00" width="33%" padding="1rem" borderRadius="1rem">
          <Image marginTop="0.5rem" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/time-tracking.png" width="3rem"/>
        <Text marginTop="0.5rem" fontSize="26px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400">Time tracking</Text>
        <Text marginTop="1rem" fontSize="18px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400">Simple and intuitive time tracking your team will love.</Text>
        </Box>
        <Box border="1px solid #fa5d00" width="33%" padding="1rem" borderRadius="1rem">
          <Image marginTop="0.5rem" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/reports-and-analysis.png" width="3rem"/>
        <Text marginTop="0.5rem" fontSize="26px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400">Reports & analysis</Text>
        <Text marginTop="1rem" fontSize="18px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400">Unlock the insights that help your business thrive.</Text>
        
        </Box>
        <Box border="1px solid #fa5d00" width="33%" padding="1rem"  borderRadius="1rem">
          <Image marginTop="0.5rem" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/invoicing-and-payments.png" width="3rem"/>
        <Text marginTop="0.5rem" fontSize="26px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400">Invoicing & payments</Text>
        <Text marginTop="1rem" fontSize="18px" fontFamily="MuotoWeb - 400" color="#1d1e1c" fontWeight="400">Seamless invoicing and fast online payments.</Text>
        </Box>
       </Flex>
       <Button bgColor="#1d1e1c" color="white" borderRadius="17px" marginLeft="-78%"  width="8rem">Learn more</Button>
        
    </Container>
  )
}

export default Home