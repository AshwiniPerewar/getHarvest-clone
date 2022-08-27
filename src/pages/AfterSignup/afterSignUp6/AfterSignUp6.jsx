import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_Image2 from "../../../assets/harvest_logo.png";
import styles from "../afterSignUp2/aftersignup2.module.css";
import InputBox from "./InputBox";

const AfterSignUp6 = () => {
  const [change, setChange] = useState(1);
  const navigate = useNavigate();
  const goToNext = () => {
    navigate("/welcome/marketing")
  }
  const handleChange = (e) => {
    setChange(+e.target.value);
  };

  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePageDiv}>
        <div className={styles.logoImage1}>
          <Image src={logo_Image2} width="121px" height="24px" />
        </div>
        <VStack className={styles.mainWelcomeDiv}>
          <div style={{ width: "100%" }}>
            <Heading fontSize="30px">Let’s create your first project</Heading>
            <Text
              margin="5px 0px 20px 0px"
              fontSize="17px"
              color="gray.600"
              fontWeight="500"
            >
              We’ll show you how to track time to this project and get insights
              from the time you tracked.
            </Text>
            <VStack gap="10px" marginBottom="20px">
              <VStack width="100%">
                <Text width="100%" fontSize="17px" fontWeight="600">
                  Client name
                </Text>
                <Input
                  placeholder="e.g. ACME Corporation"
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
              <VStack width="100%">
                <Text width="100%" fontSize="17px" fontWeight="600">
                  Project name
                </Text>
                <Input
                  placeholder="e.g. Website Redesign, Q4 Strategy, etc."
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
            </VStack>
            <RadioGroup defaultValue="1">
              <Stack spacing={2} fontWeight="500">
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="1"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  I bill by time & materials
                </Radio>
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="2"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  I bill by fixed fees
                </Radio>
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="3"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  I don’t bill for my work
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div style={{ width: "100%" }}>
            {change === 1 ? <InputBox title={"Budget"} /> : ""}
            {change === 2 ? <InputBox title={"Project fees"} /> : ""}
            {change === 3 ? (
              <VStack width="75%">
                <Text width="100%" fontSize="17px" fontWeight="600">
                  Budget
                </Text>
                <Flex alignItems="center" width="100%" gap="5px">
                  <Input
                    placeholder="0.00"
                    backgroundColor="#fff"
                    borderColor="gray.400"
                    borderRadius="4px"
                    width="50%"
                    color="#1d1e1c"
                    padding="0 8px"
                    fontWeight="500"
                    _hover={{ borderColor: "gray.600" }}
                  />
                  <Text fontSize="16px" fontWeight="500">
                    hour
                  </Text>
                </Flex>
              </VStack>
            ) : (
              ""
            )}
          </div>
          <Button
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
            Create Project
          </Button>
          <Link
            to="/welcome/marketing"
            style={{
              textDecoration: "underline",
              fontSize: "15px",
              marginTop: "-10px",
              color: "#1d1e1cb3",
            }}
          >
            Skip and continue
          </Link>
        </VStack>
      </div>
    </div>
  );
};

export default AfterSignUp6;
