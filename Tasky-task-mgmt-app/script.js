const taskContainer = document.querySelector(".task__container");

let globalStore = [];

const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4" >
        <div class="card text-center">
          <div class="card-header d-flex justify-content-end gap-2 p-3 bg-dark text-white">
            <button type="button" class="btn btn-outline-success" id=${taskData.id} onclick ="editCard.apply(this, arguments)">
            <i class="fas fa-pencil-alt" id=${taskData.id} onclick ="editCard.apply(this, arguments)"></i></button>
            <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick ="deleteCard.apply(this, arguments)">
            <i class="fas fa-trash-alt" id=${taskData.id} onclick ="deleteCard.apply(this, arguments)"></i></button>
          </div>
          <img src=${taskData.imageUrl} class="card-img-top" alt="...">
          <div class="card-body p-3 bg-dark text-white">
            <h5 class="card-title">${taskData.taskTitle}</h5>
            <p class="card-text">${taskData.taskDescription}</p>
            <a href="#" class="btn btn-primary">${taskData.taskType}</a>
          </div>
          <div class="card-footer p-3 bg-dark text-white">
            <button type="button" class="btn btn-outline-primary float-end" id=${taskData.id}>Open Task</button>
          </div>
        </div>
      </div>
`;

const loadInitialCardData = () => {
	// localstorage to get tasky card data
	const getCardData = localStorage.getItem("tasky");

	// converting from string to normal object
	const { cards } = JSON.parse(getCardData);

	// loop over those array of task object to create HTML card and inject it to DOM
	cards.map((cardObject) => {
		taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

		// update our globalStore
		globalStore.push(cardObject);
	});
};

const saveChanges = () => {
	const taskData = {
		id: `${Date.now()}`, //0123456789 unique number for id
		imageUrl: document.getElementById("imageUrl").value,
		taskTitle: document.getElementById("taskTitle").value,
		taskType: document.getElementById("taskType").value,
		taskDescription: document.getElementById("taskDescription").value,
	};

	taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

	globalStore.push(taskData);

	localStorage.setItem("tasky", JSON.stringify({ cards: globalStore }));
};

const deleteCard = (event) => {
	event = window.event;
	// browser related properties
	// your HTML element

	// id
	const targetID = event.target.id;
	const tagname = event.target.tagName; // BUTTON

	// match the id of the element with the id inside the global store

	// if match found -> remove

	globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
	localStorage.setItem("tasky", JSON.stringify({ cards: globalStore }));

	// contact parent
	if (tagname === "BUTTON") {
		return taskContainer.removeChild(
			event.target.parentNode.parentNode.parentNode
		);
	} else {
		return taskContainer.removeChild(
			event.target.parentNode.parentNode.parentNode.parentNode
		);
	}
};

const editCard = (event) => {
	event = window.event;
	// browser related properties
	// your HTML element

	// id
	const targetID = event.target.id;
	const tagname = event.target.tagName; // BUTTON

	let parentElement;

	if (tagname === "BUTTON") {
		parentElement = event.target.parentNode.parentNode;
	} else {
		parentElement = event.target.parentNode.parentNode.parentNode;
	}

	let taskTitle = parentElement.childNodes[5].childNodes[1];
	let taskDescription = parentElement.childNodes[5].childNodes[3];
	let taskType = parentElement.childNodes[5].childNodes[5];
	let submitButton = parentElement.childNodes[7].childNodes[1];

	//setAttributes
	taskTitle.setAttribute("contenteditable", "true");
	taskDescription.setAttribute("contenteditable", "true");
	taskType.setAttribute("contenteditable", "true");
	submitButton.setAttribute("onclick", "saveEditChanges.apply(this,arguments)");
	submitButton.innerHTML = "Save Changes";
};

const saveEditChanges = (event) => {
	event = window.event;
	// browser related properties
	// your HTML element

	// id
	const targetID = event.target.id;
	const tagname = event.target.tagName; // BUTTON

	let parentElement;

	if (tagname === "BUTTON") {
		parentElement = event.target.parentNode.parentNode;
	} else {
		parentElement = event.target.parentNode.parentNode.parentNode;
	}

	let taskTitle = parentElement.childNodes[5].childNodes[1];
	let taskDescription = parentElement.childNodes[5].childNodes[3];
	let taskType = parentElement.childNodes[5].childNodes[5];
	let submitButton = parentElement.childNodes[7].childNodes[1];

	const updatedData = {
		taskTitle: taskTitle.innerHTML,
		taskType: taskType.innerHTML,
		taskDescription: taskDescription.innerHTML,
	};

	globalStore = globalStore.map((task) => {
		if (task.id === targetID) {
			return {
				id: task.id,
				imageUrl: task.imageUrl,
				taskTitle: updatedData.taskTitle,
				taskType: updatedData.taskType,
				taskDescription: updatedData.taskDescription,
			};
		}
		return task; // Important
	});

	localStorage.setItem("tasky", JSON.stringify({ cards: globalStore }));

	taskTitle.setAttribute("contenteditable", "false");
	taskDescription.setAttribute("contenteditable", "false");
	taskType.setAttribute("contenteditable", "false");
	submitButton.removeAttribute("onclick");
	submitButton.innerHTML = "Open Task";
};
