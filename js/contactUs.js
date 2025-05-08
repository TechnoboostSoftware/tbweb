function showError(id) {
  $(id).addClass("border-red-500");
  $(id).removeClass("border-gray-300");
}

function removeError(id) {
  $(id).removeClass("border-red-500");
  $(id).addClass("border-gray-300");
  $("#successMessage").addClass("hidden");
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
  let projectType = $('input[name="projectType"]:checked').val();

  var emailBodyContent = "<b>First Name :</b> " + firstName + "<br> ";
  emailBodyContent += "<b>Last Name :</b> " + lastName + "<br> ";
  emailBodyContent += "<b>Email : </b> " + email + "<br>";
  emailBodyContent += "<b>Phone : </b> " + phoneNumber + "<br>";
  emailBodyContent += "<b>Company : </b> " + companyName + "<br>";
  emailBodyContent += "<b>Project Type : </b> " + projectType + "<br>";
  emailBodyContent += "<b>Details:</b>" + projectDetails;

  var jsondata = {
    token: "gUXMeJn%P8gRVxMH",
    emailSubjectLine: "Enquiry for business",
    emailBodyContent: emailBodyContent,
  };
  $("#submitForm").attr("disabled", true);
  $.ajax({
    type: "POST",
    url: "https://es.technoboost.in/api/v1/mail-send",
    data: JSON.stringify(jsondata),
    contentType: "application/json; charset=utf-8",
    success: function (result) {
      $("#submitForm").attr("disabled", false);
      // $(".alert").toggle('alert')
      // $(".alert").addClass('show')
      if (result.hasOwnProperty("status") && result.status == "NOT_FOUND") {
        $("#successMessage").removeClass("hidden");
        // $(".alert").addClass('alert-danger')

        $("#successMessage").html(
          '<strong style="color: red;">Something went wrong, try again</strong>'
        );
      } else {
        // $(".alert").addClass('alert-success')
        // $(".alert").removeClass('alert-danger')
        $("#successMessage").removeClass("hidden");
        $("#successMessage").html(
          ' <span style="color:green"><strong>Thankyou for contacting us!  </strong> Our team will get back to you.</span>'
        );
        // $(".contactInput").val("");
        $("#formSection")[0].reset();
      }
    },
    error: function (err) {
      $("#submitForm").attr("disabled", false);
      // $(".alert").toggle('alert')
      // $(".alert").addClass('show')
      // $(".alert").removeClass('alert-success')
      // $(".alert").addClass('alert-danger')
      $("#successMessage").removeClass("hidden");
      $("#successMessage").html(
        '<strong style="color:red"> Someting went wrong try again </b>'
      );
    },
  });
}
