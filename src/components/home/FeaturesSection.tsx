import { Shield, ThumbsUp, Truck, RefreshCw } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Гарантия качества',
      description: 'Все автомобили проходят тщательную проверку перед продажей.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-secondary" />,
      title: 'Выгодные условия',
      description: 'Низкие проценты по кредиту и лизингу, программы трейд-ин.'
    },
    {
      icon: <Truck className="h-10 w-10 text-accent" />,
      title: 'Быстрая доставка',
      description: 'Доставим ваш автомобиль в любой регион России.'
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: 'Удобный обмен',
      description: 'Обменяйте свой старый автомобиль на новый с доплатой.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Почему выбирают нас
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;