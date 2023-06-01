import { Box, Container, Heading, Text, Image,Button, Flex, HStack, Divider } from "@chakra-ui/react";
import React from "react";

export const Bag = () => {
  return (
    <Box dispay={"grid"} placeItems="center" mt="60px" h="80vh">
      <Container lineHeight={"35px"}>
        <Image w="200px" m="auto" src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" />
        <Heading size={"md"} textAlign={"center"}>
          Hey,it feels so light!
        </Heading>
        <Text color="gray" textAlign={"center"}>
          There is nothing in your bag.Let's add some items.
        </Text>
        <Flex justifyContent={"center"}>

        <Button color={"#D14D72"} border={"1px solid #D14D72"} variant="outline" textTransform="uppercase">
          Add Items from Wishlist
        </Button>
        </Flex>
      </Container>

      <Box mt="250px" borderTop={"1px solid #C1D0B5"}>

      <Flex  mt="15px" alignItems={"center"} justifyContent={"space-evenly"}>
        <Box>
       
            <HStack >

            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" />
            <Image width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" />
            </HStack>
        </Box>
        <Box>
            <Text fontWeight={"700"}>Need Help ? Contact Us</Text>
        </Box>
      </Flex>
      </Box>
    </Box>
  );
};
