#include <iostream>
using namespace std;

template <class type1, class type2> 

class stack
{
	type1 i;
	type2 j;
public:
	stack(type1 a, type2 b);
	void show(){cout << i << " " << j << "\n";}
};


template <class type1, class type2> stack<type1, type2>::stack(type1 a, type2 b)      
{ i=a; j=b; }



int main()
{
	stack<int, double> ob1(10, 0.23);
	stack<char, char *> ob2('X', "This is a test");

	ob1.show();
	ob2.show();

	return 0;
}