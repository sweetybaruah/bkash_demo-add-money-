// var element3 = document.querySelector('.element3')
// gsap.to(".element5",{display:"none"})
// TweenMax.to(".slide_two", 1, {display:"block"});
TweenMax.to(".element3", .2, {x:"+=20", yoyo:true, repeat:57, duration: 1});
TweenMax.to(".element3", .2, {x:"-=20", yoyo:true, repeat:57, duration: 1});

TweenLite.to(".element2",1, {onComplete:function(){
    TweenMax.to(this.target,.6,{boxShadow:"0px 0px 20px 5px rgba(255,255,255)",repeat:-1,yoyo:true})
  }})

  TweenLite.to(".coin1",1, {y:-80,duration: .6,delay:1,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})
  TweenLite.to(".coin2",1, {y:-80,duration: .6,delay:2,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})
  TweenLite.to(".coin3",1, {y:-80,duration: .6,delay:3,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})
  TweenLite.to(".coin4",1, {y:-80,duration: .6,delay:4,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})

  TweenLite.to(".coin5",1, {y:-80,duration: .6,delay:5,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})
  TweenLite.to(".coin6",1, {y:-80,duration: .6,delay:6,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})

  TweenLite.to(".coin7",1, {y:-80,duration: .6,delay:7,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})

  TweenLite.to(".coin8",1, {y:-80,duration: .6,delay:8,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})

  TweenLite.to(".coin9",1, {y:-80,duration: .6,delay:9,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})

  TweenLite.to(".coin10",1, {y:-80,duration: .6,delay:10,onComplete:function(){
    TweenMax.to(this.target,.7,{x: 168,z:-1,duration: .6})
    TweenMax.to(this.target,.7,{y: -5,z: -1,duration: .6,delay: .6,display:"none"})
  }})

  TweenMax.to(".element3", .2, {display:"none", delay:12});
  
  TweenMax.to(".element2", .2, {display:"none", delay:13});

  TweenLite.to(".element5",1, {display:"block",delay:13,onComplete:function(){
    TweenMax.to(this.target,.3,{boxShadow:"0px 0px 20px 5px rgba(255,255,255)",repeat:-1,yoyo:true})
  }})

  TweenMax.to(".slide_one", 1, {display:"none", delay:14});
   TweenMax.to(".slide_two, .element6, .element7, .element8, .element9", 1, {display:"block", duration: 0.7,delay:15});

