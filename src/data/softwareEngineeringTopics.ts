import type { SoftwareEngineeringTopic } from '../types/todo';

export const softwareEngineeringTopics: SoftwareEngineeringTopic[] = [
  {
    id: 'what-is-se',
    title: 'What Software Engineering Is',
    description: 'Building software the right way so it works well and others can work on it.',
    subtopics: [
      {
        name: 'Simple Definition',
        description: 'Building software the right way so it works well and others can work on it.',
        example: 'Writing a to-do list app for yourself vs. building Gmail. Gmail needs to handle millions of users, work for years, and have many developers working on it without breaking things.'
      }
    ]
  },
  {
    id: 'core-principles',
    title: 'Core Principles',
    description: 'Fundamental principles that guide good software development.',
    subtopics: [
      {
        name: 'Correctness',
        description: 'Software does what it should.',
        example: 'A calculator that gives 2+2=4, not 5.'
      },
      {
        name: 'Maintainability',
        description: 'Easy to change later.',
        example: 'Instead of int x = 86400;, write int secondsInDay = 86400; so anyone knows what it means.'
      },
      {
        name: 'Efficiency',
        description: 'Uses resources wisely.',
        example: 'Searching a phone book by flipping to the middle and narrowing down (fast) vs. checking every page from start (slow).'
      },
      {
        name: 'Scalability',
        description: 'Handles growth.',
        example: 'A restaurant with one table vs. one that can add more tables when busy.'
      },
      {
        name: 'DRY (Don\'t Repeat Yourself)',
        description: 'Write code once, reuse it.',
        codeExamples: [
          {
            language: 'python',
            label: 'Bad - repeated code',
            code: `print("Welcome, John!")
print("Welcome, Mary!")
print("Welcome, Tom!")`
          },
          {
            language: 'python',
            label: 'Good - reusable function',
            code: `def greet(name):
    print(f"Welcome, {name}!")

greet("John")
greet("Mary")
greet("Tom")`
          }
        ]
      }
    ]
  },
  {
    id: 'development-lifecycle',
    title: 'Development Lifecycle',
    description: 'The stages of software development from concept to maintenance.',
    subtopics: [
      {
        name: 'Requirements',
        description: 'Understanding what to build.',
        example: '"Users want to share photos with friends" becomes specific features like "upload photos, tag friends, add comments."'
      },
      {
        name: 'Design',
        description: 'Planning before coding.',
        example: 'Sketching how Instagram works: users upload photos → photos stored in database → friends see them in feed.'
      },
      {
        name: 'Implementation',
        description: 'Actually writing code.',
        example: 'Writing the function that uploads a photo to the server.'
      },
      {
        name: 'Testing',
        description: 'Checking it works.',
        example: 'Testing what happens if someone uploads a 100MB photo, or no photo at all.'
      },
      {
        name: 'Deployment',
        description: 'Making it available to users.',
        example: 'Pushing your app update to the App Store.'
      },
      {
        name: 'Maintenance',
        description: 'Fixing and improving.',
        example: 'Fixing a bug where photos don\'t load on slow internet.'
      }
    ]
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    description: 'Ways to organize and store data for efficient access and modification.',
    subtopics: [
      {
        name: 'Array',
        description: 'List of items in order.',
        example: '["apple", "banana", "orange"] - easy to get the 2nd item, hard to insert in middle.'
      },
      {
        name: 'Linked List',
        description: 'Chain of items, each pointing to the next.',
        example: 'Like a treasure hunt where each clue points to the next location. Easy to add clues, slow to find the 50th clue.'
      },
      {
        name: 'Hash Table',
        description: 'Finding things by name/key.',
        example: 'Dictionary - you look up "apple" and immediately find its definition. No need to read every page.'
      },
      {
        name: 'Tree',
        description: 'Hierarchical structure.',
        example: 'Company org chart - CEO at top, managers below, employees under them.'
      },
      {
        name: 'Stack',
        description: 'Last in, first out.',
        example: 'Stack of plates - you take the top plate first (the last one added).'
      },
      {
        name: 'Queue',
        description: 'First in, first out.',
        example: 'Line at a coffee shop - first person in line gets served first.'
      }
    ]
  },
  {
    id: 'algorithms',
    title: 'Algorithms',
    description: 'Step-by-step procedures for solving problems.',
    subtopics: [
      {
        name: 'Sorting',
        description: 'Arranging in order.',
        example: 'Alphabetizing names. Quicksort is like dividing names into "A-M" and "N-Z" piles, then sorting each pile.'
      },
      {
        name: 'Binary Search',
        description: 'Finding in sorted list.',
        example: 'Guessing a number 1-100. If they say "higher," you know it\'s 51-100, not 1-50. Much faster than guessing 1, 2, 3...'
      },
      {
        name: 'Recursion',
        description: 'Function calling itself.',
        codeExamples: [
          {
            language: 'python',
            code: `def countdown(n):
    if n == 0:
        print("Done!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)  # Prints: 3, 2, 1, Done!`
          }
        ]
      }
    ]
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    description: 'Reusable solutions to common software design problems.',
    subtopics: [
      {
        name: 'Singleton',
        description: 'Only one instance exists.',
        example: 'A game with one settings menu - no matter where you open settings, it\'s the same menu.'
      },
      {
        name: 'Factory',
        description: 'Creating objects without specifying exact type.',
        example: 'A button factory that creates iOS-style buttons on iPhone, Android-style on Android, without you specifying which.'
      },
      {
        name: 'Observer',
        description: 'Objects watching for changes.',
        example: 'YouTube notifications - you subscribe to a channel, and you\'re notified when they upload (you\'re the observer, channel is what you\'re watching).'
      }
    ]
  },
  {
    id: 'oop',
    title: 'Object-Oriented Design',
    description: 'Programming paradigm based on objects containing data and code.',
    subtopics: [
      {
        name: 'Encapsulation',
        description: 'Hiding details.',
        codeExamples: [
          {
            language: 'python',
            code: `class BankAccount:
    def __init__(self):
        self.__balance = 0  # Hidden (private)

    def deposit(self, amount):  # Public method
        self.__balance += amount

    def get_balance(self):
        return self.__balance

# You can't directly change __balance, must use deposit()`
          }
        ]
      },
      {
        name: 'Inheritance',
        description: 'Child classes inherit from parent.',
        codeExamples: [
          {
            language: 'python',
            code: `class Animal:
    def eat(self):
        print("Eating...")

class Dog(Animal):  # Dog inherits from Animal
    def bark(self):
        print("Woof!")

dog = Dog()
dog.eat()  # Works! Inherited from Animal
dog.bark()  # Also works!`
          }
        ]
      },
      {
        name: 'Polymorphism',
        description: 'Different objects respond to same command differently.',
        codeExamples: [
          {
            language: 'python',
            code: `class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

# Same method name, different behavior
dog = Dog()
cat = Cat()
print(dog.speak())  # Woof!
print(cat.speak())  # Meow!`
          }
        ]
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description: 'Verifying that software works as expected.',
    subtopics: [
      {
        name: 'Unit Test',
        description: 'Test one small piece.',
        codeExamples: [
          {
            language: 'python',
            code: `def add(a, b):
    return a + b

# Test it
assert add(2, 3) == 5  # Normal case
assert add(0, 0) == 0  # Edge case
assert add(-1, 1) == 0  # Negative numbers`
          }
        ]
      },
      {
        name: 'Integration Test',
        description: 'Test pieces working together.',
        example: 'Testing that when a user clicks "Buy," the payment processes AND the order is saved AND the email is sent.'
      },
      {
        name: 'System Test',
        description: 'Test the whole thing.',
        example: 'A real user going through the entire shopping process from browsing to checkout.'
      }
    ]
  },
  {
    id: 'version-control',
    title: 'Version Control (Git)',
    description: 'Tracking and managing changes to code.',
    subtopics: [
      {
        name: 'Commit',
        description: 'Save a snapshot.',
        example: 'Like saving versions of an essay - "Draft 1," "Draft 2," so you can go back if needed.'
      },
      {
        name: 'Branch',
        description: 'Work on something separately.',
        example: 'Main recipe is chocolate cake. You create a branch to try adding strawberries without ruining the original recipe.'
      },
      {
        name: 'Merge',
        description: 'Combining work.',
        example: 'Your strawberry experiment worked! Merge it into the main recipe.'
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture Patterns',
    description: 'High-level structures for organizing software systems.',
    subtopics: [
      {
        name: 'Layered',
        description: 'Organized in levels.',
        example: 'A restaurant - customers (presentation), waiters (business logic), kitchen (data layer). Each layer talks to the one next to it.'
      },
      {
        name: 'Microservices',
        description: 'Small independent services.',
        example: 'Amazon has separate services for user accounts, product catalog, shopping cart, payment - each can update independently.'
      },
      {
        name: 'Client-Server',
        description: 'One asks, one responds.',
        example: 'Your browser (client) asks Google\'s computers (server) for a webpage.'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Protecting software from threats and vulnerabilities.',
    subtopics: [
      {
        name: 'Input Validation',
        description: 'Check what users send.',
        example: 'An age field should only accept numbers 0-120, not "abc" or "-5".'
      },
      {
        name: 'SQL Injection Prevention',
        description: 'Don\'t trust user input in database queries.',
        codeExamples: [
          {
            language: 'python',
            label: 'Bad - user could type: "\'; DROP TABLE users; --"',
            code: `query = f"SELECT * FROM users WHERE name = '{user_input}'"`
          },
          {
            language: 'python',
            label: 'Good - use parameterized queries',
            code: `query = "SELECT * FROM users WHERE name = ?"
execute(query, [user_input])`
          }
        ]
      },
      {
        name: 'Authentication',
        description: 'Verifying who you are.',
        example: 'Username and password to log into email.'
      },
      {
        name: 'Authorization',
        description: 'Verifying what you can do.',
        example: 'You can edit your own posts but not others\' posts.'
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Making software fast and efficient.',
    subtopics: [
      {
        name: 'Caching',
        description: 'Saving results to reuse.',
        example: 'Google Maps saves your recent searches so it loads instantly next time instead of recalculating.'
      },
      {
        name: 'Lazy Loading',
        description: 'Only load what\'s needed.',
        example: 'Instagram loads 10 photos initially, then more as you scroll down, instead of loading all 1000 photos at once.'
      },
      {
        name: 'Database Indexing',
        description: 'Making lookups faster.',
        example: 'A book\'s index lets you find topics quickly instead of reading every page.'
      }
    ]
  }
];
