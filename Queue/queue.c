#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

typedef struct Node Node; 

Node * create_node(int data) {
    Node *new_node = malloc(1 * sizeof(Node));
    new_node->data = data;
    new_node->next = NULL;

    return new_node;
}

void enqueue(Node **front, int data) {
    if(*front == NULL) {
        *front = create_node(data);
    }else {
        Node *current = *front;

        while(current->next != NULL) {
            current = current->next;
        }

        current->next = create_node(data);
    }
}

void dequeue(Node **front) {
    if(*front == NULL) {
        printf("Dequeue Failed : Empty Queue\n");
        return;
    }

    Node *current = *front;

    *front = current->next;

    int deleted = current->data;

    free(current);

    printf("Dequeued : %d\n", deleted);

}

void peek(Node *head) {
    if(head == NULL) {
        printf("Empty Queue\n");
    }else {
        printf("First Element of the Queue : %d\n", head->data);
    }
}

void print_queue(Node *head) {
    if(head == NULL) {
        printf("Empty Queue!!\n");
        return;
    }
    
    printf("[");

    while(head != NULL) {
        printf(" %d", head->data);

        if(head->next != NULL) printf(",");

        head = head->next;
    }

    printf(" ]\n");
}

int main() {
    Node *queue = NULL;

    enqueue(&queue, 22);
    enqueue(&queue, 45);
    enqueue(&queue, 78);
    enqueue(&queue, 97);
    print_queue(queue);
    dequeue(&queue);
    enqueue(&queue, 17);
    dequeue(&queue);
    peek(queue);
    print_queue(queue);

    return 0;
}