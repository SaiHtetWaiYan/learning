import type { SoftwareEngineeringTopic } from '../types/todo';

export const softwareEngineeringTopicsLo: SoftwareEngineeringTopic[] = [
  {
    id: 'what-is-se',
    title: 'ວິສະວະກຳຊອບແວແມ່ນຫຍັງ',
    description: 'ການສ້າງຊອບແວຢ່າງຖືກຕ້ອງເພື່ອໃຫ້ມັນເຮັດວຽກໄດ້ດີ ແລະ ຄົນອື່ນສາມາດເຮັດວຽກກັບມັນໄດ້.',
    subtopics: [
      {
        name: 'ຄຳນິຍາມງ່າຍໆ',
        description: 'ການສ້າງຊອບແວຢ່າງຖືກຕ້ອງເພື່ອໃຫ້ມັນເຮັດວຽກໄດ້ດີ ແລະ ຄົນອື່ນສາມາດເຮັດວຽກກັບມັນໄດ້.',
        example: 'ການຂຽນແອັບລາຍການສິ່ງທີ່ຕ້ອງເຮັດສຳລັບຕົວເອງ ທຽບກັບການສ້າງ Gmail. Gmail ຕ້ອງຮອງຮັບຜູ້ໃຊ້ຫຼາຍລ້ານຄົນ, ເຮັດວຽກໄດ້ຫຼາຍປີ, ແລະ ມີນັກພັດທະນາຫຼາຍຄົນເຮັດວຽກໂດຍບໍ່ເຮັດໃຫ້ມັນພັງ.'
      }
    ]
  },
  {
    id: 'core-principles',
    title: 'ຫຼັກການພື້ນຖານ',
    description: 'ຫຼັກການພື້ນຖານທີ່ນຳພາການພັດທະນາຊອບແວທີ່ດີ.',
    subtopics: [
      {
        name: 'ຄວາມຖືກຕ້ອງ',
        description: 'ຊອບແວເຮັດສິ່ງທີ່ມັນຄວນເຮັດ.',
        example: 'ເຄື່ອງຄິດເລກທີ່ໃຫ້ຜົນ 2+2=4, ບໍ່ແມ່ນ 5.'
      },
      {
        name: 'ການບຳລຸງຮັກສາງ່າຍ',
        description: 'ງ່າຍຕໍ່ການປ່ຽນແປງໃນພາຍຫຼັງ.',
        example: 'ແທນທີ່ຈະຂຽນ int x = 86400;, ຂຽນ int secondsInDay = 86400; ເພື່ອໃຫ້ທຸກຄົນຮູ້ວ່າມັນໝາຍຄວາມວ່າແນວໃດ.'
      },
      {
        name: 'ປະສິດທິພາບ',
        description: 'ໃຊ້ຊັບພະຍາກອນຢ່າງສະຫຼາດ.',
        example: 'ການຊອກຫາໃນປຶ້ມໂທລະສັບໂດຍເປີດໄປກາງ ແລະ ແຄບລົງ (ໄວ) ທຽບກັບການກວດເບິ່ງທຸກໜ້າຈາກຕົ້ນ (ຊ້າ).'
      },
      {
        name: 'ການຂະຫຍາຍໄດ້',
        description: 'ຮອງຮັບການເຕີບໂຕ.',
        example: 'ຮ້ານອາຫານທີ່ມີໂຕະດຽວ ທຽບກັບຮ້ານທີ່ສາມາດເພີ່ມໂຕະໄດ້ເມື່ອຫຍຸ້ງ.'
      },
      {
        name: 'DRY (ຢ່າເຮັດຊ້ຳ)',
        description: 'ຂຽນໂຄດຄັ້ງດຽວ, ໃຊ້ຊ້ຳໄດ້.',
        codeExamples: [
          {
            language: 'python',
            label: 'ບໍ່ດີ - ໂຄດຊ້ຳ',
            code: `print("ຍິນດີຕ້ອນຮັບ, John!")
print("ຍິນດີຕ້ອນຮັບ, Mary!")
print("ຍິນດີຕ້ອນຮັບ, Tom!")`
          },
          {
            language: 'python',
            label: 'ດີ - ຟັງຊັນທີ່ໃຊ້ຊ້ຳໄດ້',
            code: `def greet(name):
    print(f"ຍິນດີຕ້ອນຮັບ, {name}!")

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
    title: 'ວົງຈອນການພັດທະນາ',
    description: 'ຂັ້ນຕອນຂອງການພັດທະນາຊອບແວຈາກແນວຄວາມຄິດຈົນເຖິງການບຳລຸງຮັກສາ.',
    subtopics: [
      {
        name: 'ຄວາມຕ້ອງການ',
        description: 'ການເຂົ້າໃຈວ່າຈະສ້າງຫຍັງ.',
        example: '"ຜູ້ໃຊ້ຕ້ອງການແບ່ງປັນຮູບກັບໝູ່" ກາຍເປັນຄຸນສົມບັດສະເພາະເຊັ່ນ "ອັບໂຫຼດຮູບ, ແທັກໝູ່, ເພີ່ມຄຳເຫັນ."'
      },
      {
        name: 'ການອອກແບບ',
        description: 'ການວາງແຜນກ່ອນຂຽນໂຄດ.',
        example: 'ແຕ້ມວິທີການເຮັດວຽກຂອງ Instagram: ຜູ້ໃຊ້ອັບໂຫຼດຮູບ → ຮູບຖືກເກັບໃນຖານຂໍ້ມູນ → ໝູ່ເຫັນໃນ feed.'
      },
      {
        name: 'ການຈັດຕັ້ງປະຕິບັດ',
        description: 'ການຂຽນໂຄດຕົວຈິງ.',
        example: 'ການຂຽນຟັງຊັນທີ່ອັບໂຫຼດຮູບໄປຍັງເຊີບເວີ.'
      },
      {
        name: 'ການທົດສອບ',
        description: 'ກວດສອບວ່າມັນເຮັດວຽກ.',
        example: 'ທົດສອບວ່າຈະເກີດຫຍັງຂຶ້ນຖ້າຄົນອັບໂຫຼດຮູບ 100MB, ຫຼືບໍ່ມີຮູບເລີຍ.'
      },
      {
        name: 'ການນຳໃຊ້',
        description: 'ເຮັດໃຫ້ມັນພ້ອມໃຊ້ງານສຳລັບຜູ້ໃຊ້.',
        example: 'ການອັບເດດແອັບຂອງທ່ານໄປ App Store.'
      },
      {
        name: 'ການບຳລຸງຮັກສາ',
        description: 'ການແກ້ໄຂ ແລະ ປັບປຸງ.',
        example: 'ການແກ້ໄຂບັກທີ່ຮູບບໍ່ໂຫຼດເມື່ອອິນເຕີເນັດຊ້າ.'
      }
    ]
  },
  {
    id: 'data-structures',
    title: 'ໂຄງສ້າງຂໍ້ມູນ',
    description: 'ວິທີການຈັດລະບຽບ ແລະ ເກັບຂໍ້ມູນເພື່ອການເຂົ້າເຖິງ ແລະ ແກ້ໄຂທີ່ມີປະສິດທິພາບ.',
    subtopics: [
      {
        name: 'Array (ອາເຣ)',
        description: 'ລາຍການຂອງລາຍການຕາມລຳດັບ.',
        example: '["ໝາກແອັບເປີ້ນ", "ໝາກກ້ວຍ", "ໝາກກ້ຽງ"] - ງ່າຍຕໍ່ການເອົາລາຍການທີ 2, ຍາກທີ່ຈະແຊກໃສ່ກາງ.'
      },
      {
        name: 'Linked List',
        description: 'ຕ່ອງໂສ້ຂອງລາຍການ, ແຕ່ລະອັນຊີ້ໄປຫາອັນຕໍ່ໄປ.',
        example: 'ຄືກັບການລ່າຊອກຫາສົມບັດທີ່ແຕ່ລະຄຳໃບ້ຊີ້ໄປຫາສະຖານທີ່ຕໍ່ໄປ. ງ່າຍຕໍ່ການເພີ່ມຄຳໃບ້, ຊ້າທີ່ຈະຊອກຫາຄຳໃບ້ທີ 50.'
      },
      {
        name: 'Hash Table',
        description: 'ການຊອກຫາສິ່ງຕ່າງໆໂດຍຊື່/ກະແຈ.',
        example: 'ວັດຈະນານຸກົມ - ທ່ານຊອກຫາ "ໝາກແອັບເປີ້ນ" ແລະ ພົບຄຳນິຍາມຂອງມັນທັນທີ. ບໍ່ຕ້ອງອ່ານທຸກໜ້າ.'
      },
      {
        name: 'Tree (ຕົ້ນໄມ້)',
        description: 'ໂຄງສ້າງລຳດັບຊັ້ນ.',
        example: 'ຜັງອົງກອນບໍລິສັດ - CEO ຢູ່ເທິງ, ຜູ້ຈັດການຢູ່ລຸ່ມ, ພະນັກງານຢູ່ໃຕ້ພວກເຂົາ.'
      },
      {
        name: 'Stack (ກອງ)',
        description: 'ເຂົ້າສຸດທ້າຍ, ອອກກ່ອນ.',
        example: 'ກອງຈານ - ທ່ານເອົາຈານເທິງສຸດກ່ອນ (ອັນສຸດທ້າຍທີ່ເພີ່ມ).'
      },
      {
        name: 'Queue (ແຖວ)',
        description: 'ເຂົ້າກ່ອນ, ອອກກ່ອນ.',
        example: 'ແຖວຢູ່ຮ້ານກາເຟ - ຄົນທຳອິດໃນແຖວຖືກບໍລິການກ່ອນ.'
      }
    ]
  },
  {
    id: 'algorithms',
    title: 'ອັນກໍຣິທຶມ',
    description: 'ຂັ້ນຕອນທີ່ເປັນລະບົບສຳລັບການແກ້ໄຂບັນຫາ.',
    subtopics: [
      {
        name: 'ການຈັດລຽງ',
        description: 'ການຈັດລຽງຕາມລຳດັບ.',
        example: 'ການຈັດລຽງຊື່ຕາມຕົວອັກສອນ. Quicksort ຄືກັບການແບ່ງຊື່ເປັນກອງ "A-M" ແລະ "N-Z", ແລ້ວຈັດລຽງແຕ່ລະກອງ.'
      },
      {
        name: 'Binary Search',
        description: 'ການຊອກຫາໃນລາຍການທີ່ຈັດລຽງແລ້ວ.',
        example: 'ການເດົາຕົວເລກ 1-100. ຖ້າເຂົາເວົ້າວ່າ "ສູງກວ່າ," ທ່ານຮູ້ວ່າມັນແມ່ນ 51-100, ບໍ່ແມ່ນ 1-50. ໄວກວ່າການເດົາ 1, 2, 3...'
      },
      {
        name: 'Recursion',
        description: 'ຟັງຊັນເອີ້ນຕົວເອງ.',
        codeExamples: [
          {
            language: 'python',
            code: `def countdown(n):
    if n == 0:
        print("ສຳເລັດ!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)  # ພິມ: 3, 2, 1, ສຳເລັດ!`
          }
        ]
      }
    ]
  },
  {
    id: 'design-patterns',
    title: 'ຮູບແບບການອອກແບບ',
    description: 'ວິທີແກ້ໄຂທີ່ໃຊ້ຊ້ຳໄດ້ສຳລັບບັນຫາການອອກແບບຊອບແວທົ່ວໄປ.',
    subtopics: [
      {
        name: 'Singleton',
        description: 'ມີພຽງໜຶ່ງ instance ເທົ່ານັ້ນ.',
        example: 'ເກມທີ່ມີເມນູຕັ້ງຄ່າດຽວ - ບໍ່ວ່າທ່ານຈະເປີດຕັ້ງຄ່າຈາກໃສ, ມັນແມ່ນເມນູດຽວກັນ.'
      },
      {
        name: 'Factory',
        description: 'ການສ້າງ object ໂດຍບໍ່ລະບຸປະເພດທີ່ແນ່ນອນ.',
        example: 'ໂຮງງານປຸ່ມທີ່ສ້າງປຸ່ມແບບ iOS ໃນ iPhone, ແບບ Android ໃນ Android, ໂດຍທ່ານບໍ່ຕ້ອງລະບຸວ່າອັນໃດ.'
      },
      {
        name: 'Observer',
        description: 'Object ເບິ່ງການປ່ຽນແປງ.',
        example: 'ການແຈ້ງເຕືອນ YouTube - ທ່ານຕິດຕາມຊ່ອງ, ແລະ ທ່ານຖືກແຈ້ງເຕືອນເມື່ອເຂົາອັບໂຫຼດ (ທ່ານເປັນຜູ້ສັງເກດ, ຊ່ອງແມ່ນສິ່ງທີ່ທ່ານກຳລັງເບິ່ງ).'
      }
    ]
  },
  {
    id: 'oop',
    title: 'ການອອກແບບແບບ Object-Oriented',
    description: 'ຮູບແບບການຂຽນໂປຣແກຣມທີ່ອີງໃສ່ object ທີ່ມີຂໍ້ມູນ ແລະ ໂຄດ.',
    subtopics: [
      {
        name: 'Encapsulation',
        description: 'ການເຊື່ອງລາຍລະອຽດ.',
        codeExamples: [
          {
            language: 'python',
            code: `class BankAccount:
    def __init__(self):
        self.__balance = 0  # ເຊື່ອງ (private)

    def deposit(self, amount):  # ວິທີ Public
        self.__balance += amount

    def get_balance(self):
        return self.__balance

# ທ່ານບໍ່ສາມາດປ່ຽນ __balance ໂດຍກົງ, ຕ້ອງໃຊ້ deposit()`
          }
        ]
      },
      {
        name: 'Inheritance',
        description: 'ຄລາສລູກສືບທອດຈາກພໍ່ແມ່.',
        codeExamples: [
          {
            language: 'python',
            code: `class Animal:
    def eat(self):
        print("ກິນ...")

class Dog(Animal):  # Dog ສືບທອດຈາກ Animal
    def bark(self):
        print("ເຫົ່າ!")

dog = Dog()
dog.eat()  # ເຮັດວຽກ! ສືບທອດຈາກ Animal
dog.bark()  # ເຮັດວຽກເຊັ່ນກັນ!`
          }
        ]
      },
      {
        name: 'Polymorphism',
        description: 'Object ຕ່າງກັນຕອບສະໜອງຕໍ່ຄຳສັ່ງດຽວກັນແຕກຕ່າງກັນ.',
        codeExamples: [
          {
            language: 'python',
            code: `class Dog:
    def speak(self):
        return "ເຫົ່າ!"

class Cat:
    def speak(self):
        return "ມ້ຽວ!"

# ຊື່ວິທີດຽວກັນ, ພຶດຕິກຳຕ່າງກັນ
dog = Dog()
cat = Cat()
print(dog.speak())  # ເຫົ່າ!
print(cat.speak())  # ມ້ຽວ!`
          }
        ]
      }
    ]
  },
  {
    id: 'testing',
    title: 'ການທົດສອບ',
    description: 'ການຢືນຢັນວ່າຊອບແວເຮັດວຽກຕາມທີ່ຄາດໄວ້.',
    subtopics: [
      {
        name: 'Unit Test',
        description: 'ທົດສອບສ່ວນນ້ອຍໜຶ່ງ.',
        codeExamples: [
          {
            language: 'python',
            code: `def add(a, b):
    return a + b

# ທົດສອບມັນ
assert add(2, 3) == 5  # ກໍລະນີປົກກະຕິ
assert add(0, 0) == 0  # ກໍລະນີຂອບ
assert add(-1, 1) == 0  # ຕົວເລກລົບ`
          }
        ]
      },
      {
        name: 'Integration Test',
        description: 'ທົດສອບສ່ວນຕ່າງໆເຮັດວຽກຮ່ວມກັນ.',
        example: 'ການທົດສອບວ່າເມື່ອຜູ້ໃຊ້ຄລິກ "ຊື້," ການຈ່າຍເງິນດຳເນີນການ ແລະ ຄຳສັ່ງຖືກບັນທຶກ ແລະ ອີເມວຖືກສົ່ງ.'
      },
      {
        name: 'System Test',
        description: 'ທົດສອບທັງໝົດ.',
        example: 'ຜູ້ໃຊ້ຈິງຜ່ານຂະບວນການຊື້ເຄື່ອງທັງໝົດຈາກການເບິ່ງຈົນເຖິງການຈ່າຍເງິນ.'
      }
    ]
  },
  {
    id: 'version-control',
    title: 'ການຄວບຄຸມເວີຊັນ (Git)',
    description: 'ການຕິດຕາມ ແລະ ຈັດການການປ່ຽນແປງໂຄດ.',
    subtopics: [
      {
        name: 'Commit',
        description: 'ບັນທຶກ snapshot.',
        example: 'ຄືກັບການບັນທຶກເວີຊັນຂອງບົດຄວາມ - "ສະບັບຮ່າງ 1," "ສະບັບຮ່າງ 2," ເພື່ອໃຫ້ທ່ານສາມາດກັບໄປໄດ້ຖ້າຕ້ອງການ.'
      },
      {
        name: 'Branch',
        description: 'ເຮັດວຽກໃນສິ່ງໃດສິ່ງໜຶ່ງແຍກຕ່າງຫາກ.',
        example: 'ສູດຫຼັກແມ່ນເຄັກຊັອກໂກແລັດ. ທ່ານສ້າງ branch ເພື່ອລອງເພີ່ມໝາກສະຕໍເບີຣີໂດຍບໍ່ເຮັດໃຫ້ສູດເດີມເສຍຫາຍ.'
      },
      {
        name: 'Merge',
        description: 'ການລວມວຽກ.',
        example: 'ການທົດລອງໝາກສະຕໍເບີຣີຂອງທ່ານປະສົບຜົນສຳເລັດ! ລວມມັນເຂົ້າໃນສູດຫຼັກ.'
      }
    ]
  },
  {
    id: 'architecture',
    title: 'ຮູບແບບສະຖາປັດຕະຍະກຳ',
    description: 'ໂຄງສ້າງລະດັບສູງສຳລັບການຈັດລະບຽບລະບົບຊອບແວ.',
    subtopics: [
      {
        name: 'Layered',
        description: 'ຈັດລະບຽບເປັນລະດັບ.',
        example: 'ຮ້ານອາຫານ - ລູກຄ້າ (ການນຳສະເໜີ), ພະນັກງານເສີບ (ຕັກກະທຸລະກິດ), ຫ້ອງຄົວ (ຊັ້ນຂໍ້ມູນ). ແຕ່ລະຊັ້ນສື່ສານກັບຊັ້ນທີ່ຢູ່ຕິດກັນ.'
      },
      {
        name: 'Microservices',
        description: 'ບໍລິການນ້ອຍໆທີ່ເປັນອິດສະຫຼະ.',
        example: 'Amazon ມີບໍລິການແຍກຕ່າງຫາກສຳລັບບັນຊີຜູ້ໃຊ້, ລາຍການສິນຄ້າ, ກະຕ່າຊື້ເຄື່ອງ, ການຈ່າຍເງິນ - ແຕ່ລະອັນສາມາດອັບເດດໄດ້ເປັນອິດສະຫຼະ.'
      },
      {
        name: 'Client-Server',
        description: 'ໜຶ່ງຖາມ, ໜຶ່ງຕອບ.',
        example: 'ບຣາວເຊີຂອງທ່ານ (client) ຖາມຄອມພິວເຕີຂອງ Google (server) ສຳລັບໜ້າເວັບ.'
      }
    ]
  },
  {
    id: 'security',
    title: 'ຄວາມປອດໄພ',
    description: 'ການປົກປ້ອງຊອບແວຈາກໄພຂົ່ມຂູ່ ແລະ ຊ່ອງໂຫວ່.',
    subtopics: [
      {
        name: 'ການກວດສອບ Input',
        description: 'ກວດສອບສິ່ງທີ່ຜູ້ໃຊ້ສົ່ງ.',
        example: 'ຊ່ອງອາຍຸຄວນຮັບພຽງຕົວເລກ 0-120, ບໍ່ແມ່ນ "abc" ຫຼື "-5".'
      },
      {
        name: 'ການປ້ອງກັນ SQL Injection',
        description: 'ຢ່າໄວ້ໃຈ input ຂອງຜູ້ໃຊ້ໃນ query ຖານຂໍ້ມູນ.',
        codeExamples: [
          {
            language: 'python',
            label: 'ບໍ່ດີ - ຜູ້ໃຊ້ອາດພິມ: "\'; DROP TABLE users; --"',
            code: `query = f"SELECT * FROM users WHERE name = '{user_input}'"`
          },
          {
            language: 'python',
            label: 'ດີ - ໃຊ້ parameterized queries',
            code: `query = "SELECT * FROM users WHERE name = ?"
execute(query, [user_input])`
          }
        ]
      },
      {
        name: 'Authentication',
        description: 'ການຢືນຢັນວ່າທ່ານແມ່ນໃຜ.',
        example: 'ຊື່ຜູ້ໃຊ້ ແລະ ລະຫັດຜ່ານເພື່ອເຂົ້າສູ່ລະບົບອີເມວ.'
      },
      {
        name: 'Authorization',
        description: 'ການຢືນຢັນວ່າທ່ານສາມາດເຮັດຫຍັງໄດ້.',
        example: 'ທ່ານສາມາດແກ້ໄຂໂພສຂອງຕົວເອງແຕ່ບໍ່ແມ່ນຂອງຄົນອື່ນ.'
      }
    ]
  },
  {
    id: 'performance',
    title: 'ປະສິດທິພາບ',
    description: 'ເຮັດໃຫ້ຊອບແວໄວ ແລະ ມີປະສິດທິພາບ.',
    subtopics: [
      {
        name: 'Caching',
        description: 'ບັນທຶກຜົນໄວ້ເພື່ອໃຊ້ຊ້ຳ.',
        example: 'Google Maps ບັນທຶກການຊອກຫາຫຼ້າສຸດຂອງທ່ານເພື່ອໃຫ້ມັນໂຫຼດທັນທີຄັ້ງຕໍ່ໄປແທນທີ່ຈະຄຳນວນໃໝ່.'
      },
      {
        name: 'Lazy Loading',
        description: 'ໂຫຼດສະເພາະສິ່ງທີ່ຕ້ອງການ.',
        example: 'Instagram ໂຫຼດຮູບ 10 ຮູບໃນຕອນເລີ່ມຕົ້ນ, ແລ້ວເພີ່ມຕື່ມເມື່ອທ່ານເລື່ອນລົງ, ແທນທີ່ຈະໂຫຼດຮູບທັງໝົດ 1000 ຮູບພ້ອມກັນ.'
      },
      {
        name: 'Database Indexing',
        description: 'ເຮັດໃຫ້ການຊອກຫາໄວຂຶ້ນ.',
        example: 'ດັດຊະນີຂອງປຶ້ມຊ່ວຍໃຫ້ທ່ານຊອກຫາຫົວຂໍ້ໄດ້ໄວແທນທີ່ຈະອ່ານທຸກໜ້າ.'
      }
    ]
  }
];
