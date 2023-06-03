import { Box, Button, Flex, HStack, Select, Heading,Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Men } from './Men'
import { useDispatch } from 'react-redux'
import { getProductsMen } from '../Redux/Products/action'
import { Pagination } from '../components/Pagination'
import { BsChevronDown } from 'react-icons/bs'
import { GlobalContext } from '../Contexts/GlobalContextProvider'
import { useSearchParams } from 'react-router-dom'




export const Products = () => {
  const [searchParams] = useSearchParams()
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(0)
  const limit = 14;
  const dispatch = useDispatch();
  const {paramVal,setParamVal} = useContext(GlobalContext)

  let paramObj = {
    params : {
      categories : searchParams.getAll('categories'),
      gender : searchParams.getAll('gender'),
      color : searchParams.getAll('color'),
      brand : searchParams.getAll('brand')
    }
  }

  // console.log(page)
  useEffect(() => {
    dispatch(getProductsMen(setTotalPages,page, paramVal || 'women' , paramObj));
  }, [page,paramVal,searchParams]);

  useEffect(()=>{
    window.scrollTo({top:0 , left:0, behavior:"smooth"})
  },[])

let roundPage = Math.ceil(totalPages/limit)

  return (
    <>
    <Flex ml={'15px'} alignItems={'center'}>
                <Heading fontSize={'18px'}>Myntra Fashion Store - </Heading>
                <Text fontSize={'18px'} color={'gray'}> {totalPages} items</Text>
            </Flex>
           
            <Flex   alignItems={'center'} m={'10px 0 10px 0'} justifyContent={'flex-end'}>
                <Flex ml="10px" justifyContent={'space-around'} alignItems={'center'} w={'25%'}>
                    {/* <Heading fontSize={'16px'}>FILTERS</Heading>
                    <Heading color={"pink.600"} fontSize={'13px'}>CLEAR ALL</Heading> */}
                </Flex>
                <Flex w={'100%'} justifyContent={'space-between'}>
                    <Flex w={'35%'}>
                        <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Bundles<BsChevronDown/> </Button>
                        <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Country of Origin <BsChevronDown/> </Button>
                        <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Size <BsChevronDown /></Button>
                    </Flex>
                    <Select _focusVisible={'none'} w={'27%'} borderRadius={'none'}>
                        <option value="">Recommended</option>
                        <option value="dicount">Better Discount</option>
                        <option value="off_price">Price: Low to High</option>
                        <option value="off_price">Price: High to Low</option>
                        <option value="rating">Customer Rating</option>
                    </Select>
                </Flex>
            </Flex>
    <Box w="96%" m="auto">
      
        <Flex borderTop={"1px solid #C1D0B5"} >
          <Sidebar/>
          <Men/>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"200px"} >
      <Button disabled={page == 1} display={page===1 ? "none" : "flex"} onClick={()=>setPage(prev => prev-1)}>{"< "}{"   "}{"Previous"}</Button>
      <Pagination setPage={setPage} totalPages={totalPages} page={page} limit={limit} />
      <Button disabled={page==roundPage} display={page===roundPage ? "none" : "flex"}  onClick={()=>setPage(prev => prev+1)}>{"Next"}{"   "}{" >"}</Button>
    </Flex>
    </Box>
    </>
  )
}
