var splitArray = function(nums, m) {
    let count=1;
    let sum=0;
    let generalMin;
    let loopMax;
    let current;
    let k;
    const len=nums.length;
    const obj={
        [count]:[,nums[0]]
    }
    sum=nums[0]
    
    while(++count<=len){
        sum=sum+nums[count-1];
        
        obj[count]=[,sum]
        for(let i=2;i<=Math.min(m,count);i++){
            k=count-1;
            generalMin=Infinity;
            loopMax=0
            current=0;
            while(k>=i-1){
                current=current+nums[k];
                loopMax=Math.max(current,obj[k][i-1])
                generalMin= Math.min(generalMin,loopMax);
                k--
            }
            
            obj[count][i]=generalMin;
                
                
            }
        }

    return obj[count-1][m]

    
};
