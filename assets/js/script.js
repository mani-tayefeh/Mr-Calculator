const preview = document.getElementById("preview");

function AppendToDisplay(input) {
  preview.value += input;
}

function ClearView() {
  preview.value = "";
}

function Calculate() {
  preview.value = eval(preview.value);
}
