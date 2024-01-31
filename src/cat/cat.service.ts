import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  isChanged = false;
  constructor() {
    console.log('cat service created');
  }
  setIsChanged() {
    this.isChanged = true;
  }

  getIsChanged() {
    return this.isChanged;
  }
}
