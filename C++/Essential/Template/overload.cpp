#include <iostream>
using namespace std;

template <class type1, class type2>

void myfunc(type1 x, type2 y)	{cout << x << " " << y << endl;}
void myfunc(int a, int b)	{cout << "Inside overloaded Swap().\n";}




int main()
{
	myfunc(10, "hi");
	myfunc(0.23, 10L);
	myfunc(1, 2);

	return 0;
}
