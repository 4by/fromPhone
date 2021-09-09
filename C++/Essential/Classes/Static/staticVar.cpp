#include <iostream>
using namespace std;

class counter{
	static int count;
	//одно значение этого члена на 
	//все объекты данного класса
public:
	void setcount(int i){ count = i; }
	void showcount() { cout << count << " ";}
};

int counter::count = 2;
//значение ДОЛЖНО быть объявлено вне класса
//(по умолчанию стоит 0)

int main()
{
	counter a, b;

	a.showcount();
	b.showcount();
  //по умолчанию было 0
  
	a.setcount(10);

	a.showcount();
	b.showcount();


	return 0;
}