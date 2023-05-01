import { Component } from '@angular/core';

export interface plainInformation {
  plane: string;
  route: string;
  date: string;
  time: string;
}

export interface passengerInformation {
  name: string;
  checkedBag: string;
  cabinBag: string;
  seat: string;
}

export interface PersonTotal {
  name: string;
  count: number;
  fare: number;
  tax: number;
}

export interface Total {
  adult: PersonTotal;
  child: PersonTotal;
  infant: PersonTotal;
}

const data: plainInformation = {
  plane: 'FR 1925',
  route: 'Dublin — Warsaw Modlin',
  date: 'Wednesday, 1 March, 2023',
  time: '8:40 — 12:00 ',
};
const passenger: passengerInformation = {
  name: 'Harry Potter',
  checkedBag: '1checked bag (total 23 kg) included',
  cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
  seat: 'Seat 19E',
};
const passengers = [passenger, passenger, passenger];

const total = {
  adult: {
    name: 'adult',
    count: 3,
    fare: 150,
    tax: 90,
  },

  child: {
    name: 'child',
    count: 3,
    fare: 100,
    tax: 90,
  },

  infant: {
    name: 'infant',
    count: 3,
    fare: 50,
    tax: 10,
  },
};

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  data: plainInformation;
  passengers: passengerInformation[];
  total: Total;
  totalValue: number;

  constructor() {
    this.data = data;
    this.passengers = passengers;
    this.total = total;
    this.totalValue = this.totalF();
  }

  totalF(): number {
    return (
      this.total.infant.tax * this.total.infant.count +
      this.total.infant.fare * this.total.infant.count +
      this.total.adult.tax * this.total.adult.count +
      this.total.adult.fare * this.total.adult.count +
      this.total.child.tax * this.total.child.count +
      this.total.child.fare * this.total.child.count
    );
  }
}
