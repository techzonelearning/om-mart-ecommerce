import logo from "./assets/images/logo.png";
import banner from "./assets/images/banner.png";
import pro1 from "./assets/images/pro1.png";
import pro2 from "./assets/images/pro2.png";
import pro3 from "./assets/images/pro3.png";
import pro4 from "./assets/images/pro4.png";
import wide1 from "./assets/images/wide1.png";
import wide2 from "./assets/images/wide2.png";
import forYou1 from "./assets/images/forYou1.png";
import forYou2 from "./assets/images/forYou2.png";
import forYou3 from "./assets/images/forYou3.png";
import forYou4 from "./assets/images/forYou4.png";
import forYou5 from "./assets/images/forYou5.png";
import forYou6 from "./assets/images/forYou6.png";
import forYou7 from "./assets/images/forYou7.png";
import forYou8 from "./assets/images/forYou8.png";
import trend1 from "./assets/images/trend1.png";
import trend2 from "./assets/images/trend2.png";
import trend3 from "./assets/images/trend3.png";
import subscribe from "./assets/images/subscribe.png";

let nav_item = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Collection", path: "/collection" },
];

let productList = [
  {
    title: "Tanks",
    image: pro1,
  },
  {
    title: "T-Shirts",
    image: pro2,
  },
  {
    title: "Bandana",
    image: pro3,
  },
  {
    title: "Men Belts",
    image: pro4,
  },
];

let justForYou = [
  {
    image: forYou1,
    title: "GYM Tank-Top",
    price: "$5",
    offPrice: "$3",
    category: "Tank",
  },
  {
    image: forYou2,
    title: "Beautiful Scarf",
    price: "$25",
    offPrice: "$7",
    category: "Bandana",
  },
  {
    image: forYou3,
    title: "Fashion polo shirt",
    price: "$20",
    offPrice: "$18",
    category: "Polo Shirts",
  },
  {
    image: forYou4,
    category: "T-Shirts",
    title: "Fashion polo shirt",
    price: "$12",
    offPrice: "$8",
  },
  {
    category: "Polo Shirts",
    image: forYou5,
    title: "Fashion polo shirt",
    price: "$9",
    offPrice: "$5",
  },
  {
    image: forYou6,
    category: "Casual Shirts",
    title: "Handsome shirt",
    price: "$20",
    offPrice: "$2",
  },
  {
    image: forYou7,
    title: "Handsome shirt",
    category: "Casual Shirts",
    price: "$10",
    offPrice: "$7",
  },
  {
    image: forYou8,
    category: "Men Belts",
    title: "Leather Belt",
    price: "$8",
    offPrice: "$5",
  },
];

let trending_product = [trend1, trend2, trend3];
let site_config = {
  logo,
  banner,
  wide1,
  wide2,
  subscribe,
};

let footer = {
  information: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Check out", path: "/checkout" },
    { name: "Contact", path: "/contact" },
  ],
  help: ["my Account", "Free Home Delivery", "Cart", "Order Status"],
  category: ["Tanks", "T Shirt", "Polo Shirt", "Bandana", "Men Belts"],
};
export { nav_item, site_config, productList, justForYou, trending_product, footer };
