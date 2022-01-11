#include <iostream>
#include <typeinfo>
using namespace std;

class BaseClass {
	int a, b;
	virtual void f(){}
};

class Derived1: public BaseClass {
	int i, j;
};

class Derived2: public BaseClass {
	int k;
};

int main()
{
	int i;
	BaseClass *p, baseob;
	Derived1 ob1;
	Derived2 ob2;

	// Сначала выводится имя встроенного типа
	cout << "Typeid of i is ";
	cout << typeid(i).name() << endl;

	// 
	cout << "Exp" << endl;
	cout << typeid(typeid(i)).name() << endl;

	// демонстрация typeid с классами
	p = &baseob;
	cout << "p is pointed to an object of type ";
	cout << typeid(*p).name() << endl;

	p = &ob1;
	cout << "p is pointed to an object of type ";
	cout << typeid(ob1).name() << endl;

	p = &ob2;
	cout << "p is pointed to an object of type ";
	cout << typeid(ob2).name() << endl;

	if( typeid(baseob).before(typeid(ob1))) cout << "baseob before ob1" << endl;
	else cout << "baseof not before ob1" << endl;
	
	
	return 0;
}