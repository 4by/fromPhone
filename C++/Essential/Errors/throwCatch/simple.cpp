#include <iostream>
using namespace std;

int main() {
    
        
        
        int num2;
        cout <<"Enter the second number:";
        cin >> num2;
        
     try {
        if(num2 == 0) throw 0;
    }
    catch(...) {
        cout <<"Division by zero!";
    }
        cout <<"Result:"<< num2; 
   
        
}