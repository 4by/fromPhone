#include "dot.h"

template < class fc >
fc check(fc &x, string msg) {
	while(!(cin >> x)) {
		cout << msg << endl;
		cin.clear();
		cin.ignore(numeric_limits < streamsize > ::max(), '\n');
	}
	return x;
}

const int m = 2;
const string err1 = "параметр должен быть целым положительным числом";
const string err2 = "параметр должен быть целым числом";



void Dot::enter() {
	cout << "введите массу тела"<<endl;
	while (check(mas, err1) <= 0) {
		cout << err1 << endl;
	};
	cout << "введите координаты тела" << endl;
	for (int i = 0; i <= m; i++) {
		c[i] = check(c[i], err2);
	}
	cout << "введите координаты вектора скорости тела"<<endl;
	for (int i = 0; i <= m; i++) {
		v[i] = check(v[i], err2);
	}
	cout << "начальное положение и начальная скорость тела заданы" << endl;
}

void Dot::change() {
	cout << "введите координаты вектора силы, действующей на тело" << endl;
	for (int i = 0; i <= m; i++) {
		f[i] = check(f[i], err2);
	}
	cout << "введите время в течение которого сила действовала на тело" << endl;
	while (check(t, err1) <= 0) {
		cout << err1 << endl;
	};
	for (int i = 0; i <= m; i++) {
		c[i] = c[i] + v[i] * t + f[i] / mas * t *t/ 2;
		v[i] = v[i] + f[i] * t / mas;
	}
}

void Dot::show() const {
	cout << "координаты тела после действия силы:";
	for (int i = 0; i <= m; i++)
	cout << endl << c[i];
	cout << endl << "скорость тела после действия силы: ";
	for (int i = 0; i <= m; i++)
	cout << endl << v[i];
	cout << endl;
}



int main() {
	Dot m;

	m.enter();
	m.change();
	m.show();
}