print('Shubhradeep\'s laptop')
#address 
num=10
a=num # # Assigns the value of num (which is 10) to the variable a
print(id(num)) #id(a) is same, Because Both num and a
print(id(a))
k=10 # Tagging the k with same address
num=9 #ofcourse the adress of num will change but id(a) witll remain same
print(a) # 10 still...
print(id(a))  # same adress as previous



d = { 'navin' : ' samsung' , 'rahul ' : ' I phone' ,  ' kiran' : 'Oneplus'}
d. keys ( )
d. values ( ) # dict.values( [ samsung' , 'Iphone' ])

d. get ('kiran')  #Oneplus

# a,c=5,6   a=5, c=6
print(-k) #-9  k=-k   k=-9

#binary - desimal
print(bin(7))
print(0b111) 

print(~7) #Complimdents of 7 is -8
#floor, ceil, pow,

#arguement Value
# import sys
# x=int(sys.agrv[1])

for i in range(1,10):
    if i%3==0 :
        pass
    else:
        print(i)

#user input array
# from array import *
# arr= array('i',[])
# n=int(input("Enter the length"))
# for i in range(n):
#     x=int(input("Enter the value"))
#     arr.append(x)
# print(arr)

#NumPy (Numerical Python) is a powerful library in Python used for scientific computin

import numpy as np

arr=np.array([1,2,3,4,5],int)
print(type(arr))


