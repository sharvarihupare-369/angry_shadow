import { Box, Checkbox, Divider, FormLabel,Flex, Input ,Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'

export const Sidebar = () => {
  return (
    <Box w="20%" p="20px">

   
    <Box >
      <Flex justifyContent="space-between">
     <FormLabel fontWeight={"700"} >FILTERS</FormLabel>
     <FormLabel fontWeight={"700"} fontSize={"15px"} color={"pink.600"} >CLEAR ALL</FormLabel>

      </Flex>
     {/* <Divider/> */}
     <Box p="10px" fontWeight={"700"} border={"1px solid #E0E0E0"}>

     <Box>
        <RadioGroup>
     <Radio colorScheme='pink' name='a' value='1'>
      Men
    </Radio>

        </RadioGroup>
      
     </Box>
     <Box>
     <Radio colorScheme='pink' name='a' value='1'>
    Women
    </Radio>
       
     </Box>
     <Box>
     <Radio colorScheme='pink' name='a' value='1'>
      Boys
    </Radio>
     </Box>
     <Box>
     <Radio colorScheme='pink' name='a' value='1'>
      Girls
    </Radio>
     </Box>
     </Box>
     

    </Box>
     
     <Box >
     
     <Box p="10px" border={"1px solid #E0E0E0"}>

     <FormLabel fontWeight={"700"} >CATEGORIES</FormLabel>
     <Box>
     <Checkbox colorScheme='pink' >TShirts</Checkbox>
      {/* <label>TShirts</label> */}
     </Box>
     <Box>
     <Checkbox colorScheme='pink'>Shirts</Checkbox>
      {/* <label>Shirts</label> */}
       
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Jeans</Checkbox>
      {/* <label>Jeans</label> */}
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Casual Shoes</Checkbox>
      {/* <label>Casual Shoes</label> */}
     </Box>
     <Box>
     <Checkbox  colorScheme='pink'>Trousers</Checkbox>
      {/* <label>Trousers</label> */}
     </Box>
     <Box>
     <Checkbox colorScheme='pink'>Sweatshirts</Checkbox>
      {/* <label>Sweatshirts</label> */}
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Flip Flops</Checkbox>
      
     </Box>
     <Box>
     <Checkbox colorScheme='pink'>Shorts</Checkbox>
     
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Sports Shoes</Checkbox>
      
     </Box>
     <Box>
     <Checkbox colorScheme='pink'>Sandals</Checkbox>
    
     </Box>
     </Box>


     <Box >
     
     <Box p="10px" border={"1px solid #E0E0E0"}>

     <FormLabel fontWeight={"700"} >BRAND</FormLabel>
     <Box>
     <Checkbox colorScheme='pink' >Roadster</Checkbox>
      
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >999Store</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink'>Puma</Checkbox>
     </Box>
     <Box>
     <Checkbox  colorScheme='pink' >DailyObjects</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >eCraftIndia</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >macnerise</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Flying Machine</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >SOJANYA</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >ADIDAS</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink'  >Allen Solly</Checkbox>
     </Box>
     </Box>
     </Box>


     <Box >
     
     <Box p="10px" border={"1px solid #E0E0E0"}>

     <FormLabel fontWeight={"700"} >PRICE</FormLabel>
     <Box>
     <Checkbox colorScheme='pink' >Rs.124 to Rs.10593</Checkbox>
      
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Rs.10593 to Rs.21063</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Rs.21063 to Rs.31531</Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' >Rs.21063 to Rs.42000</Checkbox>
     </Box>
    
     </Box>
     </Box>


     <Box >
     
     <Box p="10px" border={"1px solid #E0E0E0"}>

     <FormLabel fontWeight={"700"} >COLOR</FormLabel>
     <Box>
     <Checkbox colorScheme='pink' > <Flex alignItems={"center"} ><BsFillCircleFill color='blue' /> Blue</Flex> </Checkbox>
      
     </Box>
     <Box>
     <Checkbox colorScheme='pink' ><Flex alignItems={"center"} ><BsFillCircleFill color='#212121' /> Black</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink'  ><Flex alignItems={"center"} ><BsFillCircleFill color='#1A237E' /> Navy Blue</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' ><Flex alignItems={"center"}  ><BsFillCircleFill color='white' border="1px solid grey"  /> White</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' ><Flex alignItems={"center"} ><BsFillCircleFill color='gray'  /> Grey</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink'  ><Flex alignItems={"center"} ><BsFillCircleFill color='green' /> Green</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink' ><Flex alignItems={"center"} ><BsFillCircleFill color='#B71C1C' /> Red</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink'  ><Flex alignItems={"center"} ><BsFillCircleFill color='#FFB300' /> Yellow</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox colorScheme='pink'  ><Flex alignItems={"center"} ><BsFillCircleFill color='#F8BBD0' /> Pink</Flex></Checkbox>
     </Box>
     <Box>
     <Checkbox  colorScheme='pink'><Flex alignItems={"center"} ><BsFillCircleFill color='brown' /> Brown</Flex></Checkbox>
     </Box>
     
    
     </Box>
     </Box>





     <Box >
     {/* <Divider/> */}
     <Box p="10px"  border={"1px solid #E0E0E0"}>

     <FormLabel fontWeight={"700"} >DISCOUNT</FormLabel>
     <Box>
     <Radio colorScheme='pink' value='1'>
      10% and above
    </Radio>
      
     </Box>
     <Box>
     <Radio colorScheme='pink' value='1'>
     20% and above
    </Radio>
       
     </Box>
     <Box>
     <Radio colorScheme='pink' value='1'>
     30% and above
    </Radio>
     </Box>
     <Box>
     <Radio colorScheme='pink' value='1'>
     40% and above
    </Radio>
     </Box>
     <Box>
     <Radio colorScheme='pink' value='1'>
     50% and above
    </Radio>
     </Box>
     <Box>
     <Radio colorScheme='pink' value='1'>
     60% and above
    </Radio>
     </Box>
     </Box>
     

    </Box>
     

    </Box>
    </Box>
  )
}
