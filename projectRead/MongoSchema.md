<p align='center'>
  <a href="https://github.com/saibhreas">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white">
  </a>  
  <a href='https://www.linkedin.com/in/siobhanknuttel'>
      <img src='https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue'>
  </a>
    <a href='https://www.upwork.com/freelancers/siobhank4?viewMode=1'> 
    <img src='https://img.shields.io/badge/UpWork-6FDA44?style=for-the-badge&logo=Upwork&logoColor=white' witth="45" height="20"> 
  </a>
  
</p>
Basic MERN APP

# Minimal Notes on Mongo DB 

## *No real rules on Schema*

- The structure you choose is up to you.  You create your framework/ Schema.  Schema allows for easy additons or deletions of new variables.

To connect to the database use terminal in root 

    $mongo

Open Atlas and aquire connection string.
VS code click on Mongo leaf and add the connection string


This opens Mongo Db shell directly in VS code

      To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---


## db.help
    function() {
    print("DB methods:");
    print(
        "\tdb.adminCommand(nameOrDocument) - switches to 'admin' db, and runs command [just calls db.runCommand(...)]");
    print(
        "\tdb.aggregate([pipeline], {options}) - performs a collectionless aggregation on this database; returns a cursor");
    print("\tdb.auth(username, password)");
    print("\tdb.cloneDatabase(fromhost) - will only function with MongoDB 4.0 and below");
    print("\tdb.commandHelp(name) returns the help for the command");
    print(
        "\tdb.copyDatabase(fromdb, todb, fromhost) - will only function with MongoDB 4.0 and below");
    print("\tdb.createCollection(name, {size: ..., capped: ..., max: ...})");
    print("\tdb.createUser(userDocument)");
    print("\tdb.createView(name, viewOn, [{$operator: {...}}, ...], 
      {viewOptions})");
    print("\tdb.currentOp() displays currently executing operations 
      in the db");
    print("\tdb.dropDatabase(writeConcern)");
    print("\tdb.dropUser(username)");
    print("\tdb.eval() - deprecated");
    print("\tdb.fsyncLock() flush data to disk and lock server for backups");
    print("\tdb.fsyncUnlock() unlocks server following a db.fsyncLock()");
    print("\tdb.getCollection(cname) same as db['cname'] or db.cname");
    print("\tdb.getCollectionInfos([filter]) - returns a list that contains the names and options" +
          " of the db's collections");
    print("\tdb.getCollectionNames()");
    print("\tdb.getLastError() - just returns the err msg string"); 
    print("\tdb.getLastErrorObj() - return full status object");    
    print("\tdb.getLogComponents()");
    print("\tdb.getMongo() get the server connection object");      
    print("\tdb.getMongo().setSecondaryOk() allow queries on a replication secondary server");
    print("\tdb.getName()");
    print("\tdb.getProfilingLevel() - deprecated");
    print("\tdb.getProfilingStatus() - returns if profiling is on and slow threshold");
    print("\tdb.getReplicationInfo()");
    print("\tdb.getSiblingDB(name) get the db at the same server as 
    this one");
    print(
        "\tdb.getWriteConcern() - returns the write concern used for any operations on this db, inherited from server object if set");  
    print("\tdb.hostInfo() get details about the server's host");   
    print("\tdb.isMaster() check replica primary status");
    print("\tdb.hello() check replica primary status");
    print("\tdb.killOp(opid) kills the current operation in the db");
    print("\tdb.listCommands() lists all the db commands");
    print("\tdb.loadServerScripts() loads all the scripts in db.system.js");
    print("\tdb.logout()");
    print("\tdb.printCollectionStats()");
    print("\tdb.printReplicationInfo()");
    print("\tdb.printShardingStatus()");
    print("\tdb.printSecondaryReplicationInfo()");
    print("\tdb.resetError()");
    print(
        "\tdb.runCommand(cmdObj) run a database command.  if cmdObj 
      is a string, turns it into {cmdObj: 1}");
    print("\tdb.serverStatus()");
    print("\tdb.setLogLevel(level,<component>)");
    print("\tdb.setProfilingLevel(level,slowms) 0=off 1=slow 2=all");
    print("\tdb.setVerboseShell(flag) display extra information in shell output");
    print(
        "\tdb.setWriteConcern(<write concern doc>) - sets the write 
        concern for writes to the db");
    print("\tdb.shutdownServer()");
    print("\tdb.stats()");
    print(
        "\tdb.unsetWriteConcern(<write concern doc>) - unsets the write concern for writes to the db");
    print("\tdb.version() current version of the server");
    print("\tdb.watch() - opens a change stream cursor for a database to report on all " +
          " changes to its non-system collections.");
    return __magicNoPrint;
}
>

