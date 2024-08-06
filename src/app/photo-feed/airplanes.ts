import { StaticImageData } from 'next/image';

import photo1 from './photos/1.jpg';
import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';
import photo5 from './photos/5.jpg';
import photo6 from './photos/6.jpg';
import photo7 from './photos/7.jpg';

export type AirplaneImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const airplaneImages: AirplaneImage[] = [
  {
    id: '1',
    name: 'Airplane 1',
    src: photo1,
    photographer: 'Random Dude 1',
    location: 'USA',
  },
  {
    id: '2',
    name: 'Airplane 2',
    src: photo2,
    photographer: 'Random Dude 2',
    location: 'USA',
  },
  // {
  //   id: '3',
  //   name: 'Airplane 3',
  //   src: photo3,
  //   photographer: 'Random Dude 3',
  //   location: 'USA',
  // },
  {
    id: '4',
    name: 'Airplane 4',
    src: photo4,
    photographer: 'Random Dude 4',
    location: 'USA',
  },
  {
    id: '5',
    name: 'Airplane 5',
    src: photo5,
    photographer: 'Random Dude 5',
    location: 'USA',
  },
  {
    id: '6',
    name: 'Airplane 6',
    src: photo6,
    photographer: 'Random Dude 6',
    location: 'USA',
  },
  {
    id: '7',
    name: 'Airplane 7',
    src: photo7,
    photographer: 'Random Dude 7',
    location: 'USA',
  },
];

export default airplaneImages;
