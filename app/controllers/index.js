var Activity = require('android.app.Activity');
var activity = new Activity(Ti.Android.currentActivity);

var SmartGLView = require("fr.arnaudguyon.smartgl.opengl.SmartGLView");
var SmartGLViewController = require("fr.arnaudguyon.smartgl.opengl.SmartGLViewController");
var RenderPassSprite = require("fr.arnaudguyon.smartgl.opengl.RenderPassSprite");
var SmartGLRenderer = require("fr.arnaudguyon.smartgl.opengl.SmartGLRenderer");
var Sprite = require("fr.arnaudguyon.smartgl.opengl.Sprite");
var renderPassSprite = new RenderPassSprite();
var smartGLView = new SmartGLView(activity);
var TouchHelperEvent = require("fr.arnaudguyon.smartgl.touch.TouchHelperEvent");
//var touchHelper = new TouchHelperEvent();

function onOpen(e) {
	console.log("open");
	console.log("set renderer");
	smartGLView.setDefaultRenderer(activity);
	console.log("renderer set");
	var smartController = new SmartGLViewController({
		onPrepareView: function(glview) {
			console.log("on prepare");
			var renderer = smartGLView.getSmartGLRenderer();
			renderer.addRenderPass(renderPassSprite);
	
			var sprite = new Sprite(100, 100);
			mSprite.setPivot(0.5, 0.5);
			mSprite.setPos(60, 60);
			//mSprite.setTexture(mSpriteTexture);
			renderPassSprite.addSprite(mSprite);
			return true;
		},
		onReleaseView: function(glview) {
			console.log("on release");
			return true;
		},
		onTick: function(glview) {
			console.log("Tick");
			return true;
		},
		onTouchEvent: function(glview, touchEvent) {
			console.log("touch");
			return true;
		},
		onResizeView: function(glview) {
			console.log("resize");
			return true;
		}
	});

	// make transparent view
	//smartGLView.setZOrderOnTop(true);
	//smartGLView.getSmartGLRenderer().setClearColor(0,0,0,0);

	// adding interfaces	
	console.log("set controller");
	smartGLView.setController(smartController);
	console.log("controller set");
}
$.index.addEventListener("open", onOpen);
$.index.add(smartGLView);
$.index.open();
