1. Changed SCHEMA_REGISTRY_LOG4J_ROOT_LOGLEVEL: INFO to SCHEMA_REGISTRY_LOG4J_ROOT_LOGLEVEL: ERROR in docker/kafka-clusters-only.yaml and docker/kafka-ui.yaml to see only errors log (kazhetsya it didn't work)

2. mvn release:update-versions -DautoVersionSubmodules=true to change version to 1.1.0-SNAPSHOT 

3.  In files

    docker-compose.yaml
	docker/kafka-ui.yaml
	kafka-ui-api/Dockerfile

    changed ports mapping from 8080:8080 to 8000:8080

