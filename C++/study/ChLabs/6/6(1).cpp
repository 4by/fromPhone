#include "sub.h"

template < class fc >
fc check(fc &x, string msg) {
	while(!(cin >> x)) {
		cout << msg << endl;
		cin.clear();
		cin.ignore(numeric_limits < streamsize > ::max(), '\n');
	}
	return x;
}

const string err1 = "параметр должен быть целым положительным числом";
const string err2 = "параметр должен быть целым числом";



void Sub::show() {

	cout << "(стандартный вид): \n";
	for (int i = 0; i <= 1; i++) {
		for (int j = 0; j <= 4; j++) {
			cout << x[i][j];
			cout << " ";
		}
		cout << "\n";
	}
	cout << endl;

}
void Sub::showSt() {

	int tmp,
	tmp2;
	for (int i = 1; i <= 4; i++) {
		if (y[0][i-1] > y[0][i]) {

			for (int j = 0; j <= 1; j++) {
				tmp = y[j][i];
				y[j][i] = y[j][i-1];
				y[j][i-1] = tmp;
			}

			if (i > 1) i = i-2;
		}
	}
	//сортируем массив

	cout << "(начальный вид): \n";
	for (int i = 0; i <= 1; i++) {
		for (int j = 0; j <= 4; j++) {
			cout << y[i][j];
			cout << " ";
		}
		cout << "\n";
	}
	cout << endl;
}
Sub::Sub(int a) {


	for (int i = 0; i <= 4; i++) {
		while (check(x[1][i], err2)) {
			if ((x[1][i] < 1) || (x[1][i] > 5)) cout << "значение не входит в допустимый диапазон" << endl;
			else {
				int t = 0;
				for (int j = 0; j < i; j++) {
					if (x[1][i] == x[1][j]) t = 1;
				}
				if (t == 1)	cout << "в перестановке не может быть повторений" << endl;
				else break;
			}
		};
		//!! сложно для понимания. в общем этот цикл проверяет сразу 3 условия входной переменной
		y[1][i] = x[1][i];
	}
}


int main() {
	int n;
	cout << "введите число перестановок для чисел: (4,3,5,1,2): \n" << endl;
	while (check(n, err1) <= 0) {
		cout << "параметр должен быть целым положительным числом" << endl;
	};
	ofstream out("test.txt");
	for (int i = 1; i <= n; i++) {
		cout << "введите " <<i<< " перестановку: \n" << endl;
		Sub s(0);
		out.write((const char *) &s, sizeof (Sub));
		s.show();
		s.showSt();
	}
	out.close();

	cout<< "Записано " << n << " обьектов класса Sub в файл test.txt\n";


	return 0;
}