import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo_Image2 from "../../../assets/harvest_logo.png";
import styles from "../afterSignUp2/aftersignup2.module.css";
import { IndustryData } from "./IndustryData";
import {useNavigate} from "react-router-dom";

const AfterSignUp7 = ({data}) => {

  const navigate=  useNavigate();

  const goToNext = async () => {
    await axios.post("http://localhost:8080/userData",data);
    navigate("/time");
  }
 
  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePageDiv}>
        <div className={styles.logoImage1}>
          <Image src={logo_Image2} width="121px" height="24px" />
        </div>
        <VStack className={styles.mainWelcomeDiv}>
          <div style={{ width: "100%" }}>
            <Heading fontSize="30px">Last step…</Heading>
            <VStack gap="10px" marginBottom="20px" marginTop="20px">
              <VStack width="100%">
                <Text width="100%" fontSize="17px" fontWeight="600">
                  What’s your primary industry?
                </Text>
                <Select
                  style={{ fontWeight: "500" }}
                  width="100%"
                  backgroundColor="white"
                  borderColor="rgba(29,30,28,.3)"
                >
                  {IndustryData.map((value) => (
                    <option key={value.industry} value={value.industry}>
                      {value.industry}
                    </option>
                  ))}
                </Select>
              </VStack>
              <VStack width="100%">
                <Text width="100%" fontSize="17px" fontWeight="600">
                  How did you hear about us?
                </Text>
                <Input
                  placeholder="e.g. a friend, podcast, social media, etc."
                  backgroundColor="#fff"
                  borderColor="gray.400"
                  borderRadius="4px"
                  width="100%"
                  color="#1d1e1c"
                  padding="0 8px"
                  fontWeight="500"
                  _hover={{ borderColor: "gray.600" }}
                />
              </VStack>
              <Checkbox
                borderColor="#bbb"
                colorScheme="red"
                width="100%"
                fontWeight="600"
              >
                Email me about Harvest product updates, tips, and more{" "}
              </Checkbox>
            </VStack>
          </div>
          <div style={{ marginTop: "-20px", width: "100%" }}>
            <Button
              backgroundColor="#188433"
              borderColor="none"
              color="#fff"
              fontWeight="600"
              height="40px"
              borderRadius="10px"
              fontSize="16px"
              width="100%"
              _hover={{ backgroundColor: "rgb(3, 122, 3)" }}
              onClick={goToNext}
            >
              Done! Take me to my account
            </Button>
          </div>
        </VStack>
      </div>
    </div>
  );
};

export default AfterSignUp7;
