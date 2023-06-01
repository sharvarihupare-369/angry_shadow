import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'

export const Pagination = ({totalPages,setPage,limit,page}) => {
  
  let roundPage = Math.ceil(totalPages/limit)
  console.log(roundPage)
  
  return (
      <Flex gap="5px" >
        {
          new Array(roundPage).fill(0).map((el,ind)=>{
            return <Button height={"45px"} width={"15px"} bg={page === ind+1 ? "#2A2F4F" : "white"}   _hover={{border:"1px solid #C1D0B5"}} fontWeight={"bold"} color={page == ind + 1 ? "white" : "#2A2F4F"} onClick={()=>setPage(ind+1)}>{ind + 1}</Button>
          })
        }
      </Flex>
  )

}
