import { SearchNovelController } from '@/presentation/controllers/search-novel.controller'
import { serverError } from '@/presentation/helpers'
import { throwError } from '@/tests/domain/mocks/test-helpers'
import { LoadNovelResultSpy } from '@/tests/presentation/mocks/mock-novel-results'

import faker from '@faker-js/faker'

const mockRequest = (): SearchNovelController.Request => ({
    term: faker.lorem.word(),
})

type SutTypes = {
    sut: SearchNovelController
    loadNovelResultSpy: LoadNovelResultSpy
}

const makeSut = (): SutTypes => {
    const loadNovelResultSpy = new LoadNovelResultSpy()
    const sut = new SearchNovelController(loadNovelResultSpy)
    return {
        sut,
        loadNovelResultSpy,
    }
}

describe('Search Novel Controller', () => {
    test('Should call LoadNovelResult with correct values', async () => {
        const { sut, loadNovelResultSpy } = makeSut()
        const request = mockRequest()
        await sut.handle(request)
        expect(loadNovelResultSpy.term).toBe(request.term)
    })

    it('Should return 500 if LoadNovelResult throws', async () => {
        const { sut, loadNovelResultSpy } = makeSut()

        jest.spyOn(loadNovelResultSpy, 'search').mockImplementationOnce(
            throwError
        )
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serverError(new Error()))
    })
})
