import { LoadNovelResult } from '@/domain/novel/usecases/load-novel-result'
import { mockNovelResult } from '@/tests/domain/mocks'

export class LoadNovelResultSpy implements LoadNovelResult {
    term: string
    result = mockNovelResult()

    async search(term: string): Promise<LoadNovelResult.Result> {
        this.term = term
        return this.result
    }
}
