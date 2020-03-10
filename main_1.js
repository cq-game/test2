(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_1_atlas_", frames: [[407,0,405,720],[0,0,405,720],[0,722,625,280],[0,1004,625,280],[0,1286,470,211]]}
];


// symbols:



(lib.Bitmap3 = function() {
	this.initialize(ss["main_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["main_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["main_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["main_1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["main_1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(img.CachedTexturedBitmap_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3380,1491);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.btn_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_11();
	this.instance.parent = this;
	this.instance.setTransform(-156.35,-70.05,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-156.35,-70.05,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-117.55,-52.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.3,-70,312.5,140);


(lib.btn_game_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_14();
	this.instance.parent = this;
	this.instance.setTransform(-175.75,-77.45,0.104,0.104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_game_start, new cjs.Rectangle(-175.7,-77.4,351.5,155), null);


(lib.scene_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.btn_game_start = new lib.btn_game_start();
	this.btn_game_start.name = "btn_game_start";
	this.btn_game_start.parent = this;
	this.btn_game_start.setTransform(0,259.4);

	this.timeline.addTween(cjs.Tween.get(this.btn_game_start).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-203,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_title, new cjs.Rectangle(-203,-360,405,720), null);


(lib.scene_ingame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.instance = new lib.btn_test();
	this.instance.parent = this;
	this.instance.setTransform(7.45,271.85);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.bg = new lib.btn_game_start();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(15.8,-9,1.4869,4.8078,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// Layer_1
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-203,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_ingame, new cjs.Rectangle(-245.5,-382.8,522.6,745.5), null);


// stage content:
(lib.main_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.scene_title.visible = true;
		
		this.scene_title.btn_game_start.addEventListener('click', GameStart.bind(this));
		
		function GameStart()
		{
			//alert("!");
			this.scene_title.visible = false;
			this.scene_ingame.visible = true;		
			this.scene_title.btn_game_start.removeEventListener('click', GameStart.bind(this));
			this.scene_ingame.bg.addEventListener('mousedown', GoToTitle.bind(this));
		}
		
		function GoToTitle()
		{	this.scene_title.visible = true;
			this.scene_ingame.visible = false;
			this.scene_title.btn_game_start.addEventListener('click', GameStart.bind(this));
			this.scene_ingame.bg.removeEventListener('mousedown', GoToTitle.bind(this));
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.scene_title = new lib.scene_title();
	this.scene_title.name = "scene_title";
	this.scene_title.parent = this;
	this.scene_title.setTransform(184.5,360);
	this.scene_title.visible = false;

	this.scene_ingame = new lib.scene_ingame();
	this.scene_ingame.name = "scene_ingame";
	this.scene_ingame.parent = this;
	this.scene_ingame.setTransform(203,360);
	this.scene_ingame.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scene_ingame},{t:this.scene_title}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,337.2,320.1,385.50000000000006);
// library properties:
lib.properties = {
	id: '406158BD489C30418D2DDFAC10CBC92B',
	width: 405,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_14.png?1583830059742", id:"CachedTexturedBitmap_14"},
		{src:"images/main_1_atlas_.png?1583830059737", id:"main_1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['406158BD489C30418D2DDFAC10CBC92B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;