import { Novel } from '@/domain/novel/entity/novel'

export interface LoadNovel {
    load: (id: string) => Promise<LoadNovels.Result>
}

export namespace LoadNovels {
    export type Result = Novel
}
