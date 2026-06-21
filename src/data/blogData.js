import { clientLogos } from '../assets'

export const blogCategories = ['all', 'startup', 'corporate']

export const blogPosts = [
  {
    id: 1,
    title: {
      az: "Azərbaycanda Startapların Hüquqi Qeydiyyatı: Addım-Addım Bələdçi",
      en: "Startup Legal Registration in Azerbaijan: A Step-by-Step Guide",
      ru: "Юридическая регистрация стартапов в Азербайджане: пошаговое руководство"
    },
    excerpt: {
      az: "Yeni bir texnoloji startap qurarkən vergi, müəllif hüquqları, təsisçi müqavilələri (Vesting) və investor münasibətlərində hansı məqamlara diqqət etməlisiniz?",
      en: "Key legal points for new tech startups: tax, IP, founder agreements (vesting) and investor relations.",
      ru: "Ключевые юридические моменты для новых тех-стартапов: налоги, ИС, соглашения учредителей (vesting) и отношения с инвесторами."
    },
    category: "startup",
    date: "05 İyun 2026",
    readTime: "5 dəq",
    image: clientLogos[0],
    content: {
      az: [
        "Startapın hüquqi strukturunu düzgün seçmək işinizin gələcəyi üçün əsas addımdır. Məqsəd və investisiya modelinə görə MMC, fərdi sahibkarlıq və ya filial şəklində qeydiyyat məsələləri fərqlənir.",
        "Yaradıcı IP, müəllif və patent hüquqları startapın ilkin mərhələsində qorunmalıdır. Təsisçi müqavilələri və Vesting mexanizmləri, həmçinin investorlar üçün şəffaf pay bölgüsü, potensial hüquqi mübahisələrin qarşısını alır.",
        "Vergi rejimi, kassa uçotu və əmək müqavilələri kimi əməliyyat tələbələri, müvafiq lisenziyaların və sənədləşmənin tam yığımını tələb edir. Bu prosesdə doğru hüquqi məsləhət ödənişləri azaltmağa kömək edir."
      ],
      en: [
        "Choosing the right legal structure for your startup is fundamental. Depending on your goals and investment model, options may include LLCs, sole proprietorships, or branches.",
        "Protect IP early: copyrights and patents should be considered, and founder agreements with vesting help prevent future disputes over equity.",
        "Tax regime, bookkeeping and employment agreements require attention; correct legal guidance can reduce costs and regulatory risks."
      ],
      ru: [
        "Выбор правильной юридической структуры для стартапа имеет ключевое значение. В зависимости от целей и модели инвестирования это может быть ООО, индивидуальное предпринимательство или филиал.",
        "Защитите ИС на раннем этапе: авторские права и патенты следует учитывать, а соглашения учредителей с вестингом предотвращают будущие споры о долях.",
        "Налоговый режим, бухучет и трудовые договоры требуют внимания; правильная юридическая поддержка помогает снизить расходы и регуляторные риски."
      ]
    }
  },
  {
    id: 2,
    title: {
      az: "Süni İntellekt və Müəllif Hüquqları: Qanunvericilik Haraya Gedir?",
      en: "AI and Copyright: Where is the Law Heading?",
      ru: "ИИ и авторские права: куда движется законодательство?"
    },
    excerpt: {
      az: "AI modelləri tərəfindən generatsiya olunan kodların, dizaynların və rəqəmsal məhsulların mülkiyyət hüququ kimə məxsusdur? Cari qlobal trendlər və boşluqlar.",
      en: "Who owns outputs from AI models — code, designs and digital products? Current global trends and gaps.",
      ru: "Кому принадлежит продукт, созданный ИИ — код, дизайн и цифровые продукты? Текущие глобальные тренды и пробелы."
    },
    category: "cyber",
    date: "28 May 2026",
    readTime: "7 dəq",
    image: clientLogos[1],
    content: {
      az: [
        "AI tərəfindən yaradılan məzmunun müəllif hüququ statusu hələ də beynəlxalq səviyyədə vahid standartlara malik deyil. Bir çox yurisdiksiya, nəticənin insan nəzarəti və yaradıcı töhfəyə bağlı olduğunu qəbul edir.",
        "Texnoloji və hüquqi komandalar, model təlimində istifadə olunan məlumatların lisenziyalaşdırılmasına diqqət yetirməli, həmçinin etik və müəllif hüququ qaydalarına uyğunluğu təmin etməlidir.",
        "Koropativ siyasətlər və istifadə şərtləri, modellərdən əldə olunan nəticələrin hüquq sahibini necə müəyyən edəcəyini və üç tərəf risklərini necə idarə edəcəyini aydın şəkildə ifadə etməlidir."
      ],
      en: [
        "The copyright status of AI-generated content lacks unified international standards. Many jurisdictions require meaningful human input or control for traditional copyright protection.",
        "Tech and legal teams should license training data carefully and ensure ethical and copyright compliance in model development.",
        "Corporate policies and terms of use must clearly define ownership of outputs and how third-party risks are managed."
      ],
      ru: [
        "Статус авторских прав на контент, созданный ИИ, пока не имеет единого международного стандарта. Во многих юрисдикциях требуется существенное человеческое участие для защиты авторских прав.",
        "Технические и юридические команды должны внимательно относиться к лицензированию данных для обучения и обеспечению соответствия этическим и авторским требованиям.",
        "Корпоративные политики и условия использования должны четко определять право собственности на результаты и управление рисками третьих лиц."
      ]
    }
  },
  {
    id: 3,
    title: {
      az: "Şirkətlərdə Fərdi Məlumatların Qorunması Auditi Necə Aparılır?",
      en: "How to Conduct a Personal Data Protection Audit in Companies",
      ru: "Как провести аудит защиты персональных данных в компании"
    },
    excerpt: {
      az: "Qanunvericiliyin sərt tələblərinə əsasən, müştəri və işçi datalarını qoruyarkən cərimələrdən yayınmağın hüquqi metodologiyası və texniki təhlükəsizlik qaydaları.",
      en: "Legal methodology and technical security practices to avoid fines while protecting customer and employee data.",
      ru: "Юридическая методология и технические меры безопасности для защиты данных клиентов и сотрудников и избежания штрафов."
    },
    category: "corporate",
    date: "14 May 2026",
    readTime: "4 dəq",
    image: clientLogos[2],
    content: {
      az: [
        "Auditi hazırlıq mərhələsi şirkətin məlumat axınını, məlumat toplanma mənbələrini və idarəetmə siyasətlərini qiymətləndirməklə başlayır. Məlumatın hansı kateqoriyaya daxil olduğu və necə işlənməsi burada əsas rol oynayır.",
        "Hüquqi uyğunluq yoxlanışı GDPR, yerli şəxsi məlumatların qorunması qanunları və kontraktual öhdəliklərlə bağlı sənədlərin qiymətləndirilməsini əhatə edir. Bu sahədə müvafiq icazələr, məlumat subyektinin razılığı və məlumat saxlama müddətləri xüsusi diqqət tələb edir.",
        "Texniki audit isə şəbəkə təhlükəsizliyi, şifrələmə və giriş nəzarəti sistemlərini yoxlayır. Çıxarılan nəticələr əsasında şirkətə risklərin aradan qaldırılması və sənədləşmələrdəki boşluqların bağlanması üçün konkret addımlar təklif olunur."
      ],
      en: [
        "The audit preparation phase begins with mapping data flows, collection sources, and governance policies to determine how data is categorized and processed.",
        "Legal compliance checks include GDPR, local data protection laws and contractual obligations, with a focus on consents and retention policies.",
        "Technical audits assess network security, encryption and access controls, resulting in concrete remediation steps to close gaps."
      ],
      ru: [
        "Подготовительный этап аудита начинается с картирования потоков данных, источников сбора и политик управления для определения категорий и процессов обработки.",
        "Юридическая проверка включает GDPR, местные законы о защите данных и договорные обязательства, с акцентом на согласия и сроки хранения.",
        "Технический аудит оценивает сетевую безопасность, шифрование и контроль доступа, что приводит к конкретным шагам по устранению уязвимостей."
      ]
    }
  }
]
