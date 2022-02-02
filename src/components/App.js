import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import postToApi from "../services/api";
import ls from "../services/local-storage";

import "../styles/App.scss";

import Header from "./Header";
import Footer from "./Footer";
import Form from "./form/Form";
import Preview from "./preview/Preview";
import Landing from "./Landing";

function App() {
  //               STATES                 //
  const [data, setData] = useState(
    ls.get("data", {
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: "1",
    })
  );
  // state for collapsables
  // const [collapsables, setCollapsabes] = useState({
  //   designCollapsable: false,
  //   fillCollapsable: true,
  //   shareCollapsable: true,
  // });

  // state to save data from api
  const [cardData, setCardData] = useState("");
  // state for url
  const [cardLink, setCardLink] = useState("hidden");
  // const [cardUrl, setCardUrl] = useState("");

  // share states
  const [toShare, setToShare] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [shareSuccess, setShareSuccess] = useState(false);

  // collapsable states
  const [designIsOpen, setDesignIsOpen] = useState(true);
  const [fillIsOpen, setFillIsOpen] = useState(false);
  const [shareIsOpen, setShareIsOpen] = useState(false);
  //                 EFFECTS                 //
  useEffect(() => {
    ls.set("data", data);
  }, [data]);

  //               FUNCTIONS               //
  // Función para los colapsables
  const handleClickCollapsables = (fieldset) => {
    if (fieldset === "Diseña") {
      setDesignIsOpen(!designIsOpen);
      setFillIsOpen(false);
      setShareIsOpen(false);
    } else if (fieldset === "Rellena") {
      setFillIsOpen(!fillIsOpen);
      setDesignIsOpen(false);
      setShareIsOpen(false);
    } else if (fieldset === "Comparte") {
      setShareIsOpen(!shareIsOpen);
      setDesignIsOpen(false);
      setFillIsOpen(false);
    }
  };
  // Función api: ejecutamos la función declarada en api.js (postToApi)
  // recibe dos parámetros -> el primero es para los datos del usuario y el segundo es para el url que se crea
  {
    /*const handleApi = (data, cardUrl) => { 
    postToApi(data, cardUrl).then((response) => {
      setApiData(response); // modificamos la variable de estado que guarda los datos del api
    });
  }; */
  }
  {
    /*
  const handleShare = (ev) => { 
    ev.preventDefault();
    postToApi(data).then((cardData) => {
      console.log(cardData);
      setCardData(cardData.cardURL); // modificamos la variable de estado que guarda los datos del api
    });
  };*/
  }

  useEffect(() => {
    if (toShare) {
      postToApi(data).then((response) => {
        setShareUrl(response.cardURL);
        setShareSuccess(response.success);
        setToShare(false);
      });
    }
  }, [toShare]);

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  // };

  {
    /* Metemos en una constante el input sobre el que está actuando la usuaria con el ev.currentTarget.name. Llamamos a esa constante para cambiar el valor de la propiedad del objeto data */
  }
  const handleInput = (name, value) => {
    const inputChanged = name;
    setData({
      ...data,
      [inputChanged]: value,
    });
  };
  {
    /* Al hacer click en el reset, llamamos a handleReset que vacía todas las propiedades del objeto */
  }
  const handleReset = () => {
    setData({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: "1",
    });
  };

  const updateAvatar = (avatar) => {
    setData({
      ...data,
      photo: avatar,
    });
  };

  const handleClickShareBtn = () => {
    setToShare(true);
  };

  const isDisabled = () => {
    if (
      data.name.length === 0 ||
      data.job.length === 0 ||
      data.email.length === 0 ||
      data.linkedin.length === 0 ||
      data.github.length === 0 ||
      data.photo.length === 0
    ) {
      return true;
    }
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/designCard">
          <main className="cards__main--wrapper">
            <Header />
            <section className="card__wrapper">
              <Preview data={data} handleReset={handleReset} />
              <Form
                data={data}
                designIsOpen={designIsOpen}
                fillIsOpen={fillIsOpen}
                shareIsOpen={shareIsOpen}
                handleClickCollapsables={handleClickCollapsables}


                shareUrl={shareUrl}
                shareSuccess={shareSuccess}
                isDisabled={isDisabled}
                handleInput={handleInput}
                updateAvatar={updateAvatar}
                handleClickShareBtn={handleClickShareBtn}

                // cardData={cardData}
                // cardLink={cardLink}
                // handleShare={handleShare}

                //cardUrl={cardUrl}
                // setCardUrl={setCardUrl}
                // postToApi={postToApi}
              />
            </section>
            <Footer />
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
