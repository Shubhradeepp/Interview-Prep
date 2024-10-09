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
print(type(arr))  #(class •numpy. ndarray'>


# Why is NumPy Faster Than Lists?
# NumPy arrays are stored at one continuous place in memory unlike lists, so processes can access and manipulate them very efficiently.

arr = np.array([[1, 2, 3], [4, 5, 6]])
print('2nd element on 1st row: ', arr[0, 1])
print('Last element from 2nd dim: ', arr[1, -1]) #6

arr = np.array([[[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]])
print(arr)
print(arr.ndim) #Check Number of Dimensions?

arr = np.array([1, 2, 3, 4], ndmin=5)

print('number of dimensions :', arr.ndim)


index = np.where(arr == 3)[0][0]  # [0][0] gets the first occurrence

#slice => same as list

print(arr[1:5])

arr = np.array([1, 2, 3, 4, 5, 6, 7])

print(arr[-3:-1]) # [5 6]
print(arr[-3:1:-1])  # [5 4 3]

#Data Type

print(arr.dtype)  #int64

#Creating Arrays With a Defined Data Type
arr = np.array(['apple', 'banana', 'cherry'],dtype='S')
print(arr.dtype) 

#For i, u, f, S and U we can define size as well.
arr = np.array([1, 2, 3, 4], dtype='i4')
#Create an array with data type 4 bytes integer +=> 4* 8(bit) =32
print(arr.dtype) #int32

#Converting Data Type on Existing Arrays
arr = np.array([1.1, 2.1, 3.1])

newarr = arr.astype('i') # int32
 # OR
newarr = arr.astype(int) #int64

print(newarr) #[1 2 3]

print(newarr.dtype) # int32

   
   
                  #view - copy


#Every NumPy array has the attribute base that returns None if the array owns the data.


import numpy as np

arr = np.array([1, 2, 3, 4, 5])
x = arr.view()
x[0]=99

print(arr.base)  # None (original array, not a view of another array)
print(arr)       # [99  2  3  4  5] (since x is a view, modifying x also changes arr)
print(x)         # [99  2  3  4  5] (x is a view, so it shows the same data as arr)

xy = arr.copy()
print(xy)        # [99  2  3  4  5] (xy is a copy, so it starts the same as arr)
print(xy.base)   # None (xy is a copy, so it's not a view of arr)
print(x.base)    # arr (since x is a view of arr, its base is arr)
print(arr.base)  # None (arr is not a view of another array)


# The .base attribute tells whether the array is a view of another array (returns the original array if it is a view, otherwise returns None)

arr[0] = 42
xy[0]=83

print(arr)       # [42  2  3  4  5] (modified the first element of arr)
print(x)         # [42  2  3  4  5] (since x is a view of arr, it reflects the change in arr)
print(xy)        # [83  2  3  4  5] (since xy is a copy, it's independent of changes in arr)

xy[0]=83
print(xy)        # [83  2  3  4  5] (xy remains independent and unaffected by arr)



arr = np.array([1, 2, 3, 4, 5, 6 ,7 ,8 ,9])
#iterator
for x in np.nditer(arr[::2]):
  print(x)

#Stack Concatenate
arr = np.concatenate((arr1, arr2))
arr = np.stack((arr1, arr2), axis=1)
arr = np.vstack((arr1, arr2)) #vartical stack
arr = np.hstack((arr1, arr2)) #horizantal stack


#split

arr = np.array([1, 2, 3, 4, 5, 6])

newarr = np.array_split(arr, 3)
# [array([1, 2]), array([3, 4]), array([5, 6])]
# [1 2]
# [3 4]
# [5 6]
print(newarr)
print(newarr[0])
print(newarr[1])
print(newarr[2])

#search
x = np.where(arr == 4)


#sort
print(np.sort(arr))


#filter

arr = np.array([41, 42, 43, 44])

# Create an empty list
filter_arr = []

# go through each element in arr
for element in arr:
  # if the element is higher than 42, set the value to True, otherwise False:
  if element > 42:
    filter_arr.append(True)
  else:
    filter_arr.append(False)

newarr = arr[filter_arr]

print(filter_arr) #[False, False, True, True]
print(newarr)


#zip
x = [1, 2, 3, 4]
y = [4, 5, 6, 7]
z = []

for i, j in zip(x, y):
  z.append(i + j)
print(z)  #[5, 7, 9, 11]


#function

def myadd(x, y):
  return x+y

myadd = np.frompyfunc(myadd, 2, 1)

print(myadd([1, 2, 3, 4], [4, 5, 6, 7])) #[5, 7, 9, 11]

print(type(myadd)) #<class 'numpy.ufunc'>

# ufunc Logs
# ufunc Summations
# ufunc Products
# ufunc Differences
# ufunc Finding LCM
# ufunc Finding GCD
# ufunc Trigonometric
# ufunc Hyperbolic
# ufunc Set Operations

