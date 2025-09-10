function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? <span>Buy PRO!</span> : "Fancy Counter"}
    </h1>
  );
}

export default Title;
