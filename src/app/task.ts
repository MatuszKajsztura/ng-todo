export class Task {

  constructor(
    public name: string,
    public date: Date = new Date(),
    public done: boolean = false
  ) { }

}

