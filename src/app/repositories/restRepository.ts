import Robot from "../../features/robots/models/Robots";

interface RestRepositoryType<T> {
  loadRobots: () => Promise<T[]>;
}

export class RestRepository<T> implements RestRepositoryType<T> {
  constructor(private APIUrl: string) {}

  async loadRobots() {
    const response = await fetch(this.APIUrl);
    return response.json();
  }

  async createRobot(newRobot: Robot) {
    await fetch(this.APIUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRobot),
    });
  }
}
