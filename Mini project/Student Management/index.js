const studentForm = document.getElementById("student-form");
const studentId = document.getElementById("student-id");
const StudentName = document.getElementById("student-name");
const course = document.getElementById("course");
const prelim = document.getElementById("prelim");
const midterm = document.getElementById("midterm");
const final = document.getElementById("final");
const btnSave = document.getElementById("btn-save");
const btnCancel = document.getElementById("btn-cancel");
const studentTableBody = document.getElementById("student-table-body");
const searchInput = document.getElementById("search-in");
const filterStatus = document.getElementById("filter-status");
const statTotal = document.getElementById("stat-total");
const statAverage = document.getElementById("stat-avg");
const statPass = document.getElementById("stat-pass");


// Student Array

//Kunin mo yung students na naka-save sa localStorage,
//ibalik mo ito bilang JavaScript data, at kung wala pa itong laman, gumawa ka na lang ng empty array []."
let students = JSON.parse(localStorage.getItem("students")) || []; // getItem JSON.parse pagkuha    

// display student when page loads

displayStudent();

// ADD / EDIT Student


studentForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();


    // Get values from inputs
    const name = studentName.value.trim();
    const courseValue = course.value.trim();

    const prelimGrade = Number(prelim.value);
    const midtermGrade = Number(midterm.value);
    const finalGrade = Number(final.value);


    // Calculate average
    const average =
        (prelimGrade + midtermGrade + finalGrade) / 3;


    // Determine status
    const status = average >= 75 ? "Passed" : "Failed";


    // ------------------------------------
    // EDIT EXISTING STUDENT
    // ------------------------------------

    if (studentId.value !== "") {

        const id = Number(studentId.value);

        const student = students.find(function(student) {
            return student.id === id;
        });


        if (student) {

            student.name = name;
            student.course = courseValue;
            student.prelim = prelimGrade;
            student.midterm = midtermGrade;
            student.final = finalGrade;
            student.average = average;
            student.status = status;

        }

        // Change button back to Save
        btnSave.textContent = "Save Student Record";

        // Hide cancel button
        btnCancel.style.display = "none";

        // Clear hidden ID
        studentId.value = "";

    }

    // ------------------------------------
    // ADD NEW STUDENT
    // ------------------------------------

    else {

        const newStudent = {

            id: Date.now(),

            name: name,

            course: courseValue,

            prelim: prelimGrade,

            midterm: midtermGrade,

            final: finalGrade,

            average: average,

            status: status

        };


        students.push(newStudent);

    }


    // Save to localStorage
    saveStudents();


    // Update table
    displayStudents();


    // Clear form
    studentForm.reset();

});


// ========================================
// 5. DISPLAY STUDENTS
// ========================================

function displayStudents() {

    // Clear existing table rows
    studentTableBody.innerHTML = "";


    // Get search value
    const searchValue =
        searchInput.value.toLowerCase();


    // Get selected filter
    const selectedStatus =
        filterStatus.value;


    // Filter students
    const filteredStudents = students.filter(function(student) {

        const matchesSearch =
            student.name.toLowerCase().includes(searchValue);


        const matchesStatus =
            selectedStatus === "all" ||
            student.status.toLowerCase() === selectedStatus;


        return matchesSearch && matchesStatus;

    });


    // Display each student
    filteredStudents.forEach(function(student) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${student.name}</td>

            <td>${student.course}</td>

            <td>${student.average.toFixed(2)}</td>

            <td>
                <span class="badge ${
                    student.status === "Passed"
                    ? "badge-pass"
                    : "badge-fail"
                }">
                    ${student.status}
                </span>
            </td>

            <td>

                <button
                    class="btn-edit"
                    onclick="editStudent(${student.id})">
                    Edit
                </button>

                <button
                    class="btn-delete"
                    onclick="deleteStudent(${student.id})">
                    Delete
                </button>

            </td>

        `;


        studentTableBody.appendChild(row);

    });


    // Update statistics
    updateStatistics();

}


// ========================================
// 6. UPDATE STATISTICS
// ========================================

function updateStatistics() {

    // Total students
    const totalStudents = students.length;

    statTotal.textContent = totalStudents;


    // If there are no students
    if (totalStudents === 0) {

        statAverage.textContent = "0.00";

        statPass.textContent = "0%";

        return;

    }


    // Calculate total average
    let totalAverage = 0;


    students.forEach(function(student) {

        totalAverage += student.average;

    });


    const classAverage =
        totalAverage / totalStudents;


    statAverage.textContent =
        classAverage.toFixed(2);


    // Count passed students
    const passedStudents =
        students.filter(function(student) {

            return student.status === "Passed";

        }).length;


    // Calculate passing rate
    const passingRate =
        (passedStudents / totalStudents) * 100;


    statPass.textContent =
        passingRate.toFixed(0) + "%";

}


// ========================================
// 7. DELETE STUDENT
// ========================================

function deleteStudent(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this student?");


    if (!confirmDelete) {
        return;
    }


    students = students.filter(function(student) {

        return student.id !== id;

    });


    saveStudents();

    displayStudents();

}


// ========================================
// 8. EDIT STUDENT
// ========================================

function editStudent(id) {

    const student =
        students.find(function(student) {

            return student.id === id;

        });


    if (!student) {
        return;
    }


    // Put student data inside the form
    studentId.value = student.id;

    studentName.value = student.name;

    course.value = student.course;

    prelim.value = student.prelim;

    midterm.value = student.midterm;

    final.value = student.final;


    // Change button text
    btnSave.textContent = "Update Student Record";


    // Show cancel button
    btnCancel.style.display = "block";


    // Scroll to form
    studentForm.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// 9. CANCEL EDIT
// ========================================

btnCancel.addEventListener("click", function() {

    studentForm.reset();

    studentId.value = "";

    btnSave.textContent = "Save Student Record";

    btnCancel.style.display = "none";

});


// ========================================
// 10. SEARCH
// ========================================

searchInput.addEventListener("input", function() {

    displayStudents();

});


// ========================================
// 11. FILTER
// ========================================

filterStatus.addEventListener("change", function() {

    displayStudents();

});


// ========================================
// 12. SAVE TO LOCAL STORAGE
// ========================================

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}