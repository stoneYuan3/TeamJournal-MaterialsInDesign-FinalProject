"use strict";

const App = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(NavArticle, null),

   /*#__PURE__*/React.createElement("div", {
    class: "flex flex-column",
    id: "section-main"
  }, /*#__PURE__*/React.createElement(SectionArticle, {
    id: "w6"
  })
  //add new weeks here
  )

  );
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));