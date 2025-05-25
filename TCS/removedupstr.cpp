#include<bits/stdc++.h>
 
using namespace std;
 
string removeDuplicateLetters(string s) {
  string ans = "";
  unordered_map<char,bool> map;
  for (int i = 0; i < s.length(); i++) {
    if (map[s[i]] == false) {
      ans += s[i];
      map[s[i]] = true;
    }
  
  }
  return ans;
}
int main() {
  string str = "cbacdcbc";
  cout<<"Original String: "<<str<<endl;
  cout <<"After removing duplicates: " <<removeDuplicateLetters(str) << endl;
  return 0;
}