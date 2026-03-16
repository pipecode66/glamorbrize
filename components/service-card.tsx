import { Sparkles, Users, Scissors } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Sparkles" | "Users" | "Scissors"
}

const iconMap = {
  Sparkles,
  Users,
  Scissors,
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <div className="bg-white p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow text-center border-0 h-full flex flex-col">
      {/* Contenedor del ícono */}
      <div className="flex justify-center mb-4 sm:mb-6 flex-shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center">
          <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
        </div>
      </div>
      
      {/* Título - altura fija */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex-shrink-0 h-12 sm:h-14 md:h-16 flex items-center justify-center">
        {title}
      </h3>
      
      {/* Descripción - ocupa espacio restante */}
      <div className="flex-grow flex items-center justify-center min-h-[80px] sm:min-h-[90px] md:min-h-[100px]">
        <p className="text-muted text-sm sm:text-base leading-relaxed px-1">
          {description}
        </p>
      </div>
    </div>
  )
}
