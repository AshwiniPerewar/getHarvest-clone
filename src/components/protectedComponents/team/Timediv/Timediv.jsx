import { Box, Flex ,Text} from '@chakra-ui/react'
import React from 'react'
import styles from "./timediv.module.css"
const Timediv = () => {
  return (
    <Box marginTop="1rem">
        <Flex justifyContent="space-between">
            <Box>
                <Text className={styles.heading}>Total hours</Text>
                <Text className={styles.info}>0.00</Text>
            </Box>
            <Box>
                <Text className={styles.heading}>Team capacity</Text>
                <Text className={styles.info}>35.00</Text>
            </Box>
            <Flex direction="column" marginTop="6px" gap="3px">
              <Flex gap="8px">
                <Box className={styles.box} bgColor="#376bdd "></Box>
                <Text  className={styles.heading}>Billable</Text>
              </Flex>
              <Flex gap="8px">
              <Box className={styles.box} bgColor="#86b1f1 "></Box>
              <Text  className={styles.heading}>Non-billable</Text>
              </Flex>
            </Flex>
            <Box>
                <Text  className={styles.info2}>0.00</Text>
                <Text className={styles.info2}>0.00</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Timediv