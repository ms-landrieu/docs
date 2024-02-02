---
id: DataStoreClass
title: DataStore
---

A [Datastore](../orda/data-model.md#datastore) is the interface object provided by ORDA to reference and access a database. The `Datastore` object is returned by the [ds](#ds) command, a shortcut to the main datastore.


### Commands

||
|---|
|[<!-- INCLUDE #_command_.ds.Syntax -->](#ds)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.ds.Summary -->|
|[<!-- INCLUDE #_command_.openDatastore.Syntax -->](#opendatastore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.openDatastore.Summary -->|




### Functions and properties

||
|---|
|[<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
|[<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
|[<!-- INCLUDE #DataStoreClass.isAdminProtected().Syntax -->](#isadminprotected)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.isAdminProtected().Summary --> |
|[<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
|[<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
|[<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |





## ds


<!-- REF #_command_.ds.Syntax -->
**ds** : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result |cs.DataStore|<-|Reference to the datastore|
<!-- END REF -->


#### Description

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current Qodly database<!-- END REF -->.

The datastore is opened automatically and available directly through `ds`.


#### Example

Using the datastore on the Qodly database:

```qs
 result = ds.Employee.query("firstName = :1","S@")
```



## openDatastore


<!-- REF #_command_.openDatastore.Syntax -->**openDatastore**( *connectionInfo* : object , *localID* : text ) : cs.DataStore <!-- END REF -->


<!-- REF #_command_.openDatastore.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|connectionInfo|object|->|Connection properties used to reach the remote datastore|
|localID |text|->|Id to assign to the opened datastore on the current Cloud instance (mandatory)|
|Result |cs.DataStore|<-|Datastore object|<!-- END REF -->

#### Description

The `openDatastore` command <!-- REF #_command_.openDatastore.Summary -->connects the application to a remote datastore identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the *localID* alias on the Qodly Cloud instance. All objects exposed in the remote datastore are available as properties of the `cs.DataStore` returned object.

The configuration of parameters depends on the target datastore. In the current Qodly implementation, the following target datastore type is supported:

- 4D Server 

### Opening a 4D Server datastore

Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

|Property| Type| Description|
|---|---|---|
|hostname|string|Name or IP address of the remote datastore + ":" + port number (port number is mandatory)|
|user|string|User name (1)|
|password|string|User password (1)|
|idleTimeout|integer|Inactivity session timeout (in minutes), after which the session is automatically closed by Qodly. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see [Closing sessions](https://developer.4d.com/docs/ORDA/datastores#closing-sessions).|
|tls|boolean|Use secured connection (2). If omitted, false by default. Using a secured connection is recommended whenever possible.|
|type |string |If passed, must be "4D Server"|

(1) See the [4D Server documentation](https://developer.4d.com/docs/REST/authUsers) to know how to authenticate REST connection requests

(2) If `tls` is `true`, the HTTPS protocol is used if:

* HTTPS is enabled on the remote datastore
* the given port is the right [HTTPS port](https://developer.4d.com/docs/WebServer/webServerConfig#https-port) configured in the remote datastore settings
* a valid certificate and private encryption key are installed in the project. Otherwise, an error "1610 - A remote request to host xxx has failed" is raised.

:::note 4D Server configuration

The *connectionInfo* remote datastore designates a 4D Server database with the following configuration:

* its web server must be launched with http and/or https enabled,
* its [**Expose as REST server**](https://developer.4d.com/docs/REST/configuration#starting-the-rest-server) option must be checked,
* at least one client license is available,
* run with 4D Server v20 or higher.

If no matching 4D Server database is found, `openDatastore` returns **null**.

:::

*localID* is a local alias on the current Cloud instance for the session opened on remote datastore. If *localID* already exists on the instance, it is used. Otherwise, a new *localID* session is created when the datastore object is used. For a detailed description of remote session support on 4D Server, please refer to the [4D documentation](https://developer.4d.com/docs/ORDA/datastores). 

Once the session is opened on the remote datastore, the following statements become equivalent and return a reference on the same datastore object:

```qs
 var mysd, myds2 : cs.DataStore
 myds = openDatastore(connectionInfo,"myLocalId")
 myds2 = ds("myLocalId")
  //myds and myds2 are equivalent
```

#### Example 1  

Connection to a remote datastore without user / password:

```qs
 var connectTo : object
 var remoteDS : cs.DataStore
 var allStudents : cs.StudentsSelection
 connectTo = {type : "4D Server", hostname : "192.168.18.11:8044"}
 remoteDS = openDatastore(connectTo , "students")
 allStudents = remoteDS.Students.all() 
```

#### Example 2

Connection to a remote datastore with user / password / timeout / tls:

```qs
 var connectTo : object
 var remoteDS : cs.DataStore
 var allStudents : cs.StudentsSelection
 connectTo = {type : "4D Server", hostname : "192.168.18.11:4443",\  
 	user : "marie", password : "pwd", idleTimeout : 70 , tls : true}
 remoteDS = openDatastore(connectTo , "students")
 allStudents = remoteDS.Students.all()
```


#### Error management  

In case of error, the command returns **null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by `onErrCall`.




<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()


<!-- REF #DataStoreClass.cancelTransaction().Syntax -->
**.cancelTransaction**()<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.cancelTransaction()` function <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

The `.cancelTransaction()` function cancels any changes made to the data during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the [`.validateTransaction()`](#validatetransactions) function.


#### Example

See example for the [`.startTransaction()`](#starttransaction) function.


<!-- END REF -->


<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<!-- REF DataStoreClass.dataclassName.Syntax -->
***.dataclassName*** : 4D.DataClass<!-- END REF -->


#### Description

Each dataclass in a datastore is available as a property of the [DataStore object](../orda/data-model.md#datastore). The returned cs.object contains <!-- REF DataStoreClass.dataclassName.Summary -->all attributes of the dataclass as objects<!-- END REF -->.


#### Example


```qs
 var emp : cs.Employee
 var sel : cs.EmployeeSelection
 emp = ds.Employee //emp contains the Employee dataclass
 sel = emp.all() //gets an entity selection of all employees

  //you could also write directly:
 sel = ds.Employee.all()
```


<!-- END REF -->






<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->
**.isAdminProtected**() : boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|true if the Data Explorer access is disabled, false if it is enabled (default)|
<!-- END REF -->


#### Description

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `true` if Data Explorer access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### See also

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->



<!-- REF DataStoreClass.setAdminProtection().Desc -->
## .setAdminProtection()


<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|status|boolean|->|true to disable Data Explorer access to data on the `webAdmin` port, false (default) to grant access|
<!-- END REF -->


#### Description

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](https://developer.4d.com/docs/en/Admin/webAdmin.html#webadmin-settings), including for the [Data Explorer](https://developer.4d.com/docs/en/Admin/dataExplorer.html) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](https://developer.4d.com/docs/en/Admin/webAdmin.html#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted.


#### Example

You create a *protectDataFile* project method to call before deployments for example:

```qs
 ds.setAdminProtection(true) //Disables the Data Explorer data access
```

#### See also

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->




<!-- REF DataStoreClass.startTransaction().Desc -->
## .startTransaction()


<!-- REF #DataStoreClass.startTransaction().Syntax -->
**.startTransaction**()<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled.

>If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database.

You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.


#### Example



```qs
 var connect,status : object
 var person : cs.PersonsEntity
 var ds : cs.DataStore
 var choice : string
 var error : boolean

 ds.startTransaction()
 person = ds.Persons.query("lastname == :1","Peters").first()

 if(person != null)
    person.lastname = "Smith"
    status = person.save()
 end
 ...
 ...
 if(lastErrors[0].errCode != 0)
    ds.cancelTransaction()
 else
    ds.validateTransaction()
 end
```


<!-- END REF -->



<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()


<!-- REF #DataStoreClass.validateTransaction().Syntax -->
**.validateTransaction**() <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level.

The function saves the changes to the data that occurred during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function.


#### Example

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->
