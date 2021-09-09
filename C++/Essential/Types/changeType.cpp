#include <iostream>
using namespace std;

int main()
{
	int i=0;
	
	
	//const char *p = "This is a string";
	//it doesn't work

  char *p='p';
	i = reinterpret_cast<int> (p);
	cout << i<<endl;

	return 0;
}