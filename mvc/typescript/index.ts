// import initMap from './sample';
// import { process } from './inject';
import * as sample from './sample';
import { initMap } from './sample';

function ConsoleWrite(x: string): void {
  console.log(x);
}

ConsoleWrite('aaaa');

function deadfunction() {
  sample.initMap();
}

console.log(process.api);
