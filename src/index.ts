import axios, { AxiosInstance } from 'axios';
import ContainerApi from './entities/container-api.class';

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
