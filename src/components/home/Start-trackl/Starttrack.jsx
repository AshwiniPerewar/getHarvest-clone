import React from 'react'
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react'
import styles from './starttrack.module.css'

export const Starttrack = () => {

  return (
    <Box bgColor="white" width="102%"  margin="auto" marginLeft="-1%" marginBottom="6rem">
    <Flex  gap="6rem" >
    <Box width="45%" marginTop="4rem"  marginLeft="5%">
     <Text fontSize="39px" className={styles.starttrack_heading} lineHeight="48px">Start tracking time today</Text>
     <Text fontSize="26px"  className={styles.starttrack_heading}  marginTop="1rem">Join 70,000+ companies spending their time wisely with Harvest.</Text>
     <Flex marginTop="2rem" gap="1rem">
      <Button _hover={{cursor:"pointer",bgColor:"#ea753f"}} bgColor="#fa5d00" color="white" borderRadius="15px" width="11rem" fontSize="19px" height="3rem">Try Harvest free</Button>
         <Text fontSize='19px' marginTop="1rem" fontFamily="MuotoTrial reg" fontWeight="400" color="#6d6e6d" lineHeight="20px">Free 30-day trial. No credit card required.</Text>
         </Flex></Box>
       <Image marginLeft="-1%" marginTop="5rem" width="30%" height="100%" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"/>
  </Flex>
  </Box>
  )
}
