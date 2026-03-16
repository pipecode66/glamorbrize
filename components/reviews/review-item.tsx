import type { Review } from "@/lib/db-utils"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

interface ReviewItemProps {
  review: Review
}

export function ReviewItem({ review }: ReviewItemProps) {
  const formattedDate = formatDistanceToNow(new Date(review.created_at), {
    addSuffix: true,
    locale: es,
  })

  // Obtener las iniciales del nombre del usuario
  const getInitials = () => {
    if (!review.user) return "U"
    const firstName = review.user.first_name || ""
    const lastName = review.user.last_name || ""
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  // Obtener el nombre completo del usuario
  const getFullName = () => {
    if (!review.user) return "Usuario"
    return `${review.user.first_name || ""} ${review.user.last_name || ""}`.trim() || "Usuario"
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
            {getInitials()}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">{getFullName()}</h4>
            <span className="text-xs text-gray-500">{formattedDate}</span>
          </div>
          <div className="flex items-center mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          {review.title && <h5 className="mt-2 text-sm font-medium">{review.title}</h5>}
          {review.content && <p className="mt-1 text-sm text-gray-600">{review.content}</p>}
        </div>
      </div>
    </div>
  )
}
