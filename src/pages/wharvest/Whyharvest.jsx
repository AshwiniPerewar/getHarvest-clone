import { Box } from '@chakra-ui/react'
import React from 'react'
import { Starttrack } from '../../components/home/Starttrack'
// import { Start } from '../../components/integrations/start/Start'
import {Empower} from '../../components/whyharvest/Empower'
import {Helpteam} from '../../components/whyharvest/Helpteam'
import { Logos } from '../../components/whyharvest/Logos'


export const Whyharvest = () => {
  return (
    <div>
        <Helpteam />
        <Empower />
        <Logos />
        
        <Starttrack />
    </div>
  )
}