import { LiteralMap } from '@angular/compiler';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { vehicleList } from "./vehicle-categories";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'keyvalue-pipe';
  public vehicleCategories: Map<string, number> = new Map<string, number>(); 
  public ngOnInit() {
    vehicleList.map(vehicle => {
      this.vehicleCategories.set(vehicle.company, (this.vehicleCategories.get(vehicle.company) ?? 0) + 1);
    })
  }

  sort(vehichleA: {key: string; value: number;}, vehichleB: {key: string; value: number;}) {
    return vehichleB.value - vehichleA.value;
  }
}
