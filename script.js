// Function to preview the image
function previewImage() {
    const file = document.getElementById('fileUpload').files[0];
    const preview = document.getElementById('imagePreview');
    const reader = new FileReader();
    
    if (file) {
      reader.onload = function(event) {
        preview.innerHTML = `<img src="${event.target.result}" alt="Uploaded Image">`;
      };
      reader.readAsDataURL(file);
    }
  }
  
  function clearImage() {
    document.getElementById('fileUpload').value = "";
    document.getElementById('imagePreview').innerHTML = "<p>No image uploaded yet.</p>";
    document.getElementById('result').innerHTML = "";
  }
  
  function analyzeCloth() {
    const resultBox = document.getElementById('result');
    resultBox.classList.remove('success', 'error');
  
    const isAnomalyDetected = Math.random() > 0.5;
  
    if (isAnomalyDetected) {
      resultBox.classList.add('error');
      resultBox.innerHTML = 'An anomaly was detected in the cloth. Please review.';
    } else {
      resultBox.classList.add('success');
      resultBox.innerHTML = 'The cloth is tested and it is intact!';
    }
  }
  