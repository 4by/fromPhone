#include <iostream>
#include <fstream>
using namespace std;

// эти функции работают только с char

  char j;
	char const *p="hello there\n\r\xfe\xff";


int main() {
  
	ofstream out("test.txt");
	while(*p) out.put(*p++);
	out.close();

	ifstream in("test.txt");
	while (in) {
	//while (!in.eof()) {
		in.get(j);
		cout << j;
	}
	in.close();
  return 0;
}





	
	
	
	
	
	

	
	











