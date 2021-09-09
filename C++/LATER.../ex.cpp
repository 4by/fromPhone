#include <iostream>
using namespace std;


int main(void)
{
    int n = 0;
    cin.exceptions(istream::failbit | istream::badbit);

    try
    {
        cin >> n;
    }
    catch(istream::failure e)
    {
        cerr << 1 << endl;

    }
    return 0;
}