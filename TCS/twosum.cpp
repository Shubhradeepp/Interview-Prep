// #include<bits/stdc++.h>
// using namespace std;


// pair<int,int> twosum(int arr[],int n,int k){
//  for(int i=0;i<n;i++){
//     for (int j = i + 1; j < n; j++) {
//             if (arr[i] + arr[j] == k) return {i,j};
//         }

//  }
 
// return{-1,-1};
// }
// int main(){
//  int n = 5;
//     int arr[] = {2, 6, 5, 8, 11};
//     int target = 14;
//     pair<int,int> p = twosum(arr,n, target);
//     cout << "Index 1: " << p.first << ", Index 2: " << p.second << endl;
//     return 0;

//  }

#include<bits/stdc++.h>
using namespace std;

pair<int,int> twosum(int arr[],int n,int k){
    unordered_map<int,int> m;
    for(int i=0;i<n;i++){
        int complement = k - arr[i];
        if(m.find(complement) != m.end()){
            return {m[complement],i};
        }
        m[arr[i]]=i;
    }
    return{-1,-1};
}

int main() {
    int n = 5;
    int arr[] = {2, 6, 5, 8, 11};
    int target = 16;
    pair<int,int> p = twosum(arr,n, target);
    cout << "Index 1: " << p.first << ", Index 2: " << p.second << endl;
    return 0;
}