//App.js File 
import React, { useEffect, useState, useRef } from 'react'; 
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

const Example = () => { 
    const [data, setData] = useState([]);

    useEffect(() => {
          const response = axios.get('http://localhost:8080/getUser').then((response) => {
            console.log(response.data.data.data);
          setData(response?.data?.data?.data)

          }).catch((error) => {
            console.log(error);
          });
          
      },[1]);

      const componentRef = useRef();
      const handlprint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "emp-data",
      });

	return ( <>
		<div ref={componentRef}> 
            {/* <button onClick={fetchPdf}>hhh</button> */}
			<table class="table">
  <thead>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>

    </tr>
  </thead>
  <tbody>
    {data?.map((row,i)=>(
        <tr>
        <td>{i+1}</td>
        <td>{row?.firstName}</td>
        <td>{row?.lastName}</td>
        <td>{row?.number?.number}</td>
        <td>{row?.address?.address}</td>
</tr>

    ))}
  </tbody>
</table>
		</div> 

        <button className='btn btn-success btn-lg p-2' onClick={handlprint}> Download Pdf</button>
        </>
	); 
} 
export default Example;
