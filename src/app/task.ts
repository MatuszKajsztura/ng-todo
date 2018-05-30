export class Task {

  constructor(
    public id: string,
    public name: string,
    public date: Date = new Date(),
    public done: boolean = false
  ) { }

}

