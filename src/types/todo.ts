export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface CodeExample {
  language: string;
  label?: string;
  code: string;
}

export interface SubTopic {
  name: string;
  description: string;
  example?: string;
  codeExamples?: CodeExample[];
}

export interface SoftwareEngineeringTopic {
  id: string;
  title: string;
  description: string;
  subtopics: SubTopic[];
}
