import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import logo from "../../assets/harvest_logo.png";
import styles from "./signin.module.css";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(initialState);
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    users.map((e) => {
      if (e.email === form.email && e.password === form.password) {
        navigate("/team");
      }
    });
  };

  useEffect(() => {
    const getData = async () => {
      let usersList = await axios.get("http://localhost:8080/registeredUsers");
      setUsers(usersList.data);
    };
    getData();
  }, []);

  return (
    <div style={{width:"100%"}}>
      <div className={styles.logoDiv}>
        <img src={logo} alt="logo" className={styles.companyLogo} />
      </div>
      <VStack justifyContent="center" padding="32px 16px 32px 16px">
        <Heading fontSize="30px" fontWeight="500" marginBottom="20px">
          Sign in to Harvest
        </Heading>
        <div className={styles.box}>
          <Flex alignItems={"center"}>
            <Box
              border="1px solid rgba(29, 30, 28, 0.3)"
              height={"40px"}
              borderTopLeftRadius={"10px"}
              borderBottomLeftRadius={"10px"}
              borderRight={"none"}
              backgroundColor={"white"}
              style={{ display: "flex", alignItems: "center" }}
              paddingLeft={"5px"}
              _hover={{ borderColor: "none" }}
              cursor={"pointer"}
            >
              <FcGoogle className={styles.googleIcon} />
            </Box>
            <Button
              width="100%"
              backgroundColor="white"
              fontWeight="500"
              border="1px solid rgba(29, 30, 28, 0.3)"
              borderLeft={"none"}
              letterSpacing="0.6px"
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              borderTopLeftRadius={"none"}
              borderBottomLeftRadius={"none"}
              _hover={{ borderColor: "none" }}
              paddingRight={"40px"}
            >
              Sign in with Google
            </Button>
          </Flex>
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
          <Input
            placeholder="Work Email"
            backgroundColor="#fff"
            borderColor="gray.400"
            color="#1d1e1c"
            padding="0 8px"
            borderRadius="4px"
            fontWeight="500"
            _hover={{ borderColor: "gray.600" }}
            name="email"
            value={form.email}
            onChange={handleChange}
            marginBottom={"-10px"}
          />
          <Input
            placeholder="Password"
            backgroundColor="#fff"
            borderColor="gray.400"
            color="#1d1e1c"
            padding="0 8px"
            borderRadius="4px"
            fontWeight="500"
            _hover={{ borderColor: "gray.600" }}
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <Button
            backgroundColor="#188433"
            fontWeight="500"
            borderColor="none"
            color="#fff"
            height="40px"
            fontSize="17px"
            borderRadius="10px"
            _hover={{ backgroundColor: "rgb(3, 122, 3)" }}
            onClick={handleClick}
          >
            Sign in
          </Button>
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
