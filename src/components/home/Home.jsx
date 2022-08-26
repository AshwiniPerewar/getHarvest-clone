import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import CompanyLogo from './CompanyLogo'
import styles from './home.module.css'
import { Introdiv } from './Introdiv'
import { Getting } from './Getting'
import { Features } from './Features'
import { Integration } from './Integration'
import { Customer } from './Customer'
import Learning from './Learning'
import Slideshow from './Slideshow'
import { Starttrack } from './Starttrack'
const Home = () => {
  return (

    <Container bgColor="#fff8f1" maxW="100%">
      <Introdiv/>
      <CompanyLogo opacity={0.2}/>
      <Getting/>
     <Features/>
  <Integration/>
     <Customer/>
     
      <Learning/>
      <Starttrack/>
    </Container>
  )
}

export default Home