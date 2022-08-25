import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import styles from './home.module.css'

export const Getting = () => {

  return (
    <Box>
        <Box className={styles.border} width="102%" marginLeft="-1%"></Box>
     
        <Box marginTop="2rem" marginLeft="3rem">
        <Text fontSize="42px"  color="#1d1e1c"  fontWeight="300" lineHeight="50px" fontFamily="MuotoWeb, sans-serif">Getting Started</Text>
      <Text fontSize="26px"  fontWeight="300"  color="#1d1e1c" fontFamily="MuotoWeb-300" marginTop="1rem">Time tracking so easy, your team will actually use it.</Text>
      </Box>
    <Flex className={styles.started}>
      <Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Create_a_projects1.png"/>
      <Text className={styles.started_heading}>Create a project</Text>
      <Text className={styles.started_desc}>Create entries for your projects and tasks, or import them via one of our integrations.</Text>
      </Box>
      <Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Track_time.png"/>
        <Text className={styles.started_heading}>Track time</Text>
      <Text  className={styles.started_desc}>Click start to begin tracking time. Stop and start timers as you switch tasks.</Text>
      </Box>
      <Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Img_step3.png"/>
        <Text className={styles.started_heading}>Generate reports & invoices</Text>
      <Text  className={styles.started_desc}>Easily convert time entries into internal reporting or client invoices.</Text>
      </Box>
    </Flex>

    <Button bgColor="#fa5d00" _hover={{cursor:"pointer",bgColor:"#ea753f"}} color="white" marginTop="2rem" marginLeft="40%" borderRadius="15px"   width="11rem" padding="1.5rem" fontSize="18px">Get Started {">"}</Button>
   
    </Box>
  )
}
