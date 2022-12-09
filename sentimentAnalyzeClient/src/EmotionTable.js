import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      const { emotions } = this.props
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              Object.entries(emotions).map(([key, value]) => (
                <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;