import {DockerApi} from '../dist';

const api = new DockerApi();

async function main() {
	// list containers
	const containersList = await api.container.list();
	for (const container of containersList) {
		// stop container
		await api.container.stop(container.Id);
	}
	for (const container of containersList) {
		// start containers
		await api.container.start(container.Id);
	}

	for (const container of containersList) {
		// restart containers
		await api.container.start(container.Id);
	}
	for (const container of containersList) {
		// forced remove for containers
		await api.container.remove(container.Id, {
			force: true,
		});
	}


}
