'use client';

import Card from '@/components/card';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Card>
      <div>Error in users...</div>
    </Card>
  );
}
