import {
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo_Image2 from "../../../assets/harvest_logo.png";
import styles from "./aftersignup2.module.css";

const AfterSignUp2 = () => {
  const [disable, setDisable] = useState(true);
  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [other, setOther] = useState(false);

  useEffect(() => {
    let count = 0;
    checkedItems.map((el) => {
      if (el === true) {
        count++;
      }
    });
    if (count > 0 || other === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [checkedItems, other]);

  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePageDiv}>
        <div className={styles.logoImage1}>
          <Image src={logo_Image2} width="121px" height="24px" />
        </div>
        <VStack className={styles.mainWelcomeDiv}>
          <div style={{ width: "100%" }}>
            <Heading fontSize="30px">
              What do you want to accomplish <br /> with Harvest?
            </Heading>
            <Text
              margin="5px 0px 20px 0px"
              fontSize="17px"
              color="gray.600"
              fontWeight="500"
            >
              Please select all that apply.
            </Text>
            <Stack spacing={2}>
              <Checkbox
                borderColor="#bbb"
                colorScheme="red"
                isChecked={checkedItems[0]}
                onChange={(e) =>
                  setCheckedItems([
                    e.target.checked,
                    checkedItems[1],
                    checkedItems[2],
                    checkedItems[3],
                  ])
                }
              >
                I want to track billable time to properly bill my clients
              </Checkbox>
              <Checkbox
                borderColor="#bbb"
                colorScheme="red"
                isChecked={checkedItems[1]}
                onChange={(e) =>
                  setCheckedItems([
                    checkedItems[0],
                    e.target.checked,
                    checkedItems[2],
                    checkedItems[3],
                  ])
                }
              >
                I want to make sure my business is on track
              </Checkbox>
              <Checkbox
                borderColor="#bbb"
                colorScheme="red"
                isChecked={checkedItems[2]}
                onChange={(e) =>
                  setCheckedItems([
                    checkedItems[0],
                    checkedItems[1],
                    e.target.checked,
                    checkedItems[3],
                  ])
                }
              >
                I want to better estimate future projects
              </Checkbox>
              <Checkbox
                borderColor="#bbb"
                colorScheme="red"
                isChecked={checkedItems[3]}
                onChange={(e) =>
                  setCheckedItems([
                    checkedItems[0],
                    checkedItems[1],
                    checkedItems[2],
                    e.target.checked,
                  ])
                }
              >
                I want to provide evidence of what I was doing
              </Checkbox>
              <Checkbox
                colorScheme="red"
                borderColor="#bbb"
                onChange={(e) => setOther(e.target.checked)}
              >
                Other...
              </Checkbox>
              {other ? (
                <Input
                  borderColor="#bbb"
                  isRequired
                  placeholder="Please Specify..."
                />
              ) : null}
            </Stack>
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
          >
            Next
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default AfterSignUp2;
