#include <iostream>
using namespace std;

class MyClass
{
    public:
        void myPrint() const {
           cout <<"Hello"<<endl;
        }
};


int main() {
    const MyClass obj;
    obj.myPrint();
}


//1) переменные-члены константного объекта нельзя модифицировать
//2) константный объект не может вызвать обычные методы
//3) обычный объект может вызвать константные методы
