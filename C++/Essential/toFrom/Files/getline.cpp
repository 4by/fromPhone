#include <iostream>
#include <fstream>
using namespace std;

int main () {
    ofstream MyFile1("test.txt");
    
    MyFile1 << "aaa\n";
    MyFile1 << 456;
    MyFile1 << "\n";
    MyFile1 << "bbb\n";
    
    MyFile1.close();
    
    
     string line;
     char str[1024];
     
    
    ifstream MyFile("test.txt");
  
  while (!MyFile.eof())
{
    MyFile.getline(str, 1024, ' ' );
//cin.getline needs to know the size of the buffer because it stores into a char *.
   cout << str;
}
  
    MyFile.close();
    
    
    
   cout<<endl<<"another way" <<endl<<endl;
 //However, you can use std::getline, which stores 
//into a string and can read an arbitrary amount of text.
 
    
    
    
    MyFile.open("test.txt");
    while ( getline (MyFile, line) ) {cout << line << '\n';}
    MyFile.close();
  

}