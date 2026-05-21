import oilPainRelief from "@/assets/oil-pain-relief.jpg";
import oilNallennai from "@/assets/oil-nallennai.jpg";
import oilKarpooradi from "@/assets/oil-karpooradi.jpg";
import drugKabasura from "@/assets/drug-kabasura.jpg";
import drugNilavembu from "@/assets/drug-nilavembu.jpg";
import drugTriphala from "@/assets/drug-triphala.jpg";
import godPoojaKit from "@/assets/god-pooja-kit.jpg";
import godBracelet from "@/assets/god-bracelet.jpg";
import godChain from "@/assets/god-chain.jpg";
import godCoin from "@/assets/god-coin.jpg";

export type Category = "oils" | "drugs" | "god";

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  category: Category;
}

export const categories: { id: Category; label: string }[] = [
  { id: "oils", label: "Massage Oils" },
  { id: "drugs", label: "Siddha Drugs" },
  { id: "god", label: "Hindu God Items" },
];

export const products: Product[] = [
  {
    id: "pain-relief-oil",
    name: "Pain Relief Massage Oil",
    price: 499,
    rating: 4.8,
    reviews: 128,
    description: "A powerful blend of natural herbs and oils to relieve body pain, muscle stiffness and improve circulation.",
    image: oilPainRelief,
    category: "oils",
  },
  {
    id: "nallennai-thailam",
    name: "Nallennai Thailam",
    price: 399,
    rating: 4.7,
    reviews: 92,
    description: "Traditional Siddha sesame-based oil for cooling the body and nourishing the skin.",
    image: oilNallennai,
    category: "oils",
  },
  {
    id: "karpooradi-thailam",
    name: "Karpooradi Thailam",
    price: 449,
    rating: 4.6,
    reviews: 64,
    description: "Camphor-infused herbal oil for cold relief, joint comfort and refreshing massage.",
    image: oilKarpooradi,
    category: "oils",
  },
  {
    id: "kabasura-choornam",
    name: "Kabasura Kudineer Choornam",
    price: 299,
    rating: 4.9,
    reviews: 210,
    description: "Classical Siddha herbal powder to support immunity and respiratory wellness.",
    image: drugKabasura,
    category: "drugs",
  },
  {
    id: "nilavembu-kudineer",
    name: "Nilavembu Kudineer",
    price: 249,
    rating: 4.7,
    reviews: 156,
    description: "Time-tested fever and detox formula made from authentic Siddha herbs.",
    image: drugNilavembu,
    category: "drugs",
  },
  {
    id: "triphala-choornam",
    name: "Triphala Choornam",
    price: 279,
    rating: 4.8,
    reviews: 188,
    description: "Three-fruit blend for daily digestive balance and gentle internal cleansing.",
    image: drugTriphala,
    category: "drugs",
  },
  {
    id: "pooja-kit",
    name: "Brass Pooja Kit",
    price: 599,
    rating: 4.9,
    reviews: 74,
    description: "Complete brass pooja set with diya, bell, kumkum holder and incense stand.",
    image: godPoojaKit,
    category: "god",
  },
  {
    id: "om-bracelet",
    name: "Rudraksha Om Bracelet",
    price: 199,
    rating: 4.7,
    reviews: 102,
    description: "Hand-strung rudraksha bracelet with a gold-finish Om charm for daily wear.",
    image: godBracelet,
    category: "god",
  },
  {
    id: "ganesha-chain",
    name: "Ganesha Pendant Chain",
    price: 349,
    rating: 4.8,
    reviews: 58,
    description: "Gold-tone chain with a Ganesha pendant — a blessed companion for every journey.",
    image: godChain,
    category: "god",
  },
  {
    id: "lakshmi-coin",
    name: "Lakshmi Gold Coin",
    price: 149,
    rating: 4.9,
    reviews: 142,
    description: "Devotional gold-plated coin embossed with Goddess Lakshmi — perfect for pooja or gifting.",
    image: godCoin,
    category: "god",
  },
];
