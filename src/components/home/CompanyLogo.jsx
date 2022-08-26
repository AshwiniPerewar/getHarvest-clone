import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Container,
  Flex,
  Grid,
} from "@chakra-ui/react";

const Company = ({ opacity }) => {
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
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"
        />
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"
        />
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"
        />
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"
        />
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"
        />
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"
        />
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"
        />
        <Image
          opacity={opacity}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"
        />
      </Flex>
    </Box>
  );
};

export default Company;
