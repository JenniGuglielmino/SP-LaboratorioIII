function createTable(data){
    const table = document.createElement('table');
    if(data.length > 0){
        table.setAttribute('class', 'table table-bordered');
        table.appendChild(createtHead(data));
        data.forEach(item => {
            table.appendChild(createTBody(item));
        });
    }
    document.getElementById('dynamicTable').appendChild(table);
}

function createtHead(data){
    const thead = document.createElement('thead');
    const objectKeys = Object.keys(data[0]);
    const tr = document.createElement('tr');
    tr.style.backgroundColor = '#f2f2f2';

    objectKeys.forEach(key => {
        if(key !== 'id'){
            const th = document.createElement('th');
            th.setAttribute('class', 'col')
            th.appendChild(document.createTextNode(key));
            tr.appendChild(th);
        }
    });

    return thead.appendChild(tr);
}

function createTBody(data){
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');

        Object.values(data).forEach(key => {
            if(key !== data.id){
                const td = document.createElement('td');
                td.textContent = key;
                tr.appendChild(td);
            }else{
                tr.setAttribute('id', key);
            }
        });


    return tbody.appendChild(tr);
}

function updateTable(data){
    if(data.length > 0){
        const table = document.getElementById('dynamicTable');
        while(table.hasChildNodes()){
            table.removeChild(table.firstChild);
        }
        createTable(data);
    }
}

export {createTable, updateTable};