import { clientLogos } from '../../assets'

export const legalServices = [
  {
    id: 'civil-family',
    category: 'Mülki Hüquq',
    title: 'Ailə mübahisələri üzrə hüquqi yardım',
    shortDesc: 'Boşanma, aliment, uşaq hüquqları və ailə münasibətləri üzrə peşəkar məsləhət və müdafiə.',
    longDesc: 'Ailə məhkəmələrində və məhkəmədən əvvəl aparılan mübahisələrdə təcrübəli hüquq məsləhəti və təmsilçilik. Boşanma, varislik, aliment, valideynlik hüquqları və ailə müqavilələrinin hazırlanması üzrə xidmətlər.',
    benefits: [
      'İntensiv məhkəmə və qabaqcadan məsləhət',
      'Uşaq hüquqları və aliment məsələlərində müdafiə',
      'Vasitəçiliyin təşkili və razılaşma məsləhətləri'
    ],
    process: [
      'İlkin konsultasiya və sənədlərin toplanması',
      'Hüquqi strategiyanın hazırlanması',
      'Məhkəmə və ya alternativ həll mərhələləri'
    ],
    image: clientLogos[0]
  },
  {
    id: 'civil-property',
    category: 'Mülki Hüquq',
    title: 'Əmlak mübahisələri üzrə hüquqi yardım',
    shortDesc: 'Mülkiyyət, sərəncam və torpaq mübahisələrinin həlli və məhkəmə təmsili.',
    longDesc: 'Əmlakın mülkiyyəti, sərəncam hüquqları, torpaq və daşınmaz əmlakla bağlı mübahisələrdə hüquqi dəstək. Notariat, ekspertiza və məhkəmə proseslərində tam təmsilçilik.',
    benefits: [
      'Mülkiyyətin sübutu və sənədləşmə yardımı',
      'Torpaq mübahisələrinin məhkəmə yolu ilə həlli',
      'Qarşılıqlı razılaşma üçün danışıqlar və vasitəçilik'
    ],
    process: [
      'Sənədlərin analiz edilməsi',
      'Hüquqi pozuntuların müəyyənləşdirilməsi',
      'Məhkəmə və icra prosedurları'
    ],
    image: clientLogos[1]
  },
  {
    id: 'civil-contracts',
    category: 'Mülki Hüquq',
    title: 'Müqavilələrdən irəli gələn mübahisələr',
    shortDesc: 'Müqavilə pozuntuları, icra və zərərçəkən tərəfin müdafiəsi.',
    longDesc: 'Satınalma, xidmət və əmək müqavilələri daxil olmaqla müqavilə münasibətlərində yaranan bütün hüquqi mübahisələrin həlli və məsləhət xidməti. Müqavilə icrası, təzminat və arbitraj məsələləri üzrə dəstək.',
    benefits: [
      'Müqavilə şərtlərinin qiymətləndirilməsi',
      'İcra iddiaları və zərərin hesablanması',
      'Arbitraj və məhkəmə təmsilçiliyi'
    ],
    process: [
      'Müqavilənin təhlili və zərərin qiymətləndirilməsi',
      'Rəsmi iddianın hazırlanması',
      'Məhkəmə və ya arbitraj prosesi'
    ],
    image: clientLogos[2]
  },
  {
    id: 'civil-delict',
    category: 'Mülki Hüquq',
    title: 'Delikt (ziyan vurma) münasibətləri',
    shortDesc: 'Ziyanla bağlı iddialar, kompensasiyalar və təqsirin müəyyənləşdirilməsi üzrə yardım.',
    longDesc: 'Maddi və mənəvi ziyanla bağlı iddiaların hazırlnması, ekspertiza tələblərinin müəyyənləşdirilməsi və kompensasiya məbləğinin hesablanması üzrə hüquqi xidmətlər.',
    benefits: [
      'Zərərin dəyərləndirilməsi və ekspertiza təklifi',
      'Təqsirinin müəyyənləşdirilməsi və məhkəmə müdafiəsi',
      'Sürətli və məqsədyönlü iddia prosedurları'
    ],
    process: [
      'Faktların və sübutların toplanması',
      'Ekspertiza sifarişi',
      'İddia və məhkəmə mərhələləri'
    ],
    image: clientLogos[0]
  },
  {
    id: 'civil-labor',
    category: 'Mülki Hüquq',
    title: 'Əmək mübahisələri',
    shortDesc: 'İşçi və işəgötürən arasında yaranan hüquqi mübahisələrin həlli və nümayəndəlik.',
    longDesc: 'Əmək müqavilələrinin şərtləri, işdən azad etmə, əmək haqqı iddiaları və kollektiv müqavilə məsələlərində hüquqi məsləhət və məhkəmə təmsilçiliyi.',
    benefits: [
      'Əmək hüququ üzrə iddiaların hazırlanması',
      'Məzuniyyət, məzuniyyət kompensasiyası və işdən azad etmə hallarının müdafiəsi',
      'Kollektiv müqavilələrin hüquqi ekspertizası'
    ],
    process: [
      'Əmək münasibətlərinin audit edilməsi',
      'İddia və ya tənzimləmə prosedurları',
      'Məhkəmə təmsilçiliyi'
    ],
    image: clientLogos[1]
  },
  {
    id: 'civil-tax',
    category: 'Mülki Hüquq',
    title: 'Vergi mübahisələri üzrə hüquqi yardım',
    shortDesc: 'Vergi yoxlamaları, apellyasiya və vergi iddialarının məhkəmədə müdafiəsi.',
    longDesc: 'Vergi auditləri, cərimələr, vergi adekvatlığı və apellyasiya prosedurlarında hüquqi məsləhət və müdafiə. Vergi planlaşdırma və strukturlaşdırma xidmətləri.',
    benefits: [
      'Vergi risklərinin minimallaşdırılması',
      'Apellyasiya və məhkəmə müdafiəsi',
      'Vergi planlaşdırma və strukturlaşdırma'
    ],
    process: [
      'Vergi sənədlərinin təhlili',
      'Apellyasiya məruzəsinin hazırlanması',
      'Məhkəmə və inzibati prosedurlar'
    ],
    image: clientLogos[2]
  },
  {
    id: 'civil-social',
    category: 'Mülki Hüquq',
    title: 'Sosial təminat hüququndan irəli gələn mübahisələr',
    shortDesc: 'Pensiya, sosial yardım və digər sosial təminat məsələlərində hüquqi məsləhət.',
    longDesc: 'Pensiya hüququ, sosial yardımlar, sığorta və sosial təminatla bağlı hüquqi mübahisələrin həlli və təmsilçilik.',
    benefits: [
      'Pensiya iddialarının dəstəklənməsi',
      'Sosial yardım və sığorta mübahisələrinin həlli',
      'Vətəndaşların hüquqlarının qorunması'
    ],
    process: [
      'Sənədlərin toplanması və təqdimatı',
      'Hüquqi nümayəndəlik və apellyasiya',
      'Məhkəmə prosedurları'
    ],
    image: clientLogos[0]
  },
  {
    id: 'civil-sport',
    category: 'Mülki Hüquq',
    title: 'İdman hüququ üzrə mübahisələr',
    shortDesc: 'İdman müqavilələri, disiplinar və yaradıcılıq mübahisələrinin hüquqi həlli.',
    longDesc: 'İdmançılar, klub və federasiyalar arasında yaranan mübahisələrdə müqavilə, transfer, disiplin və idman hüququ üzrə məsləhət və təmsilçilik.',
    benefits: [
      'Transfer və müqavilə mübahisələri',
      'Disiplinar işlərdə müdafiə',
      'İdmanla bağlı kommersiya məsələləri'
    ],
    process: [
      'Müqavilə və hüquq mətnlərinin yoxlanılması',
      'Disiplinar prosedurlara müdaxilə',
      'Arbitraj və məhkəmə dəstəyi'
    ],
    image: clientLogos[1]
  },
  {
    id: 'civil-medical',
    category: 'Mülki Hüquq',
    title: 'Tibb hüququndan irəli gələn mübahisələr',
    shortDesc: 'Tibbi məsuliyyət, xəstə hüquqları və tibbi ekspertizalarla iş.',
    longDesc: 'Tibbi səhvlər, məsuliyyət və xəstə hüquqları ilə bağlı iddiaların hüquqi qiymətləndirilməsi və təmsilçiliyi. Tibbi ekspertizaların təşkili və məhkəmə sübutlarının toplanması.',
    benefits: [
      'Tibbi ekspertizaların təşkili',
      'Həkim və tibb müəssisələrinin məsuliyyətinin araşdırılması',
      'Hüquqi müdafiə və kompensasiya tələbı'
    ],
    process: [
      'Sənədlərin və tibbi qeydlərin toplanması',
      'Ekspertiza və hüquqi təhlil',
      'İddia və məhkəmə prosedurları'
    ],
    image: clientLogos[2]
  },
  {
    id: 'administrative',
    category: 'İnzibati Hüquq',
    title: 'İnzibati mübahisələr üzrə hüquqi yardım',
    shortDesc: 'İnzibati iddialar, məcburetmə və öhdəliklərin icrası ilə bağlı müdafiə.',
    longDesc: 'İnzibati-hüquqi mübahisələrdə və dövlət orqanları qarşısında iddiaların hazırlanması, məcburetmə və öhdəliklərin icra olunması məsələlərində hüquqi dəstək.',
    benefits: [
      'İnzibati aktların məhkəməyə verilməsi',
      'Məcburetmə və icra prosedurlarında müdafiə',
      'Öhdəliklərin icrası üzrə məsləhətlər'
    ],
    process: [
      'İlkin analiz və sənədləşmə',
      'Dövlət orqanları ilə yazışmalar',
      'Məhkəmə və apellyasiya prosesləri'
    ],
    image: clientLogos[0]
  },
  {
    id: 'commercial',
    category: 'Kommersiya',
    title: 'Kommersiya mübahisələri üzrə hüquqi yardım',
    shortDesc: 'Şirkətlərarası və korporativ kommersiya mübahisələrinin hüquqi həlli.',
    longDesc: 'Müəssisələr arasında kommersiya müqavilələri, mülkiyyət və korporativ strukturdan irəli gələn mübahislərin məhkəmə və arbitraj yolu ilə həlli.',
    benefits: [
      'Korporativ və kommersiya məhkəmə təmsilçiliyi',
      'Beynəlxalq müqavilə və çatdırılma mübahisələri',
      'Riskin idarə edilməsi və məsləhət'
    ],
    process: [
      'Sənədlərin və müqavilələrin təhlili',
      'İddia və ya arbitrajın hazırlanması',
      'Hüquqi strategiyanın tətbiqi'
    ],
    image: clientLogos[1]
  },
  {
    id: 'arbitration',
    category: 'Arbitraj',
    title: 'Arbitraj prosesində hüquqi yardım',
    shortDesc: 'Tərəflərin arbitraj prosedurlarında peşəkar təmsilçilik və məsləhət.',
    longDesc: 'Milli və beynəlxalq arbitraj məhkəmələrində təmsilçilik, arbitraj müqavilələrinin icrası və qərarların tətbiqi üzrə hüquqi xidmətlər.',
    benefits: [
      'Arbitraj iddialarının hazırlığı',
      'Hüquqi müdafiə və icra prosedurları',
      'Beynəlxalq arbitraj təcrübəsi'
    ],
    process: [
      'Arbitraj müqaviləsinin və iddianın hazırlanması',
      'Tərəflərlə əlaqə və dəlillərin toplanması',
      'Hakimlər qarşısında müdafiə və qərarın icrası'
    ],
    image: clientLogos[2]
  },
  {
    id: 'mediation',
    category: 'Mediasiya',
    title: 'Mediasiya prosesində hüquqi yardım',
    shortDesc: 'Məhkəmədənkənar həll yolları və mediasiya xidmətləri.',
    longDesc: 'Mediasiya və danışıqlar yolu ilə mübahisələrin həllinə kömək; tərəflərin qarşılıqlı razılığa gəlməsi üçün fasilitasiya və hüquqi məsləhət.',
    benefits: [
      'Məhkəmədənkənar sürətli həll',
      'Məxfilik və xərclərin azalması',
      'Davamlı razılaşma imkanları'
    ],
    process: [
      'Mediasiya tələbinin hazırlanması',
      'Seansların keçirilməsi və razılaşma mətninin tərtibi',
      'Razılaşmanın hüquqi təsdiqi'
    ],
    image: clientLogos[0]
  },
  {
    id: 'migration',
    category: 'Miqrasiya',
    title: 'Miqrasiya və vətəndaşlıq məsələləri',
    shortDesc: 'İcazə sənədləri, status dəyişiklikləri və vətəndaşlıq məsələlərində hüquqi yardım.',
    longDesc: 'Vizalar, yaşayış və iş icazələri, vətəndaşlıq və status dəyişikliyi kimi miqrasiya prosedurlarında hüquqi məsləhət və sənəd hazırlığı.',
    benefits: [
      'Viza və yaşayış icazələrinin təşkili',
      'Müraciətlərin tam sənədləşdirilməsi',
      'Hüquqi təmsilçilik və apellyasiya'
    ],
    process: [
      'İlkin konsultasiya və sənədlərin yoxlanması',
      'Müraciətlərin hazırlanması və təqdimatı',
      'Dəstək və izləmə'
    ],
    image: clientLogos[1]
  },
  {
    id: 'criminal',
    category: 'Cinayət Hüququ',
    title: 'Cinayət işləri üzrə hüquqi yardım',
    shortDesc: 'Məhkəməyədək, birinci instansiya, apellyasiya və kassasiya mərhələlərində müdafiə.',
    longDesc: 'Cinayət məcəlləsi ilə tənzimlənən işlərdə təcrübəli müdafiə; istintaq mərhələsindən başlayaraq kassasiya instansiyasına qədər tam hüquqi dəstək.',
    benefits: [
      'Erkən müdaxilə və istintaq dəstəyi',
      'Məhkəmə prosesində təmsilçilik',
      'Apellyasiya və kassasiya dəstəyi'
    ],
    process: [
      'İlkin müdafiə və sübutların toplanması',
      'Məhkəmə müdafiəsi və apellyasiya',
      'Kassasiya prosedurları'
    ],
    image: clientLogos[2]
  },
  {
    id: 'constitutional',
    category: 'Konstitusiya',
    title: 'Konstitusiya Məhkəməsində hüquqi yardım',
    shortDesc: 'Konstitusiya şikayətləri və vətəndaş hüquqlarının müdafiəsi üzrə xidmətlər.',
    longDesc: 'Konstitusiya pozuntuları ilə bağlı müraciətlər, hüquqi sənədlərin hazırlanması və Konstitusiya Məhkəməsində təmsilçilik.',
    benefits: [
      'Konstitusiya müraciətlərinin hazırlanması',
      'Strateji hüquqi analiz',
      'Məhkəmə təmsilçiliyi'
    ],
    process: [
      'Müraciətin hazırlanması və əsaslandırılması',
      'Sənədlərin təqdimatı və məhkəmə proseduru',
      'Nəticənin icrası və hüquqi dəstək'
    ],
    image: clientLogos[0]
  },
  {
    id: 'echr',
    category: 'Beynəlxalq',
    title: 'Avropa İnsan Hüquqları Məhkəməsində hüquqi yardım',
    shortDesc: 'ECHR müraciətləri, icra və hüquqi hazırlıq üzrə təcrübə.',
    longDesc: 'Avropa İnsan Hüquqları Məhkəməsində şikayətlərin hazırlanması, prosedurun izlənməsi və qərarların icrası üzrə hüquqi dəstək.',
    benefits: [
      'ECHR müraciətlərinin ixtisaslı hazırlanması',
      'Dəlillərin beynəlxalq standartlara uyğun təqdimatı',
      'Qərarların həyata keçirilməsi və yerli icra'
    ],
    process: [
      'Milli məhkəmələrdən sonra ECHR-ə müraciət',
      'Müraciətin hazırlanması və sənədləşmə',
      'Qərarın icrası və məsləhət'
    ],
    image: clientLogos[1]
  },
  {
    id: 'legal-opinions',
    category: 'Ekspertiza',
    title: 'Hüquqi rəylərin hazırlanması və ekspertizalar',
    shortDesc: 'Hüquqi analizlər, rəylər və ekspertizaların hazırlanması biznes ehtiyaclarına uyğun.',
    longDesc: 'Şirkətlər və fərdi şəxslər üçün hüquqi rəylər, ekspert hesabatları və sənədlərin hüquqi ekspertizası. Risklərin qiymətləndirilməsi və hüquqi tövsiyələr.',
    benefits: [
      'Peşəkar hüquqi analiz və tövsiyələr',
      'Ekspertizaların hazırlıq və icrası',
      'Qərar dəstəyi və risklərin azaldılması'
    ],
    process: [
      'Tapşırığın qəbulu və sənədlərin toplanması',
      'Hüquqi analiz və ekspert rəyi hazırlanması',
      'Hesabatın təqdimatı və konsultasiya'
    ],
    image: clientLogos[2]
  },
  {
    id: 'intl-assistance',
    category: 'Beynəlxalq Hüquqi Yardım',
    title: 'Beynəlxalq hüquqi yardım və yerli tərəfdaşlar',
    shortDesc: 'Xarici ölkələrdəki tərəfdaşlar vasitəsilə beynəlxalq hüquqi xidmətlər.',
    longDesc: 'Xaricdə hüquqi məsələlərin idarə olunması üçün tərəfdaş şəbəkəsi vasitəsilə məsləhət və təmsilçilik; beynəlxalq icra və hüquqi koordinasiya.',
    benefits: [
      'Qlobal tərəfdaş şəbəkəsi',
      'Milli və beynəlxalq prosedurlarda dəstək',
      'Məhdudiyyətlərin aradan qaldırılması və icra'
    ],
    process: [
      'Tələblərin qiymətləndirilməsi və partnyor seçimi',
      'Koordinasiya və sənədlərin internacionalizasiyası',
      'Məhkəmə və ya inzibati prosedurların idarəsi'
    ],
    image: clientLogos[0]
  }
]
