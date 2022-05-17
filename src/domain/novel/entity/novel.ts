import Entity from '@/domain/@shared/entity/entity.abstract'

export class Novel extends Entity {
    private _name: string

    constructor(id: string, name: string) {
        super()
        this._id = id
        this._name = name
        this.validate()
    }

    get name(): string {
        return this._name
    }

    validate(): boolean {
        if (this._id.length === 0) {
            throw new Error('Id is required')
        }
        if (this._name.length === 0) {
            throw new Error('Name is required')
        }

        return true
    }
}
