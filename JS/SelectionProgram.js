//find max & minimum
let a=2,b=3,c=4,d=2;
if(( a> b ) && (a>c) && (a>d))
max=a;
else if ((b>a) && (b>c)&& (b>d))
max=b;
else if ((c>a)&& (c>b)&& (c>d))
max=c;
else 
  max=d;

  console.log("Maximum among all the result :" +max);

  //Max among all
  if((a<b)&&(a<c)&&(a<d))
  min=a;
  else if((b<c)&&(b<d))
  min=b;
  else if ((c<d))
  min=c;
  else
  min =d;

  console.log("Minimum among all the result :"+min);