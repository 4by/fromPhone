#include <iostream>
using namespace std;

class base {
public:
	int i;
};

class d1 : public base {
public:
	int j;
};

class d2 : public base {
public:
	int k;
};

class d3 : public d1, public d2 {
public:
	int m;
};

int main()
{
	d2 obj1;
	d3 obj2;
  
  	obj1.k = 10;
  	cout << obj1.k << " ";
	//получили наследованное значение простым способом
	//так как класс обьекта obj1 наследован от одного класса
	
	obj2.d2::i = 15;
	cout << obj2.d2::i << " ";
	//компилятор не понимает - класс obj2 будет либо
	//base->d1->d3, либо base->d2->d3
  //выбрали вручную



	return 0;
}
