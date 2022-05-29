import { SearchNovelByTerm } from '@/domain/novel/usecases'
import { SearchNovelByTermRepository } from '@/data/protocols/db'

export class DbSearchNovelByTerm implements SearchNovelByTerm {
    constructor(
        private readonly searchNovelByTermRepository: SearchNovelByTermRepository
    ) {}

    async findByTerm(term: string): Promise<SearchNovelByTerm.Result> {
        return this.searchNovelByTermRepository.findByTerm(term)
    }
}
