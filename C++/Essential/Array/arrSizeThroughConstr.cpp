#include <iostream>
#include <fstream>
using namespace std;

class A {
  int* b; 
  public:
   A(int a) : b(new int[a]) {}
  ~A() { delete[] b; }
};


class B {
  int** c; 
  public:
   B(int a, int b) : c(new int*[a]) {for(int i = 0; i < a; i++) c[i] = new int[b];}
  ~B() { delete[] c; }
};









int main() {
 A p(2);
 B s(2,2);
  return 0;
}