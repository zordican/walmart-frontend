// prisma/seed.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const products = [
    {
      name: "Oreo Chocolaty Biscuit",
      price: 39.0,
      imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/cookie-biscuit/z/j/y/-original-imagwcjwgscghbdz.jpeg?q=90&crop=false",
      rating: 4.5,
      numRatings: 120,
    },
    {
      name: "Coleman Sundome 6-Person Dome Tent",
      price: 5999.0,
      imageUrl: "https://i5.walmartimages.com/seo/Coleman-Sundome-6-Person-Dome-Tent-72-Center-Height-Overall-Dimensions-120-H-x-120-W_4c0a127f-6070-42e2-87af-b47d967d3c58_1.9a3bb2c23561543e0726c19a6522bae4.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      rating: 4.8,
      numRatings: 85,
    },
    {
      name: "Tylenol Extra Strength Acetaminophen Gels",
      price: 349.0,
      imageUrl: "https://i5.walmartimages.com/seo/Tylenol-Extra-Strength-Acetaminophen-Rapid-Release-Gels-24-Ct_bc34682b-a636-4efe-8eb3-6025144c4cfa.9b4a15752da489e69e8ffc17b156f8c1.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.7,
      numRatings: 200,
    },
    {
      name: "Great Value Purified Drinking Water (40 bottles)",
      price: 699.0,
      imageUrl: "https://i5.walmartimages.com/seo/Great-Value-Purified-Drinking-Water-16-9-fl-oz-Bottles-40-Count_061099c8-2637-49ad-9706-506d42bbe542.33c33902d22157d2c215a61e15fd4a4b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.9,
      numRatings: 150,
    },
    {
      name: "Mainstays Comfort Complete Bed Pillow (2 pieces)",
      price: 429.99,
      imageUrl: "https://i5.walmartimages.com/seo/Mainstays-Comfort-Complete-Bed-Pillow-Standard-Queen_04754ad9-e885-4aa4-b2b1-bff2366cf575.0b8fd924fcff296303a5c76ff6d1a55b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      rating: 4.3,
      numRatings: 65,
    },
    {
      name: "Disney 100 100th Anniversary Men's & Big Men's Mickey Mouse Faces and Time Flies Graphic Tee Shirts 2-Pack, Sizes S-3XL",
      price: 799.99,
      imageUrl: "https://i5.walmartimages.com/seo/Disney-100th-Anniversary-Men-s-Big-Men-s-Mickey-Mouse-Faces-Graphic-Tee-Shirts-Sizes-S-3XL_6ecbfcec-fdd1-412c-83c9-9ff5531d1945.bae63c48966ac93760daebbbdedcaa28.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.6,
      numRatings: 90,
    },
    {
      name: "Lepro LED Collapsible Camping Lantern 4-Packs, Super Bright, Battery Powered Camping Light, IPX4 Water Resistant",
      price: 299.99,
      imageUrl: "https://i5.walmartimages.com/seo/Lepro-LED-Collapsible-Camping-Lantern-4-Packs-Super-Bright-Battery-Powered-Light-IPX4-Water-Resistant-Portable-Emergency-Lights-Power-Outage-Hurrican_9df9e775-ad5d-4c95-8e5d-7a3af32eeec0.7c37de070d7ed064bd2fbd5d7385befe.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.7,
      numRatings: 110,
    },
    {
      name: "Bose SoundLink Flex Wireless Waterproof Portable Bluetooth Speaker, Black",
      price: 299.99,
      imageUrl: "https://i5.walmartimages.com/seo/Bose-SoundLink-Flex-Wireless-Waterproof-Portable-Bluetooth-Speaker-Black_e3682e2c-1160-4a6b-b96a-50a7e8b8c045.23c03d5d3fdf6ae1aa19975a180fbf32.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.9,
      numRatings: 300,
    },
    {
      name: "Pocket Juice Slim Pro 20,000mAh, Portable Power Bank and Charger with Dual USB Ports, Black",
      price: 1299.99,
      imageUrl: "https://i5.walmartimages.com/seo/Pocket-Juice-Slim-Pro-20-000mAh-Portable-Power-Bank-and-Charger-with-Dual-USB-Ports-Black_387948b6-ba8a-4a43-9b08-3d49f781ba76.3933f6708f940ff3e3e81a5d45f30fdc.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.8,
      numRatings: 250,
    },
    {
      name: "Freshness Guaranteed Chocolate Chip Bakery Cookies, 14 oz, 10 Count",
      price: 149.99,
      imageUrl: "https://i5.walmartimages.com/seo/Freshness-Guaranteed-Chocolate-Chip-Bakery-Cookies-14-oz-10-Count_b8ff1c98-71aa-4cb8-8cd4-018ab0b2ac50.52b12ed2c82a7d96fe7dd87f10088782.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.2,
      numRatings: 180,
    },
    {
      name: "Firewood",
      price: 250.0,
      imageUrl: "https://i5.walmartimages.com/seo/Essay-Group-Simple-Simon-Wood-Bundle_d05ba57a-570a-419c-87b7-d6ec28393828.7bc346c57878886ffbc4d7472daaaf36.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.0,
      numRatings: 100,
    },
    {
      name: "Burger",
      price: 150.0,
      imageUrl: "https://i5.walmartimages.com/seo/SPAM-Classic-12-oz-1-CT_c7302df8-93bf-40b7-9c3f-3e67bd86d721.6df033ee132ffc38ec0779c7254d1f51.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.1,
      numRatings: 95,
    },
    {
      name: "Bread",
      price: 50.0,
      imageUrl: "https://i5.walmartimages.com/seo/Dave-s-Killer-Bread-21-Whole-Grains-and-Seeds-Thin-Sliced-Organic-Bread-Loaf-20-5-oz_9732b0b5-21d1-4cb8-9a18-0083b91d8900.f3cb0f7cfe134188cb72bf7c84e04505.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.3,
      numRatings: 85,
    },
    {
      name: "Sleeping Bags",
      price: 1000.0,
      imageUrl: "https://i5.walmartimages.com/seo/FUNDANGO-3-in-1-Double-Sleeping-Bag-Oversized-Lightweight-for-Adults-and-Kids-Sleeping-Bags-for-Camping-Hiking-Backpacking-Grey-Pink_cc7796d8-d50c-4e9e-888b-7e96c81db556.d80a03a377b5b89413b3baf0d5a5e264.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      rating: 4.7,
      numRatings: 140,
    },
  ];
  

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Products have been seeded');
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
