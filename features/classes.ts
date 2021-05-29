class Vehicle {
  model: string
  constructor(model: string) {
    this.model = model
  }
  public driven(): void {
    console.log('eeeeey')
  }

  private hoke(): void { // only class Vehicle
    console.log('more methods')
  }
}

const vehicle = new Vehicle('ford');
console.log(vehicle.model)

// class Car extends Vehicle {
//   private gretting(): void {
//     console.log('hola');
//   }

//   newGretting() {
//     this.gretting();
//   }
// }

// const car = new Car();
// car.newGretting()
