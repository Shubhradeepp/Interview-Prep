
#include<bits/stdc++.h>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) {
        return false;
    }
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int smallestPrimeFactor(int n) {
    for (int i = 2; i <= n; i++) {
        if (n % i == 0 && isPrime(i)) {
            return i;
        }
    }
    return n;
}

int destroyInteger(int n) {
    int count = 0;
    while (n > 0) {
        int factor = smallestPrimeFactor(n);
        n -= factor;
        count++;
    }
    return count;
}

int main() {
    int N = 37;
    cout << destroyInteger(N) << endl; // Output: 4

    return 0;
}