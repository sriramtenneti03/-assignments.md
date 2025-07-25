import type { Product } from '@/types';
import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/components/product-details-client';

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) {
    return {
      title: 'Product not found',
    };
  }
  return {
    title: `${product.title} | InterBuy`,
    description: product.description,
  };
}
