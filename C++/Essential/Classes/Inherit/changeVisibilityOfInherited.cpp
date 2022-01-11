#include <iostream>
using namespace std;

class B_class{
public:
	int i, j;
};

class D_class : private B_class {
public:
	using B_class::i;
	int k;
};

//при наследовании класса через private все его
//элементы становятся приватными
//использование using позволяет сделать их публичными 
//(и наоборот)

int main()
{
	D_class d;

	d.i = 10;
	d.k = 20;
	cout << d.i*d.k;
	return 0;
}