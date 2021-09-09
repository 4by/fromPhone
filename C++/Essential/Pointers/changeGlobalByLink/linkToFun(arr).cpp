#include <iostream>
using namespace std;


void f(int (&pam)[10]) {
  for (int i = 0; i < 10; i++)  pam[i] = 5;
}

int arr[10];



int main() {
f(arr);
cout << arr[4];
return 0;
}