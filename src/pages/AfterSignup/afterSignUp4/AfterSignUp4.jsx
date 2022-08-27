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
import React, { useEffect, useState } from "react";
import logo_Image2 from "../../../assets/harvest_logo.png";
import styles from "../afterSignUp2/aftersignup2.module.css";

const AfterSignUp4 = () => {
  const [values, setValues] = useState([]);
  const [other, setOther] = useState(false);
  const handleChange = (e) => {
    let { value } = e.target;
    if (value === "another") {
      setOther(true);
    } else {
      setOther(false);
    }
  };

  useEffect(() => {
    const arrayFn = () => {
      let x = [];
      for (let i = 1; i <= 120; i++) {
        x.push(i / 2);
        setValues(x);
      }
    };
    arrayFn();
  }, []);

  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePageDiv}>
        <div className={styles.logoImage1}>
          <Image src={logo_Image2} width="121px" height="24px" />
        </div>
        <VStack className={styles.mainWelcomeDiv}>
          <div style={{ width: "100%" }}>
            <Heading fontSize="30px">
              On average, about how many hours <br /> do you work?
            </Heading>
            <Text
              margin="5px 0px 20px 0px"
              fontSize="17px"
              color="gray.600"
              fontWeight="500"
            >
              We’ll help you visualize your weekly capacity.
            </Text>
            <RadioGroup defaultValue="35">
              <Stack spacing={2} fontWeight="500">
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="35"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  35 hrs/week
                </Radio>
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="40"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  40 hrs/week
                </Radio>
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="another"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  Another amount
                </Radio>
              </Stack>
            </RadioGroup>
            {other ? (
              <Flex width="60%" alignItems="center" marginTop="20px" gap="10px">
                <Select
                  style={{ fontWeight: "500" }}
                  width="50%"
                  backgroundColor="white"
                  borderColor="rgba(29,30,28,.3)"
                >
                  {values.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </Select>
                <Text fontWeight="500">hours per week</Text>
              </Flex>
            ) : null}
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
          >Set capacity</Button>
        </VStack>
      </div>
    </div>
  );
};

export default AfterSignUp4;
