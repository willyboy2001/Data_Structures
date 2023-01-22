
#ifndef STACK_H
#define STACK_H
#include <stdbool.h>


typedef struct {
    int top;
    int MAX_SIZE;
    int len;
    int *content;


} Stack;


void stack_initialise(Stack *s,int);
int peek(Stack* );
int pop(Stack*);
int push(Stack*, int);
int stack_max_size( Stack *);
int stack_size(Stack *);
bool stack_empty(Stack* );
bool stack_full(Stack *);
void stack_state(Stack* );


#endif // STACK_H
