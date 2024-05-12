export type PostType = {
  title?: string;
  sport?: string;
  date?: string;
  text?: string;
  postType:
    | "photos"
    | "contest"
    | "ad"
    | "userWonMedal"
    | "followUsers"
    | "video";
  seenNumber?: number;
  commentsNumber?: number;
  photos?: string[];
  video?: string;
  comments?: Comment[];
  winnersNames?: string[];
  bestMoments?: BestMoments[];
  adData?: Ad;
  userData?: User;
  users?: User[];
  medalData?: MedalData;
};

export type Comment = {
  name: string;
  text: string;
  howMuchTimeAgo: string;
  reply?: Comment[];
};

export type BestMoments = {
  previews: string;
  seenTimes: number;
  duration: string;
};

export type Ad = {
  image: string;
  text: string;
  sale: string;
};

export type User = {
  name: string;
  profession: string;
  status: string;
  isVerified: boolean;
  country?: "RU" | "KZ" | "RB";
};

export type MedalData = {
  place: number;
  contest: string;
  congratsNumber: number;
};

export const posts: PostType[] = [
  {
    title: "Илья Бессонов дал интервью для телеканала Россия-1",
    sport: "Спортивная Борьба",
    date: "12 марта, 2024 в 16:03",
    text: "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и 1231231231231231231231231313",
    postType: "photos",
    photos: ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"],
    seenNumber: 4100,
    commentsNumber: 4,
    comments: [
      {
        name: "Вадим Давыдов",
        text: "Наконец-то! Рад, что он вернулся в спорт",
        howMuchTimeAgo: "15 минут назад",
        reply: [
          {
            name: "Артем Еременко",
            text: "Вадим, согласен! Уже давно ждал интервью!",
            howMuchTimeAgo: "30 секунд назад",
          },
        ],
      },
      {
        name: "Константин Романов",
        text: "Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба, уверен соперники найдутся, Кудряшов например или  Романов, на крайняк Тищенко.",
        howMuchTimeAgo: "20 минут назад",
      },
      {
        name: "Анастасия Осипова",
        text: "Наш чемпион! Горжусь! 🩷",
        howMuchTimeAgo: "20 минут назад",
      },
    ],
  },

  {
    title:
      "Результаты соревнования по чемпионату 2024 по спортивной борьбе (греко-римская борьба)",
    sport: "Спортивная Борьба",
    date: "12 марта, 2024 в 16:03",
    postType: "contest",
    winnersNames: [
      "Александр Магомедов ",
      "Дмитрий Романов",
      "Александр Куприенко",
    ],
    bestMoments: [
      {
        previews: "/images/video1.png",
        seenTimes: 4100,
        duration: "04:15",
      },
      {
        previews: "/images/video2.png",
        seenTimes: 392,
        duration: "03:10",
      },
      {
        previews: "/images/video3.png",
        seenTimes: 72800,
        duration: "02:01",
      },
      {
        previews: "/images/video4.png",
        seenTimes: 5,
        duration: "00:56",
      },
    ],
  },
  {
    postType: "ad",
    adData: {
      text: "Весенняя коллекция одежды",
      sale: "-30%",
      image: "/images/ad.png",
    },
  },
  {
    postType: "userWonMedal",
    date: "24 февраля, 2024 в 15:55",
    userData: {
      name: "Александр Магомедов",
      profession: "Спортсмен",
      status: "Призер Олимпийских игр, двукратный призер чемпионатов мира",
      isVerified: true,
    },
    medalData: {
      place: 1,
      contest:
        "В Спортивном чемпионате 2024 по греко-римской борьбе среди юниоров до 24",
      congratsNumber: 500,
    },
  },
  {
    postType: "followUsers",
    users: [
      {
        name: "Алексей Магомедов",
        profession: "",
        status: "",
        country: "RU",
        isVerified: false,
      },
      {
        name: "Константин Романов",
        profession: "",
        status: "",
        country: "KZ",
        isVerified: false,
      },
      {
        name: "Амир Магомедов",
        profession: "",
        status: "",
        country: "RU",
        isVerified: false,
      },
      {
        name: "Наталья Шалесная",
        profession: "",
        status: "",
        country: "RB",
        isVerified: false,
      },
    ],
  },
  {
    title: "Этапы Тура Альп-2024",
    sport: "Велоспорт",
    date: "2 февраля, 2024 в 23:09",
    text: "Фото с соревнований",
    postType: "photos",
    photos: [
      "/velo1.png",
      "/velo2.png",
      "/velo3.png",
      "/velo4.png",
      "/velo5.png",
      "/velo6.png",
      "/velo7.png",
      "/velo8.png",
      "/velo9.png",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    seenNumber: 4100,
    commentsNumber: 0,
  },

  {
    title: "Запись соревнования по вольной борьбе в Санкт-Петербурге",
    sport: "Спортивная Борьба",
    date: "12 марта, 2024 в 16:03",
    postType: "video",
    video: "/video.png",
    seenNumber: 82000,
    commentsNumber: 1,
    comments: [
      {
        name: "Вадим Давыдов",
        text: "Романов молодец! 👍🏻",
        howMuchTimeAgo: "15 минут назад",
      },
    ],
  },
];
