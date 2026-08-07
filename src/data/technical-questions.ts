export interface TechnicalQuestion {
  id: number;
  topic: string;
  question: string;
  codeSnippet?: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export const technicalQuestions: TechnicalQuestion[] = [
  {
    id: 1,
    topic: "C++ Access Specifiers & OOP",
    question: "In the depicted C++ class definition, which statement correctly explains the result of the main() function?",
    codeSnippet: `class MyClass {
public:
    int a;
private:
    int b;
};

int main() {
    MyClass obj;
    obj.a = 10;
    obj.b = 20;
    return 0;
}`,
    options: [
      { key: "A", text: "The code will compile and run because both members are accessible." },
      { key: "B", text: "The code will compile but obj.b = 20 will be ignored during execution." },
      { key: "C", text: "The code will give a compile-time error because b is private." },
      { key: "D", text: "The code will run successfully and print both values to the console." },
    ],
    correctAnswer: "C",
    explanation: "'a' is declared under public, so it can be accessed anywhere. 'b' is declared under private, so it can only be accessed inside the class. Accessing obj.b from main() causes a compile-time error.",
  },
  {
    id: 2,
    topic: "C++ Access Specifiers & OOP",
    question: "Which modification will allow the depicted code to compile successfully without changing main()?",
    codeSnippet: `class Student {
    int rollNumber;

    void setRoll(int r){
        rollNumber = r;
    }
};

int main(){
    Student s;
    s.setRoll(101);
}`,
    options: [
      { key: "A", text: "Make the setRoll() method public" },
      { key: "B", text: "Change the class to struct Student" },
      { key: "C", text: "Declare rollNumber as public" },
      { key: "D", text: "Move setRoll() outside the class definition" },
    ],
    correctAnswer: "A",
    explanation: "In C++ classes, members are private by default. Making setRoll() public allows it to be called from main().",
  },
  {
    id: 3,
    topic: "C++ Access Specifiers & OOP",
    question: "Which modification should be made to allow the setScore() method to be accessed in main()?",
    codeSnippet: `class Game{
private:
    int score;

    void setScore(int s){
        score=s;
    }
};

int main(){
    Game g;
    g.setScore(90);
}`,
    options: [
      { key: "A", text: "Change private to protected" },
      { key: "B", text: "Make score public" },
      { key: "C", text: "Make setScore() public" },
      { key: "D", text: "Declare g as a friend object" },
    ],
    correctAnswer: "C",
    explanation: "To follow encapsulation best practices, keep 'score' private and make 'setScore()' public to allow controlled access.",
  },
  {
    id: 4,
    topic: "C++ Inheritance",
    question: "Analyze the depicted program. Which implementation ensures that Car correctly inherits functionality from Vehicle?",
    codeSnippet: `class Vehicle{
public:
    void start(){
        cout<<"Engine started";
    }
};

class Car : public Vehicle{

};

int main(){
    Car c1;
    c1.start();
}`,
    options: [
      { key: "A", text: "Change start() to private" },
      { key: "B", text: "Use public inheritance" },
      { key: "C", text: "Declare another start() inside Car" },
      { key: "D", text: "Convert Vehicle into a friend class of Car" },
    ],
    correctAnswer: "B",
    explanation: "Public inheritance ('class Car : public Vehicle') ensures public members of Vehicle remain public in Car, allowing c1.start() to execute.",
  },
  {
    id: 5,
    topic: "C++ Inheritance",
    question: "Assume that Employee inherits Base using protected inheritance. Which Employee class correctly uses level and allows access to getID()?",
    codeSnippet: `class Base{
private:
    int code=100;

protected:
    int level=2;

public:
    int getID(){ return 1; }
};`,
    options: [
      { key: "A", text: "class Employee : protected Base { public: int fetchID(){ return code; } };" },
      { key: "B", text: "class Employee : protected Base { public: int showLevel(){ return level; } int fetchID(){ return getID(); } };" },
      { key: "C", text: "class Employee : public Base { public: int showLevel(){ return level; } };" },
      { key: "D", text: "class Employee : protected Base { public: int fetchID(){ return level; } int showID(){ return code; } };" },
    ],
    correctAnswer: "B",
    explanation: "'code' is private so it cannot be accessed in Employee. 'level' is protected so it is accessible. Under protected inheritance, 'getID()' becomes protected inside Employee and can be called via a public member function like fetchID().",
  },
  {
    id: 6,
    topic: "C++ Friend Functions",
    question: "Which option correctly enables audit() to access and print the private balance?",
    codeSnippet: `class Account{
private:
    int balance=500;

friend void audit(Account&);
};`,
    options: [
      { key: "A", text: "class audit { public: void print(Account &a){ cout<<a.balance; } };" },
      { key: "B", text: "int main(){ Account a; cout<<a.balance; }" },
      { key: "C", text: "void Account::audit(){ cout<<balance; }" },
      { key: "D", text: "void audit(Account &a){ cout<<a.balance; }" },
    ],
    correctAnswer: "D",
    explanation: "A friend function declared as 'friend void audit(Account&);' can directly access private members like 'a.balance'.",
  },
  {
    id: 7,
    topic: "C++ Copy Constructors",
    question: "A class contains a pointer. Which approach ensures obj2 has its own copy of memory?",
    codeSnippet: `Sample obj1;
Sample obj2=obj1;`,
    options: [
      { key: "A", text: "Default copy constructor" },
      { key: "B", text: "Custom copy constructor" },
      { key: "C", text: "Assignment operator" },
      { key: "D", text: "Destructor only" },
    ],
    correctAnswer: "B",
    explanation: "The default copy constructor performs a shallow copy, causing pointers to point to the same memory location. A custom copy constructor performs a deep copy to allocate independent memory.",
  },
  {
    id: 8,
    topic: "C++ Encapsulation",
    question: "Which option correctly applies encapsulation in the Person class?",
    codeSnippet: `class Person{
private:
int socialID;
string name;

public:
Person(...)

string getName(){
return name;
}

bool validateID(){
...
}
};`,
    options: [
      { key: "A", text: "socialID is directly accessible." },
      { key: "B", text: "getName() allows controlled access to name." },
      { key: "C", text: "validateID() modifies socialID." },
      { key: "D", text: "No access specifiers are used." },
    ],
    correctAnswer: "B",
    explanation: "Encapsulation involves hiding internal data members (making them private) and exposing controlled access via public getter/setter methods like getName().",
  },
  {
    id: 9,
    topic: "C++ Inheritance",
    question: "Analyze the depicted program. Which code snippet correctly demonstrates inheritance to produce the output 'Bark'?",
    codeSnippet: `class Animal {
public:
    string sound = "Generic sound";

    void makeSound() {
        cout << sound << endl;
    }
};

class Dog : public Animal {
public:
    Dog() {
        sound = "Bark";
    }
};`,
    options: [
      { key: "A", text: "Animal a; a.makeSound();" },
      { key: "B", text: "Dog d; d.makeSound();" },
      { key: "C", text: "Dog d; d.sound; d.makeSound();" },
      { key: "D", text: "Animal a; a.sound = \"Bark\"; a.makeSound();" },
    ],
    correctAnswer: "B",
    explanation: "The constructor of Dog modifies 'sound' to 'Bark'. Instantiating 'Dog d;' and calling 'd.makeSound()' inherits makeSound() and prints 'Bark'.",
  },
  {
    id: 10,
    topic: "C++ Inheritance Syntax",
    question: "Assume a student wants to reuse the displayInfo() method of the Student class in a new class called GraduateStudent. Which change allows this?",
    codeSnippet: `class Student{
public:
    void displayInfo(){
        cout<<"This is a student.";
    }
};`,
    options: [
      { key: "A", text: "class GraduateStudent(Student){};" },
      { key: "B", text: "class GraduateStudent : public Student{};" },
      { key: "C", text: "class GraduateStudent inherits Student{};" },
      { key: "D", text: "class GraduateStudent -> Student{};" },
    ],
    correctAnswer: "B",
    explanation: "In C++, derived classes inherit from a base class using the colon operator and access specifier: 'class GraduateStudent : public Student{}'.",
  },
  {
    id: 12,
    topic: "Data Structures - Disjoint Set",
    question: "Assume you are maintaining relationships between items that belong to multiple sets while supporting fast lookups. Which data structure should be used?",
    options: [
      { key: "A", text: "Min Heap" },
      { key: "B", text: "Undirected Graph" },
      { key: "C", text: "Red-Black Tree" },
      { key: "D", text: "Disjoint Set (Union-Find)" },
    ],
    correctAnswer: "D",
    explanation: "Disjoint Set (Union-Find) efficiently supports Find and Union operations in near O(1) time with path compression, ideal for grouping elements and set relationships.",
  },
  {
    id: 13,
    topic: "Data Structures - Priority Queue",
    question: "A company wants customers to receive service based on priority. Which data structure is most suitable?",
    options: [
      { key: "A", text: "Priority Queue" },
      { key: "B", text: "Binary Search Tree" },
      { key: "C", text: "Array" },
      { key: "D", text: "Bubble Sort" },
    ],
    correctAnswer: "A",
    explanation: "A Priority Queue processes elements according to assigned priority (highest or lowest first), supporting O(log n) insertions and removals.",
  },
  {
    id: 14,
    topic: "Data Structures - Stack",
    question: "While implementing a Stack using an Array, how should the top variable be initialized?",
    options: [
      { key: "A", text: "top = -1" },
      { key: "B", text: "top = 0" },
      { key: "C", text: "top = MAX_SIZE" },
      { key: "D", text: "top = 1" },
    ],
    correctAnswer: "A",
    explanation: "Standard array-based stack implementation initializes top = -1 to represent an empty stack. The first push increments top to 0.",
  },
  {
    id: 15,
    topic: "Data Structures - Linked List",
    question: "Which pseudocode correctly inserts an element at the beginning of a singly linked list?",
    codeSnippet: `insert(element):
temp = new Node
temp.data = element
temp.next = head
head = temp`,
    options: [
      { key: "A", text: "temp.next = head; head = temp;" },
      { key: "B", text: "head.next = temp; head = temp;" },
      { key: "C", text: "temp.next = null; head = temp;" },
      { key: "D", text: "head = temp.next; temp.data = element;" },
    ],
    correctAnswer: "A",
    explanation: "To insert at the beginning in O(1) time: allocate temp, set temp.data, point temp.next to the current head, then update head = temp.",
  },
  {
    id: 16,
    topic: "Operating Systems - File Allocation",
    question: "An e-commerce company tracks the location of each file on disk by storing the file's block addresses in a single dedicated disk block. What type of file allocation technique is used?",
    options: [
      { key: "A", text: "Using Indexed Allocation technique" },
      { key: "B", text: "Using Contiguous Allocation technique" },
      { key: "C", text: "Using File Allocation Table (FAT) technique" },
      { key: "D", text: "Using Linked Allocation technique" },
    ],
    correctAnswer: "A",
    explanation: "Indexed Allocation maintains an index block containing pointers to all disk blocks assigned to the file, enabling random access without external fragmentation.",
  },
  {
    id: 17,
    topic: "Operating Systems - CPU Scheduling",
    question: "An operating system gives each process a fixed time slice. After the time expires, the process is preempted and the CPU is assigned to the next process. Which scheduling algorithm is described?",
    options: [
      { key: "A", text: "Priority Scheduling" },
      { key: "B", text: "First Come First Serve (FCFS)" },
      { key: "C", text: "Round Robin" },
      { key: "D", text: "Multilevel Queue" },
    ],
    correctAnswer: "C",
    explanation: "Round Robin CPU scheduling allocates a fixed time quantum to each process in circular queue order, preempting active processes when their time slice expires.",
  },
  {
    id: 18,
    topic: "Operating Systems - Disk Caching",
    question: "A high-performance database system handles millions of transactions daily, aiming to balance read and write operations while minimizing write latency. Which disk caching strategy should be used?",
    options: [
      { key: "A", text: "Write-Back Cache Mode" },
      { key: "B", text: "Write-Through Cache Mode" },
      { key: "C", text: "Read Caching with Prefetching" },
      { key: "D", text: "L2 Cache Size" },
    ],
    correctAnswer: "A",
    explanation: "Write-Back Cache mode acknowledges write operations immediately after writing to volatile cache and flushes to disk asynchronously, minimizing write latency.",
  },
  {
    id: 19,
    topic: "Operating Systems - Security",
    question: "An IT security manager wants to improve protection against both external attacks and internal unauthorized user threats on financial servers. Which operating system feature should she prioritize?",
    options: [
      { key: "A", text: "Encryption at rest" },
      { key: "B", text: "API rate limiting" },
      { key: "C", text: "Kernel patching" },
      { key: "D", text: "Mandatory Access Control (MAC)" },
    ],
    correctAnswer: "D",
    explanation: "Mandatory Access Control (MAC) enforces system-wide security policies set by administrators (e.g. SELinux), restricting user permission overrides against both insider and outsider threats.",
  },
  {
    id: 20,
    topic: "Operating Systems - Boot Process",
    question: "In a system with multiple operating systems installed, which component displays the operating system selection menu and loads the selected operating system kernel into memory?",
    options: [
      { key: "A", text: "BIOS" },
      { key: "B", text: "Bootloader" },
      { key: "C", text: "Kernel" },
      { key: "D", text: "Firmware" },
    ],
    correctAnswer: "B",
    explanation: "The Bootloader (e.g., GRUB, Windows Boot Manager) executes after POST/BIOS, renders the OS choice menu, and loads the selected OS kernel into memory.",
  },
];
