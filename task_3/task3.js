class Student {
    constructor(lastName, firstName, grades) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.grades = grades;
        this.avg = 0; // Initialize avg as 0
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let table = "<table><thead><tr><th>Ім'я</th><th>Прізвище</th><th>Frontend</th><th>C#</th><th>SQL</th><th>Середній бал</th></tr></thead><tbody>";
        this.students.forEach((student) => {
            table += `<tr><td>${student.firstName}</td><td>${student.lastName}</td>`;
            student.grades.forEach((grade) => {
                table += `<td>${grade}</td>`;
            });
            table += `<td>${student.avg.toFixed(1)}</td>`; // Rounded average grade to 1 decimal
            table += `</tr>`;
        });
        table += "</tbody></table>";
        return table;
    }
}

class StylesTable extends ListOfStudents {
    constructor(students) {
        super(students);
    }

    getStyles() {
        return `<style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            text-align: left;
            padding: 8px;
            border: 1px solid rgb(112, 118, 112);
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        </style>`;
    }

    getTableList() {
        this.getAvg(); // Calculate the average before rendering the table
        return `${this.getStyles()}${super.getTableList()}`;
    }

    getAvg() {
        this.students.forEach((student) => {
            let sum = 0;
            student.grades.forEach((grade) => {
                sum += grade;
            });
            student.avg = sum / student.grades.length; // Calculate average
        });
    }

    getTotalAvg() {
        let sum = 0;
        this.students.forEach((student) => {
            sum += student.avg;
        });
        return (sum / this.students.length).toFixed(1); // Round total average to 1 decimal
    }
}

const students = [
    new Student('Іщук', 'Олександр', [5, 4, 3.5]),
    new Student('Іщук', 'Олег', [4, 5, 4]),
    new Student('Маркевич', 'Ілля', [5, 4, 5]),
];

// Створення об'єкта класу StylesTable
const stylesTable = new StylesTable(students);

// Обчислюємо середні бали для кожного студента
stylesTable.getAvg();

// Виведення результатів
document.body.innerHTML = `
    <h1>Список студентів</h1>
    ${stylesTable.getTableList()}
    <h2>Загальний середній бал групи: ${stylesTable.getTotalAvg()}</h2>
`;
