export type Language = 'en' | 'lo';

export const translations = {
  en: {
    title: 'Software Engineering Fundamentals',
    subtitle: 'Learn the core concepts of software engineering. Check off topics as you complete them.',
    completed: 'completed',
    of: 'of',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details',
    example: 'Example:',
    light: 'Light',
    dark: 'Dark',
  },
  lo: {
    title: 'ພື້ນຖານວິສະວະກຳຊອບແວ',
    subtitle: 'ຮຽນຮູ້ແນວຄວາມຄິດຫຼັກຂອງວິສະວະກຳຊອບແວ. ໝາຍຕິກຫົວຂໍ້ທີ່ທ່ານສຳເລັດແລ້ວ.',
    completed: 'ສຳເລັດແລ້ວ',
    of: 'ຈາກ',
    showDetails: 'ສະແດງລາຍລະອຽດ',
    hideDetails: 'ເຊື່ອງລາຍລະອຽດ',
    example: 'ຕົວຢ່າງ:',
    light: 'ສະຫວ່າງ',
    dark: 'ມືດ',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
