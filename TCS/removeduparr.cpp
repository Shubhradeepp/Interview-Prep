#include<bits/stdc++.h>
 
using namespace std;
 
vector<int> removeDuplicateLetters(int s[],int n) {
vector<int>v;
  unordered_map<int,bool> map;
  for (int i = 0; i < n; i++) {
    if (map[s[i]] == false) {
      v.push_back(s[i]);
      map[s[i]] = true;
    }
  
  }
  return v;
}
int main() {
    int arr[9];
   //int arr[] = {4, 3, 9, 2, 4, 1, 10, 89, 34} ;
  for(int i=0;i<9;i++){
    cin>>arr[i];
  }

    
  vector<int> res=removeDuplicateLetters(arr,9);
  cout<<"[";
  for(auto i:res){
   cout<<i<<" ";
  }
   cout<<"]";
  return 0;
}