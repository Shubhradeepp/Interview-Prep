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