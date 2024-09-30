 for (int i = 1; i <= N; i++)  ---> T.C o(n)

for (int i = 1; i <= N/2; i++)  ---> T.C o(n/2) ~ T.C o(n)

for (int i = 1; i <= sqrt(N); i++)  ---> T.C o(sqrt(n))

for (int i = 1; i <= sqrt(N/2); i++)  ---> T.C o(sqrt(n))

for (int i = 1; i <= N; i+=i)  ---> T.C o(log n)  | for (int i = 1; i <= N; i=2*i)  ---> T.C o(log n)

for (int i = 1; i <= N; i = i ^ 2) ---> T.C O(∞)

for (int i = 2; i <= N; i = i ^ 2)  ---> T.C O(log(log(N)))