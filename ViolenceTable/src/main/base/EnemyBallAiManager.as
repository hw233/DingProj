package main.base {
	import main.base.action.BaseEnemyMoveAction;
	
	import laya.utils.Pool;

	/**
	 * 基本小怪AI
	 * @author dingzhichao
	 *
	 */
	public class EnemyBallAiManager extends BaseAIManager {

		private var moveAction:BaseEnemyMoveAction;

		public function EnemyBallAiManager() {
			moveAction = Pool.getItemByClass("base.ai.action.BaseEnemyMoveAction", BaseEnemyMoveAction);
			addAction(moveAction);
		}

		override protected function loop():void {
//			owner.y += 1;
		}

	}
}