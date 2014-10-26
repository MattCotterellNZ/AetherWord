/// <reference path="typings/cryptojs/cryptojs.d.ts" />

// ReSharper disable once InconsistentNaming
declare var CryptoJS: CryptoJS.CryptoJSStatic;
declare var base85: any;

class Generator {
    getMasterPasswordColour(masterPassword: string): string {
        var hue: number;
        var saturation: number;
        var lightness: number;

        if (masterPassword !== "") {
            var hueHexString : string = CryptoJS.PBKDF2(masterPassword, "", { hasher: CryptoJS.algo.SHA256, iterations: 1, keySize: 1 }).toString(CryptoJS.enc.Hex);
            hue = (parseInt(hueHexString[0] + hueHexString[1], 16)) / 256 * 360;
            saturation = 100;
            lightness = 50;
        } else {
            hue = 0;
            saturation = 100;
            lightness = 100;
        }

        var hslCss : string = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
        return hslCss;
    }

    getAetherWord(masterPassword: string, domain: string): string {
        var hashHexString: string = CryptoJS.PBKDF2(masterPassword, domain, { hasher: CryptoJS.algo.SHA256, iterations: 10000, keySize: 4 }).toString(CryptoJS.enc.Hex);
        var aetherwordAscii: number[] = [];

        for (var i = 0; i < hashHexString.length; i += 8) {
            var byte1: number = parseInt(hashHexString.substr(i, 2), 16);
            var byte2: number = parseInt(hashHexString.substr(i + 2, 2), 16);
            var byte3: number = parseInt(hashHexString.substr(i + 4, 2), 16);
            var byte4: number = parseInt(hashHexString.substr(i + 6, 2), 16);

            var block: number =
                ((byte1 << 24) >>> 0) + // Shift right to force unsigned number
                ((byte2 << 16) >>> 0) +
                ((byte3 << 8) >>> 0) +
                ((byte4 << 0) >>> 0);

            var char5: number = block % 85; block = (block - char5) / 85;
            var char4: number = block % 85; block = (block - char4) / 85;
            var char3: number = block % 85; block = (block - char3) / 85;
            var char2: number = block % 85; block = (block - char2) / 85;
            var char1: number = block % 85;

            aetherwordAscii.push(
                char1 + 33,
                char2 + 33,
                char3 + 33,
                char4 + 33,
                char5 + 33
                );
        };
        return String.fromCharCode.apply(String, aetherwordAscii);
    }
}