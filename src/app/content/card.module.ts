

export class CardModule {

  public head: string;
  public about: string;
  public imagePath: string;

  constructor(head: string, about: string, imagePath: string) {
    this.head = head;
    this.about = about;
    this.imagePath = imagePath;
  }
}
