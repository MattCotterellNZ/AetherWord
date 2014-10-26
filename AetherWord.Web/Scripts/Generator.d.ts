/// <reference path="typings/cryptojs/cryptojs.d.ts" />
declare var CryptoJS: CryptoJS.CryptoJSStatic;
declare var base85: any;
declare class Generator {
    public getMasterPasswordColour(masterPassword: string): string;
    public getAetherWord(masterPassword: string, domain: string): string;
}
