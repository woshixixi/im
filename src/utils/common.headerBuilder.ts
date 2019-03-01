import * as crypto from "crypto"

const APP_KEY: string = "2723b412c032161d5f240aaa61b929cd"
const APP_SECRET: string = "17ea52a3fc7d"
const NONCE: string = "yskj2407"

export class HeaderBuilder {
  CurTime: string = Math.floor(Date.now() / 1000).toString()
  CheckSum: string = this.genCheckSum(APP_SECRET, NONCE, this.CurTime)

  private genCheckSum(
    appSecret: string,
    nonce: string,
    curTime: string
  ): string {
    const shaSum: crypto.Hash = crypto.createHash("sha1")
    shaSum.update(appSecret + nonce + curTime)
    return shaSum.digest("hex")
  }

  genStringfyData(data: object): string {
    const resultArray: string[] = []
    for (const property in data) {
      if (data.hasOwnProperty(property)) {
        const encodedKey: string = encodeURIComponent(property)
        const encodedValue: string = encodeURIComponent(data[property])
        resultArray.push(encodedKey + "=" + encodedValue)
      }
    }
    return resultArray.join("&")
  }

  genHeader(): object {
    return {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        AppKey: APP_KEY,
        Nonce: NONCE,
        CurTime: this.CurTime,
        CheckSum: this.CheckSum
      }
    }
  }
}
