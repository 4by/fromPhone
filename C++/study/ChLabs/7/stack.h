#include <iostream>
using namespace std;

template < class type1 > class Stack {
  type1* stck;
  int SIZE;
  public:
   /////////////////////////////////////
   //ортодоксально-каноническая форма://
   /////////////////////////////////////
   Stack(): stck(new type1[3]), SIZE(3) {
   	cout<<"по умолчанию массив имеет 3 элемента";
   };
  ~Stack() {};
   Stack(const Stack& other) {
  	stck = other.stck;
  	SIZE = other.SIZE;
   }
   Stack& operator = (const Stack& other) {
  	stck = other.stck;
  	SIZE = other.SIZE;
   	return *this;
   }
   /////////////////////////////////////
  
  Stack(int a);
  void put(int i, type1 j);
  void sort();
  type1 get(int i);
};