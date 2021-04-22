import Person from "./Person";
export const NameListAddKey = (props) => {
  const persons = [
    { id: 1, name: "Bruce", age: 30, skill: "React" },
    { id: 2, name: "Clark", age: 25, skill: "Angular" },
    { id: 3, name: "Diana", age: 28, skill: "Vue" },
  ];
  const personList = persons.map((person) => {
    return <Person key={person.id} person={person} />;
  });
  return <div>{personList}</div>;
};
