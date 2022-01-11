#include <iostream>
#include <iomanip>
#include <strstream>
using namespace std;


// класс манипулятора вывода
ostream &setup(ostream &stream)
{
	stream.setf(ios::left);
	stream << setw(10) << setfill('$');
	return stream;
}

char str[80];


int main()
{
  
  cout<<"\n флаги: \n ";
  
	cout.setf(ios::showpos);
	cout.setf(ios::scientific);
	cout << 123 << " " << 123.23 << " \n";
	cout.unsetf(ios::showpos);
	cout.unsetf(ios::scientific);
	cout << 123 << " " << 123.23 << " \n";


cout<<"\n\n манипуляторы: \n ";
cout<<" позволяют задавать параметры \n ";
cout<<"(для них подключили файл iomanip) \n ";



  cout << setiosflags(ios::fixed);
  //аналогично установке флагов
	cout << setprecision(2) << 1000.243 << endl;
	cout << setw(20) << "Hello there.";



cout<<"\n\n манипуляторы через класс: \n ";
cout<<"(для работы с массивами ввода-вывода подключили strstream) \n ";


strstream outs(str, sizeof(str));
	outs << setup << 99;
	cout << str << '\n';



//	getchar();
	return 0;
}