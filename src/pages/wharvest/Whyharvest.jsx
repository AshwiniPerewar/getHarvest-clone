import { Box } from '@chakra-ui/react'
import React from 'react'
import {Empower} from '../../components/whyharvest/Empower'
import {Helpteam} from '../../components/whyharvest/Helpteam'
import { Logos } from '../../components/whyharvest/Logos'
import { TimeTracking } from '../../components/whyharvest/TimeTracking'


export const Whyharvest = () => {
  return (
    <div>
        <Helpteam />
        <Empower />
        {/* <Box paddingBottom={20}> */}
        <Logos />
        
        <TimeTracking />
    </div>
  )
}