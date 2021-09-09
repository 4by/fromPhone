#include <iostream>
using namespace std;

class MyClass {
    public:
        int var;
        MyClass() { }
        MyClass(int a)
        : var(a) { }
        friend MyClass operator-(MyClass &obj1, MyClass &obj2);    
        MyClass operator+(MyClass &obj);
};


MyClass MyClass::operator+(MyClass &obj) {
            MyClass res;
            res.var= this->var+obj.var;
            //this - это указатель на левый операнд
            //obj (аргумент) - это указатель на правый операнд
            return res; 
        }
// . :: .* ?
// эти операторы не могут быть перезагружены
// как функции класса


MyClass operator-(MyClass &obj1, MyClass &obj2) {      
            MyClass res;
            res.var= obj1.var-obj2.var;
            return res; 
        }
// =, (), [], и ->
// эти операторы не могут быть перезагружены
// как функции-друзья класса



//если нам не нужен доступ к приватным членам класса,
//то мы просто можем писать функцию по синтаксису
//как во friend, без объявления friend

int main() {
    MyClass obj1(12), obj2(55);
    
    MyClass r1 = obj1+obj2;
    MyClass r2 = obj1-obj2;
   

    cout << r1.var<<endl;
    cout << "сложение (функция класса) \n";
    cout << r2.var<<endl;
    cout << "вычитание (функция-друг класса) \n";
}
