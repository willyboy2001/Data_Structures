class GraphNode():
    my_set= {'neighbours','name'}
    def __init__(self,name : str):
        self['name']= name
        self['neighbours']=set()
    def __setitem__(self,key,val):
        if(key in GraphNode.my_set):
                setattr(self,key,val)
        else:
            raise Exception("Operator not supported")
    
    def __getitem__(self,key):
        if(key in GraphNode.my_set):
                return getattr(self,key)
        else:
            raise Exception("Operator not supported")

class Graph():
    graph_set= {'vertices'}
    
    def __init__(self):
        self['vertices'] ={}
    
    def __setitem__(self,key,val):
        if(key in Graph.graph_set):
                setattr(self,key,val)
        else:
            raise Exception("Operator not supported")
    
    def __getitem__(self,key):
        if(key in Graph.graph_set):
                return getattr(self,key)
        else:
            raise Exception("Operator not supported")
            
    
    def add_vertex(self,name):
        
        if (self.vertice_exists(name)):
            raise Exception("Vertex already exists")
        
        node = GraphNode(name)
        self['vertices'][name]= node
    
    def add_edge(self,left_vertex:GraphNode ,right_vertex: GraphNode):
        
        if(not(self.vertice_exists(left_vertex) and self.vertice_exists(right_vertex))):
            raise Exception('Both vertices are not in the Graph. Create the vertice(s)')
        
        l= self.return_vertex(left_vertex)
        r= self.return_vertex(right_vertex)
        
        if(r['name'] in l['neighbours']):
            print('Edge between vertices already exists')
            return
        l['neighbours'].add(r['name'])
        r['neighbours'].add(l['name'])
        
        
        
    
    def vertice_exists(self,name):
        return name in self['vertices'].keys()
    
    
   
    def edge_exists(self,l_vertex,r_vertex):
        if(not(self.vertice_exists(l_vertex) and self.vertice_exists(r_vertex))):
            raise Exception('Both vertices are not in the Graph. Create the vertice(s)')
        
        l= self.return_vertex(l_vertex)
        r= self.return_vertex(r_vertex)
        return r['name'] in l['neighbours']
    
    
        
        
    def return_vertex(self,name_of_vertex):
        if(not self.vertice_exists(name_of_vertex)):
            raise Exception("This vertex is not in the Graph")
            
        return self['vertices'][name_of_vertex]
        
    
    
    def delete_vertex(self,name):
        if ( not self.vertice_exists(name)):
            raise Exception("Vertex is not in Graph")
        
        ver = self.return_vertex(name)
        
        for x in ver['neighbours']:
            y= self.return_vertex(x)
            y['neighbours'].remove(name)
            
        self['vertices'].pop(name)
    
    def delete_edge(self,l_vertex,r_vertex):
        if(not self.edge_exists(l_vertex,r_vertex)):
            raise Exception('No edge between the 2 vertices')
        
        l= self.return_vertex(l_vertex)
        r= self.return_vertex(r_vertex)
        
        l['neighbours'].remove(r['name'])
        r['neighbours'].remove(l['name'])
        
        
    
    def depth_first_traversal(self,start_vertex,visited=None):
        
        if(not self.vertice_exists(start_vertex)):
            raise Exception("This vertex is not in the Graph")
        
        visited = visited or {}
        if(visited.get(start_vertex)):
            return 
        print(start_vertex)
        visited[start_vertex] = True
        
        for x in self.return_vertex(start_vertex)['neighbours']:
            y= self.return_vertex(x)
            self.depth_first_traversal(x,visited)
            
    
    def breadth_first_traversal(self, start_node):
        
        from collections import deque
        queue= deque()
        
        node = self.return_vertex(start_node)
        queue.append(node)
        in_queue={node['name']}
        
        while(len(queue)):
            
            ele= queue.popleft()
            print(ele['name'])
            
            for x in ele['neighbours']:
                if(not (x in in_queue)):
                    y = self.return_vertex(x)
                    queue.append(y)
                    in_queue.add(x)
        
