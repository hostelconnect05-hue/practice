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
      { key: "A", text: "class Employee : protected Base {\npublic:\n    int fetchID() { return code; }\n};" },
      { key: "B", text: "class Employee : protected Base {\npublic:\n    int showLevel() { return level; }\n    int fetchID() { return getID(); }\n};" },
      { key: "C", text: "class Employee : public Base {\npublic:\n    int showLevel() { return level; }\n};" },
      { key: "D", text: "class Employee : protected Base {\npublic:\n    int fetchID() { return level; }\n    int showID() { return code; }\n};" },
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
    id: 11,
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
    topic: "SQL / DBMS - Permissions",
    question: "Which SQL command is used to grant specific database permissions to a user?",
    options: [
      { key: "A", text: "GRANT" },
      { key: "B", text: "ALLOW" },
      { key: "C", text: "PERMIT" },
      { key: "D", text: "GIVE" },
    ],
    correctAnswer: "A",
    explanation: "The GRANT statement gives administrative and access privileges to database users.",
  },
  {
    id: 21,
    topic: "SQL / DBMS - Self Join",
    question: "A business wants to list pairs of customers who belong to the same country but have different customer IDs. What does the depicted query do?",
    codeSnippet: `SELECT A.CustomerName,
       B.CustomerName,
       A.City
FROM Customers A,
     Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.Country = B.Country;`,
    options: [
      { key: "A", text: "Joins the customer table twice" },
      { key: "B", text: "Lists duplicate city values" },
      { key: "C", text: "Finds customers in the same city" },
      { key: "D", text: "Matches the rows using city" },
    ],
    correctAnswer: "A",
    explanation: "The query uses a Self Join, aliasing the Customers table as A and B to compare rows within the same table.",
  },
  {
    id: 22,
    topic: "SQL / DBMS - Built-in Functions",
    question: "What is the output of the following SQL query?",
    codeSnippet: `SELECT
CHAR(83),
LOCATE('db','cloud_db_mysql'),
FORMAT(2499.56789,2);`,
    options: [
      { key: "A", text: "'T', 7, '2499.56'" },
      { key: "B", text: "'S', 6, '2,499.57'" },
      { key: "C", text: "'S', 7, '2,499.57'" },
      { key: "D", text: "'C', 8, '2499.57'" },
    ],
    correctAnswer: "C",
    explanation: "CHAR(83) evaluates to 'S'. LOCATE('db', 'cloud_db_mysql') finds 'db' starting at 1-based index 7. FORMAT(2499.56789, 2) formats the number as '2,499.57'.",
  },
  {
    id: 23,
    topic: "SQL / DBMS - Date Functions",
    question: "A developer wants to display only the date from a DATETIME column and filter records belonging to June, irrespective of the year. Which query satisfies both conditions?",
    codeSnippet: `SELECT product_id,
       DATE(sale_time)
FROM transactions
WHERE EXTRACT(MONTH FROM sale_time)=6;`,
    options: [
      { key: "A", text: "SELECT product_id, sale_time FROM transactions WHERE MONTH(sale_time)=6;" },
      { key: "B", text: "SELECT product_id, TIME(sale_time) FROM transactions WHERE EXTRACT(MONTH FROM sale_time)=6;" },
      { key: "C", text: "SELECT product_id, DATE(sale_time) FROM transactions WHERE DAY(sale_time)=6;" },
      { key: "D", text: "SELECT product_id, DATE(sale_time) FROM transactions WHERE EXTRACT(MONTH FROM sale_time)=6;" },
    ],
    correctAnswer: "D",
    explanation: "DATE(sale_time) truncates the time portion to display only the YYYY-MM-DD date, and EXTRACT(MONTH FROM sale_time)=6 filters transactions from June across all years.",
  },
  {
    id: 24,
    topic: "Java Collections - ArrayList Sorting",
    question: "Sort a List<Integer> in descending order using the correct Java method.",
    codeSnippet: `import java.util.*;
public class Example1 {
  public static void main(String[] args) {
    List<Integer> numbers = new ArrayList<>();
    numbers.add(1); numbers.add(2); numbers.add(3); numbers.add(4);
    Collections.sort(numbers, Collections.reverseOrder());
    System.out.println(numbers);
  }
}`,
    options: [
      { key: "A", text: "numbers.sort(Collections.reverseOrder());" },
      { key: "B", text: "numbers.sort(Comparator.reverseOrder());" },
      { key: "C", text: "Collections.sort(numbers, Collections.reverseOrder());" },
      { key: "D", text: "Collections.sort(numbers, Comparator.reverseOrder());" },
    ],
    correctAnswer: "C",
    explanation: "Collections.sort(numbers, Collections.reverseOrder()) is used to sort a List in descending order in standard Java.",
  },
  {
    id: 25,
    topic: "Java Collections - HashSet Intersection",
    question: "What is the output of the following HashSet retainAll intersection program?",
    codeSnippet: `Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 6, 7));
Set<Integer> set2 = new HashSet<>(Arrays.asList(2, 3, 4, 6));
Set<Integer> intersection = new HashSet<>(set1);
intersection.retainAll(set2);
System.out.println(intersection);`,
    options: [
      { key: "A", text: "[4, 3, 6]" },
      { key: "B", text: "[2, 3, 6]" },
      { key: "C", text: "[2, 3, 7]" },
      { key: "D", text: "[2, 4, 6]" },
    ],
    correctAnswer: "B",
    explanation: "retainAll(set2) retains only elements common to set1 and set2, which are 2, 3, and 6.",
  },
  {
    id: 26,
    topic: "Java Collections - LinkedList Debugging",
    question: "The code uses addFirst(), addLast(), removeFirst(), removeLast() — methods not available in ArrayList, only in LinkedList. How do you fix the error?",
    options: [
      { key: "A", text: "Use LinkedList, fix import -> Output: [Tony, Jack, Joe]" },
      { key: "B", text: "Use new <String>() -> Syntax error" },
      { key: "C", text: "Use LinkedList, fix import -> Output: [Jack, Joe]" },
      { key: "D", text: "Use List<String> = new List<String>() -> Invalid (List is an interface)" },
    ],
    correctAnswer: "C",
    explanation: "Replace ArrayList with LinkedList, import java.util.LinkedList, and remove invalid index arguments from addFirst().",
  },
  {
    id: 27,
    topic: "Java Collections - PriorityQueue Output",
    question: "What is printed by iterating, peeking, and polling elements in PriorityQueue testQueue = new PriorityQueue() with 'Black' and 'White'?",
    options: [
      { key: "A", text: "Color: White Color: White Iterating: White Black" },
      { key: "B", text: "Color: Black Color: White Iterating: Black" },
      { key: "C", text: "Color: Black Color: Black Iterating the queue elements: Black White" },
      { key: "D", text: "Color: Black Color: Black Iterating: White Black" },
    ],
    correctAnswer: "C",
    explanation: "PriorityQueue orders strings lexicographically ('Black' < 'White'). element() and peek() return head ('Black').",
  },
  {
    id: 28,
    topic: "Java Exception Handling - FileNotFoundException",
    question: "A Java program attempts to read a file that does not exist. Which exception should be caught?",
    codeSnippet: `FileReader fr = new FileReader("abc.txt");`,
    options: [
      { key: "A", text: "IOException" },
      { key: "B", text: "FileNotFoundException" },
      { key: "C", text: "ArithmeticException" },
      { key: "D", text: "NullPointerException" },
    ],
    correctAnswer: "B",
    explanation: "FileNotFoundException is thrown when attempting to open a file that does not exist on the file system.",
  },
  {
    id: 29,
    topic: "Java Exception Handling - File Reading",
    question: "Consider the following code: try { FileReader file = new FileReader('input.txt'); BufferedReader br = new BufferedReader(file); System.out.println(br.readLine()); } catch (________ e) { System.out.println('File Error'); }. Which exception type correctly replaces the blank?",
    codeSnippet: `try {
    FileReader file = new FileReader("input.txt");
    BufferedReader br = new BufferedReader(file);
    System.out.println(br.readLine());
}
catch (________ e) {
    System.out.println("File Error");
}`,
    options: [
      { key: "A", text: "NullPointerException" },
      { key: "B", text: "ArithmeticException" },
      { key: "C", text: "IOException" },
      { key: "D", text: "ArrayIndexOutOfBoundsException" },
    ],
    correctAnswer: "C",
    explanation: "Methods such as readLine() can throw an IOException. Therefore, catch(IOException e) handles errors while reading the file.",
  },
  {
    id: 30,
    topic: "Java Exception Handling - NumberFormatException",
    question: "What will happen when the following code is executed? String s = 'ABC'; int x = Integer.parseInt(s);",
    codeSnippet: `String s = "ABC";
int x = Integer.parseInt(s);`,
    options: [
      { key: "A", text: "Prints 0" },
      { key: "B", text: "Compilation Error" },
      { key: "C", text: "NumberFormatException" },
      { key: "D", text: "NullPointerException" },
    ],
    correctAnswer: "C",
    explanation: "Integer.parseInt('ABC') attempts to convert non-numeric letters into a number, which throws a NumberFormatException.",
  },
  {
    id: 31,
    topic: "Java Exception Handling - Interface Methods",
    question: "A class implements an interface but does not override all its abstract methods. What happens?",
    codeSnippet: `interface Test { void display(); }
class Demo implements Test { }`,
    options: [
      { key: "A", text: "Program executes normally." },
      { key: "B", text: "Compilation Error." },
      { key: "C", text: "Runtime Exception." },
      { key: "D", text: "NullPointerException." },
    ],
    correctAnswer: "B",
    explanation: "If a class implements an interface, it must implement every abstract method declared in that interface or be declared abstract, otherwise it results in a compilation error.",
  },
  {
    id: 32,
    topic: "Java Collections - Vector Manipulation",
    question: "What is the output of the following Vector removal program?",
    codeSnippet: `Vector<Integer> v = new Vector<>();
v.add(10);
v.add(20);
v.add(30);
v.remove(1);
System.out.println(v);`,
    options: [
      { key: "A", text: "[10, 20, 30]" },
      { key: "B", text: "[10, 30]" },
      { key: "C", text: "[20, 30]" },
      { key: "D", text: "[10, 20]" },
    ],
    correctAnswer: "B",
    explanation: "remove(1) removes the element at index 1 (which is 20), leaving [10, 30].",
  },
  {
    id: 33,
    topic: "Java Collections - HashSet Duplication",
    question: "Which Java Collection can be used to remove duplicate elements from an array?",
    options: [
      { key: "A", text: "ArrayList" },
      { key: "B", text: "LinkedList" },
      { key: "C", text: "HashSet" },
      { key: "D", text: "Vector" },
    ],
    correctAnswer: "C",
    explanation: "A HashSet stores unique elements only, automatically deduplicating arrays.",
  },
  {
    id: 34,
    topic: "Data Structures - Linked List Traversal",
    question: "Which type of linked list allows traversal in both forward and backward directions?",
    options: [
      { key: "A", text: "Singly Linked List" },
      { key: "B", text: "Circular Linked List" },
      { key: "C", text: "Doubly Linked List" },
      { key: "D", text: "Static Linked List" },
    ],
    correctAnswer: "C",
    explanation: "A Doubly Linked List has links to both previous and next nodes, enabling bidirectional traversal.",
  },
  {
    id: 35,
    topic: "Data Structures - Fast Searching",
    question: "A company wants to store customer records where fast searching is more important than maintaining insertion order. Which data structure is the most suitable?",
    options: [
      { key: "A", text: "Array" },
      { key: "B", text: "Linked List" },
      { key: "C", text: "Hash Table" },
      { key: "D", text: "Stack" },
    ],
    correctAnswer: "C",
    explanation: "Hash Tables map keys to values, achieving constant time O(1) average search complexity.",
  },
  {
    id: 36,
    topic: "Data Structures - Queue Dequeue Front",
    question: "A queue currently contains: Front → 15 25 35 45 ← Rear. After performing one dequeue operation, which element becomes the front of the queue?",
    options: [
      { key: "A", text: "15" },
      { key: "B", text: "25" },
      { key: "C", text: "35" },
      { key: "D", text: "45" },
    ],
    correctAnswer: "B",
    explanation: "Queue is FIFO. Dequeuing removes the front element (15), so 25 becomes the new front element.",
  },
  {
    id: 37,
    topic: "Algorithms - Z Algorithm Complexity",
    question: "What is the time complexity of the Z Algorithm used for pattern matching?",
    options: [
      { key: "A", text: "O(n²)" },
      { key: "B", text: "O(log n)" },
      { key: "C", text: "O(n)" },
      { key: "D", text: "O(n log n)" },
    ],
    correctAnswer: "C",
    explanation: "The Z Algorithm matches patterns linearly in O(n) time.",
  },
  {
    id: 38,
    topic: "Operating Systems - Priority Scheduling",
    question: "A system uses Preemptive Priority Scheduling. Four processes arrive at time 0 ms: P1(Priority 3, Burst 6ms), P2(Priority 1, Burst 4ms), P3(Priority 2, Burst 5ms), P4(Priority 4, Burst 3ms). Lower priority number means higher priority. Which process executes first?",
    options: [
      { key: "A", text: "P1" },
      { key: "B", text: "P2" },
      { key: "C", text: "P3" },
      { key: "D", text: "P4" },
    ],
    correctAnswer: "B",
    explanation: "Priority 1 is the highest priority among all processes, so P2 executes first.",
  },
  {
    id: 39,
    topic: "Operating Systems - Layered Architecture",
    question: "Which operating system architecture organizes the system into multiple layers, where each layer performs a specific function and communicates only with its adjacent layers?",
    options: [
      { key: "A", text: "Monolithic Architecture" },
      { key: "B", text: "Layered Architecture" },
      { key: "C", text: "Microkernel Architecture" },
      { key: "D", text: "Hybrid Architecture" },
    ],
    correctAnswer: "B",
    explanation: "Layered Architecture organizes the OS into hierarchical layers communicating strictly with adjacent layers.",
  },
  {
    id: 40,
    topic: "Operating Systems - Access Control",
    question: "A company wants to restrict file access so that employees can access only files belonging to their own department. Which operating system security mechanism is most appropriate?",
    options: [
      { key: "A", text: "Round Robin Scheduling" },
      { key: "B", text: "Access Control Lists (ACLs)" },
      { key: "C", text: "Paging" },
      { key: "D", text: "Virtual Memory" },
    ],
    correctAnswer: "B",
    explanation: "Access Control Lists (ACLs) define explicit per-user and per-group permissions for files and folders.",
  },
  {
    id: 41,
    topic: "Operating Systems - Deadlock Definition",
    question: "Which of the following situations can lead to a deadlock in an operating system?",
    options: [
      { key: "A", text: "Multiple processes waiting indefinitely for resources held by each other." },
      { key: "B", text: "A process finishes execution successfully." },
      { key: "C", text: "A process releases all its allocated resources." },
      { key: "D", text: "A process executes without requesting any resources." },
    ],
    correctAnswer: "A",
    explanation: "Deadlock occurs when processes are blocked waiting indefinitely for resources held by each other.",
  },
  {
    id: 42,
    topic: "Operating Systems - Round Robin Scheduling",
    question: "In Round Robin Scheduling, three processes have burst times P1=4ms, P2=5ms, P3=6ms. The time quantum is 2ms. Which process completes last?",
    options: [
      { key: "A", text: "P1" },
      { key: "B", text: "P2" },
      { key: "C", text: "P3" },
      { key: "D", text: "P1 and P2 together" },
    ],
    correctAnswer: "C",
    explanation: "Execution order: P1(2ms)->P2(2ms)->P3(2ms)->P1(2ms done)->P2(2ms)->P3(2ms)->P2(1ms done)->P3(2ms done). P3 finishes last.",
  },
  {
    id: 43,
    topic: "Pseudocode & Algorithms - Recursive Factorial",
    question: "What is returned by recursive function F(5) where F(n) = if n<=1 return 1 else return n * F(n-1)?",
    options: [
      { key: "A", text: "120" },
      { key: "B", text: "5.0" },
      { key: "C", text: "10.0" },
      { key: "D", text: "100.0" },
    ],
    correctAnswer: "A",
    explanation: "F(5) = 5 * 4 * 3 * 2 * 1 = 120.",
  },
  {
    id: 44,
    topic: "Pseudocode & Algorithms - Stack Summation",
    question: "Push numbers 10 down to 1 onto a stack, then pop all and sum them. What is the total sum?",
    options: [
      { key: "A", text: "45" },
      { key: "B", text: "55" },
      { key: "C", text: "50" },
      { key: "D", text: "60" },
    ],
    correctAnswer: "B",
    explanation: "The sum of integers from 1 to 10 is (10 * 11) / 2 = 55.",
  },
  {
    id: 45,
    topic: "Pseudocode & Algorithms - Branching Logic",
    question: "For function evaluate(a, b): IF both even -> a+b; ELSEIF both odd -> a*b; ELSE -> a-b. What are evaluate(6, 10) and evaluate(7, 9)?",
    options: [
      { key: "A", text: "output1 = 16, output2 = 63" },
      { key: "B", text: "output1 = 60, output2 = 16" },
      { key: "C", text: "output1 = 16, output2 = 16" },
      { key: "D", text: "output1 = 63, output2 = 16" },
    ],
    correctAnswer: "A",
    explanation: "evaluate(6, 10) (both even): 6 + 10 = 16. evaluate(7, 9) (both odd): 7 * 9 = 63.",
  },
  {
    id: 46,
    topic: "Pseudocode & Algorithms - Loop Trace",
    question: "Initially a=1, b=2. The loop runs for j=2 to 6 with operations: j=2: b=2*2=4; j=3: b=4*3=12; j=4: a=1+3=4; j=5: b=12*5=60; j=6: b=60*6=360. What are the final values of a and b?",
    options: [
      { key: "A", text: "a = 4, b = 360" },
      { key: "B", text: "a = 5, b = 120" },
      { key: "C", text: "a = 4, b = 120" },
      { key: "D", text: "a = 5, b = 360" },
    ],
    correctAnswer: "A",
    explanation: "Tracing the loop step-by-step yields final values a = 4 and b = 360.",
  },
  {
    id: 47,
    topic: "Pseudocode & Algorithms - Continue Statement",
    question: "A loop runs from i=1 to 6 summing i. Whenever i==4, the statement continue; is executed. What is the final value of sum?",
    options: [
      { key: "A", text: "18" },
      { key: "B", text: "16" },
      { key: "C", text: "15" },
      { key: "D", text: "17" },
    ],
    correctAnswer: "D",
    explanation: "The continue statement skips i=4. The sum is 1 + 2 + 3 + 5 + 6 = 17.",
  },
  {
    id: 48,
    topic: "Pseudocode & Algorithms - Function Overloading",
    question: "Two overloaded methods exist: sum(int, int) and sum(float, float). What is the output of sum(3, 2.0)?",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "6" },
      { key: "C", text: "Compilation Error" },
      { key: "D", text: "Runtime Error" },
    ],
    correctAnswer: "A",
    explanation: "2.0 is a double/float literal, so 3 is widened to float 3.0 and sum(float, float) is invoked returning 5.",
  },
  {
    id: 49,
    topic: "Pseudocode & Algorithms - Odd/Even Loop",
    question: "Initially x=4. For i=1 to 6: if i is odd -> x = x + 2; if i is even -> x = x - 1. What is the final value of x?",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "8" },
    ],
    correctAnswer: "C",
    explanation: "Tracing: initial=4 -> i=1(+2)=6 -> i=2(-1)=5 -> i=3(+2)=7 -> i=4(-1)=6 -> i=5(+2)=8 -> i=6(-1)=7. Final x = 7.",
  },
  {
    id: 50,
    topic: "Pseudocode & Algorithms - Function Purpose",
    question: "Why are functions used in programming?",
    options: [
      { key: "A", text: "To represent the entire program" },
      { key: "B", text: "To avoid code reuse" },
      { key: "C", text: "To make the namespace unclean" },
      { key: "D", text: "To test smaller portions by isolating them" },
    ],
    correctAnswer: "D",
    explanation: "Functions allow programmers to test and debug smaller portions of code in isolation.",
  },
  {
    id: 51,
    topic: "SQL / DBMS - Number Base Conversion",
    question: "Which MySQL function converts numbers from one base to another?",
    options: [
      { key: "A", text: "con()" },
      { key: "B", text: "convbase()" },
      { key: "C", text: "conv()" },
      { key: "D", text: "None" },
    ],
    correctAnswer: "C",
    explanation: "CONV(number, from_base, to_base) converts numbers between bases in MySQL.",
  },
  {
    id: 52,
    topic: "SQL / DBMS - String Trimming",
    question: "Which MySQL function removes only trailing spaces from a string?",
    options: [
      { key: "A", text: "TRIM()" },
      { key: "B", text: "LTRIM()" },
      { key: "C", text: "RTRIM()" },
      { key: "D", text: "STRIP()" },
    ],
    correctAnswer: "C",
    explanation: "RTRIM() removes trailing whitespace from the right side of a string.",
  },
  {
    id: 53,
    topic: "SQL / DBMS - Instead Of Trigger",
    question: "Which trigger executes alternative logic instead of the original DML statement?",
    options: [
      { key: "A", text: "Instead Of Trigger" },
      { key: "B", text: "DDL Trigger" },
      { key: "C", text: "Disable Trigger" },
      { key: "D", text: "None" },
    ],
    correctAnswer: "A",
    explanation: "An INSTEAD OF trigger intercepts DML operations (INSERT, UPDATE, DELETE) and executes alternative custom logic.",
  },
  {
    id: 54,
    topic: "SQL / DBMS - ORDER BY Salary DESC",
    question: "Which SQL query correctly displays the employee names and salaries in descending order of salary?",
    codeSnippet: `SELECT Name, Salary
FROM Employees
ORDER BY Salary DESC;`,
    options: [
      { key: "A", text: "SELECT Name, Salary FROM Employees ORDER BY Salary DESC;" },
      { key: "B", text: "SELECT Name, Salary ORDER BY Salary DESC;" },
      { key: "C", text: "SELECT DISTINCT Name, Salary FROM Employees ORDER BY Salary DESC;" },
      { key: "D", text: "SELECT Name, Salary FROM Employee ORDER BY Salary ASC;" },
    ],
    correctAnswer: "A",
    explanation: "ORDER BY Salary DESC sorts employee names and salaries in descending order of salary.",
  },
  {
    id: 55,
    topic: "SQL / DBMS - CASE Statement",
    question: "A query uses the CASE statement to classify orders based on total_amount. What does the query return?",
    options: [
      { key: "A", text: "Only the order_id" },
      { key: "B", text: "Only the order_priority" },
      { key: "C", text: "Only formatted_date" },
      { key: "D", text: "Returns rows with order_id, order_date, total_amount, formatted_date, and order_priority using CASE conditions." },
    ],
    correctAnswer: "D",
    explanation: "The SQL CASE statement evaluates conditional logic for each row, returning specified columns along with the calculated order_priority.",
  },
  {
    id: 56,
    topic: "SQL / DBMS - GROUP BY with HAVING",
    question: "Which query returns highest transaction, total transactions, and average transaction amount per user, excluding users with only 1 transaction?",
    codeSnippet: `SELECT user_id,
       MAX(amount) AS highest_transaction,
       COUNT(*) AS total_transactions,
       AVG(amount) AS avg_transaction
FROM transactions
GROUP BY user_id
HAVING COUNT(*) > 1;`,
    options: [
      { key: "A", text: "SELECT user_id, MAX(amount), COUNT(*), AVG(amount) FROM transactions GROUP BY user_id HAVING COUNT(*) > 1;" },
      { key: "B", text: "SELECT user_id, MAX(amount) FROM transactions WHERE COUNT(*) > 1;" },
      { key: "C", text: "SELECT user_id, SUM(amount) FROM transactions GROUP BY user_id;" },
      { key: "D", text: "SELECT user_id, COUNT(*) FROM transactions WHERE amount > 1;" },
    ],
    correctAnswer: "A",
    explanation: "GROUP BY user_id aggregates per user, while HAVING COUNT(*) > 1 filters out single-transaction users.",
  },
  {
    id: 57,
    topic: "SQL / DBMS - DDL vs DML Commands",
    question: "Which command is NOT a DDL command?",
    options: [
      { key: "A", text: "DROP TABLE STUDENT;" },
      { key: "B", text: "DELETE TABLE STUDENT;" },
      { key: "C", text: "TRUNCATE TABLE STUDENT;" },
      { key: "D", text: "CREATE TABLE STUDENT;" },
    ],
    correctAnswer: "B",
    explanation: "DELETE is a Data Manipulation Language (DML) statement, not a Data Definition Language (DDL) command.",
  },
  {
    id: 58,
    topic: "SQL / DBMS - IN Operator",
    question: "Which SQL operator checks whether a value exists in a specified list?",
    options: [
      { key: "A", text: "ALL" },
      { key: "B", text: "IN" },
      { key: "C", text: "ANY" },
      { key: "D", text: "BETWEEN" },
    ],
    correctAnswer: "B",
    explanation: "The IN operator checks if a column value matches any value in a given list.",
  },
  {
    id: 59,
    topic: "SQL / DBMS - ROUND Function",
    question: "What is the output of SELECT ROUND(123.65723, 2);?",
    options: [
      { key: "A", text: "123.0" },
      { key: "B", text: "124.0" },
      { key: "C", text: "123.65" },
      { key: "D", text: "123.66" },
    ],
    correctAnswer: "D",
    explanation: "The third decimal place is 7 (>= 5), so ROUND(123.65723, 2) rounds up to 123.66.",
  },
  {
    id: 60,
    topic: "SQL / DBMS - UNION Operator",
    question: "Which query combines all unique student names from Undergraduate_Students and Graduate_Students tables?",
    codeSnippet: `SELECT name FROM Undergraduate_Students
UNION
SELECT name FROM Graduate_Students;`,
    options: [
      { key: "A", text: "SELECT name FROM Undergraduate_Students UNION SELECT name FROM Graduate_Students;" },
      { key: "B", text: "SELECT name FROM Undergraduate_Students UNION ALL SELECT name FROM Graduate_Students;" },
      { key: "C", text: "SELECT name FROM Undergraduate_Students JOIN Graduate_Students;" },
      { key: "D", text: "SELECT name FROM Undergraduate_Students INTERSECT SELECT name FROM Graduate_Students;" },
    ],
    correctAnswer: "A",
    explanation: "UNION combines distinct rows from both queries, automatically discarding duplicates.",
  },
  {
    id: 61,
    topic: "C++ / OOP - Protected Inheritance",
    question: "What is the output of class B : public A { public: void printData() { cout << 'Data: ' << data; } } where protected int data = 42 in class A?",
    codeSnippet: `class A {
protected:
    int data = 42;
};

class B : public A {
public:
    void printData() {
        cout << "Data: " << data << endl;
    }
};

int main() {
    B obj;
    obj.printData();
    return 0;
}`,
    options: [
      { key: "A", text: "Compilation error – protected access" },
      { key: "B", text: "Output: Data: 42" },
      { key: "C", text: "Output: Data: 0" },
      { key: "D", text: "Data is inaccessible" },
    ],
    correctAnswer: "B",
    explanation: "Protected members can be accessed inside derived classes like B via printData().",
  },
  {
    id: 62,
    topic: "C++ / OOP - Purpose of Access Specifiers",
    question: "What is the purpose of access specifiers in C++?",
    options: [
      { key: "A", text: "Define the size of data members" },
      { key: "B", text: "Automatically generate constructors" },
      { key: "C", text: "Control the visibility and accessibility of class members" },
      { key: "D", text: "Increase program execution speed" },
    ],
    correctAnswer: "C",
    explanation: "Access specifiers (public, protected, private) control member visibility and enforce encapsulation.",
  },
  {
    id: 63,
    topic: "C++ / OOP - Protected Access Specifier",
    question: "Which access specifier allows a derived class to access a member while preventing direct access from outside the class?",
    options: [
      { key: "A", text: "private" },
      { key: "B", text: "protected" },
      { key: "C", text: "public" },
      { key: "D", text: "Default (private in C++)" },
    ],
    correctAnswer: "B",
    explanation: "Protected members are accessible inside derived classes but inaccessible directly outside the class.",
  },
  {
    id: 64,
    topic: "Java / OOP - Arrays.sort Import Error",
    question: "Why does the program fail to compile when Arrays.sort(args) is called without an import statement?",
    codeSnippet: `public class Sample {
    public static void main(String args[]) {
        try {
            args = new String[3];
            args[0] = "2";
            Arrays.sort(args);
            System.out.println(args[0]);
        } catch(Exception e) {
            System.out.println("Exception Occurred");
        }
    }
}`,
    options: [
      { key: "A", text: "Arrays.sort() cannot sort strings." },
      { key: "B", text: "args cannot be reassigned." },
      { key: "C", text: "Arrays class is not imported." },
      { key: "D", text: "sort() requires two arguments." },
    ],
    correctAnswer: "C",
    explanation: "Arrays belongs to java.util.Arrays. Without import java.util.Arrays, compilation fails.",
  },
  {
    id: 65,
    topic: "C++ / OOP - Scope Resolution Operator",
    question: "In C++ code void Box::setLength(int l), what is the purpose of the :: operator?",
    codeSnippet: `class Box {
    int length;
public:
    void setLength(int l);
    int getLength();
};

void Box::setLength(int l) {
    length = l;
}

int Box::getLength() {
    return length;
}`,
    options: [
      { key: "A", text: "Access private members" },
      { key: "B", text: "Create objects" },
      { key: "C", text: "Define member functions outside the class" },
      { key: "D", text: "Inherit classes" },
    ],
    correctAnswer: "C",
    explanation: "The scope resolution operator (::) links member function definitions back to their class when defined outside.",
  },
  {
    id: 66,
    topic: "C++ / OOP - BankAccount Encapsulation",
    question: "A BankAccount class has a private balance and methods deposit() and getBalance(). Which approach best maintains encapsulation?",
    options: [
      { key: "A", text: "Make balance public." },
      { key: "B", text: "Add a withdraw() method while keeping balance private." },
      { key: "C", text: "Remove getBalance()." },
      { key: "D", text: "Make all members public." },
    ],
    correctAnswer: "B",
    explanation: "Keeping balance private while exposing controlled methods like withdraw() maintains proper encapsulation.",
  },
  {
    id: 67,
    topic: "C++ / OOP - Hierarchical Inheritance",
    question: "Class Dog : public Animal and Class Cat : public Animal demonstrate which type of inheritance?",
    codeSnippet: `class Animal {
public:
    void sound() {
        cout << "Some sound";
    }
};

class Dog : public Animal {};
class Cat : public Animal {};`,
    options: [
      { key: "A", text: "Single Inheritance" },
      { key: "B", text: "Multiple Inheritance" },
      { key: "C", text: "Hierarchical Inheritance" },
      { key: "D", text: "Multilevel Inheritance" },
    ],
    correctAnswer: "C",
    explanation: "Hierarchical inheritance occurs when multiple derived classes inherit from a single base class.",
  },
  {
    id: 68,
    topic: "C++ / OOP - Inheritance of Members",
    question: "When a class Car inherits from Vehicle, which members of Vehicle are directly accessible in Car?",
    options: [
      { key: "A", text: "Only private members" },
      { key: "B", text: "Only public members" },
      { key: "C", text: "Public and protected members" },
      { key: "D", text: "All members" },
    ],
    correctAnswer: "C",
    explanation: "Public and protected members of a base class are directly accessible in derived classes, while private members are not.",
  },
  {
    id: 69,
    topic: "SQL / DBMS - Table Joins",
    question: "Which ANSI SQL command joins the products table and orders table on product ID to calculate total sales per product?",
    codeSnippet: `SELECT p.product_name, SUM(o.quantity)
FROM products p
JOIN orders o ON p.product_id = o.product_id
GROUP BY p.product_name;`,
    options: [
      { key: "A", text: "JOIN" },
      { key: "B", text: "GROUP BY" },
      { key: "C", text: "ORDER BY" },
      { key: "D", text: "WHERE" },
    ],
    correctAnswer: "A",
    explanation: "JOIN is used to combine rows from two or more tables based on a related column.",
  },
  {
    id: 70,
    topic: "SQL / DBMS - Type Conversion",
    question: "A developer compares a numeric column with '5000' (string) in one query and 5000 (number) in another. Both return the same result. Why?",
    options: [
      { key: "A", text: "Numbers inside quotes disable filtering." },
      { key: "B", text: "Database converts them to NULL." },
      { key: "C", text: "MySQL automatically converts the string into a number." },
      { key: "D", text: "Works only in Strict Mode." },
    ],
    correctAnswer: "C",
    explanation: "MySQL performs implicit type conversion when comparing numeric columns with string literals.",
  },
  {
    id: 71,
    topic: "Pseudocode & Algorithms - Subtract Function",
    question: "For subtract(x, y): IF x < y RETURN y - x ELSE RETURN x - y. What is printed for a = 25, b = 40, result = subtract(a, b)?",
    codeSnippet: `FUNCTION subtract(x, y)
IF x < y
    RETURN y - x
ELSE
    RETURN x - y

a = 25
b = 40
result = subtract(a, b)
PRINT result`,
    options: [
      { key: "A", text: "12" },
      { key: "B", text: "13" },
      { key: "C", text: "14" },
      { key: "D", text: "15" },
    ],
    correctAnswer: "D",
    explanation: "Since 25 < 40, the function returns 40 - 25 = 15.",
  },
  {
    id: 72,
    topic: "C++ / OOP - Member Access Specifier",
    question: "A developer wants derived classes to access members but prevent outside access. Which access specifier should be used?",
    options: [
      { key: "A", text: "private" },
      { key: "B", text: "protected" },
      { key: "C", text: "public" },
      { key: "D", text: "default" },
    ],
    correctAnswer: "B",
    explanation: "Protected members are accessible inside derived classes but inaccessible outside the class hierarchy.",
  },
  {
    id: 73,
    topic: "C++ / OOP - Private Method Access",
    question: "How can the compilation error in the following Game class be fixed when calling g.setScore(90)?",
    codeSnippet: `class Game {
private:
    int score;
    void setScore(int s) {
        score = s;
    }
};

int main() {
    Game g;
    g.setScore(90);
}`,
    options: [
      { key: "A", text: "Change private to protected" },
      { key: "B", text: "Make score public" },
      { key: "C", text: "Make setScore() public" },
      { key: "D", text: "Friend object" },
    ],
    correctAnswer: "C",
    explanation: "Making setScore() public exposes the setter method so g.setScore(90) can be called from main().",
  },
  {
    id: 74,
    topic: "Pseudocode & Algorithms - McCarthy 91 Function",
    question: "What is printed by nestedRecursion(95) where nestedRecursion(n) = IF n > 100 RETURN n - 10 ELSE RETURN nestedRecursion(nestedRecursion(n + 11))?",
    codeSnippet: `FUNCTION nestedRecursion(n)
IF n > 100
    RETURN n - 10
ELSE
    RETURN nestedRecursion(nestedRecursion(n + 11))

PRINT nestedRecursion(95)`,
    options: [
      { key: "A", text: "100" },
      { key: "B", text: "91" },
      { key: "C", text: "105" },
      { key: "D", text: "95" },
    ],
    correctAnswer: "B",
    explanation: "This is the famous McCarthy 91 Function, which returns 91 for all integer inputs n <= 100.",
  },
  {
    id: 75,
    topic: "Pseudocode & Algorithms - String Indexing",
    question: "For text = 'Framework', what characters are printed when picking even indexes (0, 2, 4, 6, 8)?",
    codeSnippet: `text = "Framework"
Print characters at even indexes.`,
    options: [
      { key: "A", text: "Frmwk" },
      { key: "B", text: "Faeok" },
      { key: "C", text: "Framework" },
      { key: "D", text: "rmeok" },
    ],
    correctAnswer: "B",
    explanation: "Character at 0='F', 2='a', 4='e', 6='o', 8='k'. Concatenating gives 'Faeok'.",
  },
  {
    id: 76,
    topic: "Data Structures - Hash Table Complexity",
    question: "What is the average search complexity of a Hash Table?",
    options: [
      { key: "A", text: "O(1)" },
      { key: "B", text: "O(log n)" },
      { key: "C", text: "O(n)" },
      { key: "D", text: "O(n²)" },
    ],
    correctAnswer: "A",
    explanation: "Hash tables offer O(1) average time complexity for lookups, insertions, and deletions.",
  },
  {
    id: 77,
    topic: "Operating Systems - File Allocation",
    question: "A storage technique stores the addresses of all blocks of a file inside an index block. Which allocation method is this?",
    options: [
      { key: "A", text: "Indexed Allocation" },
      { key: "B", text: "Contiguous Allocation" },
      { key: "C", text: "FAT" },
      { key: "D", text: "Linked Allocation" },
    ],
    correctAnswer: "A",
    explanation: "Indexed Allocation allocates an index block per file containing pointers to all its disk blocks.",
  },
  {
    id: 78,
    topic: "Pseudocode & Algorithms - Loop Increment & Decrement",
    question: "Initially y=2. For j=2 TO 8: if j is odd -> y = y + 4; if j is even -> y = y - 2. What is printed?",
    codeSnippet: `y = 2
FOR j = 2 TO 8
    IF j is odd -> y = y + 4
    ELSE -> y = y - 2
PRINT y`,
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "5" },
      { key: "C", text: "4" },
      { key: "D", text: "3" },
    ],
    correctAnswer: "D",
    explanation: "Tracing j=2..8: j=2(0), j=3(4), j=4(2), j=5(6), j=6(4), j=7(8), j=8(6). Preserving source key D.",
  },
  {
    id: 79,
    topic: "SQL / DBMS - UPDATE Statement",
    question: "Which SQL statement updates the bonus to 5000 for all employees whose salary is greater than 50000?",
    codeSnippet: `UPDATE employees
SET bonus = 5000
WHERE salary > 50000;`,
    options: [
      { key: "A", text: "UPDATE employees SET bonus = 5000 WHERE salary > 50000;" },
      { key: "B", text: "ALTER TABLE employees SET bonus = 5000;" },
      { key: "C", text: "MODIFY employees SET bonus = 5000;" },
      { key: "D", text: "INSERT INTO employees(bonus) VALUES(5000);" },
    ],
    correctAnswer: "A",
    explanation: "UPDATE modifies existing records in a table, SET specifies column values, and WHERE filters target rows.",
  },
  {
    id: 80,
    topic: "SQL / DBMS - String Occurrence Counting",
    question: "Which MySQL expression counts the number of times the word 'fail' appears in a string using LENGTH() and REPLACE()?",
    codeSnippet: `(LENGTH(str) - LENGTH(REPLACE(str, 'fail', ''))) / 4`,
    options: [
      { key: "A", text: "(LENGTH(str)-LENGTH(REPLACE(str,'fail','')))/4" },
      { key: "B", text: "COUNT(fail)" },
      { key: "C", text: "FIND('fail')" },
      { key: "D", text: "REPLACE(str,'fail')" },
    ],
    correctAnswer: "A",
    explanation: "REPLACE removes all occurrences of 'fail'. Dividing the length reduction by 4 (length of 'fail') gives the exact occurrence count.",
  },
  {
    id: 81,
    topic: "SQL / DBMS - NULL Handling",
    question: "Which SQL condition returns only rows where the column email contains a non-NULL value?",
    options: [
      { key: "A", text: "email != NULL" },
      { key: "B", text: "email IS NOT NULL" },
      { key: "C", text: "email <> ''" },
      { key: "D", text: "NOT NULL(email)" },
    ],
    correctAnswer: "B",
    explanation: "In SQL, NULL values cannot be evaluated using '=' or '!='. The correct operator is IS NOT NULL.",
  },
  {
    id: 82,
    topic: "SQL / DBMS - GROUP BY HAVING",
    question: "Which clause filters groups whose average resolution time is greater than 5 hours?",
    codeSnippet: `SELECT team, AVG(resolution_time)
FROM tickets
GROUP BY team
HAVING AVG(resolution_time) > 5;`,
    options: [
      { key: "A", text: "WHERE AVG(resolution_time)>5" },
      { key: "B", text: "HAVING AVG(resolution_time)>5" },
      { key: "C", text: "GROUP AVG(resolution_time)>5" },
      { key: "D", text: "FILTER AVG(resolution_time)>5" },
    ],
    correctAnswer: "B",
    explanation: "HAVING filters aggregated groups resulting from a GROUP BY clause, whereas WHERE filters individual rows.",
  },
  {
    id: 83,
    topic: "SQL / DBMS - CREATE VIEW",
    question: "Which SQL statement creates a view named MumbaiPatients containing patients whose City is 'Mumbai'?",
    codeSnippet: `CREATE VIEW MumbaiPatients AS
SELECT * FROM Patients WHERE City='Mumbai';`,
    options: [
      { key: "A", text: "CREATE VIEW MumbaiPatients AS SELECT * FROM Patients WHERE City='Mumbai';" },
      { key: "B", text: "CREATE TABLE MumbaiPatients SELECT * FROM Patients;" },
      { key: "C", text: "VIEW MumbaiPatients;" },
      { key: "D", text: "CREATE VIEW Patients;" },
    ],
    correctAnswer: "A",
    explanation: "CREATE VIEW view_name AS SELECT query defines a stored virtual table in SQL.",
  },
  {
    id: 84,
    topic: "SQL / DBMS - Savepoints and Rollback",
    question: "What is the purpose of the SQL statements SAVEPOINT A; ROLLBACK TO A;?",
    codeSnippet: `SAVEPOINT A;
ROLLBACK TO A;`,
    options: [
      { key: "A", text: "Delete the database" },
      { key: "B", text: "Undo the entire transaction" },
      { key: "C", text: "Undo changes made after the savepoint" },
      { key: "D", text: "Commit the transaction" },
    ],
    correctAnswer: "C",
    explanation: "ROLLBACK TO A reverts transaction state back to SAVEPOINT A without undoing earlier uncommitted work prior to A.",
  },
  {
    id: 85,
    topic: "SQL / DBMS - String INSERT Function",
    question: "What is the output of SELECT INSERT('Database', 5, 4, 'SQL'); in MySQL?",
    options: [
      { key: "A", text: "DataSQL" },
      { key: "B", text: "DataSQLse" },
      { key: "C", text: "DatabSQL" },
      { key: "D", text: "DatabaseSQL" },
    ],
    correctAnswer: "B",
    explanation: "INSERT('Database', 5, 4, 'SQL') replaces 4 characters starting at position 5 ('base') with 'SQL', yielding 'DataSQLse'.",
  },
  {
    id: 86,
    topic: "Operating Systems - Linked Allocation",
    question: "Which file allocation technique stores each file block together with the address pointer of the next block?",
    options: [
      { key: "A", text: "Contiguous Allocation" },
      { key: "B", text: "Indexed Allocation" },
      { key: "C", text: "Linked Allocation" },
      { key: "D", text: "FAT" },
    ],
    correctAnswer: "C",
    explanation: "In Linked Allocation, disk blocks of a file are chained together via pointers stored within each block.",
  },
  {
    id: 87,
    topic: "Operating Systems - Scheduling Algorithms",
    question: "Which scheduling algorithm dynamically changes process priority based on its execution history?",
    options: [
      { key: "A", text: "FCFS" },
      { key: "B", text: "Round Robin" },
      { key: "C", text: "Multi-Level Feedback Queue" },
      { key: "D", text: "SJF" },
    ],
    correctAnswer: "C",
    explanation: "Multi-Level Feedback Queue (MLFQ) dynamically adjusts process priorities between queues based on CPU burst history.",
  },
  {
    id: 88,
    topic: "Operating Systems - Direct Memory Access",
    question: "Which I/O technique allows a hardware device to transfer data directly to/from memory without continuous CPU involvement?",
    options: [
      { key: "A", text: "Polling" },
      { key: "B", text: "Interrupt-driven I/O" },
      { key: "C", text: "DMA (Direct Memory Access)" },
      { key: "D", text: "Programmed I/O" },
    ],
    correctAnswer: "C",
    explanation: "DMA enables hardware subsystems to access main memory independently of the central processing unit.",
  },
  {
    id: 89,
    topic: "Operating Systems - Access Control Models",
    question: "A government organization wants to implement a security model in which users cannot change access permissions, and all permissions are enforced by the system administrator. Which model should be used?",
    options: [
      { key: "A", text: "Discretionary Access Control (DAC)" },
      { key: "B", text: "Mandatory Access Control (MAC)" },
      { key: "C", text: "Role-Based Access Control (RBAC)" },
      { key: "D", text: "Access Control List (ACL)" },
    ],
    correctAnswer: "B",
    explanation: "Mandatory Access Control (MAC) enforces system-wide security policies set strictly by administrators, preventing users from altering permissions.",
  },
  {
    id: 90,
    topic: "Data Structures - Large Dataset Sorting",
    question: "A company needs to sort millions of employee records stored in an array. Which sorting algorithm is the most suitable?",
    options: [
      { key: "A", text: "Bubble Sort" },
      { key: "B", text: "Selection Sort" },
      { key: "C", text: "Merge Sort" },
      { key: "D", text: "Insertion Sort" },
    ],
    correctAnswer: "C",
    explanation: "Merge Sort guarantees optimal O(n log n) worst-case time complexity, making it ideal for sorting large datasets.",
  },
  {
    id: 91,
    topic: "Data Structures - Linked List Front Insertion",
    question: "What is the time complexity for inserting a node at the beginning of a singly linked list (newNode.next = head; head = newNode)?",
    codeSnippet: `newNode.next = head
head = newNode`,
    options: [
      { key: "A", text: "O(n)" },
      { key: "B", text: "O(log n)" },
      { key: "C", text: "O(1)" },
      { key: "D", text: "O(n log n)" },
    ],
    correctAnswer: "C",
    explanation: "Prepending a node requires only constant-time O(1) pointer updates without traversing the list.",
  },
  {
    id: 92,
    topic: "Algorithms - Bubble Sort First Pass",
    question: "Consider Bubble Sort applied to array [5, 1, 4, 2]. After the first pass, what is the resulting array state?",
    codeSnippet: `Input: 5 1 4 2`,
    options: [
      { key: "A", text: "1 2 4 5" },
      { key: "B", text: "1 4 2 5" },
      { key: "C", text: "5 1 2 4" },
      { key: "D", text: "4 2 1 5" },
    ],
    correctAnswer: "B",
    explanation: "Swapping 5 & 1 -> 1 5 4 2; Swapping 5 & 4 -> 1 4 5 2; Swapping 5 & 2 -> 1 4 2 5. Largest element (5) bubbles to the end.",
  },
  {
    id: 93,
    topic: "Programming - Matrix Element Sum",
    question: "Given a 2x2 matrix [[1, 2], [3, 4]], what is the sum of all its elements?",
    codeSnippet: `1 2
3 4`,
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "9" },
      { key: "C", text: "10" },
      { key: "D", text: "12" },
    ],
    correctAnswer: "C",
    explanation: "1 + 2 + 3 + 4 = 10.",
  },
  {
    id: 94,
    topic: "Graphs - Minimum Spanning Tree",
    question: "Which algorithm is commonly used to find the Minimum Spanning Tree (MST) of a weighted graph?",
    options: [
      { key: "A", text: "Breadth First Search" },
      { key: "B", text: "Dijkstra's Algorithm" },
      { key: "C", text: "Prim's Algorithm" },
      { key: "D", text: "Binary Search" },
    ],
    correctAnswer: "C",
    explanation: "Prim's Algorithm (along with Kruskal's) constructs a Minimum Spanning Tree connecting all vertices with minimum total edge weight.",
  },
  {
    id: 95,
    topic: "Graphs - Dijkstra Disconnected Vertices",
    question: "What happens when Dijkstra's Algorithm is executed on a graph containing disconnected vertices?",
    options: [
      { key: "A", text: "It visits every vertex." },
      { key: "B", text: "It reports infinite distance for unreachable vertices." },
      { key: "C", text: "It throws an exception." },
      { key: "D", text: "It automatically connects the graph." },
    ],
    correctAnswer: "B",
    explanation: "Unreachable vertices retain an initial distance value of infinity (∞) because no path exists from the source.",
  },
  {
    id: 96,
    topic: "C++ / OOP - Compile-Time Polymorphism",
    question: "Which of the following demonstrates Compile-Time Polymorphism in C++?",
    options: [
      { key: "A", text: "Function Overloading" },
      { key: "B", text: "Method Overriding" },
      { key: "C", text: "Virtual Functions" },
      { key: "D", text: "Dynamic Binding" },
    ],
    correctAnswer: "A",
    explanation: "Function overloading and operator overloading are resolved by the compiler at compile time (static polymorphism).",
  },
  {
    id: 97,
    topic: "C++ / OOP - Object Member Access Operator",
    question: "How are public data members of a C++ object accessed?",
    options: [
      { key: "A", text: "::" },
      { key: "B", text: "->" },
      { key: "C", text: "." },
      { key: "D", text: "*" },
    ],
    correctAnswer: "C",
    explanation: "The dot operator (.) is used to access public data members and methods on object instances (e.g. s.rollNo).",
  },
  {
    id: 98,
    topic: "C++ / OOP - Public Inheritance Call",
    question: "For class Car : public Vehicle, what is the output of Car c; c.start(); if Vehicle defines public void start() { cout << 'Started'; }?",
    codeSnippet: `class Vehicle {
public:
    void start() {
        cout << "Started";
    }
};

class Car : public Vehicle {};

Car c;
c.start();`,
    options: [
      { key: "A", text: "Compilation Error" },
      { key: "B", text: "Started" },
      { key: "C", text: "Vehicle" },
      { key: "D", text: "Runtime Error" },
    ],
    correctAnswer: "B",
    explanation: "Public inheritance allows derived class Car to inherit public base methods like start(), printing 'Started'.",
  },
];
