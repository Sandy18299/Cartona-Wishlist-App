document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('myform');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const retailerID = document.getElementById('retailerID');
  const btnForm = document.getElementById('btnForm');

  btnForm.addEventListener('click', function(event) {
    event.preventDefault();
    
    const selectedValues = [];
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });
    
    const textString = selectedValues.join(" , ");
    const retailerIDValue = retailerID.value;
    localStorage.setItem('retailerIDValue', retailerIDValue);
    localStorage.setItem('products', textString);
    getData();
  });

  function getData() {
    const products = localStorage.getItem("products");
    const retailerIDValue = localStorage.getItem("retailerIDValue");
    
    console.log("hello");
    console.log(products, retailerIDValue);

    // Redirect after logging
    window.location.href = "products.html";
  }
});

