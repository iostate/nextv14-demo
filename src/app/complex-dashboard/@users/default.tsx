'use client';
import Card from '@/components/card';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function DefaultUsers() {
  // const randInt = getRandomInt(14);

  // if (randInt === 1) {
  //   throw new Error("Can't find users");
  // }

  return <Card>Users: {/*<div>{randInt}</div> */}</Card>;
}
