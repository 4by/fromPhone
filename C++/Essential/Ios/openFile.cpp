#include <//iostream>
#include <fstream>
using namespace std;

     string line;
     char str[1024];
     
int main () {
    
    ifstream MyFile("test.txt", ios::binary);
    MyFile.close();
    
    MyFile.open("test.txt", ios::in);
    while ( getline (MyFile, line) ) {cout << line << '\n';}
    MyFile.close();
  

//ios::ate - указатель сразу на конец файла, но можно переместить
//ios::app - добавление в конец файла и указатель остаётся в конце

//ios::in - возможность ввода
//ios::out - возможность вывода
//(ofstream/ifstream уже содержат в себе эти возможности)

//ios::binary
//ios::nocreate
//ios::noreplace
//ios::trunc - разрушить существующий файл
  
//(ios::in | ios::out) - сочетание
  

}