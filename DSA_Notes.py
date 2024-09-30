// Time Complexity — Time taken by code to execute a particular task as a function of the input length.

// Time Complexity is a function to measure the efficiency of your code as the length of your input increases

//   space Complexity — Additional space taken by code to execute
//   particular task as a function of the length of input.

// Copy the elements of one array to another

  int[] newArr = new int[arr.length]; // T.C 0(1) | S.C 0(n)

  for(int i = 0; i < arr.length; i++) {
  newArr[i] = arr[i]; 
  }    //System.arraycopy() 

// Print the elements of the new array
for(int num : newArr){  //T.C 0(n) |
  System.out.println(num);
}

// 0(log n) => 1st search for the middle element of array 0(1) + Compare the middle element with the target element 0(1) + [Reduce the search space] Repeat the process until the target element is found or the array

// Logarithmic Growth: The number of times you can halve a number before reaching 1 is approximately equal to the logarithm of that number. In this case, the number is the length of the array (n).


startTime = Syste.nanoTime();
int start = 0;
int end = arr. length - 1;

while (start <= end) {
  int mid = (start + end) / 2;
  if (arr[mid] == 48) {
    System. out.println("Found 48 at index " + mid);
    break; // Found the element, exit the loop
  } else if (arr[mid] < 48) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
endTime = Syste.nanoTime();
Systen.out.printIn("Binary S Took "+ (endTime - startTime ));

/*Length of array = n/1 = n


At Iteration 2,

Length of array = n⁄2*1

At Iteration 3,

Length of array =(n/4) = (n/2)/2 = n/2*2
Therefore, after Iteration k,

Length of array = n⁄2k
Also, we know that after k divisions, the length of the array becomes 1 Therefore

Length of array = n⁄2k = 1
=> n = 2k
Applying log function on both sides:

=> log2 (n) = log2 (2k)
=> log2 (n) = k log2 (2)
As (loga (a) = 1)
Therefore,

As (loga (a) = 1)
k = log2 (n)
Hence the time complexity of Binary Search is

log2 (n) ~ (log n) */



//*****Bits (They are faster)
//   &[*], | [+] , ^ [Diffrent Will be 1] , ~ [Not]
int num = 11; // 1011 & 0001 = 0001
if((num & 1) == 0)
{ System.out.println("Even number ");}
else{ System.out.println("Odd number ");

int a =3 // int 4 byte = 32 bits ; 1 byte = 8 bits
  // 00000000 00000000 00000000 00000011
  //[0](0000000 00000000 00000000 00000011)
  //1st bit [0] is called a set bit, if the set bit is 0 then it's a positive number, if the set bit is 1 it's a negative number.
  // 0 => +, 1 => -

  ~a // 11111111 11111111 11111111 11111100
  // But when the computer prints the number (~a), it will 2's complement the number.
  //  11111111 11111111 11111111 11111 100
  // 100000000 00000000 00000000 00000 011 and add 1 (2's compliment)
  // 100000000 00000000 00000000 00000 011
  //            +                        1 => 100
  //100000000 00000000 00000000 00000 100 => -4

  // 2's complement represents negative numbers in a computer. It is a method used to
  
  // if 3 = 001, 4 = 100


  // *****Shifts

  // 1. Left Shift (<<) 9<<1 =18, 9<<2 = 36, 9<<3 = 72,
  // Purpose: Shifts the bits of a number to the left, multiplying the number by 2 for each position shifted.
  
  // 2. Right Shift (>>) 19>>1 = 9, 19>>2 = 4, 19>>3 = 2, 19>>4 =1 ; 19>>5 = 0;
  // Purpose: Shifts the bits of a number to the right, dividing the number by 2 for each position shifted.



  // The key insight is that the number of 1 bit (Hamming weight) in a number i can be derived from the number of 1 bit in the number i >> 1 (i.e., i divided by 2). Specifically:

  // Leetcode 338
  
  If I am even, I have the same number of 1 bits as i >> 1.
  If i is odd, i have one more 1 bit than i >> 1.
  Thus, you can use the following recurrence relation:

for (int i = 1; i <= n; i++) {
    arr[i] = arr[i >> 1] + (i & 1); 
}

  
// countBits(i)=countBits(i>>1)+(i&1)


int[] arr = new int[n + 1]; 
     //ClassName object = new ClassName();  
     List<Integer> list = new ArrayList<>();
     lisi.add(3);
// Reverse T=0(n/2) S=0(1)
    // reverseArray(int arr[], int n) {
       //  int i=0,j=n-1;
       // while(i<j){
       //     arr[i]= arr[i]^arr[j];
       //     arr[j]= arr[i]^arr[j];
       //     arr[i]= arr[i]^arr[j];
       //     i++;j--;