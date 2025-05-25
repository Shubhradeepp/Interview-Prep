
  #include <bits/stdc++.h>
using namespace std;
void printResult(string strs[],int n) {


for(int i=0;i<n;i++){
    int a=0,c=0;
for (char ch : strs[i]) {
  a++;
      if (isupper(ch)) 
c++;}
int importance=c*100/a;

if(importance<=20)
    cout<<"LESS"<<endl;
   else if(importance>20 && importance<=60)
    cout<<"MODERATE"<<endl;
 else if(importance>60 && importance<=75)
 cout<<"Important"<<endl;
 else
 cout<<"Most"<<endl;

}

}
int main() 
{
int n;
cin >> n;

string strs[n];
cin.ignore(numeric_limits<streamsize>::max(), '\n');


for (int i = 0; i < n; i++) {
getline(cin, strs[i]);

}
printResult(strs,n);
return 0;
}
    

