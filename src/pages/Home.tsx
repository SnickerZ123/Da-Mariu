import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Container,
  Heading,
  Button,
  Flex,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const MotionBox = motion(Box)

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useBreakpointValue({ base: true, md: false })
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const carouselImages = [
    '/images/home-reel/carbonara.webp',
    '/images/home-reel/fish-dish.webp',
    '/images/home-reel/mixed-fish-dish.webp',
    '/images/home-reel/bolognese.webp',
    '/images/home-reel/desert.webp',
    '/images/home-reel/food-dish2.webp',
    '/images/home-reel/pasta-dish.webp'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative" h="100vh" overflow="hidden">
        {carouselImages.map((image, index) => (
          <Box
            key={index}
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            opacity={index === currentSlide ? 1 : 0}
            transition="opacity 1.2s ease-in-out"
            bgImage={`url(${image})`}
            bgPosition={{ base: "50% 35%", md: "center" }}
            bgSize="cover"
            bgRepeat="no-repeat"
            transform="scale(1.02)"
            sx={{
              imageRendering: "high-quality",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgGradient: 'linear(to-b, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
              mixBlendMode: 'multiply',
            }}
          />
        ))}

        <Container maxW="1200px" h="100%" position="relative" zIndex={1}>
          <Flex
            direction="column"
            justify="center"
            align="center"
            h="100%"
            textAlign="center"
            color="white"
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
                lineHeight="1.2"
                textShadow="0 2px 10px rgba(0,0,0,0.3)"
                letterSpacing="wide"
              >
                Welcome to Da Mariù
              </Heading>

              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontFamily="'Lato', sans-serif"
                maxW="800px"
                mb={8}
                textShadow="0 2px 8px rgba(0,0,0,0.4)"
                fontWeight="medium"
                letterSpacing="0.5px"
              >
                Italian warmth, passion, and flavour in every bite
              </Text>

              <Button
                size="lg"
                bg="whiteAlpha.200"
                color="white"
                border="2px solid white"
                _hover={{
                  bg: 'whiteAlpha.300',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                }}
                _active={{
                  bg: 'whiteAlpha.400',
                  transform: 'translateY(0)',
                }}
                px={10}
                py={6}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                onClick={() => navigate('/menu')}
                transition="all 0.3s"
                textTransform="uppercase"
                letterSpacing="1px"
                backdropFilter="blur(8px)"
                textShadow="0 2px 4px rgba(0,0,0,0.2)"
              >
                View Our Menu
              </Button>
            </MotionBox>
          </Flex>
        </Container>

        {/* Floating Award Badge */}
        <Box
          position="absolute"
          bottom={{ base: 4, md: 8 }}
          right={{ base: 4, md: 8 }}
          zIndex={3}
        >
          <Box
            onClick={onOpen}
            cursor="pointer"
            bg="whiteAlpha.200"
            backdropFilter="blur(10px)"
            p={3}
            borderRadius="xl"
            boxShadow="0 10px 30px rgba(0,0,0,0.4)"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              bg: "whiteAlpha.300",
            }}
          >
            <Box
              as="img"
              src="public/images/award/badge.webp"
              alt="Restaurant Guru 2025 – Top 10 Best Restaurant in Basingstoke"
              maxW={{ base: "80px", md: "120px" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Fullscreen Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={4}
            cursor="pointer"
            onClick={onClose}
          >
            <Box
              as="img"
              src="public/images/award/badge.webp"
              alt="Restaurant Guru 2025 Award"
              maxH="90vh"
              maxW="90vw"
              objectFit="contain"
              borderRadius="lg"
              boxShadow="0 20px 60px rgba(0,0,0,0.6)"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Home



