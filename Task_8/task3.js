class Table {
    constructor(containerId, headers) {
        this.container = document.getElementById(containerId);
        this.table = document.createElement('table');
        this.headers = headers;
        this.tableHead = document.createElement('thead');
        this.tableBody = document.createElement('tbody');
        this.rows = [];

        this.container.appendChild(this.table);
        this.table.appendChild(this.tableHead);
        this.table.appendChild(this.tableBody);

        this.createHeader();
        this.createButtons();
    }

    createHeader() {
        const headerRow = document.createElement('tr');
        this.headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        this.tableHead.appendChild(headerRow);
    }

    addRow(data = []) {
        const row = document.createElement('tr');
        const totalColumns = this.tableHead.rows[0].cells.length;

        for (let i = 0; i < totalColumns; i++) {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Введіть дані';
            input.value = data[i] || '';
            input.addEventListener('change', () => {
                td.textContent = input.value;
            });
            td.appendChild(input);
            row.appendChild(td);
        }

        this.tableBody.appendChild(row);
        this.rows.push(row);
    }

    addColumn(headerText) {
        const th = document.createElement('th');
        th.textContent = headerText;
        this.tableHead.rows[0].appendChild(th);

        this.rows.forEach(row => {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Введіть дані';
            input.addEventListener('change', () => {
                td.textContent = input.value;
            });
            td.appendChild(input);
            row.appendChild(td);
        });
    }

    createButtons() {
        const addButton = document.createElement('button');
        addButton.textContent = 'Додати Стовпець';
        addButton.onclick = () => this.addColumnWithInput();
        this.container.appendChild(addButton);

        const rowButton = document.createElement('button');
        rowButton.textContent = 'Додати Рядок';
        rowButton.onclick = () => this.addRowWithInput();
        this.container.appendChild(rowButton);
    }

    addRowWithInput() {
        const rowDataInput = document.getElementById('row-data').value;
        const rowData = rowDataInput.split(',').map(item => item.trim());
        if (rowData.length > 0 && rowData[0] !== '') {
            this.addRow(rowData);
            document.getElementById('row-data').value = '';
        } else {
            alert('Введіть дані для рядка');
        }
    }

    addColumnWithInput() {
        const columnName = document.getElementById('column-name').value;
        if (columnName) {
            this.addColumn(columnName);
            document.getElementById('column-name').value = '';
        } else {
            alert('Введіть назву стовпця');
        }
    }
}

const table = new Table('table-container', ['Ім\'я', 'Прізвище', 'Вік']);
table.addRow(['Олександр', 'Комаров', '30']);
table.addRow(['Єлизавета', 'Петрова', '30']);
table.addRow(['Максим', 'Паламар', '22']);
