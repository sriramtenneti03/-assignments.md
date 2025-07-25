'use client';

import { type Product } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import StarRating from './star-rating';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetailsClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Added to cart!',
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-lg bg-white p-8 shadow-sm">
          <div className="relative h-96 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint="product image"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="mb-2 text-3xl font-bold font-headline">{product.title}</h1>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <div className="mb-4 flex items-center gap-2">
            <StarRating rate={product.rating.rate} />
            <span className="text-sm text-muted-foreground">
              ({product.rating.count} reviews)
            </span>
          </div>
          <p className="mb-6 text-3xl font-bold text-primary font-headline">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-8 text-foreground/80 leading-relaxed">
            {product.description}
          </p>
          <Button size="lg" onClick={handleAddToCart} className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
