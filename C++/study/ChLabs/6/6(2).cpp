#include "sub.h"


Sub::Sub(int a, int b, int c, int d, int e) {
	try {
		int z[5] = {
			a,
			b,
			c,
			d,
			e
		};
		for (int i = 0; i <= 4; i++) {
			y[1][i] = x[1][i] = z[i];
			if ((x[1][i] < 1) || (x[1][i] > 5)) throw 3;
			for (int j = 0; j < i; j++) {
				if (x[1][i] == x[1][j]) throw 2;
			}
		}
	}
	catch(int i) {
		if (i == 2) cout<<"Выход из программы. В перестановке не может быть повторений \n";
		if (i == 3) cout<<"Выход из программы. Значение не входит в допустимый диапазон \n";
		exit(0);
	}
}

Sub operator*(Sub &obj1, Sub &obj2) {

	int y[5];

	for (int i = 0; i <= 4; i++) {
		for (int j = 0; j <= 4; j++) {
			if (obj1.x[1][i] == obj2.x[0][j])
			y[i] = obj2.x[1][j];
		}
	}
	Sub mult(y[0], y[1], y[2], y[3], y[4]);
	return mult;
}




int main() {

	int s = (sizeof(Sub));

	ifstream in("test.txt");
	in.seekg(0, ios::end);
	int	n = in.tellg();
	cout<< "Считано " << n/s << " обьекта класса Sub из файла test.txt\n";
	Sub *array = new Sub[(n/s)];
	in.seekg(0, ios::beg);
	for(int i = 0; i < (n/s); i++) in.read((char *)&array[i], s);
	in.close();
	//считали данные из первой программы и забили в массив

	Sub mult(4, 3, 5, 1, 2);
	for (int i = 0; i < (n/s); i++)	mult = mult*array[i];
	//mult.show();
	//нашли произведение всех подстановок

	ofstream out("test2.txt");
	out.write((const char *) &mult, sizeof (Sub));
	for (int i = ((n/s)-1); i >= 0; i--)	out.write((const char *) &array[i], sizeof (Sub));
	out.close();

	cout<< "Записано произведение  " << n/s << " обьектов класса Sub и они сами в обратном порядке в файл test2.txt\n";

	return 0;
}