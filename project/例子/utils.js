//日期格式化插件
function formatDate(date,fmt){

    date = date == undefined ? new Date() : date;
    date = typeof date == 'number' ? new Date(date) : date;
    fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
    var obj =
    {
        'y': date.getFullYear(), // ��ݣ�ע�������getFullYear
        'M': date.getMonth() + 1, // �·ݣ�ע���Ǵ�0-11
        'd': date.getDate(), // ����
        'q': Math.floor((date.getMonth() + 3) / 3), // ����
        'w': date.getDay(), // ���ڣ�ע����0-6
        'H': date.getHours(), // 24Сʱ��
        'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12Сʱ��
        'm': date.getMinutes(), // ����
        's': date.getSeconds(), // ��
        'S': date.getMilliseconds() // ����
    };
	var week = ['��', 'һ', '��', '��', '��', '��', '��'];

    for(var i in obj)
    {
        fmt = fmt.replace(new RegExp(i+'+', 'g'), function(m)
        {
            var val = obj[i] + '';
            if(i == 'w') return (m.length > 2 ? '����' : '��') + week[val];
            for(var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
            return m.length == 1 ? val : val.substring(val.length - m.length);
        });
    }
    return fmt;
}

/**
 * @returns ��ȡ����
 */
function getWeek(date){
	var weekday = ["��","һ","��","��","��","��","��"];
	return weekday[date.getDay()];
}

//ȡ�õ�ǰ������������һ���еĵڼ���  
function getWeekNumOfYear(date){  
    var date2=new Date(date.getFullYear(), 0, 1);  
    var day1=date.getDay();  
    if(day1==0) day1=7;  
    var day2=date2.getDay();  
    if(day2==0) day2=7;  
    d = Math.round((date.getTime() - date2.getTime()+(day2-day1)*(24*60*60*1000)) / 86400000);    
    return Math.ceil(d /7)+1;   
} 

function addDate(date,days){
	var d=new Date(date); 
	d.setDate(d.getDate()+days); 
	var month=d.getMonth()+1; 
	var day = d.getDate(); 
	if(month<10){ 
		month = "0"+month; 
	} 
	if(day<10){ 
		day = "0"+day; 
	} 
	var val = d.getFullYear()+"/"+month+"/"+day; 
	return new Date(val);
}

//���㱾����ʼ���ڣ����� Y-m-d ��ʽ���ء�
function getWeekTime(date){
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate()- date.getDay();
  //�������ʾ 0 �ʵ��������ʱ�򣬻�ȡ���ܿ�ʼ��ʱ��
  if(date.getDay()==0){
	  day -= 7;
  }
  
  if(day==0){
      day=1;
  }
  var beginTime = year + "/" + month +"/" + day; //��ʽ Y/m/d
  return new Date(beginTime);
}

function getWeekBeginDate(date){
    var beginDate;
    date.setDate(date.getDate() - date.getDay()); 
    beginDate = date;
    return beginDate;
}


