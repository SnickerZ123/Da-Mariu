import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Link,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  Container,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaBook } from 'react-icons/fa'

interface NavLinkProps {
  to: string
  children: React.ReactNode
  onClick?: () => void
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = 'tel:+447916315855'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:management.team@damariultd.com'
  }

  const NavLink = ({ to, children, onClick }: NavLinkProps) => (
    <Link
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      rounded="md"
      position="relative"
      color={location.pathname === to 
        ? (isScrolled ? "olive.700" : "white")
        : (isScrolled ? "gray.600" : "whiteAlpha.900")
      }
      fontWeight="medium"
      onClick={onClick}
      textShadow={isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.3)"}
      _hover={{
        textDecoration: 'none',
        color: isScrolled ? 'olive.600' : 'olive.100',
        _after: {
          width: '100%'
        }
      }}
      _after={{
        content: '""',
        position: 'absolute',
        width: location.pathname === to ? '100%' : '0%',
        height: '2px',
        bottom: '-2px',
        left: '0',
        backgroundColor: isScrolled ? 'olive.500' : 'white',
        transition: 'width 0.3s ease'
      }}
    >
      {children}
    </Link>
  )

  const MobileNavLink = ({ to, children, onClick }: NavLinkProps) => (
    <Link
      as={RouterLink}
      to={to}
      px={2}
      py={3}
      rounded="md"
      position="relative"
      color="gray.700"
      fontWeight="medium"
      onClick={onClick}
      display="block"
      _hover={{
        textDecoration: 'none',
        bg: 'gray.50',
        color: 'olive.600'
      }}
    >
      {children}
    </Link>
  )

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg={isScrolled ? "white" : "rgba(0, 0, 0, 0.2)"}
      transition="all 0.3s ease"
      boxShadow={isScrolled ? "sm" : "none"}
      backdropFilter="blur(8px)"
    >
      <Container maxW="1200px">
        <Flex py={4} align="center" justify="space-between">
          <Heading
            as={RouterLink}
            to="/"
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
            color={isScrolled ? "olive.700" : "white"}
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
            textShadow={isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.3)"}
            _hover={{ color: isScrolled ? 'olive.600' : 'olive.100' }}
            lineHeight="shorter"
          >
            Da Mariù
          </Heading>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <HStack spacing={6}>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </HStack>

            <HStack spacing={4}>
              <Popover placement="bottom" isLazy strategy="fixed">
                <PopoverTrigger>
                  <Button
                    leftIcon={<FaBook />}
                    bg={isScrolled ? "olive.500" : "whiteAlpha.900"}
                    color={isScrolled ? "white" : "olive.700"}
                    _hover={{
                      bg: isScrolled ? 'olive.600' : 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    _active={{
                      bg: isScrolled ? 'olive.700' : 'olive.50',
                    }}
                    fontSize="sm"
                    px={6}
                    transition="all 0.2s"
                    boxShadow="sm"
                    h="40px"
                  >
                    Book
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  w="auto" 
                  border="none" 
                  borderRadius="xl" 
                  overflow="hidden"
                  boxShadow="xl"
                  _focus={{
                    boxShadow: 'xl'
                  }}
                  display="flex"
                  justifyContent="center"
                >
                  <PopoverBody p={3}>
                    <ButtonGroup size="sm" spacing={2} variant="solid">
                      <Button
                        leftIcon={<FaPhone />}
                        onClick={handleCall}
                        bg={isScrolled ? "olive.500" : "olive.500"}
                        color="white"
                        _hover={{
                          bg: 'olive.600',
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}
                        _active={{
                          bg: 'olive.700',
                        }}
                        fontSize="sm"
                        px={4}
                        transition="all 0.2s"
                        boxShadow="sm"
                        h="40px"
                      >
                        Call Us
                      </Button>
                      <Button
                        leftIcon={<FaEnvelope />}
                        onClick={handleEmail}
                        bg="white"
                        color="olive.700"
                        _hover={{
                          bg: 'whiteAlpha.900',
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}
                        _active={{
                          bg: 'olive.50',
                        }}
                        fontSize="sm"
                        px={4}
                        transition="all 0.2s"
                        boxShadow="sm"
                        h="40px"
                      >
                        Email Us
                      </Button>
                    </ButtonGroup>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <HStack spacing={3}>
                <IconButton
                  as="a"
                  href="https://www.facebook.com/profile.php?id=61559794203093"
                  target="_blank"
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  variant="ghost"
                  color={isScrolled ? "gray.600" : "white"}
                  _hover={{
                    color: isScrolled ? 'olive.600' : 'olive.100',
                    bg: isScrolled ? 'olive.50' : 'whiteAlpha.200'
                  }}
                  size="sm"
                />
                <IconButton
                  as="a"
                  href="https://www.instagram.com/da.mariu"
                  target="_blank"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  variant="ghost"
                  color={isScrolled ? "gray.600" : "white"}
                  _hover={{
                    color: isScrolled ? 'olive.600' : 'olive.100',
                    bg: isScrolled ? 'olive.50' : 'whiteAlpha.200'
                  }}
                  size="sm"
                />
                <IconButton
                  as="a"
                  href="https://www.tiktok.com/@da.mariu"
                  target="_blank"
                  aria-label="TikTok"
                  icon={<FaTiktok />}
                  variant="ghost"
                  color={isScrolled ? "gray.600" : "white"}
                  _hover={{
                    color: isScrolled ? 'olive.600' : 'olive.100',
                    bg: isScrolled ? 'olive.50' : 'whiteAlpha.200'
                  }}
                  size="sm"
                />
              </HStack>
            </HStack>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="ghost"
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            color={isScrolled ? "gray.600" : "white"}
            _hover={{
              color: isScrolled ? 'olive.600' : 'olive.100',
              bg: isScrolled ? 'olive.50' : 'whiteAlpha.200'
            }}
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="gray.600" />
          <DrawerHeader
            fontFamily="'Playfair Display', serif"
            color="olive.700"
            borderBottomWidth="1px"
            borderBottomColor="gray.100"
          >
            Da Mariù
          </DrawerHeader>
          <DrawerBody pt={4}>
            <VStack spacing={2} align="stretch" mb={8}>
              <MobileNavLink to="/home" onClick={onClose}>Home</MobileNavLink>
              <MobileNavLink to="/menu" onClick={onClose}>Menu</MobileNavLink>
              <MobileNavLink to="/about" onClick={onClose}>About Us</MobileNavLink>
              <MobileNavLink to="/contact" onClick={onClose}>Contact</MobileNavLink>
            </VStack>

            <VStack spacing={4} mt={8}>
              <Button
                leftIcon={<FaPhone />}
                onClick={handleCall}
                colorScheme="olive"
                variant="solid"
                size="lg"
                w="full"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md'
                }}
                transition="all 0.2s"
              >
                Call Us
              </Button>
              <Button
                leftIcon={<FaEnvelope />}
                onClick={handleEmail}
                colorScheme="olive"
                variant="outline"
                size="lg"
                w="full"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md'
                }}
                transition="all 0.2s"
              >
                Email Us
              </Button>
            </VStack>

            <HStack spacing={6} justify="center" mt={8} pt={8} borderTopWidth="1px" borderTopColor="gray.100">
              <IconButton
                as="a"
                href="https://www.facebook.com/profile.php?id=61559794203093"
                target="_blank"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                colorScheme="olive"
                size="lg"
              />
              <IconButton
                as="a"
                href="https://www.instagram.com/da.mariu"
                target="_blank"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme="olive"
                size="lg"
              />
              <IconButton
                as="a"
                href="https://www.tiktok.com/@da.mariu"
                target="_blank"
                aria-label="TikTok"
                icon={<FaTiktok />}
                variant="ghost"
                colorScheme="olive"
                size="lg"
              />
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar 