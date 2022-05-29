import { ServerError } from '@/presentation/errors'
import { HttpResponse } from '@/presentation/protocols'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data,
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack),
})
