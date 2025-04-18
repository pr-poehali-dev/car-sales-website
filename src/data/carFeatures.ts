import { CarFeature } from "@/types/car";

/**
 * Стандартные наборы особенностей автомобилей
 */
export const standardFeatures: Record<string, CarFeature[]> = {
  economy: [
    { icon: '⚡', name: 'Расход', value: '5.8 л/100 км' },
    { icon: '🛡️', name: 'Безопасность', value: '4 звезды' },
    { icon: '🛄', name: 'Багажник', value: '460 л' }
  ],
  comfort: [
    { icon: '⚡', name: 'Расход', value: '6.5 л/100 км' },
    { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
    { icon: '🛄', name: 'Багажник', value: '480 л' }
  ],
  premium: [
    { icon: '⚡', name: 'Расход', value: '7.2 л/100 км' },
    { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
    { icon: '🛄', name: 'Багажник', value: '550 л' }
  ],
  suv: [
    { icon: '⚡', name: 'Расход', value: '7.5 л/100 км' },
    { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
    { icon: '🛄', name: 'Багажник', value: '560 л' }
  ]
};

/**
 * Создает кастомный набор особенностей автомобиля
 */
export const createCustomFeatures = (
  fuelConsumption: string,
  safetyRating: string,
  trunkVolume: string
): CarFeature[] => {
  return [
    { icon: '⚡', name: 'Расход', value: fuelConsumption },
    { icon: '🛡️', name: 'Безопасность', value: safetyRating },
    { icon: '🛄', name: 'Багажник', value: trunkVolume }
  ];
};
