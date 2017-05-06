var Activity = require('android.app.Activity');
var activity = new Activity(Ti.Android.currentActivity);

var SmartGLView = require("fr.arnaudguyon.smartgl.opengl.SmartGLView");
var SmartGLViewController = require("fr.arnaudguyon.smartgl.opengl.SmartGLViewController");
var RenderPassSprite = require("fr.arnaudguyon.smartgl.opengl.RenderPassSprite");
var SmartGLRenderer = require("fr.arnaudguyon.smartgl.opengl.SmartGLRenderer");
var Sprite = require("fr.arnaudguyon.smartgl.opengl.Sprite");
var renderPassSprite = new RenderPassSprite();
var smartGLView = new SmartGLView(Ti.Android.currentActivity);
var TouchHelperEvent = require("fr.arnaudguyon.smartgl.touch.TouchHelperEvent");
//var touchHelper = new TouchHelperEvent();

function onOpen(e) {
	smartGLView.setDefaultRenderer(Ti.Android.currentActivity);

	var smartController = new SmartGLViewController({
		onPrepareView: function() {
			var renderer = smartGLView.getSmartGLRenderer();
			renderer.addRenderPass(renderPassSprite);

			var sprite = new Sprite(100, 100);
			mSprite.setPivot(0.5, 0.5);
			mSprite.setPos(60, 60);
			//mSprite.setTexture(mSpriteTexture);
			renderPassSprite.addSprite(mSprite);
			return true;
		},
		onReleaseView: function() {
			return true;
		},
		onTick: function() {
			console.log("Tick");
			return true;
		},
		onTouchEvent: function() {
			console.log("touch");
			return true;
		}
	});
	// adding interfaces
	// smartGLView.setController(smartController); // TODO freezing the app :(
}

$.index.addEventListener("open", onOpen);
$.index.add(smartGLView);
$.index.open();
