import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import styles from './home.module.css'
import {ArrowForwardIcon } from '@chakra-ui/icons'

const Learning = () => {
  return (
    <Box>
         <Box className={styles.border}></Box>
    <Flex width="88%" margin="auto" marginTop="6rem" gap="10rem" justifyContent="space-between">
      <Box width="30rem"marginTop="6rem">
      <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">LEARNING RESOURCES</Text>
       <Text fontSize="39px" className={styles.feature_heading} lineHeight="48px">Supporting your team along the way</Text>
       </Box>
      <Box width="40rem">
            <Flex className={styles.learning_box} >
          <Image  className={styles.learning_box_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg" />
          <Flex direction="column">
        <Text className={styles.feature_box_heading}>Guides and templates</Text>
        <Text className={styles.feature_box_desc}>Learn how to introduce your team to time tracking and make the most of Harvest.</Text>
        </Flex>
        <ArrowForwardIcon w={8} h={8} marginTop="2rem" color="#fa5d00"/>
        </Flex>

        <Flex className={styles.learning_box}>
          <Image  className={styles.learning_box_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg" />
          <Flex direction="column">
        <Text className={styles.feature_box_heading}>Webinars</Text>
        <Text className={styles.feature_box_desc}>Watch a quick intro to Harvest or sign up for a live session with one of our Experts.</Text>
        </Flex>
        <ArrowForwardIcon w={8} h={8} marginTop="2rem" color="#fa5d00"/>
        </Flex>

        <Flex className={styles.learning_box} borderBottom="1px solid #fa5d00">
          <Image  className={styles.learning_box_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg" />
          <Flex direction="column">
        <Text className={styles.feature_box_heading}>Help Center</Text>
        <Text className={styles.feature_box_desc}>Find the answers to all your questions or get in touch with one of our friendly Experts.</Text>
        </Flex>
        <ArrowForwardIcon w={8} h={8} marginTop="2rem" color="#fa5d00"/>
        
        </Flex>
            
      </Box>
    </Flex>
    <Box className={styles.border} width="102%" marginLeft="-1%" marginTop="6rem"></Box>
    </Box>
  )
}

export default Learning