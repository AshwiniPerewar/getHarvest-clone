import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./feature.module.css"
import {AiOutlineArrowDown} from "react-icons/ai"

export const Features = () => {
  return (
    <Box>
     <h1 className={styles.heading}>Everything your team needs to keep ticking</h1>
     <h3 className={styles.subheading}>Intuitive time tracking and powerful insights that help your team thrive.</h3>
     <Box className={styles.feature_nav} >
        <Box display={"flex"} border="1px solid red"  alignItems="center" borderRadius={"10px"} height="80px" width={"390px"} justifyContent="space-around"  >
            <img src="	https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg" alt="" />
            <Text fontSize={"x-large"} >Time tracking</Text>
            <AiOutlineArrowDown size={"25px"}/>
        </Box>
        <Box display={"flex"} border="1px solid red"  alignItems="center" borderRadius={"10px"} height="80px" width={"390px"} justifyContent="space-around" >
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg" alt="" />
            <Text fontSize={"x-large"} >Report & analysis</Text>
            <AiOutlineArrowDown size={"25px"}/>
            
            
        </Box>
        <Box display={"flex"} border="1px solid red"  alignItems="center" borderRadius={"10px"} height="80px" width={"390px"} justifyContent="space-around" >
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg" alt="" />
            <Text fontSize={"x-large"} >Invoicing & payments</Text>
            <AiOutlineArrowDown size={"25px"} />
            
        </Box>
     </Box>

     <Box borderY={"1px solid red"} mt="100px"  >
     <Box display={"flex"} alignItems="center" >
        <Box ml="15px">
            <Text align={"left"} color="#fb701e" fontSize="4xl">Time tracking</Text>
            <Box fontWeight={"500"} fontSize="22px" mt={"20px"} paddingRight="30px" >An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.</Box>
            <Button colorScheme={"orange"} size="lg" borderRadius={"10px"} fontFamily="MuotoWeb,sans-serif">Start your free trial</Button>
        </Box>
        <Box>
            <img src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=1181&name=screenshot-features-timesheets.png" alt="" />
        </Box>

     </Box>
     <Box display={"flex"} gap="50" ml="5px">
        <Box>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg" alt="" />
                    <Text fontSize={"26px"} >Track time from browser, desktop, and mobile</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
                Make it as easy as possible for your team to capture their time with dedicated apps across devices.
            </Box>
        </Box>
        <Box>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg" alt="" />
                    <Text fontSize={"26px"}>Track time from browser, desktop, and mobile</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
                Make it as easy as possible for your team to capture their time with dedicated apps across devices.
            </Box>
        </Box>
        <Box>
            <Box>
                <Box display={"flex"} alignItems="center">
                    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg" alt="" />
                    <Text fontSize={"26px"}>Track time from browser, desktop, and mobile</Text>
                </Box>
            </Box>
            <Box fontWeight={"500"} fontSize="20px">
                Make it as easy as possible for your team to capture their time with dedicated apps across devices.
            </Box>
        </Box>
        
     </Box>
     
     </Box>
     <Box mt="100px" display={"flex"} alignItems="center" ml="10px"  >
        <Box >
            <img style={{maxWidth:"375px",borderTopLeftRadius:"20px",borderBottomRightRadius:"20px"}} src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg"  alt="" />
        </Box>
        <Box>
            <Box fontSize={"30px"} fontWeight="400" ml="10px">
               
                Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients.
               
                </Box>
            <Box ml="10px" fontSize={"20px"}>
            <strong>Genevieve Laing</strong>
            <br />
            Director of Engineering, Cooper Perkins
            </Box>
        </Box>
    </Box>
    

   <hr />
     
    </Box>
  )
}
