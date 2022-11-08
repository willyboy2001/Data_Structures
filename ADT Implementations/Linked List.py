class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next = next_node
    def __str__(self):
        return str(self.value)


class LinkedList:
    def __init__(self, values=None):
        self.head = None
        self.tail = None
        if values is not None:
            self.add_multiple_nodes(values)
            
    def __str__(self):
        return ' -> '.join([str(node) for node in self])
    
    def __len__(self):
        count = 0
        node = self.head
        while node:
            count += 1
            node = node.next
        return count
    
    def __iter__(self):
        current = self.head
        while current:
            yield current
            current = current.next
            
    @property
    def values(self):
        return [node.value for node in self]
    
    def add_node(self, value):
        if self.head is None:
            self.tail = self.head = Node(value)
        else:
            self.tail.next = Node(value)
            self.tail = self.tail.next
        return self.tail
    
    def add_multiple_nodes(self, values):
        for value in values:
            self.add_node(value)
            
    def add_node_as_head(self, value):
        if self.head is None:
            self.tail = self.head = Node(value)
        else:
            self.head = Node(value, self.head)
        return self.head
    
    def reverse_list_up_to(self,curr_node,end_node=None):
        
        if(curr_node.next is end_node):
            self.head= curr_node
            return curr_node
        
        tail = self.reverse_list_up_to(curr_node.next,end_node)
        curr_node.next= None
        tail.next = curr_node
        self.tail=curr_node
        
        
        for x in iter(self):
            print (x.value,end= ' -> ')
        print('\n')
        return curr_node
    
    def reverse_in_middle(self,start_index,end_index):
        
        
        
        if(end_index <start_index):
            raise Exception('The operation is invalid')
        
        if((start_index <1 )or (end_index >len(self)) ):
            raise Exception('Out of Bounds. Check your inputs')
        counter=1 
        prev= None
        start_node= end_node = self.head
        ori_head=self.head 
        ori_tail= self.tail
        length = len(self)
        
        while counter <= end_index:
            end_node= end_node.next
            
            if(counter<start_index):
                prev= start_node
                start_node= start_node.next
            
            counter+=1
            
        
        tail= self.reverse_list_up_to(start_node,end_node)
        
        if(start_index>1):
            prev.next=self.head
            self.head=ori_head
        if(end_index<length):
            tail.next=end_node
            self.tail=ori_tail
        
                
        print(self.tail.value,ori_tail.value)
