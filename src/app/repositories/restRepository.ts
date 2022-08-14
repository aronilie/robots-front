interface RestRepositoryType<T> {
  loadRobots: () => Promise<T[]>;
}

export class RestRepository<T> implements RestRepositoryType<T> {
  constructor(private APIUrl: string) {}

  async loadRobots() {
    const response = await fetch(this.APIUrl);
    return response.json();
  }
}
