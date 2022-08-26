import React from 'react'
import { Box, Image, Text,  Flex } from '@chakra-ui/react'
const Company = ({ opacity }) => {
  const CompanyLogo=["https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize",
  "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize",
  "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize",
  "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize",
  "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize",
  "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize",
  "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize",
  "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"
]
  return (
    <Box width="85%" margin="auto" marginTop="3rem">
      <Flex margin="auto" width="100%" gap="5px">
        <Text fontSize="lg" color="#fa5d00">
          {"70,000+ "}
        </Text>
        <Text color="#777571 ">{" companies track time with Harvest"}</Text>
        <Box
          borderTop="1px solid #fa5d00"
          width="72%"
          marginTop="0.9rem"
          marginLeft="6px"
        ></Box>
      </Flex>
      <Flex gap="3.5rem" marginTop="2rem" justifyContent="space-between">
       {CompanyLogo.map((el)=>
       (
        <Image
          opacity={opacity}
          src={el}
        />
       ))}  
      </Flex>
    </Box>
  );
};

export default Company;
