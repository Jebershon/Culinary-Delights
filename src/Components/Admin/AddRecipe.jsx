import axios from 'axios';
import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row
} from 'react-bootstrap';
import '..//Home.css';
import '..//external.css';

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

const measuringUnits = ["g", "kg", "liters","ml", "pieces", "tbsp"];

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
  const [customIngredients, setCustomIngredients] = useState([]);
  const [preparationSteps, setPreparationSteps] = useState(['']); // Array to store preparation steps
  const [servings, setServings] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  let [count, setCount] = useState(0); // New state variable for step count
// ----
function incrementCount() {
  setCount((prevCount) => prevCount + 1);
}

function decrementCount() {
  if (count !== 0) {
    setCount((prevCount) => prevCount - 1);
  } else {
    setCount(0);
  }
}

  const handleStepChange = (index, value) => {
    const updatedSteps = [...preparationSteps];
    updatedSteps[index] = value;
    setPreparationSteps(updatedSteps);
}
// ----

const handleAddIngredient = (ingredient) => {
    if (!selectedIngredients.some((item) => item.name === ingredient)) {
      setSelectedIngredients([
        ...selectedIngredients,
        { name: ingredient, quantity: '', measuringUnit: measuringUnits[0] },
      ]);
    }
}

const handleRemoveIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (item) => item.name !== ingredient
    );
    setSelectedIngredients(updatedIngredients);
}

const handleUnitChange = (ingredient, selectedUnit) => {
    const updatedIngredients = selectedIngredients.map((item) => {
      if (item.name === ingredient) {
        return { ...item, measuringUnit: selectedUnit };
      }
      return item;
    });
    setSelectedIngredients(updatedIngredients);
}

const handleAddCustomIngredient = () => {
    setCustomIngredients([
      ...customIngredients,
      { name: '', quantity: '', measuringUnit: measuringUnits[0] },
    ]);
}
  
const handleRemoveCustomIngredient = (index) => {
    const updatedCustomIngredients = [...customIngredients];
    updatedCustomIngredients.splice(index, 1);
    setCustomIngredients(updatedCustomIngredients);
}

const handleAddRecipe = (e) => {
    e.preventDefault();
    const totalPrepTime = parseInt(prepTime) || 0;
    const totalCookTime = parseInt(cookTime) || 0;
  
    const ingredientsWithQuantity = [
      ...selectedIngredients,
      ...customIngredients,
    ].map((ingredient, index) => ({
      name: ingredient.name,
      quantity: ingredient.quantity,
      measuringUnit: ingredient.measuringUnit,
    }));
  
    const totalTime = totalPrepTime + totalCookTime;
    const recipeData = {
      name,
      description,
      isVegetarian,
      ingredients: ingredientsWithQuantity,
      steps: preparationSteps, // Adjust the field name to match your MongoDB schema
      servings,
      prepTime: totalPrepTime,
      cookTime: totalCookTime,
      totalTime:totalTime
    };
  
    console.log("Recipe Data:", recipeData);
  
    axios.post('https://culinary-delights-backend.onrender.com/AddRecipe', recipeData)
      .then(result => {
        console.log(result);
        alert("Recipe Added Successfully");
      })
      .catch(err => console.log(err));
      setName('');
      setDescription('');
      setIsVegetarian(false);
      setSelectedIngredients([]);
      setCustomIngredients([]);
      setPreparationSteps('');
      setServings('');
      setCount(0);
      setPrepTime('');
      setCookTime('');
}  

  return (
    <div>
      <Container>
      <Card  className='Admincard-bg'>
      <Card.Header><h1 style={{ fontVariant:"small-caps"}}>Recipe Dashboard</h1></Card.Header>
      <Card.Body>
      <Row>
        <Form onSubmit = {handleAddRecipe}>
        <InputGroup className="mb-3">
        <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps"}}>Recipe's Title</Form.Label></InputGroup.Text>
          <Form.Control
            inline
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='rem-border'
            required
          />
          </InputGroup>

          <InputGroup className="mb-3">
          <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps"}}>Description</Form.Label></InputGroup.Text>
          <Form.Control
            inline
            as="textarea"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='rem-border'
            required
          />
          </InputGroup>

          <br/>

          <h2><label style={{ fontVariant:"small-caps"}}>Is Vegetarian</label></h2>
          <div>
          <CustomCheckbox
            checked={isVegetarian}
            onChange={() => setIsVegetarian(!isVegetarian)}
            />
          </div>

          <br/>

          <h2><label style={{ fontVariant:"small-caps"}}>Ingredients</label></h2>
   
          <Container>
          <Row>
            {availableIngredients.map((ingredient) => (
              <Col key={ingredient} xs={3} className="mb-2">
                <Button
                  variant="outline-warning"
                  style={{ borderRadius: "16px", width: "100%" }}
                  onClick={() => handleAddIngredient(ingredient)}
                >
                  {ingredient}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>


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
            <InputGroup className="mb-3" style={{ fontVariant:"small-caps" }}>
            <InputGroup.Text><Form.Label style={{width:"auto"}}>Custom Ingredient</Form.Label></InputGroup.Text>
            <Button  variant='warning' onClick={handleAddCustomIngredient}>Add Custom Ingredient</Button>
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
                            className='rem-border'
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
                          className='rem-border'
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
           <h2><label style={{ fontVariant:"small-caps"}}>Step by Step Instructions</label></h2>
            <div>
                <h3><Form.Label>Step Count:</Form.Label></h3>
                <InputGroup className="mb-3 input-group">
                <Button  variant='warning' id="button-addon1" onClick={decrementCount}>-</Button>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    style={{width:"20%"}}
                    className="quantity-field rem-border"
                    value={count}/>
                <Button  variant='warning' id="button-addon2" onClick={incrementCount}>+</Button>
                </InputGroup>
              </div>

            {/* Dynamically generate input fields based on step count */}
            {[...Array(count)].map((_, index) => (
              <InputGroup key={index} className="mb-3">
                <InputGroup.Text>
                  <Form.Label style={{ fontVariant:"small-caps", width: "150px" }}>
                    Step {index + 1}
                  </Form.Label>
                </InputGroup.Text>
                <Form.Control
                  type='text'
                  rows={3}
                  placeholder={`Enter preparation step ${index + 1}`}
                  className='rem-border'
                  value={preparationSteps[index]}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                />
              </InputGroup>
            ))}

          <InputGroup className="mb-3">
          <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps",width:"150px" }}>
            Servings
          </Form.Label>
          </InputGroup.Text>
          <Form.Control
            type="number"
            className='rem-border'
            placeholder="Enter number of servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
          </InputGroup>

          <Row>
              <Col lg={4}>
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps",width:"150px"}}>
                Prep Time (min)
                </Form.Label>
                </InputGroup.Text>
                <Form.Control
                type="number"
                className='rem-border'
                placeholder="Enter preparation time"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                />
                </InputGroup>
              </Col>

              <Col lg={4}>
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps",width:"150px"}}>Cooking Time (min)</Form.Label></InputGroup.Text>
                <Form.Control
                type="number"
                className='rem-border'
                placeholder="Enter cooking time"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}/>
                </InputGroup>
              </Col>

              <Col lg={4}>
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps",width:"150px"}}>Total Time (min)</Form.Label></InputGroup.Text>
                <Form.Control
                type="number"
                className='rem-border'
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
          <Button type='submit'  variant="warning" style={{width:"100%"}}>Add Recipe</Button>
          </Col>
          <Col></Col>
          </Row>

        </Form>
      </Row>
      </Card.Body>
      </Card>
      </Container>
      </div>
  );
}
