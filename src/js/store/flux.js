const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			toDoList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			createToDo: async () => {
				await fetch('https://assets.breatheco.de/apis/fake/todos/user/leonidocampo-co', {

					method: "POST",

					body: JSON.stringify([]),

					headers: {

						"Content-Type": "application/json"

					}

				})

					.then(resp => {

						console.log(resp.ok); // will be true if the response is successfull

						console.log(resp.status); // the status code = 200 or code = 400 etc.

						console.log(resp.text()); // will try return the exact result as string

						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results

					})

					.then(data => {

						//here is where your code should start after the fetch finishes

						console.log(data); //this will print on the console the exact object received from the server

					})

					.catch(error => {

						//error handling

						console.log(error);

					});
			},


			loadToDo: () => {
				fetch('https://assets.breatheco.de/apis/fake/todos/user/leonidocampo-co', {

					method: "GET",
					
					headers: {

						"Content-Type": "application/json"

					}

				})

					.then(resp => {

						console.log(resp.ok); // will be true if the response is successfull

						console.log(resp.status); // the status code = 200 or code = 400 etc.

						console.log(resp.text()); // will try return the exact result as string

						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results

					})

					.then(data => {

						//here is where your code should start after the fetch finishes

						setStore({toDoList:data})

					})

					.catch(error => {

						//error handling

						console.log(error);

					});

			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});



				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
