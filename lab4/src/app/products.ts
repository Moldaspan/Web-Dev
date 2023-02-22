export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  prodLink: string;
  rating: number;
  slideNumber: number;
}

export const products = [
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
  {
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
    slideNumber: 1,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
