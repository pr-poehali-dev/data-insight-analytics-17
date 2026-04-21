import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#FF4D00] border-[#FF4D00]">Roblox Studio Маркетплейс</Badge>,
    title: "Карты и модели для твоего Roblox мира.",
    showButton: true,
    buttonText: 'Смотреть каталог',
    bgImage: 'https://cdn.poehali.dev/projects/3b53f7f3-28c4-4fcf-ad2c-01d082db1775/files/2d40494a-62f5-4755-a906-628a367fdfd6.jpg'
  },
  {
    id: 'about',
    title: 'Почему выбирают нас?',
    content: 'Только эксклюзивные карты и 3D-модели от профессиональных разработчиков Roblox Studio. Никакой воды — только качественный контент для твоих игр.'
  },
  {
    id: 'features',
    title: 'Что есть в каталоге',
    content: 'Игровые карты, персонажи, здания, транспорт, природа, UI-элементы и целые геймплейные сцены. Всё готово к использованию — просто вставь в проект.'
  },
  {
    id: 'testimonials',
    title: 'Тысячи игр уже используют наши ассеты',
    content: 'Разработчики со всего мира выбирают наши модели для своих Roblox-проектов. Быстрая покупка, мгновенная доставка файлов.'
  },
  {
    id: 'join',
    title: 'Возьми свой проект на новый уровень.',
    content: 'Заходи в каталог, выбирай нужные карты и модели — и уже сегодня запускай крутую игру в Roblox Studio.',
    showButton: true,
    buttonText: 'Купить сейчас'
  },
]