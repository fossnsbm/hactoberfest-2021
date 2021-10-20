#include <iostream>
using namespace std;

class List{
	private:
		struct Node{
			char alph;
			Node* next = nullptr;
		};
		Node* head;
	public:
		List();
		~List();
		void insertNode(char al);
		void display()const;
};

List::List(){
	head = nullptr;
}

List::~List(){
	Node* temp=nullptr;
	if(head==nullptr){
		cout<<"The list is empty!\n";
	}
	else{
		while(head!=nullptr){
			temp = head;
			head = head->next;
			delete temp;
		}
	}
}

void List::insertNode(char al){
	Node* prevPtr=nullptr;
	Node* nodePtr=nullptr;
	Node* newNode = new Node;
	if(al=='a'){
		al = 'i';
	}
	newNode->alph=al;
	if(head==nullptr){
		head=newNode;
		newNode->next=nullptr;
	}
	else{
		nodePtr=head;
		while(nodePtr!=nullptr){
			prevPtr=nodePtr;
			nodePtr=nodePtr->next;
		}
		prevPtr->next=newNode;
	}
}

void List::display()const{
	Node* nodePtr=nullptr;
	nodePtr=head;
	if(nodePtr==nullptr){
		cout<<"The list is empty!\n";
	}
	else{
		while(nodePtr!=nullptr){
			cout << nodePtr->alph;
			nodePtr=nodePtr->next;
		}
		cout<<endl;
	}
}

int main(){
	List L;
	L.insertNode('a');
	L.insertNode('b');
	L.insertNode('a');
	L.insertNode('c');
	L.insertNode('a');
	L.insertNode('d');
	L.insertNode('a');
	L.insertNode('b');
	L.insertNode('r');
	L.insertNode('a');
	L.display();
	return 0;
}
