import { useState, useEffect } from 'react';
import TopicList from '../components/TopicList';
import { softwareEngineeringTopics } from '../data/softwareEngineeringTopics';
import { softwareEngineeringTopicsLo } from '../data/softwareEngineeringTopics.lo';
import { useLanguage } from '../i18n/LanguageContext';

function TopicsPage() {
  const { language, t } = useLanguage();

  const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('completedTopics');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify([...completedTopics]));
  }, [completedTopics]);

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
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono">
          Learning Path
        </span>
        <h1 className="text-4xl font-bold mt-2 bg-gradient-to-b from-gray-800 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 font-light">
          {t('subtitle')}
        </p>
      </div>

      {/* Progress */}
      <div className="text-center mb-8">
        <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3">
          <span className="text-indigo-500 font-semibold">{completedCount}</span>
          {' '}{t('of')}{' '}
          <span className="font-semibold">{totalCount}</span>
          {' '}{t('completed')}
        </p>
        <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
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
  );
}

export default TopicsPage;
