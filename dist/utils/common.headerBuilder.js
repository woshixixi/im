"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const APP_KEY = "2723b412c032161d5f240aaa61b929cd";
const APP_SECRET = "17ea52a3fc7d";
const NONCE = "yskj2407";
class HeaderBuilder {
    constructor() {
        this.CurTime = Math.floor(Date.now() / 1000).toString();
        this.CheckSum = this.genCheckSum(APP_SECRET, NONCE, this.CurTime);
    }
    genCheckSum(appSecret, nonce, curTime) {
        const shaSum = crypto.createHash("sha1");
        shaSum.update(appSecret + nonce + curTime);
        return shaSum.digest("hex");
    }
    genStringfyData(data) {
        const resultArray = [];
        for (const property in data) {
            if (data.hasOwnProperty(property)) {
                const encodedKey = encodeURIComponent(property);
                const encodedValue = encodeURIComponent(data[property]);
                resultArray.push(encodedKey + "=" + encodedValue);
            }
        }
        return resultArray.join("&");
    }
    genHeader() {
        return {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                AppKey: APP_KEY,
                Nonce: NONCE,
                CurTime: this.CurTime,
                CheckSum: this.CheckSum
            }
        };
    }
}
exports.HeaderBuilder = HeaderBuilder;
//# sourceMappingURL=common.headerBuilder.js.map