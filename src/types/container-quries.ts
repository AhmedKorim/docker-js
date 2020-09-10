export type ContainerStatus = 'exited' | 'created' | 'started' | 'running' | 'paused';

export interface ContainerListContainersQuery {
  all: boolean;
  limit: number;
  since: string;
  before: string;
  size: boolean;
  filters: string;
  exited: number;
  status: ContainerStatus;
}

export type ContainerRemoveFlags = Partial<{
  removeVolumes: boolean;
  link: boolean;
  force: boolean;
}>;
