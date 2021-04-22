# KeyValue Pipe 
Angular supports iteration over map in html templates through `keyValue` pipe. This repository demonstrate the use of keyValue and sorting feature supported with this.

## Problem Statement
There is an list of registered vehicles provided to application which give details about the vehicle number and the company name of the vehicle.

```typescript
    export const vehicleList = [
        ...
        ...
        {
        number: "MH12-KY-1234",
        company: "Maruti"
        },
        {
        number: "MH12-KY-1235",
        company: "BMW"
        },
        {
        number: "MH12-KY-1236",
        company: "Hyundai"
        },
        ...
        ...
  ]
```
Now app got requirement to show the vehicle company name and total number of vehicle registered for each brand.

## Solution

One of the best solution to such kind of problem is to create a map having key/value pair of companies and total number of vehicles registerd.

It can be done like below

```typescript
    vehicleList.map(vehicle => {
      this.vehicleCategories.set(vehicle.company, (this.vehicleCategories.get(vehicle.company) ?? 0) + 1);
    });
```
Now `vehicleCategories` has key/value pair of vehichle company and total number of vehicle registed of that companies.

### Iterating map in template file
Now application can iterate map in template file with the keyValue pipe like below
```html
<div>
  <h1>Vehicle List</h1>
  <table border=1>
    <tr>
      <th>Company</th>
      <th>Total Number of Vehicles</th>
    </tr>
    <tr *ngFor="let company of vehicleCategories | keyvalue">
      <td>{{company.key}}</td>
      <td>{{company.value}}</td>
    </tr>
  </table>
</div>
```
It will give result like below

![](doc-res/vehicle-unsorted.png)
### Showing result sorted
Seeing above picture clearing give urge of seeing the result in sorted order. This is possible as keyValue pipe support sorting function as parameter. 
We can rewrite our template as below
```html
<div>
  <h2>Vehicle List</h2>
  <table border="1">
    <tr>
      <th>Company</th>
      <th>Total Number of Vehicles</th>
    </tr>
    <tr *ngFor="let company of vehicleCategories | keyvalue : sort">
      <td>{{company.key}}</td>
      <td>{{company.value}}</td>
    </tr>
  </table>
</div>
```
Now we can write the sort function in component.ts file for decending order  like below
```typescript
sort(vehichleA: {key: string; value: number;}, vehichleB: {key: string; value: number;}) {
    return vehichleB.value - vehichleA.value;
  }
```
Loading after all the above changes suggested for sorting we will get view as follow

![](doc-res/vehicle-sorted.png)

Thanks for reading!!!
