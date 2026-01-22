import { Skeleton } from '@/app/components/ui/skeleton';

export function ProductCardSkeleton() {
  return (
    <div className="bg-card rounded-lg border overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="aspect-square w-full" />
      
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-6 w-28" />
      </div>
    </div>
  );
}
