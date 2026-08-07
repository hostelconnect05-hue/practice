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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
    topic: "Java Exception Handling - File Reading",
    question: "Which snippet correctly implements error handling using try-catch for a missing file with Scanner?",
    codeSnippet: `File inputFile = new File("data.txt");
try {
 Scanner scanner = new Scanner(inputFile);
 while (scanner.hasNextLine()) { ... }
 scanner.close();
} catch (FileNotFoundException e) {
 System.out.println("file not found: " + e.getMessage());
}`,
    options: [
      { key: "A", text: "No error handling -> crashes if file missing" },
      { key: "B", text: "Uses try-catch with FileNotFoundException" },
      { key: "C", text: "Checks file.exists() — valid, but does not use try-catch" },
      { key: "D", text: "Catches NullPointerException" },
    ],
    correctAnswer: "B",
    explanation: "Instantiating Scanner with a File object requires handling FileNotFoundException via try-catch.",
  },
  {
    id: 26,
    topic: "Java Exception Handling - NumberFormatException",
    question: "What exception is thrown by Integer.parseInt(\"java\")?",
    options: [
      { key: "A", text: "ArithmeticException" },
      { key: "B", text: "NumberFormatException" },
      { key: "C", text: "NullPointerException" },
      { key: "D", text: "ArrayIndexOutOfBoundsException" },
    ],
    correctAnswer: "B",
    explanation: "Integer.parseInt(\"java\") throws NumberFormatException because 'java' is not a valid numeric string.",
  },
  {
    id: 27,
    topic: "Java Exception Handling - RuntimeException Interface",
    question: "What is the result of calling obj.eval(0) where eval throws new RuntimeException() without a throws declaration?",
    codeSnippet: `interface A { void eval(int x); }
class B implements A {
 public void eval(int x) {
  if (x == 0) throw new RuntimeException();
 }
}`,
    options: [
      { key: "A", text: "A RuntimeException will be thrown at runtime." },
      { key: "B", text: "Compilation error — overridden method cannot throw." },
      { key: "C", text: "Compilation error — no throws declaration." },
      { key: "D", text: "Compilation error — abstract method doesn't declare exception." },
    ],
    correctAnswer: "A",
    explanation: "RuntimeException is an unchecked exception in Java, so no 'throws' clause is required. It compiles cleanly and throws at runtime when x == 0.",
  },
  {
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
    topic: "Pseudocode & Algorithms - Function Purpose",
    question: "Why do programmers use modular functions in software design?",
    options: [
      { key: "A", text: "Represent program as a whole" },
      { key: "B", text: "Avoid code reuse" },
      { key: "C", text: "Make namespace unclean" },
      { key: "D", text: "Test smaller portions of code by isolating them" },
    ],
    correctAnswer: "D",
    explanation: "Functions support modularity, code reuse, and allow testing/debugging smaller isolated code blocks independently.",
  },
  {
    id: 43,
    topic: "SQL / DBMS - Number Base Conversion",
    question: "Which MySQL function converts numbers between different number bases (e.g. hex to decimal)?",
    options: [
      { key: "A", text: "con()" },
      { key: "B", text: "convbase()" },
      { key: "C", text: "conv()" },
      { key: "D", text: "base_convert()" },
    ],
    correctAnswer: "C",
    explanation: "MySQL's CONV(N, from_base, to_base) function converts numbers between arbitrary bases (e.g. CONV('a', 16, 10) returns 10).",
  },
  {
    id: 44,
    topic: "SQL / DBMS - String Trimming",
    question: "Which MySQL function removes trailing whitespace from a string?",
    options: [
      { key: "A", text: "TRIM() — removes both leading and trailing" },
      { key: "B", text: "LTRIM() — removes leading only" },
      { key: "C", text: "RTRIM() — removes trailing only" },
      { key: "D", text: "STRIP() — not a valid MySQL function" },
    ],
    correctAnswer: "C",
    explanation: "RTRIM() specifically strips trailing spaces from the right side of a string.",
  },
  {
    id: 45,
    topic: "SQL / DBMS - Triggers",
    question: "Which type of trigger intercepts a DML operation (INSERT, UPDATE, DELETE) and executes alternative logic instead?",
    options: [
      { key: "A", text: "Instead of Trigger" },
      { key: "B", text: "DDL Trigger" },
      { key: "C", text: "Disable Trigger" },
      { key: "D", text: "After Trigger" },
    ],
    correctAnswer: "A",
    explanation: "An INSTEAD OF trigger overrides standard DML statement execution, running custom trigger logic in place of the DML command.",
  },
];
