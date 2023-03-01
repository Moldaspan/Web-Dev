import {Categories, Category} from "./categories";

export interface Product {
  category?:Category;
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  prodLink: string;
  rating: number;
  likes: number;
  slideNumber: number;
}

export const products = [
  {
    category: Categories[0],
    id: 1,
    name: 'Samsung UE75AU7100UXCE',
    price: 618890,
    description:
      'тип: LED-телевизор,диагональ: 75 дюйм,разрешение: 3840x2160,поддержка HD: 4K UHD, технология Smart TV: Да, wi-Fi: Да, входы: HDMI, USB',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h71/h00/34209578156062/samsung-ue75au7100uxce-190-sm-cernyj-101496170-1-Container.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/samsung-ue75au7100uxce-191-sm-chernyi-101496170/?c=750000000#!/item',
    rating: 5,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 2,
    name: 'Haier 65 S6 AX Pro',
    price: 499990,
    description:
      'тип: QLED-телевизор,диагональ: 65 дюйм,разрешение: 3840x2160,поддержка HD: 4K,HDR,технология Smart TV: Да,wi-Fi: Да,входы: композитный, ,HDMI, ,USB',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h9b/68327070072862/hqled-televizor-haier-65-s6-ax-pro-108623758-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/haier-65-s6-ax-pro-chernyi-108623758/?c=750000000#!/item',
    rating: 5,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 3,
    name: 'Xiaomi Mi TV Q1 L75M6-ESG',
    price: 884230,
    description:
      'QLED-телевизор,диагональ 75 дюйм,разрешение: 3840x2160,поддержка HD: 4K UHD,ехнология Smart TV: Да,wi-Fi: Да, входы: аудио, оптический, AV,HDMI, Ethernet (RJ-45), USB,Bluetooth',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/hb6/48266177249310/xiaomi-mi-l75m6-esg-q1-190-5sm-cernyj-103438333-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/haier-65-s6-ax-pro-chernyi-108623758/?c=750000000#!/item',
    rating: 5,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 4,
    name: 'LG 60UQ80006LB',
    price: 389989,
    description:
      'тип: LED-телевизор,диагональ: 60 дюйм,разрешение: 3840x2160,поддержка HD: 4K,UHD,технология Smart TV: Да, wi-Fi: Да, входы: HDMI, Ethernet (RJ-45), USB, Bluetooth',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/hab/51924390477854/lg-60uq80006lb-seryj-105519007-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/lg-60uq80006lb-152-sm-chernyi-105519007/?c=750000000#!/item',
    rating: 5,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 5,
    name: 'Sony KD75XH8096BR2',
    price: 899990,
    description:
      'тип: LED-телевизор,диагональ: 75 дюйм,разрешение: 3840x2160,поддержка HD: 4K UHD,технология Smart TV: Да,wi-Fi: Да,входы: аудио, композитный, HDMI,Ethernet (RJ-45), USB, RS-232, Bluetooth',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/ha0/64625643323422/sony-kd75xh8096br2-chernyi-107234042-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/sony-kd75xh8096br2-191-sm-chernyi-107234042/?c=750000000#!/item',
    rating: 4,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 6,
    name: 'Kivi 55U790LW',
    price: 349990,
    description:
      'тип: LED-телевизор,диагональ: 55 дюйм,разрешение: 3840x2160,поддержка HD: 4K UHD,технология Smart TV: Да,wi-Fi: Да,входы: коаксиальный, AV, HDMI, Ethernet (RJ-45), USB, антенный, Bluetooth',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/he1/50137147998238/55u790lw-smart-uhd-104517430-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/kivi-55u790lw-140-sm-belyi-104517430/?c=750000000#!/item',
    rating: 4,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 7,
    name: 'Artel UA50H3301',
    price: 253100,
    description:
      'тип: LED-телевизор,диагональ: 50 дюйм,разрешение: 1920x1080,поддержка HD: 1080p Full HD,технология Smart TV: Нет,wi-Fi: Нет,входы: аудио, коаксиальный,AV,HDMI,USB',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/h39/32983396450334/artel-ua50h3301-127-sm-seryi-100414243-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/artel-ua50h3301-127-sm-seryi-100414243/?c=750000000#!/item',
    rating: 5,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 8,
    name: 'Philips 50PUS7406/60',
    price: 429990,
    description:
      'тип: LED-телевизор,диагональ: 50 дюйм,разрешение: 3840x2160,поддержка HD: 4K UHD,технология Smart TV: Да,wi-Fi: Да,входы: HDMI,Ethernet (RJ-45), USB',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h70/45283858448414/philips-50pus7406-60-cernyj-102228377-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/philips-50pus7406-60-127-sm-chernyi-102228377/?c=750000000#!/item',
    rating: 5,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 9,
    name: 'Samsung QE55Q60AAUXCE',
    price: 519990,
    description:
      'тип: QLED-телевизор,диагональ: 55 дюйм,разрешение: 3840x2160,поддержка HD: 4K HDR,технология Smart TV: Да,wi-Fi: Да,входы: HDMI,Ethernet (RJ-45), USB, Bluetooth',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h47/34089159131166/samsung-qe55q60aauxce-139sm-chernyi-101670068-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/samsung-qe55q60aauxce-140-sm-chernyi-101670068/?c=750000000#!/item',
    rating: 5,
    likes:0,
    slideNumber: 1,
  },
  {
    category: Categories[0],
    id: 10,
    name: 'LG NanoCell 65NANO756QA',
    price: 549590,
    description:
      'тип: LED-телевизор,диагональ: 65 дюйм,разрешение: 3840x2160,поддержка HD: 4K UHD,технология Smart TV: Да,wi-Fi: Да,входы: HDMI,Ethernet (RJ-45),USB,антенный, Bluetooth',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h10/52319184617502/lg-nanocell-65nano756qa-cernyj-105727880-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/lg-nanocell-65nano756qa-165-sm-chernyi-105727880/?c=750000000#!/item',
    rating: 5,
    likes: 0,
    slideNumber: 1,
  },
  {
    category: Categories[1],
    id: 11,
    name: 'Беговая дорожка Genau TR50',
    price: 219790,
    description:
      'тип: электрическая\n' +
      'складная: Да\n' +
      'максимальный вес пользователя: 120 кг\n' +
      'ширина бегового полотна: 42 см',
    images:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h39/67413754413086/genau-tr50-26800030-1.jpg',
    prodLink:
      'https://kaspi.kz/shop/p/genau-tr50-26800030/?c=750000000#!/item',
    rating: 5,
    likes: 0,
    slideNumber: 1,
  },
    {
      category: Categories[1],
      id: 12,
      name: 'Штанга York G-009 50 кг',
      price: 70768,
      description:
        'тип: штанга\n' +
        'вид грифа: прямая\n' +
        'общий вес штанги: 50 кг\n' +
        'вес грифа: 2.5 кг\n'+
        'длина грифа: 150 см',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/h9c/51309520388126/york-g-009-50-kg-105170069-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/york-g-009-50-kg-105170069/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[1],
      id: 13,
      name: 'Инверсионный стол Genau Fitspine EA-350',
      price: 79890 ,
      description:
        'управление: механическое\n' +
        'максимальный вес пользователя: 120 кг\n' +
        'максимальный уровень отклонения: 180 град.\n' +
        'материал: сталь, ,искусственная кожа',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h3d/51918792130590/genau-fitspine-ea-350-cernyj-43800003-1-Container.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/genau-fitspine-ea-350-chernyi-43800003/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[1],
      id: 14,
      name: 'Гравитационные ботинки Rekoy F103SOFT-RED',
      price: 22450 ,
      description:
        'материал: натуральная кожа, ,сталь\n' +
        'максимальная нагрузка: 150 кг\n' +
        'диаметр перекладины: 3.5 см',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h55/68499996966942/rekoy-f103soft-red-108695936-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/rekoy-f103soft-red-108695936/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[1],
      id: 15,
      name: 'Силовая рама SHUA SH-6853',
      price: 897601 ,
      description:
        'тип: силовая рама\n' +
        'тип нагрузки: собственный вес\n' +
        'крепление: свободное\n' +
        'группа мышц: грудь, ,ноги, ,плечи, ,пресс, ,спина',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha8/ha5/44527534211102/shua-sh-6853-102060771-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/shua-sh-6853-102060771/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[2],
      id: 16,
      name: 'Apple iPhone 14 Pro Max',
      price: 690689 ,
      description:
        'технология NFC: Да\n' +
        'цвет: фиолетовый\n' +
        'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
        'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[2],
      id: 17,
      name: 'Apple iPhone 14',
      price: 421225 ,
      description:
        'технология NFC: Да\n' +
        'цвет: голубой\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3279 мАч',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h41/63073057177630/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[2],
      id: 18,
      name: 'Samsung Galaxy S22 Ultra 12',
      price: 509990 ,
      description:
        'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+\n' +
        'диагональ: 6.8 дюйм\n' +
        'размер оперативной памяти: 12 ГБ\n' +
        'процессор: 8-ядерный Exynos 2200\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h1e/48695060561950/samsung-galaxy-s22-ultra-12-256gb-cernyj-podarok-103668309-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[2],
      id: 19,
      name: 'Samsung Galaxy A13',
      price: 88789 ,
      description:
        'технология NFC: Да\n' +
        'цвет: голубой\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАчч',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hb5/49613818069022/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[2],
      id: 20,
      name: 'Xiaomi Redmi Note 10 Pro',
      price: 128350  ,
      description:
        'технология NFC: Да\n' +
        'цвет: серый\n' +
        'тип экрана: цветной AMOLED, сенсорный\n' +
        'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5020 мАч',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[3],
      id: 21,
      name: 'Apple MacBook Air 13',
      price: 478888 ,
      description:
        'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1 7 core\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[3],
      id: 22,
      name: 'ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0',
      price: 369990 ,
      description:
        'диагональ экрана: 15.6 дюйм\n' +
        'процессор: AMD Ryzen 5 4600H\n' +
        'видеокарта: nVidia GeForce GTX1650\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[3],
      id: 23,
      name: 'ASUS X515EA-BQ1189W 90NB0TY1-M25390',
      price: 249990,
      description:
        'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Core i3 1115G4\n' +
        'видеокарта: Intel UHD Graphics\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/hca/51563452956702/asus-asus-x515ea-i3-1115g4-8gb-256ssd-15-6-win11-x515ea-bq1189w-x515ea-bq1189w-seryj-105321625-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/asus-x515ea-bq1189w-90nb0ty1-m25390-seryi-105321625/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[3],
      id: 24,
      name: 'HP Europe Pavilion 15S-EQ3068CI 725Z0EA',
      price: 299900,
      description:
        'диагональ экрана: 15.6 дюйм\n' +
        'процессор: AMD Ryzen 5 5625U\n' +
        'видеокарта: AMD Radeon Graphics\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3d/64208771874846/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
    {
      category: Categories[3],
      id: 25,
      name: 'Apple MacBook Air 13',
      price: 699970 ,
      description:
        'диагональ экрана: 13.6 дюйм\n' +
        'процессор: Apple M2\n' +
        'видеокарта: Apple M2 8-Core\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
      images:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/h50/62957120356382/apple-macbook-air-13-z15s000mp-seryi-106722601-1.jpg',
      prodLink:
        'https://kaspi.kz/shop/p/apple-macbook-air-13-z15s000mp-seryi-106722601/?c=750000000#!/item',
      rating: 5,
      likes: 0,
      slideNumber: 1,
    },
  ];

  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
*/
