module egret{
    export class TemplateWindow extends Window{
        public constructor(){
            super(ApplicationLayerType.UI);
        }
        /**
         * 窗口打开时自动调用的初始化 方法
         *
         */
        public initWindow(){

        }
        /**
         * 窗口已实例化，重新打开时，通常用于添加事件，重置显示等
         *
         */
        public recall():void {
            super.recall();
        }
        /**
         * 添加窗口事件，此方法只在recall()中自动调用，其它地方无调用，需要时手动调用
         *
         */
        public addEvents():void {
            super.addEvents();
        }
        /**
         * 全局更新时调用，此方法重写时，不用调用super.globalUpdate()
         * @param updateType:int 更新类型
         * @param args
         * @see #ApplicationManager.globalUpdate()
         *
         */
        public globalUpdate(updateType:number, ...args):void {

        }
        /**
         * 自身更新时调用，此方法重写时，不用调用super.update()
         * @param args
         * @see #ApplicationManager.update()
         */
        public update(...args):void {
            
        }
        /**
         * 窗口移除时，主要用于清除事件等
         *
         */
        public remove():void {
            super.remove();
        }

        /**
         * 销毁处理
         */
        public destroy():void {
            if(this._isDestroy) return;

            super.destroy();
        }
    }
}