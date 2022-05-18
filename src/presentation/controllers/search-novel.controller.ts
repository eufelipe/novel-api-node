import { Controller, HttpResponse } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers/http-helper'
import { LoadNovelResult } from '@/domain/novel/usecases/load-novel-result'

export class SearchNovelController implements Controller {
    constructor(private readonly loadNovelResult: LoadNovelResult) {}

    async handle(
        request: SearchNovelController.Request
    ): Promise<HttpResponse> {
        try {
            const { term } = request

            const novelResult = await this.loadNovelResult.search(term)
            return ok(novelResult)
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace SearchNovelController {
    export type Request = {
        term: string
    }
}
