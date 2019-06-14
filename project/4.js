            var a=[];
			for(var i=0;i<10;i++){
				a[i]=parseInt(Math.random()*100);
			}
			console.log(a);
            var max,min,maxindex,minindex,temp,temp2;
            max=a[0];
            for(var i=0;i<a.length;i++){
            	if(a[i]>=max){
            		max=a[i];
            		maxindex=i;
            	}
            }
            min=a[0];
            for(var j=0;j<a.length;j++){
            	if(a[j]<=min){
            		min=a[j];
            		minindex=j;
            	}
            }
			
//			document.writeln(max+" "+min+" "+maxindex+" "+minindex);
			
			if(min==a[0]&&max!=a[a.length-1]){
				temp=a[0];
				a[0]=a[maxindex];
				a[maxindex]=a[a.length-1];
				a[a.length-1]=temp;
				console.log(a);
			}else if(min==a[0]&&max==a[a.length-1]){
				temp=a[0];
				a[0]=a[a.length-1];
				a[a.length-1]=temp;
				console.log(a);
			}else if(max==a[0]&&min!=a[a.length-1]){
				temp=a[minindex];
				a[minindex]=a[a.length-1];
				a[a.length-1]=temp;
				console.log(a);
			}else if(max==a[a.length-1]&&min!=a[0]){
				   temp=a[0];
				   a[0]=a[a.length-1];
				   a[a.length-1]=a[minindex];
				   a[minindex]=temp;
                   console.log(a);
			}else if(min==a[a.length-1]&&max==a[0]){
				console.log(a);
			}else if(min==a[a.length-1]&&max!=a[0]){
				temp=a[0];
				a[0]=a[maxindex];
				a[maxindex]=temp;
				console.log(a);
			}else{
				temp =a[0];
				a[0]=a[maxindex];
				a[maxindex]=temp;
				temp2=a[a.length-1];
				a[a.length-1]=a[minindex];
				a[minindex]=temp2;
				console.log(a);
			}