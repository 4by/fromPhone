#include <iostream>
using namespace std;


int A[20], B[20], C[20], i;
 
int main() {

cout<<"введите 20 элементов массива A"<<endl;
for (i=0;i<20;i++) cin>>A[i];

cout<<"введите 20 элементов массива B"<<endl;
for (i=0;i<20;i++) cin>>B[i];

cout<<endl<<"массив A: "<<endl;
for (i=0;i<20;i++) cout<<i<<": "<<A[i]<<endl;
cout<<endl;

cout<<endl<<"массив B: "<<endl;
for (i=0;i<20;i++) cout<<i<<": "<<B[i]<<endl;
cout<<endl;


for (i=0;i<20;i++) C[i] = A[i]+B[i];

cout<<endl<<"массив C: "<<endl;
for (i=0;i<20;i++) cout<<i<<": "<<C[i]<<endl;
cout<<endl;

 return 0;
}
