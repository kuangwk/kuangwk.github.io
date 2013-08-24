//t = 0.02ms
//
//
//Sprite 对象 
//Sprite 属性 vx vy t x y ax ay 
window.onload = function() {
	var Sprite = function(x,y) {

		this.vx = 0;
		this.vy = 0;
		this.x = 0;
		this.y = 0;
		
		//配置
		this.maxV = 1000;
		this.a = 1 ;
		


		//	this.ax = 0;
		//	this.ay = 0;


	}


	//Sprite 方法 
	Sprite.prototype = {
		setStatus : function(x,y,vx,vy) {
						this.x = x;
						this.y = y;
						this.vx = vx;
						this.vy = vy;

						//	this.ax = ax;
						//	this.ay = ay;

					},

		draw : function() {
			   },
		//恒变速运动
		/*move : function() {
		  console.log(this.y);
		  this.x = this.x + this.vx * this.t + 0.5 * this.ax * this.t * this.t;
		  this.y = this.y + this.vy * this.t + 0.5 * this.ay * this.t * this.t;


		  this.vx += this.ax * this.t;
		  this.vy += this.ay * this.t;
		  },
		  */
		//
		//沿速度方向逐渐加速
		move : function(t) {
					
					//console.log('move');
					//console.log(t);
				   this.x += this.vx * t;
				   this.y += this.vy * t;
				   if(this.vx <= this.maxV && this.vx > -this.maxV && this.vy <=this.maxV && this.vy > -this.maxV){
					   this.vx *= this.a;
					   this.vy *= this.a;
				   }
			   },



		impact : function(cWidth,cHeight) {
					 if(this.y + this.height/2 > cHeight){
						 this.vy *= -1;
					 }
					 if(this.x + this.width/2 > cWidth){
						 this.vx *= -1;
					 }
					 if(this.y - this.height/2  < 0){
						 this.vy *= -1;
					 }
					 if(this.x - this.width/2< 0){
						 this.vx *= -1;
					 }
				 },
		clearSprite : function() {
						  this.cxt.clearRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
					  }

	}




	//Canvas  对象 start render stop clear ;
	var Canvas = function() {
		this.goal = {};
		this.interval = null;
		this.sprite = [];
		this.can = null;
		this.timeInt = null;

		//配置变量
		this.timeNum= 20;
		

		this.t = 0.02; 
	}



	Canvas.prototype = {

		start : function() {
					this.reset();
					this.setCountDown(this);
					this.interval = setInterval((function(that){return function(){that.render();}
					})(this),this.t*1000);

				},

		render : function() {
					 this.cxt.clearRect(0,0,1200,600);

					 this.goal.draw();
					 for(var i in this.sprite){
						 this.sprite[i].move(this.t);
						console.log(this.t);
						 this.sprite[i].draw();
						 this.sprite[i].impact(this.width,this.height);
					 }
					 this.meet();

				 },

		stop : function() {
				   //console.log('stop');
				   this.reset();
				   clearInterval(this.interval);
				   clearInterval(this.timeInt);
			   },

		reset : function() {
					this.timeCount = this.timeNum;
					var rx = [200,100,this.width-100,this.width-100,0];
					var ry = [100,this.height-100,100,this.height-100,0];

					var count = 0;
					for(var i in this.sprite){
						if (count < 4) {
							var rvx = (Math.random()*(700-400)+400) * createFlag() ;
							var rvy = (Math.random()*(700-400)+400) * createFlag() ;
						}else{
							rvx = 0;
							rvy = 0;
						}
						this.sprite[i].setStatus(rx[count], ry[count], rvx, rvy);
						count++;
					}

					function createFlag() {
						var rFlag = Math.random()*2 - 1;
						if(rFlag >= 0){ 
							rFlag = 1; 
						}else{ 
							rFlag = -1; 
						}
						return rFlag;
					}
				},

		addSprite : function(name,sprite){
						this.sprite[name] = sprite;
					},
		setGoal : function(goal) {
					  this.goal = goal;
				  },

		meet : function() {
				   for (i in this.sprite) {
					   //console.log('x= ' +this.goal.x);
					   var R2 = (this.sprite[i].x - this.goal.x) * (this.sprite[i].x - this.goal.x) + (this.sprite[i].y - this.goal.y) * (this.sprite[i].y - this.goal.y);
					   //console.log('R= ' +R2);
					   var r2 = (this.sprite[i].r + this.goal.r) * (this.sprite[i].r + this.goal.r);
					   //console.log(r2);
					   if (R2 < r2) {
						   this.stop();
						   this.reset();
						   flag = true;
						   return;
					   }

					   /*for (j in this.sprite) {
							if (i === j) continue;
							var X2 = (this.sprite[i].x - this.sprite[j].x) * (this.sprite[i].x - this.sprite[j].x) + (this.sprite[i].y - this.sprite[j].y) * (this.sprite[i].y - this.sprite[j].y);	
					   		console.log('R= ' +X2);
					   		var x2 = (this.sprite[i].r + this.sprite[j].r) * (this.sprite[i].r + this.sprite[j].r);
					  	 	console.log('vx1= ' + this.sprite[i].vx);
							if (X2 < x2) {
								console.log('meet');
								this.sprite[i].vx *= -1;
								this.sprite[j].vx *= -1;
								this.sprite[i].vy *= -1;
								this.sprite[j].vy *= -1;
							}
					  	 	console.log('vx2= ' + this.sprite[i].vx);
					   }*/
				   }	
			   },


		setCountDown : function(that){
						   var t = document.getElementById('time');

						   t.innerText = this.timeCount;
						   this.timeInt = setInterval((function(that){
							   return function() {
								   that.timeCount--;
								   t.innerText = that.timeCount;
								   if (that.timeCount<= 0 ) {
									   clearInterval(this.timeInt);
									   that.stop();
								   }
							   }
						   })(this),1000);
					   },

	}

	//Circle 对象,继承Sprite对象,
	var Circle = function(cxt, r, color){
		
		this.cxt = cxt;
		this.r = r;
		this.color = color;
		this.width = 2 * r;
		this.height = 2 * r;
	}

	Circle.prototype = new Sprite();

	Circle.prototype.draw = function() {
		//console.log('draw');
		this.cxt.beginPath();
		this.cxt.fillStyle = this.color;
		this.cxt.arc(this.x,this.y,this.r,0,2*Math.PI,false);
		this.cxt.fill();

	}




	//Square 对象,继承Sprite对象;
	/*
	   var Square = function(cxt,a) {
	   this.cxt = cxt;
	   this.a = a;
	   this.width = a;
	   this.height = a;
	   } 
	   Square.prototype = new Sprite();
	   Square.prototype.draw = function() {
	   this.cxt.beginPath();
	   this.cxt.strokeStyle = '#000';
	   this.cxt.strokeRect(this.x,this.y,this.a,this.a) ;
	   } 
	   */



	var cxt = document.getElementById('can').getContext('2d');

	var can = new Canvas();
	can.cxt = cxt;

	//var square = new Square(cxt,30);
	//var square1 = new Square(cxt,100);
	//can.addSprite('square',square);
	//can.addSprite('square1',square1);
	//can.sprite.square.setStatus(0,00,100,200,0,0);
	//can.sprite.square1.setStatus(0,0,200,100,0,0);

	//创建圆
	
	//配置变量
	var circleR = 45;



	var redCircle = new Circle(cxt,circleR,'red');
	can.addSprite('redC',redCircle);
	//can.sprite.redC.setStatus(800,100,600,300,0,0);

	var yellowCircle = new Circle(cxt,circleR,'yellow');
	can.addSprite('yellowC',yellowCircle);
	//can.sprite.yellowC.setStatus(100,100,600,300,0,0);

	var greenCircle= new Circle(cxt,circleR,'green');
	can.addSprite('greenC',greenCircle);
	//can.sprite.greenC.setStatus(100,400,300,600,0,0);

	var blueCircle = new Circle(cxt,circleR,'blue');
	can.addSprite('blueC',blueCircle);
	//can.sprite.blueC.setStatus(100,300,600,-300,0,0);

//	var black1= new Circle(cxt,circleR,'gray');
//	can.addSprite('black1',black1);
//	can.sprite.black1.setStatus(100,100,0,0);

	console.log(can);
	//canvas 元素
	var c = document.getElementById('can');

	//鼠标控制的圈
	var mouseCircle = new Circle(cxt,circleR,'black');
	can.setGoal(mouseCircle);
	mouseCircle.x = -100;
	mouseCircle.y = -100;



	//canvas高度和宽度
	can.width = parseInt(c.getAttribute('width'));
	can.height = parseInt(c.getAttribute('height'));
	//mouseCircle.setStatus(100,300,600,300);


	//坐标
	c.addEventListener('mousemove',function(event) {
		var x = event.offsetX ;
		var y = event.offsetY ;
		//mouseCircle.clearSprite();
		mouseCircle.x = x;
		mouseCircle.y = y;
		//mouseCircle.draw();
		xy.innerHTML = 'Coor:x=' + x + ' y=' + y;
	});
	c.addEventListener('mouseout',function(event) {
		xy.innerHTML = 'mouse coor';
	});




	//click to 'stop' 'move'
	var flag = true;
	c.addEventListener('click',function(){
		if (flag == false) {
			can.stop();
			flag = true;
		}else {
			can.start();
			flag = false;
		}
	});


	var stop = document.getElementById('stop'); 
	stop.addEventListener('click',function() {
		if (flag == false) {
			can.stop();
			flag = true;
		}
	})

	var start = document.getElementById('start'); 
	start.addEventListener('click',function() {
		if (flag == true) {
			can.start();
			flag = false;
		}
	});

};

