
var LoginPage = (function () {
    function LoginPage() {
        this.generator = new Generator();
    }
    LoginPage.prototype.changeMasterPasswordBoxColor = function (inputElement) {
        var hslColour = this.generator.getMasterPasswordColour(inputElement.value);
        document.body.style.background = hslColour;
    };

    LoginPage.prototype.changeAetherwordDisplay = function (masterPasswordElement, domainElement) {
        var aetherword = this.generator.getAetherWord(masterPasswordElement.value, domainElement.value);
        document.getElementById("aetherword-result").innerText = aetherword;
    };
    return LoginPage;
})();

$(document).ready(function () {
    var page = new LoginPage();

    jQuery('#masterpassword').on('input', function () {
        page.changeMasterPasswordBoxColor(this);
        page.changeAetherwordDisplay(this, document.getElementById("domain"));
    });
});
//# sourceMappingURL=LoginPage.js.map
