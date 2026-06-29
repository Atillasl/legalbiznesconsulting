import { clientLogos } from '../assets'

export const blogCategories = ['all', 'startup', 'corporate', 'cyber']

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
  },
  {
    id: 4,
    title: {
      az: "Qlobal Biznes Uyğunluğu Trendləri 2026",
      en: "Global Business Compliance Trends 2026",
      ru: "Глобальные тренды бизнес- compliance 2026"
    },
    excerpt: {
      az: "Müasir korporativ uyğunluq proqramlarının əsas elementləri və Azərbaycanın beynəlxalq təcrübəyə necə uyğunlaşdığı.",
      en: "Core elements of modern corporate compliance programs and how Azerbaijan is aligning with global practice.",
      ru: "Основные элементы современных программ корпоративного соответствия и как Азербайджан адаптируется к мировому опыту."
    },
    category: "corporate",
    date: "02 İyun 2026",
    readTime: "6 dəq",
    image: clientLogos[0],
    content: {
      az: [
        "Uyğunluq menecmenti təkcə qanuni tələblərin əməl olunması deyil, həm də etibarlı işgüzar reputasiya formalaşdırmaqdır.",
        "Daxili siyasətlər, şəffaf hesabatlıq və risk analizləri şirkətlərə bazar etibarını təmin edir.",
        "Əsas addımlar qanunvericiliyin daim yenilənməsi, təlim proqramları və effektiv nəzarət mexanizmlərinin tətbiqidir."
      ],
      en: [
        "Compliance management is not only about legal requirements, but also building a trusted business reputation.",
        "Internal policies, transparent reporting and risk analysis help companies secure market trust.",
        "Key steps include continuous legal updates, training programs and effective control mechanisms."
      ],
      ru: [
        "Управление соответствием — это не только соблюдение законов, но и формирование доверительной деловой репутации.",
        "Внутренние политики, прозрачная отчетность и анализ рисков помогают компаниям укреплять доверие на рынке.",
        "Ключевые шаги включают постоянное обновление законодательства, программы обучения и эффективные механизмы контроля."
      ]
    }
  },
  {
    id: 5,
    title: {
      az: "Hüquq Firmaları üçün Rəqəmsal Transformasiya",
      en: "Digital Transformation for Law Firms",
      ru: "Цифровая трансформация для юридических фирм"
    },
    excerpt: {
      az: "Hüquq şirkətlərinin iş proseslərini avtomatlaşdırması, daha qısa müddətdə daha çox iş görməsi və riskləri azaltması üçün strateji yanaşma.",
      en: "A strategic approach for law firms to automate workflows, increase throughput and reduce risk.",
      ru: "Стратегический подход для юридических фирм по автоматизации процессов, увеличению производительности и снижению рисков."
    },
    category: "corporate",
    date: "25 May 2026",
    readTime: "5 dəq",
    image: clientLogos[1],
    content: {
      az: [
        "Rəqəmsal alətlər hüquq firmalarına sənəd idarəetməsini, müştəri əlaqələrini və komanda əməkdaşlığını təkmilləşdirməyə imkan verir.",
        "Sistem inteqrasiyaları və proqram təminatı seçimi, həmçinin kibertəhlükəsizlik standartları əsas rol oynayır.",
        "Dəyişikliklərin idarə edilməsi və komanda hazırlığı transformasiyanın uğurlu icrası üçün vacib şərtlərdir."
      ],
      en: [
        "Digital tools help law firms improve document management, client relationships and team collaboration.",
        "System integrations, software selection and cybersecurity standards play a crucial role.",
        "Change management and team readiness are essential conditions for successful implementation."
      ],
      ru: [
        "Цифровые инструменты помогают юридическим фирмам улучшить управление документами, отношения с клиентами и командное взаимодействие.",
        "Интеграции систем, выбор программного обеспечения и стандарты кибербезопасности играют ключевую роль.",
        "Управление изменениями и готовность команды — важные условия успешной реализации."
      ]
    }
  },
  {
    id: 6,
    title: {
      az: "Startapların Term Sheet-ləri: Nəyi Bilməlisiniz?",
      en: "Startup Term Sheets: What You Need to Know",
      ru: "Термин-шит стартапа: что нужно знать"
    },
    excerpt: {
      az: "Maliyyə investoru ilə danışıqlarda ən çox diqqət tələb edən şərtlər, qiymətləndirmə və səlahiyyət məsələləri.",
      en: "The terms that need the most attention in investor negotiations: valuation, control and key deal points.",
      ru: "Условия, требующие наибольшего внимания в переговорах с инвесторами: оценка, контроль и ключевые параметры сделки."
    },
    category: "startup",
    date: "18 May 2026",
    readTime: "6 dəq",
    image: clientLogos[2],
    content: {
      az: [
        "Term Sheet investisiya prosesinin ilkin xəritəsidir; burada qiymətləndirmə və hüquqi öhdəliklər dəqiq müəyyən edilməlidir.",
        "Əsas qeydlər arasında likvidasiya üstünlükləri, pay bölgüsü və idarəetmə hüququ daxildir.",
        "Peşəkar hüquqi məsləhət, sonrakı mərhələdə yarana biləcək anlaşılmazlıqların qarşısını alır."
      ],
      en: [
        "A term sheet is the investment roadmap, where valuation and legal obligations must be clearly defined.",
        "Key considerations include liquidation preferences, equity split and governance rights.",
        "Professional legal advice prevents misunderstandings at later stages."
      ],
      ru: [
        "Термин-шит — это дорожная карта инвестиции, где должны быть четко определены оценка и юридические обязательства.",
        "Ключевые моменты включают ликвидационные преференции, распределение долей и права управления.",
        "Профессиональная юридическая помощь предотвращает недоразумения на последующих этапах."
      ]
    }
  },
  {
    id: 7,
    title: {
      az: "Sərhədlərarası Əməliyyatlarda Risk İdarəetməsi",
      en: "Risk Management in Cross-Border Deals",
      ru: "Управление рисками в трансграничных сделках"
    },
    excerpt: {
      az: "Bir neçə yurisdiksiya arasında əməliyyat apararkən müqavilə və vergi tənzimləmələrini necə sinxronlaşdırmaq lazımdır.",
      en: "How to synchronize contracts and taxation when operating across multiple jurisdictions.",
      ru: "Как синхронизировать контракты и налогообложение при работе в нескольких юрисдикциях."
    },
    category: "corporate",
    date: "10 May 2026",
    readTime: "6 dəq",
    image: clientLogos[0],
    content: {
      az: [
        "Hər bir bazarda yerli qanunvericiliklə yanaşı, ümumi beynəlxalq standartlara da əməl edilməlidir.",
        "Vergi optimallaşdırılması və əməliyyat strukturunun düzgün seçilməsi riskləri azaltmaq üçün vacibdir.",
        "Tərəfdaşlarla açıq kommunikasiya və müqavilə müddəalarının sərtliyi tranzaksiyaların baş tutması üçün əsasdır."
      ],
      en: [
        "Alongside local laws, global standards must also be observed in each market.",
        "Tax optimization and correct deal structuring are critical to lowering risks.",
        "Open communication with partners and clear contractual terms are central to successful transactions."
      ],
      ru: [
        "Наряду с местными законами следует соблюдать и глобальные стандарты в каждом рынке.",
        "Оптимизация налогообложения и правильная структура сделки важны для снижения рисков.",
        "Открытая коммуникация с партнерами и четкие договорные условия — основа успешных транзакций."
      ]
    }
  },
  {
    id: 8,
    title: {
      az: "KOBİ-lər üçün Kibertəhlükəsizlik Siyasəti 101",
      en: "Cybersecurity Policy Basics for SMEs",
      ru: "Основы политики кибербезопасности для МСП"
    },
    excerpt: {
      az: "Kiçik və orta sahibkarlıq üçün məxfi məlumatları və rəqəmsal aktivləri qorumağın effektiv qaydaları.",
      en: "Effective rules for protecting confidential data and digital assets in small and medium businesses.",
      ru: "Эффективные правила защиты конфиденциальных данных и цифровых активов для МСП."
    },
    category: "cyber",
    date: "04 May 2026",
    readTime: "5 dəq",
    image: clientLogos[1],
    content: {
      az: [
        "Şifrləmə, çoxfaktorlu identifikasiya və təhlükəsizlik siyasətinin sənədləşməsi əsas təməldir.",
        "Sistem zəifliklərinin davamlı skan edilməsi və əməkdaş təlimləri kiber hücumları azaltmağa kömək edir.",
        "Regulyar icazə yoxlamaları və giriş hüquqlarının məhdudlaşdırılması, kənar riskləri daha təhlükəsiz edir."
      ],
      en: [
        "Encryption, multi-factor authentication and documented security policies are foundational.",
        "Continuous vulnerability scanning and staff training help reduce cyberattacks.",
        "Regular permission audits and limited access rights make external risks safer."
      ],
      ru: [
        "Шифрование, многофакторная аутентификация и задокументированная политика безопасности — основа.",
        "Постоянное сканирование уязвимостей и обучение сотрудников помогают снизить количество кибератак.",
        "Регулярные аудиты прав доступа и ограниченные права доступа делают внешние риски более безопасными."
      ]
    }
  },
  {
    id: 9,
    title: {
      az: "Startuplar üçün Trademark Strategiyası",
      en: "Trademark Strategy for Azerbaijani Startups",
      ru: "Стратегия товарного знака для азербайджанских стартапов"
    },
    excerpt: {
      az: "Brendinizi yerli və beynəlxalq səviyyədə necə qorumaq, və təkrar istifadə üçün nəyi planlaşdırmaq.",
      en: "How to protect your brand locally and internationally, and what to plan for reuse.",
      ru: "Как защитить бренд на местном и международном уровнях и что планировать для повторного использования."
    },
    category: "startup",
    date: "28 Aprel 2026",
    readTime: "5 dəq",
    image: clientLogos[2],
    content: {
      az: [
        "Marka qeydiyyatı saxlamaq üçün unikal identifikasiya, sektor və hədəf bazar önəmlidir.",
        "Beynəlxalq qeydiyyat proseslərini erkən başlamaq keyfiyyətli qorunma üçün vacibdir.",
        "Hüquqi müdafiə strategiyaları, rəqib monitorinqi və lisenziyalaşdırma siyasəti ilə tamamlanmalıdır."
      ],
      en: [
        "For trademark protection, unique identity, sector and target market are important.",
        "Starting international registration early is essential for strong protection.",
        "Legal defense strategies should be complemented by competitor monitoring and licensing policy."
      ],
      ru: [
        "Для защиты товарного знака важны уникальность, сектор и целевой рынок.",
        "Раннее начало международной регистрации важно для надежной защиты.",
        "Юридические стратегии защиты должны дополняться мониторингом конкурентов и политикой лицензирования."
      ]
    }
  },
  {
    id: 10,
    title: {
      az: "VC Due Diligence: Əsas Hüquqi Yoxlamalar",
      en: "VC Due Diligence: Key Legal Checks",
      ru: "Дью дилижанс венчурного фонда: ключевые юридические проверки"
    },
    excerpt: {
      az: "Investor yoxlamalarının diqqət mərkəzində olan müqavilələr, aktivlər və əməliyyat tarixçəsi.",
      en: "The contracts, assets and operating history that are at the center of investor reviews.",
      ru: "Контракты, активы и операционная история, находящиеся в центре внимания инвесторов."
    },
    category: "startup",
    date: "22 Aprel 2026",
    readTime: "6 dəq",
    image: clientLogos[0],
    content: {
      az: [
        "Due diligence prosesi şirkətin hüquqi vəziyyətini və gələcək risklərini ortaya qoyur.",
        "Patentin vəziyyəti, əmək müqavilələri və intellektual mülkiyyətin qorunması vacib maddələrdir.",
        "Şəffaflıq və sənədlərin düzgün aparılması investor etibarını artırır."
      ],
      en: [
        "The due diligence process reveals a company’s legal standing and future risks.",
        "Patent status, employment contracts and IP protection are key items.",
        "Transparency and correct documentation increase investor trust."
      ],
      ru: [
        "Процесс дью дилижанс выявляет юридическое состояние компании и будущие риски.",
        "Статус патента, трудовые договоры и защита ИС — ключевые элементы.",
        "Прозрачность и правильная документация повышают доверие инвестора."
      ]
    }
  },
  {
    id: 11,
    title: {
      az: "Müqavilələrdə Avtomatlaşdırma və Uyğunluq",
      en: "Contracts Automation and Compliance",
      ru: "Автоматизация контрактов и соответствие"
    },
    excerpt: {
      az: "Sənəd dövriyyəsini sürətləndirmək və eyni zamanda hüquqi standartlara əməl etmək üçün avtomatlaşmış müqavilə alətləri.",
      en: "Automated contract tools to speed document workflows while staying legally compliant.",
      ru: "Автоматизированные инструменты контрактов для ускорения документооборота при соблюдении законодательства."
    },
    category: "corporate",
    date: "15 Aprel 2026",
    readTime: "5 dəq",
    image: clientLogos[1],
    content: {
      az: [
        "Müqavilə avtomatlaşdırılması tez-tez təkrarlanan əməliyyatları azaldır və insan səhvini minimuma endirir.",
        "Uyğunluq yoxlamaları mexanizmləri robotlaşdırılmış iş axınlarına inteqrasiya edilməlidir.",
        "Hər bir sənədin versiyası və imzalanma tarixi əlçatan olmalıdır."
      ],
      en: [
        "Contract automation reduces repeated tasks and minimizes human error.",
        "Compliance checks should be integrated into automated workflows.",
        "Every document version and signing date should remain accessible."
      ],
      ru: [
        "Автоматизация контрактов снижает повторяющиеся задачи и минимизирует ошибки человека.",
        "Проверки соответствия должны быть интегрированы в автоматизированные рабочие процессы.",
        "Каждая версия документа и дата подписания должны быть доступны."
      ]
    }
  },
  {
    id: 12,
    title: {
      az: "Uzaqdan İş Heyətləri üçün Məlumat Məxfiliyi",
      en: "Data Privacy for Remote Teams",
      ru: "Конфиденциальность данных для удаленных команд"
    },
    excerpt: {
      az: "Ev ofislərində işləyənlər üçün məlumat paylaşımı və nəzarət siyasətləri necə qurulmalıdır.",
      en: "How to set up data sharing and control policies for employees working from home.",
      ru: "Как организовать политику обмена и контроля данных для сотрудников, работающих из дома."
    },
    category: "cyber",
    date: "07 Aprel 2026",
    readTime: "5 dəq",
    image: clientLogos[2],
    content: {
      az: [
        "Uzaqdan işləyənlər üçün VPN, şifrələmə və daxili məlumat siyasətləri əsas təhlükəsizlik elementləridir.",
        "Hüquqi müqavilələr bu tip əmək münasibətlərində məxfilik öhdəliklərini aydın şəkildə göstərməlidir.",
        "Məlumat itkisi və icazə problemləri üçün davamlı nəzarət və audit mexanizmləri qurulmalıdır."
      ],
      en: [
        "VPN, encryption and internal data policies are key security elements for remote workers.",
        "Legal agreements must clearly state privacy obligations in these types of work relationships.",
        "Continuous monitoring and audit mechanisms should be established for data loss and permission issues."
      ],
      ru: [
        "VPN, шифрование и внутренние политики данных — ключевые элементы безопасности для удаленных сотрудников.",
        "Юридические соглашения должны четко фиксировать обязательства по конфиденциальности в таких трудовых отношениях.",
        "Для утечек данных и проблем с разрешениями должны быть созданы постоянные механизмы контроля и аудита."
      ]
    }
  },
  {
    id: 13,
    title: {
      az: "Yeni Bazarlar üçün İntellektual Mülkiyyət Strategiyası",
      en: "Intellectual Property Strategy for New Markets",
      ru: "Стратегия интеллектуальной собственности для новых рынков"
    },
    excerpt: {
      az: "Yeni bazarlara daxil olan şirkətlər üçün intellektual mülkiyyət hüquqlarının qorunması və localizasiyası.",
      en: "Protecting and localizing IP rights for companies entering new markets.",
      ru: "Защита и локализация прав интеллектуальной собственности для компаний, выходящих на новые рынки."
    },
    category: "corporate",
    date: "01 Aprel 2026",
    readTime: "7 dəq",
    image: clientLogos[0],
    content: {
      az: [
        "Yeni bazarlara çıxarkən patentlər, lisenziyalar və lokal marka hüququ bir-biri ilə uyğunlaşdırılmalıdır.",
        "Hər bir yurisdiksiyada məxsusi sənədləşmə və qeydiyyat tələbləri fərqlənir.",
        "Başlanğıc mərhələdə düzgün IP strategiyası gələcəkdə digər regionlarda sürətli genişlənməni asanlaşdırır."
      ],
      en: [
        "When entering new markets, patents, licenses and local trademark rights must be aligned.",
        "Each jurisdiction has different documentation and registration requirements.",
        "A strong IP strategy early on makes future regional expansion smoother."
      ],
      ru: [
        "При выходе на новые рынки патенты, лицензии и местные товарные знаки должны быть согласованы.",
        "Каждая юрисдикция имеет разные требования к документации и регистрации.",
        "Правильная стратегия ИС на раннем этапе упрощает последующее расширение в другие регионы."
      ]
    }
  }
]
