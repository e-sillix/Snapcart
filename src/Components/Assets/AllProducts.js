// Men category
import men1 from "./clothes/mens/1.jpg";
import men1a from "./clothes/mens/1a.jpg";
import men1b from "./clothes/mens/1b.jpg";
import men1c from "./clothes/mens/1c.jpg";

import men2 from "./clothes/mens/2.jpg";
import men2a from "./clothes/mens/2a.jpg";
import men2b from "./clothes/mens/2b.jpg";
import men2c from "./clothes/mens/2c.jpg";

import men3 from "./clothes/mens/3.jpg";
import men3a from "./clothes/mens/3a.jpg";
import men3b from "./clothes/mens/3b.jpg";
import men3c from "./clothes/mens/3c.jpg";

import men4 from "./clothes/mens/4.jpg";
import men4a from "./clothes/mens/4a.jpg";
import men4b from "./clothes/mens/4b.jpg";
import men4c from "./clothes/mens/4c.jpg";

import men5 from "./clothes/mens/5.jpg";
import men5a from "./clothes/mens/5a.jpg";
import men5b from "./clothes/mens/5b.jpg";
import men5c from "./clothes/mens/5c.jpg";

// Women category
import women1 from "./clothes/womens/1.jpg";
import women1a from "./clothes/womens/1a.jpg";
import women1b from "./clothes/womens/1b.jpg";
import women1c from "./clothes/womens/1c.jpg";

import women2 from "./clothes/womens/2.jpg";
import women2a from "./clothes/womens/2a.jpg";
import women2b from "./clothes/womens/2b.jpg";
import women2c from "./clothes/womens/2c.jpg";

import women3 from "./clothes/womens/3.jpg";
import women3a from "./clothes/womens/3a.jpg";
import women3b from "./clothes/womens/3b.jpg";
import women3c from "./clothes/womens/3c.jpg";

import women4 from "./clothes/womens/4.jpg";
import women4a from "./clothes/womens/4a.jpg";
import women4b from "./clothes/womens/4b.jpg";
import women4c from "./clothes/womens/4c.jpg";

import women5 from "./clothes/womens/5.jpg";
import women5a from "./clothes/womens/5a.jpg";
import women5b from "./clothes/womens/5b.jpg";
import women5c from "./clothes/womens/5c.jpg";

// Kids category
import kids1 from "./clothes/kids/1.jpg";
import kids1a from "./clothes/kids/1a.jpg";
import kids1b from "./clothes/kids/1b.jpg";
import kids1c from "./clothes/kids/1c.jpg";

import kids2 from "./clothes/kids/2.jpg";
import kids2a from "./clothes/kids/2a.jpg";
import kids2b from "./clothes/kids/2b.jpg";
import kids2c from "./clothes/kids/2c.jpg";

import kids3 from "./clothes/kids/3.jpg";
import kids3a from "./clothes/kids/3a.jpg";
import kids3b from "./clothes/kids/3b.jpg";
import kids3c from "./clothes/kids/3c.jpg";

import kids4 from "./clothes/kids/4.jpg";
import kids4a from "./clothes/kids/4a.jpg";
import kids4b from "./clothes/kids/4b.jpg";
import kids4c from "./clothes/kids/4c.jpg";

import kids5 from "./clothes/kids/5.jpg";
import kids5a from "./clothes/kids/5a.jpg";
import kids5b from "./clothes/kids/5b.jpg";
import kids5c from "./clothes/kids/5c.jpg";

// Watch category
import watch1 from "./watches/1.jpg";
import watch1a from "./watches/1a.jpg";
import watch1b from "./watches/1b.jpg";
import watch1c from "./watches/1c.jpg";

import watch2 from "./watches/2.jpg";
import watch2a from "./watches/2a.jpg";
import watch2b from "./watches/2b.jpg";
import watch2c from "./watches/2c.jpg";

import watch3 from "./watches/3.jpg";
import watch3a from "./watches/3a.jpg";
import watch3b from "./watches/3b.jpg";
import watch3c from "./watches/3c.jpg";

import watch4 from "./watches/4.jpg";
import watch4a from "./watches/4a.jpg";
import watch4b from "./watches/4b.jpg";
import watch4c from "./watches/4c.jpg";

import watch5 from "./watches/5.jpg";
import watch5a from "./watches/5a.jpg";
import watch5b from "./watches/5b.jpg";
import watch5c from "./watches/5c.jpg";

import menbanner from "./banner/menbanner.jpg";
import womenbanner from "./banner/womenbanner.jpg";
import kidbanner from "./banner/kidbanner.jpg";
import watchbanner from "./banner/watchbanner.jpg";

export { menbanner, womenbanner, kidbanner, watchbanner };

let all_product = [
  // Men category
  {
    name: "Cotton Comfort Men's Tee",
    id: 1,
    prices: 3499,
    oldPrices: 4299,
    description:
      "Experience ultimate comfort in our classic Cotton Comfort Men's Tee.",
    image: men1,
    image1: men1a, // Additional image property
    image2: men1b, // Additional image property
    image3: men1c, // Additional image property
    category: "men",
  },
  {
    name: "Casual Essentials Men's T-Shirt",
    id: 2,
    prices: 2875,
    oldPrices: 3599,
    description:
      "Stay effortlessly stylish with our Casual Essentials Men's T-Shirt.",
    image: men2,
    image1: men2a, // Additional image property
    image2: men2b, // Additional image property
    image3: men2c, // Additional image property
    category: "men",
  },
  {
    name: "Urban Cool Men's Graphic Tee",
    id: 3,
    prices: 4123,
    oldPrices: 4999,
    description: "Express your style with our Urban Cool Men's Graphic Tee.",
    image: men3,
    image1: men3a, // Additional image property
    image2: men3b, // Additional image property
    image3: men3c, // Additional image property
    category: "men",
  },
  {
    name: "Sporty Vibe Men's Active Shirt",
    id: 4,
    prices: 3387,
    oldPrices: 4099,
    description:
      "Embrace the sporty vibe with our breathable Sporty Vibe Men's Active Shirt.",
    image: men4,
    image1: men4a, // Additional image property
    image2: men4b, // Additional image property
    image3: men4c, // Additional image property
    category: "men",
  },
  {
    name: "Classic Fit Men's Polo",
    id: 5,
    prices: 2650,
    oldPrices: 3199,
    description:
      "Elevate your wardrobe with our timeless Classic Fit Men's Polo.",
    image: men5,
    image1: men5a, // Additional image property
    image2: men5b, // Additional image property
    image3: men5c, // Additional image property
    category: "men",
  },
  // ... Repeat the pattern for other categories

  {
    name: "Chic Elegance Women's Blouse",
    id: 6,
    prices: 3899,
    oldPrices: 4599,
    description: "Achieve chic elegance with our versatile Women's Blouse.",
    image: women1,
    image1: women1a,
    image2: women1b,
    image3: women1c,
    category: "women",
  },
  {
    name: "Feminine Grace Women's Top",
    id: 7,
    prices: 2975,
    oldPrices: 3799,
    description:
      "Radiate feminine grace in our beautifully crafted Women's Top.",
    image: women2,
    image1: women2a,
    image2: women2b,
    image3: women2c,
    category: "women",
  },
  {
    name: "Modern Trend Women's Shirt",
    id: 8,
    prices: 3675,
    oldPrices: 4399,
    description: "Embrace modern trends with our stylish Women's Shirt.",
    image: women3,
    image1: women3a,
    image2: women3b,
    image3: women3c,
    category: "women",
  },
  {
    name: "Casual Chic Women's Tee",
    id: 9,
    prices: 3248,
    oldPrices: 3999,
    description: "Experience casual chic vibes in our comfy Women's Tee.",
    image: women4,
    image1: women4a,
    image2: women4b,
    image3: women4c,
    category: "women",
  },
  {
    name: "Graphic Bloom Women's T-Shirt",
    id: 10,
    prices: 2985,
    oldPrices: 3699,
    description:
      "Make a statement with our vibrant Graphic Bloom Women's T-Shirt.",
    image: women5,
    image1: women5a,
    image2: women5b,
    image3: women5c,
    category: "women",
  },

  // Kids category
  {
    name: "Playful Prints Kids' Tee",
    id: 11,
    prices: 4199,
    oldPrices: 4899,
    description: "Let your little ones shine in our playful prints Kids' Tee.",
    image: kids1,
    image1: kids1a,
    image2: kids1b,
    image3: kids1c,
    category: "kids",
  },
  {
    name: "Adventure Ready Kids' Shirt",
    id: 12,
    prices: 3447,
    oldPrices: 4199,
    description: "Get adventure-ready with our durable Kids' Shirt.",
    image: kids2,
    image1: kids2a,
    image2: kids2b,
    image3: kids2c,
    category: "kids",
  },
  {
    name: "Cute & Comfy Kids' T-Shirt",
    id: 13,
    prices: 2725,
    oldPrices: 3299,
    description: "Keep it cute and comfy with our Kids' T-Shirt.",
    image: kids3,
    image1: kids3a,
    image2: kids3b,
    image3: kids3c,
    category: "kids",
  },
  {
    name: "Colorful Spirit Kids' Top",
    id: 14,
    prices: 3985,
    oldPrices: 4699,
    description: "Ignite colorful spirits with our vibrant Kids' Top.",
    image: kids4,
    image1: kids4a,
    image2: kids4b,
    image3: kids4c,
    category: "kids",
  },
  {
    name: "Happy Hearts Kids' Tee",
    id: 15,
    prices: 3073,
    oldPrices: 3899,
    description: "Spread happiness with our adorable Happy Hearts Kids' Tee.",
    image: kids5,
    image1: kids5a,
    image2: kids5b,
    image3: kids5c,
    category: "kids",
  },

  // Watch category
  {
    name: "Elegant Timepiece",
    id: 16,
    prices: 3765,
    oldPrices: 4499,
    description: "Stay punctual and elegant with our sophisticated timepiece.",
    image: watch1,
    image1: watch1a,
    image2: watch1b,
    image3: watch1c,
    category: "watch",
  },
  {
    name: "Sporty Chronograph Watch",
    id: 17,
    prices: 3338,
    oldPrices: 4099,
    description: "Achieve a sporty look with our functional chronograph watch.",
    image: watch2,
    image1: watch2a,
    image2: watch2b,
    image3: watch2c,
    category: "watch",
  },
  {
    name: "Minimalist Style Wristwatch",
    id: 18,
    prices: 3075,
    oldPrices: 3799,
    description: "Embrace minimalist style with our sleek wristwatch.",
    image: watch3,
    image1: watch3a,
    image2: watch3b,
    image3: watch3c,
    category: "watch",
  },
  {
    name: "Luxury Gold Tone Watch",
    id: 19,
    prices: 4343,
    oldPrices: 5099,
    description: "Indulge in luxury with our stunning gold-tone watch.",
    image: watch4,
    image1: watch4a,
    image2: watch4b,
    image3: watch4c,
    category: "watch",
  },
  {
    name: "Casual Everyday Watch",
    id: 20,
    prices: 3597,
    oldPrices: 4299,
    description: "Stay casually on time with our everyday watch.",
    image: watch5,
    image1: watch5a,
    image2: watch5b,
    image3: watch5c,
    category: "watch",
  },
  // ... Repeat the pattern for other categories
];

export default all_product;
