function Person({ person, index }) {
  return (
    <div>
      <h2>I am {person.name}</h2>
      <h1>age {person.age}</h1>
      <h3>
        skill: {person.skill}
        {index}
      </h3>
    </div>
  );
}

export default Person;
