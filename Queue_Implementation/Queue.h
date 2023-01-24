
#ifndef QUEUE_H
#define QUEUE_H
#include <stdbool.h>
#include "Node.h"

typedef struct Node Node;
typedef struct Queue_type *Queue;


Queue queue_create();
void* queue_destroy(Queue q);
void queue_insert_front(Queue q,Item );
void queue_insert_back(Queue q,Item);
bool queue_is_empty(Queue q);
Item queue_peek_front(Queue q);
Item queue_peek_back(Queue q);
Node* queue_head(Queue q);
Node* queue_tail(Queue q);
Node* queue_pop_front(Queue q);
#endif
