#include <iostream>
using namespace std;

class Base {
public:
	virtual void who(){// определение виртуальной функции
		cout << "Base\n";
	}
};

class first_d: public Base {
	void who(){// определение who применительно к first_d
		cout << "First derivation\n";
	}
};

class second_d: public Base {
  public:
	void who(){// определение who применительно к second_d
		cout << "Second derivation\n";
	}
};


void show_who(Base &r) {
	r.who();
}


int main()
{
	Base *p;
	Base base_obj;
	first_d first_obj;
	second_d second_obj;

	p = &base_obj;
	p->who();
	p = &first_obj;
	p->who();
	p = &second_obj;
	p->who();
	
	
	
second_obj.who();
//так как она в public


//virtual функция значит, что
//с помощью указателя базового класса
//мы можем получить доступ к приватной 
//виртуальной функции дочернего класса
//(при попытке сделать так с обычной:
//ищет вплоть до базового класса)

//также с помощью нее мы можем получить информацию об
//объекте не зная, к какому классу он принадлежит

  show_who(base_obj);
	show_who(first_obj);
	show_who(second_obj);


	return 0;
}