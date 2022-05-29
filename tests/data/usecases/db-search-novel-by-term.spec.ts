import faker from '@faker-js/faker'
import { SearchNovelByTermRepositorySpy } from '@/tests/data/mocks'
import { DbSearchNovelByTerm } from '@/data/usecases/db-search-novel-by-term'
import { throwError } from '@/tests/domain/mocks'

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

    test('Should throw if SearchNovelByTermRepository throws', async () => {
        const { sut, searchNovelByTermRepositorySpy } = makeSut()
        jest.spyOn(
            searchNovelByTermRepositorySpy,
            'findByTerm'
        ).mockImplementationOnce(throwError)
        const promise = sut.findByTerm(term)
        await expect(promise).rejects.toThrow()
    })

    test('Should call SearchNovelByTermRepository if SearchNovelByTermRepository returns []', async () => {
        const { sut, searchNovelByTermRepositorySpy } = makeSut()
        searchNovelByTermRepositorySpy.result = []
        await sut.findByTerm(term)
        expect(searchNovelByTermRepositorySpy.term).toBe(term)
    })

    test('Should return Novel Results on success', async () => {
        const { sut, searchNovelByTermRepositorySpy } = makeSut()
        const surveyResult = await sut.findByTerm(term)
        expect(surveyResult).toEqual(searchNovelByTermRepositorySpy.result)
    })
})
