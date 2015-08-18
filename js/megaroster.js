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
      $.each(self.students, function(index, student_data) {
        var student = new Student();
        student.init(student_data.name);
        student.appendToList();
      });
    }
    catch(err) {
      return false;
    }
  };

  // this.appendToList = function(student_name) {
  //   var li = $('#list_item_template').clone();
  //   li.removeAttr('id')
  //     .addClass('student')
  //     .prepend(student_name)
  //     .removeClass('hidden');
  //
  //   $('#students').append(li);
  // };

  this.addStudent = function(student_name) {
    var student = new Student();
    student.init(student_name);

    self.students.push(student);
    student.appendToList();

    self.save();
  };

  this.init = function() {
    self.students = [];
    self.load();

    $(document).on('click', 'button.delete', function(ev) {
      // Remove it from the array


      // Remove it from the <ol>
      $(this).closest('li').remove();

      // Update localStorage
      // WAIT UNTIL TOMORROW
    });

    $('#new_student_form').on('submit', function (ev) {
      ev.preventDefault();
      var student_name = $(this.student_name).val();

      self.addStudent(student_name);

      $(this.student_name)
        .val('')
        .focus();
    });
  };
};

var roster = new Megaroster();
roster.init();
