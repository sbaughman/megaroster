var Megaroster = function() {
  var self = this;

  this.save = function() {
    try {
      return (localStorage.students = JSON.stringify(self.students));
    }
    catch(err) {
      return false;
    }
  };

  this.load = function() {
    try {
      self.students = JSON.parse(localStorage.students);
      $.each(self.students, function(index, student_name) {
        self.appendToList(student_name);
      });
    }
    catch(err) {
      return false;
    }
  };

  this.appendToList = function(student_name) {
    // Grab the *template* list item from the page, make template for new li
    var li = $('#list_item_template').clone();
    li.removeAttr('id')
      .addClass('student')
      .prepend(student_name)
      .removeClass('hidden');

    // append an <li> with student name to <ol>
    $('#students').append(li);
  };

  this.addStudent = function(student_name) {
    // pushes value from form into students array
    self.students.push(student_name);
    self.appendToList(student_name);
    self.save();
  };

  this.init = function() {
    self.students = [];
    self.load();

    $('#new_student_form').on('submit', function() {
      // gets value from student_name input field
      var student_name = $(this.student_name).val().trim();

      self.addStudent(student_name);
      // clear entry field and focus
      $(this.student_name).val('').focus();
    });

    $('button.delete').on('click', function(ev) {
      ev.preventDefault();
      // Remove student from array
      // Remove li from ol
      $(this).closest('li').remove();
      // Update local storage
    });

  };

};

var roster = new Megaroster();
roster.init();
