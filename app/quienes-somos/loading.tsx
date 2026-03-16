import { Skeleton } from "@/components/ui/skeleton"

export default function QuienesSomosLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Bar Skeleton */}
      <Skeleton className="h-8 w-full" />

      {/* Header Skeleton */}
      <Skeleton className="h-16 w-full" />

      {/* Hero Banner Skeleton */}
      <Skeleton className="h-[50vh] w-full" />

      {/* Content Skeletons */}
      <div className="container py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-64 w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
          <Skeleton className="h-64 w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Skeleton className="h-64 w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <Skeleton className="h-8 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
