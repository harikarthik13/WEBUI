
function perfect(number)
{
    var number = document.getElementById('number').value;
   
    sum=0;
    for(i=1;i<number;i++){
        if(number%i==0){
        sum=sum+i;
        }
    }
    if(sum==number){
        document.write('It is a Perfect number')
    }
    else{
    document.write('It is not a Perfect number')
}

    
}
function factorial(fac)
{
    var n=document.getElementById('fac').value;
   i=1
   fact=1
    do{
     fact=fact*i;
     i++;
    }
    while(i<=n);
    alert(fact)
}

function series(fib)
{
    var a=document.getElementById('fib').value;
    t1=-1,t2=1,i=1;
    while(i<=a){
        t=t1+t2;
        t1=t2;
        t2=t;
        i++;
        document.write(t + "<br>");
       
    }
}
function gender()
{
    var a=document.getElementById('gen').value;
    if (a=="male" || a== "MALE"){
        alert('YOU ARE A MALE')
    }
   else if (a=="female" || a== "FEMALE"){
        alert(' YOU ARE A FEMALE')
    }
    else {
        alert('INVALID')
    }
    
}

function gender1(){
    var a=document.getElementById('gen').value;
    switch(a){
case  "male" :
alert('YOU ARE A MALE')
break;
case  "MALE" :
alert('YOU ARE A MALE')
break;
case  "female" :
alert('YOU ARE A FEMALE')
break;
case  "FEMALE" :
alert('YOU ARE A FEMALE')
break;
default :
alert('INVALID')
    }

}
function form(){
    var a=document.getElementById('name').value;
}