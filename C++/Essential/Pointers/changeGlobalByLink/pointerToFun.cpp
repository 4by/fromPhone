#include <stdio.h>
#include <iostream>
using namespace std;



void example2(int *Item, int d) {*Item = d;}

	int a = 0;
	int *b=&a;
	
int main() {
 example2(b, 5);
	cout << *b;
	return 0;
}
