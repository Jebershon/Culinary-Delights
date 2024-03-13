import { Delete } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router';
import '..//Home.css';
import '..//external.css';

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

export default function UpdateRecipe() {
  const{id} = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [Ingredients, setIngredients] = useState([]);
  const [preparationSteps, setPreparationSteps] = useState(['']); // Array to store preparation steps
  const [servings, setServings] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  let [count, setCount] = useState(0); // New state variable for step count
// ----
useEffect(() => {
  axios.get('https://culinary-delights-backend.onrender.com/FindRecipe/' + id)
    .then(result => {
      const { name, description, isVegetarian, ingredients, steps, servings, prepTime, cookTime } = result.data;
      setName(name);
      setDescription(description);
      setIsVegetarian(isVegetarian);
      setIngredients(ingredients || []); // Ensure ingredients is initialized to an empty array if not provided
      setPreparationSteps(steps || ['']); // Ensure preparationSteps is initialized to an array with at least one empty string if not provided
      setServings(servings || '');
      setCount(steps ? steps.length : 0); // Set count based on the number of steps
      setPrepTime(prepTime || '');
      setCookTime(cookTime || '');
    })
    .catch(err => console.log(err));
}, []);


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
    if (!Ingredients.some((item) => item.name === ingredient)) {
      setIngredients([
        ...Ingredients,
        { name: ingredient, quantity: '', measuringUnit: measuringUnits[0] },
      ]);
    }
}

const handleRemoveIngredient = (indexToRemove) => {
  setIngredients(prevIngredients => {
    return prevIngredients.filter((_, index) => index !== indexToRemove);
  });
}

const handleUpdateRecipe = (e) => {
    e.preventDefault();
    const totalPrepTime = parseInt(prepTime) || 0;
    const totalCookTime = parseInt(cookTime) || 0;
  
    const ingredientsWithQuantity = [
      ...Ingredients
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
  
    axios.put('https://culinary-delights-backend.onrender.com/UpdateRecipe/'+id, recipeData)
      .then(result => {
        console.log(result);
        alert("Recipe Updated Successfully");
        navigate("/AdminDash/ViewRecipe");
      })
      .catch(err => console.log(err));
      setName('');
      setDescription('');
      setIsVegetarian(false);
      setIngredients([]);
      setPreparationSteps('');
      setServings('');
      setCount(0);
      setPrepTime('');
      setCookTime('');
}  

  return (
    <div>
      <Container>
      <center>
      <Card  className='Admincard-bg mt-3 mb-3' style={{width:"500px"}}>
      <center><Card.Header><h1 style={{ fontVariant:"small-caps"}}>Update Recipe</h1></Card.Header></center>
      <Card.Body>
      <Row>
        <Form onSubmit = {handleUpdateRecipe}>
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

            <center>
            <InputGroup className="mb-3" style={{ fontVariant:"small-caps" }}>
            <InputGroup.Text><Form.Label style={{width:"auto"}}>Custom Ingredient</Form.Label></InputGroup.Text>
            <Button  variant='warning' onClick={handleAddIngredient}>Add Custom Ingredient</Button>
            </InputGroup>
            </center>

            <Row>
                <Col lg={12}>
                  {Ingredients.map((Ingredient, index) => (
                      <div key={index} className="mb-3">
                        <InputGroup>
                          <InputGroup.Text>Name</InputGroup.Text>
                          <Form.Control
                            type="text"
                            className='rem-border'
                            placeholder="Enter Ingredient Name"
                            required
                            value={Ingredient.name}
                            onChange={(e) => {
                              const updatedIngredients = [...Ingredients];
                              updatedIngredients[index].name = e.target.value;
                              setIngredients(updatedIngredients);
                            }}
                          />
                          <InputGroup.Text>Quantity</InputGroup.Text>
                          <Form.Control
                          type="text"
                          className='rem-border'
                          placeholder={`Enter quantity for ${Ingredient.name}`}
                          required
                          value={Ingredient.quantity}
                          onChange={(e) => {
                            const updatedIngredients = [...Ingredients];
                            updatedIngredients[index].quantity = e.target.value;
                            setIngredients(updatedIngredients);
                          }}
                          id={`quantity-${index}`}/>
                         <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-warning"
                            title={Ingredient.measuringUnit}
                            onSelect={(selectedUnit) => {
                              const updatedIngredients = [...Ingredients];
                              updatedIngredients[index].measuringUnit = selectedUnit;
                              setIngredients(updatedIngredients);
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
                            onClick={() => handleRemoveIngredient(index)}
                          >
                            <Delete/>
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
                <InputGroup className="mb-3 input-group" required>
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
            required
          />
          </InputGroup>

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
                required
                />
                </InputGroup>
         
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps",width:"150px"}}>Cooking Time (min)</Form.Label></InputGroup.Text>
                <Form.Control
                type="number"
                className='rem-border'
                placeholder="Enter cooking time"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                required/>
                </InputGroup>
   
              <InputGroup className="mb-3">
              <InputGroup.Text><Form.Label style={{ fontVariant:"small-caps",width:"150px"}}>Total Time (min)</Form.Label></InputGroup.Text>
                <Form.Control
                type="number"
                className='rem-border'
                placeholder="Total time is calculated automatically"
                value={Number(prepTime) + Number(cookTime)}
                readOnly/>
                </InputGroup>

          <br />
          <center>
          <Button type='submit'  variant="warning" style={{width:"100%"}}>Update Recipe</Button>
          </center>
        </Form>
      </Row>
      </Card.Body>
      </Card>
      </center>
      </Container>
      </div>
  );
}
