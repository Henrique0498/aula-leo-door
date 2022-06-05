export default class DoorModel {
  #number: number
  #present: boolean
  #select: boolean
  #open: boolean

  constructor(number: number, present = false, select = false, open = false){
    this.#number = number
    this.#present = present
    this.#select = select
    this.#open = open
  }

  get number(){
    return this.#number
  }
  get present(){
    return this.#present
  }
  get select(){
    return this.#select
  }
  get open(){
    return this.#open
  }

  makeOff(){
    return new DoorModel(this.number, this.present, false, this.open)
  }

  changeSelect(){
    const select = !this.select

    return new DoorModel(this.number, this.present, select, this.open)
  }

  changeOpen(){
    return new DoorModel(this.number, this.present, this.select, true)
  }
}
