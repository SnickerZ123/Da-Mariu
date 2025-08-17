import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Button,
  useColorModeValue,
  Icon,
  Flex,
  Divider,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaHeart, FaLeaf, FaUsers } from 'react-icons/fa'

const MotionBox = motion(Box)

interface StoryContent {
  title: string
  subtitle: string
  story: string[]
  values: {
    title: string
    description: string
  }[]
}

const content: Record<'en' | 'it', StoryContent> = {
  en: {
    title: 'Our Story',
    subtitle: 'A Taste of Authentic Italy in Every Bite',
    story: [
      'Da mariù is a family-run business idealized and built in 2024 by a Sicilian family who decided to change their life in 2019 by moving to the United Kingdom.',
      'Da mariù is not just a place where you can eat good Italian food our goal was to recreate a place where you can feel the warmth of the Italian culture at 360°.',
      'You can enjoy the timeless pizza margherita listening to the Italian classics and finishing with a good coffee.',
      'Love, passion and tradition are the basis of our cuisine.'
    ],
    values: [
      {
        title: 'Authenticity',
        description: 'We stay true to traditional Italian recipes and cooking methods, using only the finest ingredients.',
      },
      {
        title: 'Family',
        description: 'We treat every customer as part of our extended Italian family, creating a warm and welcoming atmosphere.',
      },
      {
        title: 'Quality',
        description: 'From our ingredients to our service, we never compromise on quality.',
      },
    ],
  },
  it: {
    title: 'La Nostra Storia',
    subtitle: 'Il Sapore dell\'Italia Autentica in Ogni Boccone',
    story: [
      'Da mariù è un family-run business ideato e realizzato nel 2024 da una famiglia siciliana che ha deciso di cambiare vita nel 2019 trasferendosi nel regno unito.',
      'Da mariù non è solo un posto dove poter mangiare del buon cibo italiano l\'obiettivo era ricreare un posto dove poter sentire il calore della cultura italiana a 360°.',
      'Potrete assaporare la intramontabile pizza margherita ascoltando dei classici italiani e finendo il tutto con un buon caffè.',
      'L\'amore la passione e la tradizione sono alla base della nostra cucina.'
    ],
    values: [
      {
        title: 'Autenticità',
        description: 'Rimaniamo fedeli alle ricette e ai metodi di cottura tradizionali italiani, utilizzando solo gli ingredienti migliori.',
      },
      {
        title: 'Famiglia',
        description: 'Trattiamo ogni cliente come parte della nostra famiglia italiana allargata, creando un\'atmosfera calda e accogliente.',
      },
      {
        title: 'Qualità',
        description: 'Dagli ingredienti al servizio, non scendiamo mai a compromessi sulla qualità.',
      },
    ],
  },
}

const About = () => {
  const [language, setLanguage] = useState<'en' | 'it'>('en')
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  const currentContent = content[language]

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
          bgImage="url('/images/interior-exterior/shop_exterior.webp')"
          bgPosition="center 70%"
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
                {currentContent.title}
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                maxW="800px"
                mb={8}
                textShadow="0 1px 2px rgba(0,0,0,0.3)"
              >
                {currentContent.subtitle}
              </Text>
              <Flex gap={4} justify="center">
                <Button
                  onClick={() => setLanguage('en')}
                  variant={language === 'en' ? 'solid' : 'outline'}
                  bg={language === 'en' ? 'white' : 'transparent'}
                  color={language === 'en' ? 'olive.700' : 'white'}
                  borderColor="white"
                  size="lg"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    bg: language === 'en' ? 'whiteAlpha.900' : 'whiteAlpha.200'
                  }}
                  transition="all 0.2s"
                  boxShadow={language === 'en' ? 'md' : 'none'}
                >
                  English
                </Button>
                <Button
                  onClick={() => setLanguage('it')}
                  variant={language === 'it' ? 'solid' : 'outline'}
                  bg={language === 'it' ? 'white' : 'transparent'}
                  color={language === 'it' ? 'olive.700' : 'white'}
                  borderColor="white"
                  size="lg"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    bg: language === 'it' ? 'whiteAlpha.900' : 'whiteAlpha.200'
                  }}
                  transition="all 0.2s"
                  boxShadow={language === 'it' ? 'md' : 'none'}
                >
                  Italiano
                </Button>
              </Flex>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxW="1200px" py={12}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
          {/* Story Section */}
          <Box>
            <VStack align="stretch" spacing={6}>
              {currentContent.story.map((paragraph, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
                    {paragraph}
                  </Text>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* Image Section */}
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              h="400px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
            >
              <Image
                src="/images/interior-exterior/inside.webp"
                alt="Restaurant Interior"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </MotionBox>
        </SimpleGrid>

        <Divider mb={16} />

        {/* Values Section */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {currentContent.values.map((value, index) => (
            <MotionBox
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                textAlign="center"
                transition="all 0.2s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                height="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Icon
                  as={index === 0 ? FaHeart : index === 1 ? FaUsers : FaLeaf}
                  fontSize="3xl"
                  color="olive.500"
                  mb={4}
                />
                <Heading
                  size="md"
                  fontFamily="'Playfair Display', serif"
                  mb={4}
                >
                  {value.title}
                </Heading>
                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  {value.description}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}


export default About 
