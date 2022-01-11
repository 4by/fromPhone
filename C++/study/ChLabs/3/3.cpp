#include "mat.h"

template < class fc >
fc check(fc &x, string msg) {
	while(!(cin >> x)) {
		cout << msg << endl;
		cin.clear();
		cin.ignore(numeric_limits < streamsize > ::max(), '\n');
	}
	return x;
}

const string err1 = "параметр должен быть вещественным числом";



Mat Mat::operator+(Mat &obj) {
	Mat add;
	for (int i = 0; i <= 1; i++) {
		for (int j = 0; j <= 1; j++) {
			add.x[i][j] = this->x[i][j]+obj.x[i][j];
		}
	}
	return add;
}

Mat operator*(Mat &obj1, Mat &obj2) {
	Mat mult;

	for (int i = 0; i <= 1; i++) {
		for (int j = 0; j <= 1; j++) {
			mult.x[i][j] = obj1.x[i][0]*obj2.x[0][j] + obj1.x[i][1]*obj2.x[1][j];
		}
	}
	return mult;

}

Mat operator*(Mat &obj, double p) {
	Mat mult;

	for (int i = 0; i <= 1; i++) {
		for (int j = 0; j <= 1; j++) {

			mult.x[i][j] = (obj.x[i][j])*p;

		}
	}
	return mult;

}

Mat operator*(double p, Mat &obj) {
	Mat mult;

	for (int i = 0; i <= 1; i++) {
		for (int j = 0; j <= 1; j++) {
			mult.x[i][j] = (obj.x[i][j])*p;
		}
	}
	return mult;

}


void Mat::enter() {
	cout << "введите значения клеток: \n" << endl;
	cout << "m[0,0], m[0,1], m[1,0], m[1,1] \n" << endl;
	for (int i = 0; i <= 1; i++) {
		for (int j = 0; j <= 1; j++) {
			check(x[i][j], err1);
		}
	}
}

void Mat::show() {
	for (int i = 0; i <= 1; i++) {
		cout << "\n";
		for (int j = 0; j <= 1; j++) {
			cout << x[i][j];
			cout << " ";
		}
	}
	cout << endl<<endl;
}



int main() {
	Mat m1;
	Mat m2;
	double c1,
	c2;




	m1.enter();
	m2.enter();
	cout << "введите множитель для первой матрицы \n";
	check(c1, err1);
	cout << "введите множитель для второй матрицы \n";
	check(c2, err1);


	Mat sum = m1+m2;
	Mat multMM = m1*m2;
	Mat multMC = m1*c1;
	Mat multCM = c2*m2;



	cout << "первая матрица \n";
	m1.show();
	cout << "вторая матрица \n";
	m2.show();
	cout << "сумма двух матриц \n";
	sum.show();
	cout << "произведение двух матриц \n";
	multMM.show();
	cout << "произведение первой матрицы на число справа\n";
	multMC.show();
	cout << "произведение второй матрицы на число слева\n";
	multCM.show();
}