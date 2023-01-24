#ifndef NODE_H
#define NODE_H

typedef int Item;
struct Node;
struct Node* node_create(Item);
void* node_delete(struct Node *);
Item node_peek(struct Node* );
#endif
