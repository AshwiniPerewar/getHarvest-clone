import { Box, Container } from '@chakra-ui/react';
import React from 'react'
import { ProtectedNavbar } from '../../components/protectedNavbar/ProtectedNavbar';
import Arrowdiv from './Arrowdiv/Arrowdiv';
import Employee from './employee/Employee';
import EmployeeList from './Employeelist/EmployeeList';
import Invite from './Invite/Invite';
import Timediv from './Timediv/Timediv';
const Team = () => {
  return (
    <Box width="100%">
      <ProtectedNavbar/>
         <Invite/>
   <Container maxW="90%" marrgin="auto" bgColor="white">
    <Arrowdiv/>
    <Timediv/>
    <Employee/>
    <EmployeeList/>
   </Container>
   </Box>
  )
}

export default Team