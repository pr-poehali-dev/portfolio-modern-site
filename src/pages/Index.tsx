import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Полнофункциональный интернет-магазин с панелью администратора",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/img/02741fe9-18af-4d38-8ab5-a3a4d84ba315.jpg",
    },
    {
      title: "Task Management App",
      description: "Приложение для управления задачами с командной работой",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "/img/02741fe9-18af-4d38-8ab5-a3a4d84ba315.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "Современный сайт-портфолио с анимациями и адаптивным дизайном",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/img/02741fe9-18af-4d38-8ab5-a3a4d84ba315.jpg",
    },
  ];

  const skills = [
    { name: "React", level: "Expert", icon: "Code" },
    { name: "TypeScript", level: "Advanced", icon: "FileCode" },
    { name: "Node.js", level: "Advanced", icon: "Server" },
    { name: "MongoDB", level: "Intermediate", icon: "Database" },
    { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
    { name: "Git", level: "Advanced", icon: "GitBranch" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              <Icon name="Code" className="inline mr-2" size={28} />
              DevPortfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О себе
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Привет, я <span className="text-blue-600">Веб-разработчик</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Создаю современные веб-приложения с использованием React,
              TypeScript и лучших практик разработки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать CV
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О себе</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Опытный фронтенд-разработчик с 5+ годами опыта создания
              веб-приложений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Мои навыки
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Icon
                          name={skill.icon}
                          className="text-blue-600"
                          size={24}
                        />
                        <Badge variant="secondary">{skill.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-gray-900">
                        {skill.name}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <img
                src="/img/02741fe9-18af-4d38-8ab5-a3a4d84ba315.jpg"
                alt="Workspace"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Некоторые из моих последних проектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="ExternalLink" className="mr-1" size={16} />
                      Демо
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="Github" className="mr-1" size={16} />
                      Код
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Готов к новым проектам? Давайте обсудим ваши идеи!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Связаться со мной
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-blue-600" size={20} />
                  <span className="text-gray-700">dev@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-600" size={20} />
                  <span className="text-gray-700">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-blue-600" size={20} />
                  <span className="text-gray-700">Москва, Россия</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Соцсети
                </h4>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" className="p-2">
                    <Icon name="Github" size={20} />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input placeholder="your@email.com" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Тема
                    </label>
                    <Input placeholder="Тема сообщения" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <Icon name="Code" className="inline mr-2" size={28} />
            DevPortfolio
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 DevPortfolio. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
