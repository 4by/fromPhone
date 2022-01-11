#include <iostream>
using namespace std;


int myfunc(int a)
{
	return a;
}

int myfunc(int a, int b)
{
	return a*b;
}



int main()
{
	int (*fp) (int a, int b); 
	//или int (*fp) (int a); 
	//указатель на функцию всегда в скобках
	fp = myfunc;
	cout << fp(5, 6);
	return 0;
}
