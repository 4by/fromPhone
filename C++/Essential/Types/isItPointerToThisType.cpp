#include <iostream>
using namespace std;

class employee {
public:
	virtual void print() = 0;
};

class programmer : public employee {
public:
	void print() {cout << "Printing programmer\n";}
};

class salesperson : public employee {
public:
	void print() {cout << "Printing salesperson\n";}
};

int main()
{
	programmer prog1, prog2;
	salesperson sp;

	employee *e[3];
	e[0] = &prog1;
	e[1] = &sp;
	e[2] = &prog2;

	for(int i = 0; i < 3; i++) {
		if (dynamic_cast<programmer*>(e[i]))	(e[i])->print();
		else cout << "Not a programmer\n";
	}

	//dynamic_cast возвращает true, если
	//данный указатель относится к этому классу
	
	
	return 0;
}
