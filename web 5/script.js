document.addEventListener('DOMContentLoaded', function () {
    var sourceText = document.getElementById('source-text');
    var resultText = document.getElementById('result-text');
    var convertButton = document.getElementById('go');

    convertButton.addEventListener('click', function () {
        var inputText = sourceText.value;
        var convertedText = convertToImages(inputText);
        resultText.innerHTML = convertedText;
    });

    function convertToImages(text) {
        var convertedText = '';
        for (var i = 0; i < text.length; i++) {
            var char = text[i];

            var imagePath;
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                var isLowerCase = char === char.toLowerCase();
                imagePath = 'images/' + (isLowerCase ? 'small_' : '') + char.toLowerCase() + '.png';
            } else {
                imagePath = ''; 
            }

            convertedText += '<img src="' + imagePath + '" alt="' + char + '">';
        }
        return convertedText;
    }
});

