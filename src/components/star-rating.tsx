import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rate: number;
  maxStars?: number;
}

export default function StarRating({ rate, maxStars = 5 }: StarRatingProps) {
  const fullStars = Math.floor(rate);
  const partialStar = rate - fullStars; // Not used for a half star, but good for logic
  const emptyStars = maxStars - Math.ceil(rate);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
      {/* This simple version rounds, so we don't show partial stars */}
      {Math.round(rate) > fullStars && (
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(emptyStars > 0 ? emptyStars : 0)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
      ))}
    </div>
  );
}
