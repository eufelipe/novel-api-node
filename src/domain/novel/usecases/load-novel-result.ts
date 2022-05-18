import { Novel } from '../entity/novel'

export interface LoadNovelResult {
    search: (term: string) => Promise<LoadNovelResult.Result>
}

export namespace LoadNovelResult {
    export type Result = Novel[]
}
