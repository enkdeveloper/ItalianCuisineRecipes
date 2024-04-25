const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const recipesData = require('./recipesData');
const _ = require('lodash');

app.use(express.static('views'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/api/search', (req, res) => {
    const searchTerm = req.query.term.toLowerCase();

    const matchingRecipes = recipesData.filter(recipe => {
        const recipeTitle = recipe.title.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        return recipeTitle.includes(searchTerm) || recipeDescription.includes(searchTerm);
    });

    res.json(matchingRecipes);
});

app.get('/history', (req, res) => {
    res.render('history');
});

app.get('/recipes/:categoryName/:id', (req, res) => {
    const categoryName = req.params.categoryName;
    const categoryId = req.params.id;
    
    const categoryRecipes = recipesData.filter(recipe => recipe.category.toLowerCase() === categoryName.toLowerCase());
    
    const recipe = categoryRecipes.find(recipe => recipe.id === parseInt(categoryId));
    
    const recommendedRecipes = getRecommendedRecipes(); 
    
    if (recipe) {
        console.log("Recipe found:", recipe);
        res.render('recipesDetails', { recipe: recipe, recommendedRecipes: recommendedRecipes });
    } else {
        res.status(404).send('Recipe not found.');
    }
});

function getRecommendedRecipes() {
    const shuffledRecipes = recipesData.sort(() => 0.5 - Math.random());
    return shuffledRecipes.slice(0, 3); 
}

app.get('/recipes/:categoryName', (req, res) => {
    const categoryName = req.params.categoryName;
    const categoryRecipes = recipesData.filter(recipe => recipe.category.toLowerCase() === categoryName.toLowerCase());

    res.render('recipesCategories', { 
        categoryRecipes: categoryRecipes,
        categoryName: categoryName
    });
});

app.get('/recipes', (req, res) => {
    const categories = [...new Set(recipesData.map(recipe => recipe.category))];
    
    const randomRecipes = _.shuffle(recipesData);
    
    const pageSize = 9; 
    const totalRecipes = randomRecipes.length; 
    const totalPages = Math.ceil(totalRecipes / pageSize);

    const currentPage = parseInt(req.query.page) || 1; 
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const recipesForPage = randomRecipes.slice(startIndex, endIndex);

    res.render('recipes', { recipes: recipesForPage, categories: categories, currentPage: currentPage, totalPages: totalPages });
});


app.get('/', (req, res) => {
    const searchTerm = req.query.searchTerm; 

    let recommendedRecipes = []; 

    if (searchTerm) {
        recommendedRecipes = recipesData.filter(recipe => {
            const recipeTitle = recipe.title.toLowerCase();
            const recipeDescription = recipe.description.toLowerCase();
            return recipeTitle.includes(searchTerm.toLowerCase()) || recipeDescription.includes(searchTerm.toLowerCase());
        });
    }

    res.render('index', { recipes: recommendedRecipes });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
