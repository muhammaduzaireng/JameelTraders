let a=[1,1,1,13,2,4,2,4];
for(let i in a){
    for(let j in a){
        if(a[i] != a[j]){
            console.log(a[i]);
        }
    }
}