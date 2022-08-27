import { Flex, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const InputBox = ({title}) => {
  return (
    <div>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
            <VStack width="48%">
              <Text width="100%" fontSize="17px" fontWeight="600">
                {title}
              </Text>
              <Flex alignItems="center" width="100%" gap="5px">
                <Text fontSize="18px" fontWeight="600">
                  $
                </Text>
                <Input
                  placeholder="0.00"
                  backgroundColor="#fff"
                  borderColor="gray.400"
                  borderRadius="4px"
                  width="100%"
                  color="#1d1e1c"
                  padding="0 8px"
                  fontWeight="500"
                  _hover={{ borderColor: "gray.600" }}
                />
              </Flex>
            </VStack>
            <VStack width="48%">
              <Text width="100%" fontSize="17px" fontWeight="600">
              Billable rate
              </Text>
              <Flex alignItems="center" width="100%" gap="5px">
                <Text fontSize="18px" fontWeight="600">
                  $
                </Text>
                <Input
                  placeholder="0.00"
                  backgroundColor="#fff"
                  borderColor="gray.400"
                  borderRadius="4px"
                  width="65%"
                  color="#1d1e1c"
                  padding="0 8px"
                  fontWeight="500"
                  _hover={{ borderColor: "gray.600" }}
                />
              <Text fontSize="16px" fontWeight="500">
                  per hour
                </Text>
              </Flex>
            </VStack>
          </Flex>
    </div>
  )
}

export default InputBox