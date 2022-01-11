#include <iostream>
using namespace std;

class Mat {
  int** c,
  a,
  b;
  public:

  /////////////////////////////////////
  //ортодоксально-каноническая форма://
  /////////////////////////////////////
  Mat(): c(new int*[2]) {
    for(int i = 0; i < 2; i++) c[i] = new int[2];
    a = 2; b = 2;
  }
  //конструктор по умолчанию создает матрицу 2х2
  ~Mat() {
    delete[] c;
  }
  Mat(const Mat& other) {
    c = other.c;
  }
  Mat& operator = (const  Mat& other) {
    if(this == &other)
    return *this;
    c = other.c;
    return *this;
  }
  /////////////////////////////////////

  Mat(int x, int y): c(new int*[x]) {
    for(int i = 0; i < x; i++) c[i] = new int[y];
    a = x; b = y;
  }
  void put(int x, int y, int z) {
    try {
      if ((x>>a) || (y >= b)) throw 1;
      c[x][y] = z;
    }
    catch(int) {
      cout<<"выход из программы из-за ошибки: аргумент не входит в область массива";
      exit(0);
    }
  }
  void show(int x, int y) {
    try {
      if ((x>>a) || (y >= b)) throw 1;
      cout<<c[x][y];
    }
    catch(int) {
      cout<<"выход из программы из-за ошибки: не входит в область массива";
      exit(0);
    }
  }
  void show() {
    for (int i = 0; i < a; i++) {
      cout << "\n";
      for (int j = 0; j < b; j++) {
        cout << c[i][j];
        cout << " ";
      }
    }
    cout << endl<<endl;
  }
  friend Mat operator*(Mat &obj1, Mat &obj2);
};

Mat operator*(Mat &obj1, Mat &obj2) {
  Mat mult(obj1.a, obj2.b);
  try {
    if (obj1.b != obj2.a) throw 1;
    for (int i = 0; i < obj1.a; i++) {
      for (int j = 0; j < obj2.b; j++) {
        mult.c[i][j] = 0;
        for (int k = 0; k < obj2.a; k++) {
          mult.c[i][j] += obj1.c[i][k]*obj2.c[k][j];
        }
      }
    }
    return mult;
  }
  catch(int) {
    cout<<"выход из программы из-за ошибки: матрицы не перемножаемы";
    exit(0);
  }
}

int main() {
  Mat p1(3, 3);
  Mat p2(3, 3);
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      p1.put(i, j, i+j);
      p2.put(i, j, i+j);
    }}
  Mat p3 = p1*p2;
  p3.show();
  return 0;
}