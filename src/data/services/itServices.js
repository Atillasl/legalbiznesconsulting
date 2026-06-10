import { techImages } from '../../assets'

export const itServices = [
  {
    id: 'it-1',
    category: 'Web Development',
    title: 'Veb Sayt və E-ticarət Həlləri',
    description: 'Responsive veb saytlar və onlayn mağazalar üçün tam inkişaf xidmətləri.',
    image: techImages[0]
  },
  {
    id: 'it-2',
    category: 'App Development',
    title: 'Mobil və Veb Tətbiq İnkişafı',
    description: 'iOS, Android və hibrid tətbiq layihələri üçün dizayn və inkişaf.',
    image: techImages[1 % techImages.length]
  },
  {
    id: 'it-3',
    category: 'IT Consulting',
    title: 'IT Konsaltinq və İnfrastruktur Dəstəyi',
    description: 'Texnoloji strategiya, bulud inteqrasiyası və biznes avtomatlaşdırılması.',
    image: techImages[0]
  },
]
