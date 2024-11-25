Growth Rates (from slowest to fastest):

O(1)           - Constant
O(log log n)   - Double logarithmic
O(log n)       - Logarithmic
O(√n)          - Square root
O(n/2)         - Linear (same as O(n))
O(n)           - Linear
O(n log n)     - Linearithmic
O(n√n)         - Higher than linear
O(n^2)         - Quadratic
O(n^3)         - Cubic
O(n^4)         - Quartic
O(2^n)         - Exponential
O(n!)          - Factorial


for (int i = 1; i <= N; i++)  ---> T.C o(n)

for (int i = 1; i <= N/2; i++)  ---> T.C o(n/2) ~ T.C o(n)

for (int i = 1; i <= sqrt(N); i++)  ---> T.C o(sqrt(n))

for (int i = 1; i <= sqrt(N/2); i++)  ---> T.C o(sqrt(n))

for (int i = 1; i <= N; i+=i)  ---> T.C o(log n)  | for (int i = 1; i <= N; i=2*i)  ---> T.C o(log n)

for (int i = 1; i <= N; i = i ^ 2) ---> T.C O(∞)

for (int i = 2; i <= N; i = i ^ 2 | i * i )  ---> T.C O(log(log(N)))


# Count Factor
n=24 => {1,2,3,4,6,8,12,24} = 8

for(int i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
TC= O(n)
// 10^18 operations => 10^10 sec = 317 years

# optimise
int count =0;
        for(int i=1;i*i<=N;i++){
            
            if(N%i==0){
                if(i==N/i){
                count++;
                }
                else{
                count+=2;
                }
            }
        }
if (i*j==n) both i and j is a factor
# i*j=n
# j=n/i
# => 2 factors
i^2=n
i=sqrt(n)  => Tc = O(sqrt(n))  
10^18 operations => sqrt(10^18) sec = 10^9 opetions => 10 sec

# prime number => 1 and n factors  => count factor = 2
TC = O(sqrt(n))

x^2 =16 
=> 2= log x 16

log x 16 = 2  => x^2 =16 