const surveyData = {
  id: 1,
  title: 'Restoran Memnuniyet Anketi',
  questions: [
    {
      id: 1,
      text: 'Restoranın genel temizlik durumu hakkında memnuniyetiniz nedir?',
      type: 'singleChoice',
      options: [
        {text: 'Çok iyi', points: 5},
        {text: 'İyi', points: 4},
        {text: 'Normal', points: 3},
        {text: 'Kötü', points: 2},
        {text: 'Çok kötü', points: 1},
      ],
    },
    {
      id: 2,
      text: 'Yemek kalitesi hakkında memnuniyetiniz nedir?',
      type: 'singleChoice',
      options: [
        {text: 'Çok iyi', points: 5},
        {text: 'İyi', points: 4},
        {text: 'Normal', points: 3},
        {text: 'Kötü', points: 2},
        {text: 'Çok kötü', points: 1},
      ],
    },
    {
      id: 3,
      text: 'Servis/Paket hakkında memnuniyetiniz nedir?',
      type: 'singleChoice',
      options: [
        {text: 'Çok iyi', points: 5},
        {text: 'İyi', points: 4},
        {text: 'Normal', points: 3},
        {text: 'Kötü', points: 2},
        {text: 'Çok kötü', points: 1},
      ],
    },
    {
      id: 4,
      text: 'Servis hızı hakkında memnuniyetiniz nedir?',
      type: 'singleChoice',
      options: [
        {text: 'Çok iyi', points: 5},
        {text: 'İyi', points: 4},
        {text: 'Normal', points: 3},
        {text: 'Kötü', points: 2},
        {text: 'Çok kötü', points: 1},
      ],
    },
    {
      id: 5,
      text: 'Çalışanların davranışları hakkında memnuniyetiniz nedir?',
      type: 'singleChoice',
      options: [
        {text: 'Çok iyi', points: 5},
        {text: 'İyi', points: 4},
        {text: 'Normal', points: 3},
        {text: 'Kötü', points: 2},
        {text: 'Çok kötü', points: 1},
      ],
    },
    {
      id: 6,
      text: 'Rezervasyon sistemi hakkında memnuniyetiniz nedir?',
      type: 'singleChoice',
      options: [
        {text: 'Çok iyi', points: 5},
        {text: 'İyi', points: 4},
        {text: 'Normal', points: 3},
        {text: 'Kötü', points: 2},
        {text: 'Çok kötü', points: 1},
      ],
    },
    {
      id: 7,
      text: 'Restorantımızın yan hizmetleri hakkında memnuniyetiniz nedir?',
      type: 'singleChoice',
      options: [
        {text: 'Çok iyi', points: 5},
        {text: 'İyi', points: 4},
        {text: 'Normal', points: 3},
        {text: 'Kötü', points: 2},
        {text: 'Çok kötü', points: 1},
      ],
    },
  ],
};

export default surveyData;
