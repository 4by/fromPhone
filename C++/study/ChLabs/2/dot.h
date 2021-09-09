#include <iostream>
using namespace std;

class Dot
{
	int mas,
	t;
	int v[3],
	c[3],
	f[3];
	
	public:
	/////////////////////////////////////
	//ортодоксально-каноническая форма://
	/////////////////////////////////////
	Dot() {
  cout << "тело создано" << endl;
};
	~Dot() {
  cout << "тело уничтожено" << endl;
};
	Dot(const Dot& other)	{
		mas = other.mas;
		t = other.t;
		copy(other.v, other.v+sizeof(other.v)/sizeof(*other.v), v);
		copy(other.c, other.c+sizeof(other.c)/sizeof(*other.c), c);
		copy(other.f, other.f+sizeof(other.f)/sizeof(*other.f), f);
		cout << "тело скопировано" << endl;
	};
	Dot& operator = (const Dot &other) {
		mas = other.mas;
		t = other.t;
		copy(other.v, other.v+sizeof(other.v)/sizeof(*other.v), v);
		copy(other.c, other.c+sizeof(other.c)/sizeof(*other.c), c);
		copy(other.f, other.f+sizeof(other.f)/sizeof(*other.f), f);
		return *this;
	};
	/////////////////////////////////////

	void enter();
	void change();
	void show() const;
};