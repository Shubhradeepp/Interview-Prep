#include <bits/stdc++.h>
using namespace std ;


  void printPrimeFactors(int n) {

    cout << "Prime Factors : ";
    for (int i = 2; i <= sqrt(n), n > 1; i++) {

      if (n % i == 0) {

        while (n % i == 0) {

          cout << i << " " ;
          n = n / i ;
        }
      }
    }
   cout<<"\n";
  }

int main() {

  int t;
    cin>>t;
   while(t--){
    int n; 
    cin>>n;
     
printPrimeFactors(n);
 
   }


  return 0  ;
}