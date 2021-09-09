#include <iostream>
using namespace std;

class access {
private:
	static int acs;
	
public:
	static void set_access(int a) {acs = a;}
	static int get_access() {return acs;}
//эти функции имеют достум только к статическим переменным
//(в том числе приватным)
//и доступ к ним(как и к статическим переменным) может
//быть получен напрямую через класс
};

int access::acs;
//значение ДОЛЖНО быть объявлено вне класса
//(по умолчанию тут стоит 0)

int main()
{
	access obj1, obj2;

	access::set_access(1);
 //вызов с помощью класса
 //(Так можно только статическую функцию)
	if(obj2.get_access() == 2) {
 // вызов с помощью объекта 
		cout << "Access resource.\n";
	}
	else cout << "Locked out.\n";



}