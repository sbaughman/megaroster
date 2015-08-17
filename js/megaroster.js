var Megaroster = function() {

  this.init = function() {
    // set self equal to 'this' so that it can be used in the next function
    var self = this;
    this.students = [];

    $('#new_student_form').on('submit', function(ev) {
      ev.preventDefault();
      // gets value from student_name input field
      var student_name = $(this.student_name).val().trim();
      // if text in entry form, pushes value from form into students array
      if (student_name) {
        self.students.push(student_name);
        // add the student to a new list item in the <ol>
        $('#students').append('<li class="list-group-item">' + student_name + '</li>');
        // clear entry field and focus
        $(this.student_name).val('').focus();
      }
      else {
        alert('Enter a valid name');
      }
    });
  };

};

var roster = new Megaroster();
roster.init();
