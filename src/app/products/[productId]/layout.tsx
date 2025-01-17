function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const randomInt = getRandomInt(2);

  if (randomInt === 1) {
    throw new Error('Product details not found');
  }

  return (
    <>
      {children}
      <h2>Product Features</h2>
    </>
  );
}
