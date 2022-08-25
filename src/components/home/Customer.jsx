import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import styles from './home.module.css'
import Slideshow from './Slideshow'

export const Customer = () => {

  return (
    <Box>
        <Box className={styles.border}></Box>
      <Box width="90%" margin="auto" textAlign="start" marginTop="4rem">
       <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">CUSTOMER STORIES</Text>
       <Text fontSize="39px" className={styles.feature_heading} >Helping teams thrive since 2006</Text>
       <Text fontSize="26px"  className={styles.feature_heading}  marginTop="1rem">Teams of all sizes, types, and industries trust Harvest to track their time.</Text>
       <Slideshow/>
       <Button _hover={{cursor:"pointer",bgColor:"#1d1e1c"}} bgColor="#1d1e1c" color="white"  borderRadius="15px" fontSize="20px"  width="14rem" marginTop="2rem">Meet our customers</Button>
        
     
       </Box>
    </Box>
  )
}
