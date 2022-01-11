#include <iostream>
#include <string>
using namespace std;


fc check(fc &x, string msg) {
cin.sync_with_stdio(false);
//просто, чтобы работал cin.rdbuf() -> in_avail()
while(1) {

if (cin.rdbuf() -> in_avail()) {
//если не было буфера обмена - cin.ignore потребует ввести то, что надо очистить
cin.clear();
//очищает флаги ошибок (пока объект в состоянии ошибки ничего не может быть выполнено)
//очищает только на "чем то", поэтому стоит перед cin.ignore
cin.ignore(std::numeric_limits<streamsize>::max(), '\n');
//очищает буфер обмена
}

cout << msg << endl;
if (!(cin >> x)) cout << "неверный тип данных" << endl;
else return x;
//требует повторный ввод
//пока то, что введено не "зайдет" в переменную
}
}


int main() {

	int a;

//	check(a, "ошибка 1");
//нет условий

//while (check(a, "ошибка 2") < 0) {cout << "ошибка 2" << endl;};
//одно условие

while (check(a, "ошибка 3")) 
{
	if (a<0) cout << "ошибка 3.1" << endl;
	else if (a>2) cout << "ошибка 3.2" << endl;
	else break;
};
//несколько условий





cout<<a;


	return 0;
}