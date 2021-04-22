function Person({ person }) {
  return (
    <div>
      <h2>I am {person.name}</h2>
      <h1>age {person.age}</h1>
      <h3>skill: {person.skill}</h3>
    </div>
  );
}

export default Person;
