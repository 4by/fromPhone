#include <iostream>
using namespace std;

class myclass{
public:
	int sum;
	void sum_it(int x){
	sum = 0;
	for(int i=x; i; i--) sum+=i;
}
};




int main()
{
	int myclass::*dp= &myclass::sum;
	void (myclass::*fp)(int x) = &myclass::sum_it;  
 //создали указатели на переменную и функции класса

	myclass d, *c = &d;
  //создали объект класса и указатель на него
	
	(d.*fp)(7);
	cout << d.*dp<<endl;
	//синтаксис для объекта
	
	(c->*fp)(7);
	cout << c->*dp<<endl;
	//синтаксис для указателя на объект
	

	return 0;
}
