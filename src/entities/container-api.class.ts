import { AxiosInstance } from 'axios';
import { Container, CreateContainerBody, CreateContainerResponse } from '../types';
import { ContainerListContainersQuery, ContainerRemoveFlags } from '../types';

export class ContainerApi {
  private readonly client: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.client = api;
  }

  public async list(q: Partial<ContainerListContainersQuery> = {}): Promise<Container[]> {
    const { data: containers } = await this.client.get<Container[]>(`/containers/json`, {
      params: q,
    });
    return containers;
  }

  async create(
    parms: Partial<CreateContainerBody>,
    name?: string | undefined,
  ): Promise<CreateContainerResponse> {
    const res = await this.client.post<CreateContainerResponse>(`/containers/create`, parms, {
      params: name
        ? {
            name,
          }
        : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  }

  async remove(id: string, flags: ContainerRemoveFlags = {}) {
    let params: any = { ...flags };
    params.v = flags.removeVolumes;
    delete params.removeVolumes;
    await this.client.delete<void>(`/containers/${id}`, { params });
  }

  /* async archiveContainer(
    id: string,
    _flags?: {
      removeVolumes: boolean;
      link: boolean; //Remove the specified link associated to the container.
      force: boolean;
    },
  ) {
    await this.client.post<void>(`/containers/${id}`);
  }*/

  async stop(id: string): Promise<void> {
    await this.client.post<void>(`/containers/${id}/pause`);
  }

  async start(id: string): Promise<void> {
    await this.client.post<void>(`/containers/${id}/unpause`);
  }

  async restart(id: string): Promise<void> {
    await this.client.post<void>(`/containers/${id}/restart`);
  }
}
