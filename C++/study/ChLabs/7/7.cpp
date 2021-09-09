#include "stack.h"


template < class type1 >
Stack < type1 > ::Stack(int a): stck(new type1[a]), SIZE(a) {}


template < class type1 >
void Stack < type1 > ::put(int i, type1 j) {
  if(i >= SIZE) {
    cout << "\n невозможно поместить элемент; не входит в область массива.\n";
    return;
  }
  stck[i] = j;
}


template < class type1 >
type1 Stack < type1 > ::get(int i) {
  if(i >= SIZE) {
    cout << "\n невозможно получить элемент; не входит в область массива\n";
    return 0;
  }
  return stck[i];
}


template < class type1 >
void Stack < type1 > ::sort() {
  type1 tmp;
  for (int i = 1; i <= SIZE; i++) {
    if (stck[i-1] > stck[i]) {
      tmp = stck[i];
      stck[i] = stck[i-1];
      stck[i-1] = tmp;
      if (i > 1) i = i-2;
    }
  }
  cout<<"\n при сортировке незаданные элементы уходят в начало\n";
  for (int i = 0; i <= SIZE; i++)  cout<<stck[i]<<", ";
  cout<<endl;
}



int main() {
  Stack < int > a(100);
  Stack < char > c(100);
  Stack < string > d(100);

  a.put(1, 6);
  a.put(2, 5);
  a.put(3, 1);
  for(int i = 0; i < 10; i++) c.put(i, (char) 'A'+i);
  d.put(3, "стр1");
  d.put(2, "стр2");
  d.put(1, "стр3");

  cout << a.get(1) << " ";
  cout << a.get(2) << "\n";
  for(int i = 0; i < 10; i++) cout << c.get(i);
  cout << "\n";

  d.sort();

  return 0;
}