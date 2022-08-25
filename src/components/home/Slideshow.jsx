import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slidestyle from './slide.module.css'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import styles from './home.module.css'

const slideImages = [

  {desc:"We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.",
  writer:"Noah Gedrich, Zehner",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=560&height=374&name=home-photo-zehner.jpg"},
  {desc:"We needed something that worked, something super simple, because we don’t want to have to teach people how to use it as part of onboarding.",
  writer:"Nick Frandsen, Dovetail",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=560&height=374&name=home-photo-dovetail.jpg"},
  {desc:"Having an easy, clean way to track time allows us to focus on the tough engineering problems where we bring value to our clients.",
  writer:"Genevieve Laing, Cooper Perkins",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-cooper.jpg?width=560&height=374&name=home-photo-cooper.jpg"},
  {desc:"Harvest was key to helping me start my company – it allowed us to move from managing a lot of subcontractors to managing a staff quite easily.",writer:"Sara Holoubek, Luminary Labs",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-luminary.jpg?width=560&height=374&name=home-photo-luminary.jpg"}
  
];

const properties={ 
indicators: true,
};

// const slidestyle={

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     height: "350px"
// }

const Slideshow = () => {
    return (
      <Box marginTop="3rem">
        <Slide easing="ease"  {...properties}>
            {slideImages.map((el)=>
            (
              <Box width="100%">
                 <Flex  marginTop="3rem"  width="100%"  gap="1rem" margin="auto">
           <Box   borderRight="1px solid #fa5d00"  borderLeft="1px solid #fa5d00" padding="2rem">
         <Text marginTop="2rem"className={slidestyle.customer_box_desc}>{el.desc}</Text>
         <Text marginTop="2rem"className={slidestyle.customer_box_writer} >{el.writer}</Text>
       </Box>
        <Image width="50%" paddingRight="1.5rem" paddingLeft="0.5rem" borderRight="1px solid #fa5d00" src={el.img}/>
       </Flex>
          </Box>  
            ))}
           
        </Slide>
      </Box>
    )
};

export default Slideshow;
