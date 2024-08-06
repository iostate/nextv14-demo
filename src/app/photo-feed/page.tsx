// import Link from 'next/link';
// import airplaneImages from './airplanes';
// import Image from 'next/image';

// export default function PhotosHome() {
//   return (
//     <>
//       <main className="container mx-auto">
//         <h1 className="text-center text-3xl font-bold my-4">
//           Airplanes of the World
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {airplaneImages.map(({ id, src, name }) => (
//             <Link key={id} href={`/photo-feed/${id}`}>
//               <Image
//                 alt={name}
//                 src={src}
//                 className="w-full object-cover aspect-square"
//               />
//             </Link>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }

import Link from 'next/link';
import airplanes from './airplanes';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New airplanes of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {airplanes.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
