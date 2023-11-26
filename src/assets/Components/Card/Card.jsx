import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Tags from "../Tags/Tags";
import './Card.css'



const Galeria = ({titulo,  descripcion, foto, colorBack, colorFont}) => {
    return (
        <div className="pt-4 mx-4 col-3">
            <Card id="card" style={{ width: "20rem" }}>
                <Card.Title className="fs-4 fw-bold text-center">{titulo}</Card.Title>
                <div className="text-center img ">
                    <Card.Img className="img-fluid p-2 mx-auto my-auto " src={foto}/>
                </div>
                <Card.Text className="text-center py-3 fw-bold ">{descripcion}</Card.Text>
                <Tags fondo={colorBack} colorTex={colorFont} />
            </Card>
        </div>
    )
}

export default Galeria