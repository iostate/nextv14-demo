'use client';
import { notFound } from 'next/navigation';

type ReviewParams = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({ params }: ReviewParams) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error loading review');
  }

  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      <h1>Review about {params.productId}</h1>
      <p>{params.reviewId}</p>
    </div>
  );
};

export default ReviewDetail;
