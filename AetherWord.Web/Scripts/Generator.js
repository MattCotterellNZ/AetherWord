
var Generator = (function () {
    function Generator() {
    }
    Generator.prototype.getMasterPasswordColour = function (masterPassword) {
        var hue;
        var saturation;
        var lightness;

        if (masterPassword !== "") {
            var hueHexString = CryptoJS.PBKDF2(masterPassword, "", { hasher: CryptoJS.algo.SHA256, iterations: 1, keySize: 1 }).toString(CryptoJS.enc.Hex);
            hue = (parseInt(hueHexString[0] + hueHexString[1], 16)) / 256 * 360;
            saturation = 100;
            lightness = 50;
        } else {
            hue = 0;
            saturation = 100;
            lightness = 100;
        }

        var hslCss = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
        return hslCss;
    };

    Generator.prototype.getAetherWord = function (masterPassword, domain) {
        var hashHexString = CryptoJS.PBKDF2(masterPassword, domain, { hasher: CryptoJS.algo.SHA256, iterations: 10000, keySize: 4 }).toString(CryptoJS.enc.Hex);
        var aetherwordAscii = [];

        for (var i = 0; i < hashHexString.length; i += 8) {
            var byte1 = parseInt(hashHexString.substr(i, 2), 16);
            var byte2 = parseInt(hashHexString.substr(i + 2, 2), 16);
            var byte3 = parseInt(hashHexString.substr(i + 4, 2), 16);
            var byte4 = parseInt(hashHexString.substr(i + 6, 2), 16);

            var block = ((byte1 << 24) >>> 0) + ((byte2 << 16) >>> 0) + ((byte3 << 8) >>> 0) + ((byte4 << 0) >>> 0);

            var char5 = block % 85;
            block = (block - char5) / 85;
            var char4 = block % 85;
            block = (block - char4) / 85;
            var char3 = block % 85;
            block = (block - char3) / 85;
            var char2 = block % 85;
            block = (block - char2) / 85;
            var char1 = block % 85;

            aetherwordAscii.push(char1 + 33, char2 + 33, char3 + 33, char4 + 33, char5 + 33);
        }
        ;
        return String.fromCharCode.apply(String, aetherwordAscii);
    };
    return Generator;
})();
//# sourceMappingURL=Generator.js.map
