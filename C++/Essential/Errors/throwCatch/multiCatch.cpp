#include <iostream>
using namespace std;

void Xhandler(int test)
{
	try {
		if (test) throw test;
		else throw "Value is zero";
	}
	catch (int i) {cout << "Caught exception #: " << i << "\n";}    
	catch (...) {cout << "Caught other \n";}   
}

int main()
{

	Xhandler(1);
	Xhandler(2);
	Xhandler(0);
	Xhandler(3);


	return 0;
}