#include<bits/stdc++.h>
using namespace std;


int isperfect(long long n){
         long long sum=0;
    for(int i=1; i<sqrt(n);i++){
        if(n%i==0){
        sum =sum + i;
         if(n/i!=n)
         sum+=n/i;
        }
    }
    return sum==n ? 1:0;
    
    // int sum=0;
    // for(int i=1;i<n;i++){
    //     if(n%i==0){
    //         sum+=i;
    //     }
    // }
    // return (sum==n);
 }

 int main(){
    int t;
    cin>>t;
   
    while(t--){
         long long n;
    cin>>n;
    if(isperfect(n))
    cout<<"True";
    else
    cout<<"false";}
    return 0;
 }