import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./DataLoading.css";

const ListItem = (props) => {
  return (
    <li>
      <img src={props.image} />
    </li>
  );
};

const DataLoading = () => {
  const [data, setData] = useState([]);
  const unsplash_client =
    "8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d";
  const numberOfPhotos = 5;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    unsplash_client;

  const getData = () => {
    // try {
    //   const data = await fetch(url).promise();
    //   console.log(data.json());
    //   setData(data.json());
    // } catch (error) {
    //   console.log(error.message);
    // }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));

    // axios
    // XMLHTTPREQUEST
  };

  //   useEffect(() => {
  //     if (data == null) {
  //       getData();
  //     }
  //   }, [data]);

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Button onClick={(e) => getData()} color="primary">
              Get data from API
            </Button>
          </div>

          {/* conditional rendering */}
          <div>
            <ul className="photo-grid">
              {data &&
                data.map((item, idx) => {
                  return <ListItem key={idx} image={item.urls.small} />;
                })}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// [
//   {
// id: 123,
// url:{
//   small: "sdhfjsdfsdkf.com",
//   large: "sdfsd"
// }
// photourl: ""
//   },
//   {
// id: 123,
// photourl: ""
//   },
//   {
// id: 123,
// photourl: ""
//   },
//   {
// id: 123,
// photourl: ""
//   },
//   {

//   }
// ]

export default DataLoading;
