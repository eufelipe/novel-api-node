import faker from '@faker-js/faker'
import { SearchNovelByTermRepositorySpy } from '@/tests/data/mocks'
import { DbSearchNovelByTerm } from '@/data/usecases/db-search-novel-by-term'

type SutTypes = {
    sut: DbSearchNovelByTerm
    searchNovelByTermRepositorySpy: SearchNovelByTermRepositorySpy
}

const makeSut = (): SutTypes => {
    const searchNovelByTermRepositorySpy = new SearchNovelByTermRepositorySpy()

    const sut = new DbSearchNovelByTerm(searchNovelByTermRepositorySpy)
    return {
        sut,
        searchNovelByTermRepositorySpy,
    }
}

let term: string

describe('DbSearchNovelByTerm UseCase', () => {
    beforeEach(() => {
        term = faker.lorem.text()
    })

    test('Should call SearchNovelByTermRepository with correct values', async () => {
        const { sut, searchNovelByTermRepositorySpy } = makeSut()
        await sut.findByTerm(term)

        expect(searchNovelByTermRepositorySpy.term).toBe(term)
    })
})
