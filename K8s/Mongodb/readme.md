helm repo add stable https://kubernetes-charts.storage.googleapis.com
helm install --name mongodb-replicaset stable/mongodb-replicaset --namespace mongo

1. After the statefulset is created completely, one can check which instance is primary by running:

    $ for ((i = 0; i < 3; ++i)); do kubectl exec --namespace mongo mongodb-replicaset-$i -- sh -c 'mongo --eval="printjson(rs.isMaster())"'; done

2. One can insert a key into the primary instance of the mongodb replica set by running the following:
    MASTER_POD_NAME must be replaced with the name of the master found from the previous step.

    $ kubectl exec --namespace mongo MASTER_POD_NAME -- mongo --eval="printjson(db.test.insert({key1: 'value1'}))"

3. One can fetch the keys stored in the primary or any of the slave nodes in the following manner.
    POD_NAME must be replaced by the name of the pod being queried.

    $ kubectl exec --namespace mongo POD_NAME -- mongo --eval="rs.slaveOk(); db.test.find().forEach(printjson)"

4. Cleanup
helm delete mongodb-replicaset
