#include <iostream>
#include <fstream>
using namespace std;

class excl{
	double a;
public:
	excl(double i){
	a=i;
};
	friend ofstream &operator<<(ofstream &stream,excl &c);
};

ofstream &operator<<(ofstream &stream,excl &c) {                  
  stream.write((const char *)&c, sizeof (excl));
	return stream;
}     
// для >> будет то же самое, только ifstream, stream.read


int main()
{
	excl c(1);
	
	ofstream out("test.txt");
	for(int i=0; i<10; i++) out<<c;
	out.close();


	return 0;
}