class Student {
    constructor(lastName, firstName, grades) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.grades = grades;
        this.avg = this.calculateAvg(); // Calculate avg upon initialization
    }

    calculateAvg() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
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

class StylesTable {
    constructor(students) {
        this.students = students;
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
        return `${this.getStyles()}${new ListOfStudents(this.students).getTableList()}`;
    }

    getTotalAvg() {
        const totalAvg = this.students.reduce((sum, student) => sum + student.avg, 0);
        return (totalAvg / this.students.length).toFixed(1); // Round total average to 1 decimal
    }
}

const students = [
    new Student('Іщук', 'Олександр', [5, 4, 3.5]),
    new Student('Іщук', 'Олег', [4, 5, 4]),
    new Student('Маркевич', 'Ілля', [5, 4, 5]),
];

// Створення об'єкта класу StylesTable
const stylesTable = new StylesTable(students);

// Виведення результатів
document.body.innerHTML = `
    <h1>Список студентів</h1>
    ${stylesTable.getTableList()}
    <h2>Загальний середній бал групи: ${stylesTable.getTotalAvg()}</h2>
`;