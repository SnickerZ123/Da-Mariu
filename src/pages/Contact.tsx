import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Button,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Table,
  Tbody,
  Tr,
  Td,
  Divider,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCopy } from 'react-icons/fa'

const MotionBox = motion(Box)

const Contact = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const toast = useToast()

  const handleCall = () => {
    window.location.href = 'tel:+447916315855'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:martina.stancampiano@damariultd.com'
  }

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: `${type === 'phone' ? 'Phone number' : 'Email address'} copied!`,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
    }).catch((err) => {
      toast({
        title: 'Failed to copy',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
    })
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
          bgImage="url('/Da-Mariu/images/interior-exterior/sofa.jpg')"
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
                Contact Us
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                maxW="800px"
                mb={8}
                textShadow="0 1px 2px rgba(0,0,0,0.3)"
              >
                We'd Love to Hear From You
              </Text>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Contact Information Section */}
      <Container maxW="1200px" py={12} px={{ base: 4, md: 8 }}>
        <VStack spacing={12} align="stretch">
          {/* Contact Details */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {/* Address Card */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <VStack
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                spacing={4}
                align="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.2s"
                h="350px"
                w="100%"
                justify="center"
              >
                <Icon as={FaMapMarkerAlt} fontSize="4xl" color="olive.500" mb={2} />
                <Heading size="md" fontFamily="'Playfair Display', serif" mb={4}>
                  Visit Us
                </Heading>
                <VStack spacing={1} align="center">
                  <Text 
                    textAlign="center" 
                    color="gray.700" 
                    fontSize="lg"
                    fontWeight="medium"
                  >
                    Da Mariù
                  </Text>
                  <Text 
                    textAlign="center" 
                    color="gray.600" 
                    fontSize="md"
                  >
                    15 Wote Street
                  </Text>
                  <Text 
                    textAlign="center" 
                    color="gray.600" 
                    fontSize="md"
                  >
                    Basingstoke, RG21 7NE
                  </Text>
                </VStack>
              </VStack>
            </MotionBox>

            {/* Phone Card */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VStack
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                spacing={4}
                align="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.2s"
                h="350px"
                w="100%"
                justify="center"
              >
                <Icon as={FaPhone} fontSize="4xl" color="olive.500" mb={2} />
                <Heading size="md" fontFamily="'Playfair Display', serif" mb={4}>
                  Call Us
                </Heading>
                <VStack spacing={1} align="center">
                  <Button
                    variant="ghost"
                    onClick={handleCall}
                    color="gray.700"
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="medium"
                    px={2}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    maxW="100%"
                  >
                    +44 791 631 5855
                  </Button>
                  <IconButton
                    aria-label="Copy phone number"
                    icon={<FaCopy />}
                    size="sm"
                    variant="ghost"
                    colorScheme="olive"
                    onClick={() => handleCopy('+447916315855', 'phone')}
                  />
                  <Text fontSize="md" color="gray.600" textAlign="center">
                    For reservations and
                  </Text>
                  <Text fontSize="md" color="gray.600" textAlign="center">
                    general inquiries
                  </Text>
                </VStack>
              </VStack>
            </MotionBox>

            {/* Email Card */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <VStack
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                spacing={4}
                align="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.2s"
                h="350px"
                w="100%"
                justify="center"
              >
                <Icon as={FaEnvelope} fontSize="4xl" color="olive.500" mb={2} />
                <Heading size="md" fontFamily="'Playfair Display', serif" mb={4}>
                  Email Us
                </Heading>
                <VStack spacing={1} align="center">
                  <Button
                    variant="ghost"
                    onClick={handleEmail}
                    color="gray.700"
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="medium"
                    px={2}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    maxW="100%"
                  >
                    martina.stancampiano@damariultd.com
                  </Button>
                  <IconButton
                    aria-label="Copy email address"
                    icon={<FaCopy />}
                    size="sm"
                    variant="ghost"
                    colorScheme="olive"
                    onClick={() => handleCopy('martina.stancampiano@damariultd.com', 'email')}
                  />
                  <Text fontSize="md" color="gray.600" textAlign="center">
                    For special events and
                  </Text>
                  <Text fontSize="md" color="gray.600" textAlign="center">
                    business inquiries
                  </Text>
                </VStack>
              </VStack>
            </MotionBox>
          </SimpleGrid>

          {/* Terms and Conditions Section */}
          <Box
            bg={cardBg}
            p={{ base: 4, md: 8 }}
            borderRadius="xl"
            boxShadow="lg"
            maxW="1000px"
            mx="auto"
            mt={12}
            w="100%"
          >
            <VStack spacing={6} align="center" w="100%">
              <Heading 
                size="lg" 
                fontFamily="'Playfair Display', serif" 
                color="olive.700"
                textAlign="center"
              >
                Terms and Conditions
              </Heading>
              <Text 
                color="gray.700" 
                fontSize="md" 
                textAlign="center"
                w="100%"
              >
                For bookings of 5 people or more, a deposit of £10 per person is required to secure the table.
              </Text>
              <Text 
                color="gray.700" 
                fontSize="md" 
                textAlign="center"
                w="100%"
              >
                If you need to cancel or make any changes to your booking, you must let us know at least 48 hours before your booking date.
              </Text>
              <Text 
                color="gray.700" 
                fontSize="md" 
                textAlign="center"
                w="100%"
              >
                If changes or cancellations are made with less than 48 hours' notice, the £10 deposit per person will be non-refundable.
              </Text>
            </VStack>
          </Box>

          {/* Opening Hours Section */}
          <Box
            bg={cardBg}
            p={{ base: 4, md: 8 }}
            borderRadius="xl"
            boxShadow="lg"
            mb={8}
          >
            <VStack spacing={6} align="stretch">
              <HStack spacing={3} align="center">
                <Icon as={FaClock} fontSize="3xl" color="olive.500" />
                <Heading size="md" fontFamily="'Playfair Display', serif">
                  Opening Hours
                </Heading>
              </HStack>
              
              <Box overflowX="auto">
                <Table variant="simple" size="sm">
                  <Tbody>
                    <Tr>
                      <Td pl={0} pr={{ base: 4, md: 8 }} color="gray.600" fontWeight="medium">Monday</Td>
                      <Td pl={0} color="gray.500">Closed</Td>
                    </Tr>
                    <Tr>
                      <Td pl={0} pr={{ base: 4, md: 8 }} color="gray.600" fontWeight="medium">Tuesday</Td>
                      <Td pl={0} color="gray.500">8:00 AM – 10:00 PM</Td>
                    </Tr>
                    <Tr>
                      <Td pl={0} pr={{ base: 4, md: 8 }} color="gray.600" fontWeight="medium">Wednesday</Td>
                      <Td pl={0} color="gray.500">8:00 AM – 10:00 PM</Td>
                    </Tr>
                    <Tr>
                      <Td pl={0} pr={{ base: 4, md: 8 }} color="gray.600" fontWeight="medium">Thursday</Td>
                      <Td pl={0} color="gray.500">8:00 AM – 10:00 PM</Td>
                    </Tr>
                    <Tr>
                      <Td pl={0} pr={{ base: 4, md: 8 }} color="gray.600" fontWeight="medium">Friday</Td>
                      <Td pl={0} color="gray.500">8:00 AM – 10:00 PM</Td>
                    </Tr>
                    <Tr>
                      <Td pl={0} pr={{ base: 4, md: 8 }} color="gray.600" fontWeight="medium">Saturday</Td>
                      <Td pl={0} color="gray.500">8:00 AM – 10:00 PM</Td>
                    </Tr>
                    <Tr>
                      <Td pl={0} pr={{ base: 4, md: 8 }} color="gray.600" fontWeight="medium">Sunday</Td>
                      <Td pl={0} color="gray.500">10:00 AM – 9:00 PM</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </VStack>
          </Box>

          {/* Map Section */}
          <Box
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            bg={cardBg}
            h={{ base: "200px", md: "300px" }}
            opacity={0.9}
            _hover={{
              opacity: 1,
              boxShadow: 'xl',
            }}
            transition="all 0.2s"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.686461460118!2d-1.0895340233771924!3d51.26274637179726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874212c4e98c8f9%3A0x9176e59c3aed3c89!2s15%20Wote%20St%2C%20Basingstoke%20RG21%207NE%2C%20UK!5e0!3m2!1sen!2sus!4v1710284947482!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 