#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	
	int i, n[5]={1, 2, 3, 4, 5};

	ofstream out("test.txt");
	out.write((const char *) &n, sizeof n);
	out.close();

	for (i=0; i<5; i++)	n[i]=0;
  //занулили массив

	ifstream in("test.txt");
	in.read((char *) &n, sizeof n);
	//?почему тут n а не n[i]
	in.close();

	for(i=0; i<5; i++)	cout << n[i] << " ";


	return 0;
}