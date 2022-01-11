#include <iostream>
using namespace std;

class Mat
{
	double x[2][2];
	public:
	/////////////////////////////////////
	//ортодоксально-каноническая форма://
	/////////////////////////////////////
	Mat() {
  cout << "матрица создана" << endl;
};
	~Mat() {
  cout << "матрица уничтожена" << endl;
};
	Mat(const Mat& other) {
		copy(&other.x[0][0], &other.x[0][0]+2*2, &x[0][0]);
  cout << "матрица клонирована" << endl;
	}
	Mat& operator = (const Mat& other) {
		copy(&other.x[0][0], &other.x[0][0]+2*2, &x[0][0]);
		return *this;
	}
	/////////////////////////////////////

	Mat operator+(Mat &obj);
	friend Mat operator*(Mat &obj1, Mat &obj2);
	friend Mat operator*(Mat &obj, double i);
	friend Mat operator*(double i, Mat &obj);
	void enter();
	void show();
};