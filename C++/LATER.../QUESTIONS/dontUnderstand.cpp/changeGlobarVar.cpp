#include <stdio.h>
#include <iostream>
using namespace std;


void example1(int *Item, int f)
{
  
  cout<< "Item(ex1): " << Item << endl;
  

 	Item = &f;
  cout<< "Item(ex1): " << Item << endl;
 
		
}

void example2(int **Item, int d)
{
   cout<< "*Item(ex2): " << *Item << endl;
 

	*Item = &d;
	 
   
	 cout<< "*Item(ex2): " << *Item << endl;
 
}


	


int main()
{
	int a = 0, b = 0;
	int *c1=&a;
	int *c2=&b;
	
	 example1(c1, 5);
 	 example2(&c2, 5);


	cout << *c2 << " " << *c1 << endl;
	cout << a << " "<< b << endl;
	 

	
	return 0;
}
