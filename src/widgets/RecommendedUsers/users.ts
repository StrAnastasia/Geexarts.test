import { User } from "../Posts/consts";

export const users: User[] = [
  {
    name: "Александр Магомедов",
    profession: "Спортсмен",
    status: "Призер Олимпийских игр, двукратный призер чемпионатов мира",
    isVerified: true,
  },
  {
    name: "Дмитрий Зайцев",
    profession: "Спортсмен",
    status:
      "Заслуженный судья и секретарь соревнований по греко-римской борьбе",
    isVerified: true,
  },
  {
    name: "Светлана Бессонова",
    profession: "Спортсмен",
    status: "Призер Олимпийских игр, двукратный призер чемпионатов мира",
    isVerified: false,
  },
  {
    name: "Андрей Романов",
    profession: "Спортсмен",
    status:
      "Мастер спорта СССР международного класса, заслуженный тренер СССР по греко-римской борьбе",
    isVerified: false,
  },
  {
    name: "Анастасия Землякова",
    profession: "Спортсмен",
    status: "Тренер по гандболу",
    isVerified: true,
  },
];
