import { Novel } from '@/domain/novel/entity/novel'

export interface SearchNovelByTerm {
    findByTerm: (term: string) => Promise<SearchNovelByTerm.Result>
}

export namespace SearchNovelByTerm {
    export type Result = Novel[]
}
