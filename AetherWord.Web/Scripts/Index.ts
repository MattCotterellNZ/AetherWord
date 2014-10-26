/// <reference path="typings/jquery/jquery.d.ts"/>
/// <reference path="Generator.ts"/>

declare var $ : JQueryStatic;

class LoginPage {
    private generator: Generator;

    constructor() {
        this.generator = new Generator();
    }

    changeMasterPasswordBoxColor(inputElement: HTMLInputElement): void {
        var hslColour: string = this.generator.getMasterPasswordColour(inputElement.value);
        document.body.style.background = hslColour;
    }

    changeAetherwordDisplay(masterPasswordElement: HTMLInputElement, domainElement: HTMLInputElement): void {
        var aetherword: string = this.generator.getAetherWord(masterPasswordElement.value, domainElement.value);
        document.getElementById("aetherword-result").innerText = aetherword;
    }
}

$(document).ready(() => {
    var page: LoginPage = new LoginPage();

    jQuery('#masterpassword').on('input', function () {
        page.changeMasterPasswordBoxColor(this);
        page.changeAetherwordDisplay(this, <HTMLInputElement>document.getElementById("domain"));
    });

});