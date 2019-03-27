module egret{
    /**
     * 游戏启动器，因egret的Main类为外部类，所以使用启动器，使游戏逻辑回到egret包中
     */
    export class GameRunner extends ApplicationRunner{
        public constructor(){
            super();

            egret.Profiler.getInstance().run();

            SceneManager.getInstance().enterScene(SceneType.NORMAL_COPY,1001);
            (<SceneWindow>SceneManager.getInstance().scene).nextTurn();

            var effect:ElementEffect = <ElementEffect>SceneElementManager.getInstance().getElement(ElementEffect);
            effect.setIsCheckResource(false);
            effect.x = 200;
            effect.y = 200;
            effect.setMovieName(MovieName.EFFECT_01);
            effect.addToScene();
        }
    }
}