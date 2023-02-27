#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>
#include <stdlib.h>
#define LEN 100


enum Order{
    ASCENDING =1,
    DESCENDING = -1
};

void word_splitter(void);
void print_arr_elements(char *[]);
void bubble_sort(char ** ptr, enum Order );
int puts_my(const char * arr);
int strcmp_my(const char*  , const char* );
int ** create_2d_Arr(int , int );
void swap_pointers(char**  , char ** );
int strcmp_my(const char*  , const char*);
int strcmp_my(const char*  , const char* );
void read_till_end(int (*)(int),char []);
int strlen_my(const char*);
void store_N_chars(char* , int );
bool is_within(char [], char );
char* sub_string(char* , const char* );
double power_s(double , int);



int return_char(int ch){
    return ch;
}
int main(int argc , char *argv[]){





    int **lis = create_2d_Arr(5,7);
    double d=0,e=-19,f=71;

    //scanf("%lf %*lf %lf",&d,&e,&f);

    if(argc > 2 ){
        printf("You entered an incorrect number of inputs\n");
        exit(EXIT_FAILURE);
    }


    if(!strcmp_my(argv[1],"-p")){
        read_till_end(return_char,arr);
    }
    else if(!strcmp_my(argv[1],"-u")){
        read_till_end(toupper,arr);
    }
    else if(!strcmp_my(argv[1],"-l")){
        read_till_end(tolower,arr);
    }

     //double k = power_s(atof(argv[1]),atoi(argv[2]));
    //printf("The resulting value is %.2f\n",k);
    }

   // char *pos = sub_string(argv[1],argv[2]);
   // puts( pos ? pos:"It was not a substring");


    #ifdef DEBUG
    char arr[LEN]={0};

    if(argc != 3){
        printf("You entered an incorrect number of inputs\n");
        exit(EXIT_FAILURE);
    }
    bool contains = is_within(argv[1],argv[2][0]);

    printf("Does the string \"%s\" contain the character '%c' ? %s\n",argv[1],argv[2][0],contains ? "Yes!!":"No!!");
    #endif // DEBUG

    //store_N_chars(arr,5);
    //printf("The length of the array is %d\n",strlen_my(arr));
    //char *str = "How long am I ?";



int strlen_my(const char* string){
    int i =0;
    while(string[i++]!='\0');
    return i-1;
}

void store_N_chars(char* arr, int n){

    int chars_so_far = 0;

    while(arr[chars_so_far++]=getchar(), chars_so_far<n);
    arr[chars_so_far]='\0';

}

bool is_within(char arr[], char ch){

    while(*arr != '\0'){
        if(*arr++ == ch)
            return true;
    }
    return false;
}

char* sub_string(char* str1, const char* str2){

    char* head_pointer = str1;
    int curr_super=0,curr_sub=0,num_compares=0;

    while(*head_pointer){
        while(true){
            if(str2[curr_sub++] == '\0'||head_pointer[curr_super++] != str2[curr_sub-1]){
                ++num_compares;
                break;
            }


        }

        if(!str2[curr_sub-1]){
            printf("Num of iterations is %d\n",num_compares);
            return head_pointer;
        }

        head_pointer++;
        curr_super=curr_sub=0;
    }

    printf("Num of iterations is %d\n",num_compares);
    return NULL;

}


double power_s(double num , int power){
    if(power<0)
        exit(EXIT_FAILURE);
    if(power == 0)
        return 1;

    double half_power = power_s(num,power/2);
    return half_power * half_power * ( power%2 ? num:1);


}



 void read_till_end(int (*a)(int),char buffer[]){
    //int x = getchar();
    //printf("Value is %c %d ",x,x==EOF);
    int i = 0;
    char ch;
    while((ch = getchar())!= 'r')
        buffer[i++] = (*a)(ch);

    puts(buffer);

 }

 int strcmp_my(const char* a , const char* b){
    int i =-1;
    while (i++,a[i] == b[i]){
        if(!a[i])
            return 0;
    }

    if(a[i] > b[i])
        return -1;
    return 1;

 }



 int** create_2d_Arr(int rows, int cols){

    int **arr;

    arr = (int**) malloc(rows * sizeof(int*));

    for (int i = 0; i<rows; i++){
        arr[i] = malloc(cols * sizeof(int));
    }

    return arr;
 }


void swap_pointers(char** a , char ** b){
    char *temp = *a;
    *a= *b;
    *b=temp;

 }

void print_arr_elements(char *a[]){
    int i =0;
    while (a[i]){
        puts(a[i]);
        i++;
    }

 }

 void bubble_sort(char ** ptr, enum Order a){
     int i =0;
     int cmp_result;
     char* end = NULL;
     while(ptr[0] != end){


     while(ptr[i+1] != end){
            iterations++;
        cmp_result=a*strcmp_my(ptr[i],ptr[i+1]);

        if(cmp_result<0){
            swap_pointers(&ptr[i],&ptr[i+1]);
        }
        i++;

    }
        end = ptr[i];
        i=0;
     }

 }

 int puts_my(const char * arr){
    int count=0;
    while (*arr != '\0') {
        putchar(*arr);
        ++count;
        arr++;
    }


    return count;
 }


 int strcmp_my_1(const char* a , const char* b){
    int i =-1;
    while (i++,a[i] == b[i]){
        if(!a[i])
            return 0;
    }

    if(a[i] > b[i])
        return -1;
    return 1;

 }

 void word_splitter(void){
    /***************

    Splits keyboard input into words and stores in an array, using spaces as a delimiter(whitespace, tabs and new line

    ************/

    char arr[LEN];
    char ch;
    bool already_new_line=false;
    scanf("%s",arr);
    fputs(arr,stdout);
    while((ch=getchar())!='\n'){
        if(ch != '\t'&& ch !=' ' ){
            putchar(ch);
            already_new_line=false;
        }
        else {
            if(!already_new_line){
                printf("\n");
            }
            already_new_line=true;
        }
    }

}
