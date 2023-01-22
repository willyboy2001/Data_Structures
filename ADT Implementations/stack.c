#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include "stack.h"



void stack_initialise(Stack *s,int max_size){
     s->content = (void *) malloc(max_size*sizeof(int));
     s->MAX_SIZE = max_size;
     s->len=0;

}

int peek(Stack* s){
    return (*s).top;
}

int push(Stack* s, int num){
    if(stack_full(s)){
       s->MAX_SIZE *=2;
       s->content= realloc(s->content, (s->MAX_SIZE)* sizeof(int));
       assert(s->content);
    }
     s->content[s->len] = num;
     s->len ++;
     s->top=num;
     return s->len;
}

int pop(Stack* s){

    if(stack_empty(s)){
        //throw exception("Stack is empty. Invalid")
        exit(1);
    }


    (s->len) --;
    s->top = s->content[s->len -1];
    return s->content[s->len];
}

int stack_max_size(Stack* s){
    return s->MAX_SIZE;
}

int stack_size(Stack* s){
    return s->len;
}

bool stack_empty(Stack* s){
    return (s->len == 0);
}

bool stack_full(Stack* s){
    return (s->len == s->MAX_SIZE);
}

void stack_state(Stack *s){
    printf("The stack can hold a maximum of  %d elements. It currently holds %d elements with the topmost being %d\n",s->MAX_SIZE,s->len,s->top);
}


