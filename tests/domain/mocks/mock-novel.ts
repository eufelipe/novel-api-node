import { Novel } from '@/domain/novel/entity/novel'
import { faker } from '@faker-js/faker'

export const mockNovel = (): Novel => {
    const novel = new Novel(faker.datatype.uuid(), faker.random.words())
    return novel
}

export const mockNovelResult = (): Novel[] => [
    mockNovel(),
    mockNovel(),
    mockNovel(),
    mockNovel(),
]
