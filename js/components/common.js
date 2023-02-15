const readFile = (file) => {
  return fetch(file)
    .then(response => response.text());
}

//add new weeks here
const fileNames = ["articles/w6.txt"];
const weekList=["w6"];


for (const fileName of fileNames) {
  readFile(fileName)
    .then((fileContent) => {

      for(let i=0;i<weekList.length;i++){
        document.getElementById(weekList[i]).innerHTML=fileContent
      }

    });
}



"use strict";

const Header = () => {
  return /*#__PURE__*/React.createElement("header", {
    class: "flex flex-column"
  }, /*#__PURE__*/React.createElement("h1", null, "IAT336 Final Project Journal"), /*#__PURE__*/React.createElement("div", {
    class: "flex flex-row"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Team number")), /*#__PURE__*/React.createElement("p", null, "name"), /*#__PURE__*/React.createElement("p", null, "name"), /*#__PURE__*/React.createElement("p", null, "name"), /*#__PURE__*/React.createElement("p", null, "name")));
};
const NavArticle = () => {
  return /*#__PURE__*/React.createElement("nav", {
    class: "flex flex-row nav-article"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#w6"
  }, "Week 6")

  );
};
const SectionArticle = props => {
  return /*#__PURE__*/React.createElement("section", {
    class: "flex flex-column section-article"
  }, /*#__PURE__*/React.createElement("div", {
    class: "flex flex-column",
    id: props.id
  }));
};