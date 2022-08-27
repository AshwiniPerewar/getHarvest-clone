import React from "react";
import {Container} from "@chakra-ui/react";
import { Introdiv } from "../../components/home/Introdiv";
import Company from "../../components/home/CompanyLogo";
import { Getting } from "../../components/home/Getting";
import { Features } from "../../components/home/Features";
import { Integration } from "../../components/home/Integration";
import { Customer } from "../../components/home/Customer";
import Learning from "../../components/home/Learning";
import { Starttrack } from "../../components/home/Starttrack";
const Home = () => {
  return (
    <Container bgColor="#fff8f1" maxW="100%">
      <Introdiv/>
      <Company opacity={.2}/>
      <Getting />
      <Features/>
      <Integration/>
      <Customer />

      <Learning />
      <Starttrack/>
    </Container>
  );
};

export default Home;
