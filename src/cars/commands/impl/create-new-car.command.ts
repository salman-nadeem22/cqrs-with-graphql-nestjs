export class CreateNewCarCommand {
  constructor(
    public readonly name: string,
    public readonly carNumber: number,
  ) {}
}
