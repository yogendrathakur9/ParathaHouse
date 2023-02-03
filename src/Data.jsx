import { BiMap } from "react-icons/bi";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "./assets/recipe1.jpg";
import recipe2 from "./assets/recipe2.jpg";
import recipe3 from "./assets/recipe3.jpg";
import recipe4 from "./assets/recipe4.jpg";
import recipe5 from "./assets/recipe5.jpg";
import recipe6 from "./assets/recipe6.jpg";

import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";


export const recipes = [
  {
    id: 1,
    image: recipe1,
    name: "Methi Paratha",

    price: "₹50",
  },
  {
    id: 2,
    image: recipe2,
    name: "aaloo Paratha",
    price: "₹35",
  },
  {
    id: 3,
    image: recipe3,
    name: "Lachcha Paratha ",
    price: "₹60",
  },
  {
    id: 4,
    image: recipe4,
    name: "Recipe Name",
    price: "₹22",
  },
  {
    id: 5,
    image: recipe5,
    name: "Recipe Name",
    price: "₹14",
  },
  {
    id: 6,
    image: recipe6,
    name: "Recipe Name",
    price: "₹20",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "9713454372",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "yogenthakur9@gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "Mangalmurti Nagar Indore"
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "recipe",
    text: "Recipe",
    icon: <GiBowlOfRice />,
  }
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];
