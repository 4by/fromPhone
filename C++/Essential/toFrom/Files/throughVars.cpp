#include <iostream>
#include <fstream>
using namespace std;

int main() {
  
  cout << "\n\n Direct using various variables \n\n";
  
  char j;
  int i;
  float f;
  char str[80];

 ofstream file_obj("test.txt");
 //ofstream(ввод), создаёт файл
 //ifstream (вывод) и fstream (ввод и вывод) - не создаёт
  file_obj << 10 << " " << 123.23 << "\n";
  file_obj << "This is a short text file.\n";
  file_obj.close();

  ifstream file_obj2("test.txt");
  file_obj2 >> i >> f >> j >> str;
  cout<<f;
  file_obj2.close();
//в одном обьекте file_obj разрешен 
//либо только ввод, либо только вывод


  return 0;
}





	
	
	
	
	
	

	
	











