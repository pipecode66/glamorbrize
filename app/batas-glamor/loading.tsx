import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-12">
      <Skeleton className="h-[50vh] w-full mb-8" />
      <div className="flex justify-center mb-8">
        <Skeleton className="h-12 w-full max-w-3xl" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Skeleton className="h-[500px] w-full" />
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-[300px] w-full" />
          <div className="flex gap-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
