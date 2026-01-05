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
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCopy, FaMobileAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

const Contact = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const toast = useToast()

  const handleCall = () => {
    window.location.href = 'tel:+447916315855'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:management.team@damariultd.com'
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
          bgImage="url('/images/interior-exterior/sofa.jpg')"
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
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
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
                spacing={6}
                align="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.2s"
                h="400px"
                w="100%"
                justify="flex-start"
                pt={12}
              >
                <VStack spacing={3}>
                  <Icon as={FaMapMarkerAlt} fontSize={{ base: "2xl", md: "3xl" }} color="olive.500" />
                  <Heading size="md" fontFamily="'Playfair Display', serif">
                    Visit Us
                  </Heading>
                </VStack>
                <VStack spacing={4} align="center" flex="1">
                  <VStack spacing={1} align="center">
                    <HStack spacing={2}>
                      <Icon as={FaMapMarkerAlt} color="olive.500" boxSize="14px" />
                      <Text color="gray.600" fontSize="sm">Address</Text>
                    </HStack>
                    <VStack spacing={1}>
                      <Text 
                        textAlign="center" 
                        color="gray.700" 
                        fontSize="sm"
                      >
                        Da Mariù
                      </Text>
                      <Text 
                        textAlign="center" 
                        color="gray.700" 
                        fontSize="sm"
                      >
                        15 Wote Street
                      </Text>
                      <Text 
                        textAlign="center" 
                        color="gray.700" 
                        fontSize="sm"
                      >
                        Basingstoke, RG21 7NE
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" textAlign="center" mt="auto" mb={{ base: 3, md: 4 }}>
                  Come visit us
                </Text>
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
                spacing={6}
                align="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.2s"
                h="400px"
                w="100%"
                justify="flex-start"
                pt={12}
              >
                <VStack spacing={3}>
                  <Icon as={FaPhone} fontSize="3xl" color="olive.500" />
                  <Heading size="md" fontFamily="'Playfair Display', serif">
                    Call Us
                  </Heading>
                </VStack>
                <VStack spacing={4} align="center" flex="1">
                  {/* Mobile Number Section */}
                  <VStack spacing={1} align="center">
                    <HStack spacing={2}>
                      <Icon as={FaMobileAlt} color="olive.500" boxSize="14px" />
                      <Text color="gray.600" fontSize="sm">Mobile</Text>
                    </HStack>
                    <HStack spacing={1}>
                      <Button
                        variant="ghost"
                        onClick={handleCall}
                        color="gray.700"
                        fontSize={{ base: "xs", md: "sm" }}
                        p={{ base: 1, md: 2 }}
                        height={{ base: "28px", md: "32px" }}
                        minW="0"
                      >
                        +44 791 631 5855
                      </Button>
                      <IconButton
                        aria-label="Copy phone number"
                        icon={<FaCopy />}
                        size="xs"
                        variant="ghost"
                        colorScheme="olive"
                        onClick={() => handleCopy('+447916315855', 'phone')}
                      />
                    </HStack>
                  </VStack>

                  <Divider width="60%" />

                  {/* Landline Section */}
                  <VStack spacing={1} align="center">
                    <HStack spacing={2}>
                      <Icon as={FaPhone} color="olive.500" boxSize="14px" />
                      <Text color="gray.600" fontSize="sm">Landline</Text>
                    </HStack>
                    <HStack spacing={1}>
                      <Button
                        variant="ghost"
                        color="gray.700"
                        fontSize={{ base: "xs", md: "sm" }}
                        p={{ base: 1, md: 2 }}
                        height={{ base: "28px", md: "32px" }}
                        minW="0"
                      >
                        01256 700335
                      </Button>
                      <IconButton
                        aria-label="Copy landline number"
                        icon={<FaCopy />}
                        size="xs"
                        variant="ghost"
                        colorScheme="olive"
                        onClick={() => handleCopy('01256 700335', 'phone')}
                      />
                    </HStack>
                  </VStack>
                </VStack>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" textAlign="center" mt="auto" mb={{ base: 3, md: 4 }}>
                  For reservations and general inquiries
                </Text>
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
                spacing={6}
                align="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.2s"
                h="400px"
                w="100%"
                justify="flex-start"
                pt={12}
              >
                <VStack spacing={3}>
                  <Icon as={FaEnvelope} fontSize="3xl" color="olive.500" />
                  <Heading size="md" fontFamily="'Playfair Display', serif">
                    Email Us
                  </Heading>
                </VStack>
                <VStack spacing={4} align="center" flex="1">
                  <VStack spacing={4} align="center">
                    <VStack spacing={1} align="center">
                      <HStack spacing={2}>
                        <Icon as={FaEnvelope} color="olive.500" boxSize="14px" />
                        <Text color="gray.600" fontSize="sm">Business Email</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <Button
                          variant="ghost"
                          onClick={handleEmail}
                          color="gray.700"
                          fontSize="sm"
                          p={2}
                          height="32px"
                          minW="0"
                        >
                          management.team@damariultd.com
                        </Button>
                        <IconButton
                          aria-label="Copy email address"
                          icon={<FaCopy />}
                          size="xs"
                          variant="ghost"
                          colorScheme="olive"
                          onClick={() => handleCopy('management.team@damariultd.com', 'email')}
                        />
                      </HStack>
                    </VStack>
                    <VStack spacing={1}>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" textAlign="center">
                        Contact us for:
                      </Text>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" textAlign="center">
                        • Reservations
                      </Text>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" textAlign="center">
                        • Other Business Enquiries
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" textAlign="center" mt="auto" mb={{ base: 3, md: 4 }}>
                  We usually respond within 24 hours
                </Text>
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
