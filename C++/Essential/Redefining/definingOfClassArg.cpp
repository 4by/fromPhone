#include<iostream>
#include<stdlib.h>
using namespace std;

class atype {
	int a[3];
public:
	atype(int i, int j, int k) {
		a[0] = i;
		a[1] = j;
		a[2] = k;
	}
	int &operator[](int i);
};


int& atype::operator[](int i)
//тип имяКласса..
{
	if (i<0 || i>2) {
		cout << " Boundary Error\n";
		exit(1);
	}
	return a[i];
}

int main( )
{
	atype ob(1, 2, 3);
	cout << ob[1] << " ";
	ob[1] = 25;
	cout << ob[1];
	ob[3] = 44; 
// появляется сообщение об ошибке 
//и происходит завершение программы
	return 0;
}