import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsBank, BsCreditCard2Back } from 'react-icons/bs'
import { BiGift } from 'react-icons/bi'
import {CiPercent, CiStar} from 'react-icons/ci'
import {FaLaptopFile} from 'react-icons/fa'
import {GiMoneyStack, GiWallet} from 'react-icons/gi'

export const Payment = () => {
  return (
  <Box>
    <Flex>

    <Container maxW='container.sm'>
    <Box mt="10px" p="10px" borderRadius={"3px"} border={"1px solid #C1D0B5"}>
            <Flex alignItems={"center"}>
            <CiPercent/>
            <Text fontWeight={"700"} ml="8px">Bank Offers</Text>
            </Flex>
            <Text color={"gray.600"} fontSize={"13px"}>10% Instant Discount on ICICI Bank Credit Cards on a min spend of Rs.3500.TCA</Text>
            <Text color={"gray.600"} fontSize={"13px"}>10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs.3500.TCA</Text>
            <Text color={"gray.600"} fontSize={"13px"}>10% Cashback upto Rs.200 on Paytm Wallet and Postpaid Transaction on a min spend of Rs.2000.TCA</Text>
     
           </Box>

           <Box>
            <Heading size={"sm"} m="15px 0px" fontWeight={"700"}>Choose Payment Mode</Heading>
           </Box>


           <Box  mt="10px" p="10px" borderRadius={"3px"} border={"1px solid #C1D0B5"}>
            <Flex>
                <Box>
                    <VStack>
                        <Box p="10px"  >
                            <Flex alignItems={"center"} > 
                                <CiStar color='#D14D72'/>
                                <Heading ml="10px"  size={"xs"} color='#D14D72'>Recommended</Heading>
                            </Flex>
                            
                        </Box>
                        <Box p="10px" border={"1px solid #C1D0B5"}>
                            <Flex alignItems={"center"}>
                               <GiMoneyStack/>
                                <Heading ml="10px"  size={"xs"}>Cash on Delivery</Heading>
                            </Flex>
                            
                        </Box>
                        <Box p="10px" border={"1px solid #C1D0B5"}>
                            <Flex alignItems={"center"}>
                              <BsCreditCard2Back/>
                                <Heading ml="10px"  size={"xs"}>Credit/Debit Card</Heading>
                            </Flex>
                            
                        </Box>
                        <Box p="10px" border={"1px solid #C1D0B5"}>
                            <Flex alignItems={"center"}>
                              
                                <Heading ml="10px"  size={"xs"}>PhonePe/Google Pay/BHIM UPI</Heading>
                            </Flex>
                            
                        </Box>
                        <Box p="10px" border={"1px solid #C1D0B5"}>
                            <Flex alignItems={"center"}>
                            <GiWallet/>
                                <Heading ml="10px"  size={"xs"}>Paytm/Wallets</Heading>
                            </Flex>
                            
                        </Box>
                        <Box p="10px" border={"1px solid #C1D0B5"}>
                            <Flex alignItems={"center"}>
                              <BsBank/>
                                <Heading ml="10px"  size={"xs"}>Net Banking</Heading>
                            </Flex>
                            
                        </Box>

                        <Box p="10px" border={"1px solid #C1D0B5"}>
                            <Flex alignItems={"center"}>
                               {/* <FaLaptopFile/> */}
                                <Heading ml="10px"  size={"xs"}>EMI/Pay Later</Heading>
                            </Flex>
                            
                        </Box>
{/* 
                        <Box p="10px" border={"1px solid #C1D0B5"}>
                            <Flex alignItems={"center"}>
                              <BiGift/>
                                <Heading ml="10px"  size={"xs"}>Have a Gift Card?</Heading>
                            </Flex>
                            
                        </Box> */}
                    </VStack>
                </Box>
            </Flex>
           </Box>

    </Container>
    </Flex>
  </Box>
  )
}
