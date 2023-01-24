#include "Node.h"
#include "Node_def.h"
#include <stdlib.h>


struct Node* node_create(Item val){
    struct Node *node = malloc(sizeof(struct Node));
    node->next = NULL;
    node->val = val;
    return node;

}

void*  node_delete(struct Node *node){
    free(node);
    return NULL;
}

Item node_peek(struct Node *node){
    return node->val;
}



