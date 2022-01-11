#include <iostream>
#include <fstream>
using namespace std;

class sub
{
  int x;
  
  public:
  sub() {} 
  //фиктивный конструктор для забития массива объектов
 
  sub(int a) 
  :x(a)
  {} 
  
  void show() {cout << x << "\n";}
};


 int n, s = (sizeof(sub));
  
int main()
{
	
 
  ofstream out("test.txt");
  for (int i=1; i<=3; i++) {
  sub s(i);
	out.write((const char *) &s, sizeof (sub));
  }
	out.close();
  


ifstream in("test.txt");
	in.seekg(0,ios::end);
	int	n=in.tellg();

	cout<< "Schitano  " << n/s << " objects of class complexx\n";

	sub *array = new sub[(n/s)];

  in.seekg(0,ios::beg);


	for(int i=0; i<(n/s); i++) in.read((char *)&array[i], s);

	

	in.close();

	for (int i=0; i<(n/s); i++)	 array[i].show();

	

	return 0;
}