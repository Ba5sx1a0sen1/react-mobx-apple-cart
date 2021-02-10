import { action, computed, observable } from "mobx"

class AppleStore {
    @observable apples = []
    @observable number = 0
    @observable disabled = false

    @action.bound 
    appleAdd() {
        this.disabled = true
        this.number = this.number + 1
        setTimeout(() => {
            this.apples.push({
                number: this.number,
                isNormal: true,
                weight: Math.floor(215 + 15 * Math.random(0, 1)),
            })
            this.disabled = false
        }, 300)
    }

    @action.bound 
    appleEat(index) {
        this.apples.filter((apple) => apple.isNormal)[index]["isNormal"] = false
    }

    @computed get normalApple() {
        return this.apples.filter((apple) => apple.isNormal)
    }

    @computed get badApple() {
        return this.apples.filter((apple) => !apple.isNormal)
    }
}

const apple = new AppleStore()

export default apple
