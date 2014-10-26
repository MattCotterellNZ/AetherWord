/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="Generator.d.ts" />
declare var $: JQueryStatic;
declare class LoginPage {
    private generator;
    constructor();
    public changeMasterPasswordBoxColor(inputElement: HTMLInputElement): void;
    public changeAetherwordDisplay(masterPasswordElement: HTMLInputElement, domainElement: HTMLInputElement): void;
}
