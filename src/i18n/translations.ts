export type Language = 'en' | 'lo';

export const translations = {
  en: {
    // General
    appName: 'SE Fundamentals',
    title: 'Software Engineering Fundamentals',
    subtitle: 'Learn the core concepts of software engineering. Check off topics as you complete them.',
    completed: 'completed',
    of: 'of',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details',
    example: 'Example:',
    light: 'Light',
    dark: 'Dark',
    // Navigation
    topics: 'Topics',
    architecture: 'Architecture',
    // Architecture Page
    systemArchitecture: 'System Architecture',
    webApplication: 'Web Application',
    threeLayerArch: 'Three-Tier Architecture',
    requestFlow: 'Request Flow',
    responseFlow: 'Response Flow',
    bidirectional: 'Bidirectional',
    externalServices: 'External Services',
  },
  lo: {
    // General
    appName: 'ພື້ນຖານ SE',
    title: 'ພື້ນຖານວິສະວະກຳຊອບແວ',
    subtitle: 'ຮຽນຮູ້ແນວຄວາມຄິດຫຼັກຂອງວິສະວະກຳຊອບແວ. ໝາຍຕິກຫົວຂໍ້ທີ່ທ່ານສຳເລັດແລ້ວ.',
    completed: 'ສຳເລັດແລ້ວ',
    of: 'ຈາກ',
    showDetails: 'ສະແດງລາຍລະອຽດ',
    hideDetails: 'ເຊື່ອງລາຍລະອຽດ',
    example: 'ຕົວຢ່າງ:',
    light: 'ສະຫວ່າງ',
    dark: 'ມືດ',
    // Navigation
    topics: 'ຫົວຂໍ້',
    architecture: 'ສະຖາປັດຕະຍະກຳ',
    // Architecture Page
    systemArchitecture: 'ສະຖາປັດຕະຍະກຳລະບົບ',
    webApplication: 'ແອັບພລິເຄຊັນເວັບ',
    threeLayerArch: 'ສະຖາປັດຕະຍະກຳສາມຊັ້ນ',
    requestFlow: 'ການໄຫຼຂອງຄຳຮ້ອງ',
    responseFlow: 'ການໄຫຼຂອງການຕອບ',
    bidirectional: 'ສອງທິດທາງ',
    externalServices: 'ບໍລິການພາຍນອກ',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
