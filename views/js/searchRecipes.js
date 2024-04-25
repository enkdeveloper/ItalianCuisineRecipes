async function searchRecipes() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var matchingRecipes = [];

    try {
        const response = await fetch(`/api/search?term=${searchTerm}`);
        const data = await response.json();
        matchingRecipes = data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }

    console.log("Matching recipes:", matchingRecipes);

    var resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    matchingRecipes.forEach(function(recipe) {
        var recipeLink = document.createElement('a');
        recipeLink.href = `/recipes/${recipe.category}/${recipe.id}`;
    
        var recipeRow = document.createElement('div');
        recipeRow.classList.add('recipe-row');
    
        var imageCell = document.createElement('div');
        imageCell.classList.add('cell');
        var image = document.createElement('img');
        image.src = recipe.img;
        image.alt = recipe.title;
        image.style.maxWidth = '35px'; 
        imageCell.appendChild(image);
    
        var titleCell = document.createElement('div');
        titleCell.classList.add('cell');
        var title = document.createElement('p');
        title.textContent = recipe.title;
        titleCell.appendChild(title);
    
        recipeRow.appendChild(imageCell);
        recipeRow.appendChild(titleCell);
    
        recipeLink.appendChild(recipeRow);
        resultsContainer.appendChild(recipeLink);
    });
    
}

document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.querySelector('.search-box button');
    var resultsContainer = document.getElementById('resultsContainer');

    searchButton.addEventListener('click', toggleResults);

    document.addEventListener('click', function(event) {
        if (!resultsContainer.contains(event.target) && event.target !== searchButton) {
            resultsContainer.style.display = 'none';
        }
    });
});

function toggleResults() {
    var resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer.style.display === 'none') {
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
}
