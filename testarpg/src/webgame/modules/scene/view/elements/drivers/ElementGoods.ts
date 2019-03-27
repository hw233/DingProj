module egret{
    /**
     * 掉落物品
     */
    export  class ElementGoods extends SceneElement{
        //物品图标
        private _image:Image;

        public constructor(){
            super();

            this._image = new egret.Image(null,50,50);
            this._image.isShowLoading = false;
            this._image.x = -this._image.width / 2;
            this._image.y = -this._image.height;
            this.addChild(this._image);

            this._namePad.y = this._image.y - 10;
        }
        //
        public addToScene():void{
            super.addToScene();

            var lo:GoodsLo = <GoodsLo>this._data.lo;

            this._image.url = PathData.getInstance().getResourceUrl(PathData.PATH_IMAGES_PROP,lo.iconId);
        }
    }
}