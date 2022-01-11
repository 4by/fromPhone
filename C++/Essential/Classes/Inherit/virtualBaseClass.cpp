#include <iostream>
using namespace std;

class base {
public:
	int i;
};

class d1 : virtual public base {
public:
	int j;
};

class d2 : virtual public base {
public:
	int k;
};

class d3 : public d1, public d2 {
public:
	int m;
};

int main()
{
	d3 d;

	d.i = 10;
	d.j = 20;
	d.k = 30;
	d.m = 40;

	cout << d.i << " "<< d.j << " " << d.k << " " << d.m;

//классы d1 и d2 - виртуальные, значит d3,
//который насдедован от них - унаследует
//их общие свойства
	
	return 0;
}