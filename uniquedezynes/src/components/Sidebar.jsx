import {
  Box,
  Checkbox,
  Divider,
  FormLabel,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Heading
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductsMen } from "../Redux/Products/action";
import { GlobalContext } from "../Contexts/GlobalContextProvider";

export const Sidebar = () => {
 
   const [searchParams,setSearchparams] = useSearchParams()
   const initialCategory = searchParams.getAll('categories')
   const [categories,setCategories] = useState(initialCategory ||  []) 
   const initialGender = searchParams.getAll('gender')
   const [gender,setGender] = useState(initialGender || [])
   const initialColor = searchParams.getAll('color')
   const [color,setColor] = useState(initialColor || [])
   const initialBrand = searchParams.getAll('brand')
   const [brand,setBrand] = useState(initialBrand || [])
   const dispatch = useDispatch() 
   const {paramVal,setParamVal} = useContext(GlobalContext)

   useEffect(()=>{
      let params = {
        categories,
        gender,
        color,
        brand
      }
      setSearchparams(params)
   },[categories,gender,color,brand])

   const handleGender = (e) => {
    let {value} = e.target
    // console.log(value)
    // setParamVal(value)
    // setGender(gender)
    let newGender = [...gender]
    if(newGender.includes(value)){
      newGender = newGender.filter((el)=> el !== value)
    }else{
      newGender.push(value)
    }
    setGender(newGender)
    
   }


   const handleCategory = (e) => {
        let {value} = e.target
        // console.log(value)
        let newCategory = [...categories]
        if(newCategory.includes(value)){
          newCategory = newCategory.filter((el)=> el !== value)
        }else{
          newCategory.push(value)
        }
        setCategories(newCategory)
   }

   const handleColor = (e) => {
    let {value} = e.target
    // console.log(value)
    let newColor = [...color]
    if(newColor.includes(value)){
      newColor = newColor.filter((el)=> el !== value)
    }else{
      newColor.push(value)
    }
    setColor(newColor)
}

const handleBrand = (e) => {
  let {value} = e.target
  // console.log(value)
  let newBrand = [...brand]
  if(newBrand.includes(value)){
    newBrand = newBrand.filter((el)=> el !== value)
  }else{
    newBrand.push(value)
  }
  setBrand(newBrand)
}


  return (
    <Box w="20%" p="20px">
      <Box>
        <Flex justifyContent="space-between">
          <FormLabel fontWeight={"700"}>FILTERS</FormLabel>
          <FormLabel fontWeight={"700"} fontSize={"15px"} color={"pink.600"}>
            CLEAR ALL
          </FormLabel>
        </Flex>
        {/* <Divider/> */}
        <Box p="10px" fontWeight={"700"} border={"1px solid #E0E0E0"}>

           <Box>
            <Checkbox isChecked={gender.includes("men")} value={"men"} onChange={(e)=>handleGender(e)} colorScheme={'pink'}>Men</Checkbox>
            </Box>
            <Box>
            <Checkbox isChecked={gender.includes("women")}  value={"women"} onChange={(e)=>handleGender(e)} colorScheme={'pink'}>Women</Checkbox>
            </Box>
           <Box>
        </Box> 
        </Box>
      </Box>

      <Box>
        <Box p="10px" border={"1px solid #E0E0E0"}>
          <FormLabel fontWeight={"700"}>CATEGORIES</FormLabel>

                  <Box >
                      <Checkbox isChecked={categories.includes('tshirt')} onChange={(e) => handleCategory(e)} value={'tshirt'} colorScheme={'pink'}>Tshirts</Checkbox>
                  </Box>
                  
                  <Box>
                      <Checkbox isChecked={categories.includes('kurtis')}  onChange={(e)=>handleCategory(e)} value={'kurtis'} colorScheme={'pink'}>Kurtis</Checkbox>
                  </Box>
                  <Box >
                      <Checkbox isChecked={categories.includes('shirt')}  onChange={(e)=>handleCategory(e)} value={'shirt'} colorScheme={'pink'}>Shirts</Checkbox>
                  </Box>

                  <Box>
                      <Checkbox isChecked={categories.includes('Kurta Sets')}  onChange={(e)=>handleCategory(e)} value={'Kurta Sets'} colorScheme={'pink'}>Kurta sets</Checkbox>
                  </Box>
                  <Box>
                      <Checkbox isChecked={categories.includes('Kurta')}  onChange={(e)=>handleCategory(e)} value={'kurta'} colorScheme={'pink'}>Kurta</Checkbox>
                  </Box>

                  <Box>
                      <Checkbox isChecked={categories.includes('jeans')} onChange={(e)=>handleCategory(e)} value={'jeans'} colorScheme={'pink'}>Jeans</Checkbox>
                  </Box>
                

                  <Box>
                      <Checkbox isChecked={categories.includes('shorts')} onChange={(e)=>handleCategory(e)} value={'shorts'} colorScheme={'pink'}>Shorts</Checkbox>
                  </Box>
                
                <Box>
                      <Checkbox isChecked={categories.includes('bra')} onChange={(e)=>handleCategory(e)} value={'bra'} colorScheme={'pink'}>Bra</Checkbox>
                  </Box>
                
                  <Box >
                      <Checkbox isChecked={categories.includes('joggers')} onChange={(e)=>handleCategory(e)} value={'joggers'} colorScheme={'pink'}>Joggers</Checkbox>
                  </Box>

                  <Box >
                      <Checkbox isChecked={categories.includes('jackets')} onChange={(e)=>handleCategory(e)} value={'jackets'} colorScheme={'pink'}>Jackets</Checkbox>
                  </Box>
                
              
                  <Box >
                      <Checkbox isChecked={categories.includes('sweatshirt')} onChange={(e)=>handleCategory(e)} value={'sweatshirt'} colorScheme={'pink'}>Sweatshirt</Checkbox>
                  </Box>
                
                  
                  <Box >
                      <Checkbox isChecked={categories.includes('hoodies')} onChange={(e)=>handleCategory(e)} value={'hoodies'} colorScheme={'pink'}>Hoodies</Checkbox>
                  </Box>

                  <Box>
                      <Checkbox isChecked={categories.includes('shoes')} onChange={(e)=>handleCategory(e)} value={'shoes'} colorScheme={'pink'}>Shoes</Checkbox>
                  </Box>
  
                  <Box>
                      <Checkbox isChecked={categories.includes('bags')} onChange={(e)=>handleCategory(e)} value={'bags'} colorScheme={'pink'}>Bags</Checkbox>
                  </Box>
                  
                  <Box>
                      <Checkbox isChecked={categories.includes('stole')} onChange={(e)=>handleCategory(e)} value={'stole'} colorScheme={'pink'}>Stole</Checkbox>
                  </Box>
        
                  <Box >
                      <Checkbox isChecked={categories.includes('cardigan')} onChange={(e)=>handleCategory(e)} value={'cardigan'} colorScheme={'pink'}>Cardigan</Checkbox>
                  </Box>

                  <Box>
                      <Checkbox isChecked={categories.includes('beautycare')} onChange={(e)=>handleCategory(e)} value={'beautycare'} colorScheme={'pink'}>Beauty Care</Checkbox>
                  </Box>
                  <Box >
                      <Checkbox isChecked={categories.includes('boots')} onChange={(e)=>handleCategory(e)} value={'boots'} colorScheme={'pink'}>Boots</Checkbox>
                  </Box>
                  <Box >
                      <Checkbox isChecked={categories.includes('camisole')} onChange={(e)=>handleCategory(e)} value={'camisole'} colorScheme={'pink'}>Camisole</Checkbox>
                  </Box>
                  <Box >
                      <Checkbox isChecked={categories.includes('culottes')} onChange={(e)=>handleCategory(e)} value={'culottes'} colorScheme={'pink'}>Culottes</Checkbox>
                  </Box>
                  <Box >
                      <Checkbox isChecked={categories.includes('dresses')} onChange={(e)=>handleCategory(e)} value={'dresses'} colorScheme={'pink'}>Dresses</Checkbox>
                  </Box>
                  <Box>
                      <Checkbox isChecked={categories.includes('shrug')} onChange={(e)=>handleCategory(e)}  value={'shrug'} colorScheme={'pink'}>Shrug</Checkbox>
                  </Box>
                  <Box >
                      <Checkbox isChecked={categories.includes('sweaters')} onChange={(e)=>handleCategory(e)} value={'sweaters'} colorScheme={'pink'}>Sweaters</Checkbox>
                  </Box>
                  <Box>
                      <Checkbox isChecked={categories.includes('tops')} onChange={(e)=>handleCategory(e)} value={'tops'} colorScheme={'pink'}>Tops</Checkbox>
                  </Box>
        </Box>


        <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>BRAND</Heading>
                <Box>
                    <Checkbox isChecked={brand.includes('Roadster')} onChange={(e)=>handleBrand(e)} value={'Roadster'}  colorScheme={'pink'}>Roadster</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('HERE&NOW')} onChange={(e)=>handleBrand(e)} value={'HERE&NOW'} colorScheme={'pink'}>Here&Now</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Clovia')} onChange={(e)=>handleBrand(e)} value={'Clovia'} colorScheme={'pink'}>Clovia</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Mast & Harbour')} onChange={(e)=>handleBrand(e)} value={'Mast & Harbour'}  colorScheme={'pink'}>Mast & Harbour</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Dressberry')} onChange={(e)=>handleBrand(e)} value={'Dressberry'}   colorScheme={'pink'}>Dressberry</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Celfie Design')} onChange={(e)=>handleBrand(e)} value={'Celfie Design'}  colorScheme={'pink'}>Celfie Design</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('KALINI')} onChange={(e)=>handleBrand(e)} value={'KALINI'} colorScheme={'pink'}>Kalini</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Street Armor by Pantaloons')} onChange={(e)=>handleBrand(e)} value={'Street Armor by Pantaloons'} colorScheme={'pink'}>Street Armor by Pantaloons</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('HRX')} onChange={(e)=>handleBrand(e)} value={'HRX'}  colorScheme={'pink'}>HRX</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('H&M')} onChange={(e)=>handleBrand(e)} value={'H&M'}colorScheme={'pink'}>H&M</Checkbox>
                </Box>
            </Box>



        <Box>
          <Box p="10px" border={"1px solid #E0E0E0"}>
            <FormLabel fontWeight={"700"}>PRICE</FormLabel>
            {/* <Box>
              <Checkbox colorScheme="pink">Rs.124 to Rs.10593</Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme="pink">Rs.10593 to Rs.21063</Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme="pink">Rs.21063 to Rs.31531</Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme="pink">Rs.21063 to Rs.42000</Checkbox>
            </Box>
          </Box> */}
          <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 22 to Rs. 200</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 201 to Rs. 499</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 500 to Rs. 1299</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 1300 to Rs. 10000</Checkbox>
                </Box>
                </Box>
        </Box>



        <Box>
          <Box p="10px" border={"1px solid #E0E0E0"}>
            <FormLabel fontWeight={"700"}>COLOR</FormLabel>
            <Box>
              <Checkbox isChecked={color.includes('blue')} onChange={(e)=>handleColor(e)} value={"blue"} colorScheme="pink">
                {" "}
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="blue" /> Blue
                </Flex>{" "}
              </Checkbox>
            </Box>
            <Box>
              <Checkbox isChecked={color.includes('black')} onChange={(e)=>handleColor(e)} value={"black"} colorScheme="pink">
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="#212121" /> Black
                </Flex>
              </Checkbox>
            </Box>
          
            <Box>
              <Checkbox isChecked={color.includes('white')} onChange={(e)=>handleColor(e)} value={"white"} colorScheme="pink">
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="white" border="1px solid grey" />{" "}
                  White
                </Flex>
              </Checkbox>
            </Box>

            <Box>
              <Checkbox isChecked={color.includes('green')} onChange={(e)=>handleColor(e)} value={"green"} colorScheme="pink">
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="green" /> Green
                </Flex>
              </Checkbox>
            </Box>
            <Box>
              <Checkbox isChecked={color.includes('red')} onChange={(e)=>handleColor(e)} value={"red"} colorScheme="pink">
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="#B71C1C" /> Red
                </Flex>
              </Checkbox>
            </Box>
            <Box>
              <Checkbox isChecked={color.includes('yellow')} onChange={(e)=>handleColor(e)} value={"yellow"} colorScheme="pink">
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="#FFB300" /> Yellow
                </Flex>
              </Checkbox>
            </Box>
            <Box>
              <Checkbox isChecked={color.includes('pink')} onChange={(e)=>handleColor(e)} value={"pink"} colorScheme="pink">
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="#F8BBD0" /> Pink
                </Flex>
              </Checkbox>
            </Box>
            <Box>
              <Checkbox isChecked={color.includes('brown')} onChange={(e)=>handleColor(e)} value={"brown"} colorScheme="pink">
                <Flex alignItems={"center"}>
                  <BsFillCircleFill color="brown" /> Brown
                </Flex>
              </Checkbox>
            </Box>
          </Box>
        </Box>

        <Box>
          {/* <Divider/> */}
          <Box p="10px" border={"1px solid #E0E0E0"}>
            <FormLabel fontWeight={"700"}>DISCOUNT</FormLabel>
            <Box>
              <Radio colorScheme="pink" value="1">
                10% and above
              </Radio>
            </Box>
            <Box>
              <Radio colorScheme="pink" value="1">
                20% and above
              </Radio>
            </Box>
            <Box>
              <Radio colorScheme="pink" value="1">
                30% and above
              </Radio>
            </Box>
            <Box>
              <Radio colorScheme="pink" value="1">
                40% and above
              </Radio>
            </Box>
            <Box>
              <Radio colorScheme="pink" value="1">
                50% and above
              </Radio>
            </Box>
            <Box>
              <Radio colorScheme="pink" value="1">
                60% and above
              </Radio>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
