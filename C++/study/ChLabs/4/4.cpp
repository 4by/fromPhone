#include "cart.h"


Cart::Cart(double a): cal(a) {}

void Cart::getInfo() {
  cout <<endl<<"информация о патроне: " <<endl;
  cout <<"калибр равен: " << cal<<endl;
}

void Cart::setCal(double a) {
  cal = a;
}

Artil::Artil(double a, double b, double c, int d): vel(a), ang(b), len(c), num(d) {}

Artil::~Artil() {}

void Artil::getInfo() {

  cout <<endl<<" информация об артиллерийской пушке: " <<endl;
  cout <<" скорострельность равна: " << vel<<endl;
  cout <<" угол к горизонту равен: " << ang<<endl;
  cout <<" длинна ствола равна: " << len<<endl;
  cout <<" количество человек в орудийном расчете равно: " << num<<endl;
  cout <<endl<<" вставлен патрон калибра: " << cal<<endl;
}

Riffle::Riffle(double a, double b, double c): vel(a), siz(b), wei(c) {}

Riffle::~Riffle() {}

void Riffle::getInfo() {
  cout <<endl<<" информация о ружье: " <<endl;
  cout <<" скорострельность равна: " << vel<<endl;
  cout <<" размер равен: " << siz<<endl;
  cout <<" вес равен: " << wei<<endl;
  cout <<endl<<" вставлен патрон калибра: " << cal<<endl;
}




void Info (Cart &obj) {
  obj.getInfo();
};


int main() {

  Artil crusher(1, 2, 3, 4);
  crusher.setCal(81);

  Riffle shotgun(5, 6, 7);
  shotgun.setCal(2);


  Info(crusher);


  return 0;
}