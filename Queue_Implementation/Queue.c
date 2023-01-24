
#include <stdlib.h>
#include <stdio.h>
#include "Queue.h"
#include "Node_def.h"


struct Queue_type{
    Node* head;
    Node* tail;
} ;


Queue queue_create(void){

    Queue q = malloc(sizeof(struct Queue_type));
    q->head = q->tail = NULL;
    return q;
}

void* queue_destroy(Queue q){

    Node * curr = q->head;
    Node * next;

    while (curr != NULL){
        next = curr->next;
        node_delete(curr);
        curr= next;
    }

    free(q);
    return NULL;
}


void queue_insert_front(Queue q, Item val){
    Node *new_node = node_create(val);
    if(queue_is_empty(q)){
        q->tail = new_node;
    }
    new_node->next = q->head;
    q->head= new_node;

}

void queue_insert_back(Queue q, Item val){
    Node *new_node = node_create(val);
    if(queue_is_empty(q)){
        q->head = new_node;
    }
    else{
    q->tail->next = new_node;
    }
    q->tail= new_node;
}


bool queue_is_empty(Queue q){
    return (q->head == NULL);
}

Item queue_peek_front(Queue q){
    return node_peek(q->tail);
}

Item queue_peek_back(Queue q){
    return node_peek(q->tail);
}

Node* queue_head(Queue q){
    return q->head;
}

Node* queue_tail(Queue q){
    return q->tail;
}

Node* queue_pop_front(Queue q){
   if(queue_is_empty(q)){
    printf("Empty Queue, Cannot perform operation");
    exit(EXIT_FAILURE);
   }

   Node* new_head = q->head->next;
   q->head->next=NULL;
   Node* old_head = q->head;
   q->head= new_head;
   return old_head;

}

