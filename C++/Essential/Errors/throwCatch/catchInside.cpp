#include <iostream>
using namespace std;


int qq () {
 //с void тоже самое
 //просто убрать return
        
        int num2;
        cout <<"Enter the second number:";
        cin >> num2;
        
    try {
        if(num2 == 0) throw 1;
        cout <<"Result:"<< num2; 
    }
  
    catch(...) {
        cout <<"Division by zero!";
        return 0;
        //в void можно делать exit(0);
    }
   
  return 0;
}


int main() {
    qq();
}

