#include <iostream>
using namespace std;

int main()
{
	int i=0;
	
	//	char *p='p';
	//it works
	
	const char *p = "This is a string";

	i = reinterpret_cast<int> (p);
	cout << i<<endl;

	return 0;
}