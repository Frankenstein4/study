//一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。例如6=1＋2＋3.编程找出1000以内的所有完数。

                        var i;
                        var j;
                        var arr;
                        var temp;
                        var sum1;
                        var sum2;
                        var z;
                        for(var i=1;i<=100;i++){
                            arr=[];
                            sum1=0;
                            sum2=1;
                            z=i;
                            for(var j=1;j<i;j++){
                                if(i%j==0){
                                    arr.push(j);
                                }       
                            }   
                            if(arr.length>0){
                                temp=[]
                                temp=arr;
                            console.log(temp);
                                for(var k=0;k<temp.length;k++){
                                        sum1+=temp[k];
                                        sum2*=temp[k];
                                    }
                                    if(sum1==z&&sum1==sum2){
                                    console.log(sum1);
                                    }
                            }
                        }
