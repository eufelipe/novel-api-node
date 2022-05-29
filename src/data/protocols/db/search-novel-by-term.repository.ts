import { Novel } from '@/domain/novel/entity/novel'

export interface SearchNovelByTermRepository {
    findByTerm: (term: string) => Promise<SearchNovelByTermRepository.Result>
}

export namespace SearchNovelByTermRepository {
    export type Result = Novel[]
}
