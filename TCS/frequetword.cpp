
  #include <bits/stdc++.h>
using namespace std;
string printResult(string str) {
int n=str.size();
 map<string, int> wordCounts;
 string ans; 
      int start = 0;
    while(start<n){
        if(str[start]==' ')
        start+=1;
        else{

            int j=start;
            while(j<n && str[j]!=' ')
            j++;
            ans.append(str.substr(start,j-start));
             wordCounts[ans]++;
             start =j;
        }
    }
    string maxWord;
  int maxCount = 0;
  for (const auto& entry : wordCounts) {
    if (entry.second > maxCount) {
      maxWord = entry.first;
      maxCount = entry.second;
    }
  }
  return maxWord;

}


int main() 
{
string strs;
getline(cin,strs);

cout<<printResult(strs);
return 0;
}
    

