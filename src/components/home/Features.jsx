import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import styles from './home.module.css'

export const Features = () => {

  const featureObj=[
    {img:"https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/time-tracking.png",
    heading:"Time tracking",desc:"Simple and intuitive time tracking your team will love."},
    {img:"https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/reports-and-analysis.png",
    heading:"Reports & analysis",desc:"Unlock the insights that help your business thrive."},
    {img:"https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/invoicing-and-payments.png",
    heading:"Invoicing & payments",desc:"Seamless invoicing and fast online payments."}
  ]

  return (
    <Box>
        <Box className={styles.border}></Box>
      <Box width="90%" margin="auto" textAlign="start" marginTop="4rem">
        <Box>
       <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">FEATURES</Text>
       <Text fontSize="39px" className={styles.feature_heading} >Everything you need to keep your team ticking</Text>
       <Text fontSize="26px"  className={styles.feature_heading}  marginTop="1rem">Time tracking software that helps you keep time and get insights.</Text>
       <Flex  marginTop="3rem"  width="100%">
       <Flex direction="column" width="60rem"  gap="1.5rem"   textAlign="start" color="#1d1e1c" fontFamily="MuotoTrial">
        {featureObj.map((el)=>(
          <Flex className={styles.feature_box}>
          <Image  className={styles.feature_box_img} src={el.img}/>
        <Flex direction="column">
        <Text className={styles.feature_box_heading}>{el.heading}</Text>
        <Text className={styles.feature_box_desc}>{el.desc}</Text>
        </Flex>
        </Flex>
        ))}
        <Button bgColor="#1d1e1c" _hover={{cursor:"pointer",bgColor:"#0e0d0dd9"}} color="white"  borderRadius="15px" fontSize="20px"  width="14rem" marginTop="2rem">Discover all features</Button>
       </Flex>
       <Image  height="27rem" marginLeft="-10%" width="40rem" src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png"  border="1px solid black"/>
       </Flex>
       </Box>
        </Box>
    </Box>
  )
}
