<h2 align="center">Docker Engine HTTP wrapper for nodejs</h2>
<div align="center">
  <strong>
       This wrapper makes it easy to control docker engine via nodejs , it utilizes the HTTP API provided by Docker
  </strong>
</div>
<div align="center">
  <sub>
      ⚠ Still Under Constructions ⚠.
  </sub>
</div>

## About

this implementation of docker engine still under Constructions , only the container api is working now,it's strongly typed
## example
```javascript
import DockerApi from 'docker-engine';
const dockerApi = new DockerApi('/var/run/docker.sock');
dockerApi.container.list()
.then((containersList) => {
  console.log(containersList.length);
});

```
