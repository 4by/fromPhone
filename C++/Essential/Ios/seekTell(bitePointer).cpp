#include <iostream>
#include <fstream>
using namespace std;


class excl{
	double a;
public:
	excl(double i){
	a=i;
};
	friend ofstream &operator<<(ofstream &stream,excl &c);
};



int main()
{
	excl c(1);
	
	ofstream out("test.txt");
	for(int i=0; i<10; i++) out.write((const char *)&c, sizeof (excl));
//в записанном в файл виде:
//элементы-обьекты класса - каждый символ из n равен размер объекта/n
//элементы обычных типов данных (int, string) - каждый символ из n равен размеру char
//(поэтому тут намного проще работать с классами)
		out.close();

	ifstream in("test.txt");
	in.seekg(0,ios::end);
	//seekg перемещает от end на 0 байт указатель
	//(это похоже на бегунок указателя в структурах)

//ios::beg -Начало файла
//ios::cur - Текущее положение
//ios::end - Конец файла

 int n=in.tellg();
 int s = (sizeof(excl));
  //возвращает текущую позицию указателя
	cout<< "Schitano  " << n/s << " objects of class excl\n";
  //...всего байт/количество байт в одном экземпляре
  
  //в потоке ввода используются операторы seekp и tellp
	in.close();


	return 0;
}