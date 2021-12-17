
<h1 align="center">
  <br>
  <br>
  Acceptance & CDC tests for Todo APP
  <br>
</h1>



<p align="center">
  <a href="#architectural-decisions">Architectural Decisions</a> •
  <a href="#how-to-use">How To Use</a> •
</p>

![screenshot](https://s10.gifyu.com/images/ezgif.com-gif-maker20bd6aad5a3d85ef0.gif)

## Architectural Decisions

* Simple Acceptance Tests created with Cypress
* I am using [Pactflow](https://pactflow.io/) as my broker.
### **Consumer Contract Tests**

 consumer driven contract testing so next step is to write the contract from our consumer side. 

1.  Require or import the Pact object
2.  Create a mock provider
3.  Setup the mock provider and register the interactions that it is expecting to receive from the consumer
4.  Run the consumer tests
5.  Generate the contract]

 **NOTE**
My backend API uses FastAPI with python but because on time constraints I developed provider tests in node.js/express.


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install dependencies
$ npm install

# Run the Acceptance tests while front end is running on localhost:3000
$ npx cypress open

# Run the CDC
$ npm run test:consumer

# Publish the contract to pack broker:
$ npm run publish:pact

# Start the actual provider and run the provider tests
$ npm run test:provider
```

If everything is okay: The integrations is successful:

![screenshot](https://s10.gifyu.com/images/resim.png)
