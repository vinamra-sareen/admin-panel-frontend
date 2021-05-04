const Welcome = ({ location }) => {

  let urlParams = new URLSearchParams(location.search);
  const module_id = urlParams.get('module_id');

  return <h1>
    {module_id}
  </h1>;
};

export default Welcome;
