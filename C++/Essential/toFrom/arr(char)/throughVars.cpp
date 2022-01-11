#include <strstream>
#include <iostream>
using namespace std;

int main()
{
	char str[80];
	int a = 10;
		int i;
	float f;
char s[] = "One 2 3.00";

	ostrstream outs(str, sizeof(str));
	outs << "Hello there ";
	outs << a+44<<" ";
	outs << 100 << ends;
	cout << str<<endl;


	istrstream ins(s);
	ins >> str;
	ins >> i;
	ins >> f;
	cout << str << " " << i << " " << f << endl;

	return 0;
}