import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  profession: string
  text: string
  rating: number
}

export default function TestimonialCard({ name, profession, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
      <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-muted mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-center italic">"{text}"</p>
      <div className="text-center">
        <h4 className="font-bold text-sm sm:text-base md:text-lg">{name}</h4>
        <p className="text-muted text-xs sm:text-sm">{profession}</p>
      </div>
    </div>
  )
}
