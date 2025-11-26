import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Building2',
      title: 'Жилищное строительство',
      description: 'Строительство многоквартирных домов, коттеджей и таунхаусов под ключ'
    },
    {
      icon: 'Warehouse',
      title: 'Коммерческие объекты',
      description: 'Торговые центры, офисные здания, складские комплексы'
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция',
      description: 'Капитальный ремонт и модернизация существующих зданий'
    },
    {
      icon: 'HardHat',
      title: 'Промышленное строительство',
      description: 'Заводы, производственные цеха, логистические комплексы'
    }
  ];

  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/8dbefb8c-010e-4c84-aaa4-10d056ed1863/files/fae9e07c-d10f-44fb-962e-8c269ed04a82.jpg',
      title: 'ЖК "Современный квартал"',
      description: '15-этажный жилой комплекс премиум-класса',
      area: '45 000 м²',
      year: '2024'
    },
    {
      image: 'https://cdn.poehali.dev/projects/8dbefb8c-010e-4c84-aaa4-10d056ed1863/files/5d915405-a83f-417c-8594-d3ab2e9e3e96.jpg',
      title: 'Бизнес-центр "Горизонт"',
      description: 'Офисное здание класса A с подземным паркингом',
      area: '28 000 м²',
      year: '2023'
    },
    {
      image: 'https://cdn.poehali.dev/projects/8dbefb8c-010e-4c84-aaa4-10d056ed1863/files/e3e7d571-af63-4e8a-a79a-ee4bfc384870.jpg',
      title: 'Коттеджный поселок "Riverside"',
      description: 'Элитные таунхаусы у реки',
      area: '12 000 м²',
      year: '2024'
    }
  ];

  const certificates = [
    { name: 'ISO 9001:2015', description: 'Система менеджмента качества' },
    { name: 'ISO 14001:2015', description: 'Экологический менеджмент' },
    { name: 'СРО', description: 'Допуск на строительные работы' },
    { name: 'ISO 45001:2018', description: 'Охрана труда и безопасность' }
  ];

  const reviews = [
    {
      name: 'Михаил Петров',
      company: 'ООО "Инвест Груп"',
      text: 'Отличная компания! Построили бизнес-центр точно в срок, качество работ на высоте.',
      rating: 5
    },
    {
      name: 'Анна Сергеева',
      company: 'Частный заказчик',
      text: 'Спасибо за профессиональный подход к строительству нашего дома. Все пожелания были учтены.',
      rating: 5
    },
    {
      name: 'Дмитрий Козлов',
      company: 'ЗАО "Торговый дом"',
      text: 'Реконструкция склада прошла без простоев производства. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">СтройМастер</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors font-medium">
                Проекты
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors font-medium">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </div>

            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
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
                Полный цикл строительных работ от проектирования до сдачи объекта. 
                Качество, надежность и соблюдение сроков — наши главные принципы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')} className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Compass" size={20} className="mr-2" />
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')} className="bg-white text-secondary hover:bg-white/90">
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
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Завершенных проектов</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">15</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Специалистов</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Надежный партнер в строительстве</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы — команда профессионалов с многолетним опытом в строительной отрасли. 
              Наша миссия — создавать качественные и долговечные объекты.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Сертификаты и лицензии</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="BadgeCheck" size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Что мы строим</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр строительных услуг для объектов любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon name={service.icon} size={32} className="text-primary group-hover:text-white transition-colors" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реализованные объекты, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
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
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Что говорят клиенты</h2>
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
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
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
                      <div className="text-sm text-muted-foreground">{review.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время
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
                  <p className="text-muted-foreground">г. Москва, ул. Строителей, д. 15</p>
                  <p className="text-muted-foreground">БЦ "Горизонт", офис 501</p>
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
            <h3 className="text-2xl font-bold mb-6 text-center">Оставить заявку</h3>
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
                <Textarea placeholder="Расскажите о вашем проекте..." rows={5} />
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
                Профессиональное строительство объектов любой сложности с 2009 года
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
                <li>+7 (495) 123-45-67</li>
                <li>info@stroymaster.ru</li>
                <li>г. Москва, ул. Строителей, 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
