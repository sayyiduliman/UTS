function toggleInfo(paragraphId, buttonId) {
    var paragraph = document.getElementById(paragraphId);
    var button = document.getElementById(buttonId);

    var displayStyle = window.getComputedStyle(paragraph).getPropertyValue('display');

    if (displayStyle === 'none' || displayStyle === '') {
        paragraph.style.display = 'block';
        button.textContent = 'Less Info';
    } else {
        paragraph.style.display = 'none';
        button.textContent = 'More Info';
    }
}

function tambah() {
    var inputElement = document.getElementById("email2");
    var inputElement2 = document.getElementById("subject2");
    var inputElement3 = document.getElementById("message2");
    var inputValue = inputElement.value.trim();
    var inputValue2 = inputElement2.value.trim();
    var inputValue3 = inputElement3.value.trim();
    if (inputValue != "" && inputValue2 != "" && inputValue3 != "") {
      alert("Form Submitted");
      inputElement.value = "";
      inputElement2.value = "";
      inputElement3.value = "";
  
      // location.reload();
    } else {
      alert("Mohon isi formulirnya dengan lengkap");
    }
  }