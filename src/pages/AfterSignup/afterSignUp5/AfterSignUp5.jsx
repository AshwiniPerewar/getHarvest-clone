import {
  Button,
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
import { Link } from "react-router-dom";
import logo_Image2 from "../../../assets/harvest_logo.png";
import styles from "../afterSignUp2/aftersignup2.module.css";

const AfterSignUp5 = () => {
  const [other, setOther] = useState(false);
  const handleChange = (e) => {
    let { value } = e.target;
    if (value === "another") {
      setOther(true);
    } else {
      setOther(false);
    }
  };

  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePageDiv}>
        <div className={styles.logoImage1}>
          <Image src={logo_Image2} width="121px" height="24px" />
        </div>
        <VStack className={styles.mainWelcomeDiv}>
          <div style={{ width: "100%" }}>
            <Heading fontSize="30px">
              When do you want to be reminded <br /> to track time?
            </Heading>
            <Text
              margin="5px 0px 20px 0px"
              fontSize="17px"
              color="gray.600"
              fontWeight="500"
            >
              A good prompt can help you build a habit with time tracking.{" "}
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
                  Weekdays at 9am (Mon–Fri){" "}
                </Radio>
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="40"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  Weekdays at 4pm (Mon–Fri){" "}
                </Radio>
                <Radio
                  onChange={handleChange}
                  size="md"
                  value="another"
                  colorScheme="orange"
                  borderColor="gray.400"
                >
                  Another time...
                </Radio>
              </Stack>
            </RadioGroup>
            {other ? (
              <Input
                type="text"
                placeholder="Enter time..."
                marginTop="20px"
                backgroundColor="white"
                borderColor="rgba(29,30,28,.3)"
              />
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
          >
            Enable personal reminders
          </Button>
          <Link
            to=""
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

export default AfterSignUp5;
