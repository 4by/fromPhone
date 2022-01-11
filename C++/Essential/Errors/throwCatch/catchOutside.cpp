#include <iostream>
using namespace std;


int qq () {
       
   //с void тоже самое
 //просто убрать return
      
        int num2;
        cout <<"Enter the second number:";
        cin >> num2;
        
    
        if(num2 == 0) throw 1;
        cout <<"Result:"<< num2; 
    return 0;
  
}


int main() {
    
 try {qq();}   
    catch(...) {
        cout <<"Division by zero!";
    }
   
}
