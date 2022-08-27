import {
  Button,
  Heading,
  Image,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo_Image from "../../../assets/harvest_logo.png";
import styles from "./welcome.module.css";

const Welcome = ({handleTeam}) => {
  // console.log(data);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value == "select") {
      setDisable(true);
    } else setDisable(false);
    handleTeam(e.target.value)
  };

  const goToNext = () => {
    navigate("/welcome/jtbd")
  }
  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePageDiv}>
        <div className={styles.logoImage1}>
          <Image src={logo_Image} width="121px" height="24px" />
        </div>
        <VStack className={styles.mainWelcomeDiv}>
          <div style={{ width: "100%" }}>
            <Heading fontSize="30px">Welcome to Harvest</Heading>
            <Text
              marginTop="5px"
              fontSize="17px"
              color="gray.600"
              fontWeight="500"
            >
              We just have a few quick questions to set up your account…
            </Text>
            <Text marginTop="20px" fontWeight="600" fontSize="16px">
              First, about how many people will be using Harvest?
            </Text>
            <Select
              cursor="pointer"
              bg="white"
              fontWeight="600"
              borderColor="rgba(29,30,28,.3)"
              marginTop="5px"
              onChange={handleChange}
            >
              <option value="select">Select a team size...</option>
              <option value="1">Just me</option>
              <option value="2">2</option>
              <option value="3-9">3-9</option>
              <option value="10-24">10-24</option>
              <option value="25-49">25-49</option>
              <option value="50-99">50-99</option>
              <option value="100+">100+</option>
            </Select>
          </div>
          <Button
            disabled={disable}
            backgroundColor="#188433"
            borderColor="none"
            color="#fff"
            fontWeight="600"
            height="40px"
            borderRadius="10px"
            fontSize="16px"
            width="100%"
            margin="20px"
            _hover={{ backgroundColor: "rgb(3, 122, 3)" }}
            onClick={goToNext}
          >
            Next
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default Welcome;
