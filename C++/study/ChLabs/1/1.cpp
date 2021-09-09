#include <iostream>
using namespace std;

template < class fc >
fc check(fc &x, string msg) {
	while(!(cin >> x)) {
		cout << msg << endl;
		cin.clear();
		cin.ignore(numeric_limits < streamsize > ::max(), '\n');
	}
	return x;
}


template < class type1 >
struct LIST
{
	type1 Object;
	struct LIST *Next;
};

template < class type1 >
LIST < type1 >* toBegin(LIST < type1 > *Item, type1 Object) {
	LIST < type1 > *p = new LIST < type1 >;
	p->Object = Object;
	p->Next = Item;
	return p;
}

template < class type1 >
void Show(LIST < type1 > *Item) {
	LIST < type1 > *t = Item;
	while(t != NULL) {
		cout <<  t->Object << " ";
		t = t->Next;
	}
	cout << endl;
}

template < class type1 >
LIST < type1 >* DeleteN(LIST < type1 > *Item, type1 i) {
LIST < type1 > *p = new LIST < type1 >;
p->Object = Item->Object;
p->Next = Item->Next;
//создали "клон" Item
LIST < type1 > *s = p;
//редактируя s теперь будет меняться p
if (Item != NULL && Item->Object == i && Item -> Next != NULL && Item -> Next -> Object != i) 
s -> Next = s -> Next -> Next;
while(s != NULL) {
    if (s->Next != NULL && s->Next->Object == i && s->Next->Next != NULL && s->Next->Next->Object != i)	
    s->Next->Next = s->Next->Next->Next;
    s = s->Next;
  }
return p;
}


int main() {

int q;
string a;
LIST < string > *List = NULL;

	cout << "\n значения односвязного листа по умолчанию имеют тип string \n";

	cout << " введите количество значений в листе \n";



	while (check(q, "параметр должен быть целым положительным числом") <= 0) {cout << "параметр должен быть целым положительным числом" << endl;};

	cout << " введите значения: \n";
	for (int i = 0; i < q; i++) {
		cin >> a;
		List = toBegin(List, a);
	}

	cout << "вот готовый список \n";
	Show(List);

	cout << "введите элемент, после которого надо удалять отличный от данного элемент \n";
	cin >> a;
 List = DeleteN(List, a);
	Show(List);



	return 0;
}