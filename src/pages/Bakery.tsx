import React, { useRef } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  useColorModeValue,
  Flex,
  Icon,
  Badge,
  Button,
  HStack,
  SlideFade,
} from '@chakra-ui/react'
import { motion, useScroll } from 'framer-motion'
import { FaLeaf, FaCoffee, FaWineGlass, FaWineGlassAlt, FaGlassWhiskey, FaCookie, FaStore, FaChevronRight } from 'react-icons/fa'
import { GiSodaCan, GiCakeSlice, GiOrangeSlice } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { TbGlassFullFilled } from 'react-icons/tb'

const MotionBox = motion(Box)

interface DrinkItem {
  name: string
  price: string
  description?: string
}

interface DrinkSection {
  title: string
  icon: any
  ref: React.RefObject<HTMLDivElement>
  items: DrinkItem[]
}

const Bakery = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const navBg = useColorModeValue('white', 'gray.800')
  
  // Refs for each section
  const hotDrinksRef = useRef(null)
  const coldDrinksRef = useRef(null)
  const juicesRef = useRef(null)
  const bonusDrinksRef = useRef(null)

  const sections: DrinkSection[] = [
    {
      title: "Hot Drinks",
      icon: FaCoffee,
      ref: hotDrinksRef,
      items: [
        { name: "Espresso", price: "£2.70" },
        { name: "Espresso Double", price: "£3.20" },
        { name: "Caffè Macchiato", price: "£3.20" },
        { name: "Americano", price: "£3.30" },
        { name: "Cappuccino", price: "£3.50" },
        { name: "Latte Macchiato", price: "£3.50" },
        { name: "Latte Bianco", price: "£3.40" },
        { name: "Flat White", price: "£3.90" },
        { name: "Hot Chocolate", price: "£4.00" },
        { name: "Black Tea", price: "£2.50" },
        { name: "Aromatic Tea", price: "£3.00" }
      ]
    },
    {
      title: "Cold Drinks",
      icon: FaGlassWhiskey,
      ref: coldDrinksRef,
      items: [
        { name: "Sparkling Water (500ml)", price: "£4.50" },
        { name: "Still Water (500ml)", price: "£4.50" },
        { name: "CocaCola / Zero (330ml)", price: "£4.50" },
        { name: "Fanta / Sprite Zero (330ml)", price: "£4.50" },
        { name: "Crodino", price: "£4.50" },
        { name: "Tonic Water (200ml)", price: "£4.50" },
        { name: "San Pellegrino Limonata (330ml)", price: "£4.50" },
        { name: "Estathé Peach / Lemon (33cl)", price: "£3.90 / £4.20" },
        { name: "Ice Latte", price: "£4.20" },
        { name: "Ice Latte with Syrup", price: "£4.70" },
        { name: "Red Bull (25cl)", price: "£4.50" }
      ]
    },
    {
      title: "Juices",
      icon: TbGlassFullFilled,
      ref: juicesRef,
      items: [
        { name: "Peach", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Pear", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Pineapple", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Tomato", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Orange", price: "£3.95", description: "Skipper - 200ml" }
      ]
    },
    {
      title: "Bonus Drinks",
      icon: GiSodaCan,
      ref: bonusDrinksRef,
      items: [
        { name: "Aranciata", price: "£4.90" },
        { name: "Spuma", price: "£4.90" },
        { name: "Gassosa", price: "£4.90" },
        { name: "La Rossa", price: "£4.90" },
        { name: "Bergamotto", price: "£4.90" },
        { name: "Melograno e Fiori di Sambuco", price: "£4.90" },
        { name: "Mandarino e Lime", price: "£4.90" },
        { name: "Cedrata", price: "£4.90" },
        { name: "Orzata", price: "£4.90" },
        { name: "Limone e Zenzero", price: "£4.90" },
        { name: "Limonata", price: "£4.90" },
        { name: "Chinotto", price: "£4.90" }
      ]
    }
  ]

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero Section */}
      <Box
        position="relative"
        h="60vh"
        mb={12}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80')"
          bgPosition="center"
          bgSize="cover"
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1
          }}
        />
        <Container maxW="1200px" h="100%" position="relative" zIndex={2}>
          <Flex
            direction="column"
            justify="center"
            align="center"
            h="100%"
            color="white"
            textAlign="center"
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                fontFamily="'Playfair Display', serif"
                mb={4}
                textShadow="0 2px 4px rgba(0,0,0,0.3)"
              >
                Drinks Menu
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                maxW="800px"
                mb={8}
                textShadow="0 1px 2px rgba(0,0,0,0.3)"
              >
                Italian Beverages
              </Text>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Navigation Bar */}
      <Box
        position="sticky"
        top="0"
        bg={navBg}
        boxShadow="sm"
        zIndex={100}
        py={4}
      >
        <Container maxW="1200px">
          <Flex
            overflowX="auto"
            justify="center"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {sections.map((section, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                mx={2}
                leftIcon={<Icon as={section.icon} />}
                onClick={() => scrollToSection(section.ref)}
                whiteSpace="nowrap"
                minW="auto"
                _hover={{ bg: 'olive.50', color: 'olive.600' }}
              >
                {section.title}
              </Button>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Content Sections */}
      <Container maxW="1200px" py={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          {sections.map((section, idx) => (
            <Box key={idx} w="100%" ref={section.ref} pt={16} mt={-16}>
              <Flex align="center" mb={8}>
                <Icon as={section.icon} fontSize={{ base: "xl", md: "2xl" }} color="olive.500" mr={3} />
                <Heading size={{ base: "md", md: "lg" }} fontFamily="'Playfair Display', serif">
                  {section.title}
                </Heading>
              </Flex>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {section.items.map((item, itemIdx) => (
                  <Box
                    key={itemIdx}
                    bg={cardBg}
                    p={6}
                    borderRadius="lg"
                    boxShadow="sm"
                    transition="all 0.2s"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                  >
                    <Flex justify="space-between" align="start">
                      <VStack align="start" spacing={1}>
                        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
                          {item.name}
                        </Text>
                        {item.description && (
                          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
                            {item.description}
                          </Text>
                        )}
                      </VStack>
                      <Text fontWeight="bold" color="olive.600" fontSize={{ base: "sm", md: "md" }}>
                        {item.price}
                      </Text>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Bakery 