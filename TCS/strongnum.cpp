#include <iostream>
using namespace std;
int factorial(int X) {
   int ans = 1;
   for (int i = 1; i <= X; i++) {
      ans = ans * i;
   }
   return ans;
}
int stronno(int num) {
   int sum = 0;
   int o=num;
   //Extract all the digits from num
   while (num > 0) {
      int digit = num % 10;
      sum = sum + factorial(digit);
      num = num / 10;
   }
   return sum==o;
}
int main(){
    int num;
    cin>>num;
    cout<<stronno(num);
}