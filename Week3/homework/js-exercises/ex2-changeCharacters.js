/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */

'use strict';

class Person {
  constructor(name, age, place, wife, children, job, hobbies = []) {
    this.name = name;
    this.age = age;
    this.place = place;
    this.wife = wife;
    this.children = children;
    this.job = job;
    this.hobbies = hobbies;
  }

  get name() {
    return this.name;
  }

  get age() {
    return this.age;
  }

  get place() {
    return this.place;
  }

  get wife() {
    return this.wife;
  }

  get children() {
    return this.children;
  }

  get job() {
    return this.job;
  }

  get hobbies() {
    return this.hobbies;
  }

  family() {
    return `${this.name} has a beautiful ${this.wife} and ${this.children} children`;
  }
}

class Animal {
  constructor(kind, name, age, color, enjoy, task) {
    this.kind = kind;
    this.name = name;
    this.age = age;
    this.color = color;
    this.enjoy = enjoy;
    this.task = task;
  }

  get kind() {
    return this.kind;
  }

  get name() {
    return this.name;
  }

  get age() {
    return this.age;
  }

  get color() {
    return this.color;
  }

  get enjoy() {
    return this.enjoy;
  }

  get task() {
    return this.task;
  }

  description() {
    return `${this.name} is a ${this.age} years old ${this.kind} and has a ${this.color} color`;
  }
}
const abdulkaram = new Person(
  'Abdulkaram',
  35,
  'Riyadh',
  'wife',
  3,
  'construction worker',
  ['eat date', 'smoke water pipe'],
);
const adel = new Animal(
  'Horse',
  'Adel',
  15,
  'brown',
  'eat grass',
  'transport material',
);

console.log(abdulkaram.family());
console.log(adel.description());
