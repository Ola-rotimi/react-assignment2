import { useEffect, useState } from "react";
import CreateProfile from "../components/CreateProfile";
import axios from "axios";

export default function Data() {
  const [detail, setDetail] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((res) => {
        setDetail(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);


  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (<>
  <div className="profile">
    {detail.map(CreateProfile)}
  </div>
  <div className="pagination">
    <button onClick={handlePrev} disabled={page === 1}>
      Prev
    </button>
    
    <button onClick={handleNext} disabled={page === 10}>
      Next
    </button>
  </div>
  </>);
  
}
