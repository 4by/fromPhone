#include <iostream>
#include <fstream>
using namespace std;

class Sub
{

  int x[2][5] = {{
    4,
    3,
    5,
    1,
    2
  },
    {}};
  int y[2][5] = {{
    4,
    3,
    5,
    1,
    2
  },
    {}};

  public:
   /////////////////////////////////////
   //ортодоксально-каноническая форма://
   /////////////////////////////////////
   Sub() {}; //"фиктивный" конструктор для забития массива объектов
  ~Sub() {};
   Sub(const Sub& other) {
   	copy(&other.x[0][0], &other.x[0][0]+2*5, &x[0][0]);
   	copy(&other.y[0][0], &other.y[0][0]+2*5, &y[0][0]);
   }
   Sub& operator = (const Sub& other) {
   	copy(&other.x[0][0], &other.x[0][0]+2*5, &x[0][0]);
   	copy(&other.y[0][0], &other.y[0][0]+2*5, &y[0][0]);
   	return *this;
   }
   /////////////////////////////////////
  
  Sub(int a);
  //конструктор для ручного ввода
  Sub(int a, int b, int c, int d, int e);
  friend Sub operator*(Sub &obj1, Sub &obj2);
  void show();
  void showSt();
};