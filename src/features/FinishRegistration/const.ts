export enum Steps {
  ChooseSport = "ChooseSport",
  ChooseSportsmen = "ChooseSportsmen",
  ChooseOrganozation = "ChooseOrganozation",
  UsersData = "UsersData",
}

export const titles = {
  [Steps.ChooseSport]: "Выберите вид спорта",
  [Steps.ChooseSportsmen]: "Выберите спортсмена",
  [Steps.ChooseOrganozation]: "Выберите спортивные организации",
  [Steps.UsersData]: "Заполните основные данные",
};

export const num = {
  [Steps.ChooseSport]: 1,
  [Steps.ChooseSportsmen]: 2,
  [Steps.ChooseOrganozation]: 3,
  [Steps.UsersData]: 4,
};

export const notes = {
  [Steps.ChooseSport]: "",
  [Steps.ChooseSportsmen]:
    "Выберите одного или нескольких спортсменов из списка предложенных.",
  [Steps.ChooseOrganozation]: "Выберите  организации из списка предложенных. ",
  [Steps.UsersData]: "",
};

export const sports = [
  "Велоспорт",
  "Гандбол",
  "Конькобежный спорт",
  "Самбо",
  "Спортивная борьба",
  "Тяжелая атлетика",
];

export const sportsmen = [
  "Александр Магомедов",
  "Алексей Магомедов",
  "Артем Еременко",
  "Александр Магомедов",
  "Алексей Магомедов",
  "Артем Еременко",
  "Александр Магомедов",
  "Алексей Магомедов",
  "Артем Еременко",
  "Александр Магомедов",
  "Алексей Магомедов",
  "Артем Еременко",
  "Александр Магомедов",
  "Алексей Магомедов",
  "Артем Еременко",
  "Александр Магомедов",
  "Алексей Магомедов",
  "Артем Еременко",
];

export const orgs = [
  {
    name: "Всероссийское физкультурно-спортивное общество «Динамо» (ВФСО «Динамо»)",
    img: "/images/100.png",
  },
  {
    name: "Ассоциация зимних олимпийских видов спорта (АЗОВС)",
    img: "/images/101.png",
  },
  {
    name: 'АНО "Столичный центр развития гандбола", МГК "ЦСКА" Москва',
    img: "/images/102.png",
  },
  {
    name: 'Пермская краевая общественная организация "Гандбольный клуб Пермские медведи"',
    img: "/images/103.png",
  },
  {
    name: "Общественная организация Ставропольский городской гандбольный клуб «Виктор»",
    img: "/images/104.png",
  },
  {
    name: 'Автономная некоммерческая организация "Гандбольный клуб "Зенит"',
    img: "/images/105.png",
  },
  {
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    img: "/images/106.png",
  },
  { name: 'Гандбольный союз "Ростов-Дон"', img: "/images/108.png" },
  {
    name: "Всероссийское физкультурно-спортивное общество «Динамо» (ВФСО «Динамо»)",
    img: "/images/100.png",
  },
  {
    name: "Ассоциация зимних олимпийских видов спорта (АЗОВС)",
    img: "/images/101.png",
  },
  {
    name: 'АНО "Столичный центр развития гандбола", МГК "ЦСКА" Москва',
    img: "/images/102.png",
  },
  {
    name: 'Пермская краевая общественная организация "Гандбольный клуб Пермские медведи"',
    img: "/images/103.png",
  },
  {
    name: "Общественная организация Ставропольский городской гандбольный клуб «Виктор»",
    img: "/images/104.png",
  },
  {
    name: 'Автономная некоммерческая организация "Гандбольный клуб "Зенит"',
    img: "/images/105.png",
  },
  {
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    img: "/images/106.png",
  },
  { name: 'Гандбольный союз "Ростов-Дон"', img: "/images/108.png" },
];

export type DataFieldnames =
  | "name"
  | "surname"
  | "patronymic"
  | "dateOfBirth"
  | "gender"
  | "citizenship";

export const dataFields: Record<DataFieldnames, string> = {
  name: "",
  surname: "",
  patronymic: "",
  dateOfBirth: "",
  gender: "",
  citizenship: "",
};

export const mockData: Record<DataFieldnames, string> = {
  name: "Александр",
  surname: "Магомедов",
  patronymic: "",
  dateOfBirth: "12.03.1999",
  gender: "Мужской",
  citizenship: "Российская Федерация",
};

export const translate: Record<DataFieldnames, string> = {
  name: "Имя",
  surname: "Фамилия",
  patronymic: "Отчество (необязательно)",
  dateOfBirth: "Дата рождения",
  gender: "Пол",
  citizenship: "Гражданство",
};

export const placeholders: Record<DataFieldnames, string> = {
  name: "Введите имя",
  surname: "Введите фамилию",
  patronymic: "Введите отчество",
  dateOfBirth: "Выберите дату",
  gender: "Выберите пол",
  citizenship: "Выберите страну",
};

export const errorMessages: Record<DataFieldnames, string> = {
  name: "Это поле является обязательным",
  surname: "Это поле является обязательным",
  patronymic: "",
  dateOfBirth: "Это поле является обязательным",
  gender: "Это поле является обязательным",
  citizenship: "Ошибка",
};
