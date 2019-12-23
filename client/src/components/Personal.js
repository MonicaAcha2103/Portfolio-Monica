import React from 'react';
import  {Table} from 'reactstrap';
 const Personal = () => (
    <div className='info'><br/>
    <h1 className="subtitle ">Personal Information</h1><br/><br/>
    <Table size="xl" responsive bordered  >
      <tbody>
        <tr>
          <td><h3 className="info-text">Position</h3></td>
          <td><h3 className="info-text">Member Technical Staff</h3></td>
        </tr>
        <tr>
        <td><h3 className="info-text">Experience</h3></td>
        <td><h3 className="info-text">1.6 years</h3></td>
      </tr>
        
        <tr>
        <td><h3 className="info-text">Nationality </h3></td>
        <td><h3 className="info-text">Indian</h3></td>
        </tr>
        <tr>
        <td><h3 className="info-text">Location </h3></td>
        <td><h3 className="info-text">Chennai, India</h3></td>
        </tr>
        <tr>
        <td><h3 className="info-text">Hobbies </h3></td>
        <td><h3 className="info-text">Listening to music, Painting</h3></td>
        </tr>
      </tbody>
    </Table>
    </div>
 );
export default Personal;