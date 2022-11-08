var minimumTotal = function(triangle) {
   const results = [];
  const len = triangle.length;
  const arr = [[]];
  arr[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    arr[i] = [];
    arr[i][0] = arr[i - 1][0] + triangle[i][0];
    arr[i][i] = arr[i - 1][i - 1] + triangle[i][i];
  }
    
    function work(i,j){
        
        if(j===0||i===j){
            console.log(arr[i][j])
            return arr[i][j]
        };
        
        const leftPart=arr[i-1][j-1]||work(i-1,j-1);
        const rightPart=arr[i-1][j]??work(i-1,j);
         arr[i][j]= triangle[i][j]+Math.min(leftPart,rightPart);
        console.log(leftPart,rightPart)
        return arr[i][j]
    }
    
    for(let i=0;i<len;i++){
        const curr= work(len-1,i);
        results.push(curr);
    }
return Math.min(...results)
    }
