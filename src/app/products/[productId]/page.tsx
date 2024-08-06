import next from 'next';
import { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  // Perform async tasks to get more metadata to add to the page
  // const title: string = await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve('iPhone 15 Pro Max');
  //   }, 1000);
  // });

  return {
    title: `Product ${params.productId}`,
    // title: title,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <h1>Showing Details About {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
