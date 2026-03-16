import { Lightbulb, Star, Award } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: "Lightbulb" | "Star" | "Award"
  bgColor: string
}

const iconMap = {
  Lightbulb,
  Star,
  Award,
}

export default function FeatureCard({ title, description, icon, bgColor }: FeatureCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <div className={`${bgColor} p-4 sm:p-6 md:p-8 rounded-sm text-center`}>
      <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
          <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">{title}</h3>
      <p className="text-muted text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  )
}
