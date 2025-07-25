import ProductListClient from '@/components/product-list-client';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
          Welcome to InterBuy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover a curated selection of fine products.
        </p>
      </header>
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductListClient />
      </Suspense>
    </div>
  );
}
