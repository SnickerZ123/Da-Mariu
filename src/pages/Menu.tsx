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
  FaCoffee,
  FaGlassWhiskey,
  FaStar,
} from 'react-icons/fa';

import {
  GiNoodles,
  GiFrenchFries,
  GiSodaCan,
} from 'react-icons/gi';

import { TbGlassFullFilled } from 'react-icons/tb';

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

const foodSections = [
  { id: 'starters', title: 'Starters' },
  { id: 'mains', title: 'Main Courses' },
  { id: 'sides', title: 'Sides' },
  { id: 'pizzas', title: 'Pizza' },
  { id: 'salads', title: 'Salads' },
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState('food');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const sectionRefs = {
    starters: useRef<HTMLDivElement>(null),
    mains: useRef<HTMLDivElement>(null),
    pizzas: useRef<HTMLDivElement>(null),
    sides: useRef<HTMLDivElement>(null),
    salads: useRef<HTMLDivElement>(null),
  };

  const menuSections: MenuSection[] = [
    {
      title: 'Starters',
      icon: FaStar,
      ref: sectionRefs.starters,

      items: [
        {
          name: 'Bruschetta',
          price: '£7.99',
          description:
            'Cherry tomatoes, bufala mozzarella, prosciutto crudo, garlic, basil',
        },

        {
          name: 'Montanarine',
          price: '£9.90',
          description:
            'Fried pizza bites topped with mozzarella, tomato, fresh basil and grana cheese',
          isVegetarian: true,
        },

        {
          name: 'Ortolano',
          price: '£9.90',
          description: 'Fried vegetables with sriracha mayo',
          isVegetarian: true,
        },

        {
          name: 'Calamari Fritti',
          price: '£10.90',
          description: 'Fried squid with sriracha mayo',
        },

        {
          name: 'Addiction Sauce',
          price: '£2.00',
          description: 'Sriracha mayo',
          spiceLevel: 2,
        },
      ],
    },

    {
      title: 'Main Courses',
      icon: GiNoodles,
      ref: sectionRefs.mains,

      items: [
        {
          name: 'Lasagna',
          price: '£15.90',
          description: 'Ragù, béchamel, grana padano',
        },

        {
          name: 'Carbonara Spaghetti',
          price: '£15.90',
          description: 'Eggs, guanciale, pecorino',
        },

        {
          name: 'Paccheri con Crema di Spinaci',
          price: '£18.90',
          description:
            'Paccheri pasta with spinach cream, double cream, mushrooms, cherry tomatoes, garlic served with cheese and toasted almonds flakes on top',
          isVegetarian: true,
        },

        {
          name: 'Involtini di Pollo con Crudo & Scamorza',
          price: '£22.90',
          description:
            'Chicken filled with scamorza, rolled with prosciutto crudo served in a gravy mushroom sauce',
        },

        {
          name: 'Tonno alla Griglia',
          price: '£27.90',
          description:
            'Grilled tuna steak served with green beans, boiled potatoes, capers, olives, mix cherry tomatoes and garlic',
        },

        {
          name: 'Cotoletta alla Milanese',
          price: '£24.90',
          description:
            'Pork breaded cutlet Milanese style (250gr-280gr) served with rocket and grana cheese, fries, and chimichurri sauce',
          spiceLevel: 1,
        },
      ],
    },

    {
      title: 'Pizza',
      icon: FaPizzaSlice,
      ref: sectionRefs.pizzas,

      items: [
        {
          name: 'Margherita',
          price: '£12.90',
          isVegetarian: true,
        },

        {
          name: 'Marinara',
          price: '£15.90',
          description: 'Garlic and capers',
          isVegetarian: true,
        },

        {
          name: 'Diavola',
          price: '£15.90',
          spiceLevel: 1,
        },

        {
          name: 'Romana',
          price: '£15.90',
        },

        {
          name: 'Parmigiana',
          price: '£16.90',
          isVegetarian: true,
        },

        {
          name: '4 Formaggi',
          price: '£16.90',
          isVegetarian: true,
        },

        {
          name: 'Vegetariana',
          price: '£16.90',
          isVegetarian: true,
        },

        {
          name: 'Calabrese',
          price: '£17.90',
          spiceLevel: 2,
        },

        {
          name: 'Friarielli',
          price: '£17.90',
          spiceLevel: 1,
        },

        {
          name: 'Bufalina',
          price: '£18.90',
        },

        {
          name: 'Valtellina',
          price: '£18.90',
        },

        {
          name: 'Frutti di Mare',
          price: '£19.90',
        },

        {
          name: 'Nonnina',
          price: '£17.90',
        },

        {
          name: 'Salmone Pizza',
          price: '£19.90',
        },

        {
          name: 'Pizza Carbonara',
          price: '£19.90',
          description:
            'Mozzarella, egg yolk cream, parmigiano cheese, pecorino cheese, guanciale and black pepper',
        },

        {
          name: 'Rustica',
          price: '£19.90',
          description:
            'Tomato, mozzarella fior di latte, Sicilian sausage, peppers, onion, olives and pecorino cheese on top',
        },

        {
          name: 'Contadina',
          price: '£19.90',
          description:
            'Tomato, mozzarella fior di latte, courgettes, Philadelphia, mix cherry tomatoes and toasted almonds flakes on top',
          isVegetarian: true,
        },
      ],
    },
  ];

  const pizzaExtras = [
    { name: 'Onion', price: '£1.50' },
    { name: 'Mushroom', price: '£2.50' },
    { name: 'Salame', price: '£2.50' },
    { name: 'Nduja', price: '£3.00' },
    { name: 'Mozzarella', price: '£2.50' },
    { name: 'Pros. Crudo', price: '£3.00' },
    { name: 'Bufala', price: '£4.00' },
  ];

  return (
    <Box>

      {/* DOWNLOAD BUTTONS */}

      <Box mt={4} textAlign="center">
        <VStack spacing={4} align="center">

          <Button
            as="a"
            href="/menu/Menu_2026_05_18_2026.pdf"
            download
            size={{ base: 'md', md: 'lg' }}
            colorScheme="olive"
            px={{ base: 5, md: 8 }}
            py={7}
            width={{ base: '90%', sm: '340px' }}
            borderRadius="lg"
            boxShadow="sm"
            _hover={{
              transform: 'translateY(-1px)',
              boxShadow: 'md',
            }}
            transition="all 0.2s ease"
          >
            <VStack spacing={0} w="100%" align="center">

              <HStack spacing={2} justify="center">
                <FaUtensils />

                <Text fontWeight="semibold">
                  Download Full Menu
                </Text>
              </HStack>

              <Text
                fontSize="xs"
                fontWeight="medium"
                opacity={0.85}
                mt={0.5}
                textAlign="center"
              >
                Available from 1 June
              </Text>
            </VStack>
          </Button>

          <Button
            as="a"
            href="/menu/Lunch_Menu_Tue_Friday.pdf"
            download
            size={{ base: 'md', md: 'lg' }}
            colorScheme="olive"
            px={{ base: 5, md: 8 }}
            py={7}
            width={{ base: '90%', sm: '340px' }}
            borderRadius="lg"
            boxShadow="sm"
            _hover={{
              transform: 'translateY(-1px)',
              boxShadow: 'md',
            }}
            transition="all 0.2s ease"
          >
            <VStack spacing={0} w="100%" align="center">

              <HStack spacing={2} justify="center">
                <FaUtensils />

                <Text fontWeight="semibold">
                  Download Lunch Menu
                </Text>
              </HStack>

              <Text
                fontSize="xs"
                fontWeight="medium"
                opacity={0.85}
                mt={0.5}
                textAlign="center"
              >
                Available from 1 June
              </Text>
            </VStack>
          </Button>

          <Text
            fontSize="sm"
            color="gray.600"
            textAlign="center"
          >
            Gluten-free pizza & pasta available +£3.50
          </Text>

        </VStack>
      </Box>
    </Box>
  );
};

export default Menu;
