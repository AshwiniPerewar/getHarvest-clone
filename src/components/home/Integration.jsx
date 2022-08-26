import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import styles from './home.module.css'

export const Integration = () => {

  return (
    <Box className={styles.intigrationimg}>
        <Box className={styles.border}></Box>

    <Flex width="88%" margin="auto" marginTop="6rem" gap="4rem">
    <Image width="42rem" height="22rem" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg"/>
    <Box>
    <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">INTEGRATIONS</Text>
     <Text fontSize="39px" className={styles.feature_heading} lineHeight="48px">Integrated with the tools your team already knows and loves</Text>
     <Text fontSize="24px"  className={styles.feature_heading}  marginTop="1rem">Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.</Text>
     <Button bgColor="#1d1e1c" _hover={{cursor:"pointer",bgColor:"#0e0d0dd9"}} color="white"  borderRadius="15px" fontSize="20px"  width="14rem" marginTop="2rem">Browse Integrations</Button>
    </Box>
  </Flex>
  </Box>
  )
}
