#include <iostream>
#include <vector>

using namespace std;

int main()
{
	vector<int> v;
	cout<< "size = " << v.size() <<endl;
	int i;
	for(i=0; i<10; i++)
		v.push_back(i);
		//push_back выставляет значение в конец таблицы
	cout<< "size now = " << v.size() << endl;
	for(i=0; i<10; i++) cout << v[i] << " ";
	cout << endl;

	cout << "front = " << v.front() << endl;
	cout << "back = " << v.back() <<endl;

	vector<int>::iterator p=v.begin();
	
	p = v.insert(p, 9);
	p = v.insert(p, 8);
//insert вставляет значение перед первым аргументом
//(в данном случае - итератором)

	while(p!=v.end()) {
		cout << *p << " ";
		p++;
	} 
	


	

	return 0;
}