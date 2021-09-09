#include <iostream>
using namespace std;

int main()
{
  
char array[2];


//char *: "This is a test"
//char: 'X'


//const char *a = new char [2]; 
//можно писать в таком виде
//?при перезаполнении так не пишет ошибку



//Указатель на константу
// нельзя менять значение через указатель
const char *c = array; 
//c[1] = 'b';   
c = "345";  


//Константный указатель
// нельзя менять значение самого указателя
char * const d = array;
d[1] = 'b'; 
//d = "345";   


//Константный указатель на константу
// нельзя менять ничего
const char * const e = array;
//e[1] = 'b'; 
//e = "345";   

cout << array[1];


}