#General Purpose Language
#Interpreted
# Object-Oriented
# High-level

print ('Hi Python')  
# python .\Understand.py

complex_number = 4+5j
print(complex_number, type(complex_number))
list = ["apple", 1,"Mango",True]
print(list, type(list)) # list => non-homogeneous mutable created using the list() ordered

mytuple = ("apple",1, "banana", "cherry") # immutable non-homogeneous because the elements are stored in the order they are inserted (ordered), print(my_tuple[0])  
x = range(10) #range

x = {"geeks", "for", "geeks"} #set non-homogeneous mutable unordered

x = {"name": "Suraj", "age": 24} #dictionary non-homogeneous mutable ordered its Keys are not duplicated.

x = None # none

a=10 
b=3
print(a/b) #3.3333333333333335
print(a//b) #3
print(a**b) #10^3

          #input
# name = input()
# print(name)
# a = int(input('Enter a ')) #Takes input alwasys in string
# b = int(input())
# print( type(a))
# print (a+b)

if 5 > 9:
 print("Five is greater than two!") 
print ('Hi Python')  


a = range(10)
print (a) #doesn't store number in memory, Just remember the start and end and steps 
#range(0,10)

# a = list(range(10))   range(5,11,2) [5, 7, 9]
# print (a) # [0,1,2,3,4,5,6,7,8,9]


# for x in range(2,10,2):
#     print(x, end= ", ")

# a = [ 4, 'Rohit', 'Shivaml']
# for name in a:
#  print( name*4) 
#  16
# RohitRohitRohitRohit
# ShivamlShivamlShivamlShivaml
# n= 6
# while n>="0":
#  print(n)
#  n-=1

#  x = ord("h")

n = "e"  # Initialize with a string
while n >= "a":  # Stop when you reach 'a' 
    if n<"b":
       break
    print(n,end= " ")
    n = chr(ord(n) - 1)  # Convert to ASCII, decrement, and back to character


# for i in range(10):
#  if i ==8 :
#   continue
#  print (i)

fruit ="bcdef"
print("\n" + fruit[-3]) #[-5, -4,-3,-2,-1]

#slice
print(fruit[1:4]) #cde [4:], [:3]
print(fruit[0:5:2]) #b d f
print(fruit[::-2]) #f  d b
print(fruit[-1:0:-1]) #f  e d c

# isupper( ) islower ( ) lower( )  upper( ) 

# isalpha()
# isdigit()
# s = "   Bcfbhh    "
# # s.lstrip() 
# s.rstrip()


#list

#Negative list is also  supported in List

list = ["apple", 1,"Mango",True, 3]
print(list[1:5:2]) #[1, True]
print(list[-1:0:-1]) #[3, True, 'Mango', 1]   print(my_list[::-1])  # Slicing to reverse the list
del list[0] #delete
print(list[0]) # 1

  #Lists comprehension
#new_list = [ expression   for item in list    if conditlon  ] 
com_list = [2**x for x in range (20) if x%4==0]  # [1, 16, 256, ....] 
print(com_list)

# append  always ordered , a.append(4)

# insert a.insert(2,700)

# sort a.sort()

# pop a.pop(2) or by default last elem

# clear a.clear => a[]

# reverse a.reverse()

# index a.index("apple") => 3

# count a.count(3) => 5  count of 3 is 5

# len(list)
# max (list) 
# min (list)
# list (seq)   s="Shubhradeep" print(list(s))   ['S', 'h', 'u', 'b', 'h', 'r', 'a', 'd', 'e', 'e', 'p']

# sum (list) 


               #Tuples same as list but immutrable
t=()
            #Set
#random ordere 
#indexing not support
a={}

#Dictionary

my_dict = { "aman" : 48, "bulla" : 42 , 23: 'Python' }
print(my_dict[23])
print(my_dict["aman"])

my_dict={ 's': [1,2,3,4,5],
           'l': [50,40,30,20,10]}
print(my_dict["l"][3])  #20    
#update  my_dict["l"][0] = 200
# for i in my_dict:
#    print(i, my_dict[i])  i ==key


#Functions

#module  is a file containing functions and variables defined in separate files
import math as m
from math import cos as c
from math import cos, sin 

def func(name = "Shubhradeep"):
   print("I am a Funx " +" Hi "+name)
func()

# def hello(list):
#    for name in list:
#       print("Hi " + name,end=", ")
# names =['Anuj', 'Shivam', 'Rohits']
# hello(names)


                 #File Handeling

f= open('../cmd.py','r') 
content = f.readline()  # Read the content of the file
print(content)

with open('../Tc.py', 'r') as file:
    content = file.read()  # file.read(19)
    print(content)
# Ensures files are closed properly.
# Makes your code more readable and maintainable.
# Helps prevent resource leaks and errors related to file handling.

# When you use the with statement (also known as a context manager), it automatically handles the opening and closing of the file for you. This ensures that the file is properly closed after its suite finishes, even if an exception is raised within the block.


            #  OR
#not Recomented
# f= open('../Tc.py','r') 
# for line in f:
#    print(line)
#f.close()  Don't forget to close the file!


f.seek(10) #move courser upto 10 character then read will start

#Write

# with open('example.txt', 'w') as file:
#     file.write('Hello, World!')  # Write a single string

# with open('example.txt', 'w') as file:
#     lines = ['Line 1\n', 'Line 2\n', 'Line 3\n']
#     file.writelines(lines)  # Write multiple lines

# Appending to a File
# To add content to the end of a file without overwriting, use the append mode ('a'):

# with open('example.txt', 'a') as file:
#     file.write('Appending this line.\n')  # Add a line to the end

   #pip
#pip install package_name ommand is used to install Python packages from the Python Package Index (PyPI) 

#import


# math_utils.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b



# main.py

# Importing the add function from the math_utils module
from math_utils import add

# Using the imported function
result = add(5, 3)
print(f"The result of adding is: {result}")



# my_module.py

class MyClass:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, {self.name}!"

# A dictionary
my_dict = {
    "apple": 1,
    "banana": 2,
    "cherry": 3
}

# A variable
my_variable = "This is a variable."



# main.py

# Importing the class, dictionary, and variable from my_module
from my_module import MyClass, my_dict, my_variable

# Using the imported class
obj = MyClass("Alice")
print(obj.greet())  # Output: Hello, Alice!

# Using the imported dictionary
print(my_dict)  # Output: {'apple': 1, 'banana': 2, 'cherry': 3}
print(my_dict["banana"])  # Output: 2

# Using the imported variable
print(my_variable)  # Output: This is a variable.



       #OOP


class Employee:
    pass

obj = Employee()
print(obj)

#The __init__ method is similar to constructors in C++ and Java. It is run as soon as an object of a class is instantiated.
class Employee:
    def __init__(self):
        print(self)

#self is a reference to the current instance of the class

obj = Employee()
print(obj)

#default constractor
class Employee:
    def __init__(self):
        pass

#self === obj both tag the same adrdess

class Employee:
    def __init__(self, name):
        self.name = name

obj = Employee("Shubhradeep")
print(obj.name)

# public Employee(String name) {
#         this.name = name;
#     }

class Employee:
    company_name ="Google"
    def __init__(self, name,id):
        self.name = name
        self.id=id

obj = Employee("Shubhradeep",1100)
print(obj.name,obj.id)
print(Employee.company_name)



class Employee:
    company_name ="Google"
    name="name"
    def __init__(self, name,id):
        self.name = name
        self.id=id

obj = Employee("Shubhradeep",1100)
print(obj.name,obj.id) #Output shubhradeep, Obj attribute have higher priority than class attribute
print(Employee.name) #name

class Employee:
    #constractor
    def __init__(self, name,id):
        self.name = name
        self.id=id
        #Method
    def welcome(self):
        return self.name + ' Hii'
        
obj = Employee("Shubhradeep",1100)
print(obj.welcome()) #Shubhradeep Hii


#Practice
class Employee:
    #constractor
    def __init__(self, name,math,phy,his):
        self.name = name
        self.math=math
        self.phy=phy
        self.his=his
        #Method
    def welcome(self):
        avg = (self.math + self.phy + self.his) / 3  # Calculate average
        return f"{self.name}, Hi! Your Average is: {avg}" 
        
obj = Employee("Shubhradeep",100,100,80)
print(obj.welcome())


#static Method  => Methods that don't use the self parameter (work at class level)

class Student:
    @staticmethod #decorator => change the behavior 
    def college( ):
        print( "ABC College" )


# Abstraction ->  Hiding the implementation details of a class and only showing the essential features to the user.
class Car: 
 def  __init__ (self) :
    self.acc = False
    self.brk = False
    self.clutch = False
 def start(self):
    self. clutch = True
    self.acc = True
    print("car started..")

car1=Car()
car1.start()

# Encapsulation   Wrapping data and functions into a single unit (object).

#practice

class Account: 
 def  __init__ (self,acc,bal) :
    self.acc = acc
    self.bal = bal
    
 def credit(self,ammount):
    self.bal +=ammount
    print(f"Credited....{self.balance()}")
    
 def debit(self,ammount):
    self.bal -=ammount
    print(f"Debited....{self.balance()}")
    
 def balance(self):
    return self.bal
    
obj=Account(100,50)
obj.credit(20)
obj.debit(10)


 # Public - Private

class Account: 
 def  __init__ (self,acc,bal,acc_pass) :
    self.acc = acc
    self.bal = bal
    self.__acc_pas=acc_pass

    # Purpose: To control direct access to the internal state of an object and to enforce encapsulation, i.e., the principle of hiding data within the class.
    
 def detail(self):
    
    print(f"{self.acc}....{self.bal}..{self.__acc_pas}")
    
obj=Account(100,50,"XYX")
obj.acc #100
obj.__acc_pas #Error
obj.detail()

# private works bit diffrent in python, if any service is declear with private(__attribute) then that service can be only used by internal of class , Can't acess outside of class with help obj directly

# Inheritance
# When one class(child/derived) derives the properties & methods of another class(parentlbase).


class Car:
    @staticmethod
    def start():
        print("car started")
    @staticmethod
    def stop():
        print("car stopped." )

class ToyotaCar(Car) :
    def __init__ (self, name):
        self. name = name
        print( f"{self. name }")
    

car1= ToyotaCar("fortuner")
car2= ToyotaCar ("prius")
print(car1.start())


# Inheritance
# Types
# • Single Inheritance
# • Mufti-level Inheritance
# • Multiple Inheritance

class Parent1:
    varp=8
class Parent2:
    varp=90
class Child(Parent1, Parent2):  # Inheriting from both Parent1 and Parent2
    var=77


# Creating an object of the Child class
obj = Child()
print(obj.varp) #8  In your code, the output is 8 instead of 90 because of Python's Method Resolution Order (MRO). When a class inherits from multiple parent classes, Python determines the order in which it looks for attributes or methods based on the MRO.  =>   Python checks the first parent class in the inheritance list (Parent1), and finds varp = 8. It stops searching at this point, so the value from Parent1 is used.





class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")


class Bird:
    def __init__(self, can_fly):
        self.can_fly = can_fly

    def fly(self):
        if self.can_fly:
            print(f"{self.name} can fly")
        else:
            print(f"{self.name} cannot fly")


class Parrot(Animal, Bird):
    def __init__(self, name, can_fly):
        Animal.__init__(self, name)  # Call Animal constructor
        Bird.__init__(self, can_fly)  # Call Bird constructor


parrot = Parrot("Polly", True)
parrot.speak()  # Output: Polly makes a sound
parrot.fly()    # Output: Polly can fly



#Super super( ) method is used to access methods of the parent class.

class Parent:
    def __init__(self, name):
        self.name = name

    def display(self):
        print(f"Parent Name: {self.name}")

class Child(Parent):
    def __init__(self, name, age):
        # Call Parent's constructor using super()
        super().__init__(name)
        self.age = age

    def display(self):
        # Call the display method of Parent using super()
        super().display()
        print(f"Child Age: {self.age}")

# Create an object of the Child class
child_obj = Child("John", 20)

# Call the display method
child_obj.display()


#if any method doesn't use class or object attribute make it static


 # Acessing Class attributes inside class => __class__   @classmethod
class Employee:
    name="name"
    def change(self, name):
        self.__class__.name=name
         #OR
        Employee.name = name
        #OR
    @classmethod
    def change(cls, name):
        cls.name=name


obj = Employee()
print(obj.change("Shubhradeep")) 
print(obj.name)
print(Employee.name) # Shubhradeep



#Problem
class Student:
    def __init__ (self, phy, chem,math):

        self. phy = phy
        self. chem = chem
        self.math = math

        self. percentage= str((self.phy + self. chem + self.math) / 3) 

stul = Student(98, 97, 99)
print (stul. percentage)
stul.phy = 86
print(stul.phy) #86 number change
print (stul. percentage) #percentage remains same even if the number change

# Property
# We use @property decorator on any method in the class to use the method as a property.

#when a property depends on a funx

class Student:
    def __init__ (self, phy, chem,math):

        self. phy = phy
        self. chem = chem
        self.math = math
    @property
    def percentage(self):
        # Calculate average and store it in an instance variable
        return str((self.math + self.phy + self.chem) / 3) # Return the calculated percentage
    
    # Make an attribute read-only or read/write.  control how attributes are  modified

stul = Student(98, 97, 99)
print (stul. percentage)
stul.phy = 86
print(stul.phy) #86 number change
print (stul. percentage) #change of percentage


# Polymorphism : Operator Overloading
# When the same operator is allowed to have different meaning according to the context.


#Operators & Dunder functions => Write logic for operation
class Complex:
    def __init__ (self, real,img) :
        self. real= real
        self. img = img

    def shownumber(self):
        print(self.real,"i +", self.img,"j")

#Dunder functions
    def __add__ (self, num2):
        newReal = self. real + num2. real
        newImg= self. img + num2.img
        return Complex(newReal, newImg)
    
    def __sub__ (self, num2):
        newReal = self. real - num2. real
        newImg= self. img - num2.img
        return Complex(newReal, newImg)
    


num1= Complex(1, 3)
num1. shownumber( )
num2= Complex(4, 6)
num2. shoAumber( )
num3= num1 + num2
num3. shownumber()
num3= num1 - num2
num3. shownumber()

                # Recursion
def show(n):
    if (n ==0):
        return
    print(n)
    show(n-1)
show(5)

#practice
def print_list (list, idx=0):
    if (idx ==len(list)):
        return
    print (list [idx] )
    print_list(list, idx+1)

print_list(fruit)



                                        #decorator 

def debug(func):
    def wrapper(*args, **kwargs):
        args_value = ', '.join(str(arg) for arg in args)
        kwargs_value = ', '.join(f"{k}={v}" for k, v in kwargs.
        items())
        print(f"calling: {func.__name__} with args {args_value} and kwargs {kwargs_value}")
        return func(*args, **kwargs)
    
    return wrapper

@debug
def hello():
    print("hello")

@debug
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}")

hello()
greet("chai", greeting="hanji ")







# Python program to split a string and 
# join it using different delimiter

def split_string(string):

	# Split the string based on space delimiter
	list_string = string.split(' ')
	
	return list_string

def join_string(list_string):

	# Join the string based on '-' delimiter
	string = '-'.join(list_string)
	
	return string

# Driver Function
if __name__ == '__main__':
	string = 'Geeks for Geeks'
	
	# Splitting a string
	list_string = split_string(string)
	print(list_string)  #['Geeks', 'for', 'Geeks']

	# Join list of strings into one
	new_string = join_string(list_string)
	print(new_string)  #Geeks-for-Geeks
