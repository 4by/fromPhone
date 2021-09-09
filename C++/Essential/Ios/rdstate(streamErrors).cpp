#include <iostream>
#include <fstream>
#include <errno.h>
using namespace std;

	char str[1024];


  int main()
{
	ifstream in("test.txt");

	while(in){
		in.getline(str,1024,' ');
		if(str[0] == '\0') continue;
		cout<<"\n::::"<<in.rdstate()<<":::"<<str;
		if(in.rdstate() & ios::failbit) {
			cout << "Formate error!\n";
			return 0;
		}
		if(in.rdstate() & ios::badbit){
			cout << "Fatal error!\n";
			return 0;
		}
	}
	
	//контроль ошибок на вводе - выводе:
	//rdstate сравнивается с флагами ios
	
//goodbit	= 0x00;	// Нет ошибок
//	eofbit = 0x01;	// Достигнут конец файла
 //  failbit = 0x02;	//Ошибка форматирования или преобразования
//	badbit = 0x04;	// Серьёзная ошибка, после которой пользоваться потоком невозможно
//hardfail	= 0x08;	// Неисправность оборудования

	in.close();
	return 0;
}	
