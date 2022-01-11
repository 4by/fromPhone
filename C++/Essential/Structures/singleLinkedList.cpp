#include <iostream>
using namespace std;

template <class type1>
struct LIST
{
	type1 Object;
	struct LIST *Next;
};

template <class type1>
int toBegin(LIST <type1> **Item, type1 Object)
{

 LIST <type1> *p = new LIST <type1>;
  p->Object = Object;
	p->Next = *Item;
	*Item = p;
	
	return 1;
}

template <class type1>
int toEnd(LIST <type1> **Item, type1 Object)
{
	
	LIST <int> *EndSeeker = *Item;
	//таким синтаксисом мы присвоили изначально так:
	// *EndSeeker = **Item = *List (сам член структуры)
  // далее EndSeeker будет меняться
  // это такой "бегунок" по Next - ам
  
   LIST <int> *p = new LIST <int>;
    p->Object = Object;
    
	if (NULL == *Item) 
		//указатель на пустой объект равен нулю
	{
		p->Next = *Item;
		*Item = p;
	}


	
	else
	//делаем то же самое, но меняем EndSeeker
	{
	while(EndSeeker->Next != NULL) EndSeeker = EndSeeker->Next;
  	p->Next = EndSeeker->Next;
		EndSeeker->Next = p;
	}
	
		


	return 1;
}

template <class type1>
void Show(LIST <type1> **Item)
{
 LIST <type1> *t = *Item;
	while(t != NULL)	{
		cout <<  t->Object << " ";
		t = t->Next;
	}
cout << endl;
}


template <class type1>
void Delete(LIST <type1> **Item, type1 i)
{
 LIST <type1> *p = *Item;
 while(*Item != NULL && (*Item)->Object == i)	{*Item = (*Item) -> Next;}
 while(p != NULL)
	{
		while(p->Next != NULL && p->Next->Object == i)	p->Next = p -> Next -> Next;
		p=p->Next;
	}
		//идея изменения такая:
  //	p->Next = ... изменяет глобальный объект
	//  p=... просто переводит указатель p

}

	int q;string a;
	LIST <string> *List = NULL, *p;

int main()
{
  
  cout << "\n значения односвязного листа по умолчанию имеют тип string \n";   
  
  cout << " введите количество значений в листе \n";
  cin >> q;
  
  cout << " введите значения: \n";

for (int i=0; i<q ;i++) {
  cin >> a;
  toBegin(&List, a);
}

cout << "введите элемент, который надо удалить \n";
  cin >> a;
  Delete(&List, a);
Show(&List);
	return 0;
}
