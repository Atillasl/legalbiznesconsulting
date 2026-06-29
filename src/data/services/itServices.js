import { techImages } from '../../assets'

export const itServices = [
  {
    id: 'it-1',
    category: 'Web Development',
    title: 'Veb saytların hazırlanması',
    description: 'Responsive və SEO-friendly veb saytların hazırlanması və inteqrasiyası.',
    shortDesc: 'Responsive və SEO-friendly veb saytların hazırlanması və inteqrasiyası.',
    longDesc: 'Responsive və SEO-friendly veb saytların hazırlanması və inteqrasiyası.',
    image: techImages[0]
  },
  {
    id: 'it-2',
    category: 'App Development',
    title: 'Mobil tətbiqlərin hazırlanması',
    description: 'iOS və Android üçün yerli və hibrid mobil tətbiqlərin dizayn və inkişafı.',
    shortDesc: 'iOS və Android üçün yerli və hibrid mobil tətbiqlərin dizayn və inkişafı.',
    longDesc: 'iOS və Android üçün yerli və hibrid mobil tətbiqlərin dizayn və inkişafı.',
    image: techImages[1 % techImages.length]
  },
]
