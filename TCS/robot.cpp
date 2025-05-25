#include <bits/stdc++.h>
using namespace std;
int main() {
    int start1, time1, start2, time2;

    cout << "Enter the start time and time taken for first robot to complete one round: ";
    cin >> start1 >> time1;

    std::cout << "Enter the start time and time taken for second robot to complete one round: ";
    std::cin >> start2 >> time2;

    // Find the least common multiple (LCM) of time1 and time2
    // int lcm = (time1 * time2) / __gcd(time1, time2);

    // Find the next meeting time after the start time
    int time = start1 > start2 ? start1 : start2;
    while (true) {
        if ((time - start1) % time1 == 0 && (time - start2) % time2 == 0) {
            break;
        }
        time++;
    }

    std::cout << "The robots will meet again at the starting position at time: " << time << std::endl;

    return 0;
}
