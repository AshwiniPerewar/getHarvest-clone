import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

export const Newproject = () => {
  return (
   <Box>
    <Text>New Project</Text>
    <hr />
    <Box display={"flex"}>
        <Box>
            <Text>Client</Text>
            <Text>Project name</Text>
            <Text>Project code</Text>
            <Text>Dates</Text>
            <Text>Notes</Text>
        </Box>
        <Box>
            <Input size={"sm"}/>
            <Input size={"sm"}/>
            <Input size={"sm"}/>
        </Box>
    </Box>
   </Box>
  )
}
