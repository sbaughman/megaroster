var Megatask = {
  author: "Seth",
  newStudentForm: $('#new_student_form'),
  submitHandler: function() {
    alert('Whaaaaat?!');
  },
  start: function() {
    this.newStudentForm.submit(this.submitHandler);
  }
};

Megatask.start();
