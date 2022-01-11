#include <iostream>
using namespace std;

double div (double a, double b) {
	try {
		if(b == 0) throw 1;
		return a/b;
	}
	catch(int) {
		cout <<"совместная неопределенная/несовместная система - главный определитель равен нулю. выход из программы";
		exit(0);
	}
}

double def (double a[3][3]) {
	double b;
	b = (a[0][0]*a[1][1]*a[2][2]) + (a[0][1]*a[1][2]*a[2][0])+ (a[0][2]*a[1][0]*a[2][1]);
	b = b-(a[0][2]*a[1][1]*a[2][0]) - (a[0][0]*a[1][2]*a[2][1]) - (a[0][1]*a[1][0]*a[2][2]);
	return b;
}

void kram (double a[3][3], double b[3], double (&c)[3]) {
	double m1[3][3],
	m2[3][3],
	m3[3][3];
	double x1,
	x2,
	x3;

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			m1[i][j] = a[i][j];
			m2[i][j] = a[i][j];
			m3[i][j] = a[i][j];
		}}

	for (int i = 0; i < 3; i++) {
		m1[i][0] = b[i];
		m2[i][1] = b[i];
		m3[i][2] = b[i];
	}

	x1 = div(def(m1), def(a));
	x2 = div(def(m2), def(a));
	x3 = div(def(m3), def(a));


	c[0] = x1;
	c[1] = x2;
	c[2] = x3;

}



int main() {

	double x[3][3] = {{
		2,
		5,
		4
	},
		{
			1,
			3,
			2
		},
		{
			2,
			10,
			9
		}};
	double y[3] = {
		30,
		150,
		110
	};
	double z[3] = {
		1,
		1,
		1
	};

	kram(x, y, z);

	cout<<z[0]<<", "<<z[1]<<", "<<z[2];

}