#include <iostream>
using namespace std;


class Point
{
  public:


 /////ортодоксально-каноническая форма:
  Point(int a = 0, int b = 0): x(a),
  y(b) {}
  ~Point() {}
  Point(const Point& other) {}
  Point& operator = (const Point& other) {
    if(this == &other)
    return *this;
    x = other.x;
    y = other.x;
    return *this;
  }
  //////////

  int getX() {
    return x;
  }
  int getY() {
    return y;
  }
  void setXY(int a, int b) {
    x = a;
    y = b;
  }



  private:
  int x,
  y;
};



int main() {
  Point first(1, 2);
  Point second(first);
  second.setXY(3, 3);
  cout <<first.getX() << " " << second.getX() << endl;
  second = first;
  cout <<first.getX() << " " << second.getX() << endl;


  return 0;
}