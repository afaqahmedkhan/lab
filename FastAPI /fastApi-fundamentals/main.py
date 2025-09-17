from fastapi import FastAPI

app = FastAPI()

SOUPS = [
    {
        'id': 1, 
        'name': 'Tomato Bisque', 
        'type': 'cream', 
        'spicy_level': 1,
        'vegetarian': True,
        'vegan': False,
        'gluten_free': True,
        'ingredients': ['tomatoes', 'cream', 'basil', 'onion', 'vegetable stock'],
        'origin': 'France',
        'prep_time': 45,
        'calories_per_serving': 320,
        'serving_temp': 'hot',
        'seasonal': 'all-year',
        'allergens': ['dairy']
    },
    {
        'id': 2, 
        'name': 'French Onion', 
        'type': 'clear', 
        'spicy_level': 0,
        'vegetarian': False,
        'vegan': False,
        'gluten_free': False,
        'ingredients': ['onions', 'beef stock', 'gruyere cheese', 'baguette'],
        'origin': 'France',
        'prep_time': 60,
        'calories_per_serving': 380,
        'serving_temp': 'hot',
        'seasonal': 'winter',
        'allergens': ['dairy', 'gluten']
    },
    {
        'id': 3, 
        'name': 'Thai Tom Yum', 
        'type': 'clear', 
        'spicy_level': 4,
        'vegetarian': False,
        'vegan': False,
        'gluten_free': True,
        'ingredients': ['lemongrass', 'shrimp', 'mushrooms', 'lime', 'fish sauce', 'chili'],
        'origin': 'Thailand',
        'prep_time': 30,
        'calories_per_serving': 210,
        'serving_temp': 'hot',
        'seasonal': 'all-year',
        'allergens': ['shellfish', 'fish']
    }
]

@app.get('/')
async def index() -> dict[str,str]:
    return {'hello': 'world'}

@app.get('/soups')
async def soups() -> list[dict]:
    return SOUPS


@app.get('/about')
async def about() -> str:
    return 'an exceptional soup company'

