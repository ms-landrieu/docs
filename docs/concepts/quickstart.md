---
id: my-first-app
title: My First Qodly Application
---

Welcome to Qodly! In this Quickstart Guide, you will see how fast it can be to create, design, and run a Qodly application. In less than 30 minutes, you will be able to:

- design a simple data model with two dataclasses (User and Address),
- add users including their personal information,
- display a featured list of users,
- use buttons to select, sort, or delete users,
- include a search area.

:::info

This example is inspired from the **CRUD Demo** application that you can select when creating a new Qodly application. Feel free to select and browse this application to see the final result we would like to obtain.

<img alt="explorer" src={require('./img/demo1.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

:::

## Creating the Model

The model describes which information will be stored in the application and how it will be organised.  

We will create two dataclasses: **User** to store user information such as name, phone number, etc., and **Address** to store address information such as street number, city, etc. Both dataclasses will be **related**, since a User has at an address, and an Address can belong to one or more users.


### Step 1: Opening Qodly Studio

1. Go through the [Quickstart section](quickstart.md) to create your sandbox environment (select the [**Blank app template**](quickstart.md#step-2-set-up-your-sandbox-and-environment)) and open Qodly Studio.

<img alt="explorer" src={require('./img/demo2.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />


2. Click **Skip** to close the Welcome Tour if necessary.

3. In the Explorer area, click on **Model** to open the Model editor.

The Model editor opens, empty by default.


### Step 2: Creating the Dataclasses

1. Click on the **+** button of the "DataStore Classes" area to create your first dataclass:

<img alt="explorer" src={require('./img/demo3.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

2. Name it "User".

<img alt="explorer" src={require('./img/demo4.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

1. Go to [**cloud.qodly.com/signup**](https://cloud.qodly.com/signup) and create your account in a few clicks.

    <img alt="explorer" src={require('./img/qs1.png').default} style={{borderRadius: '6px', height: '30%', width: '30%', borderColor: '#1D1B49', borderStyle: 'solid'}} />

2. Copy the verification code from your email and click **Confirm account**.

    <img alt="explorer" src={require('./img/qs2.png').default} style={{borderRadius: '6px', height: '30%', width: '30%', borderColor: '#1D1B49', borderStyle: 'solid'}} />

3. Provide additional information to complete your profile:

    <img alt="explorer" src={require('./img/qs3.png').default} style={{borderRadius: '6px', height: '30%', width: '30%', borderColor: '#1D1B49', borderStyle: 'solid'}} />

4. Click **Submit** to access the Qodly Cloud Management Console.


## Step 2: Set Up Your Sandbox and Environment

1. Choose a Template to create your sandbox application. Two options are available:

    - **Create a sandbox from scratch**: Select the **Blank app** template to begin with an empty sandbox application.
    - **Create a sandbox from a sample**: Start with a sample application containing code and data for reference.
    <br/><br/>
    <img alt="explorer" src={require('./img/qs4.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />


2. The development environment of your sandbox application is automatically prepared. This step takes just a few seconds.

   <img alt="explorer" src={require('./img/qs5.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

:::info

The application name is automatically generated for sandbox applications.  

:::


## Step 3: Navigate Qodly Studio and Begin the Welcome Tour


With the development environment ready, it's time to access Qodly Studio and follow the Welcome Tour.

1. Click on the name of your sandbox application:

   <img alt="explorer" src={require('./img/qs6.png').default} style={{borderRadius: '6px', height:'70%', width: '70%', borderColor: '#1D1B49', borderStyle: 'solid'}} />

2. You access its Overview page, allowing you to monitor its environments and activity. Click the **Studio** button on the upper right side of the page:

   <img alt="explorer" src={require('./img/qs5bis.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />


3. Click **Next** to start the Welcome Tour within Qodly Studio!

    <img alt="explorer" src={require('./img/qs7.png').default} style={{borderRadius: '6px', height: '50%', width: '50%', borderColor: '#1D1B49', borderStyle: 'solid'}} />

    <br/><br/>

    :::note

    You can skip or reactivate the Welcome Tour anytime through [Qodly Studio Settings](../studio/settings.md#activate-welcome-tour).

    <img alt="explorer" src={require('./img/qs8.png').default} style={{borderRadius: '6px', height: '50%', width: '50%'}} />

    :::

<br/><br/>

:::tip

To learn more, feel free to explore our [**Youtube Channel**](https://www.youtube.com/channel/UCLNHKvjJQZ_5D1ziskba6jg).

:::
