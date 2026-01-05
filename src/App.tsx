import { useState, useEffect } from 'react';
import TopicList from './components/TopicList';
import { softwareEngineeringTopics } from './data/softwareEngineeringTopics';
import { softwareEngineeringTopicsLo } from './data/softwareEngineeringTopics.lo';
import { useLanguage } from './i18n/LanguageContext';

function App() {
  const { language, setLanguage, t } = useLanguage();

  const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('completedTopics');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify([...completedTopics]));
  }, [completedTopics]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTopicCompletion = (topicId: string) => {
    setCompletedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  const topics = language === 'lo' ? softwareEngineeringTopicsLo : softwareEngineeringTopics;
  const completedCount = completedTopics.size;
  const totalCount = topics.length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Toggle Buttons */}
        <div className="flex justify-end gap-2 mb-6">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'lo' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <span className="text-xl">{language === 'en' ? '🇱🇦' : '🇺🇸'}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {language === 'en' ? 'ລາວ' : 'EN'}
            </span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {darkMode ? (
              <>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{t('light')}</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{t('dark')}</span>
              </>
            )}
          </button>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
          {t('title')}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          {t('subtitle')}
        </p>

        {/* Progress */}
        <div className="text-center mb-6">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {completedCount} {t('of')} {totalCount} {t('completed')}
          </p>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Topic List */}
        <TopicList
          topics={topics}
          completedTopics={completedTopics}
          onToggleComplete={toggleTopicCompletion}
        />
      </div>
    </div>
  );
}

export default App;
