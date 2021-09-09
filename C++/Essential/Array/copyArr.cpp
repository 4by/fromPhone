#include <iostream>
using namespace std;


int main() {
	int a[3],
	b[3];
	a[0] = 0;
	a[1] = 1;
	a[2] = 2;
	
	copy(&a[0], &a[0]+4, &b[0]);
	// или copy(a, a+sizeof(a)/sizeof(*a), b);
	

	cout <<b[2];
	

	int c[2][2];
	int d[2][2];
	c[0][0] = 0;
	c[0][1] = 1;
	c[1][0] = 10;
	c[1][1] = 11;


	copy(&c[0][0], &c[0][0]+2*2, &d[0][0]);
	//...+rows*columns
	cout <<d[0][1];



	return 0;
}