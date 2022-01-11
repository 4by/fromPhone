#include <iostream>
using namespace std;

void s(int &x) {
  x = x + 1;
}

int a = 7;


int main() {
  s(a);
  cout << "a = " << a << '\n';

  return 0;
}