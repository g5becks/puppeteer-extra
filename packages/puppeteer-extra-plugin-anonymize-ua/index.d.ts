import {PuppeteerExtraPlugin} from '../puppeteer-extra/src'

export type AnonymizeOptions = {
  stripHeadless: boolean
  makeWindows: boolean
  customFn: (userAgent: string) => string
}

export default function (options: AnonymizeOptions): PuppeteerExtraPlugin
