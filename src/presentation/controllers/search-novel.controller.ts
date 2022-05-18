import { Controller, HttpResponse } from '@/presentation/protocols'
import { ok } from '@/presentation/helpers/http-helper'

export class SearchNovelController implements Controller {
    async handle(
        request: SearchNovelController.Request
    ): Promise<HttpResponse> {
        return ok([])
    }
}

export namespace SearchNovelController {
    export type Request = {
        term: string
    }
}
