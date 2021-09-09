#include <iostream>
#include <list>

using namespace std;

#define SIZE 101

void ins_table(list<int> table[], int l)
{
	int c = l%SIZE;
list<int>::iterator p=table[c].begin();
	table[c].insert(p, l);
	
	//cout<<l<<", "<<c<<endl;
	
}

//забивает список со списками до (SIZE-1)

void get_value(list<int> table[], int c)
{
	list<int>::iterator p=table[c].begin();
	while(p != table[c].end())
	{
		cout << *p<<endl;
		p++;
	}
}


//получает таблицу в ячейке
//не могу придумать, как обработать несуществующие ячейки
//через throw/catch



int main()
{
		list<int> table[SIZE];
		
		int i;
		for(i=1; i<500; i++) ins_table(table, i);
   	 get_value(table, 10);
	//	cout << get_value(table,0) << endl;
	

	return 0;
}