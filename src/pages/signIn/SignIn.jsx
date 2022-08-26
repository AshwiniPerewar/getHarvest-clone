import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/harvest_logo.png";
import styles from "./signin.module.css";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div>
      <div className={styles.logoDiv}>
        <img src={logo} alt="logo" className={styles.companyLogo} />
      </div>
      <VStack justifyContent="center" padding="32px 16px 32px 16px">
        <Heading fontSize="30px" fontWeight="500" marginBottom="20px">
          Sign in to Harvest
        </Heading>
        <div className={styles.box}>
          <Button
            className={styles.googleButton}
            leftIcon={<FcGoogle className={styles.googleIcon} />}
            iconSpacing="100px"
          >
            Sign in with Google
          </Button>
          <Flex gap="10px">
            <Box
              width="30%"
              borderTop="1px solid #cbcbcb"
              marginTop="11px"
            ></Box>
            <Text fontSize="14px" width="40%" color="#4a4b49" fontWeight="500">
              or with your email below
            </Text>
            <Box
              width="30%"
              borderTop="1px solid #cbcbcb"
              marginTop="11px"
            ></Box>
          </Flex>
          <Input placeholder="Work Email" className={styles.inputSignIn} />
          <Input placeholder="Password" className={styles.inputSignIn} />
          <Button className={styles.buttonSignIn}>Sign in</Button>
        </div>
        <Flex gap="30px" paddingTop="15px">
          <Text
            fontSize="15px"
            color="#1d1e1c9e"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            Forgot password?
          </Text>
          <Text
            fontSize="15px"
            color="#1d1e1c9e"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            Terms of service
          </Text>
          <Text
            fontSize="15px"
            color="#1d1e1c9e"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            Privacy policy
          </Text>
        </Flex>
      </VStack>
    </div>
  );
};

export default SignIn;
