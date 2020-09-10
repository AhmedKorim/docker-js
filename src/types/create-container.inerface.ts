export interface CreateContainerBody {
  Hostname: string;
  Domainname: string;
  User: string;
  AttachStdin: boolean;
  AttachStdout: boolean;
  AttachStderr: boolean;
  Tty: boolean;
  OpenStdin: boolean;
  StdinOnce: boolean;
  Env: string[];
  Cmd: string[];
  Entrypoint: string;
  Image: string;
  Labels: Labels;
  Volumes: Volumes;
  Healthcheck: Healthcheck;
  WorkingDir: string;
  NetworkDisabled: boolean;
  MacAddress: string;
  ExposedPorts: ExposedPorts;
  StopSignal: string;
  HostConfig: HostConfig;
  NetworkingConfig: NetworkingConfig;
}

export interface Labels {
  'com.example.vendor': string;
  'com.example.license': string;
  'com.example.version': string;
}

export interface Volumes {
  '/volumes/data': VolumesData;
}

export interface VolumesData {}

export interface Healthcheck {
  Test: string[];
  Interval: number;
  Timeout: number;
  Retries: number;
  StartPeriod: number;
}

export interface ExposedPorts {
  '22/tcp': N22Tcp;
}

export interface N22Tcp {}

export interface HostConfig {
  Binds: string[];
  Tmpfs: Tmpfs;
  Links: string[];
  Memory: number;
  MemorySwap: number;
  MemoryReservation: number;
  KernelMemory: number;
  CpuPercent: number;
  CpuShares: number;
  CpuPeriod: number;
  CpuQuota: number;
  CpusetCpus: string;
  CpusetMems: string;
  IOMaximumBandwidth: number;
  IOMaximumIOps: number;
  BlkioWeight: number;
  BlkioWeightDevice: BlkioWeightDevice[];
  BlkioDeviceReadBps: BlkioDeviceReadBp[];
  BlkioDeviceReadIOps: BlkioDeviceReadIop[];
  BlkioDeviceWriteBps: BlkioDeviceWriteBp[];
  BlkioDeviceWriteIOps: BlkioDeviceWriteIop[];
  MemorySwappiness: number;
  OomKillDisable: boolean;
  OomScoreAdj: number;
  PidMode: string;
  PidsLimit: number;
  PortBindings: PortBindings;
  PublishAllPorts: boolean;
  Privileged: boolean;
  ReadonlyRootfs: boolean;
  Dns: string[];
  DnsOptions: string[];
  DnsSearch: string[];
  ExtraHosts: any;
  VolumesFrom: string[];
  CapAdd: string[];
  CapDrop: string[];
  GroupAdd: string[];
  RestartPolicy: RestartPolicy;
  NetworkMode: string;
  Devices: any[];
  Sysctls: Sysctls;
  Ulimits: Ulimit[];
  LogConfig: LogConfig;
  SecurityOpt: any[];
  StorageOpt: StorageOpt;
  CgroupParent: string;
  VolumeDriver: string;
  ShmSize: number;
}

export interface Tmpfs {
  '/run': string;
}

export interface BlkioWeightDevice {}

export interface BlkioDeviceReadBp {}

export interface BlkioDeviceReadIop {}

export interface BlkioDeviceWriteBp {}

export interface BlkioDeviceWriteIop {}

export interface PortBindings {
  '22/tcp': N22Tcp2[];
}

export interface N22Tcp2 {
  HostPort: string;
}

export interface RestartPolicy {
  Name: string;
  MaximumRetryCount: number;
}

export interface Sysctls {
  'net.ipv4.ip_forward': string;
}

export interface Ulimit {}

export interface LogConfig {
  Type: string;
  Config: Config;
}

export interface Config {}

export interface StorageOpt {}

export interface NetworkingConfig {
  EndpointsConfig: EndpointsConfig;
}

export interface EndpointsConfig {
  isolated_nw: IsolatedNw;
}

export interface IsolatedNw {
  IPAMConfig: Ipamconfig;
  Links: string[];
  Aliases: string[];
}

export interface Ipamconfig {
  IPv4Address: string;
  IPv6Address: string;
  LinkLocalIPs: string[];
}
export interface CreateContainerResponse {
  Id: string;
  Warnings: any[];
}
