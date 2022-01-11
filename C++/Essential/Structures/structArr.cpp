#include <stdio.h>
#include <iostream>
using namespace std;
typedef struct ITEM
{
	char Title[30];
	char Author[30];
	int Next;
} ITEM;

int main(void)
{
	ITEM List[] =
	{
		{"UNIX Unleashed", "Burk and Horvath", 2},
		{"Algorithms in C", "Sedgewick", 3},
		{"Builder Unleashed", "Calvert", 1},
		{"QWE Unleashed", "Liberty", 12},
	};
	
	int Current = 0;
	
	//while(Current)
for (int i=1; i<=4; i++) {
cout << List[Current].Title << "; ";
cout << List[Current].Author << endl;
Current = List[Current].Next;
}
	

	return  0;
}