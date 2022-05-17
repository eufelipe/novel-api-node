import { Novel } from '@/domain/novel/entity/novel'

describe('Novel unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            new Novel('', 'any value')
        }).toThrowError('Id is required')
    })

    it('should throw error when name is empty', () => {
        expect(() => {
            new Novel('any value', '')
        }).toThrowError('Name is required')
    })

    it('should throw error when name is and id are empty', () => {
        expect(() => {
            new Novel('', '')
        }).toThrowError('Id is required')
    })

    it('should display name and id correctly', () => {
        const novel = new Novel('any id', 'any value')
        expect(novel.id).toEqual('any id')
        expect(novel.name).toEqual('any value')
    })
})
