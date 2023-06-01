import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import {CiPercent} from 'react-icons/ci'

export const BagDetails = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"} >
        <Box  w="50%" p="10px" border={"1px solid red"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box w="100%" mt="10px" p="10px" borderRadius={"5px"} border={"1px solid #C1D0B5"}>
              Deliver to:{" "}
              <span>
                <input style={{ border: "none" }} placeholder="Enter Pin" />{" "}
              </span>
            <Button
              borderRadius={"0px"}
              border={"1px solid #D14D72"}
              color={"#D14D72"}
              textTransform={"uppercase"}
              bg="white"
              _hover={{ bg: "white" }}
              >
              Enter Pin Code
            </Button>
                </Box>
          </Flex>

           <Box mt="10px" p="10px" borderRadius={"5px"} border={"1px solid #C1D0B5"}>
            <Flex alignItems={"center"}>
            <CiPercent/>
            <Text fontWeight={"600"} ml="8px">Available Offers</Text>
            </Flex>
            <Text color={"gray.600"} fontSize={"13px"}>10% Instant Discount on ICICI Bank Credit Cards on a min spend of Rs.3500.TCA</Text>
            <Text color={"gray.600"} fontSize={"13px"}>10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs.3500.TCA</Text>
            <Text color={"gray.600"} fontSize={"13px"}>10% Cashback upto Rs.200 on Paytm Wallet and Postpaid Transaction on a min spend of Rs.2000.TCA</Text>
            <Text></Text>
           </Box>


        </Box>

        <Box border={"1px solid yellow"}>saasassasasaa</Box>
      </Flex>
    </Box>
  );
};
