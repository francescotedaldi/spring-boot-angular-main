import {ActiveModel, Validator} from '../../../model/active.model';
import {BattleshipInstance, BattleshipInstanceJSON} from './battleship-instance.model';
import {BattleshipCell, BattleshipCellJSON} from './battleship-cell.model';


export interface BattleshipGameJSON {
  instance: BattleshipInstanceJSON;
  usercells: BattleshipCellJSON[][];
  pccells: BattleshipCellJSON[][];
}

const validator = new Validator(
  'Battleship Game',
  ['instance'],
  []
);



export class BattleshipGame extends ActiveModel {
  public instance: BattleshipInstance;
  public usercells: BattleshipCell[][];
  public pccells: BattleshipCell[][];
  private dimension: number;

  public userMatrix: number[][];
  public pcMatrix: number[][];

  constructor(response: BattleshipGameJSON) {
    super(response, validator);
    if (response) {
      this.instance = new BattleshipInstance(response.instance);
      this.dimension = 10;
      this.placeShip();
      this.usercells = [];
      this.pccells = [];
      for (let i = 0; i < this.getDimension(); i++) {
        this.usercells[i] = [];
        this.pccells[i] = [];
      }
      for (let i = 0; i < this.getDimension(); i++) {
        for (let j = 0; j < this.getDimension(); j++) {
          if (this.userMatrix[i][j] === 1) {
            this.usercells[i][j] = new BattleshipCell(true);

          } else {
            this.usercells[i][j] = new BattleshipCell(false);
          }

          if (this.pcMatrix[i][j] === 1) { // condizione "fatta da Riccardo" per stabilire se la cella contiene una nave o meno
            this.pccells[i][j] = new BattleshipCell(true);
          } else {
            this.pccells[i][j] = new BattleshipCell(false);
          }
        }
      }
    }
  }

  public getDimension(): number {
    return  this.dimension;
  }

  public placeShip(): void {
    this.initMatrix();
    this.setShip(this.userMatrix);
    this.setShip(this.pcMatrix);
  }
  public initMatrix(): void {
    this.userMatrix = [];
    this.pcMatrix = [];
    for (let i = 0; i < this.getDimension(); i++) {
      this.userMatrix[i] = [];
      this.pcMatrix[i] = [];
    }
    for (let i = 0; i < this.getDimension(); i++) {
      for (let j = 0; j < this.getDimension(); j++) {
          this.userMatrix[i][j] = 0;
          this.pcMatrix[i][j] = 0;
      }
    }
  }
  public setShip(matrix: number[][]): void {
    for (let num = 0; num < 4; num++) {
     for (let len = 0; len <= num; len++) {
       let check: boolean = true;
       while (check) {
         const i: number = this.generateRandom(10);
         const j: number = this.generateRandom(10);
         if (this.controllo(i, j, matrix)) {
           check = false;
           let dir: number = this.generateRandom(4); // 0 Nord   1 Est   2 Sud   3 Ovest
           if (dir === 0) {   //NORD
             for (let dim = 0; dim < 4 - num; dim++) {
               if (this.controllo(i - 1 - dim, j, matrix) === false) check = true;
             }
             if (check === false) {
               for (let dim = 0; dim < 5 - num; dim++) {
                 matrix[i - dim][j] = 1;
               }
             }
           } else if (dir === 1) {  //EST
             for (let dim = 0; dim < 4 - num; dim++) {
               if (this.controllo(i, j + 1 + dim, matrix) === false) check = true;
             }
             if (check === false) {
               for (let dim = 0; dim < 5 - num; dim++) {
                 matrix[i][j + dim] = 1;
               }
             }
           } else if (dir === 2) { //SUD
             for (let dim = 0; dim < 4 - num; dim++) {
               if (this.controllo(i + 1 + dim, j, matrix) === false) check = true;
             }
             if (check === false) {
               for (let dim = 0; dim < 5 - num; dim++) {
                 matrix[i + dim][j] = 1;
               }
             }

           } else if (dir === 3) { // OVEST
             for (let dim = 0; dim < 4 - num; dim++) {
               if (this.controllo(i, j - 1 - dim, matrix) === false) check = true;
             }
             if (check === false) {
               for (let dim = 0; dim < 5 - num; dim++) {
                 matrix[i][j- dim] = 1;
               }
             }
           }
         }
       }
     }
    }
  }
// 1 barca da 5
// 2 barche da 4
// 3 barche da 3
// 4 barche da 2
  private generateRandom(i: number): number {
    return Math.floor(Math.round(Math.random() * 100) % i);
  }
  private controllo(i: number, j: number, matrix: number[][]): boolean {
    return i>=0 && i<10 && j>=0 && j<10 && matrix[i][j]===0;
  }
}
