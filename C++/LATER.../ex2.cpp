//this is a piece of code on my lecture notes   
#include <iostream>
#include <string>
using namespace std;
int read_int(const string& prompt);

int main()
{
    int n;
    n=read_int("Enter a number: ");
    cout<<"n: "<<n<<endl;

}

int read_int(const string& prompt){
    cin.exceptions(ios_base::failbit);//Why this line "exceptions" different from the next "exception"
    int num=0;
    while(true){
        try{
            cout<<prompt;
            cin>>num;
            return num;
        }catch(exception ex)// what does "exception" here mean?
        {
            cout<<"Bad numeric string--try again\n";
            cin.clear();
            cin.ignore();
        }
    }
}