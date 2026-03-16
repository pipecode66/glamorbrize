import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Skeleton */}
      <div className="h-16 border-b">
        <div className="container flex items-center justify-between h-full">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Breadcrumb Skeleton */}
      <div className="border-b py-4">
        <div className="container">
          <Skeleton className="h-4 w-64" />
        </div>
      </div>

      {/* Hero Banner Skeleton */}
      <div className="py-12">
        <div className="container">
          <Skeleton className="h-64 w-full rounded-lg mb-8" />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="container">
        <div className="flex gap-4 mb-8">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-square w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
