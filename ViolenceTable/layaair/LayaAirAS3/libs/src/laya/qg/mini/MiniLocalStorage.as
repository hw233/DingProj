package laya.qg.mini
{
	//import laya.utils.ErrorLog;

	/** @private **/
	public class MiniLocalStorage
	{
		/**
		 * 表示是否支持  <code>LocalStorage</code>。
		 */
		public static var support:Boolean = true;
		/**
		 *  数据列表。
		 */
		public static var items:*;
		public function MiniLocalStorage()
		{
		}
		public static function __init__():void {
			items = MiniLocalStorage;
		}
		
		/**
		 * 存储指定键名和键值，字符串类型。
		 * @param key 键名。
		 * @param value 键值。
		 */
		public static function setItem(key:String, value:*):void {
			QGMiniAdapter.window.qg.setStorageSync(key,value);
		}
		
		/**
		 * 获取指定键名的值。
		 * @param key 键名。
		 * @return 字符串型值。
		 */
		public static function getItem(key:String):String {
			return QGMiniAdapter.window.qg.getStorageSync(key);
		}
		
		/**
		 * 存储指定键名及其对应的 <code>Object</code> 类型值。
		 * @param key 键名。
		 * @param value 键值。是 <code>Object</code> 类型，此致会被转化为 JSON 字符串存储。
		 */
		public static function setJSON(key:String, value:Object):void {
			try
			{
				setItem(key,JSON.stringify(value));
			} 
			catch(error:Error) 
			{
				setItem(key, value);
			}
			
		}
		
		/**
		 * 获取指定键名对应的 <code>Object</code> 类型值。
		 * @param key 键名。
		 * @return <code>Object</code> 类型值
		 */
		public static function getJSON(key:String):Object {
			var tempData:* = getItem(key);
			try
			{
				return JSON.parse(tempData);
			} 
			catch(error:Error) 
			{
				return tempData;
			}
		}
		
		/**
		 * 删除指定键名的信息。
		 * @param key 键名。
		 */
		public static function removeItem(key:String):void {
			QGMiniAdapter.window.qg.removeStorageSync(key);
		}
		
		/**
		 * 清除本地存储信息。
		 */
		public static function clear():void {
			QGMiniAdapter.window.qg.clearStorageSync();
		}
		
		/**同步获取当前storage的相关信息**/
		public static function getStorageInfoSync():Object
		{
			try {
				var res:Object = QGMiniAdapter.window.qg.getStorageInfoSync()
				console.log(res.keys)
				console.log(res.currentSize)
				console.log(res.limitSize)
				return res;
			} catch (e) {
			}
			return null;
		}
	}
}