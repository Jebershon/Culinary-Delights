import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormCheck,
  InputGroup,
  Row
} from 'react-bootstrap';
import './/Home.css';
const availableIngredients = [
  "Chicken pieces",
  "Onion",
  "Tomato",
  "Ginger-garlic paste",
  "Cumin powder",
  "Coriander powder",
  "Garam masala",
  "Turmeric powder",
  "Red chili powder",
  "Yogurt",
  "Fresh cilantro",
  "Vegetable oil",
  "Mutton",
  "Fish",
  "Shrimp",
  "Ghee",
  "Paneer",
  "Cottage Cheese",
  "Yogurt",
  "Buttermilk",
  "Milk Powder",
  "Condensed Milk",
  "Khoya (Mawa)",
  "Amul Cheese",
  "Processed Cheese",
  "Curds",
  "Butter",
  "Cream",
  "Malai",
  "Lassi",
  "Chaas",
  "Rabri",
  "Dahi",
  "Khoa",
  "Kalakand",
  "Shrikhand",
  "Cheese Spread",
  "Labneh",
  "Quark",
  "Whey",
  "Paneer",
  "Cottage Cheese",
  "Egg",
  "Mustard seeds",
  "Cumin seeds",
  "Fenugreek seeds",
  "Cardamom",
  "Cloves",
  "Bay leaves",
  "Cinnamon",
  "Nutmeg",
  "Poppy seeds",
  "Cashews",
  "Almonds",
  "Pistachios",
  "Raisins",
  "Coconut",
  "Coconut milk",
  "Tamarind",
  "Amchoor (Dried Mango Powder)",
  "Kokum",
  "Star anise",
  "Asafoetida (Hing)",
  "Curry leaves",
  "Jaggery",
  "Black salt",
  "Rock salt",
  "Fennel seeds",
  "Black mustard seeds",
  "Ajwain (Carom seeds)",
  "Kasuri Methi (Dried Fenugreek Leaves)",
  "Papad",
  "Saffron",
  "Turmeric leaves",
  "Betel leaves",
  "Bamboo shoots",
  "Drumstick",
  "Jackfruit",
  "Bottle gourd",
  "Tindora (Ivy Gourd)",
  "Ridge gourd",
  "Pointed gourd",
  "Snake gourd",
  "Cluster beans",
  "Yam",
  "Black gram (Urad dal)",
  "Green gram (Moong dal)",
  "Spinach",
  "Potatoes",
  "Cauliflower",
  "Broccoli",
  "Carrots",
  "Bell Peppers",
  "Eggplant",
  "Okra",
  "Cabbage",
  "Onions",
  "Tomatoes",
  "Green Beans",
  "Zucchini",
  "Radish",
  "Mushrooms",
  "Corn",
  "Beets",
  "Lettuce",
  "Pumpkin",
  "Sweet Potatoes",
  "Mango",
  "Banana",
  "Apple",
  "Pineapple",
  "Grapes",
  "Pomegranate",
  "Kiwi",
  "Strawberries",
  "Oranges",
  "Guava",
  "Papaya",
  "Watermelon",
  "Chikoo (Sapota)",
  "Pear",
  "Lychee",
  "Dragon Fruit",
  "Custard Apple"
];

const measuringUnits = ["g", "kg", "liters", "pieces", "tbsp"];

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className={`checkbox-wrapper ${checked ? 'checked' : ''}`} onClick={onChange}>
      <Form.Check
        type="checkbox"
        checked={checked}
        onChange={() => {}}
        style={{ display: 'none' }}
      />
      <svg viewBox="0 0 35.6 35.6">
        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
      <Form.Label className="checkbox-label">{label}</Form.Label>
    </div>
  );
};

export default function AddRecipe() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [customIngredients, setCustomIngredients] = useState([{ name: '', quantity: '', measuringUnit: measuringUnits[0] }]);
  let [count, setCount] = useState(0); // New state variable for step count
  const [preparationSteps, setPreparationSteps] = useState(['']); // Array to store preparation steps
  const [servings, setServings] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
// ----
function incrementCount() {
  count = count + 1;
  setCount(count);
}
function decrementCount() {
if(count!=0){
  count = count - 1;
  setCount(count);
}
else{
    setCount(0);
}
}
  const handleStepChange = (index, value) => {
    const updatedSteps = [...preparationSteps];
    updatedSteps[index] = value;
    setPreparationSteps(updatedSteps);
  };
// ----
  const handleAddIngredient = (ingredient) => {
    if (!selectedIngredients.some((item) => item.name === ingredient)) {
      setSelectedIngredients([
        ...selectedIngredients,
        { name: ingredient, quantity: '', measuringUnit: measuringUnits[0] },
      ]);
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (item) => item.name !== ingredient
    );
    setSelectedIngredients(updatedIngredients);
  };

  const handleUnitChange = (ingredient, selectedUnit) => {
    const updatedIngredients = selectedIngredients.map((item) => {
      if (item.name === ingredient) {
        return { ...item, measuringUnit: selectedUnit };
      }
      return item;
    });
    setSelectedIngredients(updatedIngredients);
  };

  const handleAddCustomIngredient = () => {
    setCustomIngredients([
      ...customIngredients,
      { name: '', quantity: '', measuringUnit: measuringUnits[0] },
    ]);
  };
  
  const handleRemoveCustomIngredient = (index) => {
    const updatedCustomIngredients = [...customIngredients];
    updatedCustomIngredients.splice(index, 1);
    setCustomIngredients(updatedCustomIngredients);
  };

  const handleAddRecipe = () => {
    const totalPrepTime = parseInt(prepTime) || 0;
    const totalCookTime = parseInt(cookTime) || 0;
  
    const ingredientsWithQuantity = [
      ...selectedIngredients,
      ...customIngredients,
    ].map((ingredient, index) => ({
      name: ingredient.name,
      quantity: ingredient.quantity,  // Use the state value directly
      measuringUnit: ingredient.measuringUnit,
    }));
  
    const recipeData = {
      name,
      description,
      isVegetarian,
      ingredients: ingredientsWithQuantity,
      preparationSteps,
      servings,
      prepTime: totalPrepTime,
      cookTime: totalCookTime,
      totalTime: `${totalPrepTime + totalCookTime} minutes`,
    };
  
    console.log("Recipe Data:", recipeData);
  
    // Reset state values
    // setName('');
    // setDescription('');
    // setIsVegetarian(false);
    // setSelectedIngredients([]);
    // setCustomIngredients([{ name: '', quantity: '', measuringUnit: measuringUnits[0] }]);
    // setPreparationSteps('');
    // setServings('');
    // setCount(0);
    // setPrepTime('');
    // setCookTime('');
  };

  <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
    </InputGroup>

  return (
      <Card  className='card-bg'>
      <Card.Header><h1 style={{ fontFamily: "cursive"}}>Recipe Dashboard</h1></Card.Header>
      <Card.Body>
      <Row className='mt-5'>
        <Form>

        <InputGroup className="mb-3">
        <InputGroup.Text><Form.Label style={{ fontFamily: "cursive",width:"150px"}}>Recipe's Title</Form.Label></InputGroup.Text>
          <Form.Control
            inline
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </InputGroup>

          <InputGroup className="mb-3">
          <InputGroup.Text><Form.Label style={{ fontFamily: "cursive",width:"150px"}}>Description</Form.Label></InputGroup.Text>
          <Form.Control
            inline
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          </InputGroup>

          <br/>

          <center>
          <h2><label style={{ fontFamily: "cursive"}}>Is Vegetarian</label></h2>
          <div>
          <CustomCheckbox
            checked={isVegetarian}
            onChange={() => setIsVegetarian(!isVegetarian)}/>
          </div>
          </center>

          <br/>

          <h2><label style={{ fontFamily: "cursive"}}>Ingredients</label></h2>
          <Row>
            {availableIngredients.map((ingredient) => (
              <Col lg={3} className='mt-4 mb-4' key={ingredient}>
                <FormCheck
                  label={ingredient}
                  type="checkbox"
                  id={`ingredient-${ingredient}`}
                  checked={selectedIngredients.some(
                    (item) => item.name === ingredient
                  )}
                  onChange={() => handleAddIngredient(ingredient)}
                />
              </Col>
            ))}
          </Row>

          <Row>
            {selectedIngredients.map((ingredient) => (
              <center>
              <Col key={ingredient.name} lg={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text style={{width:"auto"}}>{ingredient.name}</InputGroup.Text>
                      <Form.Control
                        id={`quantity-${ingredient.name}`}
                        type="text"
                        placeholder={`Enter quantity for ${ingredient.name}`}
                        value={ingredient.quantity}
                        onChange={(e) => {
                          const updatedIngredients = selectedIngredients.map(
                            (item) => {
                              if (item.name === ingredient.name) {
                                return { ...item, quantity: e.target.value };
                              }
                              return item;
                            }
                          );
                          setSelectedIngredients(updatedIngredients);
                        }}
                      />
                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-warning"
                        title={ingredient.measuringUnit}
                        id={`unit-dropdown-${ingredient.name}`}
                      >
                        {measuringUnits.map((unit) => (
                          <Dropdown.Item
                            key={unit}
                            onClick={() =>
                              handleUnitChange(ingredient.name, unit)
                            }
                          >
                            {unit}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                      <Button
                        variant="outline-warning"
                        onClick={() =>
                          handleRemoveIngredient(ingredient.name)
                        }
                      >
                        Remove
                      </Button>
                    </InputGroup>
              </Col>
              </center>
            ))}
          </Row>

            <center>
            <InputGroup className="mb-3" style={{ fontFamily: "cursive" }}>
            <InputGroup.Text><Form.Label style={{width:"auto"}}>Custom Ingredient</Form.Label></InputGroup.Text>
            <Button variant="warning" onClick={handleAddCustomIngredient}>Add Custom Ingredient</Button>
            </InputGroup>
            </center>

            <Row>
                <Col lg={12}>
                  {customIngredients.map((customIngredient, index) => (
                      <div key={index} className="mb-3">
                        <InputGroup>
                          <InputGroup.Text>Name</InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Enter Ingredient Name"
                            value={customIngredient.name}
                            onChange={(e) => {
                              const updatedCustomIngredients = [...customIngredients];
                              updatedCustomIngredients[index].name = e.target.value;
                              setCustomIngredients(updatedCustomIngredients);
                            }}
                          />
                          <InputGroup.Text>Quantity</InputGroup.Text>
                          <Form.Control
                          type="text"
                          placeholder={`Enter quantity for ${customIngredient.name}`}
                          value={customIngredient.quantity}
                          onChange={(e) => {
                            const updatedCustomIngredients = [...customIngredients];
                            updatedCustomIngredients[index].quantity = e.target.value;
                            setCustomIngredients(updatedCustomIngredients);
                          }}
                          id={`quantity-${index}`}/>
                         <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-warning"
                            title={customIngredient.measuringUnit}
                            onSelect={(selectedUnit) => {
                              const updatedCustomIngredients = [...customIngredients];
                              updatedCustomIngredients[index].measuringUnit = selectedUnit;
                              setCustomIngredients(updatedCustomIngredients);
                            }}
                          >
                            {measuringUnits.map((unit) => (
                              <Dropdown.Item key={unit} eventKey={unit}>
                                {unit}
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>

                          <Button
                            variant="outline-warning"
                            onClick={() => handleRemoveCustomIngredient(index)}
                          >
                            Remove
                          </Button>
                        </InputGroup>
                      </div>
                    ))}
                </Col>
            </Row>
           <hr/>
           <h2><label style={{ fontFamily: "cursive"}}>Step by Step Instructions</label></h2>
            <div>
                <h3><Form.Label>Step Count:</Form.Label></h3>
                <InputGroup className="mb-3 input-group">
                <Button variant="warning" id="button-addon1" onClick={decrementCount}>-</Button>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    style={{width:"20%"}}
                    className="quantity-field"
                    value={count}/>
                <Button variant="warning" id="button-addon2" onClick={incrementCount}>+</Button>
                </InputGroup>
              </div>

            {/* Dynamically generate input fields based on step count */}
            {[...Array(count)].map((_, index) => (
              <InputGroup key={index} className="mb-3">
                <InputGroup.Text>
                  <Form.Label style={{ fontFamily: "cursive", width: "150px" }}>
                    Step {index + 1}
                  </Form.Label>
                </InputGroup.Text>
                <Form.Control
                  type='text'
                  rows={3}
                  placeholder={`Enter preparation step ${index + 1}`}
                  value={preparationSteps[index]}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                />
              </InputGroup>
            ))}

          <InputGroup className="mb-3">
          <InputGroup.Text><Form.Label style={{ fontFamily: "cursive",width:"150px" }}>
            Servings
          </Form.Label>
          </InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Enter number of servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
          </InputGroup>

          <Row>
              <Col lg={4}>
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontFamily: "cursive",width:"150px"}}>
                Prep Time (min)
                </Form.Label>
                </InputGroup.Text>
                <Form.Control
                type="number"
                placeholder="Enter preparation time"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                />
                </InputGroup>
              </Col>

              <Col lg={4}>
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontFamily: "cursive",width:"150px"}}>Cooking Time (min)</Form.Label></InputGroup.Text>
                <Form.Control
                type="number"
                placeholder="Enter cooking time"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}/>
                </InputGroup>
              </Col>

              <Col lg={4}>
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontFamily: "cursive",width:"150px"}}>Total Time (min)</Form.Label></InputGroup.Text>
                <Form.Control
                type="number"
                placeholder="Total time is calculated automatically"
                value={Number(prepTime) + Number(cookTime)}
                readOnly/>
                </InputGroup>
              </Col>

          </Row>

          <br />

          <Row>
          <Col></Col>
          <Col lg={4}>
          <Button variant="warning" onClick={handleAddRecipe} style={{width:"100%"}}>Add Recipe</Button>
          </Col>
          <Col></Col>
          </Row>
        </Form>
      </Row>
      </Card.Body>
      </Card>
  );
}
