import { CAMPSITES } from "../../app/shared/CAMPSITES.js";
import { Row, Col} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
    return(
        <Row>
            {CAMPSITES.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default CampsitesList;