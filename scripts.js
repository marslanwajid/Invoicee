
function printInvoice() {
  const printButton = document.getElementById("printButton");
  printButton.disabled = true;
  window.print();
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "Letter",
  });

  doc.html(document.body, {
    callback: function (doc) {
      doc.save("invoice.pdf");
    },
    x: 10,
    y: 10,
    html2canvas: { scale: 5 },
  });
}
