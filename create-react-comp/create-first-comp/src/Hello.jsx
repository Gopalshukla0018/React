function Hello() {
  let myName = "Gopal";
  let Number = 143;
  let secName = () => {
    return "shukla";
  };
  return (
    <h2>
      MessagNo: {Number} i am your master first name is {myName} second name is {secName()}
    </h2>
  );
}

export default Hello;
