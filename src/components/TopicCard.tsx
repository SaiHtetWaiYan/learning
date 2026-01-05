import { useState } from 'react';
import type { SoftwareEngineeringTopic } from '../types/todo';
import { useLanguage } from '../i18n/LanguageContext';

interface TopicCardProps {
  topic: SoftwareEngineeringTopic;
  isCompleted: boolean;
  onToggleComplete: (topicId: string) => void;
}

function TopicCard({ topic, isCompleted, onToggleComplete }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const handleCheckboxChange = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleComplete(topic.id);
  };

  return (
    <div
      className={`rounded-xl border overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md ${
        isCompleted
          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 opacity-80'
          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800">
        <div
          className="flex items-center pt-1 cursor-pointer"
          onClick={handleCheckboxChange}
        >
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => {}}
            className="w-5 h-5 cursor-pointer accent-indigo-500 rounded"
          />
        </div>
        <div className="flex-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <h3
            className={`text-lg font-semibold mb-1 transition-colors ${
              isCompleted
                ? 'text-gray-400 dark:text-gray-500 line-through'
                : 'text-gray-800 dark:text-white'
            }`}
          >
            {topic.title}
          </h3>
          <p
            className={`text-sm mb-3 ${
              isCompleted ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {topic.description}
          </p>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors">
            {isExpanded ? t('hideDetails') : t('showDetails')}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-5 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
          {topic.subtopics.map((subtopic, index) => (
            <div
              key={index}
              className={`pb-5 mb-5 ${
                index !== topic.subtopics.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
              }`}
            >
              <h4 className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {subtopic.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {subtopic.description}
              </p>

              {subtopic.example && (
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg mt-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {t('example')}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {subtopic.example}
                  </p>
                </div>
              )}

              {subtopic.codeExamples &&
                subtopic.codeExamples.map((codeEx, codeIndex) => (
                  <div key={codeIndex} className="mt-3">
                    {codeEx.label && (
                      <span className="block text-xs text-gray-500 dark:text-gray-400 italic mb-1">
                        {codeEx.label}
                      </span>
                    )}
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{codeEx.code}</code>
                    </pre>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopicCard;
