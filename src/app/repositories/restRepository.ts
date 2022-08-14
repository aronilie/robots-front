interface RestRepositoryType<T> {
  loadRobots: () => Promise<T[]>;
}

export class RestRepository<T> implements RestRepositoryType<T> {
  constructor(private url: string) {}

  async loadRobots() {
    const response = await fetch(this.url);
    return response.json();
  }
}
