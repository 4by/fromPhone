#include <iostream>
#include <strstream>
using namespace std;

	char s[]="This is a test array\23\22\21\a\t\n";
	char ch, str[80], iostr[80], *p;
	int a, b;
char const *o="hello there\xfe\xff\n";
char const *k="hello there\xfe\xff\n";

int main()
{

	strstream hm(iostr, sizeof(iostr));
	while(*o) hm.put(*o++);
	while (hm) {
		hm.get(ch);
		cout << ch;
	// или сразу:
	//cout<<iostr<<endl;
	}
  // если мы знаем размер массива
  

	ostrstream outs;
	// динамическое размещение массива
	while(*k) outs.put(*k++);
	cout << outs.str();


  istrstream ins(s);
  while (ins) {
//	while (!ins.eof()) {
		ins.get(ch);
		cout << ch;
	}
	

	return 0;
}




  