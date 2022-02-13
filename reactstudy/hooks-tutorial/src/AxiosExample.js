import axios from 'axios';
import { useState } from 'react';

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const onclick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
    // await axios
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => {
    //     setData(response.data);
    //   });
  };
  return (
    <div>
      <div>
        <button onClick={onclick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default AxiosExample;
