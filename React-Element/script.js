// const container = React.createElement(
//     "div",
//     { className: "container", id: "container" },
//     [
//       React.createElement("section", { key: 1 }, [
//         React.createElement(
//           "p",
//           { key: 1 },
//           "The library for web and native user interfaces"
//         ),
//         React.createElement("img", {
//           key: 2,
//           style: { width: "200px", border: "4px solid black" },
//           src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//         }),
//       ]),
//       React.createElement(
//         "form",
//         { key: 2 },
//         [
//           React.createElement("div", { key: 1, className: "input-group" }, [
//             React.createElement("label", { htmlFor: "username" }, "username"),
//             React.createElement("input", { id: "username" }),
//           ]),
//           React.createElement("div", { key: 2, className: "input-group" }, [
//             React.createElement("label", { htmlFor: "password" }, "password"),
//             React.createElement("input", { id: "password", type: "password" }),
//           ])
//         ]
//       ),
//     ]
//   );
  


        const h2= <h2> Hello jsx </h2>
  const root = ReactDOM.createRoot(document.querySelector("#root"));
//   root.render(container);
  root.render(h2);

  

