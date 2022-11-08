class tree_node():
    
    my_set= {'left','right','parent','val'}
    
    def __init__(self, val):
        self.val = val
        self.parent=None
        self.left=None
        self.right= None
        
    
    def __setitem__(self,key,val):
        if(key in tree_node.my_set):
            setattr(self,key,val)
        else:
            raise Exception("Operator not supported")
    
    def __getitem__(self,key):
        if(key in tree_node.my_set):
            return getattr(self,key)
        else:
            raise Exception("Operator not supported")



class bst:
        
        my_set={'root','size'}
        def __init__(self):
            self['root']=None
            self['size']=0
            
        
        def bst_build(self,iterable):    
            if(len(iterable)<1): 
                raise Exception("Wrong Input. Length cannot be negative")
            
            
            if(len(iterable)==1):
                self['root']= tree_node(iterable[0])
                self['size']=1
                return
            
            self.bst_build(iterable[:-1])
            value= iterable[-1]
            
            self.insert(value)
            self['size']+=1
                
        
        def __setitem__(self,key,val):
            if(key in bst.my_set):
                setattr(self,key,val)
            else:
                raise Exception("Operator not supported")
    
        def __getitem__(self,key):
            if(key in bst.my_set):
                return getattr(self,key)
            else:
                raise Exception("Operator not supported")
        
        def insert(self,value):
            
            if(self.search(value)):
                raise Exception('This value is already in the tree')
            node = tree_node(value)
            curr=self['root']
            prev=None
            
            while(curr):
                prev=curr
                if(curr['val']>value):
                    curr=curr['left']
                else:
                    curr=curr['right']
            
            if (prev.val>value):
                prev['left']=node
                node['parent']=prev
            else:
                prev['right']=node
                node['parent']=prev
            
        
        def search(self,value):
            
            curr= self['root']
            
            while(curr):
                if(curr['val']==value):
                    return curr
                elif(curr['val']>value):
                    curr=curr['left']
                else:
                    curr=curr['right']
            
            return None
        
        
        
        def small_sucessor(self,node):
            if( not node['left']):
                if(node== getattr(node['parent'],'right',None)):
                    return node['parent']
                else:
                    return None
            
            curr = node['left']
            while(curr['right']):
                print(curr['val'])
                curr=curr['right']
               
            return curr
        
        
        def big_sucessor(self,node):
           

            if( not node['right']):
                
                if(node== getattr(node['parent'],'left',None)):
                    return node['parent']
                else:
                    return None
                

            curr = node['right']
                
            while(curr['left']):
                curr=curr['left']

            return curr
        
        
        
        def delete(self,val):
            
            node_to_delete = self.search(val)
            
            if( not node_to_delete):
                raise Exception("This value is not in BST")
            
            if(node_to_delete['left']):
                swap_node= self.small_sucessor(node_to_delete)
                temp= node_to_delete['val']
                node_to_delete['val']= swap_node['val']
                swap_node['val']=temp
                swap_node['parent']['left']=swap_node['right']
                if(swap_node['right']):
                    swap_node['right']['parent']=swap_node['parent']
                swap_node['parent']=swap_node['right']=None
            
            elif(node_to_delete['right']):
                swap_node= self.big_sucessor(node_to_delete)
                temp= node_to_delete['val']
                node_to_delete['val']= swap_node['val']
                swap_node['val']=temp
                swap_node['parent']['right']=swap_node['left']
                if(swap_node['left']):
                    swap_node['left']['parent']=swap_node['parent']
                swap_node['parent']=swap_node['left']=None
                
        ##Only one node in tree and its root node

            elif node_to_delete==self['root']:                 
                self['root']=None
        ## Normal leaf node
            else: 
                par=node_to_delete['parent']
                par[self.is_left_or_right_child(node_to_delete,par)] = None
                node_to_delete['parent']=None
            
            
            self['size']-=1
                
            
            
        def is_left_or_right_child(self,node,parent_node):
            
            if (parent_node['left']==node):
                return 'left'
            elif(parent_node['right']==node):
                return 'right'
        
            
            raise Exception('This is not a Child - Parent Node')
            
            
            
        def diameter(self,root):
            
            if(root is None):
                return -1,-1
            left_a,left_b= self.diameter(root['left'])
            right_a,right_b= self.diameter(root['right'])
            
            return  max(left_a,right_a,2+left_b+right_b)  , 1+max(left_b,right_b)       
            
            
            
            
        def replace_with_sum(self,root):
            #This defines a leaf node
            if(not (root['left'] or root['right'])):
                return root['val']
            
            
            
            num_1=0
            num_2=0
            curr=root['val']
            
            if(root['left']):
                num_1=self.replace_with_sum(root['left'])
                
            if(root['right']):
                num_2=self.replace_with_sum(root['right'])
            
            
            root['val']=num_1+num_2
            return  num_1+num_2+curr
        
        
        def max_subset_sum(self,root):
            
            if(root is None):
                return 0,0,0
            
            left_largest,left_largest_with,left_largest_without= self.max_subset_sum(root['left'])
            right_largest,right_largest_with,right_largest_without= self.max_subset_sum(root['right'])
            
            
            curr_largest_with= left_largest_without+right_largest_without +root['val']
            curr_largest_without = left_largest+right_largest
            curr_largest= max(curr_largest_with,curr_largest_without)
            
            return curr_largest,curr_largest_with,curr_largest_without
        
        
        def print_level_k(self,k,root):
            if (k<0):
                raise Exception('Level k must be a postive integer')
            if(root is None):
                return
            if(k==0):
                print(root['val'],end=',')
                return
                
            
            
            self.print_level_k(k-1,root['left'])
            self.print_level_k(k-1,root['right'])

    
        def nodes_at_distance_k(self,start_node,k:int,visited=set()):
            if(k<0):
                raise Exception('Distance k must be a positive integer')
            if(start_node is None):
                return
            if(start_node['val'] in visited):
                return
            visited.add(start_node['val'])
            if(k==0):
                #print(start_node['val'])
                return
            
            
            self.nodes_at_distance_k(start_node['left'],k-1,visited)
            self.nodes_at_distance_k(start_node['right'],k-1,visited)
            self.nodes_at_distance_k(start_node['parent'],k-1,visited)
            
         
        
        def ancestors(self,root,val) -> list:
            if(root is None):
                return []
            print(root['val'])
            if(self.search(val) is None):
                raise Exception("This value is not in tree")
            
            
            if(root['val']==val):
                return [root['val']]
            
            
            
           
            lis_1=self.ancestors(root['left'],val)
            lis_2=self.ancestors(root['right'],val) 
            
            
            if(lis_1+lis_2 ==[]):
                return []
            
            return (lis_1 or lis_2) + [root['val']]
        
        
        def vertical_order_print(self, root):
            if(root is None):
                return
            left=root['left']
            if(left):
                self.vertical_order_print(left)
                print('\n')
            print(root['val'],end=' ')
            
            right= root['right']
            
            if(right):
                self.vertical_order_print(right)
        
        
        def min_height_bst(self,arr):
            
            if(not(sorted(arr) == arr)):
                raise Exception("The array is not sorted")
            
            if(len(arr)==0):
                return None
            
            mid= len(arr)//2
            
            root_left=self.min_height_bst(arr[:mid])
            root_right=self.min_height_bst(arr[mid+1:])
            
            node= tree_node(arr[mid])
            
            node['left']= root_left
            node['right']= root_right
            
            self['root']= node
            
            return self['root']
        
        
        def height(self,root):
            
            if(root is None):
                return 0
            
            left= self.height(root['left'])
            right= self.height(root['right'])
            
            return 1+ max(left,right)
        
        def flatten_tree(self, root):
            
            exist_left = False
            exist_right = False
            
            if(root['left']):
                exist_left= True
                left_small,left_large= self.flatten_tree(root['left'])
                left_large['right']=root
            if(root['right']):    
                exist_right= True
                right_small,right_large= self.flatten_tree(root['right'])
                root['right']= right_small
            
            root['left'] = None
            root['parent'] = None
            
            if(not(exist_left or exist_right)):
                self['root']=root
                return root,root
            elif((exist_left is True) and (exist_right is False)):
                self['root']=left_small
                return left_small, root
            elif((exist_left is False) and (exist_right is True)):
                self['root']=root
                return root,right_large
            
            self['root']= left_small
            return left_small,right_large
        
        
        
        
        
        
        
        
           
            
            
            
            
        
        @staticmethod
        def pre_order_traversal(root):
            
            if(root is None):
                return []
            left_eles= bst.pre_order_traversal(root['left'])
            right_eles= bst.pre_order_traversal(root['right'])
            
            return [root['val']]+left_eles+ right_eles
        
        @staticmethod
        def in_order_traversal(root):
            
            if(root is None):
                return []
            left_eles= bst.in_order_traversal(root['left'])
            right_eles= bst.in_order_traversal(root['right'])
            
            return left_eles+ [root['val']]+ right_eles
        
        ## Decorator for static methods
        @staticmethod
        def post_order_traversal(root):
            
            if(root is None):
                return []
            left_eles= bst.post_order_traversal(root['left'])
            right_eles= bst.post_order_traversal(root['right'])
            
            return left_eles+ right_eles+[root['val']]

            
        
            

    

