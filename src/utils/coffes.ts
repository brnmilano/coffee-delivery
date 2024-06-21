import Expresso from "../../public/Coffes/expresso-tradicional.png";
import ExpressoAmericano from "../../public/Coffes/expresso-americano.png";
import ExpressoCremoso from "../../public/Coffes/expresso-cremoso.png";
import ExpressoGelado from "../../public/Coffes/cafe-gelado.png";
import CafeComLeite from "../../public/Coffes/cafe-com-leite.png";
import Latte from "../../public/Coffes/latte.png";
import Capuccino from "../../public/Coffes/capuccino.png";
import Macchiato from "../../public/Coffes/macchiato.png";
import Mocaccino from "../../public/Coffes/mochaccino.png";
import ChocolateQuente from "../../public/Coffes/chocolate-quente.png";
import Cubano from "../../public/Coffes/cubano.png";
import Havaiano from "../../public/Coffes/havaiano.png";
import Arabe from "../../public/Coffes/arabe.png";
import Irlandes from "../../public/Coffes/irlandes.png";

export const coffeeData = [
  {
    id: 1,
    image: Expresso,
    alt: "Expresso Tradicional",
    type: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    id: 2,
    image: ExpressoAmericano,
    alt: "Expresso Americano",
    type: ["Tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
  },
  {
    id: 3,
    image: ExpressoCremoso,
    alt: "Expresso Cremoso",
    type: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    id: 4,
    image: ExpressoGelado,
    alt: "Expresso Gelado",
    type: ["Tradicional", "Gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
  },
  {
    id: 5,
    image: CafeComLeite,
    alt: "Café com Leite",
    type: ["Tradicional", "Com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
  },
  {
    id: 6,
    image: Latte,
    alt: "Latte",
    type: ["Tradicional", "Com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
  },
  {
    id: 7,
    image: Capuccino,
    alt: "Capuccino",
    type: ["Tradicional", "Com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
  },
  {
    id: 8,
    image: Macchiato,
    alt: "Macchiato",
    type: ["Tradicional", "Com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
  },
  {
    id: 9,
    image: Mocaccino,
    alt: "Mocaccino",
    type: ["Tradicional", "Com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
  },
  {
    id: 10,
    image: ChocolateQuente,
    alt: "Chocolate Quente",
    type: ["Tradicional", "Com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90",
  },
  {
    id: 11,
    image: Cubano,
    alt: "Cubano",
    type: ["Tradicional", "Alcoólico", "Gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
  },
  {
    id: 12,
    image: Havaiano,
    alt: "Havaiano",
    type: ["Especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
  },
  {
    id: 13,
    image: Arabe,
    alt: "Árabe",
    type: ["Especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
  },
  {
    id: 14,
    image: Irlandes,
    alt: "Irlandês",
    type: ["Especial", "Alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
  },
];
