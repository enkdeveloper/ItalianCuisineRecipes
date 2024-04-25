const recipesData = [
            /* ANTIPASTA */ 
          {
            "id": 1,
            "title": "Bruschetta al Pomodoro",
            "description": "Italian bread topped with grated tomatoes, olive oil, garlic, and fresh basil.",
            "category": "Antipasta",
            "img": "./img/1.png",
            "ingredients": [
              "Italian bread",
              "Tomatoes",
              "Olive oil",
              "Garlic",
              "Fresh basil"
            ],
            "instructions": "1. Toast the Italian bread. \n2. Mix grated tomatoes, olive oil, minced garlic, and chopped fresh basil. \n3. Spread the tomato mixture on the toasted bread. \n4. Serve."
          },
          {
            "id": 2,
            "title": "Carpaccio di Manzo",
            "description": "Thinly sliced beef served with arugula, Parmesan cheese, olive oil, and lemon juice.",
            "category": "Antipasta",
            "img": "./img/2.png",
            "ingredients": [
              "Beef",
              "Arugula",
              "Parmesan cheese",
              "Olive oil",
              "Lemon juice"
            ],
            "instructions": "1. Slice the beef thinly. \n2. Arrange sliced beef on a serving plate. \n3. Sprinkle with arugula leaves and grated Parmesan cheese. \n4. Drizzle with olive oil and lemon juice. \n5. Serve."
          },
          {
            "id": 3,
            "title": "Caprese Salad",
            "description": "Simple and delicious salad made with sliced tomatoes, mozzarella cheese, and fresh basil leaves.",
            "category": "Antipasta",
            "img": "./img/3.png",
            "ingredients": [
              "Tomatoes",
              "Mozzarella cheese",
              "Fresh basil leaves",
              "Olive oil",
              "Balsamic vinegar"
            ],
            "instructions": "1. Slice the tomatoes and arrange them with mozzarella cheese. \n2. Sprinkle with fresh basil leaves. \n3. Drizzle with olive oil and balsamic vinegar. \n4. Serve."
          },
          {
            "id": 4,
            "title": "Arancini",
            "description": "Small balls made with risotto, filled with cheese or meat, and fried.",
            "category": "Antipasta",
            "img": "./img/4.png",
            "ingredients": [
              "Risotto",
              "Cheese",
              "Meat",
              "Flour",
              "Vegetable oil"
            ],
            "instructions": "1. Prepare risotto rice and let it cool. \n2. Form small balls from the cooled risotto. \n3. Fill with cheese or meat. \n4. Roll the balls in flour. \n5. Fry in vegetable oil. \n6. Serve."
          },
          {
            "id": 5,
            "title": "Calamari Fritti",
            "description": "Squid rings lightly coated in flour and fried, served with lemon slices.",
            "category": "Antipasta",
            "img": "./img/5.png",
            "ingredients": [
              "Squid",
              "Flour",
              "Salt",
              "Olive oil",
              "Lemon slices"
            ],
            "instructions": "1. Clean the squid and cut into rings. \n2. Lightly coat with flour and fry. \n3. Season with salt. \n4. Serve with lemon slices."
          },
          {
            "id": 6,
            "title": "Prosciutto e Melone",
            "description": "Thinly sliced prosciutto wrapped around melon slices.",
            "category": "Antipasta",
            "img": "./img/6.png",
            "ingredients": [
              "Prosciutto",
              "Melon"
            ],
            "instructions": "1. Slice the prosciutto thinly. \n2. Wrap slices of melon with prosciutto. \n3. Serve."
          },
          {
            "id": 7,
            "title": "Insalata di Mare",
            "description": "Delicious seafood salad made with shrimp, calamari, mussels, and other seafood.",
            "category": "Antipasta",
            "img": "./img/7.png",
            "ingredients": [
              "Shrimp",
              "Calamari",
              "Mussels",
              "Seafood mix",
              "Lettuce",
              "Olive oil",
              "Lemon juice",
              "Salt",
              "Black pepper"
            ],
            "instructions": "1. Boil the seafood and let it cool. \n2. Chop the lettuce and arrange it on a serving plate. \n3. Add boiled seafood on top of the lettuce. \n4. Drizzle with olive oil, lemon juice, salt, and black pepper. \n5. Serve."
          },
          {
            "id": 8,
            "title": "Panzerotti",
            "description": "Small pizzas filled with cheese, tomato sauce, and other ingredients, then fried.",
            "category": "Antipasta",
            "img": "./img/8.png",
            "ingredients": [
              "Pizza dough",
              "Cheese",
              "Tomato sauce",
              "Olives",
              "Mushrooms",
              "Sausage"
            ],
            "instructions": "1. Roll out the pizza dough and cut into squares. \n2. Place cheese, tomato sauce, olives, mushrooms, and sausage in the center of each square. \n3. Fold the edges of the dough to form a round shape. \n4. Fry in vegetable oil. \n5. Serve."
          },
          {
            "id": 9,
            "title": "Grilled Vegetable Platter",
            "description": "A platter of grilled vegetables marinated in olive oil and balsamic vinegar.",
            "category": "Antipasta",
            "img": "./img/9.png",
            "ingredients": [
              "Eggplant",
              "Zucchini",
              "Bell peppers",
              "Tomatoes",
              "Onions",
              "Olive oil",
              "Balsamic vinegar",
              "Salt",
              "Black pepper"
            ],
            "instructions": "1. Slice the vegetables and grill them. \n2. Arrange grilled vegetables on a serving platter. \n3. Drizzle with olive oil, balsamic vinegar, salt, and black pepper. \n4. Serve."
          },
          {
            "id": 10,
            "title": "Stuffed Mushrooms",
            "description": "Mushroom caps stuffed with cheese, parsley, garlic, and breadcrumbs, then baked.",
            "category": "Antipasta",
            "img": "./img/10.png",
            "ingredients": [
              "Mushrooms",
              "Cheese",
              "Parsley",
              "Garlic",
              "Breadcrumbs",
              "Olive oil",
              "Salt",
              "Black pepper"
            ],
            "instructions": "1. Remove stems from mushrooms and hollow out the caps. \n2. Mix cheese, parsley, garlic, breadcrumbs, olive oil, salt, and black pepper. \n3. Stuff mushroom caps with the mixture. \n4. Bake in the oven. \n5. Serve."
          },
    
            /* PASTA */
            {
              "id": 11,
            "title": "Spaghetti Aglio e Olio",
            "description": "Spaghetti cooked in olive oil with garlic and red pepper flakes.",
            "category": "Pasta",
            "img": "./img/11.png",
            "ingredients": [
            "Spaghetti pasta",
            "Olive oil",
            "Garlic",
            "Red pepper flakes",
            "Salt"
            ],
            "instructions": "1. Cook spaghetti according to package instructions. \n2. In a pan, heat olive oil over medium heat. \n3. Add minced garlic and red pepper flakes to the pan. Cook until garlic is fragrant but not browned. \n4. Add cooked spaghetti to the pan and toss to coat with the garlic-infused oil. \n5. Season with salt to taste. \n6. Serve hot."
            },
            {
              "id": 12,
            "title": "Penne all'Arrabbiata",
            "description": "Penne pasta served with a spicy tomato sauce.",
            "category": "Pasta",
            "img": "./img/12.png",
            "ingredients": [
            "Penne pasta",
            "Tomatoes",
            "Garlic",
            "Red pepper flakes",
            "Olive oil",
            "Salt",
            "Fresh basil (optional)"
            ],
            "instructions": "1. Cook penne pasta according to package instructions. \n2. In a pan, heat olive oil over medium heat. \n3. Add minced garlic and red pepper flakes to the pan. Cook until garlic is fragrant but not browned. \n4. Add diced tomatoes to the pan and cook until they break down and form a sauce. \n5. Season with salt to taste. \n6. Toss cooked penne pasta with the spicy tomato sauce. \n7. Garnish with fresh basil leaves if desired. \n8. Serve hot."
            },
            {
              "id": 13,
            "title": "Lasagna",
            "description": "Layered Italian lasagna made with thinly sliced meat, cheese, and béchamel sauce.",
            "category": "Pasta",
            "img": "./img/13.png",
            "ingredients": [
            "Lasagna noodles",
            "Ground beef",
            "Onion",
            "Garlic",
            "Tomato sauce",
            "Mozzarella cheese",
            "Parmesan cheese",
            "Ricotta cheese",
            "Eggs",
            "Milk",
            "Butter",
            "Flour",
            "Salt",
            "Black pepper",
            "Nutmeg"
            ],
            "instructions": "1. Preheat oven to 375°F (190°C). \n2. In a pan, cook ground beef with diced onion and minced garlic until browned. \n3. Add tomato sauce to the pan and simmer for 10 minutes. \n4. In a separate saucepan, melt butter over medium heat. Stir in flour to create a roux. \n5. Gradually whisk in milk until smooth. Cook until thickened. Season with salt, black pepper, and nutmeg. \n6. In a bowl, mix ricotta cheese with beaten eggs. \n7. Spread a layer of meat sauce in the bottom of a baking dish. \n8. Arrange lasagna noodles over the sauce. \n9. Spread a layer of ricotta mixture over the noodles, followed by a layer of mozzarella and Parmesan cheese. \n10. Repeat the layers until all ingredients are used, ending with a layer of cheese on top. \n11. Cover with foil and bake for 25 minutes. \n12. Remove foil and bake for an additional 25 minutes or until bubbly and golden. \n13. Let it cool for a few minutes before serving."
            },
            {
              "id": 14,
            "title": "Ravioli al Burro e Salvia",
            "description": "Ravioli served in a butter and fresh sage sauce.",
            "category": "Pasta",
            "img": "./img/14.png",
            "ingredients": [
            "Ravioli",
            "Butter",
            "Fresh sage leaves",
            "Parmesan cheese",
            "Salt",
            "Black pepper"
            ],
            "instructions": "1. Cook ravioli according to package instructions. \n2. In a pan, melt butter over medium heat. \n3. Add fresh sage leaves to the pan and cook until crispy. \n4. Drain cooked ravioli and add to the pan. \n5. Toss ravioli in the butter and sage sauce until coated. \n6. Season with salt and black pepper to taste. \n7. Serve hot with grated Parmesan cheese on top."
            },
            {
              "id": 15,
            "title": "Fettuccine Alfredo",
            "description": "Fettuccine pasta served in a creamy and cheesy Alfredo sauce.",
            "category": "Pasta",
            "img": "./img/15.png",
            "ingredients": [
            "Fettuccine pasta",
            "Heavy cream",
            "Butter",
            "Parmesan cheese",
            "Salt",
            "Black pepper",
            "Nutmeg"
            ],
            "instructions": "1. Cook fettuccine pasta according to package instructions. \n2. In a saucepan, melt butter over medium heat. \n3. Pour in heavy cream and bring to a simmer. \n4. Gradually stir in grated Parmesan cheese until the sauce is smooth and creamy. \n5. Season with salt, black pepper, and a pinch of nutmeg. \n6. Drain cooked fettuccine and add to the sauce. \n7. Toss until the pasta is well coated in the Alfredo sauce. \n8. Serve hot."
            },
            {
              "id": 16,
            "title": "Tortellini alla Panna",
            "description": "Tortellini served in a creamy sauce with thinly sliced ham.",
            "category": "Pasta",
            "img": "./img/16.png",
            "ingredients": [
            "Tortellini",
            "Heavy cream",
            "Butter",
            "Parmesan cheese",
            "Thinly sliced ham",
            "Salt",
            "Black pepper",
            "Nutmeg"
            ],
            "instructions": "1. Cook tortellini according to package instructions. \n2. In a saucepan, melt butter over medium heat. \n3. Pour in heavy cream and bring to a simmer. \n4. Gradually stir in grated Parmesan cheese until the sauce is smooth and creamy. \n5. Season with salt, black pepper, and a pinch of nutmeg. \n6. Add thinly sliced ham to the sauce and cook until heated through. \n7. Drain cooked tortellini and add to the sauce. \n8. Toss until the tortellini is well coated in the creamy sauce. \n9. Serve hot."
            },
            {
              "id": 17,
            "title": "Orecchiette with Broccoli Rabe",
            "description": "Orecchiette pasta with finely chopped broccoli rabe and sautéed garlic.",
            "category": "Pasta",
            "img": "./img/17.png",
            "ingredients": [
            "Orecchiette pasta",
            "Broccoli rabe",
            "Garlic",
            "Olive oil",
            "Red pepper flakes",
            "Salt",
            "Black pepper",
            "Grated Parmesan cheese (optional)"
            ],
            "instructions": "1. Cook orecchiette pasta according to package instructions. \n2. Blanch broccoli rabe in boiling water for 2 minutes, then drain and chop finely. \n3. In a pan, heat olive oil over medium heat. \n4. Add minced garlic and red pepper flakes to the pan. Cook until garlic is fragrant but not browned. \n5. Add chopped broccoli rabe to the pan and sauté for a few minutes. \n6. Season with salt and black pepper to taste. \n7. Toss cooked orecchiette pasta with the broccoli rabe mixture. \n8. Serve hot with grated Parmesan cheese on top if desired."
            },
            {
              "id": 18,
            "title": "Spaghetti Carbonara",
            "description": "Classic Italian dish made with eggs, pancetta, Parmesan cheese, and black pepper.",
            "category": "Pasta",
            "img": "./img/18.png",
            "ingredients": [
            "Spaghetti pasta",
            "Eggs",
            "Pancetta",
            "Parmesan cheese",
            "Black pepper",
            "Salt"
            ],
            "instructions": "1. Cook spaghetti according to package instructions. \n2. In a bowl, whisk together eggs, grated Parmesan cheese, black pepper, and a pinch of salt. \n3. In a pan, cook diced pancetta until crispy. \n4. Drain cooked spaghetti and add to the pan with pancetta. \n5. Pour the egg mixture over the spaghetti and toss until the eggs are cooked and the pasta is coated in the sauce. \n6. Serve hot with additional Parmesan cheese and black pepper on top."
            },
            {
              "id": 19,
            "title": "Pappardelle al Cinghiale",
            "description": "Pappardelle pasta with wild boar meat and tomato sauce.",
            "category": "Pasta",
            "img": "./img/19.png",
            "ingredients": [
            "Pappardelle pasta",
            "Wild boar meat",
            "Tomato sauce",
            "Onion",
            "Carrot",
            "Celery",
            "Garlic",
            "Red wine",
            "Beef broth",
            "Olive oil",
            "Salt",
            "Black pepper",
            "Fresh parsley (for garnish)"
            ],
            "instructions": "1. Cook pappardelle pasta according to package instructions. \n2. In a pan, heat olive oil over medium heat. \n3. Sauté diced onion, carrot, and celery until softened. \n4. Add minced garlic and cook until fragrant. \n5. Add wild boar meat to the pan and cook until browned. \n6. Deglaze the pan with red wine and cook until reduced by half. \n7. Stir in tomato sauce and beef broth. Simmer for 30 minutes. \n8. Season with salt and black pepper to taste. \n9. Toss cooked pappardelle pasta with the wild boar ragu. \n10. Garnish with fresh parsley before serving."
            },
            {
              "id": 20,
            "title": "Gnocchi Sorrentina",
            "description": "Baked gnocchi served with tomato sauce, mozzarella cheese, and basil.",
            "category": "Pasta",
            "img": "./img/20.png",
            "ingredients": [
            "Gnocchi",
            "Tomato sauce",
            "Mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt",
            "Black pepper"
            ],
            "instructions": "1. Preheat oven to 375°F (190°C). \n2. Cook gnocchi according to package instructions. \n3. In a baking dish, spread a layer of tomato sauce. \n4. Arrange cooked gnocchi over the sauce. \n5. Top with mozzarella cheese slices. \n6. Drizzle with olive oil and season with salt and black pepper. \n7. Bake for 20 minutes or until the cheese is melted and bubbly. \n8. Garnish with fresh basil leaves before serving."
            },
    
            /* PIZZA */
    
            {
              "id": 21,
                "title": "Margherita Pizza",
                "description": "Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
                "category": "Pizza",
                "img": "./img/21.png",
                "ingredients": [
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Fresh basil leaves",
                  "Pizza dough"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread tomato sauce over the dough, leaving a border around the edges. \n4. Tear fresh mozzarella cheese into pieces and scatter over the sauce. \n5. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n6. Remove from the oven and top with fresh basil leaves. \n7. Slice and serve hot."
              },
              {
                "id": 22,
                "title": "Quattro Stagioni",
                "description": "Four Seasons pizza; divided into four sections with artichokes, mushrooms, ham, and olives.",
                "category": "Pizza",
                "img": "./img/22.png",
                "ingredients": [
                  "Pizza dough",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Artichokes",
                  "Mushrooms",
                  "Ham",
                  "Olives"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Divide the pizza into four sections. \n4. Top each section with tomato sauce, mozzarella cheese, and the desired toppings (artichokes, mushrooms, ham, olives). \n5. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n6. Slice and serve hot."
              },
              {
                "id": 23,
                "title": "Diavola Pizza",
                "description": "Spicy sausage, jalapeno peppers, and mozzarella cheese make up this fiery pizza.",
                "category": "Pizza",
                "img": "./img/23.png",
                "ingredients": [
                  "Pizza dough",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Spicy sausage",
                  "Jalapeno peppers"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread tomato sauce over the dough, leaving a border around the edges. \n4. Top with sliced spicy sausage and jalapeno peppers. \n5. Scatter mozzarella cheese over the toppings. \n6. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n7. Slice and serve hot."
              },
              {
                "id": 24,
                "title": "Capricciosa Pizza",
                "description": "Pizza with various toppings including artichokes, olives, mushrooms, ham, and mozzarella cheese.",
                "category": "Pizza",
                "img": "./img/24.png",
                "ingredients": [
                  "Pizza dough",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Artichokes",
                  "Olives",
                  "Mushrooms",
                  "Ham"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread tomato sauce over the dough, leaving a border around the edges. \n4. Top with the desired toppings (artichokes, olives, mushrooms, ham). \n5. Scatter mozzarella cheese over the toppings. \n6. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n7. Slice and serve hot."
              },
              {
                "id": 25,
                "title": "Calzone",
                "description": "Folded pizza filled with cheese, meat, and vegetables.",
                "category": "Pizza",
                "img": "./img/25.png",
                "ingredients": [
                  "Pizza dough",
                  "Mozzarella cheese",
                  "Tomato sauce",
                  "Ham",
                  "Mushrooms",
                  "Bell peppers",
                  "Onions"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread tomato sauce over half of the dough, leaving a border around the edges. \n4. Top with mozzarella cheese, ham, mushrooms, bell peppers, and onions. \n5. Fold the other half of the dough over the toppings and seal the edges. \n6. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n7. Slice and serve hot."
              },
              {
                "id": 26,
                "title": "Quattro Formaggi",
                "description": "Pizza topped with four types of cheese (mozzarella, parmesan, gorgonzola, ricotta).",
                "category": "Pizza",
                "img": "./img/26.png",
                "ingredients": [
                  "Pizza dough",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Parmesan cheese",
                  "Gorgonzola cheese",
                  "Ricotta cheese"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread tomato sauce over the dough, leaving a border around the edges. \n4. Scatter mozzarella, parmesan, gorgonzola, and ricotta cheeses over the sauce. \n5. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n6. Slice and serve hot."
              },
              {
                "id": 27,
                "title": "Pizza Napoletana",
                "description": "Napoli-style pizza with tomatoes, mozzarella cheese, black olives, anchovies, and capers.",
                "category": "Pizza",
                "img": "./img/27.png",
                "ingredients": [
                  "Pizza dough",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Black olives",
                  "Anchovies",
                  "Capers"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread tomato sauce over the dough, leaving a border around the edges. \n4. Top with mozzarella cheese, black olives, anchovies, and capers. \n5. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n6. Slice and serve hot."
              },
              {
                "id": 28,
                "title": "Prosciutto e Funghi Pizza",
                "description": "Pizza topped with mushrooms, thinly sliced prosciutto, and mozzarella cheese.",
                "category": "Pizza",
                "img": "./img/28.png",
                "ingredients": [
                  "Pizza dough",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Mushrooms",
                  "Prosciutto"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread tomato sauce over the dough, leaving a border around the edges. \n4. Top with sliced mushrooms and thinly sliced prosciutto. \n5. Scatter mozzarella cheese over the toppings. \n6. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n7. Slice and serve hot."
              },
              {
                "id": 29,
                "title": "Pizza Marinara",
                "description": "Traditional Italian pizza topped with tomatoes, garlic, olive oil, and oregano.",
                "category": "Pizza",
                "img": "./img/29.png",
                "ingredients": [
                  "Pizza dough",
                  "Tomatoes",
                  "Garlic",
                  "Olive oil",
                  "Oregano"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread sliced tomatoes and minced garlic over the dough, leaving a border around the edges. \n4. Drizzle with olive oil and sprinkle with oregano. \n5. Bake in the preheated oven until the crust is golden. \n6. Slice and serve hot."
              },
              {
                "id": 30,
                "title": "Pizza Bianca",
                "description": "White pizza topped with cheese, potatoes, arugula, and balsamic vinegar.",
                "category": "Pizza",
                "img": "./img/30.png",
                "ingredients": [
                  "Pizza dough",
                  "Mozzarella cheese",
                  "Parmesan cheese",
                  "Potatoes",
                  "Arugula",
                  "Balsamic vinegar"
                ],
                "instructions": "1. Preheat your oven to the highest temperature setting. \n2. Roll out the pizza dough into a circle. \n3. Spread mozzarella and parmesan cheese over the dough, leaving a border around the edges. \n4. Top with thinly sliced potatoes and arugula. \n5. Drizzle with balsamic vinegar. \n6. Bake in the preheated oven until the crust is golden and the cheese is bubbly. \n7. Slice and serve hot."
              },
    
              /* RISOTTO */
    
              {
                "id": 31,
                "title": "Risotto alla Milanese",
                "description": "Creamy Milanese risotto made with saffron and parmesan cheese.",
                "category": "Risotto",
                "img": "./img/31.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or vegetable broth",
                  "Onion",
                  "Butter",
                  "White wine",
                  "Saffron threads",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or vegetable broth and keep it warm. \n2. In another large saucepan, melt butter over medium heat. \n3. Add finely chopped onion and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in saffron threads, grated Parmesan cheese, salt, and black pepper. \n8. Serve hot."
              },
              {
                "id": 32,
                "title": "Risotto ai Funghi",
                "description": "Creamy risotto with mushrooms and white wine.",
                "category": "Risotto",
                "img": "./img/32.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or vegetable broth",
                  "Onion",
                  "Butter",
                  "White wine",
                  "Mushrooms",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or vegetable broth and keep it warm. \n2. In another large saucepan, melt butter over medium heat. \n3. Add finely chopped onion and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in sliced mushrooms, grated Parmesan cheese, salt, and black pepper. \n8. Serve hot."
              },
              {
                "id": 33,
                "title": "Risotto al Frutti di Mare",
                "description": "Seafood risotto made with shrimp, calamari, and mussels.",
                "category": "Risotto",
                "img": "./img/33.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or seafood broth",
                  "Onion",
                  "Garlic",
                  "Olive oil",
                  "White wine",
                  "Shrimp",
                  "Calamari",
                  "Mussels",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or seafood broth and keep it warm. \n2. In another large saucepan, heat olive oil over medium heat. \n3. Add finely chopped onion and minced garlic, and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in cleaned shrimp, sliced calamari, and mussels. \n8. Stir in grated Parmesan cheese, salt, and black pepper. \n9. Serve hot."
              },
              {
                "id": 34,
                "title": "Risotto al Nero di Seppia",
                "description": "Risotto made with squid ink, giving it a distinctive black color.",
                "category": "Risotto",
                "img": "./img/34.png",
                "ingredients": [
                  "Arborio rice",
                  "Fish or vegetable broth",
                  "Onion",
                  "Garlic",
                  "Olive oil",
                  "White wine",
                  "Squid ink",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the fish or vegetable broth and keep it warm. \n2. In another large saucepan, heat olive oil over medium heat. \n3. Add finely chopped onion and minced garlic, and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Dissolve squid ink in a little warm broth and add it to the rice, stirring continuously. \n7. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n8. Stir in grated Parmesan cheese, salt, and black pepper. \n9. Serve hot."
              },
              {
                "id": 35,
                "title": "Risotto al Tartufo",
                "description": "Truffle risotto made with black or white truffle mushrooms.",
                "category": "Risotto",
                "img": "./img/35.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or vegetable broth",
                  "Onion",
                  "Butter",
                  "White wine",
                  "Truffle mushrooms (black or white)",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or vegetable broth and keep it warm. \n2. In another large saucepan, melt butter over medium heat. \n3. Add finely chopped onion and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in sliced truffle mushrooms, grated Parmesan cheese, salt, and black pepper. \n8. Serve hot."
              },
              {
                "id": 36,
                "title": "Risotto ai Porcini",
                "description": "Creamy risotto made with porcini mushrooms.",
                "category": "Risotto",
                "img": "./img/36.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or vegetable broth",
                  "Onion",
                  "Butter",
                  "White wine",
                  "Porcini mushrooms",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or vegetable broth and keep it warm. \n2. In another large saucepan, melt butter over medium heat. \n3. Add finely chopped onion and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in sliced porcini mushrooms, grated Parmesan cheese, salt, and black pepper. \n8. Serve hot."
              },
              {
                "id": 37,
                "title": "Risotto agli Asparagi",
                "description": "Asparagus risotto made with fresh green asparagus.",
                "category": "Risotto",
                "img": "./img/37.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or vegetable broth",
                  "Onion",
                  "Butter",
                  "White wine",
                  "Fresh asparagus",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or vegetable broth and keep it warm. \n2. In another large saucepan, melt butter over medium heat. \n3. Add finely chopped onion and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in chopped fresh asparagus, grated Parmesan cheese, salt, and black pepper. \n8. Serve hot."
              },
              {
                "id": 38,
                "title": "Risotto con Gamberetti",
                "description": "Shrimp risotto made with succulent shrimp.",
                "category": "Risotto",
                "img": "./img/38.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or seafood broth",
                  "Onion",
                  "Garlic",
                  "Olive oil",
                  "White wine",
                  "Shrimp",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or seafood broth and keep it warm. \n2. In another large saucepan, heat olive oil over medium heat. \n3. Add finely chopped onion and minced garlic, and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in cleaned shrimp. \n8. Stir in grated Parmesan cheese, salt, and black pepper. \n9. Serve hot."
              },
              {
                "id": 39,
                "title": "Risotto ai Funghi Porcini",
                "description": "Creamy and delicious risotto made with porcini mushrooms.",
                "category": "Risotto",
                "img": "./img/39.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or vegetable broth",
                  "Onion",
                  "Butter",
                  "White wine",
                  "Porcini mushrooms",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or vegetable broth and keep it warm. \n2. In another large saucepan, melt butter over medium heat. \n3. Add finely chopped onion and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in sliced porcini mushrooms, grated Parmesan cheese, salt, and black pepper. \n8. Serve hot."
              },
              {
                "id": 40,
                "title": "Risotto alle Zucchine",
                "description": "Light and flavorful risotto made with fresh zucchini.",
                "category": "Risotto",
                "img": "./img/40.png",
                "ingredients": [
                  "Arborio rice",
                  "Chicken or vegetable broth",
                  "Onion",
                  "Butter",
                  "White wine",
                  "Fresh zucchini",
                  "Parmesan cheese",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the chicken or vegetable broth and keep it warm. \n2. In another large saucepan, melt butter over medium heat. \n3. Add finely chopped onion and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm broth to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in chopped fresh zucchini, grated Parmesan cheese, salt, and black pepper. \n8. Serve hot."
              },
    
              /* SEAFOOD */
    
              {
                "id": 41,
                "title": "Linguine alle Vongole",
                "description": "Linguine pasta with thinly sliced clams (vongole) and garlic.",
                "category": "Seafood",
                "img": "./img/41.png",
                "ingredients": [
                  "Linguine pasta",
                  "Clams",
                  "Garlic",
                  "Olive oil",
                  "White wine",
                  "Parsley",
                  "Red pepper flakes",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Cook linguine pasta according to package instructions. \n2. In a large pan, heat olive oil over medium heat. \n3. Add minced garlic and red pepper flakes, and sauté until fragrant. \n4. Add cleaned clams and white wine to the pan. Cover and cook until the clams open. \n5. Toss cooked linguine with the clam sauce. \n6. Garnish with chopped parsley, salt, and black pepper. \n7. Serve hot."
              },
              {
                "id": 42,
                "title": "Cioppino",
                "description": "Fish soup made with various seafood (shrimp, squid, mussels) and tomato sauce.",
                "category": "Seafood",
                "img": "./img/42.png",
                "ingredients": [
                  "Shrimp",
                  "Squid",
                  "Mussels",
                  "Fish fillets",
                  "Tomatoes",
                  "Onion",
                  "Garlic",
                  "White wine",
                  "Fish stock",
                  "Olive oil",
                  "Parsley",
                  "Bay leaf",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a large pot, heat olive oil over medium heat. \n2. Add minced garlic and chopped onion, and sauté until translucent. \n3. Add diced tomatoes, fish stock, white wine, bay leaf, and salt. Simmer for 20 minutes. \n4. Add seafood (shrimp, squid, mussels, fish fillets) to the pot and cook until seafood is cooked through. \n5. Garnish with chopped parsley, salt, and black pepper. \n6. Serve hot with crusty bread."
              },
              {
                "id": 43,
                "title": "Grilled Salmon",
                "description": "Grilled salmon fillet served with lemon slices and fresh herbs.",
                "category": "Seafood",
                "img": "./img/43.png",
                "ingredients": [
                  "Salmon fillets",
                  "Lemon",
                  "Olive oil",
                  "Salt",
                  "Black pepper",
                  "Fresh herbs (such as dill, parsley, or thyme)"
                ],
                "instructions": "1. Preheat the grill to medium-high heat. \n2. Brush salmon fillets with olive oil and season with salt and black pepper. \n3. Grill salmon fillets for 4-5 minutes on each side, or until cooked through. \n4. Serve hot with lemon slices and garnish with fresh herbs."
              },
              {
                "id": 44,
                "title": "Shrimp Scampi",
                "description": "Delicious seafood dish made with garlic, butter, white wine, and shrimp.",
                "category": "Seafood",
                "img": "./img/44.png",
                "ingredients": [
                  "Shrimp",
                  "Garlic",
                  "Butter",
                  "White wine",
                  "Lemon juice",
                  "Parsley",
                  "Red pepper flakes",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a large pan, melt butter over medium heat. \n2. Add minced garlic and red pepper flakes, and sauté until fragrant. \n3. Add shrimp to the pan and cook until they turn pink. \n4. Pour in white wine and lemon juice, and simmer until the sauce thickens slightly. \n5. Season with salt and black pepper. \n6. Garnish with chopped parsley. \n7. Serve hot over pasta or with crusty bread."
              },
              {
                "id": 45,
                "title": "Seafood Risotto",
                "description": "Creamy risotto made with shrimp, squid, mussels, and other seafood.",
                "category": "Seafood",
                "img": "./img/45.png",
                "ingredients": [
                  "Arborio rice",
                  "Shrimp",
                  "Squid",
                  "Mussels",
                  "Fish stock",
                  "White wine",
                  "Onion",
                  "Garlic",
                  "Parmesan cheese",
                  "Butter",
                  "Olive oil",
                  "Parsley",
                  "Lemon zest",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a saucepan, heat the fish stock and keep it warm. \n2. In another large pan, heat olive oil over medium heat. \n3. Add minced garlic and chopped onion, and sauté until translucent. \n4. Add Arborio rice and toast for a few minutes. \n5. Pour in white wine and stir until absorbed. \n6. Add a ladleful of warm fish stock to the rice and stir continuously until absorbed. Repeat this process until the rice is creamy and cooked al dente. \n7. Stir in cooked shrimp, squid, and mussels. \n8. Stir in grated Parmesan cheese, butter, chopped parsley, and lemon zest. \n9. Season with salt and black pepper. \n10. Serve hot."
              },
              {
                "id": 46,
                "title": "Clam Chowder",
                "description": "American-style clam soup made with clams, potatoes, onion, and cream.",
                "category": "Seafood",
                "img": "./img/46.png",
                "ingredients": [
                  "Clams",
                  "Potatoes",
                  "Onion",
                  "Bacon",
                  "Butter",
                  "Flour",
                  "Fish or vegetable stock",
                  "Heavy cream",
                  "Salt",
                  "Black pepper",
                  "Parsley"
                ],
                "instructions": "1. In a large pot, cook chopped bacon until crispy. Remove bacon from the pot and set aside. \n2. In the same pot, melt butter over medium heat. Add chopped onion and diced potatoes, and sauté until softened. \n3. Stir in flour and cook for a few minutes to make a roux. \n4. Gradually add fish or vegetable stock, stirring constantly to avoid lumps. \n5. Add clams (with their juices) to the pot and simmer until clams are cooked. \n6. Stir in heavy cream and cooked bacon. \n7. Season with salt, black pepper, and chopped parsley. \n8. Serve hot with crusty bread."
              },
              {
                "id": 47,
                "title": "Grilled Octopus",
                "description": "Grilled octopus served with olive oil, lemon, and pepper.",
                "category": "Seafood",
                "img": "./img/47.png",
                "ingredients": [
                  "Octopus",
                  "Olive oil",
                  "Lemon",
                  "Garlic",
                  "Red pepper flakes",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Preheat the grill to medium-high heat. \n2. Clean the octopus and remove the beak. \n3. Cook the octopus in boiling water for about 30-45 minutes, or until tender. \n4. Drain the octopus and pat dry. \n5. Brush with olive oil and season with salt, black pepper, minced garlic, and red pepper flakes. \n6. Grill the octopus for 4-5 minutes on each side, or until charred. \n7. Serve hot with lemon wedges."
              },
              {
                "id": 48,
                "title": "Fried Calamari",
                "description": "Deep-fried calamari rings served with lemon slices and marinara sauce.",
                "category": "Seafood",
                "img": "./img/48.png",
                "ingredients": [
                  "Calamari",
                  "Flour",
                  "Cornmeal",
                  "Salt",
                  "Black pepper",
                  "Olive oil",
                  "Lemon slices",
                  "Marinara sauce"
                ],
                "instructions": "1. Clean the calamari and slice into rings. \n2. In a bowl, mix flour, cornmeal, salt, and black pepper. \n3. Heat olive oil in a deep fryer or large pot. \n4. Dredge the calamari rings in the flour mixture and shake off excess flour. \n5. Fry the calamari rings in batches until golden brown and crispy. \n6. Drain on paper towels and season with salt. \n7. Serve hot with lemon slices and marinara sauce."
              },
              {
                "id": 49,
                "title": "Seafood Paella",
                "description": "Spanish rice dish made with shrimp, mussels, squid, and other seafood.",
                "category": "Seafood",
                "img": "./img/49.png",
                "ingredients": [
                  "Short-grain rice",
                  "Shrimp",
                  "Mussels",
                  "Squid",
                  "Chicken or vegetable broth",
                  "Tomatoes",
                  "Onion",
                  "Garlic",
                  "Bell pepper",
                  "Frozen peas",
                  "Saffron threads",
                  "Paprika",
                  "Olive oil",
                  "Lemon wedges",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a paella pan or large skillet, heat olive oil over medium heat. \n2. Add chopped onion, minced garlic, and diced bell pepper, and sauté until softened. \n3. Stir in diced tomatoes, saffron threads, and paprika. Cook until tomatoes are softened. \n4. Add short-grain rice to the pan and stir to coat with the vegetable mixture. \n5. Pour in chicken or vegetable broth and bring to a simmer. \n6. Arrange shrimp, mussels, and squid over the rice. \n7. Cover and cook until the rice is tender and the seafood is cooked through. \n8. Garnish with frozen peas and lemon wedges. \n9. Serve hot."
              },
              {
                "id": 50,
                "title": "Tuna Tartare",
                "description": "Raw, chopped tuna mixed with onions, parsley, and olive oil.",
                "category": "Seafood",
                "img": "./img/50.png",
                "ingredients": [
                  "Sushi-grade tuna",
                  "Red onion",
                  "Parsley",
                  "Lemon juice",
                  "Olive oil",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Chop sushi-grade tuna into small pieces and place in a bowl. \n2. Finely dice red onion and chop parsley, then add to the bowl with the tuna. \n3. Drizzle with lemon juice and olive oil. \n4. Season with salt and black pepper. \n5. Gently toss to combine. \n6. Serve immediately as a tartare appetizer."
              },
    
              /* MEAT */
    
              {
                "id": 51,
                "title": "Osso Buco",
                "description": "Delicious Italian dish made with chicken or veal meat containing bone-in meat pieces.",
                "category": "Meat",
                "img": "./img/51.png",
                "ingredients": [
                  "Chicken or veal meat",
                  "Flour",
                  "Olive oil",
                  "Onion",
                  "Carrot",
                  "Celery",
                  "Garlic",
                  "Tomato paste",
                  "White wine",
                  "Chicken or beef broth",
                  "Bay leaf",
                  "Thyme",
                  "Parsley",
                  "Salt",
                  "Black pepper",
                  "Gremolata (optional)"
                ],
                "instructions": "1. Season the meat with salt and pepper, then dredge in flour. \n2. In a large pan, heat olive oil over medium-high heat. \n3. Brown the meat on all sides, then remove from the pan and set aside. \n4. In the same pan, add chopped onion, carrot, celery, and garlic. Sauté until softened. \n5. Stir in tomato paste and cook for a few minutes. \n6. Pour in white wine and deglaze the pan, scraping up any browned bits. \n7. Return the meat to the pan and add chicken or beef broth, bay leaf, thyme, and parsley. \n8. Cover and simmer for about 2 hours, or until the meat is tender. \n9. Serve hot with gremolata, if desired."
              },
              {
                "id": 52,
                "title": "Bistecca alla Fiorentina",
                "description": "Grilled and salted large steak.",
                "category": "Meat",
                "img": "./img/52.png",
                "ingredients": [
                  "Large steak (such as T-bone or porterhouse)",
                  "Salt",
                  "Black pepper",
                  "Olive oil"
                ],
                "instructions": "1. Preheat the grill to high heat. \n2. Season the steak generously with salt and pepper. \n3. Drizzle with olive oil. \n4. Grill the steak for about 5-6 minutes on each side, or until desired doneness. \n5. Let the steak rest for a few minutes before slicing. \n6. Serve hot."
              },
              {
                "id": 53,
                "title": "Pollo alla Cacciatora",
                "description": "Chicken cooked with tomatoes, peppers, and onions.",
                "category": "Meat",
                "img": "./img/53.png",
                "ingredients": [
                  "Chicken pieces",
                  "Tomatoes",
                  "Onion",
                  "Bell pepper",
                  "Garlic",
                  "White wine",
                  "Chicken broth",
                  "Olive oil",
                  "Bay leaf",
                  "Thyme",
                  "Oregano",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Season the chicken pieces with salt and black pepper. \n2. In a large pan, heat olive oil over medium heat. \n3. Brown the chicken pieces on all sides, then remove from the pan and set aside. \n4. In the same pan, add chopped onion, bell pepper, and garlic. Sauté until softened. \n5. Stir in diced tomatoes, white wine, chicken broth, bay leaf, thyme, and oregano. \n6. Return the chicken to the pan and simmer for about 30-40 minutes, or until the chicken is cooked through. \n7. Serve hot."
              },
              {
                "id": 54,
                "title": "Saltimbocca alla Romana",
                "description": "Roman dish made with veal, ham, and fresh sage between parchment paper.",
                "category": "Meat",
                "img": "./img/54.png",
                "ingredients": [
                  "Veal scallops",
                  "Prosciutto",
                  "Fresh sage leaves",
                  "Flour",
                  "Butter",
                  "White wine",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Season the veal scallops with salt and black pepper, then dredge in flour. \n2. Place a slice of prosciutto and a sage leaf on each veal scallop. \n3. Secure with toothpicks. \n4. In a large pan, melt butter over medium heat. \n5. Cook the veal scallops until golden brown on both sides. \n6. Pour in white wine and simmer until the sauce is reduced. \n7. Serve hot."
              },
              {
                "id": 55,
                "title": "Ragu alla Bolognese",
                "description": "Meaty pasta sauce made with tomatoes and spices.",
                "category": "Meat",
                "img": "./img/55.png",
                "ingredients": [
                  "Ground beef",
                  "Onion",
                  "Carrot",
                  "Celery",
                  "Garlic",
                  "Tomato paste",
                  "Canned tomatoes",
                  "Red wine",
                  "Beef broth",
                  "Bay leaf",
                  "Thyme",
                  "Oregano",
                  "Basil",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a large pot, cook chopped onion, carrot, celery, and garlic until softened. \n2. Add ground beef and cook until browned. \n3. Stir in tomato paste and cook for a few minutes. \n4. Pour in red wine and cook until reduced by half. \n5. Add canned tomatoes, beef broth, bay leaf, thyme, oregano, and basil. \n6. Simmer uncovered for about 1-2 hours, stirring occasionally. \n7. Season with salt and black pepper. \n8. Serve hot over cooked pasta."
              },
              {
                "id": 56,
                "title": "Arrosticini",
                "description": "Italian lamb skewers marinated with olive oil and pepper, then grilled.",
                "category": "Meat",
                "img": "./img/56.png",
                "ingredients": [
                  "Lamb meat",
                  "Olive oil",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Cut lamb meat into small pieces and thread onto skewers. \n2. Drizzle with olive oil and season with salt and black pepper. \n3. Grill the skewers over medium-high heat for about 5-7 minutes, or until cooked through. \n4. Serve hot."
              },
              {
                "id": 57,
                "title": "Braciola di Maiale",
                "description": "Pan-seared pork chop cooked with garlic and peppers.",
                "category": "Meat",
                "img": "./img/57.png",
                "ingredients": [
                  "Pork chops",
                  "Garlic",
                  "Red pepper flakes",
                  "Olive oil",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Season the pork chops with salt, black pepper, and red pepper flakes. \n2. In a large pan, heat olive oil over medium-high heat. \n3. Add minced garlic and cook until fragrant. \n4. Sear the pork chops on both sides until golden brown and cooked through. \n5. Serve hot."
              },
              {
                "id": 58,
                "title": "Ossobuco alla Milanese",
                "description": "Milanese-style braised veal shanks cooked with wine, tomatoes, and aromatics.",
                "category": "Meat",
                "img": "./img/58.png",
                "ingredients": [
                  "Veal shanks",
                  "Flour",
                  "Olive oil",
                  "Onion",
                  "Carrot",
                  "Celery",
                  "Garlic",
                  "Tomatoes",
                  "White wine",
                  "Beef broth",
                  "Bay leaf",
                  "Thyme",
                  "Gremolata (optional)",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Season the veal shanks with salt and black pepper, then dredge in flour. \n2. In a large pot, heat olive oil over medium-high heat. \n3. Brown the veal shanks on all sides, then remove from the pot and set aside. \n4. In the same pot, add chopped onion, carrot, celery, and garlic. Sauté until softened. \n5. Stir in diced tomatoes and cook for a few minutes. \n6. Return the veal shanks to the pot and pour in white wine and beef broth. \n7. Add bay leaf and thyme. \n8. Cover and simmer for about 2-3 hours, or until the meat is tender. \n9. Serve hot with gremolata, if desired."
              },
              {
                "id": 59,
                "title": "Fettina di Vitello",
                "description": "Thinly sliced veal coated with flour and egg, then fried.",
                "category": "Meat",
                "img": "./img/59.png",
                "ingredients": [
                  "Veal slices",
                  "Flour",
                  "Egg",
                  "Bread crumbs",
                  "Salt",
                  "Black pepper",
                  "Olive oil"
                ],
                "instructions": "1. Season the veal slices with salt and black pepper. \n2. Dredge the veal slices in flour, then dip in beaten egg. \n3. Coat with bread crumbs. \n4. In a large pan, heat olive oil over medium heat. \n5. Fry the veal slices until golden brown and cooked through. \n6. Serve hot."
              },
              {
                "id": 60,
                "title": "Polpette al Sugo",
                "description": "Italian meatballs cooked in tomato sauce and served with parmesan cheese.",
                "category": "Meat",
                "img": "./img/60.png",
                "ingredients": [
                  "Ground beef",
                  "Bread crumbs",
                  "Egg",
                  "Parmesan cheese",
                  "Garlic",
                  "Parsley",
                  "Olive oil",
                  "Tomato sauce",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. In a large bowl, mix together ground beef, bread crumbs, grated parmesan cheese, minced garlic, chopped parsley, beaten egg, salt, and black pepper. \n2. Form the mixture into meatballs. \n3. In a large pan, heat olive oil over medium heat. \n4. Brown the meatballs on all sides. \n5. Pour in tomato sauce and simmer for about 20-30 minutes. \n6. Serve hot with additional grated parmesan cheese."
              },
    
              /* VEGETARIAN */
    
              {
                "id": 61,
                "title": "Pesto Pasta",
                "description": "Delicious pasta served with a pesto sauce made with fresh basil, pine nuts, parmesan cheese, garlic, and olive oil.",
                "category": "Vegetarian",
                "img": "./img/61.png",
                "ingredients": [
                  "Pasta",
                  "Fresh basil",
                  "Pine nuts",
                  "Parmesan cheese",
                  "Garlic",
                  "Olive oil",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Cook the pasta according to package instructions. \n2. In a food processor, blend fresh basil, pine nuts, parmesan cheese, garlic, and olive oil until smooth. \n3. Toss the cooked pasta with the pesto sauce. \n4. Season with salt and black pepper. \n5. Serve hot."
              },
              {
                "id": 62,
                "title": "Eggplant Parmesan",
                "description": "Layered dish made with fried eggplant slices, tomato sauce, and mozzarella cheese.",
                "category": "Vegetarian",
                "img": "./img/62.png",
                "ingredients": [
                  "Eggplant",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Parmesan cheese",
                  "Bread crumbs",
                  "Egg",
                  "Olive oil",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Preheat the oven to 375°F (190°C). \n2. Slice the eggplant into rounds and dip in beaten egg, then coat with bread crumbs. \n3. Heat olive oil in a pan over medium heat and fry the eggplant slices until golden brown. \n4. In a baking dish, layer fried eggplant slices with tomato sauce and mozzarella cheese. \n5. Repeat the layers until all ingredients are used, finishing with a layer of mozzarella cheese and parmesan cheese on top. \n6. Bake for about 25-30 minutes, or until the cheese is melted and bubbly. \n7. Serve hot."
              },
              {
                "id": 63,
                "title": "Caprese Sandwich",
                "description": "Delicious sandwich made with mozzarella cheese, tomato slices, and fresh basil.",
                "category": "Vegetarian",
                "img": "./img/63.png",
                "ingredients": [
                  "Bread",
                  "Mozzarella cheese",
                  "Tomato",
                  "Fresh basil leaves",
                  "Olive oil",
                  "Balsamic vinegar",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Slice the bread and toast if desired. \n2. Layer sliced mozzarella cheese, tomato slices, and fresh basil leaves on one slice of bread. \n3. Drizzle with olive oil and balsamic vinegar. \n4. Season with salt and black pepper. \n5. Top with another slice of bread. \n6. Serve immediately."
              },
              {
                "id": 64,
                "title": "Vegetable Lasagna",
                "description": "Layered lasagna made with vegetables (spinach, zucchini, carrots) and béchamel sauce.",
                "category": "Vegetarian",
                "img": "./img/64.png",
                "ingredients": [
                  "Lasagna noodles",
                  "Spinach",
                  "Zucchini",
                  "Carrot",
                  "Tomato sauce",
                  "Béchamel sauce",
                  "Mozzarella cheese",
                  "Parmesan cheese",
                  "Olive oil",
                  "Salt",
                  "Black pepper"
                ],
                "instructions": "1. Preheat the oven to 375°F (190°C). \n2. Cook the lasagna noodles according to package instructions. \n3. In a pan, sauté chopped spinach, sliced zucchini, and grated carrots until tender. \n4. In a baking dish, layer lasagna noodles, tomato sauce, sautéed vegetables, béchamel sauce, and mozzarella cheese. \n5. Repeat the layers until all ingredients are used, finishing with a layer of mozzarella cheese and parmesan cheese on top. \n6. Bake for about 30-35 minutes, or until the cheese is melted and bubbly. \n7. Serve hot."
              },
          {
            "id": 65,
          "title": "Stuffed Bell Peppers",
          "description": "Bell peppers stuffed with rice, vegetables, and spices, then baked until tender.",
          "category": "Vegetarian",
          "img": "./img/65.png",
          "ingredients": [
          "Bell peppers",
          "Rice",
          "Onion",
          "Garlic",
          "Tomato",
          "Corn",
          "Black beans",
          "Cumin",
          "Chili powder",
          "Olive oil",
          "Salt",
          "Black pepper"
          ],
          "instructions": "1. Preheat the oven to 375°F (190°C). \n2. Cut the tops off the bell peppers and remove the seeds and membranes. \n3. In a pan, sauté chopped onion and minced garlic in olive oil until softened. \n4. Add cooked rice, diced tomato, corn, black beans, cumin, chili powder, salt, and black pepper. \n5. Stir to combine and cook for a few minutes. \n6. Stuff the bell peppers with the rice mixture. \n7. Place the stuffed peppers in a baking dish and cover with foil. \n8. Bake for about 25-30 minutes, or until the peppers are tender. \n9. Serve hot."
          },
          {
            "id": 66,
          "title": "Vegetarian Pizza",
          "description": "Pizza topped with vegetables (bell peppers, mushrooms, olives) and mozzarella cheese.",
          "category": "Vegetarian",
          "img": "./img/66.png",
          "ingredients": [
          "Pizza dough",
          "Bell peppers",
          "Mushrooms",
          "Olives",
          "Tomato sauce",
          "Mozzarella cheese",
          "Olive oil",
          "Salt",
          "Black pepper"
          ],
          "instructions": "1. Roll out the pizza dough on a baking sheet. \n2. Spread tomato sauce over the dough. \n3. Top with sliced bell peppers, mushrooms, and olives. \n4. Sprinkle with shredded mozzarella cheese. \n5. Drizzle with olive oil and season with salt and black pepper. \n6. Bake in a preheated oven at 425°F (220°C) for about 15-20 minutes, or until the crust is golden brown and the cheese is melted and bubbly. \n7. Serve hot."
          },
          {
            "id": 67,
          "title": "Quinoa Salad",
          "description": "Healthy salad made with red and white quinoa, fresh vegetables, herbs, and olive oil.",
          "category": "Vegetarian",
          "img": "./img/67.png",
          "ingredients": [
          "Red quinoa",
          "White quinoa",
          "Tomato",
          "Cucumber",
          "Red onion",
          "Parsley",
          "Mint",
          "Lemon juice",
          "Olive oil",
          "Salt",
          "Black pepper"
          ],
          "instructions": "1. Cook red and white quinoa according to package instructions and let cool. \n2. In a large bowl, combine cooked quinoa, diced tomato, chopped cucumber, thinly sliced red onion, chopped parsley, and chopped mint. \n3. Drizzle with lemon juice and olive oil. \n4. Season with salt and black pepper. \n5. Toss to combine. \n6. Serve chilled."
          },
          {
            "id": 68,
          "title": "Vegetable Stir Fry",
          "description": "Quick and healthy stir fry made with mixed vegetables (broccoli, carrots, bell peppers) and soy sauce.",
          "category": "Vegetarian",
          "img": "./img/68.png",
          "ingredients": [
          "Broccoli",
          "Carrots",
          "Bell peppers",
          "Onion",
          "Garlic",
          "Ginger",
          "Soy sauce",
          "Sesame oil",
          "Olive oil",
          "Salt",
          "Black pepper"
          ],
          "instructions": "1. Heat olive oil in a large skillet or wok over high heat. \n2. Add chopped onion, minced garlic, and grated ginger. Stir fry for a minute. \n3. Add sliced carrots, broccoli florets, and sliced bell peppers. Stir fry for a few minutes until vegetables are tender-crisp. \n4. Pour in soy sauce and sesame oil. \n5. Season with salt and black pepper. \n6. Stir to combine. \n7. Serve hot over cooked rice or noodles."
          },
          {
            "id": 69,
          "title": "Spinach and Ricotta Stuffed Shells",
          "description": "Large pasta shells stuffed with spinach and ricotta cheese, baked in tomato sauce.",
          "category": "Vegetarian",
          "img": "./img/69.png",
          "ingredients": [
          "Large pasta shells",
          "Spinach",
          "Ricotta cheese",
          "Parmesan cheese",
          "Egg",
          "Garlic",
          "Tomato sauce",
          "Olive oil",
          "Salt",
          "Black pepper"
          ],
          "instructions": "1. Preheat the oven to 375°F (190°C). \n2. Cook the pasta shells according to package instructions, then drain and let cool. \n3. In a bowl, mix together chopped spinach, ricotta cheese, grated parmesan cheese, beaten egg, minced garlic, salt, and black pepper. \n4. Stuff each pasta shell with the spinach and ricotta mixture. \n5. Spread a layer of tomato sauce in a baking dish. \n6. Arrange the stuffed shells in the dish. \n7. Drizzle with olive oil and sprinkle with grated parmesan cheese. \n8. Bake for about 25-30 minutes, or until heated through and bubbly. \n9. Serve hot."
          },
    
          /* DESSERT */
    
          {
            "id": 70,
            "title": "Tiramisu",
            "description": "Classic Italian dessert made with layers of sponge cake soaked in coffee and mascarpone cheese.",
            "category": "Desserts",
            "img": "./img/70.png",
            "ingredients": [
              "Sponge cake",
              "Coffee",
              "Mascarpone cheese",
              "Egg",
              "Sugar",
              "Cocoa powder"
            ],
            "instructions": "1. Brew strong coffee and let it cool. \n2. In a bowl, whisk together mascarpone cheese, eggs, and sugar until smooth. \n3. Dip sponge cake in the coffee and layer in a dish. \n4. Spread a layer of mascarpone mixture over the sponge cake. \n5. Repeat the layers until all ingredients are used, finishing with a layer of mascarpone mixture on top. \n6. Dust with cocoa powder. \n7. Chill in the refrigerator for at least 4 hours before serving."
          },
          {
            "id": 71,
            "title": "Cannoli",
            "description": "Crispy pastry tubes filled with ricotta cheese and chocolate.",
            "category": "Desserts",
            "img": "./img/71.png",
            "ingredients": [
              "Pastry tubes",
              "Ricotta cheese",
              "Chocolate chips",
              "Powdered sugar"
            ],
            "instructions": "1. In a bowl, mix together ricotta cheese, chocolate chips, and powdered sugar until well combined. \n2. Fill the pastry tubes with the ricotta mixture. \n3. Dust with powdered sugar before serving."
          },
          {
            "id": 72,
            "title": "Gelato",
            "description": "Italian-style ice cream served in various flavors and varieties.",
            "category": "Desserts",
            "img": "./img/72.png",
            "ingredients": [
              "Milk",
              "Cream",
              "Sugar",
              "Flavoring (e.g., vanilla, chocolate, fruit)"
            ],
            "instructions": "1. In a saucepan, heat milk, cream, and sugar until sugar is dissolved. \n2. Stir in flavoring of choice (e.g., vanilla extract, cocoa powder, fruit puree). \n3. Pour the mixture into an ice cream maker and churn according to manufacturer's instructions. \n4. Transfer the churned gelato into a container and freeze until firm. \n5. Serve chilled."
          },
          {
            "id": 73,
            "title": "Panna Cotta",
            "description": "Creamy dessert with a jelly-like consistency, served with vanilla and fruit sauce.",
            "category": "Desserts",
            "img": "./img/73.png",
            "ingredients": [
              "Cream",
              "Sugar",
              "Gelatin",
              "Vanilla extract",
              "Fruit sauce (e.g., berry, mango)"
            ],
            "instructions": "1. In a saucepan, heat cream and sugar until sugar is dissolved. \n2. Stir in soaked gelatin until completely dissolved. \n3. Remove from heat and stir in vanilla extract. \n4. Pour the mixture into molds or ramekins. \n5. Chill in the refrigerator until set, about 4 hours or overnight. \n6. Serve with fruit sauce."
          },
          {
            "id": 74,
            "title": "Torta della Nonna",
            "description": "Grandma's cake: almond pastry base filled with vanilla custard and pine nuts.",
            "category": "Desserts",
            "img": "./img/74.png",
            "ingredients": [
              "Almond pastry dough",
              "Vanilla custard",
              "Pine nuts",
              "Powdered sugar"
            ],
            "instructions": "1. Preheat the oven to 350°F (175°C). \n2. Press almond pastry dough into a tart pan. \n3. Fill the tart with vanilla custard. \n4. Sprinkle pine nuts on top. \n5. Bake for about 25-30 minutes, or until the pastry is golden brown. \n6. Dust with powdered sugar before serving."
          },
          {
            "id": 75,
            "title": "Zeppola",
            "description": "Fried dough pastries served with powdered sugar.",
            "category": "Desserts",
            "img": "./img/75.png",
            "ingredients": [
              "Flour",
              "Yeast",
              "Sugar",
              "Egg",
              "Butter",
              "Powdered sugar (for dusting)"
            ],
            "instructions": "1. In a bowl, mix together flour, yeast, and sugar. \n2. Add beaten egg and melted butter to the flour mixture. \n3. Knead the dough until smooth and elastic. \n4. Cover and let the dough rise until doubled in size. \n5. Heat oil in a deep fryer or pot to 375°F (190°C). \n6. Drop spoonfuls of dough into the hot oil and fry until golden brown. \n7. Drain on paper towels. \n8. Dust with powdered sugar before serving."
          },
          {
            "id": 76,
            "title": "Amaretti Cookies",
            "description": "Delicious Italian cookies made with almond paste.",
            "category": "Desserts",
            "img": "./img/76.png",
            "ingredients": [
              "Almond paste",
              "Sugar",
              "Egg whites",
              "Almond extract",
              "Flour",
              "Powdered sugar (for dusting)"
            ],
            "instructions": "1. In a bowl, mix together almond paste and sugar until well combined. \n2. Beat in egg whites and almond extract until smooth. \n3. Gradually add flour and mix until a dough forms. \n4. Roll the dough into small balls and place them on a baking sheet. \n5. Flatten each ball slightly with your fingers. \n6. Bake in a preheated oven at 325°F (160°C) for about 15-20 minutes, or until golden brown. \n7. Let cool, then dust with powdered sugar before serving."
          },
          {
            "id": 77,
            "title": "Ricotta Cheesecake",
            "description": "Light and delicious cheesecake made with ricotta cheese.",
            "category": "Desserts",
            "img": "./img/77.png",
            "ingredients": [
              "Graham cracker crumbs",
              "Butter",
              "Ricotta cheese",
              "Cream cheese",
              "Sugar",
              "Eggs",
              "Vanilla extract",
              "Lemon zest"
            ],
            "instructions": "1. Preheat the oven to 325°F (160°C). \n2. Mix together graham cracker crumbs and melted butter, then press into the bottom of a springform pan. \n3. In a bowl, beat together ricotta cheese, cream cheese, and sugar until smooth. \n4. Beat in eggs, one at a time, then add vanilla extract and lemon zest. \n5. Pour the mixture over the crust in the pan. \n6. Bake for about 60-70 minutes, or until the center is set. \n7. Let cool in the pan, then refrigerate for at least 4 hours before serving."
          },
          {
            "id": 78,
            "title": "Zabaione",
            "description": "Creamy dessert made with wine and egg yolks.",
            "category": "Desserts",
            "img": "./img/78.png",
            "ingredients": [
              "Egg yolks",
              "Sugar",
              "Marsala wine"
            ],
            "instructions": "1. In a heatproof bowl, whisk together egg yolks and sugar until pale and thick. \n2. Gradually whisk in Marsala wine. \n3. Place the bowl over a pot of simmering water, making sure the bottom of the bowl doesn't touch the water. \n4. Continue whisking until the mixture thickens and triples in volume. \n5. Remove from heat and serve immediately."
          },
          {
            "id": 79,
            "title": "Crostata",
            "description": "Italian tart filled with jam or fruit.",
            "category": "Desserts",
            "img": "./img/79.png",
            "ingredients": [
              "Pastry dough",
              "Jam or fruit filling"
            ],
            "instructions": "1. Roll out the pastry dough and line a tart pan with it. \n2. Spread jam or fruit filling over the dough. \n3. If desired, make a lattice pattern with strips of dough over the filling. \n4. Bake in a preheated oven at 375°F (190°C) for about 25-30 minutes, or until the crust is golden brown. \n5. Let cool before serving."
          },
    
          /* GRANDMA RECIPES */
    
            {
              "id": 80,
            "title": "Pappa al Pomodoro",
            "description": "Classic Tuscan bread soup made with bread, tomatoes, olive oil, garlic, and fresh basil.",
            "category": "Grandma Recipes",
            "img": "./img/80.png",
            "ingredients": ["Bread", "Tomatoes", "Olive oil", "Garlic", "Fresh basil"],
            "instructions": "Bread is crumbled and cooked in a pot with tomatoes, olive oil, garlic, and fresh basil."
            },
            {
              "id": 81,
            "title": "Polenta e Osei",
            "description": "A dish made from polenta, which is made from cornmeal and water. It's often shaped like small birds, hence the name 'bird polenta'.",
            "category": "Grandma Recipes",
            "img": "./img/81.png",
            "ingredients": ["Cornmeal", "Water"],
            "instructions": "Cornmeal and water are mixed and cooked to make polenta. It's often shaped into small bird-like forms."
            },
            {
              "id": 82,
            "title": "Pesto alla Genovese",
            "description": "Delicious pesto sauce made with fresh basil, pine nuts, parmesan cheese, garlic, and olive oil. Typically served with pasta.",
            "category": "Grandma Recipes",
            "img": "./img/82.png",
            "ingredients": ["Fresh basil", "Pine nuts", "Parmesan cheese", "Garlic", "Olive oil"],
            "instructions": "Fresh basil, pine nuts, parmesan cheese, garlic, and olive oil are blended to make pesto sauce, which is then served with pasta."
            },
            {
              "id": 83,
            "title": "Caponata",
            "description": "Sweet and sour vegetable dish made with eggplant, celery, onion, tomatoes, olive oil, balsamic vinegar, and green olives.",
            "category": "Grandma Recipes",
            "img": "./img/83.png",
            "ingredients": ["Eggplant", "Celery", "Onion", "Tomatoes", "Olive oil", "Balsamic vinegar", "Green olives"],
            "instructions": "Eggplant, celery, onion, and tomatoes are cooked with olive oil, balsamic vinegar, and green olives to make caponata."
            },
            {
              "id": 84,
            "title": "Cicchetti Veneziani",
            "description": "Traditional Venetian style tapas. Typically includes a variety of seafood, cheese, and olives.",
            "category": "Grandma Recipes",
            "img": "./img/84.png",
            "ingredients": ["Seafood", "Cheese", "Olives"],
            "instructions": "A variety of seafood, cheese, and olives are served as small snacks, similar to tapas."
            },
            {
              "id": 85,
            "title": "Risotto al Nero di Seppia",
            "description": "Delicious risotto made with squid ink, giving it a black color. Popular in Venice and coastal regions.",
            "category": "Grandma Recipes",
            "img": "./img/85.png",
            "ingredients": ["Arborio rice", "Squid ink", "Seafood", "Tomatoes", "Garlic", "Onion", "Parmesan cheese"],
            "instructions": "Arborio rice is cooked with squid ink, seafood, tomatoes, garlic, onion, and parmesan cheese to make risotto al nero di seppia."
            },
            {
              "id": 86,
            "title": "Caciocavallo Podolico",
            "description": "The most delicious version of Italian caciocavallo cheese made from Podolico cow's milk. Found in Southern Italy.",
            "category": "Grandma Recipes",
            "img": "./img/86.png",
            "ingredients": ["Caciocavallo cheese"],
            "instructions": "Podolico cow's milk is used to make caciocavallo cheese, which is then aged to perfection."
            },
            {
              "id": 87,
            "title": "Cacciucco",
            "description": "Traditional Tuscan seafood soup. Made with fish, shrimp, squid, and mussels, flavored with plenty of garlic, tomatoes, and red pepper.",
            "category": "Grandma Recipes",
            "img": "./img/87.png",
            "ingredients": ["Fish", "Shrimp", "Squid", "Mussels", "Garlic", "Tomatoes", "Red pepper"],
            "instructions": "Fish, shrimp, squid, and mussels are cooked with garlic, tomatoes, and red pepper to make cacciucco."
            },
            {
              "id": 88,
            "title": "Focaccia Genovese",
            "description": "Genoa's famous bread made with thin dough topped with olive oil, salt, and fresh herbs.",
            "category": "Grandma Recipes",
            "img": "./img/88.png",
            "ingredients": ["Flour", "Water", "Yeast", "Olive oil", "Salt", "Fresh herbs"],
            "instructions": "Flour, water, and yeast are used to make thin dough, which is then topped with olive oil, salt, and fresh herbs to make focaccia genovese."
            },
            {
              "id": 89,
            "title": "Arancini di Riso",
            "description": "Sicilian popular snacks made of fried rice balls. It may contain meat, cheese, or vegetables.",
            "category": "Grandma Recipes",
            "img": "./img/89.png",
            "ingredients": ["Rice", "Meat", "Cheese", "Vegetables", "Breadcrumbs", "Egg"],
            "instructions": "Rice is cooked and formed into balls with meat, cheese, or vegetables. Then coated with breadcrumbs, dipped in beaten egg, and fried."
            },
            {
              "id": 90,
            "title": "Ragu alla Bolognese",
            "description": "Spicy pasta sauce made with minced meat cooked in a rich tomato sauce. An Italian classic.",
            "category": "Grandma Recipes",
            "img": "./img/90.png",
            "ingredients": ["Minced meat", "Tomatoes", "Onions", "Garlic", "Olive oil", "Herbs"],
            "instructions": "Minced meat is cooked with tomatoes, onions, garlic, olive oil, and herbs to make ragu alla bolognese."
            },
            {
              "id": 91,
            "title": "Polpette al Sugo",
            "description": "Italian meatballs cooked in tomato sauce and served with parmesan cheese.",
            "category": "Grandma Recipes",
            "img": "./img/91.png",
            "ingredients": ["Ground meat", "Breadcrumbs", "Parmesan cheese", "Egg", "Tomato sauce"],
            "instructions": "Ground meat is mixed with breadcrumbs, parmesan cheese, and egg. Formed into balls, cooked in tomato sauce, and served with parmesan cheese."
            },
            {
              "id": 92,
            "title": "Minestrone Soup",
            "description": "Traditional Italian soup made with vegetables, beans, and sometimes pasta. Typically made with tomato sauce and vegetables.",
            "category": "Grandma Recipes",
            "img": "./img/92.png",
            "ingredients": ["Vegetables", "Beans", "Pasta", "Tomato sauce", "Herbs"],
            "instructions": "Vegetables, beans, and pasta are cooked in tomato sauce with herbs to make minestrone soup."
            },
            {
              "id": 93,
            "title": "Parmigiana di Melanzane",
            "description": "Layered dish made with eggplant, tomato sauce, and mozzarella cheese.",
            "category": "Grandma Recipes",
            "img": "./img/93.png",
            "ingredients": ["Eggplant", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Breadcrumbs"],
            "instructions": "Eggplant is layered with tomato sauce, mozzarella cheese, and parmesan cheese. Baked until golden brown and bubbly."
            },
            {
              "id": 94,
            "title": "Pasta e Fagioli",
            "description": "A soup that perfectly combines pasta and beans. Typically made with tomato sauce and vegetables.",
            "category": "Grandma Recipes",
            "img": "./img/94.png",
            "ingredients": ["Pasta", "Beans", "Tomato sauce", "Vegetables", "Herbs"],
            "instructions": "Pasta and beans are cooked in tomato sauce with vegetables and herbs to make pasta e fagioli soup."
            },
            {
              "id": 95,
            "title": "Frittata",
            "description": "Italian omelette made with eggs and various vegetables or cheeses. A breakfast dish.",
            "category": "Grandma Recipes",
            "img": "./img/95.png",
            "ingredients": ["Eggs", "Vegetables", "Cheese", "Herbs"],
            "instructions": "Eggs are mixed with vegetables or cheeses, cooked until set, and served as frittata."
            },
            {
              "id": 96,
            "title": "Torta di Mele",
            "description": "Apple pie made with thinly sliced apples and flavored with cinnamon.",
            "category": "Grandma Recipes",
            "img": "./img/96.png",
            "ingredients": ["Apples", "Flour", "Sugar", "Butter", "Cinnamon"],
            "instructions": "Thinly sliced apples are arranged in a pie crust, flavored with cinnamon, and baked until golden brown."
            },
            {
              "id": 97,
            "title": "Pizzoccheri della Valtellina",
            "description": "Thin, coarse buckwheat flour pasta, served with potatoes, cabbage, cheese, and butter.",
            "category": "Grandma Recipes",
            "img": "./img/97.png",
            "ingredients": ["Buckwheat flour", "Potatoes", "Cabbage", "Cheese", "Butter"],
            "instructions": "Buckwheat flour pasta is cooked and served with potatoes, cabbage, cheese, and butter."
            },
            {
              "id": 98,
            "title": "Crostata di Ricotta e Marmellata",
            "description": "A tart filled with ricotta cheese and jam. Served as a sweet snack or light dessert.",
            "category": "Grandma Recipes",
            "img": "./img/98.png",
            "ingredients": ["Ricotta cheese", "Jam", "Flour", "Sugar", "Butter", "Egg"],
            "instructions": "Ricotta cheese and jam are filled in a tart crust made with flour, sugar, butter, and egg. Baked until golden brown."
            },
            {
              "id": 99,
            "title": "Ossobuco alla Milanese",
            "description": "Milanese style braised veal shanks, cooked with wine, tomatoes, and aromatics.",
            "category": "Grandma Recipes",
            "img": "./img/99.png",
            "ingredients": ["Veal shanks", "Wine", "Tomatoes", "Aromatics"],
            "instructions": "Veal shanks are braised with wine, tomatoes, and aromatics to make ossobuco alla milanese."
            },
            {
              "id": 100,
            "title": "Zuppa Inglese",
            "description": "Italian trifle made with sponge cake, custard, and fruit sauce.",
            "category": "Grandma Recipes",
            "img": "./img/100.png",
            "ingredients": ["Sponge cake", "Custard", "Fruit sauce"],
            "instructions": "Layers of sponge cake, custard, and fruit sauce are assembled to make zuppa inglese."
            },
            {
              "id" : 101,
            "title": "Carciofi alla Romana",
            "description": "Roman style artichokes cooked with fresh herbs and olive oil.",
            "category": "Grandma Recipes",
            "img": "./img/101.png",
            "ingredients": ["Artichokes", "Fresh herbs", "Olive oil"],
            "instructions": "Artichokes are cooked with fresh herbs and olive oil to make carciofi alla romana."
            },
            {
              "id" : 102,
            "title": "Tortellini in Brodo",
            "description": "Small filled fresh pasta served in chicken broth.",
            "category": "Grandma Recipes",
            "img": "./img/102.png",
            "ingredients": ["Tortellini pasta", "Chicken broth"],
            "instructions": "Small filled fresh pasta is cooked and served in chicken broth to make tortellini in brodo."
            },
            {
              "id": 103,
            "title": "Panettone",
            "description": "Traditional Italian Christmas sweet bread enriched with dried fruits and nuts.",
            "category": "Grandma Recipes",
            "img": "./img/103.png",
            "ingredients": ["Flour", "Yeast", "Eggs", "Butter", "Dried fruits", "Nuts"],
            "instructions": "Flour, yeast, eggs, and butter are mixed and enriched with dried fruits and nuts to make panettone."
            },
            {
              "id": 104,
            "title": "Biscotti di Prato",
            "description": "Italian almond cookies that pair perfectly with tea or coffee.",
            "category": "Grandma Recipes",
            "img": "./img/104.png",
            "ingredients": ["Almond paste", "Sugar", "Egg whites"],
            "instructions": "Almond paste, sugar, and egg whites are mixed and baked to make biscotti di prato."
            },
    
            /* REGIONAL SPECIALTIES */
    
              {
                "id": 105,
                "title": "Piedmontese Vitello Tonnato",
                "description": "Thinly sliced veal served with a creamy tuna and caper sauce, a classic dish from Piedmont.",
                "category": "Regional Specialties",
                "img": "./img/105.png",
                "ingredients": [
                  "Veal roast",
                  "Canned tuna",
                  "Anchovy fillets",
                  "Capers",
                  "Lemon juice",
                  "Olive oil",
                  "Mayonnaise"
                ],
                "instructions": "1. Cook the veal until tender, then let it cool and slice thinly. \n2. Blend canned tuna, anchovies, capers, lemon juice, olive oil, and mayonnaise to make the sauce. \n3. Arrange the veal slices on a serving platter. \n4. Pour the sauce over the veal. \n5. Chill in the refrigerator for a few hours before serving."
              },
              {
                "id": 106,
                "title": "Neapolitan Pizza Margherita",
                "category": "Regional Specialties",
                "img": "./img/106.png",
                "description": "A simple pizza topped with tomato sauce, mozzarella cheese, fresh basil leaves, and a drizzle of olive oil, originating from Naples.",
                "ingredients": [
                  "Pizza dough",
                  "Tomato sauce",
                  "Mozzarella cheese",
                  "Fresh basil leaves",
                  "Olive oil",
                  "Salt"
                ],
                "instructions": "1. Preheat your oven to its highest temperature. \n2. Roll out the pizza dough and place it on a baking sheet. \n3. Spread tomato sauce over the dough. \n4. Tear the mozzarella cheese into pieces and distribute evenly over the sauce. \n5. Arrange fresh basil leaves on top. \n6. Drizzle with olive oil and sprinkle with salt. \n7. Bake in the preheated oven until the crust is golden brown and crispy. \n8. Serve hot."
              },
              {
                "id": 107,
                "title": "Venetian Sarde in Saor",
                "description": "Sweet and sour sardines marinated in vinegar with onions, pine nuts, and raisins, a traditional Venetian appetizer.",
                "category": "Regional Specialties",
                "img": "./img/107.png",
                "ingredients": [
                  "Fresh sardines",
                  "White wine vinegar",
                  "Onions",
                  "Pine nuts",
                  "Raisins",
                  "Flour",
                  "Olive oil"
                ],
                "instructions": "1. Clean and fillet the sardines, then coat them lightly in flour. \n2. Fry the sardines in olive oil until golden brown, then set aside. \n3. In the same pan, sauté sliced onions until caramelized. \n4. Add white wine vinegar, pine nuts, and raisins to the pan. \n5. Simmer until the mixture thickens slightly. \n6. Layer the sardines in a dish and pour the vinegar mixture over them. \n7. Let marinate in the refrigerator for at least a few hours before serving."
              },
              {
                "id": 108,
                "title": "Ligurian Trofie al Pesto",
                "description": "Hand-rolled pasta served with a fresh basil pesto sauce, a Ligurian specialty.",
                "category": "Regional Specialties",
                "img": "./img/108.png",
                "ingredients": [
                  "Trofie pasta",
                  "Fresh basil leaves",
                  "Pine nuts",
                  "Parmesan cheese",
                  "Garlic",
                  "Olive oil",
                  "Salt"
                ],
                "instructions": "1. Cook the trofie pasta in boiling salted water until al dente. \n2. Meanwhile, make the pesto sauce by blending fresh basil leaves, pine nuts, Parmesan cheese, garlic, and olive oil until smooth. \n3. Drain the cooked pasta and toss it with the pesto sauce. \n4. Serve hot, optionally garnished with extra Parmesan cheese and a drizzle of olive oil."
              },
              {
                "id": 109,
                "title": "Lombardian Risotto alla Milanese",
                "description": "Creamy saffron-infused risotto made with Arborio rice, onions, white wine, and Parmesan cheese, a signature dish of Milan.",
                "category": "Regional Specialties",
                "img": "./img/109.png",
                "ingredients": [
                  "Arborio rice",
                  "Saffron threads",
                  "Onion",
                  "White wine",
                  "Parmesan cheese",
                  "Butter",
                  "Vegetable broth",
                  "Olive oil",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Heat vegetable broth in a saucepan and keep warm. \n2. Sauté finely chopped onion in olive oil until translucent. \n3. Add Arborio rice to the pan and toast until translucent around the edges. \n4. Deglaze with white wine and cook until absorbed. \n5. Ladle warm broth into the rice, one ladleful at a time, stirring frequently until absorbed. \n6. Continue adding broth and stirring until the rice is creamy and cooked al dente. \n7. Stir in saffron threads, grated Parmesan cheese, and butter. \n8. Season with salt and pepper to taste. \n9. Serve hot."
              },
              {
                "id": 110,
                "title": "Venetian Risi e Bisi",
                "description": "A creamy risotto made with fresh peas, pancetta, and Parmesan cheese, a traditional Venetian dish.",
                "category": "Regional Specialties",
                "img": "./img/110.png",
                "ingredients": [
                  "Arborio rice",
                  "Fresh peas",
                  "Pancetta",
                  "Onion",
                  "White wine",
                  "Chicken broth",
                  "Parmesan cheese",
                  "Butter",
                  "Olive oil",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Sauté finely chopped onion and diced pancetta in olive oil until softened. \n2. Add Arborio rice to the pan and toast until translucent around the edges. \n3. Deglaze with white wine and cook until absorbed. \n4. Ladle warm chicken broth into the rice, one ladleful at a time, stirring frequently until absorbed. \n5. When the rice is almost cooked, stir in fresh peas. \n6. Continue adding broth and stirring until the rice is creamy and cooked al dente. \n7. Stir in grated Parmesan cheese and butter. \n8. Season with salt and pepper to taste. \n9. Serve hot."
              },
              {
                "id": 111,
                "title": "Sardinian Malloreddus alla Campidanese",
                "description": "Small ridged pasta served with a rich tomato and sausage sauce, a traditional Sardinian dish.",
                "category": "Regional Specialties",
                "img": "./img/111.png",
                "ingredients": [
                  "Malloreddus pasta",
                  "Tomatoes",
                  "Italian sausage",
                  "Onion",
                  "Garlic",
                  "Red wine",
                  "Pecorino cheese",
                  "Olive oil",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Cook the malloreddus pasta in boiling salted water until al dente. \n2. Meanwhile, cook Italian sausage in olive oil until browned. \n3. Add chopped onion and minced garlic to the pan and sauté until softened. \n4. Deglaze with red wine and cook until reduced. \n5. Stir in chopped tomatoes and simmer until thickened. \n6. Toss the cooked pasta with the sausage sauce. \n7. Serve hot, optionally garnished with grated Pecorino cheese."
              },
              {
                "id": 112,
                "title": "Puglian Orecchiette alle Cime di Rapa",
                "description": "Ear-shaped pasta served with broccoli rabe, garlic, chili flakes, and olive oil, a classic dish from Puglia.",
                "category": "Regional Specialties",
                "img": "./img/112.png",
                "ingredients": [
                  "Orecchiette pasta",
                  "Broccoli rabe",
                  "Garlic",
                  "Chili flakes",
                  "Olive oil",
                  "Salt",
                  "Parmesan cheese"
                ],
                "instructions": "1. Cook the orecchiette pasta in boiling salted water until al dente. \n2. Meanwhile, blanch the broccoli rabe in boiling water, then drain and chop. \n3. Sauté minced garlic and chili flakes in olive oil until fragrant. \n4. Add the chopped broccoli rabe to the pan and cook until tender. \n5. Toss the cooked pasta with the broccoli rabe mixture. \n6. Serve hot, optionally garnished with grated Parmesan cheese."
              },
              {
                "id": 113,
                "title": "Tuscan Ribollita",
                "description": "A hearty vegetable soup made with cannellini beans, kale, and day-old bread, a Tuscan comfort food.",
                "category": "Regional Specialties",
                "img": "./img/113.png",
                "ingredients": [
                  "Cannellini beans",
                  "Kale",
                  "Carrots",
                  "Celery",
                  "Onions",
                  "Garlic",
                  "Tomatoes",
                  "Day-old bread",
                  "Vegetable broth",
                  "Olive oil",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Sauté chopped onions, carrots, and celery in olive oil until softened. \n2. Add minced garlic and cook until fragrant. \n3. Stir in chopped tomatoes and cook until they break down. \n4. Add chopped kale and cooked cannellini beans to the pot. \n5. Pour in vegetable broth and bring to a simmer. \n6. Tear day-old bread into chunks and stir into the soup. \n7. Simmer until the bread breaks down and the soup thickens. \n8. Season with salt and pepper to taste. \n9. Serve hot, optionally garnished with a drizzle of olive oil."
              },
              {
                "id": 114,
                "title": "Lombardian Risotto alla Milanese",
                "description": "Creamy saffron-infused risotto made with Arborio rice, onions, white wine, and Parmesan cheese, a signature dish of Milan.",
                "category": "Regional Specialties",
                "img": "./img/114.png",
                "ingredients": [
                  "Arborio rice",
                  "Saffron threads",
                  "Onion",
                  "White wine",
                  "Parmesan cheese",
                  "Butter",
                  "Vegetable broth",
                  "Olive oil",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Heat vegetable broth in a saucepan and keep warm. \n2. Sauté finely chopped onion in olive oil until translucent. \n3. Add Arborio rice to the pan and toast until translucent around the edges. \n4. Deglaze with white wine and cook until absorbed. \n5. Ladle warm broth into the rice, one ladleful at a time, stirring frequently until absorbed. \n6. Continue adding broth and stirring until the rice is creamy and cooked al dente. \n7. Stir in saffron threads, grated Parmesan cheese, and butter. \n8. Season with salt and pepper to taste. \n9. Serve hot."
              },
              {
                "id": 115,
                "title": "Sardinian Malloreddus alla Campidanese",
                "description": "Small ridged pasta served with a rich tomato and sausage sauce, a traditional Sardinian dish.",
                "category": "Regional Specialties",
                "img": "./img/115.png",
                "ingredients": [
                  "Malloreddus pasta",
                  "Tomatoes",
                  "Italian sausage",
                  "Onion",
                  "Garlic",
                  "Red wine",
                  "Pecorino cheese",
                  "Olive oil",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Cook the malloreddus pasta in boiling salted water until al dente. \n2. Meanwhile, cook Italian sausage in olive oil until browned. \n3. Add chopped onion and minced garlic to the pan and sauté until softened. \n4. Deglaze with red wine and cook until reduced. \n5. Stir in chopped tomatoes and simmer until thickened. \n6. Toss the cooked pasta with the sausage sauce. \n7. Serve hot, optionally garnished with grated Pecorino cheese."
              },
              {
                "id": 116,
                "title": "Calabrian Spaghetti alla 'Nduja",
                "description": "Spaghetti tossed in a spicy 'nduja sausage and tomato sauce, a fiery Calabrian specialty.",
                "category": "Regional Specialties",
                "img": "./img/116.png",
                "ingredients": [
                  "Spaghetti pasta",
                  "'Nduja sausage",
                  "Tomato passata",
                  "Garlic",
                  "Chili flakes",
                  "Olive oil",
                  "Basil leaves",
                  "Salt"
                ],
                "instructions": "1. Cook the spaghetti pasta in boiling salted water until al dente. \n2. Meanwhile, sauté minced garlic and chili flakes in olive oil until fragrant. \n3. Add 'nduja sausage to the pan and cook until it breaks down. \n4. Stir in tomato passata and simmer until thickened. \n5. Toss the cooked pasta with the spicy sauce. \n6. Tear fresh basil leaves and sprinkle over the pasta. \n7. Serve hot."
              },
              {
                "id": 117,
                "title": "Trentino-Alto Adige Canederli",
                "description": "Dumplings made with stale bread, eggs, milk, and speck, a traditional dish from the Trentino-Alto Adige region.",
                "category": "Regional Specialties", 
                "img": "./img/117.png",
                "ingredients": [
                  "Stale bread",
                  "Eggs",
                  "Milk",
                  "Speck",
                  "Parmesan cheese",
                  "Parsley",
                  "Butter",
                  "Flour",
                  "Salt",
                  "Pepper",
                  "Nutmeg"
                ],
                "instructions": "1. Soak stale bread in milk until softened, then squeeze out excess liquid. \n2. Mix the bread with beaten eggs, diced speck, grated Parmesan cheese, chopped parsley, flour, salt, pepper, and nutmeg. \n3. Form the mixture into small dumplings. \n4. Cook the dumplings in boiling salted water until they float to the surface. \n5. Drain the dumplings and serve hot, optionally topped with melted butter and grated Parmesan cheese."
              },
              {
                "id": 118,
                "title": "Emilian Tortellini in Brodo",
                "description": "Small pasta parcels filled with a mixture of meat, cheese, and herbs, served in a clear broth, a classic dish from Emilia-Romagna.",
                "category": "Regional Specialties",
                "img": "./img/118.png",
                "ingredients": [
                  "Tortellini pasta",
                  "Meat filling (pork, beef, prosciutto)",
                  "Parmesan cheese",
                  "Nutmeg",
                  "Chicken broth",
                  "Carrots",
                  "Celery",
                  "Onions",
                  "Parsley",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Prepare the meat filling by mixing ground pork, beef, prosciutto, grated Parmesan cheese, nutmeg, salt, and pepper. \n2. Roll out fresh pasta dough and cut into small circles. \n3. Place a small amount of filling in the center of each circle and fold in half to form a half-moon shape. \n4. Bring the two ends of the half-moon together and pinch to seal, forming tortellini. \n5. Cook the tortellini in boiling chicken broth until they float to the surface. \n6. Serve hot in bowls of chicken broth, optionally garnished with chopped carrots, celery, onions, and parsley."
              },
              {
                "id": 119,
                "title": "Venetian Risi e Bisi",
                "description": "A creamy risotto made with fresh peas, pancetta, and Parmesan cheese, a traditional Venetian dish.",
                "category": "Regional Specialties",
                "img": "./img/119.png",
                "ingredients": [
                  "Arborio rice",
                  "Fresh peas",
                  "Pancetta",
                  "Onion",
                  "White wine",
                  "Chicken broth",
                  "Parmesan cheese",
                  "Butter",
                  "Olive oil",
                  "Salt",
                  "Pepper"
                ],
                "instructions": "1. Sauté finely chopped onion and diced pancetta in olive oil until softened. \n2. Add Arborio rice to the pan and toast until translucent around the edges. \n3. Deglaze with white wine and cook until absorbed. \n4. Ladle warm chicken broth into the rice, one ladleful at a time, stirring frequently until absorbed. \n5. When the rice is almost cooked, stir in fresh peas. \n6. Continue adding broth and stirring until the rice is creamy and cooked al dente. \n7. Stir in grated Parmesan cheese and butter. \n8. Season with salt and pepper to taste. \n9. Serve hot."
              },
              {
                "id": 120,
                "title": "Sardinian Malloreddus with Sausage and Tomato Sauce",
                "description": "Small ridged pasta served with a hearty sausage and tomato sauce, a traditional Sardinian dish.",
                "category": "Regional Specialties",
                "img": "./img/120.png",
                "ingredients": [
                "Malloreddus pasta",
                "Italian sausage",
                "Onion",
                "Garlic",
                "Canned tomatoes",
                "Red wine",
                "Pecorino cheese",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cook the malloreddus pasta in boiling salted water until al dente. \n2. Meanwhile, cook Italian sausage in olive oil until browned. \n3. Add chopped onion and minced garlic to the pan and sauté until softened. \n4. Deglaze with red wine and cook until reduced. \n5. Stir in canned tomatoes and simmer until thickened. \n6. Toss the cooked pasta with the sausage sauce. \n7. Serve hot, optionally garnished with grated Pecorino cheese."
                },
                {
                  "id": 121,
                "title": "Napolitan Eggplant Parmigiana",
                "description": "Layers of fried eggplant slices, tomato sauce, and cheese baked to perfection, a classic Neapolitan dish.",
                "category": "Regional Specialties",
                "img": "./img/121.png",
                "ingredients": [
                "Eggplant",
                "Tomato sauce",
                "Mozzarella cheese",
                "Parmesan cheese",
                "Bread crumbs",
                "Eggs",
                "Garlic",
                "Basil",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Slice the eggplant and sprinkle with salt. Let sit for 30 minutes, then rinse and pat dry. \n2. Dip eggplant slices in beaten eggs, then coat with breadcrumbs. \n3. Fry the eggplant slices in olive oil until golden brown on both sides. \n4. Spread tomato sauce in the bottom of a baking dish, then layer fried eggplant slices, mozzarella cheese, and Parmesan cheese. \n5. Repeat the layers until all ingredients are used, ending with a layer of cheese on top. \n6. Bake in a preheated oven until the cheese is melted and bubbly. \n7. Garnish with fresh basil leaves before serving."
                },
                {
                  "id": 122,
                "title": "Piedmontese Vitello Tonnato",
                "description": "Thinly sliced veal served with a creamy tuna sauce, a specialty of the Piedmont region.",
                "category": "Regional Specialties",
                "img": "./img/122.png",
                "ingredients": [
                "Veal roast",
                "White wine",
                "Chicken broth",
                "Canned tuna",
                "Anchovy fillets",
                "Capers",
                "Mayonnaise",
                "Lemon juice",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Season the veal roast with salt and pepper, then brown it on all sides in a hot skillet. \n2. Deglaze the skillet with white wine, then add chicken broth and simmer until the veal is cooked through. \n3. Remove the veal from the broth and let it cool completely. \n4. In a blender, combine canned tuna, anchovy fillets, capers, mayonnaise, lemon juice, and olive oil. Blend until smooth and creamy. \n5. Thinly slice the cooled veal and arrange on a serving platter. \n6. Pour the tuna sauce over the veal slices. \n7. Chill in the refrigerator for at least 2 hours before serving."
                },
                {
                  "id": 123,
                "title": "Tuscan Ribollita",
                "description": "A hearty Tuscan soup made with bread, vegetables, beans, and kale, perfect for chilly evenings in Tuscany.",
                "category": "Regional Specialties",
                "img": "./img/123.png",
                "ingredients": [
                "Cannellini beans",
                "Kale",
                "Carrots",
                "Celery",
                "Onion",
                "Tomatoes",
                "Garlic",
                "Crusty bread",
                "Vegetable broth",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cook cannellini beans until tender, then drain and set aside. \n2. Sauté chopped onion, carrot, and celery in olive oil until softened. \n3. Add minced garlic and chopped tomatoes to the pot and cook until tomatoes break down. \n4. Stir in chopped kale and cooked cannellini beans. \n5. Pour in vegetable broth and bring to a simmer. \n6. Tear crusty bread into chunks and add to the soup. \n7. Simmer until the bread breaks down and the soup thickens. \n8. Season with salt and pepper to taste before serving."
                },
                {
                  "id": 124,
                "title": "Venetian Sarde in Saor",
                "description": "Sweet and sour sardines marinated with onions, vinegar, and raisins, a classic Venetian appetizer.",
                "category": "Regional Specialties",
                "img": "./img/124.png",
                "ingredients": [
                "Fresh sardines",
                "Onion",
                "White wine vinegar",
                "Sugar",
                "Raisins",
                "Flour",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Clean and fillet fresh sardines, then dredge in flour seasoned with salt and pepper. \n2. Fry the sardine fillets in olive oil until golden brown on both sides. \n3. In a separate pan, sauté thinly sliced onion until caramelized. \n4. Add white wine vinegar, sugar, and raisins to the pan and cook until the mixture thickens. \n5. Layer fried sardine fillets and onion mixture in a dish. \n6. Marinate in the refrigerator for at least 4 hours before serving."
                },
                {
                  "id": 125,
                "title": "Calabrian 'Nduja Pizza",
                "description": "'Nduja, a spreadable spicy salami, paired with creamy mozzarella cheese on a crispy pizza crust, a fiery Calabrian specialty.",
                "category": "Regional Specialties",
                "img": "./img/125.png",
                "ingredients": [
                "'Nduja",
                "Pizza dough",
                "Mozzarella cheese",
                "Tomato sauce",
                "Olive oil"
                ],
                "instructions": "1. Roll out pizza dough into a circle and spread tomato sauce over the surface. \n2. Crumble 'nduja over the tomato sauce, distributing evenly. \n3. Tear mozzarella cheese into small pieces and scatter over the pizza. \n4. Drizzle with olive oil and bake in a preheated oven until the crust is golden and crispy. \n5. Serve hot, optionally garnished with fresh basil leaves."
                },
                {
                  "id": 126,
                "title": "Ligurian Trofie al Pesto",
                "description": "Hand-rolled trofie pasta tossed with basil pesto, potatoes, and green beans, a Ligurian delight.",
                "category": "Regional Specialties",
                "img": "./img/126.png",
                "ingredients": [
                "Trofie pasta",
                "Basil pesto",
                "Potatoes",
                "Green beans",
                "Parmesan cheese",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cook trofie pasta in boiling salted water until al dente. \n2. Meanwhile, boil potatoes until tender, then cut into small cubes. \n3. Blanch green beans in boiling water, then drain and cut into bite-sized pieces. \n4. In a large bowl, toss cooked pasta with basil pesto, potatoes, and green beans. \n5. Drizzle with olive oil and season with salt and pepper. \n6. Serve hot, garnished with grated Parmesan cheese."
                },
                {
                  "id": 127,
                "title": "Sicilian Arancini",
                "description": "Deep-fried rice balls stuffed with meat sauce, peas, and mozzarella cheese, a Sicilian street food favorite.",
                "category": "Regional Specialties",
                "img": "./img/127.png",
                "ingredients": [
                "Arborio rice",
                "Meat sauce",
                "Mozzarella cheese",
                "Peas",
                "Eggs",
                "Breadcrumbs",
                "Parmesan cheese",
                "Vegetable oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cook Arborio rice until tender, then let it cool slightly. \n2. Stir in meat sauce, peas, and grated Parmesan cheese. \n3. Take a handful of rice mixture and flatten it in your hand. \n4. Place a cube of mozzarella cheese in the center and shape the rice into a ball around it. \n5. Dip the rice ball in beaten eggs, then coat with breadcrumbs. \n6. Deep fry in hot oil until golden brown and crispy. \n7. Drain on paper towels before serving hot."
                },
                {
                  "id": 128,
                "title": "Trentino-Alto Adige Speckknödel",
                "description": "Bread dumplings filled with speck (smoked ham) and served in a clear broth, a specialty of the Trentino-Alto Adige region.",
                "category": "Regional Specialties",
                "img": "./img/128.png",
                "ingredients": [
                "Bread",
                "Milk",
                "Speck (smoked ham)",
                "Onion",
                "Parsley",
                "Egg",
                "Butter",
                "Flour",
                "Vegetable broth",
                "Salt",
                "Pepper",
                "Nutmeg"
                ],
                "instructions": "1. Cube stale bread and soak in milk until softened. \n2. Sauté finely chopped onion and diced speck in butter until golden brown. \n3. Mix the bread with sautéed onion and speck, then add chopped parsley, beaten egg, and flour. Season with salt, pepper, and nutmeg. \n4. Form the mixture into small dumplings and poach them in simmering vegetable broth until cooked through. \n5. Serve the speckknödel hot in bowls of hot broth."
                },
                {
                  "id": 129,
                "title": "Lazio Supplì al Telefono",
                "description": "Deep-fried rice croquettes filled with mozzarella cheese, a popular street food snack in Rome.",
                "category": "Regional Specialties",
                "img": "./img/129.png",
                "ingredients": [
                "Arborio rice",
                "Tomato sauce",
                "Mozzarella cheese",
                "Parmesan cheese",
                "Egg",
                "Breadcrumbs",
                "Vegetable oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cook Arborio rice until tender, then let it cool slightly. \n2. Stir in tomato sauce, grated Parmesan cheese, salt, and pepper. \n3. Take a small portion of rice mixture and flatten it in your hand. \n4. Place a cube of mozzarella cheese in the center and shape the rice into a croquette around it. \n5. Dip the rice croquette in beaten egg, then coat with breadcrumbs. \n6. Deep fry in hot oil until golden brown and crispy. \n7. Serve the supplì hot, allowing the mozzarella cheese to stretch like telephone wires when pulled apart."
                },
                {
                  "id": 130,
                "title": "Emilia-Romagna Tortellini en Brodo",
                "description": "Homemade pasta parcels filled with meat and served in a clear broth, a classic dish from Emilia-Romagna.",
                "category": "Regional Specialties",
                "img": "./img/130.png",
                "ingredients": [
                "Tortellini pasta",
                "Chicken broth",
                "Ground pork",
                "Ground beef",
                "Parmesan cheese",
                "Egg",
                "Nutmeg",
                "Parsley",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Make the tortellini filling by combining ground pork, ground beef, grated Parmesan cheese, beaten egg, chopped parsley, salt, pepper, and a pinch of nutmeg. \n2. Roll out fresh pasta dough and cut into small squares. \n3. Place a small amount of filling in the center of each pasta square, then fold into a triangle and press the edges to seal. \n4. Bring chicken broth to a simmer and add the tortellini. Cook until the pasta is tender and the filling is cooked through. \n5. Serve the tortellini en brodo hot, garnished with grated Parmesan cheese and chopped parsley."
                },
                {
                  "id": 131,
                "title": "Campania Sfogliatella",
                "description": "Flaky pastry filled with sweet ricotta cheese and candied citrus peel, a signature dessert of Campania.",
                "category": "Regional Specialties",
                "img": "./img/131.png",
                "ingredients": [
                "Pastry dough",
                "Ricotta cheese",
                "Sugar",
                "Candied citrus peel",
                "Cinnamon",
                "Butter",
                "Powdered sugar"
                ],
                "instructions": "1. Roll out pastry dough into a thin sheet and brush with melted butter. \n2. Sprinkle the dough with a mixture of sugar, candied citrus peel, and cinnamon. \n3. Roll up the dough tightly, then slice into rounds. \n4. Press each round into a muffin tin, flattening and stretching the dough to form a shell. \n5. Fill each pastry shell with sweetened ricotta cheese mixture. \n6. Bake in a preheated oven until the pastry is golden brown and the filling is set. \n7. Dust with powdered sugar before serving warm."
                },
                {
                  "id": 132,
                "title": "Puglian Orecchiette with Broccoli Rabe",
                "description": "Ear-shaped pasta served with sautéed broccoli rabe, garlic, and chili flakes, a staple dish of Puglia.",
                "category": "Regional Specialties",
                "img": "./img/132.png",
                "ingredients": [
                "Orecchiette pasta",
                "Broccoli rabe",
                "Garlic",
                "Chili flakes",
                "Anchovy fillets",
                "Olive oil",
                "Parmesan cheese",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cook orecchiette pasta in boiling salted water until al dente. \n2. Meanwhile, blanch broccoli rabe in boiling water, then drain and set aside. \n3. Sauté minced garlic and anchovy fillets in olive oil until fragrant. \n4. Add broccoli rabe and chili flakes to the pan and cook until tender. \n5. Toss the cooked pasta with the broccoli rabe mixture, adding olive oil as needed. \n6. Serve hot, garnished with grated Parmesan cheese and black pepper."
                },
                {
                  "id": 133,
                "title": "Abruzzese Arrosticini",
                "description": "Skewers of tender lamb meat seasoned with olive oil, rosemary, and garlic, a specialty of Abruzzo.",
                "category": "Regional Specialties",
                "img": "./img/133.png",
                "ingredients": [
                "Lamb meat",
                "Rosemary",
                "Garlic",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cut lamb meat into small cubes and thread onto skewers. \n2. Season the lamb skewers with chopped rosemary, minced garlic, olive oil, salt, and pepper. \n3. Let the skewers marinate for at least 30 minutes. \n4. Grill the arrosticini over high heat until browned and cooked through. \n5. Serve hot, optionally garnished with fresh rosemary sprigs."
                },
                {
                  "id": 134,
                "title": "Friuli-Venezia Giulia Jota",
                "description": "A hearty stew made with sauerkraut, beans, potatoes, and smoked meats, a traditional dish of Friuli-Venezia Giulia.",
                "category": "Regional Specialties",
                "img": "./img/134.png",
                "ingredients": [
                "Sauerkraut",
                "Beans",
                "Potatoes",
                "Smoked pork ribs",
                "Smoked sausage",
                "Onion",
                "Garlic",
                "Bay leaves",
                "Red wine vinegar",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Sauté chopped onion and minced garlic in olive oil until softened. \n2. Add diced smoked pork ribs and smoked sausage to the pot and brown on all sides. \n3. Stir in sauerkraut, drained beans, diced potatoes, bay leaves, and red wine vinegar. \n4. Add enough water to cover the ingredients and bring to a simmer. \n5. Cook until the potatoes are tender and the flavors have melded together. \n6. Season with salt and pepper to taste before serving hot."
                },
                {
                  "id": 135,
                "title": "Calabrese Spaghetti alla Calabrese",
                "description": "Spaghetti tossed with spicy 'nduja, cherry tomatoes, and pecorino cheese, a fiery Calabrian pasta dish.",
                "category": "Regional Specialties",
                "img": "./img/135.png",
                "ingredients": [
                "Spaghetti",
                "'Nduja",
                "Cherry tomatoes",
                "Garlic",
                "Pecorino cheese",
                "Olive oil",
                "Basil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Cook spaghetti in boiling salted water until al dente. \n2. Meanwhile, sauté minced garlic in olive oil until fragrant. \n3. Add 'nduja to the pan and cook until melted and spicy. \n4. Stir in halved cherry tomatoes and cook until softened. \n5. Toss the cooked spaghetti with the 'nduja sauce, adding pasta water as needed to loosen. \n6. Serve hot, garnished with grated pecorino cheese and torn basil leaves."
                },
                {
                  "id": 136,
                "title": "Marche Coniglio in Porchetta",
                "description": "Rabbit marinated with garlic, rosemary, and fennel seeds, then roasted until tender, a specialty of Marche.",
                "category": "Regional Specialties",
                "img": "./img/136.png",
                "ingredients": [
                "Rabbit",
                "Garlic",
                "Rosemary",
                "Fennel seeds",
                "Lemon zest",
                "White wine",
                "Olive oil",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Combine minced garlic, chopped rosemary, crushed fennel seeds, lemon zest, white wine, and olive oil to make the marinade. \n2. Rub the marinade all over the rabbit and let it marinate for at least 2 hours, preferably overnight. \n3. Preheat the oven to 350°F (175°C). \n4. Place the marinated rabbit in a roasting pan and season with salt and pepper. \n5. Roast in the preheated oven until the rabbit is cooked through and golden brown. \n6. Serve hot, garnished with fresh rosemary sprigs and lemon wedges."
                },
                {
                  "id": 137,
                "title": "Sicilian Cassata",
                "description": "A festive cake made with sponge cake, sweetened ricotta cheese, candied fruit, and marzipan, a traditional Sicilian dessert.",
                "category": "Regional Specialties",
                "img": "./img/137.png",
                "ingredients": [
                "Sponge cake",
                "Ricotta cheese",
                "Sugar",
                "Candied fruit",
                "Marzipan",
                "Dark chocolate",
                "Pistachios",
                "Almonds"
                ],
                "instructions": "1. Slice the sponge cake horizontally into layers. \n2. Mix ricotta cheese with sugar until smooth, then spread over the sponge cake layers. \n3. Sprinkle candied fruit over the ricotta cheese layer. \n4. Stack the cake layers on top of each other, then wrap in marzipan. \n5. Decorate the top of the cassata with dark chocolate, pistachios, and almonds. \n6. Chill in the refrigerator for at least 4 hours before serving."
                },
                {
                  "id": 138,
                "title": "Piedmontese Bagna Cauda",
                "description": "A warm dip made with anchovies, garlic, olive oil, and butter, served with raw vegetables, a traditional dish of Piedmont.",
                "category": "Regional Specialties",
                "img": "./img/138.png",
                "ingredients": [
                "Anchovy fillets",
                "Garlic",
                "Olive oil",
                "Butter",
                "Assorted raw vegetables (such as carrots, celery, fennel, and bell peppers)"
                ],
                "instructions": "1. Heat olive oil and butter in a pan over low heat. \n2. Add minced garlic and anchovy fillets to the pan, stirring until the anchovies dissolve. \n3. Continue cooking until the garlic is soft and fragrant. \n4. Serve the warm bagna cauda in a fondue pot or bowl, surrounded by assorted raw vegetables for dipping."
                },
                {
                  "id": 139,
                "title": "Venetian Fegato alla Veneziana",
                "description": "Thinly sliced calf's liver cooked with onions, butter, and white wine, a classic Venetian dish.",
                "category": "Regional Specialties",
                "img": "./img/139.png",
                "ingredients": [
                "Calf's liver",
                "Onion",
                "Butter",
                "White wine",
                "Olive oil",
                "Flour",
                "Salt",
                "Pepper"
                ],
                "instructions": "1. Slice the calf's liver thinly and dredge in flour seasoned with salt and pepper. \n2. Sauté sliced onion in olive oil and butter until caramelized. \n3. Push the onions to the side of the pan and add the liver slices. \n4. Cook the liver until browned on both sides but still pink in the middle. \n5. Deglaze the pan with white wine and simmer until the sauce thickens. \n6. Serve hot, spooning the onions and sauce over the liver slices."
                },
    
                /* SLOW FOOD CLASSICS */
    
                {
                  "id": 140,
                    "title": "Tuscan Ribollita",
                    "description": "A hearty vegetable and bread soup made with cannellini beans, kale, and stale bread, simmered slowly to develop rich flavors, a classic Tuscan dish.",
                    "category": "Slow Food Classics",
                    "img": "./img/140.png",
                    "ingredients": [
                      "Cannellini beans",
                      "Kale",
                      "Stale bread",
                      "Carrots",
                      "Celery",
                      "Onion",
                      "Garlic",
                      "Tomatoes",
                      "Vegetable broth",
                      "Parmesan rind",
                      "Rosemary",
                      "Thyme",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook cannellini beans until tender, then drain and set aside. \n2. Sauté chopped onion, garlic, carrots, and celery in olive oil until softened. \n3. Add chopped tomatoes, kale, cooked beans, and vegetable broth to the pot. \n4. Simmer the soup over low heat, adding a Parmesan rind and herbs for flavor. \n5. Tear stale bread into chunks and add to the soup, stirring to thicken. \n6. Season with salt and pepper to taste before serving warm."
                  },
                  {
                    "id": 141,
                    "title": "Piedmontese Bollito Misto",
                    "description": "A slow-cooked mixed meat dish featuring various cuts simmered in broth until tender, a traditional dish of Piedmont.",
                    "category": "Slow Food Classics",
                    "img": "./img/141.png",
                    "ingredients": [
                      "Beef brisket",
                      "Veal shank",
                      "Chicken",
                      "Pork ribs",
                      "Cotechino sausage",
                      "Carrots",
                      "Onion",
                      "Celery",
                      "Garlic",
                      "Bay leaves",
                      "Cloves",
                      "Juniper berries",
                      "Black peppercorns",
                      "Salt"
                    ],
                    "instructions": "1. Place the meats, vegetables, and spices in a large pot and cover with water. \n2. Bring to a boil, then reduce the heat and simmer gently until the meats are cooked through and tender. \n3. Remove the meats from the broth and slice thinly. \n4. Serve hot with traditional accompaniments such as salsa verde, mostarda, and horseradish sauce."
                  },
                  {
                    "id": 142,
                    "title": "Ligurian Trofie al Pesto",
                    "description": "Hand-rolled pasta served with a classic Ligurian pesto sauce made with basil, pine nuts, garlic, and Parmesan cheese, a staple of the Italian Riviera.",
                    "category": "Slow Food Classics",
                    "img": "./img/142.png",
                    "ingredients": [
                      "Trofie pasta",
                      "Fresh basil leaves",
                      "Pine nuts",
                      "Garlic",
                      "Parmesan cheese",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook trofie pasta in boiling salted water until al dente. \n2. Meanwhile, blend fresh basil leaves, pine nuts, garlic, and Parmesan cheese in a food processor until smooth. \n3. With the motor running, drizzle in olive oil until the pesto reaches a creamy consistency. \n4. Drain the cooked pasta and toss with the pesto sauce until well coated. \n5. Season with salt and pepper to taste before serving hot."
                  },
                  {
                    "id": 143,
                    "title": "Emilian Tortellini in Brodo",
                    "description": "Small pasta parcels filled with meat and cheese, served in a clear broth, a beloved dish from Emilia-Romagna.",
                    "category": "Slow Food Classics",
                    "img": "./img/143.png",
                    "ingredients": [
                      "Tortellini pasta",
                      "Veal",
                      "Pork",
                      "Mortadella",
                      "Parmesan cheese",
                      "Nutmeg",
                      "Egg",
                      "Chicken broth",
                      "Carrots",
                      "Celery",
                      "Onion",
                      "Garlic",
                      "Bay leaf",
                      "Parsley",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Prepare the filling by combining minced veal, pork, mortadella, Parmesan cheese, nutmeg, and egg. \n2. Use the filling to stuff small squares of fresh pasta dough, then fold into tortellini shapes. \n3. Bring chicken broth to a simmer with carrots, celery, onion, garlic, bay leaf, and parsley. \n4. Add the tortellini to the broth and cook until they float to the surface. \n5. Serve hot in bowls with a ladleful of broth."
                  },
                  {
                    "id": 144,
                    "title": "Sardinian Malloreddus alla Campidanese",
                    "description": "Small ridged pasta served with a rich tomato-based sauce featuring sausage, saffron, and Pecorino cheese, a traditional dish from Sardinia.",
                    "category": "Slow Food Classics",
                    "img": "./img/144.png",
                    "ingredients": [
                      "Malloreddus pasta",
                      "Sausage",
                      "Onion",
                      "Garlic",
                      "Tomatoes",
                      "Saffron",
                      "Pecorino cheese",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook malloreddus pasta in boiling salted water until tender. \n2. Meanwhile, sauté sliced sausage, onion, and garlic in olive oil until browned. \n3. Add chopped tomatoes and saffron threads to the pan, simmering until the sauce thickens. \n4. Toss the cooked pasta with the sauce and grated Pecorino cheese until well combined. \n5. Season with salt and pepper to taste before serving hot."
                  },
                  {
                    "id": 145,
                    "title": "Calabrian Spaghetti alla Norma",
                    "description": "Spaghetti tossed with a flavorful sauce made from tomatoes, eggplant, garlic, basil, and ricotta salata cheese, a Sicilian classic named after the opera 'Norma'.",
                    "category": "Slow Food Classics",
                    "img": "./img/145.png",
                    "ingredients": [
                      "Spaghetti",
                      "Eggplant",
                      "Tomatoes",
                      "Garlic",
                      "Basil",
                      "Ricotta salata cheese",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook spaghetti in boiling salted water until al dente. \n2. Meanwhile, sauté cubed eggplant in olive oil until golden brown and tender. \n3. Add crushed tomatoes, minced garlic, and torn basil leaves to the pan, simmering until the sauce is thickened. \n4. Toss the cooked pasta with the sauce and grated ricotta salata cheese until well coated. \n5. Season with salt and pepper to taste before serving hot."
                  },
                  {
                    "id": 146,
                    "title": "Roman Carciofi alla Romana",
                    "description": "Artichokes braised in olive oil with garlic, mint, and lemon, a classic Roman dish.",
                    "category": "Slow Food Classics",
                    "img": "./img/146.png",
                    "ingredients": [
                      "Artichokes",
                      "Olive oil",
                      "Garlic",
                      "Mint",
                      "Lemon",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Trim the artichokes, removing tough outer leaves and cutting off the top. \n2. Sauté sliced garlic in olive oil until fragrant, then add the artichokes to the pan. \n3. Add chopped mint, lemon juice, and water to the pan, covering and simmering until the artichokes are tender. \n4. Serve hot or at room temperature, drizzled with olive oil and seasoned with salt and pepper."
                  },
                  {
                    "id": 147,
                    "title": "Sicilian Arancini di Riso",
                    "description": "Fried rice balls stuffed with a savory filling, such as ragu sauce, peas, and mozzarella cheese, a popular street food from Sicily.",
                    "category": "Slow Food Classics",
                    "img": "./img/147.png",
                    "ingredients": [
                      "Arborio rice",
                      "Ragu sauce",
                      "Peas",
                      "Mozzarella cheese",
                      "Eggs",
                      "Breadcrumbs",
                      "Vegetable oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook arborio rice until tender, then let cool slightly. \n2. Mix the cooked rice with ragu sauce, peas, and cubed mozzarella cheese. \n3. Shape the rice mixture into balls, enclosing a cube of cheese in the center. \n4. Dip the rice balls in beaten egg, then coat with breadcrumbs. \n5. Fry the arancini in hot oil until golden brown and crispy. \n6. Serve hot with marinara sauce for dipping."
                  },
                  {
                    "id": 148,
                    "title": "Piedmontese Brasato al Barolo",
                    "description": "Beef braised in Barolo wine with onions, carrots, celery, and herbs, a classic dish from Piedmont.",
                    "category": "Slow Food Classics",
                    "img": "./img/148.png",
                    "ingredients": [
                      "Beef chuck roast",
                      "Barolo wine",
                      "Onion",
                      "Carrots",
                      "Celery",
                      "Garlic",
                      "Tomato paste",
                      "Beef broth",
                      "Bay leaves",
                      "Rosemary",
                      "Thyme",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Sear the beef chuck roast in olive oil until browned on all sides. \n2. Remove the beef from the pan and sauté chopped onion, carrots, celery, and garlic until softened. \n3. Return the beef to the pan and add tomato paste, Barolo wine, beef broth, bay leaves, rosemary, and thyme. \n4. Cover and simmer gently until the beef is tender and the sauce is thickened. \n5. Serve hot, slicing the beef and spooning the sauce over the top."
                  },
                  {
                    "id": 149,
                    "title": "Venetian Risi e Bisi",
                    "description": "A creamy risotto-style dish made with fresh peas, pancetta, and Parmesan cheese, a classic Venetian recipe.",
                    "category": "Slow Food Classics",
                    "img": "./img/149.png",
                    "ingredients": [
                      "Arborio rice",
                      "Fresh peas",
                      "Pancetta",
                      "Onion",
                      "Garlic",
                      "Parmesan cheese",
                      "Butter",
                      "Vegetable broth",
                      "White wine",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Sauté diced pancetta, onion, and garlic in butter until golden brown. \n2. Add Arborio rice to the pan and toast until lightly golden. \n3. Deglaze the pan with white wine, then add fresh peas and vegetable broth. \n4. Simmer the risotto, stirring constantly, until the rice is tender and creamy. \n5. Stir in grated Parmesan cheese and season with salt and pepper to taste. \n6. Serve hot, garnished with additional Parmesan cheese."
                  },
                  {
                    "id": 150,
                    "title": "Lazio Spaghetti alla Carbonara",
                    "description": "Spaghetti tossed with a creamy sauce made from eggs, Pecorino Romano cheese, pancetta, and black pepper, a classic Roman pasta dish.",
                    "category": "Slow Food Classics",
                    "img": "./img/150.png",
                    "ingredients": [
                      "Spaghetti",
                      "Pancetta",
                      "Eggs",
                      "Pecorino Romano cheese",
                      "Black pepper",
                      "Olive oil",
                      "Salt"
                    ],
                    "instructions": "1. Cook spaghetti in boiling salted water until al dente. \n2. Meanwhile, sauté diced pancetta in olive oil until crispy. \n3. In a bowl, whisk together eggs, grated Pecorino Romano cheese, and black pepper. \n4. Drain the cooked pasta, reserving some of the cooking water. \n5. Toss the hot pasta with the egg mixture, adding a splash of pasta water to create a creamy sauce. \n6. Serve immediately, garnished with additional cheese and pepper."
                  },
                  {
                    "id": 151,
                    "title": "Umbrian Strangozzi al Tartufo",
                    "description": "Hand-rolled pasta served with a luxurious black truffle sauce, a specialty of Umbria.",
                    "category": "Slow Food Classics",
                    "img": "./img/151.png",
                    "ingredients": [
                      "Strangozzi pasta",
                      "Black truffle",
                      "Garlic",
                      "Heavy cream",
                      "Parmesan cheese",
                      "Butter",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook strangozzi pasta in boiling salted water until al dente. \n2. Meanwhile, sauté minced garlic in olive oil until fragrant. \n3. Add sliced black truffle to the pan, sautéing briefly to release the aroma. \n4. Pour in heavy cream and simmer until slightly thickened. \n5. Toss the cooked pasta with the truffle cream sauce and grated Parmesan cheese. \n6. Season with salt and pepper to taste before serving hot."
                  },
                  {
                    "id": 152,
                    "title": "Puglian Orecchiette con le Cime di Rapa",
                    "description": "Ear-shaped pasta served with sautéed broccoli rabe, garlic, chili flakes, and Pecorino cheese, a traditional dish from Puglia.",
                    "category": "Slow Food Classics",
                    "img": "./img/152.png",
                    "ingredients": [
                      "Orecchiette pasta",
                      "Broccoli rabe",
                      "Garlic",
                      "Chili flakes",
                      "Pecorino cheese",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook orecchiette pasta in boiling salted water until al dente. \n2. Meanwhile, blanch broccoli rabe in boiling water, then sauté with minced garlic and chili flakes in olive oil. \n3. Toss the cooked pasta with the broccoli rabe mixture, adding grated Pecorino cheese. \n4. Season with salt and pepper to taste before serving hot."
                  },
                  {
                    "id": 153,
                    "title": "Calabrian Peperonata",
                    "description": "A slow-cooked stew of bell peppers, onions, tomatoes, and olive oil, flavored with basil and vinegar, a classic dish from Calabria.",
                    "category": "Slow Food Classics",
                    "img": "./img/153.png",
                    "ingredients": [
                      "Bell peppers",
                      "Onion",
                      "Tomatoes",
                      "Garlic",
                      "Basil",
                      "Red wine vinegar",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Sauté sliced bell peppers and onion in olive oil until softened. \n2. Add chopped tomatoes, minced garlic, and torn basil leaves to the pan, simmering until the vegetables are tender. \n3. Season the stew with red wine vinegar, salt, and pepper to taste. \n4. Serve hot or at room temperature, drizzled with olive oil."
                  },
                  {
                    "id": 154,
                    "title": "Sicilian Pasta con le Sarde",
                    "description": "Pasta tossed with sardines, fennel, raisins, pine nuts, saffron, and breadcrumbs, a traditional dish from Sicily.",
                    "category": "Slow Food Classics",
                    "img": "./img/154.png",
                    "ingredients": [
                      "Bucatini pasta",
                      "Sardines",
                      "Fennel",
                      "Raisins",
                      "Pine nuts",
                      "Saffron",
                      "Breadcrumbs",
                      "Onion",
                      "Garlic",
                      "Anchovy fillets",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Cook bucatini pasta in boiling salted water until al dente. \n2. Meanwhile, sauté sliced fennel, minced garlic, and chopped onion in olive oil until softened. \n3. Add chopped sardines, anchovy fillets, raisins, pine nuts, and saffron to the pan, simmering until the flavors meld. \n4. Toss the cooked pasta with the sauce, adding breadcrumbs to thicken. \n5. Season with salt and pepper to taste before serving hot."
                  },
                  {
                    "id": 155,
                    "title": "Venetian Risotto al Nero di Seppia",
                    "description": "A rich risotto made with squid ink, seafood broth, and shellfish, a classic dish from Venice.",
                    "category": "Slow Food Classics",
                    "img": "./img/155.png",
                    "ingredients": [
                      "Arborio rice",
                      "Squid ink",
                      "Seafood broth",
                      "Squid",
                      "Mussels",
                      "Clams",
                      "Shrimp",
                      "Onion",
                      "Garlic",
                      "White wine",
                      "Parsley",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Sauté minced onion and garlic in olive oil until translucent. \n2. Add Arborio rice to the pan and toast until lightly golden. \n3. Deglaze the pan with white wine, then add squid ink and seafood broth, simmering until the rice is cooked through. \n4. Stir in cooked squid, mussels, clams, and shrimp, allowing the flavors to meld. \n5. Season with salt and pepper to taste, garnishing with chopped parsley before serving hot."
                  },
    
                  /* TIME-HONORED CLASSICS */
    
                  {
                    "id": 156,
                    "title": "Parmigiana di Melanzane",
                    "description": "Layers of fried eggplant slices, tomato sauce, and mozzarella cheese, baked to perfection.",
                    "category": "Time-Honored Classics",
                    "img": "./img/156.png",
                    "ingredients": [
                      "Eggplant",
                      "Tomato sauce",
                      "Mozzarella cheese",
                      "Parmesan cheese",
                      "Basil leaves",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Slice the eggplant and sprinkle with salt. Let it sit for 30 minutes, then rinse and pat dry.\n2. Fry the eggplant slices until golden brown.\n3. Preheat the oven to 375°F (190°C). \n4. In a baking dish, layer the fried eggplant slices with tomato sauce, mozzarella cheese, parmesan cheese, and basil leaves.\n5. Repeat the layers until all ingredients are used, ending with a layer of cheese on top.\n6. Bake for 25-30 minutes, or until the cheese is melted and bubbly.\n7. Let it cool slightly before serving."
                  },
                  {
                    "id": 157,
                    "title": "Pappa al Pomodoro",
                    "description": "A classic Tuscan bread and tomato soup, enriched with olive oil, garlic, and basil.",
                    "category": "Time-Honored Classics",
                    "img": "./img/157.png",
                    "ingredients": [
                      "Stale bread",
                      "Tomatoes",
                      "Olive oil",
                      "Garlic",
                      "Basil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Heat olive oil in a large pot over medium heat. Add minced garlic and sauté until fragrant.\n2. Add chopped tomatoes and cook until they break down and release their juices.\n3. Tear the stale bread into small pieces and add them to the pot. Stir to combine.\n4. Add water or vegetable broth to reach the desired consistency.\n5. Season with salt and pepper, then simmer for about 20-25 minutes.\n6. Stir in chopped basil and cook for another 5 minutes.\n7. Serve hot, drizzled with extra olive oil and garnished with fresh basil leaves."
                  },
                  {
                    "id": 158,
                    "title": "Osso Buco alla Milanese",
                    "description": "A traditional Milanese dish featuring braised veal shanks cooked with white wine, broth, tomatoes, and aromatics.",
                    "category": "Time-Honored Classics",
                    "img": "./img/158.png",
                    "ingredients": [
                      "Veal shanks",
                      "Flour",
                      "Butter",
                      "Olive oil",
                      "Onion",
                      "Carrot",
                      "Celery",
                      "Garlic",
                      "Tomatoes",
                      "White wine",
                      "Beef or chicken broth",
                      "Bay leaf",
                      "Thyme",
                      "Gremolata (optional, for serving)"
                    ],
                    "instructions": "1. Season the veal shanks with salt and pepper, then dredge them in flour.\n2. In a large skillet or Dutch oven, heat butter and olive oil over medium-high heat.\n3. Add the veal shanks and brown them on all sides. Remove and set aside.\n4. In the same pot, add diced onion, carrot, and celery. Sauté until softened.\n5. Stir in minced garlic and cook until fragrant.\n6. Add crushed tomatoes, white wine, broth, bay leaf, and thyme. Bring to a simmer.\n7. Return the veal shanks to the pot, cover, and cook over low heat for about 2 hours, or until the meat is tender.\n8. Serve hot, garnished with gremolata if desired."
                  },
                  {
                    "id": 159,
                    "title": "Spaghetti Carbonara",
                    "description": "A classic Roman pasta dish made with spaghetti, eggs, pancetta, pecorino cheese, and black pepper.",
                    "category": "Time-Honored Classics",
                    "img": "./img/159.png",
                    "ingredients": [
                      "Spaghetti",
                      "Eggs",
                      "Pancetta or guanciale",
                      "Pecorino Romano cheese",
                      "Black pepper",
                      "Salt"
                    ],
                    "instructions": "1. Cook spaghetti in boiling salted water until al dente.\n2. Meanwhile, in a skillet, cook diced pancetta until crispy. Remove from heat and set aside.\n3. In a bowl, whisk together eggs, grated pecorino cheese, and black pepper.\n4. Drain the cooked spaghetti, reserving some of the pasta water.\n5. Immediately toss the hot spaghetti with the egg and cheese mixture, allowing the heat from the pasta to cook the eggs and melt the cheese.\n6. Add the cooked pancetta and toss to combine. If the sauce seems too thick, add a splash of pasta water.\n7. Season with salt and extra black pepper if desired.\n8. Serve hot, garnished with additional grated pecorino cheese."
                  },
                  {
                    "id": 160,
                    "title": "Panzanella",
                    "description": "A traditional Tuscan salad made with stale bread, tomatoes, cucumbers, onions, basil, and a tangy vinaigrette.",
                    "category": "Time-Honored Classics",
                    "img": "./img/160.png",
                    "ingredients": [
                      "Stale bread",
                      "Tomatoes",
                      "Cucumber",
                      "Red onion",
                      "Basil",
                      "Red wine vinegar",
                      "Extra-virgin olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. Tear the stale bread into bite-sized pieces and place them in a large bowl.\n2. Chop the tomatoes, cucumber, and red onion into similar-sized pieces and add them to the bowl.\n3. Tear fresh basil leaves and add them to the salad.\n4. In a small bowl, whisk together red wine vinegar, olive oil, salt, and pepper to make the vinaigrette.\n5. Pour the vinaigrette over the salad and toss gently to combine.\n6. Let the salad sit for about 30 minutes to allow the flavors to meld.\n7. Serve at room temperature, garnished with additional basil leaves if desired."
                  },
                  {
                    "id": 161,
                    "title": "Ragu alla Bolognese",
                    "description": "A rich and hearty meat sauce made with ground beef, tomatoes, onions, carrots, celery, and wine, served over pasta.",
                    "category": "Time-Honored Classics",
                    "img": "./img/161.png",
                    "ingredients": [
                      "Ground beef",
                      "Tomatoes",
                      "Onion",
                      "Carrot",
                      "Celery",
                      "Garlic",
                      "Red wine",
                      "Beef broth",
                      "Tomato paste",
                      "Bay leaf",
                      "Thyme",
                      "Rosemary",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                    ],
                    "instructions": "1. In a large pot, heat olive oil over medium heat. Add diced onion, carrot, and celery, and sauté until softened.\n2. Add minced garlic and cook until fragrant.\n3. Add ground beef and cook until browned, breaking it up with a spoon.\n4. Stir in tomato paste and cook for a few minutes.\n5. Deglaze the pot with red wine, scraping up any browned bits from the bottom.\n6. Add chopped tomatoes, beef broth, bay leaf, thyme, rosemary, salt, and pepper.\n7. Bring to a simmer, then reduce the heat to low and let it simmer for 2-3 hours, stirring occasionally.\n8. Serve hot over cooked pasta, garnished with grated Parmesan cheese."
                  },
                  {
                    "id": 162,
                    "title": "Ossobuco alla Milanese",
                    "description": "A traditional Milanese dish featuring braised veal shanks cooked with white wine, broth, tomatoes, and aromatics.",
                    "category": "Time-Honored Classics",
                    "img": "./img/162.png",
                    "ingredients": [
                      "Veal shanks",
                      "Flour",
                      "Butter",
                      "Olive oil",
                      "Onion",
                      "Carrot",
                      "Celery",
                      "Garlic",
                      "Tomatoes",
                      "White wine",
                      "Beef or chicken broth",
                      "Bay leaf",
                      "Thyme",
                      "Gremolata (optional, for serving)"
                    ],
                    "instructions": "1. Season the veal shanks with salt and pepper, then dredge them in flour.\n2. In a large skillet or Dutch oven, heat butter and olive oil over medium-high heat.\n3. Add the veal shanks and brown them on all sides. Remove and set aside.\n4. In the same pot, add diced onion, carrot, and celery. Sauté until softened.\n5. Stir in minced garlic and cook until fragrant.\n6. Add crushed tomatoes, white wine, broth, bay leaf, and thyme. Bring to a simmer.\n7. Return the veal shanks to the pot, cover, and cook over low heat for about 2 hours, or until the meat is tender.\n8. Serve hot, garnished with gremolata if desired."
                  },
                  {
                    "id": 163,
                    "title": "Linguine alle Vongole",
                    "description": "Linguine pasta served with fresh clams, garlic, white wine, parsley, and chili flakes, a classic Italian seafood dish.",
                    "category": "Time-Honored Classics",
                    "img": "./img/163.png",
                    "ingredients": [
                      "Linguine pasta",
                      "Clams",
                      "Garlic",
                      "White wine",
                      "Olive oil",
                      "Parsley",
                      "Red chili flakes",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Cook linguine pasta in salted boiling water until al dente.\n2. In a large skillet, heat olive oil over medium heat. Add minced garlic and chili flakes, and sauté until fragrant.\n3. Add fresh clams to the skillet and pour in white wine.\n4. Cover the skillet and let the clams steam until they open, about 5-7 minutes.\n5. Remove the cooked clams from the skillet and set aside.\n6. Add cooked linguine to the skillet with the clam cooking liquid. Toss to coat.\n7. Season with salt and black pepper to taste.\n8. Serve the linguine topped with steamed clams and chopped parsley."
                  },
                  {
                    "id": 164,
                    "title": "Tiramisu",
                    "description": "A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
                    "category": "Time-Honored Classics",
                    "img": "./img/164.png",
                    "ingredients": [
                      "Ladyfingers",
                      "Espresso coffee",
                      "Mascarpone cheese",
                      "Egg yolks",
                      "Sugar",
                      "Marsala wine",
                      "Cocoa powder"
                    ],
                    "instructions": "1. Brew strong espresso coffee and let it cool.\n2. In a bowl, whisk together egg yolks and sugar until pale and creamy.\n3. Add mascarpone cheese and marsala wine to the egg mixture. Beat until smooth.\n4. Dip ladyfingers in the cooled coffee and arrange them in a single layer in a serving dish.\n5. Spread a layer of the mascarpone mixture over the ladyfingers.\n6. Repeat the layers, ending with a layer of mascarpone mixture on top.\n7. Cover and refrigerate the tiramisu for at least 4 hours, or overnight, to set.\n8. Before serving, dust the top of the tiramisu with cocoa powder."
                  },
                  {
                    "id": 165,
                    "title": "Caprese Salad",
                    "description": "A simple Italian salad made with fresh tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic glaze.",
                    "category": "Time-Honored Classics",
                    "img": "./img/165.png",
                    "ingredients": [
                      "Tomatoes",
                      "Fresh mozzarella cheese",
                      "Fresh basil leaves",
                      "Extra-virgin olive oil",
                      "Balsamic glaze",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Slice the tomatoes and fresh mozzarella cheese into similar-sized slices.\n2. Arrange the tomato and mozzarella slices on a serving platter, alternating and overlapping them.\n3. Tuck fresh basil leaves between the tomato and mozzarella slices.\n4. Drizzle extra-virgin olive oil and balsamic glaze over the salad.\n5. Season with salt and black pepper to taste.\n6. Serve immediately as a refreshing appetizer or side dish."
                  },
                  {
                    "id": 166,
                    "title": "Amatriciana Pasta",
                    "description": "A classic Roman pasta dish made with bucatini pasta, pancetta, tomatoes, onions, pecorino cheese, and chili flakes.",
                    "category": "Time-Honored Classics",
                    "img": "./img/166.png",
                    "ingredients": [
                      "Bucatini pasta",
                      "Pancetta",
                      "Tomatoes",
                      "Onion",
                      "Pecorino Romano cheese",
                      "Red chili flakes",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Cook bucatini pasta in salted boiling water until al dente.\n2. Meanwhile, in a skillet, cook diced pancetta in olive oil until crispy. Remove from skillet and set aside.\n3. In the same skillet, sauté diced onion until translucent.\n4. Add crushed tomatoes and red chili flakes to the skillet. Simmer for about 10 minutes.\n5. Drain the cooked pasta and add it to the skillet with the tomato sauce.\n6. Toss to coat the pasta evenly with the sauce.\n7. Stir in the cooked pancetta and grated pecorino cheese.\n8. Season with salt and black pepper to taste.\n9. Serve hot, garnished with additional grated pecorino cheese if desired."
                  },
                  {
                    "id": 167,
                    "title": "Panzarotti",
                    "description": "Deep-fried mini calzones filled with tomato sauce, mozzarella cheese, and sometimes additional ingredients like pepperoni or ham.",
                    "category": "Time-Honored Classics",
                    "img": "./img/167.png",
                    "ingredients": [
                      "Pizza dough",
                      "Tomato sauce",
                      "Mozzarella cheese",
                      "Olive oil",
                      "Salt",
                      "Pepperoni or ham (optional)"
                    ],
                    "instructions": "1. Divide pizza dough into small balls, about the size of a golf ball.\n2. Flatten each ball into a small disc and place a spoonful of tomato sauce and a piece of mozzarella cheese in the center.\n3. Add additional toppings like pepperoni or ham if desired.\n4. Fold the dough over the filling to form a half-moon shape and seal the edges tightly.\n5. Heat olive oil in a deep fryer or large skillet to 350°F (175°C).\n6. Fry the panzarotti in batches until golden brown and crispy, about 3-4 minutes per side.\n7. Remove from the oil and drain on paper towels.\n8. Serve hot as a delicious snack or appetizer."
                  },
                  {
                    "id": 168,
                    "title": "Cacio e Pepe",
                    "description": "A simple Roman pasta dish made with spaghetti, Pecorino Romano cheese, black pepper, and pasta water.",
                    "category": "Time-Honored Classics",
                    "img": "./img/168.png",
                    "ingredients": [
                      "Spaghetti",
                      "Pecorino Romano cheese",
                      "Black pepper",
                      "Salt"
                    ],
                    "instructions": "1. Cook spaghetti in salted boiling water until al dente.\n2. Meanwhile, grate Pecorino Romano cheese and coarsely grind black pepper.\n3. Reserve some pasta water, then drain the cooked spaghetti.\n4. In a skillet, toss the hot spaghetti with grated Pecorino Romano cheese and black pepper.\n5. Add a splash of pasta water and continue tossing until the cheese melts and forms a creamy sauce.\n6. Season with salt to taste.\n7. Serve hot, garnished with extra grated cheese and black pepper."
                  },
                  {
                    "id": 169,
                    "title": "Zuppa di Pesce",
                    "description": "A traditional Italian seafood soup made with a variety of fish and shellfish, tomatoes, wine, and aromatics.",
                    "category": "Time-Honored Classics",
                    "img": "./img/169.png",
                    "ingredients": [
                      "Assorted fish and shellfish (such as shrimp, clams, mussels, squid, and white fish fillets)",
                      "Tomatoes",
                      "White wine",
                      "Onion",
                      "Garlic",
                      "Olive oil",
                      "Fish or vegetable broth",
                      "Fresh herbs (such as parsley, basil, and thyme)",
                      "Red pepper flakes",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Clean and prepare the seafood, removing shells, deveining shrimp, and cutting fish into bite-sized pieces.\n2. In a large pot, heat olive oil over medium heat. Add diced onion and minced garlic, and sauté until softened.\n3. Add chopped tomatoes, white wine, fish or vegetable broth, and red pepper flakes to the pot. Bring to a simmer.\n4. Add the seafood to the pot, starting with the clams and mussels, as they take longer to cook.\n5. Cover and simmer until the clams and mussels begin to open, then add the remaining seafood and fresh herbs.\n6. Continue to simmer until all the seafood is cooked through, about 5-7 minutes.\n7. Season with salt and black pepper to taste.\n8. Serve hot, garnished with fresh herbs and crusty bread on the side."
                  },
                  {
                    "id": 170,
                    "title": "Gnocchi alla Sorrentina",
                    "description": "Soft potato dumplings baked with tomato sauce, mozzarella cheese, and fresh basil, a classic Neapolitan dish.",
                    "category": "Time-Honored Classics",
                    "img": "./img/170.png",
                    "ingredients": [
                      "Potatoes",
                      "Flour",
                      "Egg",
                      "Tomato sauce",
                      "Mozzarella cheese",
                      "Fresh basil",
                      "Parmesan cheese",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Boil potatoes until tender, then peel and mash them while still warm.\n2. Add flour, egg, salt, and pepper to the mashed potatoes, and mix until a dough forms.\n3. Roll the dough into ropes, then cut into bite-sized pieces.\n4. Bring a pot of salted water to a boil, then cook the gnocchi in batches until they float to the surface.\n5. Drain the cooked gnocchi and transfer them to a baking dish.\n6. Pour tomato sauce over the gnocchi, then top with slices of fresh mozzarella cheese and torn basil leaves.\n7. Drizzle with olive oil and sprinkle with grated Parmesan cheese.\n8. Bake in a preheated oven at 375°F (190°C) until the cheese is melted and bubbly.\n9. Serve hot, garnished with additional fresh basil leaves."
                  },
                  {
                    "id": 171,
                    "title": "Cioppino",
                    "description": "A hearty seafood stew originating from San Francisco, made with a variety of fish and shellfish, tomatoes, wine, and herbs.",
                    "category": "Time-Honored Classics",
                    "img": "./img/171.png",
                    "ingredients": [
                      "Assorted fish and shellfish (such as shrimp, clams, mussels, squid, and white fish fillets)",
                      "Tomatoes",
                      "White wine",
                      "Onion",
                      "Garlic",
                      "Olive oil",
                      "Fish or vegetable broth",
                      "Fresh herbs (such as parsley, basil, and thyme)",
                      "Red pepper flakes",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Clean and prepare the seafood, removing shells, deveining shrimp, and cutting fish into bite-sized pieces.\n2. In a large pot, heat olive oil over medium heat. Add diced onion and minced garlic, and sauté until softened.\n3. Add chopped tomatoes, white wine, fish or vegetable broth, and red pepper flakes to the pot. Bring to a simmer.\n4. Add the seafood to the pot, starting with the clams and mussels, as they take longer to cook.\n5. Cover and simmer until the clams and mussels begin to open, then add the remaining seafood and fresh herbs.\n6. Continue to simmer until all the seafood is cooked through, about 5-7 minutes.\n7. Season with salt and black pepper to taste.\n8. Serve hot, garnished with fresh herbs and crusty bread on the side."
                  },
    
                  /* CULINARY TRADITIONS */
    
                  {
                    "id": 172,
                    "title": "Bistecca alla Fiorentina",
                    "description": "A classic Florentine dish consisting of a thick T-bone steak, seasoned with salt, pepper, and olive oil, then grilled over an open flame.",
                    "category": "Culinary Traditions",
                    "img": "./img/172.png",
                    "ingredients": [
                      "T-bone steak",
                      "Salt",
                      "Black pepper",
                      "Olive oil"
                    ],
                    "instructions": "1. Season the T-bone steak generously with salt and black pepper on both sides.\n2. Drizzle olive oil over the steak and rub it evenly into the meat.\n3. Preheat a grill or grill pan over high heat.\n4. Place the steak on the grill and cook for about 5-6 minutes on each side for medium-rare, or adjust cooking time according to desired doneness.\n5. Remove the steak from the grill and let it rest for a few minutes before serving.\n6. Slice the steak and serve it hot, drizzled with any juices accumulated during resting."
                  },
                  {
                    "id": 173,
                    "title": "Pappa al Pomodoro",
                    "description": "A traditional Tuscan bread soup made with tomatoes, stale bread, olive oil, garlic, and fresh basil.",
                    "category": "Culinary Traditions",
                    "img": "./img/173.png",
                    "ingredients": [
                      "Stale bread",
                      "Tomatoes",
                      "Olive oil",
                      "Garlic",
                      "Fresh basil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Heat olive oil in a large pot over medium heat.\n2. Add minced garlic and sauté until fragrant, but not browned.\n3. Add chopped tomatoes (fresh or canned) to the pot and cook until they start to break down.\n4. Tear stale bread into small pieces and add them to the pot.\n5. Stir to combine and let the bread soak up the tomato mixture.\n6. Add water or vegetable broth to the pot, enough to cover the bread mixture.\n7. Simmer the soup for about 20-30 minutes, stirring occasionally, until thickened.\n8. Season with salt and black pepper to taste.\n9. Remove from heat and stir in chopped fresh basil.\n10. Serve hot, drizzled with olive oil and garnished with additional basil leaves."
                  },
                  {
                    "id": 174,
                    "title": "Focaccia di Recco",
                    "description": "A Ligurian specialty consisting of thin layers of dough filled with Stracchino cheese and baked until crispy and golden brown.",
                    "category": "Culinary Traditions",
                    "img": "./img/174.png",
                    "ingredients": [
                      "Pizza dough",
                      "Stracchino cheese",
                      "Olive oil"
                    ],
                    "instructions": "1. Preheat the oven to the highest temperature setting, usually around 500°F (260°C).\n2. Divide pizza dough into two equal portions and roll each portion out into a thin circle.\n3. Place one layer of dough on a baking sheet lined with parchment paper.\n4. Spread Stracchino cheese evenly over the dough, leaving a small border around the edges.\n5. Cover the cheese with the second layer of dough and press the edges together to seal.\n6. Drizzle olive oil over the top layer of dough.\n7. Bake in the preheated oven for about 10-15 minutes, or until the focaccia is golden brown and crispy.\n8. Remove from the oven and let it cool for a few minutes before slicing.\n9. Serve warm as a delicious appetizer or snack."
                  },
                  {
                    "id": 175,
                    "title": "Risi e Bisi",
                    "description": "A traditional Venetian dish consisting of creamy risotto cooked with fresh peas and flavored with pancetta, onion, and Parmesan cheese.",
                    "category": "Culinary Traditions",
                    "img": "./img/175.png",
                    "ingredients": [
                      "Arborio rice",
                      "Fresh peas",
                      "Pancetta",
                      "Onion",
                      "Chicken or vegetable broth",
                      "Parmesan cheese",
                      "Butter",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Cook diced pancetta in a large skillet over medium heat until crispy. Remove from skillet and set aside.\n2. In the same skillet, sauté diced onion until translucent.\n3. Add Arborio rice to the skillet and toast for a few minutes, stirring constantly.\n4. Pour in a ladleful of warm chicken or vegetable broth and stir until absorbed by the rice.\n5. Continue adding broth, a ladleful at a time, stirring frequently, until the rice is creamy and tender, about 18-20 minutes.\n6. Stir in fresh peas and cooked pancetta during the last few minutes of cooking.\n7. Remove from heat and stir in grated Parmesan cheese and butter until melted and creamy.\n8. Season with salt and black pepper to taste.\n9. Serve hot, garnished with additional grated Parmesan cheese if desired."
                  },
                  {
                    "id": 176,
                    "title": "Torta Pasqualina",
                    "description": "A traditional Ligurian Easter pie made with layers of thin pastry dough filled with a mixture of ricotta cheese, Swiss chard, and eggs.",
                    "category": "Culinary Traditions",
                    "img": "./img/176.png",
                    "ingredients": [
                      "Pie dough",
                      "Ricotta cheese",
                      "Swiss chard",
                      "Eggs",
                      "Parmesan cheese",
                      "Nutmeg",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Preheat the oven to 375°F (190°C).\n2. Prepare the filling by blanching Swiss chard in boiling water for a few minutes, then draining and squeezing out excess moisture.\n3. Chop the Swiss chard and sauté it in olive oil until tender. Season with salt, black pepper, and nutmeg.\n4. In a large bowl, mix together ricotta cheese, grated Parmesan cheese, and beaten eggs. Add the cooked Swiss chard and mix until well combined.\n5. Roll out the pie dough and line a pie dish with it, leaving some overhang.\n6. Spread the ricotta and Swiss chard mixture evenly over the dough.\n7. Make small wells in the filling and carefully crack an egg into each well.\n8. Fold the overhanging dough over the filling, creating a rustic edge.\n9. Brush the dough with beaten egg wash for a golden finish.\n10. Bake in the preheated oven for about 40-45 minutes, or until the crust is golden brown and the filling is set.\n11. Allow the pie to cool slightly before slicing and serving."
                  },
                  {
                    "id": 177,
                    "title": "Pasta e Ceci",
                    "description": "A simple yet flavorful Roman dish consisting of pasta and chickpeas cooked in a tomato-based broth.",
                    "category": "Culinary Traditions",
                    "img": "./img/177.png",
                    "ingredients": [
                      "Ditalini or other small pasta",
                      "Canned chickpeas",
                      "Tomato sauce",
                      "Onion",
                      "Garlic",
                      "Vegetable broth",
                      "Rosemary",
                      "Red pepper flakes",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. In a large pot, heat olive oil over medium heat. Add diced onion and minced garlic, and sauté until softened.\n2. Stir in tomato sauce, canned chickpeas (rinsed and drained), vegetable broth, chopped rosemary, and red pepper flakes.\n3. Bring the mixture to a simmer and let it cook for about 10-15 minutes to allow the flavors to meld.\n4. Add dried pasta to the pot and continue to simmer until the pasta is al dente, stirring occasionally.\n5. Season with salt and black pepper to taste.\n6. Serve hot, garnished with a drizzle of olive oil and grated Parmesan cheese, if desired."
                  },
                  {
                    "id": 178,
                    "title": "Ossobuco alla Milanese",
                    "description": "A traditional Milanese dish consisting of cross-cut veal shanks braised with vegetables, white wine, and broth, served with gremolata.",
                    "category": "Culinary Traditions",
                    "img": "./img/178.png",
                    "ingredients": [
                      "Veal shanks",
                      "Flour",
                      "Olive oil",
                      "Onion",
                      "Carrot",
                      "Celery",
                      "Garlic",
                      "White wine",
                      "Beef or veal broth",
                      "Canned tomatoes",
                      "Gremolata (lemon zest, garlic, parsley)"
                    ],
                    "instructions": "1. Season veal shanks with salt and pepper, then dredge in flour.\n2. Heat olive oil in a large Dutch oven over medium-high heat. Brown veal shanks on both sides, then remove and set aside.\n3. In the same pot, sauté diced onion, carrot, and celery until softened.\n4. Add minced garlic and cook until fragrant.\n5. Deglaze the pot with white wine, scraping up any browned bits from the bottom.\n6. Return the veal shanks to the pot and add beef or veal broth, canned tomatoes (with juices), and any accumulated juices from the veal.\n7. Bring the liquid to a simmer, then cover and reduce the heat to low. Let it simmer gently for about 2-3 hours, or until the veal is tender and falling off the bone.\n8. Meanwhile, prepare the gremolata by combining minced garlic, lemon zest, and chopped parsley.\n9. Serve the ossobuco hot, garnished with gremolata, and accompanied by risotto or polenta."
                  },
                  {
                    "id": 179,
                    "title": "Carciofi alla Romana",
                    "description": "Artichokes cooked Roman-style, braised with garlic, fresh herbs, and white wine until tender and flavorful.",
                    "category": "Culinary Traditions",
                    "img": "./img/179.png",
                    "ingredients": [
                      "Artichokes",
                      "Lemon",
                      "Garlic",
                      "Parsley",
                      "Mint",
                      "White wine",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Prepare the artichokes by trimming off the tough outer leaves and cutting off the top third of each artichoke. Rub cut surfaces with lemon to prevent browning.\n2. In a bowl, mix together chopped garlic, parsley, mint, salt, and black pepper.\n3. Stuff the garlic and herb mixture between the leaves of each artichoke.\n4. Place stuffed artichokes in a deep pot or Dutch oven, stem side down.\n5. Drizzle olive oil over the artichokes and pour white wine into the pot until it reaches about halfway up the artichokes.\n6. Cover the pot and cook over low heat for about 30-40 minutes, or until the artichokes are tender when pierced with a fork.\n7. Serve the artichokes hot, drizzled with cooking juices and garnished with additional chopped herbs if desired."
                  },
                  {
                    "id": 180,
                    "title": "Sgabei",
                    "description": "Light and airy fried bread dough squares, typically stuffed with cheese, prosciutto, or other savory fillings, originating from the Italian Riviera.",
                    "category": "Culinary Traditions",
                    "img": "./img/180.png",
                    "ingredients": [
                      "All-purpose flour",
                      "Yeast",
                      "Water",
                      "Salt",
                      "Olive oil",
                      "Cheese, prosciutto, or other savory fillings (optional)"
                    ],
                    "instructions": "1. In a bowl, combine all-purpose flour, yeast, water, and salt to make a smooth dough.\n2. Cover the bowl with a clean kitchen towel and let the dough rise in a warm place until doubled in size, about 1-2 hours.\n3. Punch down the dough and divide it into small pieces.\n4. Roll each piece of dough into a thin square or rectangle.\n5. Heat olive oil in a deep skillet or frying pan over medium-high heat.\n6. Fry the dough squares in hot oil until puffed and golden brown on both sides.\n7. Remove the sgabei from the oil and drain on paper towels.\n8. If desired, slice open the sgabei and stuff them with cheese, prosciutto, or other savory fillings.\n9. Serve the sgabei hot as a delicious appetizer or snack."
                  },
                  {
                    "id": 181,
                    "title": "Pasta alla Norma",
                    "description": "A Sicilian pasta dish made with sautéed eggplant, tomato sauce, basil, and ricotta salata cheese.",
                    "category": "Culinary Traditions",
                    "img": "./img/181.png",
                    "ingredients": [
                      "Pasta (such as spaghetti or penne)",
                      "Eggplant",
                      "Tomatoes",
                      "Garlic",
                      "Basil",
                      "Olive oil",
                      "Ricotta salata cheese",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Cook pasta in a large pot of salted boiling water until al dente. Drain and set aside.\n2. Meanwhile, cut eggplant into cubes and sprinkle with salt. Let it sit for about 20-30 minutes to release excess moisture.\n3. Rinse the eggplant cubes and pat them dry with paper towels.\n4. Heat olive oil in a large skillet over medium heat. Add minced garlic and sauté until fragrant.\n5. Add eggplant cubes to the skillet and cook until golden brown and tender.\n6. Stir in chopped tomatoes and cook until they break down and form a sauce.\n7. Season with salt and black pepper to taste.\n8. Add cooked pasta to the skillet and toss to coat it in the sauce.\n9. Tear fresh basil leaves and add them to the pasta, stirring until evenly distributed.\n10. Serve hot, garnished with grated ricotta salata cheese and additional basil leaves if desired."
                  },
                  {
                    "id": 182,
                    "title": "Frittata di Zucchine",
                    "description": "A classic Italian omelette made with eggs and sautéed zucchini, perfect for breakfast, brunch, or a light meal.",
                    "category": "Culinary Traditions",
                    "img": "./img/182.png",
                    "ingredients": [
                      "Eggs",
                      "Zucchini",
                      "Onion",
                      "Garlic",
                      "Parmesan cheese",
                      "Fresh herbs (such as parsley or basil)",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Slice zucchini into thin rounds and dice onion and garlic.\n2. Heat olive oil in a large skillet over medium heat. Add diced onion and minced garlic, and sauté until softened.\n3. Add sliced zucchini to the skillet and cook until tender and lightly browned.\n4. In a bowl, beat eggs with grated Parmesan cheese, chopped fresh herbs, salt, and black pepper.\n5. Pour the egg mixture over the cooked zucchini in the skillet.\n6. Cook the frittata over medium-low heat until the edges are set but the center is still slightly runny.\n7. Preheat the broiler in your oven.\n8. Transfer the skillet to the oven and broil the frittata for a few minutes, until the top is golden brown and set.\n9. Remove from the oven and let it cool slightly before slicing and serving.\n10. Serve the frittata warm or at room temperature, cut into wedges."
                  }, 
                  
                  /* FAMILY FAVORITES */
    
                  {
                    "id": 183,
                    "title": "Nonna's Lasagna",
                    "description": "A classic family favorite, featuring layers of pasta, rich meat sauce, creamy béchamel, and gooey mozzarella cheese.",
                    "category": "Family Favorites",
                    "img": "./img/183.png",
                    "ingredients": [
                      "Lasagna noodles",
                      "Ground beef",
                      "Italian sausage",
                      "Onion",
                      "Garlic",
                      "Tomato sauce",
                      "Tomato paste",
                      "Red wine",
                      "Olive oil",
                      "Flour",
                      "Milk",
                      "Butter",
                      "Mozzarella cheese",
                      "Parmesan cheese",
                      "Salt",
                      "Black pepper",
                      "Nutmeg"
                    ],
                    "instructions": "1. Preheat oven to 375°F (190°C).\n2. Cook lasagna noodles according to package instructions, then drain and set aside.\n3. In a large skillet, heat olive oil over medium heat. Add diced onion and minced garlic, and sauté until softened.\n4. Add ground beef and Italian sausage to the skillet, breaking it up with a spoon, and cook until browned.\n5. Stir in tomato sauce, tomato paste, and red wine. Simmer for about 20 minutes, then season with salt and black pepper to taste.\n6. In a separate saucepan, melt butter over medium heat. Stir in flour to create a roux, then gradually whisk in milk until smooth. Cook until thickened, then season with salt, pepper, and nutmeg.\n7. Spread a thin layer of meat sauce in the bottom of a baking dish. Top with a layer of lasagna noodles, followed by a layer of béchamel sauce and shredded mozzarella cheese.\n8. Repeat layers until all ingredients are used, finishing with a layer of béchamel and shredded Parmesan cheese on top.\n9. Cover the baking dish with foil and bake for about 30 minutes.\n10. Remove the foil and bake for an additional 15 minutes, or until the cheese is bubbly and golden brown. Let it cool slightly before serving."
                  },
                  {
                    "id": 184,
                    "title": "Grandma's Meatballs",
                    "description": "Juicy and flavorful meatballs made with a blend of ground beef, pork, and veal, simmered in a rich tomato sauce.",
                    "category": "Family Favorites",
                    "img": "./img/184.png",
                    "ingredients": [
                      "Ground beef",
                      "Ground pork",
                      "Ground veal",
                      "Breadcrumbs",
                      "Parmesan cheese",
                      "Egg",
                      "Onion",
                      "Garlic",
                      "Tomato sauce",
                      "Olive oil",
                      "Fresh basil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Preheat oven to 375°F (190°C).\n2. In a large bowl, combine ground beef, ground pork, ground veal, breadcrumbs, grated Parmesan cheese, beaten egg, finely chopped onion, minced garlic, chopped fresh basil, salt, and black pepper.\n3. Mix until well combined, then shape the mixture into meatballs of desired size.\n4. Heat olive oil in a skillet over medium heat. Brown the meatballs on all sides, then transfer them to a baking dish.\n5. Pour tomato sauce over the meatballs, covering them completely.\n6. Cover the baking dish with foil and bake for about 30 minutes.\n7. Remove the foil and bake for an additional 15 minutes, or until the meatballs are cooked through and the sauce is bubbling.\n8. Serve the meatballs hot, garnished with additional grated Parmesan cheese and fresh basil leaves if desired."
                  },
                  {
                    "id": 185,
                    "title": "Zia Maria's Eggplant Parmesan",
                    "description": "Layers of crispy breaded eggplant slices, marinara sauce, and melted mozzarella cheese, baked until golden and bubbly.",
                    "category": "Family Favorites",
                    "img": "./img/185.png",
                    "ingredients": [
                      "Eggplant",
                      "All-purpose flour",
                      "Eggs",
                      "Breadcrumbs",
                      "Parmesan cheese",
                      "Mozzarella cheese",
                      "Marinara sauce",
                      "Olive oil",
                      "Salt",
                      "Black pepper",
                      "Fresh basil"
                    ],
                    "instructions": "1. Preheat oven to 375°F (190°C). Lightly grease a baking dish with olive oil.\n2. Peel the eggplant and slice it into 1/4-inch rounds.\n3. Set up a breading station with three shallow dishes: one containing all-purpose flour, one containing beaten eggs, and one containing breadcrumbs mixed with grated Parmesan cheese.\n4. Dredge each eggplant slice in flour, then dip it into the beaten eggs, and finally coat it with the breadcrumb mixture.\n5. Place the breaded eggplant slices on a baking sheet lined with parchment paper. Drizzle with olive oil and season with salt and black pepper.\n6. Bake the eggplant slices in the preheated oven for about 15-20 minutes, or until golden brown and crispy.\n7. Spread a thin layer of marinara sauce in the bottom of the prepared baking dish.\n8. Arrange a layer of baked eggplant slices over the sauce, followed by a layer of shredded mozzarella cheese and torn fresh basil leaves.\n9. Repeat the layers until all ingredients are used, finishing with a layer of marinara sauce and shredded mozzarella cheese on top.\n10. Bake the eggplant Parmesan in the oven for about 25-30 minutes, or until the cheese is melted and bubbly. Let it cool slightly before serving."
                  },
                  {
                    "id": 186,
                    "title": "Aunt Lucia's Stuffed Peppers",
                    "description": "Bell peppers stuffed with a savory mixture of ground meat, rice, tomatoes, and herbs, baked until tender and delicious.",
                    "category": "Family Favorites",
                    "img": "./img/186.png",
                    "ingredients": [
                      "Bell peppers",
                      "Ground beef",
                      "Onion",
                      "Garlic",
                      "Cooked rice",
                      "Canned diced tomatoes",
                      "Tomato paste",
                      "Fresh parsley",
                      "Fresh basil",
                      "Olive oil",
                      "Parmesan cheese",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Preheat oven to 375°F (190°C). Lightly grease a baking dish with olive oil.\n2. Cut the tops off the bell peppers and remove the seeds and membranes from the inside.\n3. In a large skillet, heat olive oil over medium heat. Add diced onion and minced garlic, and sauté until softened.\n4. Add ground beef to the skillet and cook until browned, breaking it up with a spoon.\n5. Stir in cooked rice, canned diced tomatoes, tomato paste, chopped fresh parsley, chopped fresh basil, grated Parmesan cheese, salt, and black pepper. Cook for a few minutes to combine flavors.\n6. Stuff the bell peppers with the meat and rice mixture, pressing it down gently to fill each pepper completely.\n7. Place the stuffed peppers in the prepared baking dish. If desired, sprinkle extra Parmesan cheese on top.\n8. Cover the baking dish with foil and bake for about 30-40 minutes, or until the peppers are tender.\n9. Remove the foil and bake for an additional 10 minutes, or until the cheese is golden and bubbly.\n10. Serve the stuffed peppers hot, garnished with fresh basil leaves if desired."
                  },
                  {
                    "id": 187,
                    "title": "Cousin Luigi's Chicken Parmesan",
                    "description": "Tender chicken breasts coated in seasoned breadcrumbs, fried until golden brown, topped with marinara sauce and melted mozzarella cheese.",
                    "category": "Family Favorites",
                    "img": "./img/187.png",
                    "ingredients": [
                      "Chicken breasts",
                      "All-purpose flour",
                      "Eggs",
                      "Breadcrumbs",
                      "Parmesan cheese",
                      "Mozzarella cheese",
                      "Marinara sauce",
                      "Olive oil",
                      "Salt",
                      "Black pepper",
                      "Fresh parsley"
                    ],
                    "instructions": "1. Preheat oven to 375°F (190°C). Lightly grease a baking dish with olive oil.\n2. Pound the chicken breasts to an even thickness between two pieces of plastic wrap.\n3. Set up a breading station with three shallow dishes: one containing all-purpose flour, one containing beaten eggs, and one containing breadcrumbs mixed with grated Parmesan cheese.\n4. Season the chicken breasts with salt and black pepper, then dredge each piece in flour, dip it into the beaten eggs, and coat it with the breadcrumb mixture.\n5. Heat olive oil in a large skillet over medium heat. Fry the breaded chicken breasts until golden brown and cooked through, about 3-4 minutes per side.\n6. Transfer the fried chicken breasts to the prepared baking dish.\n7. Spoon marinara sauce over each chicken breast, covering them completely.\n8. Top each chicken breast with shredded mozzarella cheese and sprinkle with chopped fresh parsley.\n9. Bake the chicken Parmesan in the preheated oven for about 15-20 minutes, or until the cheese is melted and bubbly.\n10. Serve the chicken Parmesan hot, garnished with additional chopped parsley if desired."
                  },
                  {
                    "id": 188,
                    "title": "Grandpa Mario's Beef Stew",
                    "description": "A hearty and comforting stew made with tender chunks of beef, potatoes, carrots, onions, and savory broth.",
                    "category": "Family Favorites",
                    "img": "./img/188.png",
                    "ingredients": [
                      "Stewing beef",
                      "Potatoes",
                      "Carrots",
                      "Onion",
                      "Garlic",
                      "Beef broth",
                      "Red wine",
                      "Tomato paste",
                      "Bay leaves",
                      "Fresh thyme",
                      "Olive oil",
                      "All-purpose flour",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Preheat oven to 325°F (160°C).\n2. Cut the stewing beef into bite-sized pieces and season with salt and black pepper.\n3. Heat olive oil in a large Dutch oven over medium-high heat. Add the seasoned beef and cook until browned on all sides.\n4. Remove the beef from the Dutch oven and set aside. Add diced onion and minced garlic to the pot, and sauté until softened.\n5. Sprinkle flour over the onions and garlic, stirring to coat. Cook for a few minutes to remove the raw flour taste.\n6. Deglaze the pot with red wine, scraping up any browned bits from the bottom.\n7. Return the browned beef to the pot, along with diced potatoes, sliced carrots, beef broth, tomato paste, bay leaves, and fresh thyme.\n8. Bring the stew to a simmer, then cover the Dutch oven and transfer it to the preheated oven.\n9. Cook the stew in the oven for about 2-3 hours, or until the beef is tender and the vegetables are cooked through.\n10. Remove the bay leaves and thyme sprigs before serving. Serve the beef stew hot, garnished with chopped fresh parsley if desired."
                  },
                  {
                    "id": 189,
                    "title": "Sister Maria's Tiramisu",
                    "description": "A classic Italian dessert made with layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder.",
                    "category": "Family Favorites",
                    "img": "./img/189.png",
                    "ingredients": [
                      "Ladyfingers",
                      "Espresso",
                      "Mascarpone cheese",
                      "Eggs",
                      "Sugar",
                      "Vanilla extract",
                      "Cocoa powder"
                    ],
                    "instructions": "1. Brew strong espresso and let it cool to room temperature.\n2. In a mixing bowl, whisk together egg yolks and sugar until pale and creamy.\n3. Add mascarpone cheese and vanilla extract to the egg yolk mixture, and beat until smooth and well combined.\n4. In a separate bowl, beat egg whites until stiff peaks form.\n5. Gently fold the beaten egg whites into the mascarpone mixture until no white streaks remain.\n6. Quickly dip each ladyfinger into the cooled espresso, making sure not to soak them for too long.\n7. Arrange a layer of soaked ladyfingers in the bottom of a serving dish.\n8. Spread a layer of the mascarpone mixture over the ladyfingers.\n9. Repeat the layers until all ingredients are used, finishing with a layer of mascarpone mixture on top.\n10. Cover the tiramisu with plastic wrap and refrigerate for at least 4 hours, or overnight, to set.\n11. Before serving, dust the top of the tiramisu with cocoa powder. Cut into slices and serve chilled."
                  },
                  {
                    "id": 190,
                    "title": "Uncle Giuseppe's Spaghetti Carbonara",
                    "description": "A simple yet delicious pasta dish made with spaghetti, crispy pancetta, eggs, cheese, and black pepper.",
                    "category": "Family Favorites",
                    "img": "./img/190.png",
                    "ingredients": [
                      "Spaghetti",
                      "Pancetta",
                      "Eggs",
                      "Parmesan cheese",
                      "Black pepper",
                      "Salt"
                    ],
                    "instructions": "1. Cook spaghetti in a large pot of boiling salted water until al dente. Reserve 1 cup of pasta cooking water, then drain the spaghetti and set aside.\n2. In a skillet, cook diced pancetta over medium heat until crispy. Remove from the skillet and drain on paper towels.\n3. In a mixing bowl, whisk together eggs, grated Parmesan cheese, and black pepper.\n4. Return the cooked spaghetti to the pot. Add the cooked pancetta and egg mixture, tossing well to coat the spaghetti.\n5. If the spaghetti seems dry, add some of the reserved pasta cooking water to loosen it up.\n6. Season the spaghetti carbonara with salt to taste, if needed.\n7. Serve the spaghetti carbonara hot, garnished with extra grated Parmesan cheese and black pepper."
                  },
                  {
                    "id": 191,
                    "title": "Aunt Rosa's Cannoli",
                    "description": "Crispy pastry shells filled with a sweet and creamy ricotta cheese filling, studded with chocolate chips and candied fruit.",
                    "category": "Family Favorites",
                    "img": "./img/191.png",
                    "ingredients": [
                      "Cannoli shells",
                      "Ricotta cheese",
                      "Powdered sugar",
                      "Vanilla extract",
                      "Chocolate chips",
                      "Candied fruit",
                      "Whipped cream",
                      "Pistachios",
                      "Confectioners' sugar"
                    ],
                    "instructions": "1. In a mixing bowl, combine ricotta cheese, powdered sugar, and vanilla extract. Beat until smooth and creamy.\n2. Stir in chocolate chips and chopped candied fruit until evenly distributed.\n3. Fill each cannoli shell with the ricotta cheese mixture, using a piping bag or spoon.\n4. Dip the ends of the filled cannoli into whipped cream and chopped pistachios.\n5. Dust the cannoli with confectioners' sugar just before serving.\n6. Serve the cannoli immediately to prevent the shells from becoming soggy."
                  },
                  {
                    "id": 192,
                    "title": "Mom's Chicken Cacciatore",
                    "description": "A rustic Italian chicken stew made with chicken pieces, tomatoes, bell peppers, onions, and aromatic herbs.",
                    "category": "Family Favorites",
                    "img": "./img/192.png",
                    "ingredients": [
                      "Chicken pieces",
                      "Onion",
                      "Bell peppers",
                      "Garlic",
                      "Canned diced tomatoes",
                      "Tomato paste",
                      "Dry white wine",
                      "Chicken broth",
                      "Fresh rosemary",
                      "Fresh thyme",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Season chicken pieces with salt and black pepper.\n2. Heat olive oil in a large Dutch oven over medium-high heat. Brown the chicken pieces on all sides, then remove them from the pot and set aside.\n3. In the same pot, sauté diced onion, sliced bell peppers, and minced garlic until softened.\n4. Stir in canned diced tomatoes, tomato paste, dry white wine, and chicken broth. Bring to a simmer.\n5. Return the browned chicken pieces to the pot, along with fresh rosemary and thyme sprigs.\n6. Cover the pot and simmer gently for about 30-40 minutes, or until the chicken is cooked through and tender.\n7. Adjust seasoning with salt and black pepper to taste.\n8. Serve the chicken cacciatore hot, garnished with chopped fresh parsley if desired."
                  },
    
                  /* STREET FOOD */
    
                  {
                    "id": 193,
                    "title": "Arancini",
                    "description": "Deep-fried rice balls stuffed with a savory filling, such as ragu, cheese, or peas.",
                    "category": "Street Food",
                    "img": "./img/193.png",
                    "ingredients": [
                      "Arborio rice",
                      "Chicken or vegetable broth",
                      "Parmesan cheese",
                      "Mozzarella cheese",
                      "Eggs",
                      "Breadcrumbs",
                      "Tomato sauce (optional)",
                      "Peas (optional)",
                      "Ground beef (optional)",
                      "Fresh parsley",
                      "Salt",
                      "Black pepper",
                      "Vegetable oil (for frying)"
                    ],
                    "instructions": "1. Cook Arborio rice in chicken or vegetable broth until tender. Let it cool slightly.\n2. Stir in grated Parmesan cheese, chopped fresh parsley, and beaten eggs.\n3. Take a small handful of the rice mixture and flatten it in your hand. Place a cube of mozzarella cheese and any desired filling (such as peas or ground beef) in the center.\n4. Mold the rice mixture around the filling to form a ball.\n5. Roll the rice ball in breadcrumbs until coated evenly.\n6. Heat vegetable oil in a deep fryer or large pot to 350°F (175°C).\n7. Fry the rice balls in batches until golden brown and crispy, about 4-5 minutes.\n8. Drain the arancini on paper towels and serve hot with tomato sauce for dipping, if desired."
                  },
                  {
                    "id": 194,
                    "title": "Piadina",
                    "description": "Thin, unleavened Italian flatbread filled with various savory ingredients, such as cheese, cured meats, or vegetables.",
                    "category": "Street Food",
                    "img": "./img/194.png",
                    "ingredients": [
                      "All-purpose flour",
                      "Baking powder",
                      "Salt",
                      "Olive oil",
                      "Water",
                      "Prosciutto",
                      "Stracchino cheese",
                      "Arugula",
                      "Cherry tomatoes",
                      "Balsamic glaze (optional)"
                    ],
                    "instructions": "1. In a mixing bowl, combine all-purpose flour, baking powder, salt, and olive oil.\n2. Gradually add water, mixing until a smooth dough forms.\n3. Divide the dough into small balls and roll each ball into a thin circle.\n4. Heat a non-stick skillet over medium heat. Cook each piadina for 2-3 minutes on each side, or until lightly golden and cooked through.\n5. Fill each piadina with slices of prosciutto, stracchino cheese, arugula, and halved cherry tomatoes.\n6. Fold the piadina in half and serve immediately, optionally drizzled with balsamic glaze."
                  },
                  {
                    "id": 195,
                    "title": "Panelle",
                    "description": "Crispy chickpea fritters seasoned with herbs and spices, typically served as a street food snack in Sicily.",
                    "category": "Street Food",
                    "img": "./img/195.png",
                    "ingredients": [
                      "Chickpea flour",
                      "Water",
                      "Salt",
                      "Black pepper",
                      "Parsley",
                      "Olive oil (for frying)"
                    ],
                    "instructions": "1. In a saucepan, whisk together chickpea flour, water, salt, black pepper, and chopped parsley until smooth.\n2. Cook the mixture over medium heat, stirring constantly, until thickened and smooth.\n3. Pour the mixture onto a baking sheet lined with parchment paper, spreading it into an even layer.\n4. Let the mixture cool and set for about 1-2 hours.\n5. Cut the set chickpea mixture into squares or rectangles.\n6. Heat olive oil in a frying pan over medium-high heat.\n7. Fry the panelle in batches until golden brown and crispy, about 2-3 minutes per side.\n8. Drain the panelle on paper towels and serve hot as a snack or appetizer."
                  },
                  {
                    "id": 196,
                    "title": "Supplì",
                    "description": "Deep-fried rice croquettes filled with mozzarella cheese and sometimes ragu or tomato sauce, originating from Rome.",
                    "category": "Street Food",
                    "img": "./img/196.png",
                    "ingredients": [
                      "Arborio rice",
                      "Chicken or vegetable broth",
                      "Parmesan cheese",
                      "Eggs",
                      "Breadcrumbs",
                      "Mozzarella cheese",
                      "Tomato sauce (optional)",
                      "Ground beef (optional)",
                      "Fresh parsley",
                      "Salt",
                      "Black pepper",
                      "Vegetable oil (for frying)"
                    ],
                    "instructions": "1. Cook Arborio rice in chicken or vegetable broth until tender. Let it cool slightly.\n2. Stir in grated Parmesan cheese, chopped fresh parsley, and beaten eggs.\n3. Take a small handful of the rice mixture and flatten it in your hand. Place a cube of mozzarella cheese and any desired filling (such as tomato sauce or ground beef) in the center.\n4. Mold the rice mixture around the filling to form a croquette.\n5. Roll the croquette in breadcrumbs until coated evenly.\n6. Heat vegetable oil in a deep fryer or large pot to 350°F (175°C).\n7. Fry the supplì in batches until golden brown and crispy, about 3-4 minutes.\n8. Drain the supplì on paper towels and serve hot."
                  },
                  {
                    "id": 197,
                    "title": "Schiacciata",
                    "description": "A type of Italian flatbread, similar to focaccia, topped with olive oil, salt, and sometimes herbs.",
                    "category": "Street Food",
                    "img": "./img/197.png",
                    "ingredients": [
                      "All-purpose flour",
                      "Active dry yeast",
                      "Water",
                      "Olive oil",
                      "Salt",
                      "Sugar",
                      "Rosemary (optional)"
                    ],
                    "instructions": "1. In a mixing bowl, combine active dry yeast, warm water, and sugar. Let it sit for about 5 minutes, or until frothy.\n2. Stir in all-purpose flour, olive oil, and salt until a dough forms.\n3. Knead the dough on a lightly floured surface until smooth and elastic.\n4. Place the dough in a greased bowl, cover with a clean kitchen towel, and let it rise in a warm place for about 1 hour, or until doubled in size.\n5. Preheat the oven to 425°F (220°C). Punch down the risen dough and transfer it to a greased baking sheet.\n6. Press the dough into a rectangle shape, about 1/2 inch thick.\n7. Brush the surface of the dough with olive oil and sprinkle with coarse salt and fresh rosemary, if desired.\n8. Bake the schiacciata in the preheated oven for 20-25 minutes, or until golden brown and cooked through.\n9. Let the schiacciata cool slightly before slicing and serving."
                  },
                  {
                    "id": 198,
                    "title": "Fried Zucchini Flowers",
                    "description": "Delicate zucchini flowers stuffed with cheese or other fillings, dipped in batter, and deep-fried until crispy.",
                    "category": "Street Food",
                    "img": "./img/198.png",
                    "ingredients": [
                      "Zucchini flowers",
                      "Ricotta cheese",
                      "Parmesan cheese",
                      "Fresh herbs (such as basil or parsley)",
                      "All-purpose flour",
                      "Egg",
                      "Cold water",
                      "Salt",
                      "Vegetable oil (for frying)"
                    ],
                    "instructions": "1. Gently rinse the zucchini flowers under cold water and pat them dry with paper towels.\n2. Carefully remove the stamen from inside each zucchini flower.\n3. In a mixing bowl, combine ricotta cheese, grated Parmesan cheese, chopped fresh herbs, and salt to taste.\n4. Gently stuff each zucchini flower with the cheese mixture, being careful not to tear the petals.\n5. In a separate bowl, whisk together all-purpose flour, beaten egg, cold water, and a pinch of salt to make a batter.\n6. Heat vegetable oil in a deep fryer or large pot to 350°F (175°C).\n7. Dip each stuffed zucchini flower into the batter, allowing any excess batter to drip off.\n8. Fry the zucchini flowers in batches until golden brown and crispy, about 2-3 minutes per side.\n9. Drain the fried zucchini flowers on paper towels and serve hot, optionally garnished with additional grated Parmesan cheese."
                  },
                  {
                    "id": 199,
                    "title": "Trapizzino",
                    "description": "A popular Roman street food consisting of pizza dough filled with various savory ingredients, such as meatballs, chicken, or eggplant parmigiana.",
                    "category": "Street Food",
                    "img": "./img/199.png",
                    "ingredients": [
                      "Pizza dough",
                      "Marinara sauce",
                      "Meatballs",
                      "Chicken cacciatore",
                      "Eggplant parmigiana",
                      "Mozzarella cheese",
                      "Fresh basil",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Preheat the oven to 425°F (220°C). Roll out pizza dough into small oval shapes, about 6 inches long.\n2. Spread a spoonful of marinara sauce onto each piece of dough.\n3. Top the marinara sauce with your choice of filling, such as meatballs, chicken cacciatore, or eggplant parmigiana.\n4. Sprinkle shredded mozzarella cheese over the filling.\n5. Fold the dough over the filling to create a triangular shape, pinching the edges to seal.\n6. Place the trapizzini on a baking sheet lined with parchment paper.\n7. Brush the tops of the trapizzini with olive oil and sprinkle with salt and black pepper.\n8. Bake in the preheated oven for 10-12 minutes, or until the crust is golden brown and cooked through.\n9. Remove from the oven and let cool slightly before serving.\n10. Garnish with fresh basil leaves before serving, if desired."
                  },
                  {
                    "id": 200,
                    "title": "Panzerotti",
                    "description": "Deep-fried turnovers filled with tomato sauce, mozzarella cheese, and sometimes additional ingredients like ham or mushrooms.",
                    "category": "Street Food",
                    "img": "./img/200.png",
                    "ingredients": [
                      "Pizza dough",
                      "Tomato sauce",
                      "Mozzarella cheese",
                      "Ham (optional)",
                      "Mushrooms (optional)",
                      "Olive oil (for frying)",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Roll out pizza dough into small circles, about 5-6 inches in diameter.\n2. Spread a spoonful of tomato sauce onto one half of each dough circle, leaving a small border around the edges.\n3. Top the tomato sauce with shredded mozzarella cheese and any desired additional fillings, such as diced ham or sliced mushrooms.\n4. Fold the other half of the dough over the filling to create a half-moon shape, pressing the edges together to seal.\n5. Heat olive oil in a deep fryer or large pot to 350°F (175°C).\n6. Fry the panzerotti in batches until golden brown and crispy, about 3-4 minutes per side.\n7. Remove the fried panzerotti from the oil and drain on paper towels.\n8. Season with salt and black pepper, and serve hot as a delicious street food snack."
                  },
                  {
                    "id": 201,
                    "title": "Gelato",
                    "description": "Italian-style ice cream made with milk, sugar, and various flavorings, such as fruit purees, nuts, or chocolate.",
                    "category": "Street Food",
                    "img": "./img/201.png",
                    "ingredients": [
                      "Whole milk",
                      "Heavy cream",
                      "Sugar",
                      "Egg yolks",
                      "Vanilla extract",
                      "Fresh fruit puree, nuts, or chocolate (optional)"
                    ],
                    "instructions": "1. In a saucepan, heat whole milk and heavy cream over medium heat until warm but not boiling.\n2. In a mixing bowl, whisk together sugar and egg yolks until pale and creamy.\n3. Gradually pour the warm milk mixture into the egg mixture, whisking constantly.\n4. Return the mixture to the saucepan and cook over low heat, stirring constantly, until thickened.\n5. Remove from heat and stir in vanilla extract.\n6. Transfer the custard to a bowl and cover with plastic wrap, pressing the wrap directly onto the surface of the custard to prevent a skin from forming.\n7. Chill the custard in the refrigerator for at least 4 hours or overnight.\n8. Once chilled, churn the custard in an ice cream maker according to the manufacturer's instructions.\n9. If desired, swirl in fresh fruit puree, chopped nuts, or chocolate during the last few minutes of churning.\n10. Transfer the churned gelato to a freezer-safe container and freeze for at least 4 hours before serving."
                  },
                  {
                    "id": 202,
                    "title": "Zeppole",
                    "description": "Deep-fried dough balls dusted with powdered sugar, typically served as a street food snack during Italian festivals and celebrations.",
                    "category": "Street Food",
                    "img": "./img/202.png",
                    "ingredients": [
                      "All-purpose flour",
                      "Sugar",
                      "Baking powder",
                      "Salt",
                      "Eggs",
                      "Whole milk",
                      "Vanilla extract",
                      "Vegetable oil (for frying)",
                      "Powdered sugar (for dusting)"
                    ],
                    "instructions": "1. In a mixing bowl, combine all-purpose flour, sugar, baking powder, and salt.\n2. In a separate bowl, whisk together eggs, whole milk, and vanilla extract until smooth.\n3. Gradually add the wet ingredients to the dry ingredients, stirring until a thick batter forms.\n4. Heat vegetable oil in a deep fryer or large pot to 375°F (190°C).\n5. Drop spoonfuls of the batter into the hot oil and fry until golden brown and crispy, about 3-4 minutes.\n6. Remove the zeppole from the oil with a slotted spoon and drain on paper towels.\n7. Dust the warm zeppole generously with powdered sugar.\n8. Serve the zeppole immediately as a delightful street food treat."
                  },
                  {
                    "id": 203,
                    "title": "Pizza Bianca",
                    "description": "A simple yet delicious Roman street food consisting of freshly baked pizza dough topped with olive oil, salt, and sometimes fresh rosemary.",
                    "category": "Street Food",
                    "img": "./img/203.png",
                    "ingredients": [
                      "Pizza dough",
                      "Extra-virgin olive oil",
                      "Coarse sea salt",
                      "Fresh rosemary (optional)"
                    ],
                    "instructions": "1. Preheat the oven to 450°F (230°C). Roll out pizza dough into a thin oval or rectangular shape.\n2. Transfer the rolled-out dough to a baking sheet lined with parchment paper.\n3. Drizzle extra-virgin olive oil evenly over the surface of the dough.\n4. Sprinkle coarse sea salt over the oiled dough, ensuring even coverage.\n5. If desired, scatter fresh rosemary leaves over the top of the pizza.\n6. Bake in the preheated oven for 12-15 minutes, or until the crust is golden brown and crispy.\n7. Remove from the oven and let cool slightly before slicing and serving.\n8. Enjoy the simple yet flavorful goodness of pizza bianca as a classic street food snack."
                  }, 
    
                  /* GASTRONOMIC ADVENTURES */
    
                  {
                    "id": 204,
                    "title": "Porchetta",
                    "description": "A savory, moist, and fatty pork roast, typically seasoned with garlic, rosemary, fennel, and other herbs and spices, then slow-roasted until tender and crispy on the outside.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/204.png",
                    "ingredients": [
                      "Pork belly",
                      "Pork loin",
                      "Garlic",
                      "Rosemary",
                      "Fennel seeds",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Score the skin of the pork belly in a diamond pattern and rub it with salt.\n2. Crush garlic, rosemary, and fennel seeds together to make a paste.\n3. Rub the garlic, rosemary, and fennel paste over the scored skin of the pork belly and pork loin.\n4. Season the meat generously with salt and black pepper.\n5. Roll the pork loin into the pork belly and tie it securely with kitchen twine.\n6. Preheat the oven to a high temperature.\n7. Place the porchetta on a rack in a roasting pan and roast it in the preheated oven until the skin is crispy and the internal temperature reaches 145°F (63°C).\n8. Let the porchetta rest for 15-20 minutes before slicing and serving."
                  },
                  {
                    "id": 205,
                    "title": "Zuppa di Pesce",
                    "description": "A hearty Italian fish soup made with a variety of seafood such as fish fillets, shrimp, clams, and mussels, cooked in a rich tomato-based broth flavored with garlic, onions, herbs, and white wine.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/205.png",
                    "ingredients": [
                      "Assorted fish fillets",
                      "Shrimp",
                      "Clams",
                      "Mussels",
                      "Tomatoes",
                      "Garlic",
                      "Onion",
                      "White wine",
                      "Fish stock",
                      "Fresh herbs (such as parsley, basil, and thyme)",
                      "Red pepper flakes",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. In a large pot, heat olive oil over medium heat and sauté chopped onions and garlic until softened.\n2. Add chopped tomatoes, fish stock, white wine, and red pepper flakes to the pot.\n3. Bring the broth to a simmer and let it cook for about 15-20 minutes to allow the flavors to meld.\n4. Season the broth with salt and black pepper to taste.\n5. Add the assorted seafood to the pot and cook until the fish is opaque and the shellfish have opened.\n6. Stir in fresh herbs and adjust seasoning if necessary.\n7. Serve the zuppa di pesce hot, garnished with additional fresh herbs and crusty bread."
                  },
                  {
                    "id": 206,
                    "title": "Sicilian Arancini",
                    "description": "Fried rice balls filled with a savory mixture of risotto, meat sauce, peas, and mozzarella cheese, coated in breadcrumbs and deep-fried until golden and crispy.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/206.png",
                    "ingredients": [
                      "Arborio rice",
                      "Meat sauce",
                      "Peas",
                      "Mozzarella cheese",
                      "Parmesan cheese",
                      "Eggs",
                      "Breadcrumbs",
                      "Vegetable oil (for frying)",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Cook Arborio rice according to package instructions until al dente.\n2. Spread the cooked rice on a baking sheet to cool.\n3. In a large bowl, combine the cooked rice with meat sauce, peas, grated Parmesan cheese, salt, and black pepper.\n4. Take a handful of the rice mixture and flatten it in your hand.\n5. Place a cube of mozzarella cheese in the center and shape the rice mixture into a ball around the cheese.\n6. Dip the rice ball in beaten eggs, then coat it evenly with breadcrumbs.\n7. Heat vegetable oil in a deep fryer or large pot to 350°F (175°C).\n8. Fry the arancini in batches until golden brown and crispy, about 3-4 minutes.\n9. Drain the fried arancini on paper towels to remove excess oil.\n10. Serve the Sicilian arancini hot, garnished with grated Parmesan cheese and marinara sauce for dipping."
                  },
                  {
                    "id": 207,
                    "title": "Sardinian Culurgiones",
                    "description": "Handmade pasta parcels filled with a mixture of potato, pecorino cheese, mint, and garlic, served with a simple tomato sauce.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/207.png",
                    "ingredients": [
                      "Potatoes",
                      "Pecorino cheese",
                      "Fresh mint",
                      "Garlic",
                      "Salt",
                      "Black pepper",
                      "All-purpose flour",
                      "Water",
                      "Tomatoes",
                      "Olive oil",
                      "Onion",
                      "Basil leaves"
                    ],
                    "instructions": "1. Cook the potatoes in boiling water until tender, then drain and mash them.\n2. In a large bowl, combine the mashed potatoes with grated pecorino cheese, chopped fresh mint, minced garlic, salt, and black pepper.\n3. In a separate bowl, mix all-purpose flour with water to form a smooth dough.\n4. Roll out the dough thinly and cut it into circles using a cookie cutter.\n5. Place a spoonful of the potato filling in the center of each dough circle.\n6. Fold the dough over the filling to form half-moon shapes and seal the edges by pressing with a fork.\n7. Bring a large pot of salted water to a boil and cook the culurgiones in batches until they float to the surface, about 3-4 minutes.\n8. Meanwhile, prepare a simple tomato sauce by sautéing chopped onions in olive oil until soft, then adding chopped tomatoes and basil leaves and cooking until the sauce thickens.\n9. Serve the Sardinian culurgiones hot, topped with the tomato sauce and additional grated pecorino cheese if desired."
                  },
                  {
                    "id": 208,
                    "title": "Pasta e Ceci",
                    "description": "A simple and hearty Italian soup made with pasta, chickpeas, tomatoes, garlic, onions, and herbs, cooked in a flavorful broth until the pasta is tender and the flavors are well blended.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/208.png",
                    "ingredients": [
                      "Pasta (such as ditalini or small shells)",
                      "Chickpeas",
                      "Tomatoes",
                      "Onion",
                      "Garlic",
                      "Vegetable broth",
                      "Rosemary",
                      "Thyme",
                      "Bay leaf",
                      "Salt",
                      "Black pepper",
                      "Parmesan cheese (for serving)"
                    ],
                    "instructions": "1. In a large pot, heat olive oil over medium heat and sauté chopped onions and minced garlic until softened.\n2. Add chopped tomatoes, drained chickpeas, vegetable broth, rosemary, thyme, and bay leaf to the pot.\n3. Bring the soup to a simmer and cook for about 15-20 minutes to allow the flavors to meld.\n4. Add pasta to the soup and cook until al dente, according to package instructions.\n5. Season the soup with salt and black pepper to taste.\n6. Remove the bay leaf and rosemary sprigs from the soup before serving.\n7. Ladle the pasta e ceci into bowls and serve hot, garnished with grated Parmesan cheese and a drizzle of olive oil."
                  },
                  {
                    "id": 209,
                    "title": "Calzone",
                    "description": "A folded pizza turnover filled with tomato sauce, cheese, and various pizza toppings, then baked until golden and crispy.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/209.png",
                    "ingredients": [
                      "Pizza dough",
                      "Tomato sauce",
                      "Mozzarella cheese",
                      "Ricotta cheese",
                      "Pizza toppings (such as pepperoni, mushrooms, bell peppers, and onions)",
                      "Olive oil",
                      "Parmesan cheese (for serving)"
                    ],
                    "instructions": "1. Preheat the oven to a high temperature.\n2. Roll out the pizza dough into circles or rectangles of equal size.\n3. Spread tomato sauce over one half of each dough round, leaving a border around the edges.\n4. Sprinkle shredded mozzarella cheese over the tomato sauce, then add dollops of ricotta cheese and your desired pizza toppings.\n5. Fold the other half of the dough over the filling to create a half-moon shape, then press the edges together to seal.\n6. Brush the tops of the calzones with olive oil and use a knife to make a few small slits in the dough to allow steam to escape.\n7. Transfer the calzones to a baking sheet lined with parchment paper.\n8. Bake the calzones in the preheated oven for about 15-20 minutes, or until the crust is golden brown and crispy.\n9. Remove the calzones from the oven and let them cool for a few minutes before serving.\n10. Serve the calzones hot, garnished with grated Parmesan cheese and a side of marinara sauce for dipping."
                  },
                  {
                    "id": 210,
                    "title": "Insalata Caprese",
                    "description": "A simple and refreshing Italian salad made with ripe tomatoes, fresh mozzarella cheese, basil leaves, olive oil, balsamic vinegar, salt, and black pepper.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/210.png",
                    "ingredients": [
                      "Ripe tomatoes",
                      "Fresh mozzarella cheese",
                      "Fresh basil leaves",
                      "Extra virgin olive oil",
                      "Balsamic vinegar",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Slice the tomatoes and fresh mozzarella cheese into thick slices.\n2. Arrange the tomato and mozzarella slices on a serving platter, alternating them and overlapping slightly.\n3. Tuck fresh basil leaves between the tomato and mozzarella slices.\n4. Drizzle extra virgin olive oil and balsamic vinegar over the salad.\n5. Season the salad with salt and black pepper to taste.\n6. Let the Insalata Caprese sit for a few minutes to allow the flavors to meld.\n7. Serve the salad at room temperature, garnished with additional fresh basil leaves if desired."
                  },
                  {
                    "id": 211,
                    "title": "Zucca Risotto",
                    "description": "Creamy risotto made with Arborio rice, chicken or vegetable broth, white wine, shallots, garlic, and diced pumpkin, finished with Parmesan cheese and fresh herbs.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/211.png",
                    "ingredients": [
                      "Arborio rice",
                      "Chicken or vegetable broth",
                      "White wine",
                      "Shallots",
                      "Garlic",
                      "Pumpkin",
                      "Butter",
                      "Parmesan cheese",
                      "Fresh herbs (such as parsley and thyme)",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. In a saucepan, heat chicken or vegetable broth and keep it warm over low heat.\n2. In a large skillet, melt butter over medium heat and sauté finely chopped shallots and minced garlic until softened.\n3. Add Arborio rice to the skillet and toast it for a few minutes until translucent.\n4. Deglaze the skillet with white wine and cook until the wine is absorbed.\n5. Begin adding warm broth to the skillet, one ladleful at a time, stirring constantly and allowing the rice to absorb the broth before adding more.\n6. After about 15 minutes, add diced pumpkin to the risotto and continue cooking until the rice is creamy and the pumpkin is tender.\n7. Stir in grated Parmesan cheese and chopped fresh herbs.\n8. Season the risotto with salt and black pepper to taste.\n9. Serve the Zucca Risotto hot, garnished with additional grated Parmesan cheese and fresh herbs if desired."
                  },
                  {
                    "id": 212,
                    "title": "Melanzane alla Parmigiana",
                    "description": "Layers of fried eggplant slices, tomato sauce, and melted mozzarella and Parmesan cheeses, baked until bubbly and golden brown.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/212.png",
                    "ingredients": [
                      "Eggplant",
                      "All-purpose flour",
                      "Eggs",
                      "Breadcrumbs",
                      "Olive oil (for frying)",
                      "Tomato sauce",
                      "Mozzarella cheese",
                      "Parmesan cheese",
                      "Fresh basil leaves",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Slice the eggplant into rounds, about 1/4 inch thick.\n2. Season the eggplant slices with salt and let them sit for about 30 minutes to draw out excess moisture.\n3. Rinse the eggplant slices and pat them dry with paper towels.\n4. Dredge the eggplant slices in flour, dip them in beaten eggs, then coat them evenly with breadcrumbs.\n5. Heat olive oil in a large skillet over medium heat and fry the eggplant slices until golden brown on both sides.\n6. Preheat the oven to a moderate temperature.\n7. Spread a thin layer of tomato sauce in the bottom of a baking dish.\n8. Arrange a layer of fried eggplant slices over the tomato sauce, then top with a layer of sliced mozzarella cheese and grated Parmesan cheese.\n9. Repeat the layers until all the ingredients are used, finishing with a layer of cheese on top.\n10. Bake the Melanzane alla Parmigiana in the preheated oven until the cheese is melted and bubbly, about 20-25 minutes.\n11. Remove the dish from the oven and let it cool for a few minutes before serving.\n12. Garnish the Melanzane alla Parmigiana with fresh basil leaves and serve hot."
                  },
                  {
                    "id": 213,
                    "title": "Pappa al Pomodoro",
                    "description": "A traditional Tuscan bread soup made with ripe tomatoes, stale bread, garlic, basil, olive oil, and vegetable broth, simmered until thick and creamy.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/213.png",
                    "ingredients": [
                      "Ripe tomatoes",
                      "Stale bread",
                      "Garlic",
                      "Fresh basil leaves",
                      "Vegetable broth",
                      "Olive oil",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Blanch the tomatoes in boiling water for a few seconds, then transfer them to an ice water bath.\n2. Peel and seed the tomatoes, then chop them finely.\n3. In a large pot, heat olive oil over medium heat and sauté minced garlic until fragrant.\n4. Add the chopped tomatoes to the pot and cook until they start to break down.\n5. Tear the stale bread into chunks and add it to the pot.\n6. Stir in vegetable broth and bring the mixture to a simmer.\n7. Cook the soup, stirring occasionally, until the bread breaks down and the mixture thickens.\n8. Season the Pappa al Pomodoro with salt and black pepper to taste.\n9. Tear fresh basil leaves into the soup and stir to combine.\n10. Serve the Pappa al Pomodoro hot, garnished with additional basil leaves and a drizzle of olive oil."
                  },
                  {
                    "id": 214,
                    "title": "Torta Pasqualina",
                    "description": "A traditional Italian Easter pie made with layers of thin pastry dough filled with a mixture of ricotta cheese, spinach, eggs, and Parmesan cheese.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/214.png",
                    "ingredients": [
                      "Puff pastry",
                      "Ricotta cheese",
                      "Spinach",
                      "Eggs",
                      "Parmesan cheese",
                      "Nutmeg",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. Preheat the oven to a moderate temperature.\n2. Blanch the spinach in boiling water for a few seconds, then transfer it to an ice water bath.\n3. Drain the spinach well and chop it finely.\n4. In a bowl, mix together ricotta cheese, chopped spinach, grated Parmesan cheese, eggs, nutmeg, salt, and black pepper.\n5. Roll out the puff pastry into thin sheets and line a greased pie dish with one sheet.\n6. Spread the ricotta and spinach mixture evenly over the pastry sheet.\n7. Make small wells in the filling and crack eggs into them.\n8. Cover the filling with another sheet of puff pastry, sealing the edges well.\n9. Brush the top of the pie with beaten egg wash.\n10. Bake the Torta Pasqualina in the preheated oven until the pastry is golden brown and the filling is set, about 30-35 minutes.\n11. Remove the pie from the oven and let it cool for a few minutes before serving.\n12. Serve the Torta Pasqualina warm or at room temperature."
                  },
                  {
                    "id": 215,
                    "title": "Bistecca alla Fiorentina",
                    "description": "A traditional Florentine dish of thick-cut T-bone steak seasoned with salt, grilled over hot coals, and served rare or medium-rare.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/215.png",
                    "ingredients": [
                      "T-bone steak",
                      "Coarse salt"
                    ],
                    "instructions": "1. Season the T-bone steak generously with coarse salt on both sides.\n2. Preheat a grill or barbecue to high heat.\n3. Place the steak on the hot grill and cook for about 5-7 minutes on each side, or until desired doneness is reached.\n4. For a rare steak, aim for an internal temperature of 120-125°F (49-52°C); for medium-rare, aim for 130-135°F (54-57°C).\n5. Once cooked to your liking, remove the steak from the grill and let it rest for a few minutes before slicing.\n6. Serve the Bistecca alla Fiorentina hot, accompanied by your favorite side dishes."
                  },
                  {
                    "id": 216,
                    "title": "Cassoeula",
                    "description": "A hearty Milanese stew made with pork ribs, sausages, and cabbage, flavored with garlic, onion, and bay leaves.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/216.png",
                    "ingredients": [
                      "Pork ribs",
                      "Sausages",
                      "Cabbage",
                      "Onion",
                      "Garlic",
                      "Bay leaves",
                      "White wine",
                      "Tomato paste",
                      "Salt",
                      "Black pepper"
                    ],
                    "instructions": "1. In a large pot, brown the pork ribs and sausages over medium heat until golden brown.\n2. Add chopped onion and garlic to the pot and cook until softened.\n3. Stir in chopped cabbage and cook for a few minutes until slightly wilted.\n4. Pour in white wine and cook until the alcohol evaporates.\n5. Add tomato paste, bay leaves, salt, and black pepper to taste.\n6. Cover the pot and simmer the cassoeula over low heat for about 2-3 hours, stirring occasionally, until the meat is tender and the flavors are well combined.\n7. Adjust seasoning if necessary and serve the cassoeula hot, accompanied by crusty bread or polenta."
                  },
                  {
                    "id": 217,
                    "title": "Cotoletta alla Milanese",
                    "description": "A classic Milanese dish consisting of breaded and fried veal cutlets, traditionally served with lemon wedges.",
                    "category": "Gastronomic Adventures",
                    "img": "./img/217.png",
                    "ingredients": [
                      "Veal cutlets",
                      "All-purpose flour",
                      "Eggs",
                      "Breadcrumbs",
                      "Salt",
                      "Black pepper",
                      "Vegetable oil (for frying)",
                      "Lemon wedges (for serving)"
                    ],
                    "instructions": "1. Tenderize the veal cutlets with a meat mallet until they are about 1/4 inch thick.\n2. Season the veal cutlets with salt and black pepper on both sides.\n3. Set up a breading station with three shallow bowls: one with all-purpose flour, one with beaten eggs, and one with breadcrumbs.\n4. Dredge each veal cutlet in the flour, shaking off any excess.\n5. Dip the floured cutlets in the beaten eggs, allowing any excess to drip off.\n6. Coat the cutlets in breadcrumbs, pressing gently to adhere.\n7. Heat vegetable oil in a large skillet over medium-high heat.\n8. Fry the breaded veal cutlets in the hot oil for about 3-4 minutes on each side, or until golden brown and cooked through.\n9. Drain the cotolette on paper towels to remove excess oil.\n10. Serve the cotoletta alla Milanese hot, garnished with lemon wedges."
                  }
            ]

            module.exports = recipesData;