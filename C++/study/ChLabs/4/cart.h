#include <iostream>
using namespace std;

class Transport {


  public:
  /////////////////////////////////////
  //ортодоксально-каноническая форма://
  /////////////////////////////////////
  Transport(): cal(0) {};
  ~Transport() {};
  Transport(const Transport& other) {cal = other.cal;}
  Transport& operator = (const Transport& other) {
  	cal = other.cal;
  	return *this;
  }
  /////////////////////////////////////
  
  Transport(double a);
  virtual void getInfo();
  //могли бы сделать виртуальную функцию приватной
  void setCal(double a);
};

class Artil: public Transport {

  double vel,
  ang,
  len;
  int num;

  public:
  
  /////////////////////////////////////
  //ортодоксально-каноническая форма://
  /////////////////////////////////////
  Artil(): vel(0), ang(0), len(0), num(0) {}
  ~Artil();
  Artil(const Artil& other) {
  	cal = other.cal;
  	vel = other.vel;
  	ang = other.ang;
  	len = other.len;
  	num= other.num;
  }
  Artil& operator = (const Artil& other) {
  	cal = other.cal;
  	vel = other.vel;
  	ang = other.ang;
  	len = other.len;
  	num= other.num;
  	return *this;
  }
  /////////////////////////////////////

  void getInfo();
  Artil(double a, double b, double c, int d);
};

class Riffle: public Transport {

  double vel,
  siz,
  wei;

  public:
  /////////////////////////////////////
  //ортодоксально-каноническая форма://
  /////////////////////////////////////
  Riffle(): vel(0), siz(0), wei(0) {}
  ~Riffle();
  Riffle(const Riffle& other) {
  	cal = other.cal;
  	vel = other.vel;
  	siz = other.siz;
  	wei = other.wei;
  }
  Riffle& operator = (const Riffle& other) {
  	cal = other.cal;
  	vel = other.vel;
  	siz = other.siz;
  	wei = other.wei;
  	return *this;
  }
  /////////////////////////////////////
  Riffle(double a, double b, double c);
  void getInfo();
};