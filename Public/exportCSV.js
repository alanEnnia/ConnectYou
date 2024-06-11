const expoBtn = document.querySelector('button#expoBtn');
expoBtn.addEventListener('click', function () {
  function downloadCSV(csv, filename) {
    let csvFile;
    let downloadLink;

    csvFile = new Blob([csv], { type: 'text/csv' });

    downloadLink = document.createElement('a');

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);

    downloadLink.click();
  }

  function exportTableToCSV(filename) {
    let csv = [];
    let rows = document.querySelectorAll('table#resultTable tr');

    for (let i = 0; i < rows.length; i++) {
      let row = [];
      let cols = rows[i].querySelectorAll('td, th');

      for (let j = 0; j < cols.length; j++) {
        let cellContent;
        if (j === cols.length - 1) { // Last column
          let aTag = cols[j].querySelector('a');
          cellContent = aTag ? aTag.href : cols[j].innerText;
        } else {
          cellContent = cols[j].innerText;
        }
        cellContent = cellContent.replace(/"/g, '""');
        if (cellContent.search(/("|,|\n)/g) >= 0) {
          cellContent = `"${cellContent}"`;
        }
        row.push(cellContent);
      }

      csv.push(row.join(','));
    }

    downloadCSV(csv.join('\n'), filename);
  }

  exportTableToCSV('recentJobsTable.csv');
});
