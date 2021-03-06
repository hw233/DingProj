﻿package {
	import laya.net.ResourceVersion;
	import laya.utils.Handler;
	import laya.webgl.WebGL;
	
	import view.TestView;

	public class LayaUISample {

		public function LayaUISample() {
			//初始化引擎
			Laya.init(640, 1180, WebGL);

			//激活资源版本控制
			ResourceVersion.enable("version.json", Handler.create(this, beginLoad), ResourceVersion.FILENAME_VERSION);
		}

		private function beginLoad():void {
			//加载引擎需要的资源
			Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, onLoaded));
		}

		private function onLoaded():void {
			//实例UI界面
			var testView:TestView = new TestView();
			Laya.stage.addChild(testView);
		}
	}
}
