'use client';
import { usePathname } from 'next/navigation';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const pathName = usePathname();
  const displayError = { message: error.message, url: pathName };
  return (
    <>
      {/* <div>{error.message, url: pathName}</div> */}
      <div>Error: {displayError.message}</div>
      <div>URL: {displayError.url}</div>
      <button onClick={reset}>Try again</button>
      {/* <div>URL: {pathName}</div> */}
    </>
  );
}
