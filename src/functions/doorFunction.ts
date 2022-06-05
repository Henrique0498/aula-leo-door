import DoorModel from "../model/DoorModel";

export function createDoor(amount: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: amount }, (_, i) => {
    const number = i + 1;
    const haveGift = number === doorWithGift;

    return new DoorModel(number, haveGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  doorModified: DoorModel
): DoorModel[] {
  return doors.map((doorCurrent) => {
    const equalModified = doorCurrent.number === doorModified.number;

    if (equalModified) {
      return doorModified;
    } else {
      return doorModified.open ? doorCurrent : doorCurrent.makeOff();
    }
  });
}
