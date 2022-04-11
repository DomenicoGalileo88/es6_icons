const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fa-solid",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fa-solid",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fa-solid",
    color: "blue",
  },
];

/**
 * Generates the icon markup
 * @param {object} icon The icon object
 * @return {string}
 */
function generate_icon_markup(icon) {
  return ` 
    <div class="icon">
      <i class="${icon.family} ${icon.prefix + icon.name} fa-2x" style="color:${
    icon.color
  }"></i>
      <p>${icon.name}</p>
    </div>
  `;
}
/**
 *
 * @param {array} icons_array The array of icons
 * @param {*} dom_object A dom object
 */
function generate_cards(icons_array, dom_object) {
  dom_object.innerHTML = "";
  icons_array.forEach((icon) => {
    //console.log(icon);
    const iconMarkup = generate_icon_markup(icon);
    //console.log(iconMarkup);
    //console.log(dom_object);
    dom_object.insertAdjacentHTML("beforeend", iconMarkup);
  });
}

/**
 * Get all icons types
 * @param {array} list List of icons
 * @returns {array}
 */
function getTypes(list) {
  const types = [];
  list.forEach((icon) => {
    if (!types.includes(icon.type)) {
      types.push(icon.type);
    }
  });
  return types;
}

/**
 *
 * @param {array} list A list of elements
 */
function renderSelectOptions(list, dom_object) {
  list.forEach((element) => {
    dom_object.insertAdjacentHTML(
      "beforeend",
      `<option value="${element}">${element}</option>`
    );
  });
}

document.getElementById("types").addEventListener("change", function (event) {
  //console.log(event, event.target.value);
  const type_value = event.target.value;
  // Filtare le icone per tipo

  //console.log(icons);
  let filtered_icons;
  if (type_value !== "all") {
    filtered_icons = icons.filter((icon) => {
      //console.log(icon);
      //console.log(type_value);

      return type_value === icon.type;
    });
  } else {
    filtered_icons = icons;
  }

  //console.log(filtered_icons);
  generate_cards(filtered_icons, document.querySelector(".icons"));
});

/* 
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente. */
const iconsElement = document.querySelector(".icons");
generate_cards(icons, iconsElement);

/* Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti. 
/* Generates icons types dynamically */
// selezionare il select
const selectElement = document.getElementById("types");
// generates all icons types
const iconTypes = getTypes(icons);
// render types options
renderSelectOptions(iconTypes, selectElement);
