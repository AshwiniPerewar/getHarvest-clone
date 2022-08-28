import React, { useState } from "react";
import styles from "./signup.module.css";
import logo from "../../assets/harvest_logo.png";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Company from "../../components/home/CompanyLogo/CompanyLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  let navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:8080/registeredUsers", form);
    setForm(initialState);
    navigate("/welcome");
  };
  return (
    <div className={styles.signupPage}>
      <div className={styles.logoDiv}>
        <img src={logo} alt="logo" className={styles.companyLogo} />
      </div>
      <Flex width="85%" margin="auto" justifyContent="space-between" className={styles.grid}>
        <VStack width="46%" padding="120px 0px" gap="20px">
          <Box width="100%">
            <Text fontSize="14px" fontWeight="600" color="#FA5D00">
              SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST
            </Text>
          </Box>
          <Box width="100%" className={styles.box}>
            <Heading fontSize="48px" fontWeight="400">
              Finally, time tracking <br /> your team actually <br /> wants to
              use
            </Heading>
          </Box>
          <VStack width="100%" gap={"10px"}>
            <Flex width="100%" gap="15px">
              <div className={styles.smallIcon}></div>
              <Text fontSize="16px" fontWeight="500">
                <span style={{ fontWeight: "700" }}>Time Tracking.</span> Easy &
                intuitive time tracking that captures all <br /> your time
                without changing the way you work.
              </Text>
            </Flex>
            <Flex width="100%" gap="15px">
              <div className={styles.smallIcon}></div>
              <Text fontSize="16px" fontWeight="500">
                <span style={{ fontWeight: "700" }}>Reports & Analysis.</span>{" "}
                Instantly create reports across projects. <br /> Budgets, time,
                team capacity, cost breakdowns, and more.
              </Text>
            </Flex>
            <Flex width="100%" gap="15px">
              <div className={styles.smallIcon}></div>
              <Text fontSize="16px" fontWeight="500">
                <span style={{ fontWeight: "700" }}>Invoicing & Payments.</span>{" "}
                Turn tracked time into invoices. Accept <br /> online payments.
                Sync with QuickBooks and Xero.
              </Text>
            </Flex>
          </VStack>
        </VStack>

        <VStack className={styles.inputBox}>
          <Heading fontSize="40px" fontWeight="500">
            Get a FREE Trial
          </Heading>
          <Box style={{ margin: "10px 0px 30px 0px" }}>
            <Text fontSize="16px" fontWeight="400" color="#666666">
              No credit card required
            </Text>
          </Box>
          <Flex alignItems={"center"} width={"100%"}>
            <Box
              border="1px solid #E6E6E6"
              height={"48px"}
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
              height={"48px"}
              backgroundColor="white"
              fontWeight="500"
              border="1px solid #E6E6E6"
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <Flex gap="10px" width="100%">
              <Box
                width="40%"
                borderTop="1px solid"
                borderColor="gray.200"
                marginTop="11px"
              ></Box>
              <Text
                fontSize="14px"
                width="38%"
                color="gray.500"
                fontWeight="500"
              >
                or with your email below
              </Text>
              <Box
                width="39%"
                borderTop="1px solid"
                borderColor="gray.200"
                marginTop="11px"
              ></Box>
            </Flex>
          </div>
          <VStack width="100%" paddingTop="15px" gap={"13px"}>
            <Flex justifyContent="space-between" width="100%">
              <Input
                placeholder="First Name"
                backgroundColor="#fff"
                borderColor="gray.200"
                color="#1d1e1c"
                borderRadius="4px"
                width="48%"
                fontWeight="500"
                height="48px"
                _hover={{ borderColor: "gray.500" }}
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
              <Input
                placeholder="Last Name"
                backgroundColor="#fff"
                borderColor="gray.200"
                color="#1d1e1c"
                borderRadius="4px"
                width="48%"
                fontWeight="500"
                height="48px"
                _hover={{ borderColor: "gray.500" }}
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </Flex>
            <Flex justifyContent="space-between" width="100%">
              <Input
                placeholder="Company Name"
                backgroundColor="#fff"
                borderColor="gray.200"
                color="#1d1e1c"
                borderRadius="4px"
                width="48%"
                fontWeight="500"
                height="48px"
                _hover={{ borderColor: "gray.500" }}
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <Input
                placeholder="Work Email"
                backgroundColor="#fff"
                borderColor="gray.200"
                color="#1d1e1c"
                borderRadius="4px"
                width="48%"
                fontWeight="500"
                height="48px"
                _hover={{ borderColor: "gray.500" }}
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Flex>
            <Flex justifyContent="space-between" width="100%">
              <InputGroup alignItems="center">
                <Input
                  placeholder="Password"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  backgroundColor="#fff"
                  borderColor="gray.200"
                  color="#1d1e1c"
                  borderRadius="4px"
                  width="100%"
                  fontWeight="500"
                  height="48px"
                  _hover={{ borderColor: "gray.500" }}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <InputRightElement
                  height={"100%"}
                  width="4.5rem"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Text
                    onClick={handleClick}
                    fontSize="14px"
                    fontWeight="500"
                    color="gray.500"
                    cursor={"pointer"}
                  >
                    {show ? "Hide" : "Show"}
                  </Text>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Button
              backgroundColor="#188433"
              fontWeight="500"
              borderColor="none"
              color="#fff"
              height="48px"
              fontSize="17px"
              borderRadius="10px"
              width={"100%"}
              _hover={{ backgroundColor: "rgb(3, 122, 3)" }}
              onClick={handleSubmit}
            >
              Create my account
            </Button>
          </VStack>
          <Flex
            width={"100%"}
            justifyContent={"center"}
            gap="10px"
            padding="15px 0px"
          >
            <Text
              fontSize="16px"
              color="#666666"
              _hover={{ textDecoration: "underline" }}
              onClick={() => navigate("/signin")}
            >
              Already a customer?
            </Text>
            <Text
              fontSize="16px"
              fontWeight="700"
              color="#666666"
              cursor={"pointer"}
              textDecoration={"underline"}
              onClick={() => navigate("/signin")}
            >
              Sign in
            </Text>
          </Flex>
          <Text width={"93%"} marginTop={"auto"} fontSize="12px">
            By creating an account, you agree to the Harvest{" "}
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Terms of service
            </span>{" "}
            and{" "}
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Privacy Policy
            </span>
          </Text>
        </VStack>
      </Flex>
      <div style={{ padding: "20px 0px 60px 0px" }}>
        <Company opacity={0.3}/>
      </div>
    </div>
  );
};

export default SignUp;
