import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: string;
  km: number;
  price: number;
  oldPrice?: number;
  transmission: "Automático" | "Manual";
  fuel: "Flex" | "Diesel" | "Gasolina" | "Híbrido";
  color: string;
  condition: "Seminovo" | "Novo" | "Blindado";
  image: string;
  highlight?: boolean;
  specs: { label: string; value: string }[];
};

export const vehicles: Vehicle[] = [
  {
    id: "suv-executive",
    brand: "Volvo",
    model: "XC90",
    version: "T8 Inscription AWD",
    year: "2023/2024",
    km: 18400,
    price: 489900,
    oldPrice: 512000,
    transmission: "Automático",
    fuel: "Híbrido",
    color: "Cinza Onyx",
    condition: "Seminovo",
    image: car1,
    highlight: true,
    specs: [
      { label: "Motor", value: "2.0 Turbo + Elétrico" },
      { label: "Potência", value: "455 cv" },
      { label: "Câmbio", value: "Automático 8M" },
      { label: "Portas", value: "5 portas" },
      { label: "Final da placa", value: "7" },
      { label: "Único dono", value: "Sim" },
    ],
  },
  {
    id: "sedan-white",
    brand: "Genesis",
    model: "G70",
    version: "3.3T Sport",
    year: "2022/2023",
    km: 32100,
    price: 298500,
    transmission: "Automático",
    fuel: "Gasolina",
    color: "Branco Perolizado",
    condition: "Seminovo",
    image: car2,
    specs: [
      { label: "Motor", value: "3.3 V6 Biturbo" },
      { label: "Potência", value: "370 cv" },
      { label: "Câmbio", value: "Automático 8M" },
      { label: "Portas", value: "4 portas" },
      { label: "Final da placa", value: "2" },
      { label: "Único dono", value: "Sim" },
    ],
  },
  {
    id: "coupe-red",
    brand: "Ford",
    model: "Mustang",
    version: "GT Premium 5.0",
    year: "2021/2022",
    km: 12750,
    price: 419000,
    transmission: "Automático",
    fuel: "Gasolina",
    color: "Vermelho Race",
    condition: "Seminovo",
    image: car3,
    specs: [
      { label: "Motor", value: "5.0 V8" },
      { label: "Potência", value: "466 cv" },
      { label: "Câmbio", value: "Automático 10M" },
      { label: "Portas", value: "2 portas" },
      { label: "Final da placa", value: "5" },
      { label: "Único dono", value: "Não" },
    ],
  },
  {
    id: "hatch-silver",
    brand: "Hyundai",
    model: "HB20",
    version: "1.0 Turbo Platinum",
    year: "2024/2024",
    km: 9800,
    price: 112900,
    transmission: "Automático",
    fuel: "Flex",
    color: "Prata Sleek",
    condition: "Novo",
    image: car4,
    specs: [
      { label: "Motor", value: "1.0 Turbo" },
      { label: "Potência", value: "120 cv" },
      { label: "Câmbio", value: "Automático 6M" },
      { label: "Portas", value: "5 portas" },
      { label: "Final da placa", value: "9" },
      { label: "Único dono", value: "Sim" },
    ],
  },
  {
    id: "suv-armored",
    brand: "Volvo",
    model: "XC90",
    version: "B6 Ultimate Blindado III-A",
    year: "2023/2023",
    km: 24500,
    price: 545000,
    transmission: "Automático",
    fuel: "Híbrido",
    color: "Grafite",
    condition: "Blindado",
    image: car1,
    specs: [
      { label: "Motor", value: "2.0 Turbo MHEV" },
      { label: "Potência", value: "300 cv" },
      { label: "Câmbio", value: "Automático 8M" },
      { label: "Portas", value: "5 portas" },
      { label: "Blindagem", value: "Nível III-A" },
      { label: "Único dono", value: "Sim" },
    ],
  },
  {
    id: "sedan-executive",
    brand: "Genesis",
    model: "G80",
    version: "2.5T Executive",
    year: "2023/2024",
    km: 15200,
    price: 356000,
    transmission: "Automático",
    fuel: "Gasolina",
    color: "Branco Ártico",
    condition: "Seminovo",
    image: car2,
    specs: [
      { label: "Motor", value: "2.5 Turbo" },
      { label: "Potência", value: "304 cv" },
      { label: "Câmbio", value: "Automático 8M" },
      { label: "Portas", value: "4 portas" },
      { label: "Final da placa", value: "4" },
      { label: "Único dono", value: "Sim" },
    ],
  },
];

export const brands = ["Todas", "Volvo", "Genesis", "Ford", "Hyundai"];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export const formatKm = (value: number) => `${value.toLocaleString("pt-BR")} km`;

export const salesByMonth = [
  { month: "Fev", vendas: 14, meta: 16 },
  { month: "Mar", vendas: 18, meta: 16 },
  { month: "Abr", vendas: 16, meta: 18 },
  { month: "Mai", vendas: 22, meta: 18 },
  { month: "Jun", vendas: 19, meta: 20 },
  { month: "Jul", vendas: 26, meta: 20 },
  { month: "Ago", vendas: 31, meta: 24 },
];

export const mixByBrand = [
  { brand: "Volvo", unidades: 24 },
  { brand: "Genesis", unidades: 18 },
  { brand: "Ford", unidades: 12 },
  { brand: "Hyundai", unidades: 27 },
  { brand: "Outras", unidades: 9 },
];

export type StockRow = {
  id: string;
  vehicle: string;
  plate: string;
  price: number;
  days: number;
  status: "Disponível" | "Reservado" | "Em preparação" | "Vendido";
};

export const stock: StockRow[] = [
  {
    id: "1",
    vehicle: "Volvo XC90 T8 Inscription",
    plate: "RQP-7A21",
    price: 489900,
    days: 12,
    status: "Disponível",
  },
  {
    id: "2",
    vehicle: "Genesis G70 3.3T Sport",
    plate: "SGE-2B08",
    price: 298500,
    days: 41,
    status: "Reservado",
  },
  {
    id: "3",
    vehicle: "Ford Mustang GT 5.0",
    plate: "MTG-5C77",
    price: 419000,
    days: 63,
    status: "Disponível",
  },
  {
    id: "4",
    vehicle: "Hyundai HB20 1.0 Turbo",
    plate: "HBX-9D14",
    price: 112900,
    days: 5,
    status: "Em preparação",
  },
  {
    id: "5",
    vehicle: "Genesis G80 2.5T Executive",
    plate: "GEX-4F52",
    price: 356000,
    days: 28,
    status: "Vendido",
  },
];

export const leads = [
  {
    name: "Marina Cavalcante",
    interest: "Volvo XC90 T8",
    channel: "WhatsApp",
    time: "há 8 min",
  },
  {
    name: "Rogério Tavares",
    interest: "Mustang GT 5.0",
    channel: "Site",
    time: "há 42 min",
  },
  { name: "Iara Bezerra", interest: "HB20 Platinum", channel: "Instagram", time: "há 2 h" },
  { name: "Douglas Prado", interest: "Genesis G80", channel: "Telefone", time: "há 3 h" },
  { name: "Camila Nogueira", interest: "XC90 Blindado", channel: "WhatsApp", time: "há 5 h" },
];
