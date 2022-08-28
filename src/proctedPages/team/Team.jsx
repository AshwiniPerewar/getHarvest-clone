import { Box, Container } from '@chakra-ui/react';
import React from 'react'
import Arrowdiv from '../../components/protectedComponents/team/Arrowdiv/Arrowdiv';
import Employee from '../../components/protectedComponents/team/employee/Employee';
import EmployeeList from '../../components/protectedComponents/team/Employeelist/EmployeeList';
import Timediv from '../../components/protectedComponents/team/Timediv/Timediv';
import { ProtectedNavbar } from '../../components/protectedNavbar/ProtectedNavbar';

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