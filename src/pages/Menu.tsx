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
  Alert,
  AlertIcon,
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
  FaTree,
  FaGift,
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
  id: string;
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
  { id: 'pizzas', title: 'Pizza' },
  { id: 'salads', title: 'Salads' },
];

const drinkSections = [
  { id: 'hot-drinks', title: 'Hot Drinks' },
  { id: 'cold-drinks', title: 'Cold Drinks' },
  { id: 'juices', title: 'Juices' },
  { id: 'bonus-drinks', title: 'Fizzy Drinks' },
];

// Christmas menu data
const christmasMenu = {
  starters: [
    { name: "Cozze al Vino Bianco", description: "Mussels cooked in white wine, garlic, parsley, cherry tomatoes and chilli, served with homemade bread" },
    { name: "Cocktail di Gamberi & Salmone Affumicato", description: "Cocktail of tiger prawns and smoked salmon served with mixed salad and cocktail sauce" },
    { name: "Tagliere Mariù", description: "Mixed platter with prosciutto crudo, mortadella, olives, artichokes, sun-dried tomatoes and a selection of Italian cheese, served with homemade bread" },
    { name: "Montanarine", description: "Fried pizza bites topped with tomato sauce, bufala mozzarella, grana padano cheese and fresh basil" },
  ],
  mains: [
    { name: "Spigola alla Mediterranea", description: "Grilled seabass fillet with cherry tomatoes, capers, olives, green beans, boiled potatoes, garlic, chilli and mint, served with a lemon cream sauce" },
    { name: "Paccheri alla Vodka", description: "Paccheri pasta with pancetta, onion, tomato sauce, double cream, vodka and parsley" },
    { name: "Paccheri Gamberi & Polpa di Granchio", description: "Paccheri pasta with prawns, crab meat, cherry tomatoes, garlic, chilli, parsley, mint and lemon zest on top" },
    { name: "Risotto del Contadino", description: "Risotto with mushrooms, cherry tomatoes, aubergines, broccoli and grana padano flakes" },
    { name: "Cotoletta alla Milanese", description: "300gr pork breaded cutlet Milanese style, served with rocket and grana padano cheese, fries and chimichurri sauce" },
  ],
  desserts: [
    { name: "Pandoro with Pistacchio Cream" },
    { name: "Chocolate Profiterole" },
    { name: "Pistacchio or Chocolate Cannolo" },
  ],
};

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
      id: "starters",
      title: "Starters",
      icon: FaStar,
      ref: sectionRefs.starters,
      items: [
        { name: "Montanarine", price: "£9.90", description: "Three fried pizza bites topped with tomato sauce, bufala mozzarella, grana padano cheese and fresh basil", isVegetarian: true },
        { name: "Bruschetta", price: "£7.99", description: "Cherry tomatoes, bufala mozzarella, prosciutto crudo, garlic and basil" },
        { name: "Carpaccio di Bresaola", price: "£15.90", description: "Bresaola, rocket, grana cheese, balsamic glaze and lemon served with breadsticks" },
        { name: "Tagliere Mariù", price: [{ size: "x1", price: "£10.90" }, { size: "x2", price: "£19.90" }], description: "Parma ham, salame, mortadella, olives, artichokes, sun-dried tomatoes and selection of Italian cheese served with bread" },
        { name: "Antipasto Caldo", price: "£12.90", description: "Arancine, panelle, cazzilli and aperi pasta cacio & pepe" },
        { name: "Bufala", price: "£10.90", description: "Bufala mozzarella, grilled bell peppers, basil pesto served with breadsticks", isVegetarian: true },
        { name: "Ortolano", price: "£9.90", description: "Mixed fried vegetables in batter served with sriracha mayo", isVegetarian: true },
        { name: "Zuppa di Cozze", price: "£10.90", description: "Mussel soup with tomato, garlic and basil served with bread" },
        { name: "Olive Nocellara", price: "£6.99", description: "Green olives", isVegetarian: true },
        { name: "Cestino di Pane con Olio & Aceto", price: "£8.90", description: "Homemade bread & breadsticks served with olive oil & balsamic vinegar", isVegetarian: true },
        { name: "Tagliere di Formaggi", price: "£13.90", description: "Mix of cheese served with selection of jam and bread", isVegetarian: true },
        { name: "Coppo Fritto", price: "£13.50", description: "Fried squid, king prawns and salmon served with sriracha mayo" },
        { name: "Pane Pizza", price: [{ size: "Small", price: "£5.90" }, { size: "Large", price: "£8.90" }], description: "Pizza bread with garlic and cheese", isVegetarian: true },
        { name: "Calamari Fritti", price: "£10.90", description: "Fried squid served with sriracha mayo" },
        { name: "Aperi Pasta Cacio e Pepe", price: "£9.90", description: "Fried pasta arancini filled with cacio e pepe served with tomato sauce, grana padano cheese and breadsticks", isVegetarian: true },
        { name: "Gamberoni", price: "£12.90", description: "Bruschetta with king prawns, garlic, cherry tomatoes, chilli and lemon zest", spiceLevel: 1 }
      ]
    },
    {
      id: "mains",
      title: "Main Courses",
      icon: GiNoodles,
      ref: sectionRefs.mains,
      items: [
        { name: "Lasagna", price: "£15.90", description: "Ragù, besciamella sauce and grana padano cheese" },
        { name: "Carbonara Spaghetti", price: "£15.90", description: "Eggs, guanciale, grana padano cheese, pecorino cheese and black pepper" },
        { name: "Paccheri con Crema di Spinaci", price: "£18.90", description: "Paccheri pasta with spinach cream, double cream, mushrooms, cherry tomatoes, garlic served with cheese and toasted almond flakes on top", isVegetarian: true },
        { name: "Norma Paccheri", price: "£15.90", description: "Paccheri pasta with tomato sauce, fried aubergines and salty ricotta cheese", isVegetarian: true },
        { name: "Paccheri ai Gamberoni", price: "£19.90", description: "Paccheri pasta with king prawns, cherry tomatoes, basil pesto and double cream" },
        { name: "Ragù Pappardelle", price: "£16.90", description: "Homemade ragù (mince beef, carrots, onion, tomato sauce and basil) with grana cheese on top" },
        { name: "Scoglio Spaghetti", price: "£19.90", description: "Mussels, squid, peeled king prawns, cherry tomatoes, tomato sauce, garlic, mint and oil, served with a king prawn on top" },
        { name: "Paccheri alla Boscaiola", price: "£18.90", description: "Paccheri pasta with Sicilian sausage, mushrooms, onion, tomato sauce, grana padano on top and parsley" },
        { name: "Risotto alla Marinara", price: "£21.90", description: "Risotto with mussels, squid, swordfish, prawns, salmon, cherry tomatoes, garlic, mint and basil" },
        { name: "Tagliata di Manzo", price: "£27.90", description: "Ribeye steak 10oz served with rocket, cherry tomatoes, grana padano on top, truffle oil and grana padano fries and sriracha mayo" },
        { name: "Salsiccia Grigliata", price: "£20.90", description: "Grilled Sicilian sausages with garlic & chilli seasoned friarielli served with roast potatoes", spiceLevel: 1 },
        { name: "Spezzatino di Carne & Salsiccia Siciliana", price: "£24.90", description: "Beef and Sicilian sausage stew with celery, red onion, tomato, carrots and potatoes served with homemade bread" },
        { name: "Pollo alla Pizzaiola", price: "£22.90", description: "Chicken breast in a \"picchi-pacchi\" tomato sauce (fast chopped plum tomato sauce), garlic, basil, oregano, ham, mozzarella on top served with rocket and grana padano flakes" },
        { name: "Salmone Grigliato", price: "£21.90", description: "Grilled salmon fillet with stir fried potatoes, mushrooms and broccoli (chilli and garlic) served with a lemon seasoned cream", spiceLevel: 1 },
        { name: "Grigliata di Pesce", price: [{ size: "x1", price: "£27.90" }, { size: "x2", price: "£54.90" }], description: "Mix of grilled king prawns, squid, seabass, salmon and swordfish served with salad and glaze (lemon, oil, garlic and oregano)" },
        { name: "Zuppa di Pesce", price: "£27.90", description: "Fish mix soup of mussels, salmon, calamari, seabass, prawns, garlic, chilli and mint served with homemade bread", spiceLevel: 1 }
      ]
    },
    {
      id: "sides",
      title: "Sides",
      icon: GiFrenchFries,
      ref: sectionRefs.sides,
      items: [
        { name: "Patate al Forno", price: "£6.90", description: "Roast potatoes with herbs and garlic", isVegetarian: true },
        { name: "Patatine al Tartufo", price: "£7.90", description: "Truffle oil and grana padano cheese fries", isVegetarian: true },
        { name: "Patatine Fritte", price: "£4.50", description: "Fries", isVegetarian: true },
        { name: "Funghi Trifolati", price: "£6.90", description: "Mushrooms with garlic oil, parsley and black pepper", isVegetarian: true },
        { name: "Broccoli", price: "£6.90", description: "Broccoli with garlic, chilli and oil", isVegetarian: true, spiceLevel: 1 },
        { name: "Mix Salad", price: "£6.90", description: "Mix leaves, cherry tomatoes, olives, onion and balsamic glaze", isVegetarian: true }
      ]
    },
    {
      id: "pizzas",
      title: "Pizza",
      icon: FaPizzaSlice,
      ref: sectionRefs.pizzas,
      items: [
        { name: "Margherita", price: "£12.90", description: "Tomato, mozzarella fior di latte, basil and olive oil", isVegetarian: true },
        { name: "Romana", price: "£15.90", description: "Tomato, mozzarella fior di latte and ham" },
        { name: "Diavola", price: "£15.90", description: "Tomato, mozzarella fior di latte and spicy salame", spiceLevel: 1 },
        { name: "Marinara", price: "£15.90", description: "Tomato, garlic, anchovies, capers, basil, oregano and olive oil" },
        { name: "Parmigiana", price: "£16.90", description: "Tomato, mozzarella fior di latte, fried aubergines, basil and grana padano", isVegetarian: true },
        { name: "4 Formaggi", price: "£16.90", description: "Mozzarella fior di latte, gorgonzola, scamorza and grana padano", isVegetarian: true },
        { name: "Vegetariana", price: "£16.90", description: "Tomato, mozzarella fior di latte, mushrooms, broccoli, peppers, onion and artichokes", isVegetarian: true },
        { name: "San Daniele", price: "£16.90", description: "Tomato, mozzarella fior di latte, prosciutto crudo, rocket and grana padano" },
        { name: "Valtellina", price: "£18.90", description: "Mozzarella fior di latte, cherry tomatoes, bresaola, rocket and grana padano" },
        { name: "Nonnina", price: "£17.90", description: "Tomato, mozzarella fior di latte, tuna, onion and olives" },
        { name: "Bufalina", price: "£18.90", description: "Tomato, bufala mozzarella, sun dried tomatoes, prosciutto crudo and basil pesto" },
        { name: "Pistacchiosa", price: "£18.90", description: "Tomato, bufala mozzarella, mortadella and pistachio pesto" },
        { name: "Rustica", price: "£19.90", description: "Tomato, mozzarella fior di latte, Sicilian sausage, peppers, onion, olives and pecorino cheese on top" },
        { name: "Pizza Carbonara", price: "£19.90", description: "Mozzarella fior di latte, egg yolk cream, parmigiano and pecorino cheese, guanciale and black pepper" },
        { name: "Friarielli", price: "£16.90", description: "Tomato, mozzarella fior di latte, sausages, chilli friarielli and scamorza cheese", spiceLevel: 1 },
        { name: "Marci Special", price: "£16.90", description: "Mozzarella, speck, spicy salame, scamorza and grana padano flakes", spiceLevel: 1 },
        { name: "Mariù Special", price: "£17.90", description: "Tomato, mozzarella, mushroom, artichokes and Sicilian sausage" },
        { name: "Calzone", price: "£16.90", description: "Tomato, mozzarella fior di latte and ham" },
        { name: "Calzone Fritto", price: "£19.90", description: "Fried calzone filled with tomato, mozzarella fior di latte, ham, grana padano cheese and basil, served with tomato sauce, bufala mozzarella and basil on top" },
        { name: "Calabrese", price: "£17.90", description: "Tomato, mozzarella fior di latte, spicy salame, nduja, olives, red onions and grana padano flakes on top", spiceLevel: 2 },
        { name: "Frutti di Mare", price: "£19.90", description: "Tomato sauce, garlic, mussels, king prawns, squid, salmon, mint and chilli flakes", spiceLevel: 1 },
        { name: "Salmone", price: "£19.90", description: "Tomato, mozzarella, cherry tomatoes, garlic, smoked salmon and rocket" }
      ]
    },
    {
      id: "salads",
      title: "Salads",
      icon: FaCarrot,
      ref: sectionRefs.salads,
      items: [
        { name: "Insalata della Casa", price: "£16.90", description: "Tomato, red onion, olives, anchovies, boiled potatoes and basil" },
        { name: "Mediterranea", price: "£16.90", description: "Tomato, tuna, lettuce, onion, capers and olives" },
        { name: "Primavera", price: "£16.90", description: "Rocket, cherry tomatoes, smoked salmon and bufala mozzarella" },
        { name: "Valtellina", price: "£16.90", description: "Rocket, bresaola, grana padano flakes, cherry tomatoes and walnuts" },
        { name: "Siciliana", price: "£16.90", description: "Fennel, orange, olives and spring onion", isVegetarian: true }
      ]
    },
    {
      id: "hot-drinks",
      title: "Hot Drinks",
      icon: FaCoffee,
      ref: sectionRefs['hot-drinks'],
      items: [
        { name: "Espresso", price: "£2.80" },
        { name: "Espresso Double", price: "£3.30" },
        { name: "Caffè Macchiato", price: "£3.50" },
        { name: "Americano", price: "£3.60" },
        { name: "Cappuccino", price: "£4.20" },
        { name: "Latte Macchiato", price: "£3.80" },
        { name: "Flat White", price: "£4.20" },
        { name: "Mocha", price: "£4.40" },
        { name: "Hot Chocolate", price: "£4.35" },
        { name: "Black Tea", price: "£2.50" },
        { name: "Aromatic Tea", price: "£3.00", description: "Peppermint or green tea" },
        { name: "Extra: Caramel, Vanilla or Hazelnut", price: "£0.60" },
        { name: "Extra: Oat Milk or Decaf", price: "£0.80" }
      ]
    },
    {
      id: "cold-drinks",
      title: "Cold Drinks",
      icon: FaGlassWhiskey,
      ref: sectionRefs['cold-drinks'],
      items: [
        { name: "Sparkling Water", price: "£4.20", description: "Glass bottle 500ml" },
        { name: "Still Water", price: "£3.90", description: "Glass bottle 500ml" },
        { name: "CocaCola / Zero", price: "£4.50", description: "330ml" },
        { name: "Fanta / Sprite Zero", price: "£4.50", description: "330ml" },
        { name: "Red Bull", price: "£4.50", description: "250ml" },
        { name: "Crodino", price: "£4.95" },
        { name: "Tonic Water", price: "£3.95", description: "Schweppes 200ml" },
        { name: "San Pellegrino Limonata", price: "£4.50", description: "330ml" },
        { name: "Estathé", price: "£4.50", description: "Peach or lemon - 330ml" },
        { name: "Iced Latte", price: "£4.20" },
        { name: "Iced Latte with Syrup", price: "£4.70" }
      ]
    },
    {
      id: "juices",
      title: "Juices",
      icon: TbGlassFullFilled,
      ref: sectionRefs.juices,
      items: [
        { name: "Peach", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Pear", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Pineapple", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Apple", price: "£3.95", description: "Skipper - 200ml" },
        { name: "Orange", price: "£3.95", description: "Skipper - 200ml" }
      ]
    },
    {
      id: "bonus-drinks",
      title: "Sicilian Fizzy Drinks",
      icon: GiSodaCan,
      ref: sectionRefs['bonus-drinks'],
      items: [
        { name: "Bona Spuma", price: "£4.90" },
        { name: "Bona Bergamotto", price: "£4.90" },
        { name: "Bona Melograno e Fiori di Sambuco", price: "£4.90" },
        { name: "Bona Limonata", price: "£4.90" },
        { name: "Bona Chinotto", price: "£4.90" }
      ]
    }
  ];

  const pizzaExtras = [
    { name: "Artichokes", price: "£3.00" },
    { name: "Rocket", price: "£2.50" },
    { name: "Onion", price: "£2.50" },
    { name: "Mushrooms", price: "£3.00" },
    { name: "Nduja", price: "£3.50" },
    { name: "Salame", price: "£3.00" },
    { name: "Spicy Salame", price: "£3.00" },
    { name: "Prosciutto Crudo", price: "£4.00" },
    { name: "Bufala", price: "£4.50" },
    { name: "Grated Parmigiano Pot", price: "£2.00" },
    { name: "Peppers", price: "£3.50" },
    { name: "Mozzarella", price: "£2.80" },
    { name: "Olives", price: "£2.50" },
    { name: "Capers", price: "£2.00" },
    { name: "Anchovies", price: "£3.00" },
    { name: "Aubergines", price: "£3.50" },
    { name: "Tuna", price: "£4.00" },
    { name: "Bresaola", price: "£4.50" },
    { name: "Ham", price: "£3.00" }
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

{/* Christmas Menu */}
<Container maxW={{ base: "95%", sm: "85%", md: "80%", lg: "900px" }} px={4}>
  <Card mb={6} variant="outline" bg="white" borderColor="red.200" boxShadow="sm">
    <CardHeader py={5} borderBottom="1px" borderColor="red.100" textAlign="center">
      <Flex align="center" justify="center" gap={2} mb={1}>
        <Icon as={FaTree} color="green.600" fontSize="2xl" />
        <Heading size="lg" fontFamily="'Playfair Display', serif" color="red.700">
          Christmas Menu
        </Heading>
        <Icon as={FaGift} color="red.500" fontSize="2xl" />
      </Flex>
      <Text fontSize="xl" fontWeight="bold" color="red.600">3 courses for £39.95</Text>
      <Text fontSize="sm" color="gray.600">Available from 17th November · Only by pre-order</Text>
      <Text fontSize="sm" color="gray.700" mt={1}>
        Welcome Prosecco glass with Italian crisps and a Limoncello shot included
      </Text>
    </CardHeader>
    <CardBody>
      <Alert status="info" borderRadius="md" mb={5}>
        <AlertIcon />
        <Text fontSize="sm">
          Bookings are now open for Christmas! We will also be open on Mondays throughout December, for parties only.
        </Text>
      </Alert>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {[
          { title: 'Starters', items: christmasMenu.starters },
          { title: 'Mains', items: christmasMenu.mains },
          { title: 'Desserts', items: christmasMenu.desserts },
        ].map((course) => (
          <Box key={course.title}>
            <Heading size="md" fontFamily="'Playfair Display', serif" color="green.700" textAlign="center" mb={3}>
              {course.title}
            </Heading>
            <VStack spacing={3} align="stretch">
              {course.items.map((item: { name: string; description?: string }) => (
                <Box key={item.name} textAlign="center">
                  <Text fontWeight="semibold" fontSize="sm" textTransform="uppercase" color="green.800">
                    {item.name}
                  </Text>
                  {item.description && (
                    <Text fontSize="xs" color="gray.600">{item.description}</Text>
                  )}
                </Box>
              ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </CardBody>
  </Card>
</Container>

{/* Main Menu Navigation */}
<Container maxW={{ base: "95%", sm: "85%", md: "80%", lg: "900px" }} px={4}>
  <Card mb={6} variant="outline" bg="white" boxShadow="sm">
    <CardHeader py={3} borderBottom="1px" borderColor="gray.100">
      <Flex justify="center" gap={4}>
        <Button
          leftIcon={<Icon as={FaUtensils} boxSize={4} />}
          onClick={() => setActiveSection("food")}
          bg={activeSection === "food" ? "olive.500" : "white"}
          color={activeSection === "food" ? "white" : "gray.600"}
          _hover={{ bg: activeSection === "food" ? "olive.600" : "gray.50" }}
          size="md"
          px={6}
          borderWidth="1px"
          borderColor={activeSection === "food" ? "olive.500" : "gray.200"}
          fontWeight="medium"
          rounded="md"
        >
          Food Menu
        </Button>

        <Button
          leftIcon={<Icon as={FaCoffee} boxSize={4} />}
          onClick={() => setActiveSection("drinks")}
          bg={activeSection === "drinks" ? "olive.500" : "white"}
          color={activeSection === "drinks" ? "white" : "gray.600"}
          _hover={{ bg: activeSection === "drinks" ? "olive.600" : "gray.50" }}
          size="md"
          px={6}
          borderWidth="1px"
          borderColor={activeSection === "drinks" ? "olive.500" : "gray.200"}
          fontWeight="medium"
          rounded="md"
        >
          Drinks Menu
        </Button>
      </Flex>
    </CardHeader>

    <CardBody pt={4} pb={4}>
      <Box maxW="800px" mx="auto">
        <SimpleGrid
          columns={{
            base: activeSection === "food" ? 3 : 2,
            sm: activeSection === "food" ? 5 : 4,
            md: activeSection === "food" ? 5 : 4,
          }}
          spacing={{ base: 2, sm: 3 }}
        >
          {(activeSection === "food" ? foodSections : drinkSections).map(
            (section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(section.id)}
                bg="gray.50"
                color="gray.700"
                _hover={{
                  bg: "olive.50",
                  color: "olive.700",
                  transform: "translateY(-1px)",
                }}
                _active={{ bg: "olive.100" }}
                height="36px"
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="medium"
                px={{ base: 2, sm: 3 }}
                rounded="md"
              >
                {section.title}
              </Button>
            )
          )}
        </SimpleGrid>
      </Box>

<Box mt={4} textAlign="center">
  <VStack spacing={3}>
    <Button
      as="a"
      href="/menu/Menu-21.pdf"
      download
      size={{ base: "sm", md: "md" }}
      colorScheme="olive"
      leftIcon={<FaUtensils />}
      px={{ base: 4, md: 6 }}
      width={{ base: "90%", sm: "auto" }}
      maxW="300px"
    >
      Download Full Menu
    </Button>

    <Button
      as="a"
      href="/menu/Lunch_Menu_2026_05_26.pdf"
      download
      size={{ base: "sm", md: "md" }}
      colorScheme="olive"
      leftIcon={<FaUtensils />}
      px={{ base: 4, md: 6 }}
      width={{ base: "90%", sm: "auto" }}
      maxW="300px"
    >
      Download Lunch Menu
    </Button>

    <Button
      as="a"
      href="/menu/Christmas_Menu_2026.pdf"
      download
      size={{ base: "sm", md: "md" }}
      colorScheme="red"
      leftIcon={<FaTree />}
      px={{ base: 4, md: 6 }}
      width={{ base: "90%", sm: "auto" }}
      maxW="300px"
    >
      Download Christmas Menu
    </Button>
  </VStack>
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
                  return foodSections.some(s => s.id === section.id);
                } else {
                  return drinkSections.some(s => s.id === section.id);
                }
              })
              .map((section, index, filteredSections) => (
                <Box key={section.title}>
                  <Box 
                    ref={sectionRefs[section.id as keyof typeof sectionRefs]}
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

                  {/* Insert Pizza Extras after Pizza section */}
                  {activeSection === 'food' && section.title === 'Pizza' && (
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
                          <Text mt={1} fontSize="xs" color="gray.600" textAlign="center">
                            🌾 Gluten free base available for pizzas and pastas — £3.50 supplement
                          </Text>
                        </CardBody>
                      </Card>
                    </Box>
                  )}
                </Box>
              ))}
          </Box>
        </SlideFade>

        <Box textAlign="center" mb={10}>
          <Text fontSize="xs" color="gray.600">Extra sriracha sauce £2.</Text>
          <Text fontSize="xs" color="gray.600">
            Our dishes are prepared in a kitchen where allergens are present, so we cannot guarantee that any food is completely free from traces. Menu descriptions do not always display all ingredients and allergens. Please ask a member of staff for more information.
          </Text>
          <Text fontSize="xs" color="gray.600" mt={1}>
            A discretionary service charge of 12.5% will be added to bills of tables of 6 people or more. All prices include VAT.
          </Text>
        </Box>
      </Container>

      {/* Modal for full item details */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent mx={4}>
          <ModalHeader>
            <Flex justify="space-between" align="center" pr={8} flexWrap="wrap">
              <Text>{selectedItem?.name}</Text>
              <Box textAlign="right" ml={4}>
                {selectedItem && Array.isArray(selectedItem.price) ? (
                  <VStack align="end" spacing={0.5}>
                    {selectedItem.price.map((priceOption, idx) => (
                      <Text key={idx} fontWeight="bold" color="olive.500" fontSize="sm">
                        {priceOption.size && <Text as="span" fontWeight="normal" mr={1}>{priceOption.size}:</Text>}
                        {priceOption.price}
                      </Text>
                    ))}
                  </VStack>
                ) : (
                  <Text fontWeight="bold" color="olive.500">{selectedItem?.price}</Text>
                )}
              </Box>
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
