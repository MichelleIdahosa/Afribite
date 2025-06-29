import img1 from "../assets/img/amala.png"; 
import img2 from "../assets/img/eba.png"; 
import img3 from "../assets/img/poundedyam.jpg"; 
import img4 from "../assets/img/jollof-rice.jpg"; 
import img5 from "../assets/img/moimoi.jpg"; 
import img6 from "../assets/img/eforiro.jpg"; 
import img7 from "../assets/img/asun.png"; 
import img8 from "../assets/img/palmwine.png"; 
import img9 from "../assets/img/cakeslice.png"; 
import img10 from "../assets/img/jollof-rice-main.jpg";
import img11 from "../assets/img/jollof-spagetti.png"; 
import img12 from "../assets/img/zobo.jpg"; 
import img13 from "../assets/img/peppersoup.png"; 
import img14 from "../assets/img/cookie.png"; 
import img15 from "../assets/img/akara.jpg"; 
import img16 from "../assets/img/chapman.jpg"; 
import img17 from "../assets/img/catfishpepp.png"; 
import img18 from "../assets/img/beans.png"; 
import img19 from "../assets/img/amala-main.png"; 
import img20 from "../assets/img/kunu.png"; 
import img21 from "../assets/img/smallchops.png"; 
import img22 from "../assets/img/chinchin.png"; 
import img23 from "../assets/img/moimoi-main.jpg"; 
import img24 from "../assets/img/gingerbeer.png"; 
import img25 from "../assets/img/suya.jpg"; 
import img26 from "../assets/img/datebars.png"; 
import img27 from "../assets/img/egusi.png"; 
import img28 from "../assets/img/pepperedsnail.jpg"; 
import img29 from "../assets/img/baobao.png"; 
import img30 from "../assets/img/grilledfish.png"; 
import img31 from "../assets/img/Sweet-Couscous.png"; 

const menuItems = [
  {
    id: 1,
    name: "Amala + Ewedu",
    category: ["Swallow", "Soup", "Amala", "Main Dish", "Ewedu"],
    image: img1,
    description: "A delicious bowl of Amala & Ewedu with proteins (Kpomo, assorted abd fish)",
    price: "£15",
  },
  {
    id: 2,
    name: "Eba + Afang soup",
    category: ["Main Dish", "Swallow", "Soup", "Eba", "Afang" ],
    image: img2,
    description: "One large portion of hot eba with afang soup + variety of protein ",
    price: "£14",
  },
  {
    id: 3,
    name: "Fufu + Efo riro",
    category: ["Main Dish", "Swallow", "Soup", "Fufu", "Efo riro"],
    image: img3,
    description: "Fufu with Efo riro, Snail, Kpomo and beef ",
    price: "£18",
  },
  {
    id: 4,
    name: "Jollof Rice Turkey & Fried plantain",
    category: ["Main Dish", "Rice", "Jollof rice", "Fried Plantain" ],
    image: img4,
    description: "Aportion of hot spicy jollof rice & Turkey with fried plantain",
    price: "£20",
  },
  {
    id: 5,
    name: "Moi Moi, Fish & Egg",
    category: ["Main Dish", "Moi Moi", "Beans"],
    image: img5,
    description: "Hot spicy moi moi and titus fish and egg.",
    price: "£10",
  },
  {
    id: 6,
    name: "Wheat and Vegetable soup",
    category: ["Main Dish", "Swallow", "Soup", "Wheat", "Efo riro"],
    image: img6,
    description: "A tantalizing and appealing bowl of organic vegetable soup with variety of protiens and wheat.",
    price: "£18",
  },
   {
      id: 7,
      name: "Asun",
      category: ["Appetizer", "Asun"],
      image: img7,
      description: "A portion of spicy asun (goat meat) with sauce.",
      price: "£12",
    },
    {
      id: 8,
      name: "Palm Wine",
      category: ["Drinks"],
      image: img8,
      description: "A glass of fresh Palm wine.",
      price: "£8",
    },
    {
      id: 9,
      name: "Cake Slices",
      category: ["Dessert", "Cake Slice"],
      image: img9,
      description: "2 piece of cake slices, Chocoalte and caramel with a scoop of ice cream.",
      price: "£10",
    },
    {
      id: 10,
      name: "Palm oil rice and Chicken",
      category: ["Main Dish", "Rice", "Palm oil rice"],
      image: img10,
      description: "Native Palm oil rice and chicken, plated with cucumber, and tomatoe.",
      price: "£18",
    },
    {
      id: 11,
      name: "Jollof Spagehetti",
      category: ["Main Dish",  "Jollof Spaghetti"],
      image: img11,
      description: "Jollof Spaghetti, served with either Chicken or Turkey .",
      price: "£18",
    },
    {
      id: 12,
      name: "Zobo",
      category: ["Drinks", "Zobo"],
      image: img12,
      description: "A cold glass of Zobo drink with a hint of mint, citrus and clove .",
      price: "£7",
    },
    {
    id: 13,
    name: "Pepper Soup",
    category: ["Pepper Soup", "Appetizer"],  
    image: img13,
    description: "A blow of hot spicy assorted pepper soup.",
    price: "£18",
  },
  {
    id: 14,
    name: "Cookies",
    category: ["Dessert", "Cookies"],
    image: img14,
    description: "Freshly baked Chocolate chip cookies.",
    price: "£8",
  },
  {
    id: 15,
    name: "Akara and Pap",
    category: ["Main Dish", "Akara & Pap"],
    image: img15,
    description: "A plate of 8 Akara balls and hot milky pap.",
    price: "£12",
  },
  {
    id: 16,
    name: "Chapman",
    category: ["Drinks"],
    image: img16,
    description: "A tall glass of cold Chapman drink.",
    price: "£9",
  },
  {
    id: 17,
    name: "Catfish Pepper Soup",
    category: ["Appetizer", "Pepper Soup",],
    image: img17,
    description: "A bowl of hot spicy catfish peppersoup with boiled ripe plantain.",
    price: "£14",
  },
  {
    id: 18,
    name: "Beans",
    category: ["Main Dish", "Beans"],
    image: img18,
    description: "A portion of oil beans with grilled fish.",
    price: "£17",
  },
   {
      id: 19,
      name: "Amala + Ewedu + Gbegiri",
      category: ["Swallow", "Soup", "Amala", "Ewedu", "Main Dish"],
      image: img19,
      description: "A hot sizling bowl of Amala, Ewedu, Gbegiri and Stew with proteins.",
      price: "£15",
    },
    {
      id: 20,
      name: "Kunu",
      category: ["Drinks"],
      image: img20,
      description: "A glass of cold kunu drink made with tigernut, coconut, date and a hint of ginger .",
      price: "£9",
    },
    {
      id: 21,
      name: "Small chops",
      category: ["Appetizer", "Small chops"],
      image: img21,
      description: "A tantalizing and appealing bowl of organic vegetable soup with variety of protiens and wheat.",
      price: "£10",
    },
    {
      id: 22,
      name: "Chinchin",
      category: ["Dessert", "Chin chin"],
      image: img22,
      description: "Avaliable in Vanilla, Milk, Chocolate, Butterscotch flavours.",
      price: "£7",
    },
    {
      id: 23,
      name: "Moi Moi, Egg and Fish ",
      category: ["Main Dish", "Moi Moi", "Beans"],
      image: img23,
      description: "Hot spicy moi moi with eggs and.",
      price: "£8",
    },
    {
      id: 24,
      name: "Ginger Beer",
      category: ["Drinks"],
      image: img24,
      description: "A glass of cold ginger beer.",
      price: "£8",
    },
     {
        id: 25,
        name: "Suya",
        category: ["Appetizer"],
        image: img25,
        description: "Nigeria style Aboki suya served with onion, cabbage, tomato and suya pepper.",
        price: "£13",
      },
      {
        id: 26,
        name: "Date Bar",
        category: ["Dessert"],
        image: img26,
        description: "3 piece of chocolate datebars.",
        price: "£9",
      },
      {
        id: 27,
        name: "Egusi and Pounded Yam",
        category: ["Swallow", "Soup", "Main Dish", "Egusi", "Pounded yam" ],
        image: img27,
        description: "A wrap of hot pounded yam and Egusi soup with proteins.",
        price: "£18",
      },
      {
        id: 28,
        name: "Peppered Snail",
        category: ["Appetizer" ],
        image: img28,
        description: "A plate of 4 large peppered snails.",
        price: "£18",
      },
      {
        id: 29,
        name: "Baobab Juice",
        category: ["Drinks"],
        image: img29,
        description: "A glass of cold Baobab Juice.",
        price: "£9",
      },
      {
        id: 30,
        name: "Grilled Fish",
        category: ["Dessert", "Grilled Fish"],
        image: img30,
        description: "2 piece of grilled tilapia fish.",
        price: "£15",
      },
      {
      id: 31,
      name: "Sweet Couscous",
      category: ["Dessert"],
      description: "A bowl of sweet couscous.",
      image: img31,
      price: "£9",
    },
      
];

export { menuItems };
