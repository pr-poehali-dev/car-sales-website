import { backgroundImage } from "@/data/carImages";

/**
 * Компонент для отображения фонового изображения с Porsche 911 Turbo S
 */
export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30 dark:opacity-15" 
        style={{
          backgroundImage: `url(${backgroundImage.url})`,
          backgroundPosition: "left center"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
