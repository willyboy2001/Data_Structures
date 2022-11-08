var maximalSquare = function(matrix) {
    const len =matrix.length
const arr= Array.from({length:len},ele=>[]);
    let ele,ele2;
    
    let initialInput= matrix[0][0]==="0"?0:1;
    arr[0][0]=[initialInput,initialInput,initialInput,initialInput];
    for(let i=1;i<matrix[0].length;i++){
       if(matrix[0][i]==='0'){
           arr[0][i]=[arr[0][i-1][0],0,0,0]
       }
        else{
            arr[0][i]=[1,1,1+arr[0][i-1][2],1];
        }
    }
    for(let i=1;i<len;i++){
       if(matrix[i][0]==='0'){
           arr[i][0]=[arr[i-1][0][0],0,0,0]
       }
        else{
            arr[i][0]=[1,1,1,1+arr[i-1][0][3]];
        }
    }
    
    for(let i=1;i<len;i++){
        for(let j=1;j<matrix[0].length;j++){
             ele= Math.max(arr[i-1][j][0],arr[i][j-1][0])
            if(matrix[i][j]==="0"){
                arr[i][j]=[ele,0,0,0]
            }
            else{
                arr[i][j]=[,,1+arr[i][j-1][2],1+arr[i-1][j][3]];
                ele2=  Math.min(arr[i][j-1][2],arr[i-1][j][3]);
                
                if(arr[i-1][j-1][1]<=ele2){
                    arr[i][j][1]=arr[i-1][j-1][1]+1;
                    
                    
                }
                else{
                     arr[i][j][1]=ele2+1
                }
                
                if(ele<arr[i][j][1]){
                    arr[i][j][0]=arr[i][j][1]
                }
                else{
                    arr[i][j][0]=ele
                }
                
            }
        }
    }
    console.log(arr)
    return arr[len-1][matrix[0].length-1][0]*arr[len-1][matrix[0].length-1][0]
};
