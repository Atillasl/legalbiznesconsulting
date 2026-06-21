// Map Azerbaijani category labels (existing in data) to stable keys (slugs)
export const categoryMap = {
  'Mülki Hüquq': 'civil',
  'İnzibati Hüquq': 'administrative',
  'Kommersiya': 'commercial',
  'Arbitraj': 'arbitration',
  'Mediasiya': 'mediation',
  'Miqrasiya': 'migration',
  'Cinayət Hüququ': 'criminal',
  'Konstitusiya': 'constitutional',
  'Beynəlxalq': 'international',
  'Ekspertiza': 'expertise',
  'Beynəlxalq Hüquqi Yardım': 'intl_assistance',
  'Web Development': 'web',
  'App Development': 'app'
}

// Reverse map: key -> az label (optional)
export const categoryKeyToAz = Object.fromEntries(Object.entries(categoryMap).map(([k,v]) => [v,k]))
