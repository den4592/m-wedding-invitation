import { useEffect, useState } from "react";
import GuestData from "./GuestData";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const url = "http://localhost:3001/api";

const GuestBook = () => {
  const [guestText, setGuestText] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, { name: name, text: text })
      .then((resp) => {
        console.log("post", resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(url)
      .then((resp) => {
        let data = resp.data;
        console.log("get", data);
        setGuestText(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setText("");
  };

  //data fetch
  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        let data = resp.data;
        console.log("get", data);
        setGuestText(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="section6 section">
      <div className="container">
        <div className="guest-book">
          <h2>방명록 </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="성함을 입력해 주세요."
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="내용을 입력해 주세요."
              cols="30"
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="submit-btn">추가하기</button>
          </form>
          <GuestData guestData={guestText} />
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
