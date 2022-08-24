import { Flex, Heading, Switch, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./pricing.module.css";
import PriceBox from "./smaller_components/PriceBox";
import proPng from "../../assets/pro-option.png"
import CompanyLogo from "../../components/home/CompanyLogo"

let data = [
  {
    heading1: "Free",
    price1: "0",
    price2: "",
    seat: "1 seat",
    projects: "2 projects",
    extra1: "forever",
    extra2: "",
  },
  {
    heading1: "Pro",
    price1: "12",
    price2: "",
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    extra1: "per seat per month",
    extra2: "",
  },
  {
    heading1: "Pro",
    price1: "10",
    price2: ".80",
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    extra1: "per seat per month,",
    extra2: "billed yearly",
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);

  return (
    <div className={styles.container} >
      <Heading fontSize="50px" fontWeight="400" textAlign="center">
        Pricing
      </Heading>
      <br />
      <Flex gap="15px" alignItems="center" justifyContent="center">
        <Text fontSize="18px">Monthly</Text>
        <Switch
          colorScheme="red"
          size="lg"
          onChange={(e) => setPlan(e.target.checked)}
          sx={{
            "span.chakra-switch__track:not([data-checked])": {
              backgroundColor: "#fa5d00",
            },
          }}
        />
        <Text fontSize="18px">Annual</Text>
      </Flex>
      <Text color="#6D6E6D" padding="16px 0px 41px 0px" textAlign="center">
        Save <span style={{ color: "black" }}>10%</span> with annual plan
      </Text>
      <Flex justifyContent="center" gap="40px" paddingBottom="77px">
        <PriceBox data={data[0]} />
        {plan ? <PriceBox data={data[2]} /> : <PriceBox data={data[1]} />}
      </Flex>
      <CompanyLogo/>
    </div>
  );
};

export default Pricing;