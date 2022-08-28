import { Select,Box,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./employeelist.module.css"
const EmployeeList = () => {
  return (
    <Box>
        <Flex gap="14rem" marginTop="0.5rem">
       <Text className={styles.info}>
        Name
       </Text>
       <Flex>
       <Text  className={styles.info}>
           0.00
        </Text>
        <Box border="1px solid black" height="1rem" width="10rem"></Box>
       </Flex>
        <Text  className={styles.info}>
           35
        </Text>
        <Flex gap="1rem">
        <Text  className={styles.info}>
           000
        </Text>
        <Select placeholder="Actions" width="90px" height="1.8rem" fontSize="13px" border="1px solid black" marginTop="-0.3rem" borderRadius="10px" _hover={{border:"1px solid black"}}>
    <option className={styles.option}>Everyone</option>
    </Select>
        </Flex>
        
        </Flex>
    </Box>
  )
}

export default EmployeeList