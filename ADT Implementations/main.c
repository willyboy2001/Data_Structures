#include <stdio.h>
#include <stdlib.h>
#include "stack.h"
#define MAX_SIZE 1
int main()
{
    Stack rack;

    stack_initialise(&rack,MAX_SIZE);


    push(&rack , 89);
    push(&rack , -1);
    push(&rack , 32);
    push(&rack , 10);
    push(&rack , -29);
    pop(&rack);
    stack_state(&rack);

    pop(&rack);

    #define  run 1
    #if run
    push(&rack , 100);
    push(&rack , 89);
    push(&rack , 819);
    push(&rack , 189);
    push(&rack , -89);
    push(&rack , 98);
    push(&rack , -192);
    pop(&rack);

    #endif

    int k = rack.content[3];
    printf("The value of k is %d\n",k);
    stack_state(&rack);
    return 0;
}
