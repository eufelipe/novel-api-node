import { mockNovelResult } from '@/tests/domain/mocks'
import { SearchNovelByTermRepository } from '@/data/protocols/db/search-novel-by-term.repository'

export class SearchNovelByTermRepositorySpy
    implements SearchNovelByTermRepository
{
    term: string
    result = mockNovelResult()

    async findByTerm(
        term: string
    ): Promise<SearchNovelByTermRepository.Result> {
        this.term = term
        return this.result
    }
}
