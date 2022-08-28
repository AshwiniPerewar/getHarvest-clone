import { Select,Box,Flex,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "./employeelist.module.css"
import axios from "axios";
const EmployeeList = () => {
  const[data,setData]=useState([]);

  useEffect(()=>
  {
    axios.get('http://localhost:8080/userData')
    .then((r)=>setData(r.data));
  },[])
  return (
    <Box>
        <Flex gap="14rem" marginTop="0.5rem">
       <Text className={styles.info}>
        {data.Name}
       </Text>
       <Flex>
       <Text  className={styles.info}>
           {data.hours}.00
        </Text>
        <Box border="1px solid black" height="1rem" width="10rem"></Box>
       </Flex>
        <Text  className={styles.info}>
           {data.team}
        </Text>
        <Flex gap="1rem">
        <Text  className={styles.info}>
           {data.hours}
        </Text>
        <Select placeholder="Actions" width="100px" height="1.8rem" fontSize="13px" border="1px solid black" marginTop="-0.3rem" borderRadius="10px" _hover={{border:"1px solid black"}}>
    <option className={styles.option}>Edit</option>
    <option className={styles.option}>Pin</option>
    </Select>
        </Flex>
        
        </Flex>
    </Box>
  )
}

export default EmployeeList