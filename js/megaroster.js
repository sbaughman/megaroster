var Megaroster = function() {

  this.init = function() {
    // set self equal to 'this' so that it can be used in the next function
    var self = this;
    this.students = [];

    $('#new_student_form').on('submit', function(ev) {
      ev.preventDefault();
      // gets value from student_name input field
      var student_name = $(this.student_name).val();
      // pushes value from form into students array
      self.students.push(student_name);
      console.log(self.students);
      // add the student to a new list item in the <ol>
      $('#students').append('<li class="list-group-item">' + student_name + '</li>');
      this.student_name.focus();
      this.student_name.select();
    });
  };

};

var roster = new Megaroster();
roster.init();
