#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "Queue.h"


int main()
{
    Queue q = queue_create();
    queue_insert_back(q,-198);
    Node *node = node_create(298);
    bool empty= queue_is_empty(q);
    Node *k = queue_pop_front(q);
    Node *l = queue_pop_front(q);


    return 0;
}
