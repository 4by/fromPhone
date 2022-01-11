#include <iostream>
#include <fstream>
#include <errno.h>
using namespace std;

	char str[1024];
	int temp;
	

  int main()
{
	ifstream in("test.txt");
	while(in){
		in.getline(str,1024,' ');
		if(str[0] == '\0') continue;
		//последний символ файла
		//можно также через in.eof или !in
		temp = atoi(str);
	//	cout<<"\n::::"<<errno<<":::"<<ERANGE<<":::";
		if(errno==ERANGE) 
		{
			cout << "Error! Number out of range!\n";
			return 0;
		}
	//сравнивается с возникающей ошибкой
	//( в данном случае - слишком большой диапазон)
	
	}

	in.close();
	return 0;
}	
