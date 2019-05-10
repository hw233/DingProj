class WeaponView extends DLG.CComponent {
	public onLoadCallBack: Function;
	public onLoadCallTarget: any;
	public isLoad: boolean;

	public back_btn: DLG.CButton;
	public close_btn: DLG.CButton;
	public tipLab: DLG.CButton;

	public list: DLG.CList;

	public weapon_img: DLG.CImage;
	public weapon_name: DLG.CImage;
	public weapon_activity: DLG.CImage;

	public attr_hp: DLG.CLabel;
	public attr_atk: DLG.CLabel;
	public attr_def: DLG.CLabel;

	public skill_txt: DLG.CLabel;

	public vmc_box:DLG.CGroup;
	public imgWeapon:eui.Image;

	public constructor() {
		super();
		let self = this;
		self.skinName = "resource/skins/weapon/WeaponView.exml";
		self.addEventListener(eui.UIEvent.CREATION_COMPLETE, self.createCompleteEvent, self);
	}

	/** 创建完成*/
	public createCompleteEvent(event: eui.UIEvent): void {
		let self = this;
		self.isLoad = true;
		self.removeEventListener(eui.UIEvent.CREATION_COMPLETE, self.createCompleteEvent, self);

		if (self.onLoadCallBack) {
			self.onLoadCallBack.call(self.onLoadCallTarget);
		}
	}


	public onDestroy(): void {
		let self = this;
		self.onLoadCallBack = null;
		self.onLoadCallTarget = null;
		self.isLoad = null;
		super.onDestroy();
	}
}