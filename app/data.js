export const cities = [
  {
    id: 1,
    label: "Karachi",
    value: "Karachi",
  },
  {
    id: 2,
    label: "Lahore",
    value: "Lahore",
  },
  {
    id: 3,
    label: "Islamabad",
    value: "Islamabad",
  },
  {
    id: 4,
    label: "Rest Of Pakistan",
    value: "Rest Of Pakistan",
  },
];

export const areas = [
  {
    id: 1,
    label: "Gulistan-e-Jouhar, Block-17",
    value: "Gulistan-e-Jouhar, Block-17",
    city: "Karachi",
    deliveryCharges: 400,
  },
  {
    id: 2,
    label: "Gulshan-e-Iqbal, Block-01",
    value: "Gulshan-e-Iqbal, Block-01",
    city: "Karachi",
    deliveryCharges: 200,
  },
  {
    id: 3,
    label: "Gulshan-e-Iqbal, Block-05",
    value: "Gulshan-e-Iqbal, Block-05",
    city: "Karachi",
    deliveryCharges: 300,
  },
  {
    id: 4,
    label: "Gulshan-e-Iqbal, Block-16",
    value: "Gulshan-e-Iqbal, Block-16",
    city: "Karachi",
    deliveryCharges: 600,
  },
  {
    id: 5,
    label: "Gulshan-e-Iqbal, Block-14",
    value: "Gulshan-e-Iqbal, Block-14",
    city: "Karachi",
    deliveryCharges: 500,
  },
];

export const order = {
  id: 1,
  user: [],
  items: [],
  orderRemarks: "",
  orderType: "Delivery",
  city: "Karachi",
  area: "Gulshan-e-Iqbal, Block-17",
  total: 10000,
  deliveryCharges: 600,
};

export const user = [
  {
    id: 1,
    title: "Mr",
    name: "Usama Aslam",
    email: "usamaaslam@gmail.com",
    mobile: "03212939666",
    address: "301, Aashiynaa Apartment, Gulshan-e-iqbal, Block-17",
    city: "Karachi",
    area: "Gulshan-e-Iqbal, Block-17",
    landmark: "National Stadium",
  },
];

export const items = [
  {
    id: 1,
    name: "8 Pcs Spicy Wings",
    description:
      "8 Pcs. Crisp to perfection, our crispy yet juicy bucket of wings",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 1000,
    itemRemarks: "Add some extra sauce",
    options: [
      {
        id: 1,
        name: "No Cheese",
        price: 0,
      },
      {
        id: 2,
        name: "Extra Cheese",
        price: 100,
      },
      {
        id: 3,
        name: "Extra Patty",
        price: 200,
      },
    ],
    quantity: 1,
  },
  {
    id: 2,
    name: "8 Pcs Plain Wings",
    description:
      "8 Pcs. Crisp to perfection, our crispy yet juicy bucket of wings",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 800,
    itemRemarks: "Add some extra sauce",
    options: [
      {
        id: 1,
        name: "No Cheese",
        price: 0,
      },
      {
        id: 2,
        name: "Extra Cheese",
        price: 100,
      },
      {
        id: 3,
        name: "Extra Patty",
        price: 200,
      },
    ],
    quantity: 1,
  },
  {
    id: 3,
    name: "Zinger Burger",
    description: "Zinger to die for.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 1500,
    itemRemarks: "Add some extra sauce",
    options: [
      {
        id: 1,
        name: "No Cheese",
        price: 0,
      },
      {
        id: 2,
        name: "Extra Cheese",
        price: 100,
      },
      {
        id: 3,
        name: "Extra Patty",
        price: 200,
      },
    ],
    quantity: 1,
  },
  {
    id: 4,
    name: "8 Pcs Spicy Wings",
    description:
      "8 Pcs. Crisp to perfection, our crispy yet juicy bucket of wings",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 1000,
    itemRemarks: "Add some extra sauce",
    options: [
      {
        id: 1,
        name: "No Cheese",
        price: 0,
      },
      {
        id: 2,
        name: "Extra Cheese",
        price: 100,
      },
      {
        id: 3,
        name: "Extra Patty",
        price: 200,
      },
    ],
    quantity: 1,
  },
  {
    id: 5,
    name: "8 Pcs Spicy Wings",
    description:
      "8 Pcs. Crisp to perfection, our crispy yet juicy bucket of wings",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 1000,
    itemRemarks: "Add some extra sauce",
    options: [
      {
        id: 1,
        name: "No Cheese",
        price: 0,
      },
      {
        id: 2,
        name: "Extra Cheese",
        price: 100,
      },
      {
        id: 3,
        name: "Extra Patty",
        price: 200,
      },
    ],
    quantity: 1,
  },
  {
    id: 6,
    name: "8 Pcs Spicy Wings",
    description:
      "8 Pcs. Crisp to perfection, our crispy yet juicy bucket of wings",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 1000,
    itemRemarks: "Add some extra sauce",
    options: [
      {
        id: 1,
        name: "No Cheese",
        price: 0,
      },
      {
        id: 2,
        name: "Extra Cheese",
        price: 100,
      },
      {
        id: 3,
        name: "Extra Patty",
        price: 200,
      },
    ],
    quantity: 1,
  },
];
