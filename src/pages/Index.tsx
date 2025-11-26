import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [buildingType, setBuildingType] = useState("residential");
  const [area, setArea] = useState(100);
  const [floors, setFloors] = useState(2);
  const [materials, setMaterials] = useState("brick");
  const [foundation, setFoundation] = useState("strip");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Building2",
      title: "Жилищное строительство",
      description:
        "Строительство многоквартирных домов, коттеджей и таунхаусов под ключ",
    },
    {
      icon: "Warehouse",
      title: "Коммерческие объекты",
      description: "Торговые центры, офисные здания, складские комплексы",
    },
    {
      icon: "Wrench",
      title: "Реконструкция",
      description: "Капитальный ремонт и модернизация существующих зданий",
    },
    {
      icon: "HardHat",
      title: "Промышленное строительство",
      description: "Заводы, производственные цеха, логистические комплексы",
    },
  ];

  const projects = [
    {
      image:
        "https://cdn.poehali.dev/projects/8dbefb8c-010e-4c84-aaa4-10d056ed1863/files/fae9e07c-d10f-44fb-962e-8c269ed04a82.jpg",
      title: 'ЖК "Современный квартал"',
      description: "15-этажный жилой комплекс премиум-класса",
      area: "45 000 м²",
      year: "2024",
    },
    {
      image:
        "https://cdn.poehali.dev/projects/8dbefb8c-010e-4c84-aaa4-10d056ed1863/files/5d915405-a83f-417c-8594-d3ab2e9e3e96.jpg",
      title: 'Бизнес-центр "Горизонт"',
      description: "Офисное здание класса A с подземным паркингом",
      area: "28 000 м²",
      year: "2023",
    },
    {
      image:
        "https://cdn.poehali.dev/projects/8dbefb8c-010e-4c84-aaa4-10d056ed1863/files/e3e7d571-af63-4e8a-a79a-ee4bfc384870.jpg",
      title: 'Коттеджный поселок "Riverside"',
      description: "Элитные таунхаусы у реки",
      area: "12 000 м²",
      year: "2024",
    },
  ];

  const certificates = [
    { name: "ISO 9001:2015", description: "Система менеджмента качества" },
    { name: "ISO 14001:2015", description: "Экологический менеджмент" },
    { name: "СРО", description: "Допуск на строительные работы" },
    { name: "ISO 45001:2018", description: "Охрана труда и безопасность" },
  ];

  const reviews = [
    {
      name: "Михаил Петров",
      company: 'ООО "Инвест Груп"',
      text: "Отличная компания! Построили бизнес-центр точно в срок, качество работ на высоте.",
      rating: 5,
    },
    {
      name: "Анна Сергеева",
      company: "Частный заказчик",
      text: "Спасибо за профессиональный подход к строительству нашего дома. Все пожелания были учтены.",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      company: 'ЗАО "Торговый дом"',
      text: "Реконструкция склада прошла без простоев производства. Рекомендую!",
      rating: 5,
    },
  ];

  const technologies = [
    {
      icon: "Layers",
      title: "BIM-моделирование",
      description:
        "Создание 3D-модели объекта для точного планирования и контроля на всех этапах строительства",
      benefits: [
        "Исключение ошибок",
        "Экономия до 20% времени",
        "Визуализация проекта",
      ],
    },
    {
      icon: "Zap",
      title: "Энергоэффективные решения",
      description:
        "Современные материалы и системы для снижения энергопотребления здания",
      benefits: [
        "Экономия на отоплении",
        "Класс A+ энергоэффективности",
        "Экологичность",
      ],
    },
    {
      icon: "Cpu",
      title: "Умный дом",
      description:
        "Интеграция систем автоматизации для комфорта и безопасности жильцов",
      benefits: [
        "Управление со смартфона",
        "Безопасность 24/7",
        "Экономия ресурсов",
      ],
    },
    {
      icon: "BoxSelect",
      title: "Модульное строительство",
      description:
        "Использование готовых модулей для ускорения процесса возведения объектов",
      benefits: [
        "Скорость в 2 раза выше",
        "Контроль качества на производстве",
        "Всесезонность",
      ],
    },
    {
      icon: "Shield",
      title: "Сейсмостойкие конструкции",
      description:
        "Специальные технологии для обеспечения безопасности зданий в сейсмоактивных зонах",
      benefits: [
        "Повышенная безопасность",
        "Соответствие СНиП",
        "Долговечность",
      ],
    },
    {
      icon: "Droplets",
      title: "Экологичные материалы",
      description:
        "Применение безопасных для здоровья и окружающей среды стройматериалов",
      benefits: [
        "Здоровый микроклимат",
        "Сертификация LEED",
        "Утилизируемость",
      ],
    },
  ];

  const guarantees = [
    {
      icon: "FileCheck",
      title: "Гарантия на работы",
      period: "5 лет",
      description: "Полная гарантия на все виды строительно-монтажных работ",
      details: [
        "Бесплатное устранение дефектов",
        "Гарантийное обслуживание",
        "Юридическое сопровождение",
      ],
    },
    {
      icon: "CalendarCheck",
      title: "Соблюдение сроков",
      period: "100%",
      description: "Фиксация сроков в договоре с финансовыми гарантиями",
      details: [
        "Штрафы за просрочку",
        "Поэтапный график работ",
        "Онлайн-отчетность",
      ],
    },
    {
      icon: "ShieldCheck",
      title: "Страхование объекта",
      period: "Полное",
      description: "Страхование строительных рисков на весь период работ",
      details: [
        "Защита от форс-мажора",
        "Страхование ответственности",
        "Компенсация ущерба",
      ],
    },
    {
      icon: "BadgeCheck",
      title: "Контроль качества",
      period: "24/7",
      description: "Многоуровневый контроль на каждом этапе строительства",
      details: [
        "Собственная лаборатория",
        "Проверка материалов",
        "Технический надзор",
      ],
    },
  ];

  const workStages = [
    {
      number: "01",
      title: "Консультация и замер",
      duration: "1-3 дня",
      description: "Выезд специалиста, осмотр участка, обсуждение пожеланий",
    },
    {
      number: "02",
      title: "Проектирование",
      duration: "2-4 недели",
      description:
        "Разработка проектной документации, согласование с заказчиком",
    },
    {
      number: "03",
      title: "Согласование и договор",
      duration: "3-5 дней",
      description:
        "Подписание договора, получение разрешений, подготовка площадки",
    },
    {
      number: "04",
      title: "Строительство",
      duration: "По проекту",
      description: "Поэтапное выполнение работ с регулярной отчетностью",
    },
    {
      number: "05",
      title: "Сдача объекта",
      duration: "5-7 дней",
      description: "Приемка работ, устранение замечаний, передача документов",
    },
  ];

  const calculateCost = () => {
    const basePrices: Record<string, number> = {
      residential: 45000,
      commercial: 55000,
      industrial: 40000,
      reconstruction: 35000,
    };

    const materialMultipliers: Record<string, number> = {
      brick: 1.0,
      concrete: 1.2,
      wood: 0.85,
      combined: 1.1,
    };

    const foundationMultipliers: Record<string, number> = {
      strip: 1.0,
      slab: 1.15,
      pile: 1.25,
    };

    const basePrice = basePrices[buildingType] || 45000;
    const materialCoef = materialMultipliers[materials] || 1.0;
    const foundationCoef = foundationMultipliers[foundation] || 1.0;
    const floorCoef = 1 + (floors - 1) * 0.15;

    const totalCost =
      basePrice * area * materialCoef * foundationCoef * floorCoef;
    return Math.round(totalCost / 1000) * 1000;
  };

  const estimatedCost = calculateCost();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">
                СтройМастер
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection("technologies")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Технологии
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Калькулятор
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Icon name="Award" size={16} className="mr-1" />
                15+ лет на рынке
              </Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Строим будущее вместе с вами
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Полный цикл строительных работ от проектирования до сдачи
                объекта. Качество, надежность и соблюдение сроков — наши главные
                принципы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("services")}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Icon name="Compass" size={20} className="mr-2" />
                  Наши услуги
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                  className="bg-white text-secondary hover:bg-white/90"
                >
                  <Icon name="FolderOpen" size={20} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Завершенных проектов
                    </div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">
                      98%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Довольных клиентов
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">
                      15
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Лет опыта
                    </div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">
                      200+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Специалистов
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">О нас</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Надежный партнер в строительстве
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы — команда профессионалов с многолетним опытом в строительной
              отрасли. Наша миссия — создавать качественные и долговечные
              объекты.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Сертификаты и лицензии
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name="BadgeCheck"
                        size={32}
                        className="text-primary"
                      />
                    </div>
                    <h4 className="font-bold text-xl mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Гарантия качества</h3>
              <p className="text-muted-foreground">
                Все работы застрахованы и сопровождаются расширенной гарантией
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Точные сроки</h3>
              <p className="text-muted-foreground">
                Соблюдаем договорные сроки благодаря четкому планированию
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Опытная команда</h3>
              <p className="text-muted-foreground">
                Квалифицированные специалисты с подтвержденными сертификатами
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Что мы строим
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр строительных услуг для объектов любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon
                        name={service.icon}
                        size={32}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши проекты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реализованные объекты, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-primary">
                    {project.year}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Maximize" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent">
              <Icon name="Sparkles" size={16} className="mr-1" />
              Инновации
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Современные технологии
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы используем передовые методы и инструменты для создания надежных
              и комфортных объектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-4">
                        <Icon
                          name={tech.icon}
                          size={40}
                          className="text-accent"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {tech.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="text-sm font-semibold text-muted-foreground mb-3">
                        Преимущества:
                      </div>
                      {tech.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Icon
                            name="CheckCircle2"
                            size={16}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          <span className="text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <Icon
                name="Award"
                size={48}
                className="mx-auto mb-6 text-primary"
              />
              <h3 className="text-3xl font-bold mb-4">
                Сертифицированные специалисты
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наша команда регулярно проходит обучение по новым технологиям и
                методам строительства. Мы являемся партнерами ведущих
                производителей строительных материалов и оборудования.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Внедренных технологий
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-accent mb-2">15</div>
                  <div className="text-sm text-muted-foreground">
                    Патентов на разработки
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Соответствие стандартам
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary">
              <Icon name="ShieldCheck" size={16} className="mr-1" />
              Гарантии
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ваша уверенность — наш приоритет
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы несем полную ответственность за качество работ и соблюдение
              сроков
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/40"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-300"></div>
                <CardContent className="p-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name={guarantee.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {guarantee.period}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {guarantee.description}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    {guarantee.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary text-white rounded-3xl p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Этапы работы
                </h3>
                <p className="text-white/80 text-lg">
                  Прозрачный процесс от первой встречи до сдачи объекта
                </p>
              </div>

              <div className="space-y-6">
                {workStages.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
                          <span className="text-3xl font-bold text-white">
                            {stage.number}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h4 className="text-2xl font-bold">{stage.title}</h4>
                          <Badge className="bg-accent text-white w-fit">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {stage.duration}
                          </Badge>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>

                      {index < workStages.length - 1 && (
                        <div className="hidden md:block absolute left-10 top-full w-0.5 h-6 bg-white/20"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("calculator")}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость и сроки
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <Icon
                name="Clock"
                size={48}
                className="mx-auto mb-4 text-primary"
              />
              <div className="text-4xl font-bold text-primary mb-2">-15%</div>
              <h4 className="font-bold text-lg mb-2">Сокращение сроков</h4>
              <p className="text-sm text-muted-foreground">
                За счет современных технологий и опыта команды
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <Icon
                name="TrendingDown"
                size={48}
                className="mx-auto mb-4 text-accent"
              />
              <div className="text-4xl font-bold text-accent mb-2">0%</div>
              <h4 className="font-bold text-lg mb-2">Скрытых платежей</h4>
              <p className="text-sm text-muted-foreground">
                Фиксированная цена в договоре без доплат
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <Icon
                name="ThumbsUp"
                size={48}
                className="mx-auto mb-4 text-primary"
              />
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <h4 className="font-bold text-lg mb-2">Довольных клиентов</h4>
              <p className="text-sm text-muted-foreground">
                Положительные отзывы и повторные обращения
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мнения тех, кто уже работал с нами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {review.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="calculator"
        className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary">
              <Icon name="Calculator" size={16} className="mr-1" />
              Калькулятор
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Рассчитайте стоимость проекта
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Укажите параметры вашего будущего объекта и получите
              предварительную смету
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-xl">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-lg font-bold">Тип объекта</Label>
                  <RadioGroup
                    value={buildingType}
                    onValueChange={setBuildingType}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem
                        value="residential"
                        id="residential"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="residential"
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <Icon name="Home" size={32} className="mb-2" />
                        <span className="font-medium">Жилой дом</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="commercial"
                        id="commercial"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="commercial"
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <Icon name="Building" size={32} className="mb-2" />
                        <span className="font-medium">Коммерческий</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="industrial"
                        id="industrial"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="industrial"
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <Icon name="Factory" size={32} className="mb-2" />
                        <span className="font-medium">Промышленный</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="reconstruction"
                        id="reconstruction"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="reconstruction"
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <Icon name="Wrench" size={32} className="mb-2" />
                        <span className="font-medium">Реконструкция</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-bold">Площадь объекта</Label>
                    <Badge variant="secondary" className="text-lg">
                      {area} м²
                    </Badge>
                  </div>
                  <Slider
                    value={[area]}
                    onValueChange={(value) => setArea(value[0])}
                    min={50}
                    max={5000}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>50 м²</span>
                    <span>5000 м²</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-bold">
                      Количество этажей
                    </Label>
                    <Badge variant="secondary" className="text-lg">
                      {floors}{" "}
                      {floors === 1 ? "этаж" : floors < 5 ? "этажа" : "этажей"}
                    </Badge>
                  </div>
                  <Slider
                    value={[floors]}
                    onValueChange={(value) => setFloors(value[0])}
                    min={1}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 этаж</span>
                    <span>20 этажей</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-lg font-bold">Материал стен</Label>
                  <RadioGroup
                    value={materials}
                    onValueChange={setMaterials}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div>
                      <RadioGroupItem
                        value="brick"
                        id="brick"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="brick"
                        className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <span className="font-medium">Кирпич</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="concrete"
                        id="concrete"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="concrete"
                        className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <span className="font-medium">Бетон</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="wood"
                        id="wood"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="wood"
                        className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <span className="font-medium">Дерево</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="combined"
                        id="combined"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="combined"
                        className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <span className="font-medium">Комбинированный</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-lg font-bold">Тип фундамента</Label>
                  <RadioGroup
                    value={foundation}
                    onValueChange={setFoundation}
                    className="grid grid-cols-3 gap-3"
                  >
                    <div>
                      <RadioGroupItem
                        value="strip"
                        id="strip"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="strip"
                        className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <span className="font-medium">Ленточный</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="slab"
                        id="slab"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="slab"
                        className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <span className="font-medium">Плитный</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="pile"
                        id="pile"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="pile"
                        className="flex items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all"
                      >
                        <span className="font-medium">Свайный</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 shadow-xl bg-gradient-to-br from-primary via-primary to-primary/90 text-white animate-scale-in">
                <div className="text-center space-y-6">
                  <div>
                    <Icon
                      name="Calculator"
                      size={48}
                      className="mx-auto mb-4 opacity-90"
                    />
                    <h3 className="text-2xl font-bold mb-2">
                      Предварительная стоимость
                    </h3>
                    <p className="text-white/80 text-sm">
                      Расчет на основе выбранных параметров
                    </p>
                  </div>

                  <div className="py-8">
                    <div className="text-6xl font-extrabold mb-2 animate-fade-in">
                      {estimatedCost.toLocaleString("ru-RU")} ₽
                    </div>
                    <div className="text-white/80 text-lg">
                      ≈{" "}
                      {Math.round(estimatedCost / area).toLocaleString("ru-RU")}{" "}
                      ₽/м²
                    </div>
                  </div>

                  <div className="space-y-3 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">Площадь:</span>
                      <span className="font-bold">{area} м²</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">Этажей:</span>
                      <span className="font-bold">{floors}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">Материал:</span>
                      <span className="font-bold">
                        {materials === "brick"
                          ? "Кирпич"
                          : materials === "concrete"
                            ? "Бетон"
                            : materials === "wood"
                              ? "Дерево"
                              : "Комбинированный"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">Фундамент:</span>
                      <span className="font-bold">
                        {foundation === "strip"
                          ? "Ленточный"
                          : foundation === "slab"
                            ? "Плитный"
                            : "Свайный"}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => scrollToSection("contact")}
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg"
                  >
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Получить точную смету
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-accent/50">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Info"
                      size={20}
                      className="text-accent flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 className="font-bold mb-1">Обратите внимание</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Это предварительный расчет. Точная стоимость
                        определяется после выезда специалиста на объект и
                        подготовки проектной документации.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-primary flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 className="font-bold mb-1">В стоимость включено</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Материалы и работа</li>
                        <li>• Базовые коммуникации</li>
                        <li>• Гарантия на все работы</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами
              в ближайшее время
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@stroymaster.ru</p>
                  <p className="text-muted-foreground">sales@stroymaster.ru</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Строителей, д. 15
                  </p>
                  <p className="text-muted-foreground">
                    БЦ "Горизонт", офис 501
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Оставить заявку
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} className="text-primary" />
                <span className="text-xl font-bold">СтройМастер</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Профессиональное строительство объектов любой сложности с 2009
                года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Жилищное строительство</li>
                <li>Коммерческие объекты</li>
                <li>Реконструкция</li>
                <li>Промышленное строительство</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>+7 (495) 920-29-86</li>
                <li>info@stroymaster.ru</li>
                <li>г. Москва, ул. Строителей, 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>© 2025 СтройМастер. Все права защищены.</p>
          </div>
        </div>
        апапап
      </footer>
    </div>
  );
};

export default Index;
