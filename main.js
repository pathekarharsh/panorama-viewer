const panoramaContainer = document.getElementById('panoramaContainer');
const panoramaInput = document.getElementById('panoramaInput');
const uploadButton = document.getElementById('uploadButton');

//above three line we are just taking the element and storing that in constant

        uploadButton.addEventListener('click', function () {
            panoramaInput.click(); 
            //here when you click upload button the input got triggered
        });


        panoramaInput.addEventListener('change', function (event) {
            const file = event.target.files[0]; //extracting selected file
            if (file) {
                const reader = new FileReader(); //new object
                reader.onload = function (e) {
                    const imageData = e.target.result;
                    initPanoramaViewer(imageData); //calling function
                };
                reader.readAsDataURL(file);
            }
        });

        function initPanoramaViewer(imageData) {
            panoramaContainer.innerHTML = ''; // Clear previous content if any

            const viewer = new PANOLENS.Viewer({
                container: panoramaContainer
            });

            const panorama = new PANOLENS.ImagePanorama(imageData);
            viewer.add(panorama);
        }