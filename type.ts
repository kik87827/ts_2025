type Animal = string | number | undefined;
let animal: Animal ;
 
type Animal2 = { name: string; age: number };
let animal2: Animal2 = { name: "kim", age: 20 };

const from = { region : 'seoul'};
from.region = 'busan';

type GirlFriend = {
    readonly name? : string
}
const girl: GirlFriend = {
  name: "embal",
};


type NameKim = string;
type AgeKim = number;
type PersonKim = NameKim | AgeKim;


type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position :NewType = { x:10, y:20}
/* girl.name = 'ura'; */

