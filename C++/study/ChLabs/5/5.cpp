#include <iostream>
#include <fstream>
#include <errno.h>
using namespace std;


int main() {
	char str[1024];
	int temp;
	int state;
	int sum = 0,
	aver;
	int i,
	j = 0;

	ifstream in("test.txt");
	if(!in) {
		cout << "необходимо создать файл test.txt с числами, разделенными через пробел";
		return 0;
	}
	while(in) {
		in.getline(str, 1024, ' ');
		if(str[0] == '\0') continue;
		//последний символ файла
		//можно также через in.eof или !in
		temp = atoi(str);
		//	cout<<"\n::::"<<errno<<":::"<<ERANGE<<":::";
		if(errno == ERANGE) {
			cout << "Error! Number out of range!\n";
			return 0;
		}
		//проверили диапазон переменной
		if(!(isdigit(str[0]) || (str[0] == '-') || (str[0] == '+'))) {
			cout << "Error! In file is no integer symbols!\n";
			return 0;
		}
		//проверили первый символ числа
		for(i = 1; i < strlen(str); i++) if(!isdigit(str[i])) {
			cout << "Error! In file is no integer symbols!\n";
			return 0;
		}
		//проверили остальные символы числа
		state = in.rdstate();
		if(state & ios::failbit) {
			cout << "Formate error!\n";
			return 0;
		}
		if(state & ios::badbit) {
			cout << "Fatal error!\n";
			return 0;
		}
		sum += temp;
		j += 1;
	}
	aver = sum/j;
	in.close();

	ofstream result("test2.txt");
	result << aver << "- среднее арифметическое \n";
	result <<"из "<< j << " чисел";
	result.close();

	cout<<"среднее арифметическое и соответствующий комментарий помещены в файл test2.txt";

	return 0;
}