import salad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.png";
import lemonDessert from "../assets/lemon dessert.jpg";
import moussaka from "../assets/moussaka.png";
import souvlaki from "../assets/souvlaki.png";
import spanakopita from "../assets/spanakopita.png";
import falafelWrap from "../assets/falafelWrap.png";
import baklava from "../assets/baklava.png";
import espresso from "../assets/espresso.png";
import redWine from "../assets/redWine.png";
import whiteWine from "../assets/whiteWine.png";
import beer from "../assets/beer.png";
import cola from "../assets/cola.png";
import lemonade from "../assets/lemonade.png";
import water from "../assets/water.png";

export const menu = {
  specials: [
    {
      id: "special-1",
      name: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: salad,
    },
    {
      id: "special-2",
      name: "Bruschetta",
      price: "$5.89",
      description:
        "Grilled bread smeared with garlic and seasoned with salt and olive oil, topped with diced tomatoes and basil for a fresh Mediterranean bite.",
      image: bruschetta,
    },
    {
      id: "special-3",
      name: "Lemon Dessert",
      price: "$5.00",
      description:
        "Straight from grandma’s recipe book — a zesty lemon dessert crafted with authentic Mediterranean ingredients.",
      image: lemonDessert,
    },
  ],

  appetizers: [
    {
      id: "app-1",
      name: "Spanakopita",
      price: "$8.50",
      description:
        "Flaky phyllo pastry filled with spinach, feta cheese, and herbs, baked until golden brown.",
      image: spanakopita,
    },
    {
      id: "app-2",
      name: "Falafel Wrap",
      price: "$9.25",
      description:
        "Crispy chickpea patties served with lettuce, tomato, pickles, and tahini sauce in a warm pita.",
      image: falafelWrap,
    },
  ],

  mains: [
    {
      id: "main-1",
      name: "Chicken Gyros",
      price: "$15.99",
      description:
        "Marinated chicken skewers grilled to perfection, served with warm pita, tzatziki, and a side of Greek fries.",
      image: souvlaki,
    },
    {
      id: "main-2",
      name: "Moussaka",
      price: "$16.50",
      description:
        "Layers of eggplant, seasoned lamb, potatoes, and creamy béchamel sauce baked into a hearty Mediterranean casserole.",
      image: moussaka,
    },
  ],

  desserts: [
    {
      id: "dessert-1",
      name: "Baklava",
      price: "$6.50",
      description:
        "Crispy phyllo layers filled with crushed pistachios and walnuts, sweetened with honey syrup.",
      image: baklava,
    },
  ],

  drinks: {
    soft: [
      {
        id: "drink-soft-1",
        name: "Coca-Cola",
        price: "$3.00",
        description: "Classic refreshing cola beverage.",
        image: cola,
      },
      {
        id: "drink-soft-2",
        name: "Sparkling Lemonade",
        price: "$3.50",
        description: "Bright lemon fizz with a touch of sweetness.",
        image: lemonade,
      },
      {
        id: "drink-soft-3",
        name: "Mineral Water",
        price: "$2.50",
        description: "Still or sparkling natural mineral water.",
        image: water,
      },
    ],
    alcoholic: [
      {
        id: "drink-alc-1",
        name: "Greek Red Wine",
        price: "$8.00/glass",
        description: "Smooth dry red from the Peloponnese region.",
        image: redWine,
      },
      {
        id: "drink-alc-2",
        name: "Santorini White",
        price: "$8.00/glass",
        description: "Crisp white wine with citrus and floral notes.",
        image: whiteWine,
      },
      {
        id: "drink-alc-3",
        name: "Mythos Beer",
        price: "$7.00",
        description: "Light Greek lager served cold.",
        image: beer,
      },
      {
        id: "drink-alc-4",
        name: "Espresso Martini",
        price: "$10.00",
        description:
          "A Mediterranean twist on the classic — vodka, espresso, and coffee liqueur shaken to perfection.",
        image: espresso,
      },
    ],
  },
};
