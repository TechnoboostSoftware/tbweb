function showError(id) {
  $(id).addClass("border-red-500");
  $(id).removeClass("border-gray-300");
}

function removeError(id) {
  $(id).removeClass("border-red-500");
  $(id).addClass("border-gray-300");
}

function formValidation() {
  let firstName = $("#firstName").val().trim();
  let lastName = $("#lastName").val().trim();
  let email = $("#email").val().trim();
  let phoneNumber = $("#phoneNumber").val().trim();
  let companyName = $("#companyName").val().trim();
  let projectDetails = $("#projectDetails").val().trim();

  let isError = false;

  if (!firstName) {
    showError("#firstName");
    isError = true;
  }

  if (!lastName) {
    showError("#lastName");
    isError = true;
  }

  if (!email) {
    showError("#email");
    isError = true;
  }

  if (!phoneNumber) {
    showError("#phoneNumber");
    isError = true;
  }

  if (!companyName) {
    showError("#companyName");
    isError = true;
  }

  if (!projectDetails) {
    showError("#projectDetails");
    isError = true;
  }
}
