#include <iostream>
using namespace std;

template < class type1 >
struct LIST
{
  type1 Object;
  struct LIST *Next;
};

template < class type1 >
int toBegin(LIST < type1 > **Item, type1 Object) {
//p должен быть такой же как и входной Item
//входной item должен быть такой же как свойство нэкст
//свойство next может быть только указательным объектом
//меняться изнутри может только если передано по ссылке
//отсюда двойной указатель:
//первый за указательный объект;
//второй за передачу по ссылке;

  LIST < type1 > *p = new LIST < type1 >;
  p->Object = Object;
  p->Next = *Item;
  *Item = p;

  return 1;
}

template < class type1 >
int toEnd(LIST < type1 > **Item, type1 Object) {

  LIST < type1 > *EndSeeker = *Item;
 
  LIST < type1 > *p = new LIST < type1 >;
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

template < class type1 >
void Show(LIST < type1 > **Item) {
  LIST < type1 > *t = *Item;
  while(t != NULL) {
    cout <<  t->Object << " ";
    t = t->Next;
  }
  cout << endl;
}

template < class type1 >
void DeleteN(LIST < type1 > **Item, type1 i) {
  LIST < type1 > *p = *Item;
  if (*Item != NULL && (*Item)->Object == i && (*Item) -> Next != NULL && (*Item) -> Next -> Object != i) {(*Item) -> Next = (*Item) -> Next -> Next;
  }
  while(p != NULL) {
    if (p->Next != NULL && p->Next->Object == i && p->Next->Next != NULL && p->Next->Next->Object != i)	p->Next->Next = p->Next->Next->Next;
    p = p->Next;
  }

}

int q;
string a;
LIST < string > *List = NULL, *p;

int main() {

  cout << "\n значения односвязного листа по умолчанию имеют тип string \n";

  cout << " введите количество значений в листе \n";
  cin >> q;

  cout << " введите значения: \n";

  for (int i = 0; i < q; i++) {
    cin >> a;
    toBegin(&List, a);
  }

  cout << "вот готовый список \n";
  Show(&List);

  cout << "введите элемент, после которого надо удалять каждый отличный от данного элемент \n";
  cin >> a;
  DeleteN(&List, a);
  Show(&List);


  return 0;
}