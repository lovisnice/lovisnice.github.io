
 k=new Image()
 k.src="images/krest.gif"
 n=new Image()
 n.src="images/nol.gif"
 e=new Image()
 e.src="images/no.gif"        //10

 hod=0
 bu=0
 ta=0
 nol=0

function anim(b) {
hod++

if((document.images[b].src==k.src)||(document.images[b].src==n.src))
hod--                    //20
else {
document.images[b].src=k.src
bu=b
test()
 }

}


 function getR() {        //30
 y=Math.random()
 y*=10
 x=Math.round(y)
}


 function test() {
 if((hod==1)&&(document.images[4].src==k.src)) {
 getR()
 if(x>5) {                   //40
 getR()
 if(x>5)
 b1=0
 else
 b1=8
 }
 else {
 getR()
 if(x>5)
 b1=6                             //50
 else
 b1=2
 }
 document.images[b1].src=n.src
  }

 if((hod==1)&&(document.images[4].src!==k.src)) {
 document.images[4].src=n.src
 }
                                    //60
 if((hod==2)&&(document.images[4].src==k.src)) {
 b2=bu-8
 if(b2<0)
 b2*=-1
 if(document.images[b2].src!==n.src)
 document.images[b2].src=n.src
 else {
 if(document.images[0].src==e.src)
 b2=0
 else {                              //70
 getR()
 if(x>5)
 b2=2
 else
 b2=6
}
 document.images[b2].src=n.src
  }
 }

 if((hod==2)&&(document.images[4].src==n.src)) {

 }

 if((hod==3)&&(document.images[4].src==k.src)) {
 testwin()
 if(nol==1) {
 alert('      Вы проиграли!')
 start()
 }
 else {
 b3=bu-8
 if(b3<0)
 b3*=-1
 if(document.images[b3].src==e.src)
 document.images[b3].src=n.src
 else {
 if(document.images[0].src==e.src)
 document.images[0].src=n.src
 else {
 if(document.images[2].src==e.src)
 document.images[2].src=n.src
 else {
 if(document.images[6].src==e.src)
 document.images[6].src=n.src
 else {
 if(document.images[8].src==e.src)
 document.images[8].src=n.src
       }
      }
     }
   }
 }
}


 if((hod==4)&&(document.images[4].src==k.src)) {
 testwin()
 if(nol==1) {
 alert('         Вы проиграли!')
 start()
 }
 else {
 b3=bu-8
 if(b3<0)
 b3*=-1
 if(document.images[b3].src==e.src)
 document.images[b3].src=n.src
 else {
 if(document.images[8].src==e.src)
 document.images[8].src=n.src
 else {
 if(document.images[6].src==e.src)
 document.images[6].src=n.src
 else {
 if(document.images[2].src==e.src)
 document.images[2].src=n.src
 else {
 if(document.images[0].src==e.src)
 document.images[0].src=n.src
 else {
 if(document.images[1].src==e.src)
 document.images[1].src=n.src
 else {
 if(document.images[3].src==e.src)
 document.images[3].src=n.src
 else {
 if(document.images[5].src==e.src)
 document.images[5].src=n.src
 else {
 if(document.images[7].src==e.src)
 document.images[7].src=n.src


          }
         }
        }
       }
      }
     }
   }
 }
}

 }

 if(hod==5) {
 alert('      Nobody Wins')
 start()
 }

 if((hod==2)&&(document.images[4].src==n.src)) {
 t0=document.images[0].src
 t1=document.images[1].src
 t2=document.images[2].src
 t3=document.images[3].src
 t4=document.images[4].src
 t5=document.images[5].src
 t6=document.images[6].src
 t7=document.images[7].src
 t8=document.images[8].src
 testAll()
 if(ta==1)
 ta=0
 else {
 nols()
 if(nols==1)
 nol=0
 else {
 if(t0==e.src)
 document.images[0].src=n.src
 else {
 if(t2==e.src)
 document.images[2].src=n.src
 else {
 if(t6==e.src)
 document.images[6].src=n.src
 else {
 if(t8==e.src)
 document.images[8].src=n.src
       }
      }
     }
    }
  }
 }


 if((hod==3)&&(document.images[4].src==n.src)) {
 testwin()
 if(nol==1) {
 alert('         Вы проиграли!')
 start()
 }
 else {
 testAll()
 if(ta==1)
 ta==0
 else{

 if(document.images[8].src==e.src)
 document.images[8].src=n.src
 else {
 if(document.images[6].src==e.src)
 document.images[6].src=n.src
 else {
 if(document.images[2].src==e.src)
 document.images[2].src=n.src
 else {
 if(document.images[0].src==e.src)
 document.images[0].src=n.src
 else {
 if(document.images[1].src==e.src)
 document.images[1].src=n.src
 else {
 if(document.images[3].src==e.src)
 document.images[3].src=n.src
 else {
 if(document.images[5].src==e.src)
 document.images[5].src=n.src
 else {
 if(document.images[7].src==e.src)
 document.images[7].src=n.src

           }
          }
         }
        }
       }
      }
     }

  }
 }
 }

 if((hod==4)&&(document.images[4].src==n.src)) {
 testwin()
 if(nol==1) {
 alert('         Вы проиграли!')
 start()
 }
 else {
 if(document.images[8].src==e.src)
 document.images[8].src=n.src
 else {
 if(document.images[6].src==e.src)
 document.images[6].src=n.src
 else {
 if(document.images[2].src==e.src)
 document.images[2].src=n.src
 else {
 if(document.images[0].src==e.src)
 document.images[0].src=n.src
 else {
 if(document.images[1].src==e.src)
 document.images[1].src=n.src
 else {
 if(document.images[3].src==e.src)
 document.images[3].src=n.src
 else {
 if(document.images[5].src==e.src)
 document.images[5].src=n.src
 else {
 if(document.images[7].src==e.src)
 document.images[7].src=n.src

           }
          }
         }
        }
       }
      }
     }
 }
 }



 }


 function start() {
 window.location.href="index.html"
 }


  function testAll() {
 t0=document.images[0].src
 t1=document.images[1].src
 t2=document.images[2].src
 t3=document.images[3].src
 t4=document.images[4].src
 t5=document.images[5].src
 t6=document.images[6].src
 t7=document.images[7].src
 t8=document.images[8].src


 if((((t1==k.src)&&(t2==k.src))||((t1==n.src)&&(t2==n.src))||((t3==k.src)&&(t6==k.src))||((t3==n.src)&&(t6==n.src))||((t4==k.src)&&(t8==k.src))||((t4==n.src)&&(t8==n.src)))&&(t0==e.src))
  { document.images[0].src=n.src
    ta=1 }

 if((((t0==k.src)&&(t2==k.src))||((t0==n.src)&&(t2==n.src))||((t4==k.src)&&(t7==k.src))||((t4==n.src)&&(t7==n.src)))&&(t1==e.src))
 { document.images[1].src=n.src
 ta=1 }
 if((((t1==k.src)&&(t0==k.src))||((t1==n.src)&&(t0==n.src))||((t5==k.src)&&(t8==k.src))||((t5==n.src)&&(t8==n.src))||((t4==k.src)&&(t6==k.src))||((t4==n.src)&&(t6==n.src)))&&(t2==e.src))
  { document.images[2].src=n.src
 ta=1 }

 if((((t0==k.src)&&(t6==k.src))||((t0==n.src)&&(t6==n.src))||((t4==k.src)&&(t5==k.src))||((t4==n.src)&&(t5==n.src)))&&(t3==e.src))
  { document.images[3].src=n.src
 ta=1 }
 if((((t2==k.src)&&(t8==k.src))||((t2==n.src)&&(t8==n.src))||((t4==k.src)&&(t3==k.src))||((t4==n.src)&&(t3==n.src)))&&(t5==e.src))
  { document.images[5].src=n.src
 ta=1 }

 if((((t0==k.src)&&(t3==k.src))||((t0==n.src)&&(t3==n.src))||((t2==k.src)&&(t4==k.src))||((t2==n.src)&&(t4==n.src))||((t7==k.src)&&(t8==k.src))||((t7==n.src)&&(t8==n.src)))&&(t6==e.src))
 { document.images[6].src=n.src
 ta=1 }
 if((((t1==k.src)&&(t4==k.src))||((t1==n.src)&&(t4==n.src))||((t6==k.src)&&(t8==k.src))||((t6==n.src)&&(t8==n.src)))&&(t7==e.src))
  { document.images[7].src=n.src
 ta=1 }
 if((((t6==k.src)&&(t7==k.src))||((t6==n.src)&&(t7==n.src))||((t0==k.src)&&(t4==k.src))||((t0==n.src)&&(t4==n.src))||((t2==k.src)&&(t5==k.src))||((t2==n.src)&&(t5==n.src)))&&(t8==e.src))
  { document.images[8].src=n.src
 ta=1 }

}





 function testwin() {
 t0=document.images[0].src
 t1=document.images[1].src
 t2=document.images[2].src
 t3=document.images[3].src
 t4=document.images[4].src
 t5=document.images[5].src
 t6=document.images[6].src
 t7=document.images[7].src
 t8=document.images[8].src

 if((((t1==n.src)&&(t2==n.src))||((t3==n.src)&&(t6==n.src))||((t4==n.src)&&(t8==n.src)))&&(t0==e.src))
  { document.images[0].src=n.src
    nol=1 }

 if((((t0==n.src)&&(t2==n.src))||((t4==n.src)&&(t7==n.src)))&&(t1==e.src))
  { document.images[1].src=n.src
    nol=1 }
 if((((t1==n.src)&&(t0==n.src))||((t5==n.src)&&(t8==n.src))||((t4==n.src)&&(t6==n.src)))&&(t2==e.src))
  { document.images[2].src=n.src
    nol=1 }

 if((((t0==n.src)&&(t6==n.src))||((t4==n.src)&&(t5==n.src)))&&(t3==e.src))
  { document.images[3].src=n.src
    nol=1 }
 if((((t2==n.src)&&(t8==n.src))||((t4==n.src)&&(t3==n.src)))&&(t5==e.src))
  { document.images[5].src=n.src
    nol=1 }

 if((((t0==n.src)&&(t3==n.src))||((t2==n.src)&&(t4==n.src))||((t7==n.src)&&(t8==n.src)))&&(t6==e.src))
 { document.images[6].src=n.src
    nol=1 }
 if((((t1==n.src)&&(t4==n.src))||((t6==n.src)&&(t8==n.src)))&&(t7==e.src))
  { document.images[7].src=n.src
    nol=1 }
 if((((t6==n.src)&&(t7==n.src))||((t0==n.src)&&(t4==n.src))||((t2==n.src)&&(t5==n.src)))&&(t8==e.src))
  { document.images[8].src=n.src
    nol=1 }

 }

 function nols() {
 t0=document.images[0].src
 t1=document.images[1].src
 t2=document.images[2].src
 t3=document.images[3].src
 t4=document.images[4].src
 t5=document.images[5].src
 t6=document.images[6].src
 t7=document.images[7].src
 t8=document.images[8].src

 if((((t1==k.src)&&(t3==k.src)))||((t3==k.src)&&(t2==k.src))&&(t0==e.src)) {
 document.images[0].src=n.src
 nols=1 }
 if((((t1==k.src)&&(t5==k.src)))||((t5==k.src)&&(t0==k.src))&&(t2==e.src)) {
 document.images[2].src=n.src
 nols=1 }
 if((((t3==k.src)&&(t7==k.src)))||((t3==k.src)&&(t8==k.src))&&(t6==e.src)) {
 document.images[6].src=n.src
 nols=1 }
 if((((t5==k.src)&&(t7==k.src)))||((t5==k.src)&&(t6==k.src))&&(t0==e.src)) {
 document.images[8].src=n.src
 nols=1 }
 if((t0==k.src)&&(t8==k.src)) {
 getR()
 if(x>5)
 document.images[3].src=n.src
 else
 document.images[5].src=n.src
 nols=1 }
 if((t6==k.src)&&(t2==k.src)) {
 getR()
 if(x>5)
 document.images[7].src=n.src
 else
 document.images[1].src=n.src
 nols=1 }
 }
 