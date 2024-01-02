import { Container } from "react-bootstrap";

function Contactus(){
    return(
                    <div>
                    <Container className="Contact-card">
                    <div class="form-container">
                    <form class="form">
                        <div class="form-group">
                        <label for="email">Email</label>
                        <input required="" name="email" id="email" type="text"/>
                        </div>
                        <div class="form-group">
                        <label for="textarea">How Can We Help You?</label>
                        <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
                        </div>
                        <center><button type="submit" class="form-submit-btn">Submit</button></center>
                    </form>
                    </div>
                    </Container>
                    </div>
    );
}
export default Contactus;