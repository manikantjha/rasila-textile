/* eslint-disable @next/next/no-img-element */

// Common

export const companyName = "SARDARJI";

// Layout

export const lstNavBarMenu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Products", path: "/products" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "FAQs", path: "/faqs" },
  { id: 6, name: "Contact", path: "/contact" },
];

// Home Page

export const objHomePageHero = {
  hasContent: true,
  title: "SARDARJI",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  imgSrc:
    "https://images.unsplash.com/photo-1526290766257-c015850e4629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  imgAlt: "Home Page Hero",
  renderBtn: () => (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/919737259259"
      className=""
    >
      <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenSmall.svg" />
    </a>
  ),
};

export const lstFeatures = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
      </svg>
    ),
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum a, dolore nisi ratione et.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM11.25 21v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5v6A2.25 2.25 0 003.75 21h7.5z" />
        <path d="M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 01-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 012.122-2.12c.517.517.759 1.36.842 2.194zM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0013.72 8.16c-.518.518-.76 1.362-.843 2.194z" />
      </svg>
    ),
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum a, dolore nisi ratione et.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
      </svg>
    ),
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum a, dolore nisi ratione et.",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "50px" }}
        className="mb-2 text-primary"
      >
        <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM11.25 21v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5v6A2.25 2.25 0 003.75 21h7.5z" />
        <path d="M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 01-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 012.122-2.12c.517.517.759 1.36.842 2.194zM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0013.72 8.16c-.518.518-.76 1.362-.843 2.194z" />
      </svg>
    ),
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum a, dolore nisi ratione et.",
  },
];

export const lstFigures = [
  { id: 1, figure: "50,000+", description: "Machines Running It" },
  { id: 2, figure: "100+", description: "Lorem, ipsum." },
  { id: 3, figure: "1000+", description: "Lorem, ipsum." },
  { id: 4, figure: "29+", description: "Lorem, ipsum." },
];

// About Page

export const objAboutPageHero = {
  hasContent: true,
  title: "ABOUT US",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  imgSrc:
    "https://images.unsplash.com/photo-1569616758526-23def508da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  imgAlt: "About Us Hero",
  renderBtn: () => (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/919737259259"
      className=""
    >
      <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenSmall.svg" />
    </a>
  ),
};

export const objFounder = {
  name: "John Doe",
  designation: "Founder",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed excepturi repellat quis soluta, sunt nihil hic cumque   perspiciatis necessitatibus aut facilis animi aperiam? Molestias,  quasi ut numquam ab eligendi amet molestiae porro voluptatibus vel   reprehenderit facere sint itaque ipsum perspiciatis, dolorem sit   alias cupiditate dolores, deleniti praesentium dolore. Illo.",
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sidhu_Moose_Wala.jpg/1200px-Sidhu_Moose_Wala.jpg",
  imgAlt: "Founder Image",
};

export const objInfrastructureRow = {
  title: "Infrastructure & Facilities",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laudantium enim animi alias eaque soluta laborum nihil amet? Consequatur nihil magnam vero maxime nostrum veritatis commodi quae suscipit molestias temporibus accusantium tempore doloremque sed ea nesciunt deleniti, maiores ratione fugiat illum alias minima blanditiis odio debitis ab! Repudiandae cum deleniti at saepe omnis possimus rerum, sequi ipsam quaerat eaque assumenda in vel natus consectetur nesciunt repellat facere vero, reprehenderit quia libero nihil sint ut. Ab et quos ut eum aliquid ea voluptatem, repudiandae cupiditate cumque dolorum neque accusamus odit blanditiis! Quos dolore at facere magni delectus id officia, quam neque.",
  imgSrc:
    "https://images.unsplash.com/photo-1625065780765-ad4e242aa3a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  imgAlt: "Infrastructure Row Image",
};

export const objQualityRow = {
  title: "Quality",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laudantium enim animi alias eaque soluta laborum nihil amet? Consequatur nihil magnam vero maxime nostrum veritatis commodi quae suscipit molestias temporibus accusantium tempore doloremque sed ea nesciunt deleniti, maiores ratione fugiat illum alias minima blanditiis odio debitis ab! Repudiandae cum deleniti at saepe omnis possimus rerum, sequi ipsam quaerat eaque assumenda in vel natus consectetur nesciunt repellat facere vero, reprehenderit quia libero nihil sint ut. Ab et quos ut eum aliquid ea voluptatem, repudiandae cupiditate cumque dolorum neque accusamus odit blanditiis! Quos dolore at facere magni delectus id officia, quam neque.",
  imgSrc:
    "https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  containerWrapperClassName: "bg-gray-50",
};

// Products Page

export const lstProductTabs = [
  "Electrical Contact Bar",
  "Electro Mechanic Warp Stop Motion",
  "Serrated Bars",
  "Drop Pin",
];

export const objProducts = {
  electricalContactBars: [
    {
      id: 1,
      title: "Tsudakoma Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "20 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece (Approx.)</>,
    },
    {
      id: 2,
      title: "Sulzer Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/sulzer-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 3,
      title: "Picanol Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/picanol-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 4,
      title: "Toyota Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/toyota-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 5,
      title: "Airjet Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/arijet-electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 6,
      title: "Water Jet Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/water-electrical-jet-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 7,
      title: "Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 8,
      title: "Donier Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 9,
      title: "ELECTRICAL CONTACT BAR",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-2-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "6 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
      ],
      arrOtherDetails: [
        "Delivery Time: 10 DAYS AFTER CONFIRMATION",
        "Packaging Details: AS PER CUSTOMER REQUIREMENT",
      ],
      priceRange: <>&#8377;800 / Piece</>,
    },
    {
      id: 10,
      title: "Somets Electrical Contact Bar",
      imgSrc:
        "./products/electricalContactBars/electrical-contact-bar-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Surface Treatment",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
      ],
      arrOtherDetails: [
        "Ss To Ss / Ss To Brass / Ss To Copper",
        "Serreted / Unserreted",
        "Interrupted / Non - Interrupted",
      ],
      priceRange: <>&#8377;1000 - &#8377;4000 / Piece</>,
    },
    {
      id: 11,
      title: "Ruti 'C' Serrated bar",
      imgSrc: "./products/electricalContactBars/1-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Usage/Application",
          FIELD2: "Industrial",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Model",
          FIELD2: "RUTI C",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;4000 / Piece</>,
    },
  ],
  electroMechanicWarpStopMotions: [
    {
      id: 1,
      title: "4 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/electro-mechanic-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Contact Bar",
          FIELD2:
            "SS To SS / SS to  Brass / SS to Copper Serrated /Unserrated /Interrupted / Non-Interrupted",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            "150cms,190cms, 200cms, 220cms,240cms, 280cms, 320cms, 360cms, 380cms",
        },
        {
          FIELD1: "No Of Contact Bar",
          FIELD2: "04",
        },
      ],
      arrOtherDetails: [
        "Suitable for Indigenous and Imported Weaving Looms, Shuttleless Looms, Rapier Looms.",
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
    {
      id: 2,
      title: "Electro Mechanic 06 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/electro-mechanical-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            '44",46",48",50",52",54",56",58",60",62",64",66",68",70",72",74",76",78",80",110"',
        },
        {
          FIELD1: "No Of Contact Bars",
          FIELD2: "06 Bar",
        },
        {
          FIELD1: "Contact Bars",
          FIELD2:
            "SS To SS /  SS to Brass / SS to COPPER / Serrated / Unserrated / Interrupted / Non-Interrupted",
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
    {
      id: 3,
      title: "Electro Mechanic 04 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/electro-mechanic-04-bar-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Contact Bars",
          FIELD2:
            "SS To SS /  SS to Brass / SS to COPPER / Serrated / Unserrated / Interrupted / Non-Interrupted",
        },
        {
          FIELD1: "No Of Contact Bars",
          FIELD2: "04 Bar",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            '44",46",48",50",52",54",56",58",60",62",64",66",68",70",72",74",76",78",80",110"',
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
    {
      id: 4,
      title: "Mechanical 4 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/mechanical-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "100 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Cam Hole for Tappet Shaft",
          FIELD2: "1.5 Inch / 1.75 Inch",
        },
        {
          FIELD1: "Cam Type",
          FIELD2: "Oridinary / Positive",
        },
        {
          FIELD1: "Loom Size",
          FIELD2: "44,46,48,50,52,56,58,60,64,68,72,78,80,110 Inch",
        },
        {
          FIELD1: "Number of Serrated Bars",
          FIELD2: "04 Bar",
        },
        {
          FIELD1: "Plating",
          FIELD2: "Zinc / Nickel",
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;2500 - &#8377;6500 / Piece</>,
    },
    {
      id: 5,
      title: "Mechanical 6 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/mechanical-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Number of Serrated Bars",
          FIELD2: "06 Bar",
        },
        {
          FIELD1: "Cam Type",
          FIELD2: "Oridinary / Positive",
        },
        {
          FIELD1: "Cam Hole for Tappet Shaft",
          FIELD2: "1.5 Inch / 1.75 Inch",
        },
        {
          FIELD1: "Plating",
          FIELD2: "Zinc / Nickel",
        },
        {
          FIELD1: "Loom Size",
          FIELD2: "44,46,48,50,52,56,58,60,64,68,72,78,80,110 Inch",
        },
      ],
      arrOtherDetails: [
        "Advantages: Loom Stop Automatically, Improved Loom Efficiency",
      ],
      priceRange: <>&#8377;2500 - &#8377;6500 / Piece</>,
    },
    {
      id: 6,
      title: "6 Bar Warp Stop Motion",
      imgSrc:
        "./products/electroMechanicWarpStopMotions/6-bar-warp-stop-motion-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Contact Bar",
          FIELD2:
            "SS To SS / SS to  Brass / SS to Copper Serrated /Unserrated /Interrupted / Non-Interrupted",
        },
        {
          FIELD1: "Loom Size",
          FIELD2:
            "150cms,190cms, 200cms, 220cms,240cms, 280cms, 320cms, 360cms, 380cms",
        },
        {
          FIELD1: "No Of Contact Bar",
          FIELD2: "06",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;7000 - &#8377;35000 / Piece</>,
    },
  ],
  serratedBars: [
    {
      id: 1,
      title: `RUTI "B" Serrated Bars`,
      imgSrc: "./products/serratedBars/serrated-blade-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Minimum Order Quantity",
          FIELD2: "100 Piece",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Finishing",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 2,
      title: `CIMMCO Serrated Bars`,
      imgSrc: "./products/serratedBars/1-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Usage/Application",
          FIELD2: "Industrial",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Model",
          FIELD2: "CIMMCO",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 3,
      title: `Square Teeth Mechanical Serrated Bars`,
      imgSrc: "./products/serratedBars/5-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Planting",
          FIELD2: "Zinc/Nickel",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 4,
      title: `Outer Strip Serrated Bars`,
      imgSrc: "./products/serratedBars/outer-strip-serrated-bars-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Finishing",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 5,
      title: `V Teeth Serrated Bars`,
      imgSrc: "./products/serratedBars/1-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Usage/Application",
          FIELD2: "Industrial",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Packaging Type",
          FIELD2: "Corrugated Box",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Bar Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Model",
          FIELD2: "V Teeth",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
    {
      id: 6,
      title: `Serrated Bar`,
      imgSrc: "./products/serratedBars/mechenical-drop-pin-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Mild Steel",
        },
        {
          FIELD1: "Finishing",
          FIELD2: "Polished",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Outer Material",
          FIELD2: "Stainless Steel",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;500 - &#8377;3000 / Piece</>,
    },
  ],
  dropPins: [
    {
      id: 1,
      title: `Mechanical Drop Pin`,
      imgSrc: "./products/dropPins/mechanical-drop-pin-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel & Mild Steel",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Thickness",
          FIELD2: "0.2mm To 1.0mm",
        },
        {
          FIELD1: "Planting",
          FIELD2: "Zinc / Nickel",
        },
        {
          FIELD1: "Type",
          FIELD2: "Open/Close",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;1000 - &#8377;5000 / Piece</>,
    },
    {
      id: 2,
      title: `Electrical Drop Pin`,
      imgSrc: "./products/dropPins/electrical-drop-pin-250x250.webp",
      arrProductDetails: [
        {
          FIELD1: "Material",
          FIELD2: "Stainless Steel/ Mild Steel",
        },
        {
          FIELD1: "Country of Origin",
          FIELD2: "Made in India",
        },
        {
          FIELD1: "Thickness",
          FIELD2: "0.2 mm to 1.0 mm",
        },
        {
          FIELD1: "Type",
          FIELD2: "Open/Close",
        },
        {
          FIELD1: "Planting",
          FIELD2: "Zinc / Nickel",
        },
        {
          FIELD1: "Brand",
          FIELD2: "SRT",
        },
      ],
      arrOtherDetails: [],
      priceRange: <>&#8377;1000 - &#8377;5000 / Piece</>,
    },
  ],
};

// Testimonials Page

export const lstTestimonials = [
  {
    id: 1,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
  {
    id: 2,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
  {
    id: 3,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
  {
    id: 4,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
  {
    id: 5,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
  {
    id: 6,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
  {
    id: 7,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
  {
    id: 8,
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laudantium, minus autem ratione exercitationem reprehenderit?",
    objClient: {
      imgSrc: "",
      name: "John Doe",
      designation: "Designation",
    },
  },
];

// FAQs Page

export const lstFAQs = [
  {
    id: 1,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi expedita repellat quisquam rem reiciendis natus dicta doloribus, nihil error maxime quam qui aspernatur saepe voluptate!",
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi expedita repellat quisquam rem reiciendis natus dicta doloribus, nihil error maxime quam qui aspernatur saepe voluptate!",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi expedita repellat quisquam rem reiciendis natus dicta doloribus, nihil error maxime quam qui aspernatur saepe voluptate!",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi expedita repellat quisquam rem reiciendis natus dicta doloribus, nihil error maxime quam qui aspernatur saepe voluptate!",
  },
  {
    id: 5,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi expedita repellat quisquam rem reiciendis natus dicta doloribus, nihil error maxime quam qui aspernatur saepe voluptate!",
  },
];

// Contact Page

export const objContactInfo = {
  title: "How can we help you?",
  descrption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,    quisquam pariatur. Commodi quam voluptate minima ipsam reiciendis,    natus autem facilis provident. Itaque molestiae qui eligendi.",
  lstDetails: [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      value: "info.rasilatextile@gmail.com",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      value: "+91 97372 59259",
    },
    // {
    //   id: 3,
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-5 h-5 mr-2"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    //       />
    //     </svg>
    //   ),
    //   value: "+91 55555 66666",
    // },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      value: "116 Mahek Icon, Sumul Dairy Road, Surat, Gujarat 395008",
    },
  ],
};
