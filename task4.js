document.getElementById("addButton").addEventListener("click", function () {
  const nameFromField = document.getElementById("nameInput");
  const listElement = document.getElementById("nameList");

  const nameWithOutSpaces = nameFromField.value.trim();

  if (nameWithOutSpaces !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = nameWithOutSpaces;

    listElement.appendChild(listItem);
    nameFromField.value = "";
  }
});
