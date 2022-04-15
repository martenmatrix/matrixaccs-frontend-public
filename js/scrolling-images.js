

function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;
    
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    
    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
      return true;
    }
    
    return false;
  }


function Timer(funct, delayMs, times) {
  if(times==undefined)
  {
    times=-1;
  }
  if(delayMs==undefined)
  {
    delayMs=10;
  }
  this.funct=funct;
  var times=times;
  var timesCount=0;
  var ticks = (delayMs/10)|0;
  var count=0;
  Timer.instances.push(this);

  this.tick = function()
  {
    if(count>=ticks)
    {
      this.funct();
      count=0;
      if(times>-1)
      {
        timesCount++;
        if(timesCount>=times)
        {
          this.stop();
        }
      }
    }
    count++; 
  };

  this.stop=function()
  {
    var index = Timer.instances.indexOf(this);
    Timer.instances.splice(index, 1);
  };
}

Timer.instances=[];

Timer.ontick=function()
{
  for(var i in Timer.instances)
  {
    Timer.instances[i].tick();
  }
};

window.setInterval(Timer.ontick, 10);

  

  // animate element when it is in view


  function onTick()
  {
    
    document.getElementById('scroll').scrollLeft += 1;
  }
  function onTick2()
  {

    if ((parseInt(document.getElementById('scroll').clientWidth)*1.9)<=parseInt(document.getElementById('scroll').scrollLeft)) {
      console.log("True");
      document.getElementById('scroll').scrollLeft = 0;
    }
  }
  var timer = new Timer(onTick, 20,-1);
  var timer = new Timer(onTick2, 20,-1);


  