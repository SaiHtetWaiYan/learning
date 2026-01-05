import type { SoftwareEngineeringTopic } from '../types/todo';
import TopicCard from './TopicCard';

interface TopicListProps {
  topics: SoftwareEngineeringTopic[];
  completedTopics: Set<string>;
  onToggleComplete: (topicId: string) => void;
}

function TopicList({ topics, completedTopics, onToggleComplete }: TopicListProps) {
  return (
    <div className="flex flex-col gap-4">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isCompleted={completedTopics.has(topic.id)}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TopicList;
