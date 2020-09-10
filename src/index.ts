import axios, { AxiosInstance } from 'axios';
import { ContainerApi } from './entities';

export class DockerApi {
  private readonly client: AxiosInstance;
  public readonly container: ContainerApi;

  constructor(dockerUnixUri: string = '/var/run/docker.sock') {
    this.client = axios.create({
      socketPath: `${dockerUnixUri}`,
    });
    this.container = new ContainerApi(this.client);
  }
}
export {
  ContainerRemoveFlags,
  ContainerListContainersQuery,
  Container,
  ContainerStatus,
} from './types';
export * from './entities';
