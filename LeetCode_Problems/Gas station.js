var canCompleteCircuit = function(gas, cost) {
    if( gas.reduce((accum,ele)=> accum+ele,0) <cost.reduce((accum,ele)=> accum+ele,0)){
        return -1;
    }
    const len = cost.length
    let start=0;
    let current=start;
    
    let sum=0 ;
    let end= (len+start -1)%len;
    
    for(let i=0;i<len;i++){
        gas[i]=gas[i]-cost[i]
    }
    let counter=0
    while(start<len && current!==end){
       
       sum = sum+ gas[current];
      if(sum<0){
          start=current+1;
          current = start;
          end = start-1;
          sum=0;
      } else{
          current=(current+1)%len
      }
               
}
     if(start>=len) return -1
        else return start;
    
    
    console.log(gas)
};
