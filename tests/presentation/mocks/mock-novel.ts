import { LoadNovel, LoadNovels } from '@/domain/novel/usecases/load-novel'
import { mockNovel } from '@/tests/domain/mocks'

export class LoadNovelSpy implements LoadNovel {
    result = mockNovel()

    async load(): Promise<LoadNovels.Result> {
        return this.result
    }
}
