import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Image,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    VStack,
    Divider,
  } from '@chakra-ui/react';
  import React from 'react';
  import {Icon} from '@chakra-ui/icons'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import {FaUserAlt} from 'react-icons/fa'
  import {FiHeart} from 'react-icons/fi'
  import {HiOutlineShoppingBag} from 'react-icons/hi'
  import logo from '../Assets/UD2.png'
import { useNavigate } from 'react-router-dom';
  
  export  function Navbar() {
    const { isOpen, onToggle,onOpen, onClose } = useDisclosure();
    const navigate = useNavigate()
 
  
  
    return (
      <Box position={"sticky"} top={"0"} >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 3 }}
        //   borderBottom={1}
        padding={"18px"}
        boxShadow='md'
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Image
             
             onClick={()=>navigate('/')}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')} src={logo} w={{base:"100px" , sm:"100px" , md:"100px", lg:"90px" , xl:"80px" , "2xl":"80px" }}   />
          
            {/* </Image> */}
            {/* <Image  src={logo} w="100px" /> */}
  
  
            <Flex alignItems={"center"}  display={{ base: 'none', md: 'none' , lg:"none" , xl:"flex" , "2xl" : "flex" }} ml={10}>
              <DesktopNav  />
            </Flex>
          </Flex>

          <Box w="40%" mr="60px"  display={{ base: 'none', sm:"none", md: 'flex' , lg:"flex", xl:"flex" , "2xl" : "flex"  }} >
            <Input border={"none"}  focusBorderColor='#EEEEEE' backgroundColor={"#faf8f8"} type='text' placeholder='Search for products,brands and more'/>
          </Box>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button> */}
            {/* <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button> */}
            {/* <FaUserAlt/> */}
          

            <VStack cursor={"pointer"} onClick={onOpen}>
            <FaUserAlt  />
            <label>Profile</label>
            </VStack>
            <VStack cursor={"pointer"}>
            <FiHeart  />
             <label>Wishlist</label>
            </VStack>
            <VStack cursor={"pointer"} onClick={()=>navigate('/bag')}>
            <HiOutlineShoppingBag  />
          
             <label >Bag</label>
            </VStack>
           
          </Stack>
        </Flex>
        
       

         <Modal  onClose={onClose} size={"xs"}  isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent  borderRadius={"0px"}>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody cursor={"pointer"} mt="10px">
            {/* <Lorem count={2} /> */}
            <Text fontWeight={"700"}>Welcome</Text>
            <Text>To access account and manage orders</Text>
            <Button mt="10px" fontSize={"15px"} bg="white" border={"1px solid #99A98F"} _hover={{border:"1px solid #D14D72"}} fontWeight={"600"} color={"#D14D72"} onClick={()=>navigate("/login")} >LOGIN/SIGNUP</Button>
            <br />
            <br />
            <Divider/>
            <Box>
              {/* <br/> */}
              <Text _hover={{color:"black", fontWeight:"700"}}>Orders</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>Wishlist</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>Gift Cards</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>Contact Us</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>UniqukDezynes Insider</Text>
            </Box>
            <br/>
            <Divider/>
            <Box pb="8px">
             
              <Text _hover={{color:"black", fontWeight:"700"}}>UniqukDezynes Credit</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>Coupons</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>Saved Cards</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>Saved VPA</Text>
              <Text _hover={{color:"black", fontWeight:"700"}}>Saved Addresses</Text>
              
            </Box>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
 
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack  direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box  key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={700}
                  color={"black"}
                //   fontSize={"17px"}
                //   fontWeight={"700"}
                  _hover={{
                    textDecoration: 'none',
                    color: "pink.500",

                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'MEN',
      href : "/products",
      children: [
        {
          label: 'Explore Design Work',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
      ],
    },
    {
      label: 'WOMEN',
      href : "/women",
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'HOME & LIVING',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
        label: 'KIDS',
        href : "#",
        children: [
          {
            label: 'Explore Design Work',
            subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: 'Up-and-coming Designers',
            href: '#',
          },
        ],
      },
      {
        label: 'HOME&LIVING',
        href : "#",
        children: [
          {
            label: 'Explore Design Work',
            subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: 'Up-and-coming Designers',
            href: '#',
          },
        ],
      },
      {
        label: 'BEAUTY',
        href : "#",
        children: [
          {
            label: 'Explore Design Work',
            subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: 'Up-and-coming Designers',
            href: '#',
          },
        ],
      },
      {
        label: 'STUDIO',
        href : "#",
        children: [
          {
            label: 'Explore Design Work',
            subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: 'Up-and-coming Designers',
            href: '#',
          },
        ],
      },
    // {
    //   label: 'BEAUTY',
    //   href: '#',
    // },
    // {
    //   label: 'STUDIO',
    //   href: '#',
    // },
  ];