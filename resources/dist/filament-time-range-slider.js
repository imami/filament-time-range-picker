function n({state:i,min:m,max:a,mininterval:e,stepinterval:h}){return{state:i,minhour:0,minminute:0,maxhour:0,maxminute:0,hourcap:23,minutecap:59,mindate:0,maxdate:1440,min:m??0,max:a??1440,stepinterval:h??10,mininterval:e??60,minthumb:0,maxthumb:0,init(){this.mintrigger(),this.maxtrigger()},mintrigger(){this.mindate=Math.min(this.mindate,this.maxdate-this.mininterval),this.minhour=this.getHourFromDate(this.mindate),this.minminute=this.getMinuteFromDate(this.mindate),this.minthumb=(this.mindate-this.min)/(this.max-this.min)*100,this.updateState()},maxtrigger(){this.maxdate=Math.max(this.maxdate,this.mindate+this.mininterval),this.maxhour=this.getHourFromDate(this.maxdate),this.maxminute=this.getMinuteFromDate(this.maxdate),this.maxthumb=100-(this.maxdate-this.min)/(this.max-this.min)*100,this.updateState()},inputtrigger(){this.maxdate=this.maxhour*60+this.maxminute,this.mindate=this.minhour*60+this.minminute,this.mintrigger(),this.maxtrigger()},getHourFromDate(t){return String(Math.floor(t/60)).padStart(2,"0")},getMinuteFromDate(t){return String(t%60).padStart(2,"0")},updateState:function(){this.state={mindate:this.maxhour+":"+this.maxminute,maxdate:this.minhour+":"+this.minminute}}}}export{n as default};
