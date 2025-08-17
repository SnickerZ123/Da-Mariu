import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Icon,
  Divider,
  useColorModeValue,
  Badge,
  Grid,
  GridItem,
  Button,
  HStack,
  SlideFade,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaLeaf, 
  FaPepperHot, 
  FaUtensils, 
  FaPizzaSlice, 
  FaCarrot, 
  FaWineGlassAlt,
  FaCookie,
  FaStar,
  FaCoffee,
  FaGlassWhiskey,
  FaGlassMartini,
} from 'react-icons/fa';
import { GiNoodles, GiBowlOfRice, GiFrenchFries, GiSodaCan, GiInfo } from 'react-icons/gi';
import { TbGlassFullFilled } from 'react-icons/tb';
import { InfoIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

interface PriceOption {
  size?: string;
  price: string;
}

interface MenuItem {
  name: string;
  price: string | PriceOption[];
  description?: string;
  isVegetarian?: boolean;
  spiceLevel?: number;
}

interface MenuSection {
  title: string;
  icon: any;
  ref: React.RefObject<HTMLDivElement>;
  items: MenuItem[];
}

// Menu sections data
const foodSections = [
  { id: 'starters', title: 'Starters' },
  { id: 'mains', title: 'Main Courses' },
  { id: 'sides', title: 'Sides' },
  { id: 'pizzas', title: 'Pizzas' },
  { id: 'salads', title: 'Salads' },
];

const drinkSections = [
  { id: 'hot-drinks', title: 'Hot Drinks' },
  { id: 'cold-drinks', title: 'Cold Drinks' },
  { id: 'juices', title: 'Juices' },
  { id: 'bonus-drinks', title: 'Bonus Drinks' },
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState('food');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const navBg = useColorModeValue('white', 'gray.800');
  const activeButtonBg = useColorModeValue('olive.500', 'olive.400');
  const inactiveButtonBg = useColorModeValue('gray.100', 'gray.700');
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Create refs for each section
  const sectionRefs = {
    starters: useRef<HTMLDivElement>(null),
    mains: useRef<HTMLDivElement>(null),
    pizzas: useRef<HTMLDivElement>(null),
    sides: useRef<HTMLDivElement>(null),
    salads: useRef<HTMLDivElement>(null),
    'hot-drinks': useRef<HTMLDivElement>(null),
    'cold-drinks': useRef<HTMLDivElement>(null),
    juices: useRef<HTMLDivElement>(null),
    'bonus-drinks': useRef<HTMLDivElement>(null),
  };

  const menuSections: MenuSection[] = [
    {
      title: "Starters",
      icon: FaStar,
      ref: sectionRefs.starters,
      items: [
        {
          name: "Bruschetta",
          price: "£7.99",
          description: "Cherry tomatoes, bufala mozzarella, prosciutto crudo, garlic, basil"
        },
        {
          name: "Tagliere Mariù",
          price: "£10.90",
          description: "Cold cuts, cheese, olives, artichokes, sun-dried tomatoes, bread"
        },
        {
          name: "Antipasto Caldo",
          price: "£7.90",
          description: "Arancine, panelle, cazzilli"
        },
        {
          name: "Rustico",
          price: "£9.90",
          description: "Aubergine caponata, bufala mozzarella, bread",
          isVegetarian: true
        },
        {
          name: "Ortolano",
          price: "£7.99",
          description: "Fried vegetables with tartare dip",
          isVegetarian: true
        },
        {
          name: "Zuppa di Cozze",
          price: "£10.90",
          description: "Mussel soup with tomato, garlic, basil, bread"
        },
        {
          name: "Sformato di Melanzane",
          price: "£10.90",
          description: "Fried aubergine flan with tomato, basil, ham, mozzarella"
        },
        {
          name: "Olive Nocellara",
          price: "£6.99",
          description: "Green olives",
          isVegetarian: true
        },
        {
          name: "Tagliere di Formaggi",
          price: "£13.90",
          description: "Cheese selection with jam & bread",
          isVegetarian: true
        },
        {
          name: "Coppo Fritto",
          price: "£19.90",
          description: "Fried seafood with sriracha mayo",
          spiceLevel: 2
        },
        {
          name: "Calamari Fritti",
          price: "£10.90",
          description: "Fried squid with tartare sauce"
        },
        {
          name: "Cocktail di Gamberi",
          price: "£12.90",
          description: "Prawns cocktail salad with bread"
        },
        {
          name: "Carpaccio di Bresaola",
          price: "£15.90",
          description: "Bresaola, rocket, grana cheese, balsamic"
        },
        {
          name: "Pane Pizza",
          price: [
            { size: "Small", price: "£4.90" },
            { size: "Large", price: "£7.90" }
          ],
          description: "Pizza bread with garlic & cheese",
          isVegetarian: true
        },
        {
          name: "Addiction Sauce",
          price: "£2.00",
          description: "Tartare and sriracha",
          spiceLevel: 2
        }
      ]
    },
    {
      title: "Main Courses",
      icon: GiNoodles,
      ref: sectionRefs.mains,
      items: [
        {
          name: "Lasagna",
          price: "£13.90",
          description: "Ragù, béchamel, grana padano"
        },
        {
          name: "Carbonara Spaghetti",
          price: "£13.90",
          description: "Eggs, guanciale, pecorino"
        },
        {
          name: "Norma Paccheri",
          price: "£12.90",
          description: "Tomato, fried aubergines, ricotta",
          isVegetarian: true
        },
        {
          name: "Mare & Monti Paccheri",
          price: "£15.90",
          description: "Prawns, cherry tomatoes, courgettes"
        },
        {
          name: "Ragù Pappardelle",
          price: "£13.90",
          description: "Homemade beef ragù"
        },
        {
          name: "Scoglio Spaghetti",
          price: "£15.90",
          description: "Seafood spaghetti"
        },
        {
          name: "Pollo a Cotoletta",
          price: "£14.90",
          description: "Breaded chicken with fries, salad"
        },
        {
          name: "Tagliata di Manzo",
          price: "£21.90",
          description: "Ribeye with fries, rocket, grana padano and sriracha mayo",
        },
        {
          name: "Salmone Grigliato",
          price: "£21.90",
          description: "Garlic & chilli broccoli, lemon cream",
          spiceLevel: 1
        },
        {
          name: "Salsiccia Grigliata",
          price: "£15.90",
          description: "Sausages with chilli friarielli",
          spiceLevel: 1
        },
        {
          name: "Grigliata di Pesce",
          price: "£27.90",
          description: "Mixed grilled seafood"
        },
        {
          name: "Risotto alla Marinara",
          price: "£19.90",
          description: "Seafood risotto"
        },
        {
          name: "Pappardelle Porcini",
          price: "£17.90",
          description: "Porcini mushrooms, truffle, mozzarella",
          isVegetarian: true
        },
        {
          name: "Zuppa di Pesce",
          price: "£24.90",
          description: "Spicy seafood soup",
          spiceLevel: 2
        },
        {
          name: "Paccheri al Salmone",
          price: "£16.90",
          description: "Salmon pasta with chilli flakes",
          spiceLevel: 1
        },
        {
          name: "Grigliata di Carne",
          price: [
            { size: "Regular", price: "£26.90" },
            { size: "Large", price: "£49.90" }
          ],
          description: "Mixed grilled meat platter"
        }
      ]
    },
    {
      title: "Sides",
      icon: GiFrenchFries,
      ref: sectionRefs.sides,
      items: [
        {
          name: "Patate al Forno",
          price: "£5.90",
          description: "Roast potatoes with garlic & herbs",
          isVegetarian: true
        },
        {
          name: "Patatine Fritte",
          price: "£4.50",
          description: "Fries",
          isVegetarian: true
        },
        {
          name: "Funghi Trifolati",
          price: "£5.90",
          description: "Mushrooms with garlic, parsley",
          isVegetarian: true
        },
        {
          name: "Broccoli",
          price: "£6.90",
          description: "Broccoli with garlic & chilli",
          isVegetarian: true,
          spiceLevel: 1
        }
      ]
    },
    {
      title: "Pizza - Classic",
      icon: FaPizzaSlice,
      ref: sectionRefs.pizzas,
      items: [
        {
          name: "Margherita",
          price: "£10.90",
          isVegetarian: true
        },
        {
          name: "Marinara",
          price: "£12.90",
          isVegetarian: true
        },
        {
          name: "Diavola",
          price: "£12.90",
          spiceLevel: 1
        },
        {
          name: "Romana",
          price: "£12.90"
        },
        {
          name: "Calzone",
          price: "£14.90"
        },
        {
          name: "Parmigiana",
          price: "£14.00",
          isVegetarian: true
        },
        {
          name: "4 Formaggi",
          price: "£15.90",
          isVegetarian: true
        },
        {
          name: "Vegetariana",
          price: "£14.90",
          isVegetarian: true
        }
      ]
    },
    {
      title: "Pizza - Special",
      icon: FaPizzaSlice,
      ref: sectionRefs.pizzas,
      items: [
        {
          name: "Friarielli",
          price: "£16.90",
          spiceLevel: 1
        },
        {
          name: "San Daniele",
          price: "£15.90"
        },
        {
          name: "Marci Special",
          price: "£15.90",
          spiceLevel: 1
        },
        {
          name: "Mariù Special",
          price: "£15.90"
        },
        {
          name: "Bufalina",
          price: "£16.90"
        },
        {
          name: "Pistacchiosa",
          price: "£16.90"
        },
        {
          name: "Valtellina",
          price: "£16.90"
        },
        {
          name: "Nonnina",
          price: "£15.90"
        },
        {
          name: "Frutti di Mare",
          price: "£18.90",
          spiceLevel: 1
        },
        {
          name: "Salmone",
          price: "£17.90"
        },
        {
          name: "Calabrese",
          price: "£16.90",
          spiceLevel: 2
        }
      ]
    },
    {
      title: "Salads",
      icon: FaCarrot,
      ref: sectionRefs.salads,
      items: [
        {
          name: "Insalata della Casa",
          price: "£12.90"
        },
        {
          name: "Mediterranea",
          price: "£13.90"
        },
        {
          name: "Primavera",
          price: "£14.90"
        },
        {
          name: "Valtellina",
          price: "£14.90"
        },
        {
          name: "Siciliana",
          price: "£11.00",
          isVegetarian: true
        }
      ]
    },
    {
      title: "Hot Drinks",
      icon: FaCoffee,
      ref: sectionRefs['hot-drinks'],
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
      ref: sectionRefs['cold-drinks'],
      items: [
        { name: "Sparkling Water", price: "£4.50", description: "500ml" },
        { name: "Still Water", price: "£4.50", description: "500ml" },
        { name: "CocaCola / Zero", price: "£4.50", description: "330ml" },
        { name: "Fanta / Sprite Zero", price: "£4.50", description: "330ml" },
        { name: "Crodino", price: "£4.50" },
        { name: "Tonic Water", price: "£4.50", description: "200ml" },
        { name: "San Pellegrino Limonata", price: "£4.50", description: "330ml" },
        { name: "Estathé", price: [
            { size: "Peach", price: "£3.90" },
            { size: "Lemon", price: "£4.20" }
          ], description: "330ml" },
        { name: "Ice Latte", price: "£4.20" },
        { name: "Ice Latte with Syrup", price: "£4.70" },
        { name: "Red Bull", price: "£4.50", description: "250ml" }
      ]
    },
    {
      title: "Juices",
      icon: TbGlassFullFilled,
      ref: sectionRefs.juices,
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
      ref: sectionRefs['bonus-drinks'],
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
  ];

  const pizzaExtras = [
    { name: "Onion", price: "£1.50" },
    { name: "Mushroom", price: "£2.50" },
    { name: "Salame", price: "£2.50" },
    { name: "Nduja", price: "£3.00" },
    { name: "Mozzarella", price: "£2.50" },
    { name: "Pros. Crudo", price: "£3.00" },
    { name: "Bufala", price: "£4.00" },
    { name: "Olives", price: "£2.50" },
    { name: "Capers", price: "£2.00" },
    { name: "Anchovies", price: "£2.50" },
    { name: "Aubergines", price: "£2.50" },
    { name: "Tuna", price: "£3.50" },
    { name: "Bresaola", price: "£4.50" },
    { name: "Ham", price: "£2.50" }
  ];

  // Simple scroll function
  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref?.current) {
      const yOffset = -100; // Offset for header
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Function to render spice level indicators
  const renderSpiceLevel = (level: number) => {
    const spiceLevelText = level === 1 ? "Mildly Spicy" : "Spicy";
    return (
      <Box display="inline-block">
        <Tooltip label={spiceLevelText}>
          <Box>
            <HStack spacing={0.5}>
              {[...Array(level)].map((_, i) => (
                <Icon key={i} as={FaPepperHot} color="red.500" boxSize={3} />
              ))}
            </HStack>
          </Box>
        </Tooltip>
      </Box>
    );
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
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
          bgImage="url('https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&q=80')"
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
                Our Menu
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                maxW="800px"
                mb={8}
                textShadow="0 1px 2px rgba(0,0,0,0.3)"
              >
                Authentic Italian Cuisine & Beverages
              </Text>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Main Menu Navigation */}
      <Container maxW={{ base: "95%", sm: "85%", md: "80%", lg: "900px" }} px={4}>
        <Card mb={8} variant="outline" bg="white" boxShadow="sm">
          <CardHeader py={5} borderBottom="1px" borderColor="gray.100">
            <Flex justify="center" gap={4}>
              <Button
                leftIcon={<Icon as={FaUtensils} boxSize={4} />}
                onClick={() => setActiveSection('food')}
                bg={activeSection === 'food' ? 'olive.500' : 'white'}
                color={activeSection === 'food' ? 'white' : 'gray.600'}
                _hover={{
                  bg: activeSection === 'food' ? 'olive.600' : 'gray.50',
                }}
                size="md"
                px={6}
                borderWidth="1px"
                borderColor={activeSection === 'food' ? 'olive.500' : 'gray.200'}
                transition="all 0.2s"
                fontWeight="medium"
                rounded="md"
              >
                Food Menu
              </Button>
              <Button
                leftIcon={<Icon as={FaCoffee} boxSize={4} />}
                onClick={() => setActiveSection('drinks')}
                bg={activeSection === 'drinks' ? 'olive.500' : 'white'}
                color={activeSection === 'drinks' ? 'white' : 'gray.600'}
                _hover={{
                  bg: activeSection === 'drinks' ? 'olive.600' : 'gray.50',
                }}
                size="md"
                px={6}
                borderWidth="1px"
                borderColor={activeSection === 'drinks' ? 'olive.500' : 'gray.200'}
                transition="all 0.2s"
                fontWeight="medium"
                rounded="md"
              >
                Drinks Menu
              </Button>
            </Flex>
          </CardHeader>
          <CardBody pt={6} pb={4}>
            <Box maxW="800px" width="100%" mx="auto">
              <SimpleGrid 
                columns={{ base: activeSection === 'food' ? 5 : 4, md: activeSection === 'food' ? 5 : 4 }} 
                spacing={4} 
                width="100%">
                {(activeSection === 'food' ? foodSections : drinkSections).map((section) => (
                  <Box key={section.id} width="100%">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection(section.id)}
                      bg="gray.50"
                      color="gray.700"
                      _hover={{
                        bg: 'olive.50',
                        color: 'olive.700',
                        transform: 'translateY(-1px)',
                      }}
                      _active={{
                        bg: 'olive.100',
                      }}
                      height="40px"
                      fontSize="sm"
                      fontWeight="medium"
                      transition="all 0.2s"
                      textAlign="center"
                      px={3}
                      width="100%"
                      rounded="md"
                    >
                      {section.title}
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box textAlign="center" mt={6} pb={2}>
              <Button
                as="a"
                href="/menu/Menu_2025_07_10.pdf"
                download="Da_Mariu_Menu.pdf"
                size="md"
                colorScheme="olive"
                leftIcon={<FaUtensils />}
                mb={8}
                px={6}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.2s"
              >
                Download Full Menu
              </Button>
            </Box>
          </CardBody>
        </Card>

        {/* Content Area */}
        <SlideFade in={true} offsetY="20px">
          <Box mb={10}>
            <Heading
              size="xl"
              fontFamily="Playfair Display"
              color="olive.700"
              textAlign="center"
              mb={6}
            >
              {activeSection === 'food' ? 'Food Menu' : 'Drinks Menu'}
            </Heading>

            {/* Legend - Only show for food menu */}
            {activeSection === 'food' && (
              <Flex justify="center" gap={6} wrap="wrap" mb={6}>
                <Flex align="center" gap={2}>
                  <Icon as={FaLeaf} color="green.500" />
                  <Text fontSize="sm">Vegetarian</Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Icon as={FaPepperHot} color="red.500" />
                  <Text fontSize="sm">Spicy</Text>
                </Flex>
              </Flex>
            )}

            {menuSections
              .filter(section => {
                if (activeSection === 'food') {
                  return ['Starters', 'Main Courses', 'Sides', 'Pizza - Classic', 'Pizza - Special', 'Salads'].includes(section.title);
                } else {
                  return ['Hot Drinks', 'Cold Drinks', 'Juices', 'Bonus Drinks'].includes(section.title);
                }
              })
              .map((section, index, filteredSections) => (
                <Box key={section.title}>
                  <Box 
                    ref={sectionRefs[section.title === 'Main Courses' ? 'mains' : 
                           section.title.startsWith('Pizza') ? 'pizzas' : 
                           section.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')]}
                    mb={8}
                  >
                    <Card variant="outline" mb={6}>
                      <CardHeader py={3}>
                        <Flex align="center">
                          <Icon as={section.icon} fontSize="xl" color="olive.500" mr={2} />
                          <Heading size="md">
                            {section.title}
                          </Heading>
                        </Flex>
                      </CardHeader>
                      <CardBody pt={2}>
                        <SimpleGrid 
                          columns={{ base: 1, sm: 2, lg: 3 }} 
                          spacing={{ base: 2, md: 4 }}
                          sx={{
                            '& > div': {
                              maxWidth: '100%'
                            }
                          }}
                        >
                          {section.items.map((item, itemIdx) => (
                            <Box
                              key={itemIdx}
                              p={3}
                              borderRadius="md"
                              borderWidth="1px"
                              borderColor="gray.200"
                              _hover={{ 
                                transform: 'translateY(-2px)',
                                shadow: 'sm',
                                borderColor: 'olive.200'
                              }}
                              transition="all 0.2s"
                              onClick={() => handleItemClick(item)}
                              cursor="pointer"
                            >
                              <Flex justify="space-between" align="start" gap={1}>
                                <VStack align="start" spacing={0.5} flex="1">
                                  <Flex align="center" gap={1} flexWrap="wrap">
                                    <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                                      {item.name}
                                    </Text>
                                    {item.description && (
                                      <div style={{
                                        backgroundColor: '#556B2F',
                                        color: 'white',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '11px',
                                        fontWeight: '500',
                                        opacity: '0.9',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                      }}>
                                        i
                                      </div>
                                    )}
                                  </Flex>
                                  {item.description && (
                                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" noOfLines={2}>
                                      {item.description}
                                    </Text>
                                  )}
                                  <Flex gap={2} mt={1}>
                                    {item.isVegetarian && (
                                      <Icon as={FaLeaf} color="green.500" boxSize={3} />
                                    )}
                                    {item.spiceLevel && renderSpiceLevel(item.spiceLevel)}
                                  </Flex>
                                </VStack>
                                <Box textAlign="right">
                                  {Array.isArray(item.price) ? (
                                    <VStack align="end" spacing={0.5}>
                                      {item.price.map((priceOption, idx) => (
                                        <Text key={idx} fontWeight="bold" color="olive.600" fontSize="sm" whiteSpace="nowrap">
                                          {priceOption.size && <Text as="span" fontWeight="normal" color="gray.600" mr={1}>{priceOption.size}:</Text>}
                                          {priceOption.price}
                                        </Text>
                                      ))}
                                    </VStack>
                                  ) : (
                                    <Text fontWeight="bold" color="olive.600" fontSize="sm" whiteSpace="nowrap">
                                      {item.price}
                                    </Text>
                                  )}
                                </Box>
                              </Flex>
                            </Box>
                          ))}
                        </SimpleGrid>
                      </CardBody>
                    </Card>
                  </Box>

                  {/* Insert Pizza Extras after Pizza - Special section */}
                  {activeSection === 'food' && section.title === 'Pizza - Special' && (
                    <Box w="100%" mb={8}>
                      <Card variant="outline">
                        <CardHeader py={3}>
                          <Flex align="center">
                            <Icon as={FaPizzaSlice} fontSize="xl" color="olive.500" mr={2} />
                            <Heading size="md">Pizza Extras</Heading>
                          </Flex>
                        </CardHeader>
                        <CardBody pt={2}>
                          <SimpleGrid 
                            columns={{ base: 2, sm: 3, md: 4 }} 
                            spacing={3}
                            fontSize="sm"
                          >
                            {pizzaExtras.map((extra, idx) => (
                              <Box
                                key={idx}
                                p={3}
                                borderRadius="md"
                                borderWidth="1px"
                                borderColor="gray.200"
                                _hover={{ 
                                  transform: 'translateY(-2px)',
                                  shadow: 'sm',
                                  borderColor: 'olive.200'
                                }}
                                transition="all 0.2s"
                              >
                                <Flex justify="space-between" align="center" gap={2}>
                                  <Text fontSize="md" fontWeight="medium" color="gray.700">
                                    {extra.name}
                                  </Text>
                                  <Text fontWeight="bold" color="olive.600" fontSize="sm" whiteSpace="nowrap">
                                    {extra.price}
                                  </Text>
                                </Flex>
                              </Box>
                            ))}
                          </SimpleGrid>
                          <Text mt={4} fontSize="xs" color="gray.600" textAlign="center">
                            All pizzas are seasoned with oil, oregano & basil.
                          </Text>
                        </CardBody>
                      </Card>
                    </Box>
                  )}
                </Box>
              ))}
          </Box>
        </SlideFade>
      </Container>

      {/* Modal for full item details */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent mx={4}>
          <ModalHeader>
            <Flex justify="space-between" align="center" pr={8}>
              <Text>{selectedItem?.name}</Text>
              <Text color="olive.500" ml={4}>{selectedItem?.price}</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedItem && (
              <VStack align="stretch" spacing={4}>
                {selectedItem.description && (
                  <Text fontSize="lg">{selectedItem.description}</Text>
                )}
                <Flex gap={3} align="center">
                  {selectedItem.isVegetarian && (
                    <Flex align="center" gap={1}>
                      <Icon as={FaLeaf} color="green.500" />
                      <Text fontSize="sm">Vegetarian</Text>
                    </Flex>
                  )}
                  {selectedItem.spiceLevel && (
                    <Flex align="center" gap={1}>
                      {renderSpiceLevel(selectedItem.spiceLevel)}
                      <Text fontSize="sm">Spicy</Text>
                    </Flex>
                  )}
                </Flex>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Menu; 

